import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import FAQAccordion from "@/components/FAQAccordion";
import { generalFAQs } from "@/data/faqs";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Frequently Asked Questions (FAQs) | First Health Care",
  description:
    "Common questions answered about home nursing, elderly care, charges, staff availability, and service coverage in Islamabad and Rawalpindi.",
  alternates: {
    canonical: "/faqs",
  },
};

export default function FAQsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-900 via-care-navy to-slate-900 text-white pt-14 pb-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-900/60 border border-brand-700/60 text-brand-300 text-xs font-mono uppercase tracking-wider mb-4">
              KNOWLEDGE BASE &amp; CLARITY
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 font-sans text-white">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed">
              Find transparent answers about healthcare coordination, availability reviews, scheduling, fees, and safety policies across Islamabad and Rawalpindi.
            </p>
          </div>
        </div>
      </section>

      {/* Main Accordion */}
      <FAQAccordion faqs={generalFAQs} showCategoryFilter={true} />

      {/* Still Have Questions CTA Form */}
      <EnquiryForm
        formTitle="Have a Question Not Answered Above?"
        formSubtitle="Our care coordination team is available to assist you. Send us a message or call our care desk directly."
      />
    </>
  );
}
