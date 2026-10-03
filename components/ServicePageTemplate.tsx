import React from "react";
import Link from "next/link";
import { ArrowRight, Check, ShieldAlert, Clock, Phone, MessageCircle, FileText, CheckCircle2 } from "lucide-react";
import { ServiceDetail } from "@/data/services";
import { siteConfig } from "@/data/siteConfig";
import EnquiryForm from "@/components/EnquiryForm";
import FAQAccordion from "@/components/FAQAccordion";
import CareConversationProcess from "@/components/CareConversationProcess";
import BeforeCareBegins from "@/components/BeforeCareBegins";

interface ServicePageTemplateProps {
  service: ServiceDetail;
}

export default function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  // Structured Data (JSON-LD) for SEO
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": service.title,
    "serviceType": service.badge,
    "provider": {
      "@type": "MedicalBusiness",
      "name": siteConfig.name,
      "telephone": siteConfig.phoneRaw,
      "email": siteConfig.email,
      "url": siteConfig.url,
      "areaServed": siteConfig.coverage
    },
    "description": service.shortDescription,
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `${service.title} Arrangements`,
      "itemListElement": service.arrangements.map((arr, i) => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": arr
        }
      }))
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="min-h-screen bg-slate-50/50">
        {/* Service Hero Header */}
        <section className="bg-gradient-to-b from-slate-900 via-care-navy to-slate-900 text-white pt-14 pb-20 border-b border-slate-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl">
              {/* Category & Number badge */}
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="font-mono text-xs font-bold text-brand-300 bg-brand-900/60 px-3 py-1 rounded border border-brand-700/60">
                  ROUTE {service.number} · {service.categoryGroup}
                </span>
                <span className="text-xs text-slate-400 font-medium">
                  {service.category}
                </span>
                <span className="text-slate-600">•</span>
                <span className="text-xs text-slate-300 font-medium">
                  Islamabad &amp; Rawalpindi
                </span>
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-4 font-sans text-white">
                {service.title}
              </h1>

              {/* Hero description */}
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                {service.heroDescription}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
                <a
                  href="#enquiry-section"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-brand-700 hover:bg-brand-600 text-white font-semibold text-sm rounded-xl shadow-lg hover:shadow-xl transition-all"
                >
                  <span>Request Callback for {service.title}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href={`https://wa.me/923045121772?text=Hello%20First%20Health%20Care%2C%20I%20am%20enquiring%20about%20${encodeURIComponent(service.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-700/80 hover:bg-emerald-600 text-white font-semibold text-sm rounded-xl border border-emerald-500/60 transition-all"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-300" />
                  <span>Talk on WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* FHC / SERVICE FILE Info Box */}
        <section className="py-12 sm:py-16 bg-white border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 sm:p-8">
              <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-6">
                <span className="font-mono text-xs font-bold text-slate-500 uppercase tracking-wider">
                  FHC / SERVICE FILE: {service.number}
                </span>
                <span className="text-xs font-mono text-brand-900 bg-brand-50 px-2.5 py-0.5 rounded border border-brand-200">
                  {service.badge}
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Why / Who this helps */}
                <div>
                  <h2 className="text-lg font-bold text-care-dark mb-4 flex items-center gap-2">
                    <span className="text-brand-800">✚</span>
                    <span>Why &amp; Who This Route Helps</span>
                  </h2>
                  <ul className="space-y-3">
                    {service.whyThisHelps.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                        <Check className="w-4 h-4 text-brand-700 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* What Gets Discussed */}
                <div className="bg-white p-6 rounded-xl border border-slate-200/90 shadow-xs">
                  <h2 className="text-lg font-bold text-care-dark mb-4 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-brand-800" />
                    <span>What Gets Discussed Prior to Service</span>
                  </h2>
                  <ul className="space-y-3">
                    {service.whatGetsDiscussed.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-sm text-slate-700">
                        <span className="font-mono text-xs font-bold text-slate-400 bg-slate-100 w-5 h-5 rounded flex items-center justify-center shrink-0">
                          {idx + 1}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Clinical Scope & Arrangements */}
        <section className="py-16 sm:py-20 bg-slate-50/60 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
              {/* Detailed Scope */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-brand-800 font-bold mb-2">
                    Duty of Care
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-care-dark tracking-tight mb-4">
                    Service Scope &amp; Procedures
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    Our personnel operate within strictly defined professional competencies and in alignment with physician prescriptions.
                  </p>
                </div>

                <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-xs divide-y divide-slate-100">
                  {service.scope.map((task, idx) => (
                    <div key={idx} className="py-3.5 first:pt-0 last:pb-0 flex items-start gap-3 text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-brand-700 shrink-0 mt-0.5" />
                      <span>{task}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Available Arrangements */}
              <div className="lg:col-span-5 space-y-6">
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-brand-800 font-bold mb-2">
                    Shift Models
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-care-dark tracking-tight mb-4">
                    Available Arrangements
                  </h2>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    Arrangements are structured according to patient dependency and family needs:
                  </p>
                </div>

                <div className="space-y-3">
                  {service.arrangements.map((arr, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-5 rounded-xl border border-slate-200 shadow-xs flex items-start gap-3"
                    >
                      <Clock className="w-4 h-4 text-brand-700 shrink-0 mt-0.5" />
                      <span className="text-sm font-semibold text-care-dark">
                        {arr}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Clinical Guidance / Precaution Box */}
                <div className="p-5 bg-amber-50/80 border border-amber-200/80 rounded-xl text-xs text-amber-950 space-y-2">
                  <div className="flex items-center gap-1.5 font-bold text-amber-900">
                    <ShieldAlert className="w-4 h-4 text-amber-800" />
                    <span>Clinical Guidance:</span>
                  </div>
                  <p className="leading-relaxed text-[11px] text-amber-900/90">
                    {service.guidance}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4-Step Process Section */}
        <CareConversationProcess />

        {/* Before Care Begins Section */}
        <BeforeCareBegins />

        {/* Service FAQs */}
        {service.faqs && service.faqs.length > 0 && (
          <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center max-w-2xl mx-auto mb-10">
                <div className="text-xs font-mono uppercase tracking-wider text-brand-800 font-bold mb-2">
                  {service.title} Inquiries
                </div>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-care-dark tracking-tight">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-3">
                {service.faqs.map((faq, i) => (
                  <div key={i} className="border border-slate-200 rounded-xl p-5 bg-slate-50/50">
                    <h3 className="text-sm sm:text-base font-bold text-care-dark mb-2">
                      {faq.question}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Dedicated Enquiry Form preselected for this service */}
        <EnquiryForm
          defaultServiceId={service.id}
          formTitle={`Request a Care Callback for ${service.title}`}
          formSubtitle="Share your location in Islamabad or Rawalpindi, patient requirements, and timing. Our care desk will review clinical availability and confirm scope and charges."
        />
      </article>
    </>
  );
}
