import fs from "fs";
import path from "path";
import { LeadRecord, LeadStatus, EnquirySubmissionData } from "./types";
import { servicesData } from "../data/services";

const DATA_DIR = path.join(process.cwd(), "data");
const LEADS_FILE = path.join(DATA_DIR, "leads.json");

// Initial seed leads for demonstration / CRM testing
const INITIAL_LEADS: LeadRecord[] = [
  {
    id: "lead_101",
    reference_code: "FHC-2026-7842",
    full_name: "Mrs. Tahira Begum",
    phone: "0300 8541299",
    email: "tahira.family@gmail.com",
    service_id: "elderly-care",
    service_title: "Elderly Care & Caretaker",
    location: "Sector F-7/2, Islamabad",
    preferred_contact_time: "Morning (9 AM - 12 PM)",
    care_requirement: "Assistance required for 82-year-old mother recovering from mild fall. Needs 12-hour day female caretaker for mobility and personal care.",
    consent: true,
    consent_timestamp: new Date(Date.now() - 3600000 * 2).toISOString(),
    status: "REQUIREMENT_REVIEW",
    assigned_to: "Sister Maryam (Care Supervisor)",
    internal_notes: [
      "2 hours ago: Enquiry received via Google Search (UTM: utm_source=google&utm_medium=cpc).",
      "1 hour ago: Phone call made; spoke with son. Patient is ambulatory with walker, needs assistance during daytime."
    ],
    attribution: {
      source_platform: "web",
      landing_page: "/elderly-care-caretaker",
      page_url: "https://firsthealthcare.pk/elderly-care-caretaker",
      referrer: "https://www.google.com/",
      utm_source: "google",
      utm_medium: "cpc",
      utm_campaign: "elderly_care_isb",
      gclid: "Cj0KCQjwn8_mBhC...test",
      visitor_id: "vis_87418921a",
      session_id: "ses_9921bva",
    },
    created_at: new Date(Date.now() - 3600000 * 2).toISOString(),
    updated_at: new Date(Date.now() - 3600000 * 1).toISOString(),
  },
  {
    id: "lead_102",
    reference_code: "FHC-2026-7843",
    full_name: "Brig (R) Tariq Mahmood",
    phone: "0333 5198274",
    email: "tariq.m@yahoo.com",
    service_id: "physiotherapy",
    service_title: "Physiotherapy at Home",
    location: "DHA Phase 2, Sector B, Rawalpindi",
    preferred_contact_time: "Afternoon (12 PM - 4 PM)",
    care_requirement: "Post Total Knee Replacement (TKR) rehabilitation. Discharged from Shifa 3 days ago. Needs DPT home visits 4 times a week.",
    consent: true,
    consent_timestamp: new Date(Date.now() - 3600000 * 5).toISOString(),
    status: "CONFIRMED",
    assigned_to: "Dr. Hamza (Lead Physiotherapist)",
    internal_notes: [
      "5 hours ago: Received via WhatsApp referral link.",
      "4 hours ago: Requirement confirmed. Surgeon protocol reviewed. Dr. Hamza assigned for initial assessment tomorrow 11 AM."
    ],
    attribution: {
      source_platform: "web",
      landing_page: "/physiotherapy-at-home",
      page_url: "https://firsthealthcare.pk/physiotherapy-at-home",
      referrer: "direct",
      visitor_id: "vis_44729108b",
      session_id: "ses_330198c",
    },
    created_at: new Date(Date.now() - 3600000 * 5).toISOString(),
    updated_at: new Date(Date.now() - 3600000 * 3).toISOString(),
  },
  {
    id: "lead_103",
    reference_code: "FHC-2026-7844",
    full_name: "Zainab Malik",
    phone: "0321 9543210",
    email: "zainab.malik@outlook.com",
    service_id: "stroke-recovery",
    service_title: "Stroke Recovery & Rehabilitation",
    location: "Bahria Town Phase 4, Rawalpindi",
    preferred_contact_time: "Evening (4 PM - 8 PM)",
    care_requirement: "Father suffered ischemic stroke 2 weeks ago with left-sided hemiplegia. Looking for integrated 24-hour nursing plus regular physical therapy.",
    consent: true,
    consent_timestamp: new Date(Date.now() - 3600000 * 12).toISOString(),
    status: "OPTIONS_DISCUSSED",
    assigned_to: "Care Coordination Desk",
    internal_notes: [
      "Discussed 24hr continuous care package vs 12hr day caretaker + visiting DPT.",
      "Family reviewing schedule and budget; follow-up scheduled for tomorrow."
    ],
    attribution: {
      source_platform: "web",
      landing_page: "/stroke-recovery-rehabilitation",
      page_url: "https://firsthealthcare.pk/stroke-recovery-rehabilitation",
      referrer: "https://m.facebook.com/",
      utm_source: "meta",
      utm_medium: "social",
      utm_campaign: "stroke_rehab_autumn",
      fbclid: "IwAR12903810...",
      visitor_id: "vis_10293847c",
      session_id: "ses_882910d",
    },
    created_at: new Date(Date.now() - 3600000 * 12).toISOString(),
    updated_at: new Date(Date.now() - 3600000 * 8).toISOString(),
  }
];

