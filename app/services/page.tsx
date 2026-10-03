import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle2, ShieldAlert, Clock, Phone, MessageCircle } from "lucide-react";
import { serviceCategories } from "@/data/services";
import { siteConfig } from "@/data/siteConfig";
import ServiceRouteGrid from "@/components/ServiceRouteGrid";
import CareConversationProcess from "@/components/CareConversationProcess";
import BeforeCareBegins from "@/components/BeforeCareBegins";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Coordinated Healthcare Services in Islamabad & Rawalpindi",
  description:
    "Explore First Health Care's 8 specialized care routes: home nursing, elderly care, home physiotherapy, psychology, stroke recovery, and post-operative care.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <>
      {/* Header Banner */}
      <section className="bg-gradient-to-b from-slate-900 via-care-navy to-slate-900 text-white pt-14 pb-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-900/60 border border-brand-700/60 text-brand-300 text-xs font-mono uppercase tracking-wider mb-4">
              DIRECTORY / CARE DISCIPLINES
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 font-sans text-white">
              Home Healthcare Services
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Eight distinct care pathways coordinated strictly around patient condition, physician prescriptions, and family schedule across Islamabad, Rawalpindi, DHA, and Bahria Town.
            </p>
            <div className="flex flex-wrap gap-4 text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-400" />
                Verified Clinical Qualifications
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-400" />
                No Instant Checkout
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-400" />
                Charges Confirmed in Advance
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Grid of 8 Services */}
      <ServiceRouteGrid />

      {/* Shift Models Comparison */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="text-xs font-mono uppercase tracking-wider text-brand-800 font-bold mb-2">
              Staffing Flexibility
            </div>
            <h2 className="text-3xl font-extrabold text-care-dark tracking-tight mb-4">
              Care Arrangement Models
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              We align shift hours with your household routines and clinical acuity. Here are the three primary formats:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-brand-800 uppercase block mb-1">
                  Model A
                </span>
                <h3 className="text-lg font-bold text-care-dark mb-2">
                  Targeted Clinical Visits
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  1 to 2 hour focused visits for specific procedures such as aseptic wound dressing changes, Foley catheter insertion/removal, IV antibiotic drips, or Doctor of Physical Therapy sessions.
                </p>
              </div>
              <div className="text-[11px] font-mono text-slate-500 pt-3 border-t border-slate-200">
                Best for: Ambulatory patients &amp; specific procedures
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-brand-800 uppercase block mb-1">
                  Model B
                </span>
                <h3 className="text-lg font-bold text-care-dark mb-2">
                  12-Hour Day / Night Shift
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Continuous bedside attention during critical hours (8 AM – 8 PM or 8 PM – 8 AM). Provides consistent daytime mobility and feeding support, or vigilant nighttime monitoring and bathroom assistance.
                </p>
              </div>
              <div className="text-[11px] font-mono text-slate-500 pt-3 border-t border-slate-200">
                Best for: Older adults &amp; convalescing patients
              </div>
            </div>

            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200 flex flex-col justify-between">
              <div>
                <span className="font-mono text-xs font-bold text-brand-800 uppercase block mb-1">
                  Model C
                </span>
                <h3 className="text-lg font-bold text-care-dark mb-2">
                  24-Hour Dedicated Care
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed mb-4">
                  Around-the-clock supportive care delivered by rotating qualified nurses or live-in caretakers. Ideal for bedbound patients, tracheostomy/Ryle&apos;s tube management, and post-stroke recovery.
                </p>
              </div>
              <div className="text-[11px] font-mono text-slate-500 pt-3 border-t border-slate-200">
                Best for: High dependency &amp; intensive post-ICU recovery
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Before Care Begins & 4-Step Process */}
      <BeforeCareBegins />
      <CareConversationProcess />

      {/* Enquiry Form */}
      <EnquiryForm
        formTitle="Begin Your Care Enquiry"
        formSubtitle="Select a service route, specify your location in Islamabad or Rawalpindi, and our care desk will contact you to review availability and transparent charges."
      />
    </>
  );
}
