"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowRight, Check, Sparkles, MapPin, Calendar, Activity, AlertCircle } from "lucide-react";
import { servicesData } from "@/data/services";

export default function RequirementBlock() {
  const [selectedServiceId, setSelectedServiceId] = useState(servicesData[0].id);

  const currentService = servicesData.find((s) => s.id === selectedServiceId) || servicesData[0];

  return (
    <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Coordination Card Container */}
        <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 sm:p-10 shadow-sm">
          {/* Metadata Eyebrow */}
          <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-slate-200/80 mb-8">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs font-bold uppercase tracking-wider px-2.5 py-1 bg-care-navy text-white rounded">
                CARE / FHC-06
              </span>
              <span className="text-xs font-medium text-slate-500">
                Service Coordination Architecture
              </span>
            </div>
            <div className="text-xs font-mono text-brand-900 bg-brand-50 border border-brand-200/70 px-3 py-1 rounded-full">
              Clear scope before confirmation
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: Conceptual Overview */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-care-dark tracking-tight mb-3">
                  Start with the requirement.
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Home healthcare is never one-size-fits-all. We do not charge generic booking fees or assign random staff online. Instead, we clarify four vital parameters before care begins:
                </p>
              </div>

              {/* Four Parameters Matrix */}
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 bg-white rounded-lg border border-slate-200">
                  <div className="font-semibold text-slate-900 mb-1 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-brand-700" />
                    <span>01. Service Route</span>
                  </div>
                  <span className="text-slate-500">Clinical nursing, caretaker, or rehabilitation</span>
                </div>

                <div className="p-3 bg-white rounded-lg border border-slate-200">
                  <div className="font-semibold text-slate-900 mb-1 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-brand-700" />
                    <span>02. Location</span>
                  </div>
                  <span className="text-slate-500">Islamabad, Rawalpindi, DHA or Bahria Town</span>
                </div>

                <div className="p-3 bg-white rounded-lg border border-slate-200">
                  <div className="font-semibold text-slate-900 mb-1 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-brand-700" />
                    <span>03. Schedule</span>
                  </div>
                  <span className="text-slate-500">Visiting, 12h day/night, or 24h continuous</span>
                </div>

                <div className="p-3 bg-white rounded-lg border border-slate-200">
                  <div className="font-semibold text-slate-900 mb-1 flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-brand-700" />
                    <span>04. Availability</span>
                  </div>
                  <span className="text-slate-500">Human desk review and scope agreement</span>
                </div>
              </div>

              {/* Two-step conceptual flow */}
              <div className="p-4 rounded-xl bg-white border border-slate-200/90 space-y-3">
                <div className="flex items-start gap-3">
                  <span className="font-mono text-xs font-bold text-brand-900 bg-brand-50 w-6 h-6 rounded flex items-center justify-center shrink-0 border border-brand-200">
                    01
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Find the route</h4>
                    <p className="text-[11px] text-slate-500">Identify which care discipline matches the patient&apos;s primary needs.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <span className="font-mono text-xs font-bold text-brand-900 bg-brand-50 w-6 h-6 rounded flex items-center justify-center shrink-0 border border-brand-200">
                    02
                  </span>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Discuss the need</h4>
                    <p className="text-[11px] text-slate-500">Our care team reviews doctor instructions, timing, and applicable charges with you.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Route Explorer */}
            <div className="lg:col-span-7 bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 font-semibold">
                  Select a Route to Inspect What Gets Discussed
                </span>
                <span className="font-mono text-xs text-brand-900 font-bold">
                  {currentService.number} / 08
                </span>
              </div>

              {/* Service Route Selector Pills */}
              <div className="flex flex-wrap gap-2 mb-6">
                {servicesData.map((s) => (
                  <button
                    key={s.id}
                    type="button"
                    onClick={() => setSelectedServiceId(s.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      selectedServiceId === s.id
                        ? "bg-care-navy text-white shadow-sm font-semibold"
                        : "bg-slate-100 text-slate-700 hover:bg-slate-200/80"
                    }`}
                  >
                    <span className="font-mono text-[10px] opacity-75 mr-1.5">{s.number}</span>
                    {s.title}
                  </button>
                ))}
              </div>

              {/* Selected Route Preview Card */}
              <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80 space-y-4">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-brand-800 font-semibold mb-1">
                      {currentService.category} · Route {currentService.number}
                    </div>
                    <h3 className="text-lg font-bold text-care-dark">
                      {currentService.title}
                    </h3>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded bg-white border border-slate-200 text-slate-600 font-medium">
                    {currentService.badge}
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {currentService.shortDescription}
                </p>

                {/* Key discussion points for this service */}
                <div>
                  <h4 className="text-[11px] font-mono uppercase tracking-wider text-slate-500 font-bold mb-2">
                    What Our Care Desk Discusses With You:
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {currentService.whatGetsDiscussed.slice(0, 3).map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-brand-700 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Direct Action buttons */}
                <div className="pt-3 border-t border-slate-200 flex flex-wrap items-center justify-between gap-3">
                  <a
                    href="#enquiry-section"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-white bg-care-navy hover:bg-brand-900 px-4 py-2 rounded-lg transition-colors"
                  >
                    <span>Enquire for {currentService.title}</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>

                  <Link
                    href={`/${currentService.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-medium text-brand-900 hover:text-brand-700 hover:underline"
                  >
                    <span>Read full service file &amp; clinical scope</span>
                    <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
