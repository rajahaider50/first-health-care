import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { FlaskConical, Hospital, ShieldCheck, CheckCircle2, ArrowRight, Phone, MessageCircle } from "lucide-react";
import { diagnosticPartners, clinicalPartners, diagnosticTests } from "@/data/partners";
import { siteConfig } from "@/data/siteConfig";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Hospital & Diagnostic Partners | First Health Care Islamabad",
  description:
    "First Health Care coordinates with accredited diagnostic labs (IDC, Nayab, Excel, Chughtai) and clinical hospitals across Islamabad and Rawalpindi.",
  alternates: {
    canonical: "/hospital-diagnostic-partners",
  },
};

export default function PartnersPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-900 via-care-navy to-slate-900 text-white pt-14 pb-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-900/60 border border-brand-700/60 text-brand-300 text-xs font-mono uppercase tracking-wider mb-4">
              COLLABORATIVE HEALTHCARE NETWORK
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 font-sans text-white">
              Hospital &amp; Diagnostic Partners
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Bridging premier diagnostic laboratories and tertiary clinical facilities with patients recovering at home across Islamabad and Rawalpindi.
            </p>

            <div className="p-4 bg-slate-800/80 rounded-xl border border-slate-700 text-xs text-slate-300 flex items-start gap-3">
              <ShieldCheck className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-white block font-semibold mb-0.5">
                  Coordination, Not Substitution
                </strong>
                <span>
                  First Health Care serves as an operational and logistical coordination layer for our patients. Clinical tests and operative procedures are carried out by certified partner laboratories and hospital staff.
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diagnostic Laboratories Grid */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-mono uppercase tracking-wider text-brand-800 font-bold mb-2">
              Pathology &amp; Imaging
            </div>
            <h2 className="text-3xl font-extrabold text-care-dark tracking-tight mb-3">
              Partner Diagnostic Laboratories
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Leading diagnostic providers coordinated for home phlebotomy blood draws, sterile sample transit, and rapid online reporting.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {diagnosticPartners.map((partner) => (
              <div
                key={partner.id}
                className="bg-slate-50 rounded-xl p-6 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-brand-800 font-bold bg-brand-50 px-2 py-0.5 rounded border border-brand-200">
                      {partner.city}
                    </span>
                    <FlaskConical className="w-4 h-4 text-slate-400" />
                  </div>

                  <h3 className="text-base font-bold text-care-dark mb-2">
                    {partner.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {partner.shortDescription}
                  </p>

                  <div className="space-y-1 mb-4">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                      Services Coordinated:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {partner.servicesOffered.map((s, idx) => (
                        <span key={idx} className="text-[11px] bg-white border border-slate-200 text-slate-700 px-2 py-0.5 rounded">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-200 text-[11px] text-slate-500 font-medium">
                  <strong>Role:</strong> {partner.coordinationRole}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Hospital & Clinical Facilities */}
      <section className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <div className="text-xs font-mono uppercase tracking-wider text-brand-800 font-bold mb-2">
              Tertiary &amp; Outpatient
            </div>
            <h2 className="text-3xl font-extrabold text-care-dark tracking-tight mb-3">
              Hospital &amp; Clinical Partners
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              Medical centers and specialist clinics aligned with First Health Care for hospital-to-home discharge planning and surgical follow-ups.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {clinicalPartners.map((partner) => (
              <div
                key={partner.id}
                className="bg-white rounded-xl p-6 border border-slate-200/90 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-brand-800 font-bold bg-brand-50 px-2 py-0.5 rounded border border-brand-200">
                      {partner.city}
                    </span>
                    <Hospital className="w-4 h-4 text-slate-400" />
                  </div>

                  <h3 className="text-lg font-bold text-care-dark mb-2">
                    {partner.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {partner.shortDescription}
                  </p>

                  <div className="space-y-1 mb-4">
                    <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider block">
                      Clinical Focus:
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {partner.servicesOffered.map((s, idx) => (
                        <span key={idx} className="text-[11px] bg-slate-100 text-slate-700 px-2 py-0.5 rounded">
                          {s}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="pt-3 border-t border-slate-100 text-xs text-slate-600">
                  <strong className="block text-slate-900 text-[11px] mb-0.5">Coordination Link:</strong>
                  <span>{partner.coordinationRole}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diagnostic Menu Table */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <div className="text-xs font-mono uppercase tracking-wider text-brand-800 font-bold mb-2">
              Laboratory Tests
            </div>
            <h2 className="text-3xl font-extrabold text-care-dark tracking-tight mb-3">
              Diagnostic Coordination Menu
            </h2>
            <p className="text-sm text-slate-600 leading-relaxed">
              These are illustrative diagnostic tests coordinated via partner laboratories. Prescriptions from registered physicians are required for specialized profiles.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {diagnosticTests.map((t, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-white transition-colors"
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] font-mono uppercase tracking-wider text-brand-800 font-semibold">
                    {t.category}
                  </span>
                  <CheckCircle2 className="w-3.5 h-3.5 text-brand-700" />
                </div>
                <h4 className="text-sm font-bold text-care-dark mb-1">
                  {t.name}
                </h4>
                <p className="text-xs text-slate-500">
                  {t.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Coordination Enquiry Form */}
      <EnquiryForm
        defaultServiceId="home-nursing"
        formTitle="Coordinate Diagnostic or Hospital Care"
        formSubtitle="Let our desk know if you require home blood sample collection, post-discharge nursing, or partner clinic coordination in Islamabad and Rawalpindi."
      />
    </>
  );
}
