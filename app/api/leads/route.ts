import { NextRequest, NextResponse } from "next/server";
import { getAllLeads, updateLeadStatus, addLeadNote } from "@/lib/storage";
import { LeadStatus } from "@/lib/types";

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status") as LeadStatus | null;
    const service = searchParams.get("service");
    const query = searchParams.get("q")?.toLowerCase();

    let leads = getAllLeads();

    if (status) {
      leads = leads.filter((l) => l.status === status);
    }

    if (service && service !== "all") {
      leads = leads.filter((l) => l.service_id === service);
    }

    if (query) {
      leads = leads.filter(
        (l) =>
          l.full_name.toLowerCase().includes(query) ||
          l.phone.includes(query) ||
          l.reference_code.toLowerCase().includes(query) ||
          l.location.toLowerCase().includes(query)
      );
    }

    return NextResponse.json({
      success: true,
      total: leads.length,
      leads,
    });
  } catch (error) {
    console.error("Error retrieving leads:", error);
    return NextResponse.json(
      { success: false, error: "Failed to retrieve leads" },
      { status: 500 }
    );
  }
}

export async function PATCH(req: NextRequest) {
  try {
    const body = await req.json();
    const { id, status, note, author } = body;

    if (!id) {
      return NextResponse.json(
        { success: false, error: "Lead ID is required" },
        { status: 400 }
      );
    }

    let updatedLead = null;

    if (status) {
      updatedLead = updateLeadStatus(id, status, note);
    } else if (note) {
      updatedLead = addLeadNote(id, note, author || "Staff");
    }

    if (!updatedLead) {
      return NextResponse.json(
        { success: false, error: "Lead not found" },
        { status: 404 }
      );
    }

    return NextResponse.json({
      success: true,
      lead: updatedLead,
    });
  } catch (error) {
    console.error("Error updating lead:", error);
    return NextResponse.json(
      { success: false, error: "Failed to update lead" },
      { status: 500 }
    );
  }
}
