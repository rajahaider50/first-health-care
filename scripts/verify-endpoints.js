// Automated Verification Test for First Health Care APIs and Lead Engine
const { spawn } = require("child_process");
const http = require("http");

function makeRequest(options, postData) {
  return new Promise((resolve, reject) => {
    const req = http.request(options, (res) => {
      let data = "";
      res.on("data", (chunk) => (data += chunk));
      res.on("end", () => {
        try {
          resolve({ status: res.statusCode, body: JSON.parse(data) });
        } catch (e) {
          resolve({ status: res.statusCode, body: data });
        }
      });
    });
    req.on("error", reject);
    if (postData) {
      req.write(typeof postData === "string" ? postData : JSON.stringify(postData));
    }
    req.end();
  });
}

async function runTests() {
  console.log("Starting Next.js server on port 3005 for endpoint verification...");

  const server = spawn("npx", ["next", "start", "-p", "3005"], {
    cwd: process.cwd(),
    stdio: "pipe",
  });

  server.stdout.on("data", (d) => console.log(`[Next.js stdout]: ${d.toString().trim()}`));
  server.stderr.on("data", (d) => console.error(`[Next.js stderr]: ${d.toString().trim()}`));

  // Wait for server to accept connections
  console.log("Waiting for server to become ready...");
  let ready = false;
  for (let i = 0; i < 30; i++) {
    await new Promise((r) => setTimeout(r, 1000));
    try {
      await makeRequest({ hostname: "127.0.0.1", port: 3005, path: "/api/leads", method: "GET" });
      ready = true;
      break;
    } catch (e) {
      // not yet ready
    }
  }

  if (!ready) {
    server.kill("SIGTERM");
    throw new Error("Server failed to become ready in 30 seconds");
  }

  console.log("Server is ready! Running test suite...");

  try {
    console.log("\n[Test 1] Testing GET /api/leads...");
    const leadsRes = await makeRequest({
      hostname: "127.0.0.1",
      port: 3005,
      path: "/api/leads",
      method: "GET",
    });
    console.log(`Status: ${leadsRes.status}`);
    console.log(`Success: ${leadsRes.body.success}, Total initial leads: ${leadsRes.body.total}`);
    if (leadsRes.status !== 200 || !leadsRes.body.success) {
      throw new Error("Test 1 failed");
    }

    console.log("\n[Test 2] Testing POST /api/enquiry with valid Pakistani phone and attribution...");
    const enquiryRes = await makeRequest(
      {
        hostname: "127.0.0.1",
        port: 3005,
        path: "/api/enquiry",
        method: "POST",
        headers: { "Content-Type": "application/json" },
      },
      {
        full_name: "Dr. Asim Farooq",
        phone: "0304 5121772",
        email: "asim.farooq@example.com",
        service_id: "home-nursing",
        location: "Sector F-10/3, Islamabad",
        preferred_contact_time: "Morning (9 AM – 12 PM)",
        care_requirement: "Post-cholecystectomy surgical wound care and vitals monitoring for 5 days.",
        consent: true,
        attribution: {
          utm_source: "google",
          utm_medium: "cpc",
          utm_campaign: "home_nursing_islamabad",
          gclid: "test_click_id_12345",
          landing_page: "/home-nursing-care",
        },
      }
    );
    console.log(`Status: ${enquiryRes.status}`);
    console.log(`Result: Reference Code = ${enquiryRes.body.lead?.reference_code}, Status = ${enquiryRes.body.lead?.status}`);
    if (enquiryRes.status !== 201 || !enquiryRes.body.lead?.reference_code) {
      throw new Error("Test 2 failed");
    }

    const createdLeadId = enquiryRes.body.lead.id;

    console.log("\n[Test 3] Testing PATCH /api/leads to update workflow status and internal note...");
    const updateRes = await makeRequest(
      {
        hostname: "127.0.0.1",
        port: 3005,
        path: "/api/leads",
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
      },
      {
        id: createdLeadId,
        status: "CONFIRMED",
        note: "Initial assessment scheduled. Family confirmed 12h day shift.",
      }
    );
    console.log(`Status: ${updateRes.status}`);
    console.log(`Updated Lead Status: ${updateRes.body.lead?.status}`);
    if (updateRes.status !== 200 || updateRes.body.lead?.status !== "CONFIRMED") {
      throw new Error("Test 3 failed");
    }

    console.log("\n[Test 4] Testing anti-spam honeypot defense in POST /api/enquiry...");
    const spamRes = await makeRequest(
      {
        hostname: "127.0.0.1",
        port: 3005,
        path: "/api/enquiry",
        method: "POST",
        headers: { "Content-Type": "application/json" },
      },
      {
        full_name: "Spam Bot",
        phone: "03001234567",
        service_id: "home-nursing",
        location: "Nowhere",
        consent: true,
        honeypot: "http://spam-link.ru", // Bot trap
      }
    );
    console.log(`Status: ${spamRes.status} (Expected 400 rejection)`);
    if (spamRes.status !== 400) {
      throw new Error("Test 4 failed: Honeypot did not reject spam");
    }

    console.log("\n============================================");
    console.log("ALL VERIFICATION TESTS PASSED WITH 100% SUCCESS!");
    console.log("============================================\n");
  } catch (err) {
    console.error("Test execution failed:", err);
    process.exitCode = 1;
  } finally {
    server.kill("SIGTERM");
  }
}

runTests();
