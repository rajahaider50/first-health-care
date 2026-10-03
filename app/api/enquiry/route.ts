import { NextRequest, NextResponse } from "next/server";
import { validateEnquiryForm } from "@/lib/validation";
import { createLead } from "@/lib/storage";
import { EnquirySubmissionData } from "@/lib/types";

export async function POST(req: NextRequest) {
  try {
    const body: EnquirySubmissionData = await req.json();

    // 1. Validation & Anti-spam honeypot
    const validation = validateEnquiryForm(body);
    if (!validation.isValid) {
      return NextResponse.json(
        {
          success: false,
          error: "Validation failed",
          errors: validation.errors,
        },
        { status: 400 }
      );
    }

    // 2. Persist lead with reference code
    const newLead = createLead(body);

    // 3. Return sanitized response
    return NextResponse.json(
      {
        success: true,
        message: "Enquiry received successfully",
        lead: {
          id: newLead.id,
          reference_code: newLead.reference_code,
          full_name: newLead.full_name,
          service_title: newLead.service_title,
          status: newLead.status,
          created_at: newLead.created_at,
        },
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error processing enquiry:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Internal care desk processing error. Please call our care desk directly.",
      },
      { status: 500 }
    );
  }
}
