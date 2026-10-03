import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, HeartHandshake, CheckCircle2, MapPin, Phone, MessageCircle, FileText, Users } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import CareConversationProcess from "@/components/CareConversationProcess";
import TrustTransparency from "@/components/TrustTransparency";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "About Us | First Health Care Islamabad & Rawalpindi",
  description:
    "First Health Care is a registered healthcare lead-generation and coordination platform providing qualified home nursing, elderly care, and rehabilitation in Islamabad & Rawalpindi.",
  alternates: {
    canonical: "/about-us",
  },
};

export default function AboutUsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-900 via-care-navy to-slate-900 text-white pt-14 pb-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-900/60 border border-brand-700/60 text-brand-300 text-xs font-mono uppercase tracking-wider mb-4">
              ABOUT OUR ORGANIZATION
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 font-sans text-white">
              Professional, Dependable &amp; Personal Care
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              First Health Care was established to eliminate the confusion, anxiety, and inconsistency that families face when trying to organize home healthcare support for vulnerable loved ones.
            </p>
          </div>
        </div>
      </section>

      {/* Main Narrative */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-7 space-y-6 text-slate-700 text-base leading-relaxed">
              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-brand-800 font-bold block mb-2">
                  Our Mission &amp; Purpose
                </span>
                <h2 className="text-3xl font-extrabold text-care-dark tracking-tight mb-4">
                  Bridging Clinical Care with the Comfort of Home
                </h2>
              </div>

              <p>
                When a family member is discharged from a major hospital following surgery or a stroke, or when an aging parent begins requiring day-to-day assistance, families in Islamabad and Rawalpindi are often left navigating an informal, unregulated marketplace of unverified domestic workers.
              </p>

              <p>
                <strong>First Health Care (Pvt) Ltd</strong> operates as a structured healthcare coordination desk. We verify clinical qualifications, assess patient dependency baselines, structure realistic shift schedules, and maintain open communication with attending physicians.
              </p>

              <div className="p-5 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                <h3 className="text-sm font-bold text-slate-900">
                  Registered Identity &amp; Corporate Accountability
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Registered under Pakistani corporate law with corporate offices in Sector F-8 Markaz, Islamabad, and operational dispatch desks servicing Rawalpindi, DHA Phase 1 &amp; 2, and Bahria Town.
                </p>
              </div>

              <p>
                We do not believe in synthetic marketing or instant e-commerce checkouts for healthcare. Patient wellbeing requires human scrutiny, clinical review, and genuine empathy before any nurse or caretaker arrives at your doorstep.
              </p>
            </div>

            {/* Right sidebar: Philosophy Cards */}
            <div className="lg:col-span-5 space-y-5">
              <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 shadow-sm space-y-4">
                <h3 className="text-lg font-bold text-care-dark pb-2 border-b border-slate-200">
                  Our Operating Principles
                </h3>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-brand-700 shrink-0 mt-1" />
                    <div>
                      <strong className="text-xs text-slate-900 block font-bold">Verified Clinical Credentials</strong>
                      <span className="text-xs text-slate-600">Every nurse, physical therapist, and caretaker undergoes document verification, credential checks, and background assessment.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-brand-700 shrink-0 mt-1" />
                    <div>
                      <strong className="text-xs text-slate-900 block font-bold">Doctor Orders Alignment</strong>
                      <span className="text-xs text-slate-600">We work strictly in alignment with treating doctors&apos; written prescriptions and hospital discharge instructions.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-brand-700 shrink-0 mt-1" />
                    <div>
                      <strong className="text-xs text-slate-900 block font-bold">Transparent Scope &amp; Fees</strong>
                      <span className="text-xs text-slate-600">No hidden costs or unexpected charges. Complete clarity on duties, shift hours, and fees before service confirmation.</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-brand-700 shrink-0 mt-1" />
                    <div>
                      <strong className="text-xs text-slate-900 block font-bold">Local Accountability</strong>
                      <span className="text-xs text-slate-600">Our care desk is based locally in the Twin Cities, ensuring quick supervision and immediate resolution if adjustments are needed.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Office Details */}
              <div className="p-6 bg-care-navy text-white rounded-2xl border border-slate-800 space-y-3">
                <div className="flex items-center gap-2 text-brand-300 font-mono text-xs font-bold uppercase tracking-wider">
                  <MapPin className="w-4 h-4" />
                  <span>Physical Presence</span>
                </div>
                <div className="text-xs text-slate-300 space-y-2">
                  <p>
                    <strong className="text-white">Registered Office:</strong><br />
                    {siteConfig.registeredOffice.address}
                  </p>
                  <p>
                    <strong className="text-white">Operations Desk:</strong><br />
                    {siteConfig.operationsOffice.address}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Step Care Conversation */}
      <CareConversationProcess />

      {/* Trust & Transparency */}
      <TrustTransparency />

      {/* Enquiry Form */}
      <EnquiryForm
        formTitle="Connect with Our Care Desk"
        formSubtitle="Have a question or looking to organize care for a loved one? Share your requirements with our team today."
      />
    </>
  );
}
