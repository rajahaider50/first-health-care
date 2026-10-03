import React from "react";
import Hero from "@/components/Hero";
import RequirementBlock from "@/components/RequirementBlock";
import ServiceRouteGrid from "@/components/ServiceRouteGrid";
import BeforeCareBegins from "@/components/BeforeCareBegins";
import CareConversationProcess from "@/components/CareConversationProcess";
import TrustTransparency from "@/components/TrustTransparency";
import PartnerShowcase from "@/components/PartnerShowcase";
import FAQAccordion from "@/components/FAQAccordion";
import EnquiryForm from "@/components/EnquiryForm";

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section */}
      <Hero />

      {/* 2. 'Start with the Requirement' Interactive Card (CARE / FHC-06) */}
      <RequirementBlock />

      {/* 3. 8 Coordinated Care Routes Cards */}
      <ServiceRouteGrid />

      {/* 4. Pre-Deployment Clarity: Before Care Begins */}
      <BeforeCareBegins />

      {/* 5. The 4-Step Process: Care Conversation */}
      <CareConversationProcess />

      {/* 6. Trust & Transparency Principles */}
      <TrustTransparency />

      {/* 7. Diagnostic & Hospital Partners */}
      <PartnerShowcase />

      {/* 8. Frequently Asked Questions Accordion */}
      <FAQAccordion />

      {/* 9. Core Lead Funnel: Care Enquiry Form */}
      <EnquiryForm />
    </>
  );
}
