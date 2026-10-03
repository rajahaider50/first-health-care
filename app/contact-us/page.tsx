import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Phone, MessageCircle, Mail, MapPin, Clock, ExternalLink, ShieldCheck } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { servicesData } from "@/data/services";
import EnquiryForm from "@/components/EnquiryForm";

export const metadata: Metadata = {
  title: "Contact Care Desk | First Health Care Islamabad & Rawalpindi",
  description:
    "Call 0304 5121772 or chat on WhatsApp. Contact First Health Care for home nursing, elderly care, and physiotherapy across Islamabad, Rawalpindi, DHA, and Bahria Town.",
  alternates: {
    canonical: "/contact-us",
  },
};

export default function ContactUsPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-900 via-care-navy to-slate-900 text-white pt-14 pb-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-900/60 border border-brand-700/60 text-brand-300 text-xs font-mono uppercase tracking-wider mb-4">
              CARE DESK DISPATCH
            </div>
            <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 font-sans text-white">
              Contact Care Desk
            </h1>
            <p className="text-lg text-slate-300 leading-relaxed mb-6">
              Connect directly with our care coordinators to discuss patient requirements, clinical staff availability, and transparent charges across the Twin Cities.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Channels Grid */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* Phone Card */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-brand-50 border border-brand-200/80 flex items-center justify-center mb-4">
                  <Phone className="w-5 h-5 text-brand-800" />
                </div>
                <h2 className="text-base font-bold text-care-dark mb-1">
                  Phone Care Desk
                </h2>
                <p className="text-xs text-slate-500 mb-4">
                  Direct telephone line for new patient intake and immediate questions.
                </p>
                <div className="font-mono text-lg font-bold text-care-dark mb-2">
                  {siteConfig.phone}
                </div>
              </div>
              <a
                href={siteConfig.phoneTel}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-care-navy hover:bg-brand-900 text-white rounded-lg text-xs font-semibold transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Call Care Desk Now</span>
              </a>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-emerald-50/60 rounded-2xl p-6 border border-emerald-200 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-emerald-100 border border-emerald-300 flex items-center justify-center mb-4">
                  <MessageCircle className="w-5 h-5 text-emerald-700" />
                </div>
                <h2 className="text-base font-bold text-care-dark mb-1">
                  WhatsApp Support
                </h2>
                <p className="text-xs text-slate-600 mb-4">
                  Fast messaging channel for inquiries, location pins, and schedule requests.
                </p>
                <div className="font-mono text-lg font-bold text-emerald-950 mb-2">
                  {siteConfig.whatsapp}
                </div>
              </div>
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold transition-colors"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span>Open WhatsApp Chat</span>
              </a>
            </div>

            {/* Email Card */}
            <div className="bg-slate-50 rounded-2xl p-6 border border-slate-200 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-xl bg-slate-200/80 flex items-center justify-center mb-4">
                  <Mail className="w-5 h-5 text-slate-700" />
                </div>
                <h2 className="text-base font-bold text-care-dark mb-1">
                  Email Correspondence
                </h2>
                <p className="text-xs text-slate-500 mb-4">
                  For formal corporate inquiries, discharge coordination, and partner requests.
                </p>
                <div className="text-sm font-semibold text-care-dark mb-2 break-all">
                  {siteConfig.email}
                </div>
              </div>
              <a
                href={siteConfig.emailMailto}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-slate-800 hover:bg-slate-900 text-white rounded-lg text-xs font-semibold transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>Send Email</span>
              </a>
            </div>
          </div>

          {/* Office Locations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8 border-t border-slate-200">
            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/50">
              <span className="font-mono text-xs uppercase tracking-wider text-brand-800 font-bold block mb-2">
                {siteConfig.registeredOffice.title}
              </span>
              <p className="text-sm text-slate-700 font-medium mb-3">
                {siteConfig.registeredOffice.address}
              </p>
              <a
                href={siteConfig.registeredOffice.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-brand-800 font-semibold hover:underline inline-flex items-center gap-1.5"
              >
                <span>View location on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/50">
              <span className="font-mono text-xs uppercase tracking-wider text-brand-800 font-bold block mb-2">
                {siteConfig.operationsOffice.title}
              </span>
              <p className="text-sm text-slate-700 font-medium mb-3">
                {siteConfig.operationsOffice.address}
              </p>
              <a
                href={siteConfig.operationsOffice.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-brand-800 font-semibold hover:underline inline-flex items-center gap-1.5"
              >
                <span>View location on Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Enquiry Form */}
      <EnquiryForm
        formTitle="Submit a Care Callback Request"
        formSubtitle="Prefer our team to call you? Fill out the details below. We typically contact you within 1 to 3 hours during care desk operating hours (8:00 AM – 10:00 PM)."
      />
    </>
  );
}
