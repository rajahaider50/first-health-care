import React from "react";
import Link from "next/link";
import { FlaskConical, Hospital, ArrowRight, CheckCircle2, Shield } from "lucide-react";
import { diagnosticPartners, clinicalPartners, diagnosticTests } from "@/data/partners";

export default function PartnerShowcase() {
  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="max-w-2xl">
            <div className="text-xs font-mono uppercase tracking-wider text-brand-800 font-bold mb-2">
              Collaborative Healthcare Ecosystem
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-care-dark tracking-tight mb-4">
              Diagnostic &amp; Hospital Partners
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              We work alongside accredited laboratories and clinical facilities across Islamabad and Rawalpindi to coordinate smooth home sample collections and patient follow-ups.
            </p>
          </div>

          {/* Coordination badge */}
          <div className="p-4 bg-brand-50/70 border border-brand-200 rounded-xl text-xs max-w-sm">
            <div className="flex items-center gap-1.5 font-bold text-brand-950 mb-1">
              <Shield className="w-4 h-4 text-brand-700" />
              <span>Coordination, not substitution</span>
            </div>
            <p className="text-slate-600 text-[11px] leading-relaxed">
              Diagnostic tests and surgical procedures are executed by licensed partner laboratories and clinics. First Health Care facilitates coordination and home continuity.
            </p>
          </div>
        </div>

        {/* Diagnostic Labs Section */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <FlaskConical className="w-5 h-5 text-brand-800" />
            <h3 className="text-lg font-bold text-slate-900">
              Diagnostic &amp; Laboratory Network
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {diagnosticPartners.map((partner) => (
              <div
                key={partner.id}
                className="bg-slate-50/80 rounded-xl p-5 border border-slate-200 hover:border-slate-300 transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-brand-800 font-semibold block mb-1">
                    {partner.city}
                  </span>
                  <h4 className="text-sm font-bold text-care-dark mb-2">
                    {partner.name}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-3">
                    {partner.shortDescription}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/70 text-[11px] text-slate-500 font-medium">
                  {partner.coordinationRole}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Clinical / Hospital Partners */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-6">
            <Hospital className="w-5 h-5 text-brand-800" />
            <h3 className="text-lg font-bold text-slate-900">
              Hospital &amp; Clinical Facilities
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {clinicalPartners.map((partner) => (
              <div
                key={partner.id}
                className="bg-slate-50/80 rounded-xl p-6 border border-slate-200 flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-wider text-brand-800 font-semibold block mb-1">
                    {partner.city} · Clinical Partner
                  </span>
                  <h4 className="text-base font-bold text-care-dark mb-2">
                    {partner.name}
                  </h4>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {partner.shortDescription}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200/70 text-xs text-slate-700">
                  <span className="font-semibold block text-[11px] text-slate-900 mb-1">Key Coordination:</span>
                  <span>{partner.coordinationRole}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sample Diagnostic Coordination Tests Pills */}
        <div className="p-6 bg-slate-900 text-white rounded-2xl">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-4 border-b border-slate-800">
            <div>
              <h4 className="text-base font-bold">
                Home Sample Collection &amp; Diagnostic Test Coordination
              </h4>
              <p className="text-xs text-slate-400 mt-1">
                Scheduled phlebotomist home visits coordinated with verified diagnostic laboratories in Islamabad &amp; Rawalpindi.
              </p>
            </div>
            <Link
              href="/hospital-diagnostic-partners"
              className="text-xs font-semibold text-brand-300 hover:text-white flex items-center gap-1.5 whitespace-nowrap"
            >
              <span>View full directory</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="flex flex-wrap gap-2">
            {diagnosticTests.slice(0, 12).map((test, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-slate-800 text-slate-200 rounded-lg text-xs border border-slate-700/80 font-medium"
              >
                {test.name}
              </span>
            ))}
            <span className="px-3 py-1 bg-brand-900/60 text-brand-200 rounded-lg text-xs border border-brand-700/60 font-semibold">
              + More specialized tests
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
