import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, Mail, MapPin, ExternalLink, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { servicesData } from "@/data/services";

export default function Footer() {
  return (
    <footer className="bg-care-dark text-slate-300 pt-16 pb-24 lg:pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-slate-800/80">
          {/* Column 1: Brand & Statement */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-lg bg-care-navy flex items-center justify-center text-brand-300 font-bold text-base border border-brand-800">
                ✚
              </div>
              <div>
                <span className="font-bold text-white text-base tracking-tight font-sans block leading-none">
                  FIRST HEALTH CARE
                </span>
                <span className="text-[10px] text-brand-400 font-mono uppercase tracking-wider">
                  Islamabad &amp; Rawalpindi Care Desk
                </span>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              A healthcare lead-generation and service-coordination platform. Providing qualified home nursing, elderly caretakers, physiotherapy, psychology, and post-operative recovery across Islamabad and Rawalpindi.
            </p>

            <div className="p-3 bg-slate-800/60 rounded-xl border border-slate-700/60 text-[11px] text-slate-400 max-w-sm space-y-1">
              <div className="flex items-center gap-1.5 text-slate-300 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-400" />
                <span>Service Precondition</span>
              </div>
              <p>
                Staff availability, clinical scope, and applicable charges are reviewed and confirmed before service begins.
              </p>
            </div>
          </div>

          {/* Column 2: 8 Care Routes */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-brand-300 font-bold">
              Care Routes (01–08)
            </div>
            <ul className="space-y-2 text-xs">
              {servicesData.map((s) => (
                <li key={s.id}>
                  <Link
                    href={`/${s.slug}`}
                    className="text-slate-400 hover:text-white transition-colors flex items-center gap-2"
                  >
                    <span className="font-mono text-slate-500 text-[10px]">{s.number}</span>
                    <span>{s.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Navigation Links */}
          <div className="space-y-3">
            <div className="text-xs font-mono uppercase tracking-wider text-brand-300 font-bold">
              Organization
            </div>
            <ul className="space-y-2 text-xs">
              <li>
                <Link href="/" className="text-slate-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-slate-400 hover:text-white transition-colors">
                  Services Overview
                </Link>
              </li>
              <li>
                <Link href="/hospital-diagnostic-partners" className="text-slate-400 hover:text-white transition-colors">
                  Hospital &amp; Diagnostic Partners
                </Link>
              </li>
              <li>
                <Link href="/about-us" className="text-slate-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/faqs" className="text-slate-400 hover:text-white transition-colors">
                  Frequently Asked Questions
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="text-slate-400 hover:text-white transition-colors">
                  Contact Care Desk
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="text-slate-400 hover:text-white transition-colors">
                  Privacy Policy &amp; Terms
                </Link>
              </li>
              <li>
                <Link href="/admin" className="text-slate-500 hover:text-brand-300 font-mono text-[11px] transition-colors">
                  Internal Lead Portal →
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact & Office Desks */}
          <div className="space-y-4">
            <div className="text-xs font-mono uppercase tracking-wider text-brand-300 font-bold">
              Direct Contact
            </div>

            <div className="space-y-2.5 text-xs text-slate-300">
              <a
                href={siteConfig.phoneTel}
                className="flex items-center gap-2 hover:text-white transition"
              >
                <Phone className="w-4 h-4 text-brand-400 shrink-0" />
                <span>{siteConfig.phone}</span>
              </a>

              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition"
              >
                <MessageCircle className="w-4 h-4 shrink-0" />
                <span>WhatsApp Care Desk</span>
              </a>

              <a
                href={siteConfig.emailMailto}
                className="flex items-center gap-2 hover:text-white transition"
              >
                <Mail className="w-4 h-4 text-brand-400 shrink-0" />
                <span>{siteConfig.email}</span>
              </a>
            </div>

            <div className="pt-2 border-t border-slate-800 space-y-2 text-xs">
              <div>
                <span className="font-semibold text-white block text-[11px]">{siteConfig.registeredOffice.title}:</span>
                <p className="text-slate-400 text-[11px] mb-1">{siteConfig.registeredOffice.address}</p>
                <a
                  href={siteConfig.registeredOffice.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-300 text-[10px] hover:underline inline-flex items-center gap-1 font-mono"
                >
                  <span>Google Maps link</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>

              <div>
                <span className="font-semibold text-white block text-[11px]">{siteConfig.operationsOffice.title}:</span>
                <p className="text-slate-400 text-[11px] mb-1">{siteConfig.operationsOffice.address}</p>
                <a
                  href={siteConfig.operationsOffice.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-300 text-[10px] hover:underline inline-flex items-center gap-1 font-mono"
                >
                  <span>Google Maps link</span>
                  <ExternalLink className="w-2.5 h-2.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Emergency Notice */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>
            © 2026 {siteConfig.legalName}. All rights reserved.
          </p>

          <p className="text-center md:text-right text-[11px] text-slate-500 max-w-xl">
            <strong>Medical Notice:</strong> First Health Care provides scheduled supportive healthcare coordination. We do not provide acute hospital emergency services. In case of life-threatening emergencies, visit a hospital emergency room immediately.
          </p>
        </div>
      </div>
    </footer>
  );
}