function ensureFileExists(): void {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
  if (!fs.existsSync(LEADS_FILE)) {
    fs.writeFileSync(LEADS_FILE, JSON.stringify(INITIAL_LEADS, null, 2), "utf8");
  }
}

export function getAllLeads(): LeadRecord[] {
  try {
    ensureFileExists();
    const data = fs.readFileSync(LEADS_FILE, "utf8");
    return JSON.parse(data) as LeadRecord[];
  } catch (error) {
    console.error("Error reading leads file:", error);
    return INITIAL_LEADS;
  }
}

export function saveAllLeads(leads: LeadRecord[]): boolean {
  try {
    ensureFileExists();
    fs.writeFileSync(LEADS_FILE, JSON.stringify(leads, null, 2), "utf8");
    return true;
  } catch (error) {
    console.error("Error saving leads:", error);
    return false;
  }
}

export function createLead(data: EnquirySubmissionData): LeadRecord {
  const leads = getAllLeads();
  const service = servicesData.find(
    (s) => s.id === data.service_id || s.slug === data.service_id
  );
  const serviceTitle = service ? service.title : data.service_id;

  const randomDigits = Math.floor(1000 + Math.random() * 9000);
  const referenceCode = `FHC-2026-${randomDigits}`;

  const newLead: LeadRecord = {
    id: `lead_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
    reference_code: referenceCode,
    full_name: data.full_name.trim(),
    phone: data.phone.trim(),
    email: data.email?.trim() || undefined,
    service_id: data.service_id,
    service_title: serviceTitle,
    location: data.location.trim(),
    preferred_contact_time: data.preferred_contact_time?.trim() || "Anytime during care hours",
    care_requirement: data.care_requirement?.trim() || "No specific notes provided.",
    consent: true,
    consent_timestamp: new Date().toISOString(),
    status: "NEW",
    internal_notes: [
      `Enquiry created on ${new Date().toLocaleString("en-PK", { timeZone: "Asia/Karachi" })} PKT via website lead funnel.`
    ],
    attribution: data.attribution || {},
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString(),
  };

  leads.unshift(newLead);
  saveAllLeads(leads);
  return newLead;
}

export function updateLeadStatus(id: string, status: LeadStatus, note?: string): LeadRecord | null {
  const leads = getAllLeads();
  const leadIndex = leads.findIndex((l) => l.id === id);
  if (leadIndex === -1) return null;

  leads[leadIndex].status = status;
  leads[leadIndex].updated_at = new Date().toISOString();

  if (note && note.trim()) {
    if (!leads[leadIndex].internal_notes) {
      leads[leadIndex].internal_notes = [];
    }
    leads[leadIndex].internal_notes!.unshift(
      `${new Date().toLocaleTimeString("en-PK", { timeZone: "Asia/Karachi" })}: [Status -> ${status}] ${note.trim()}`
    );
  }

  saveAllLeads(leads);
  return leads[leadIndex];
}

export function addLeadNote(id: string, note: string, author: string = "Staff"): LeadRecord | null {
  const leads = getAllLeads();
  const leadIndex = leads.findIndex((l) => l.id === id);
  if (leadIndex === -1) return null;

  if (!leads[leadIndex].internal_notes) {
    leads[leadIndex].internal_notes = [];
  }
  leads[leadIndex].internal_notes!.unshift(
    `${new Date().toLocaleString("en-PK", { timeZone: "Asia/Karachi" })} (${author}): ${note.trim()}`
  );
  leads[leadIndex].updated_at = new Date().toISOString();

  saveAllLeads(leads);
  return leads[leadIndex];
}
