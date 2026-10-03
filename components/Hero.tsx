import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, ArrowRight, ShieldCheck, MapPin, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/50 pt-12 pb-16 lg:pt-20 lg:pb-24 border-b border-slate-200/80">
      {/* Subtle background grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(#0f4c4c 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Eyebrow / Geographic Scope */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-50 border border-brand-200/80 text-brand-900 text-xs font-semibold mb-6">
            <span className="w-2 h-2 rounded-full bg-brand-600 animate-pulse" />
            <span className="font-mono uppercase tracking-wider text-[11px]">
              Local Home Healthcare Desk
            </span>
            <span className="text-slate-300">•</span>
            <span className="text-slate-700">Islamabad &amp; Rawalpindi</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-care-dark tracking-tight leading-[1.12] mb-6 font-sans">
            Human care. <br className="hidden sm:inline" />
            <span className="text-brand-900">Clearly coordinated.</span>
          </h1>

          {/* Editorial Supporting Copy */}
          <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed mb-8">
            Professional home nursing, elderly caretaker support, physical therapy, psychology, and post-discharge recovery. Coordinated strictly around your family&apos;s location, schedule, and primary medical requirements.
          </p>

          {/* Conversion CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 mb-10">
            <a
              href="#enquiry-section"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-white bg-care-navy hover:bg-brand-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 group"
            >
              <span>Request a Call Back</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>

            <a
              href={siteConfig.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-base font-semibold text-emerald-950 bg-emerald-100 hover:bg-emerald-200/80 border border-emerald-300/80 rounded-xl transition-all duration-200"
            >
              <MessageCircle className="w-5 h-5 text-emerald-700" />
              <span>Talk on WhatsApp</span>
            </a>

            <a
              href={siteConfig.phoneTel}
              className="inline-flex items-center justify-center gap-2 px-4 py-3.5 text-sm font-semibold text-slate-700 hover:text-care-navy transition-colors sm:hidden"
            >
              <Phone className="w-4 h-4 text-brand-800" />
              <span>Call: {siteConfig.phone}</span>
            </a>
          </div>

          {/* Ground Rules / Reassurance Banner */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-6 border-t border-slate-200/70">
            <div className="flex items-start gap-2.5 text-xs text-slate-600">
              <CheckCircle2 className="w-4 h-4 text-brand-700 shrink-0 mt-0.5" />
              <span>
                <strong className="text-slate-900 block">No automated instant booking</strong>
                Availability, scope, and charges are reviewed and confirmed with you before any service begins.
              </span>
            </div>

            <div className="flex items-start gap-2.5 text-xs text-slate-600">
              <ShieldCheck className="w-4 h-4 text-brand-700 shrink-0 mt-0.5" />
              <span>
                <strong className="text-slate-900 block">Direct clinical continuity</strong>
                Coordinated in accordance with your treating doctor&apos;s written prescriptions and instructions.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
