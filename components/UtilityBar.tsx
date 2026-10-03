import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export default function UtilityBar() {
  return (
    <aside aria-label="Care desk notice" className="bg-care-navy text-slate-200 text-xs border-b border-care-slate/40 py-2 px-4 transition-colors">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
        <div className="flex items-center gap-3 overflow-x-auto max-w-full text-center sm:text-left scrollbar-none py-0.5">
          <span className="font-mono text-brand-300 font-semibold uppercase tracking-wider text-[11px] whitespace-nowrap bg-brand-900/60 px-2 py-0.5 rounded border border-brand-700/50">
            {siteConfig.deskLabel}
          </span>
          <div className="flex items-center gap-1.5 text-slate-300 whitespace-nowrap">
            <MapPin className="w-3.5 h-3.5 text-brand-400 shrink-0" />
            <span>Islamabad · Rawalpindi · DHA · Bahria Town</span>
          </div>
          <span className="hidden md:inline text-slate-500">•</span>
          <div className="hidden md:flex items-center gap-1 text-slate-400 whitespace-nowrap">
            <Clock className="w-3 h-3 text-slate-400" />
            <span>Active 8:00 AM – 10:00 PM PKT</span>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs">
          <a
            href={siteConfig.phoneTel}
            className="flex items-center gap-1.5 text-slate-200 hover:text-white transition font-medium"
          >
            <Phone className="w-3.5 h-3.5 text-brand-400" />
            <span>Call: {siteConfig.phone}</span>
          </a>
          <span className="text-slate-600">|</span>
          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-emerald-400 hover:text-emerald-300 transition font-medium"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>WhatsApp Care Desk</span>
          </a>
        </div>
      </div>
    </aside>
  );
}
