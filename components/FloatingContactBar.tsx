"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Phone, MessageCircle, CalendarClock, X } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function FloatingContactBar() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <>
      {/* Mobile Fixed Bottom Action Bar */}
      <nav aria-label="Quick contact actions" className="fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 sm:hidden flex items-center justify-between gap-2 shadow-[0_-4px_16px_rgba(0,0,0,0.06)]">
        {/* Call CTA */}
        <a
          href={siteConfig.phoneTel}
          className="flex-1 flex flex-col items-center justify-center py-2 px-1 text-slate-800 hover:text-care-navy bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors font-medium"
        >
          <Phone className="w-4 h-4 text-brand-800 mb-0.5" />
          <span className="text-[10px] uppercase font-bold tracking-tight">Call</span>
        </a>

        {/* WhatsApp CTA */}
        <a
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex flex-col items-center justify-center py-2 px-1 text-emerald-950 bg-emerald-100 hover:bg-emerald-200 rounded-lg transition-colors font-medium border border-emerald-300/80"
        >
          <MessageCircle className="w-4 h-4 text-emerald-700 mb-0.5" />
          <span className="text-[10px] uppercase font-bold tracking-tight">WhatsApp</span>
        </a>

        {/* Request Callback CTA */}
        <a
          href="#enquiry-section"
          className="flex-1 flex flex-col items-center justify-center py-2 px-1 text-white bg-care-navy hover:bg-brand-900 rounded-lg transition-colors font-medium shadow-xs"
        >
          <CalendarClock className="w-4 h-4 text-brand-300 mb-0.5" />
          <span className="text-[10px] uppercase font-bold tracking-tight">Request</span>
        </a>
      </nav>

      {/* Desktop Floating WhatsApp Widget */}
      <div className="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-2">
        {showTooltip && (
          <div className="bg-care-navy text-white text-xs px-3.5 py-2 rounded-xl shadow-lg border border-slate-700 flex items-center gap-2 animate-in fade-in slide-in-from-bottom-2">
            <span>Direct Care Desk WhatsApp</span>
            <button
              type="button"
              onClick={() => setShowTooltip(false)}
              className="text-slate-400 hover:text-white"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        )}

        <a
          href={siteConfig.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp with First Health Care desk"
          onMouseEnter={() => setShowTooltip(true)}
          className="w-13 h-13 p-3.5 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full shadow-xl hover:shadow-2xl transition-all duration-200 flex items-center justify-center group hover:scale-105 active:scale-95"
        >
          <MessageCircle className="w-7 h-7" />
          <span className="sr-only">Chat on WhatsApp</span>
        </a>
      </div>
    </>
  );
}
