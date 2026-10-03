import React from "react";
import type { Metadata } from "next";
import { ShieldCheck, Lock, AlertTriangle, FileText, CheckCircle2 } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";

export const metadata: Metadata = {
  title: "Privacy Policy & Terms | First Health Care",
  description:
    "Privacy and data protection policy for First Health Care. Information on data collection, consent, marketing attribution, and medical confidentiality.",
  alternates: {
    canonical: "/privacy-policy",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <article className="min-h-screen bg-white">
      {/* Hero */}
      <section className="bg-gradient-to-b from-slate-900 via-care-navy to-slate-900 text-white pt-14 pb-16 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-900/60 border border-brand-700/60 text-brand-300 text-xs font-mono uppercase tracking-wider mb-4">
            GOVERNANCE &amp; TRUST
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-3 font-sans text-white">
            Privacy Policy &amp; Terms of Service
          </h1>
          <p className="text-sm text-slate-300">
            Last Updated: October 2026 · First Health Care (Pvt) Ltd
          </p>
        </div>
      </section>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-10 text-slate-700 text-sm leading-relaxed">
        {/* Section 1 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-care-dark">
            1. Overview &amp; Privacy-First Commitment
          </h2>
          <p>
            First Health Care (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting the privacy of our patients, families, and website visitors. Because home healthcare involves personal vulnerability, we enforce a strict privacy-first model designed to collect only the minimum necessary information to coordinate safe healthcare services.
          </p>
        </section>

        {/* Section 2 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-care-dark">
            2. Information Collected via the Public Enquiry Form
          </h2>
          <p>
            When you submit an enquiry through our website, we collect only the following human-entered details:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-slate-600">
            <li>Full Name</li>
            <li>Phone or WhatsApp Number (used strictly to contact you regarding your care enquiry)</li>
            <li>Email Address (optional)</li>
            <li>Healthcare Service Route requested</li>
            <li>General Location / Sector in Islamabad or Rawalpindi</li>
            <li>Preferred time of day to contact you</li>
            <li>A brief, non-sensitive summary of the patient&apos;s assistance requirement</li>
            <li>Explicit affirmative consent to be contacted</li>
          </ul>
        </section>

        {/* Section 3 */}
        <section className="p-5 bg-amber-50/80 rounded-xl border border-amber-200/80 space-y-2">
          <div className="flex items-center gap-2 font-bold text-amber-900">
            <AlertTriangle className="w-4 h-4 text-amber-800" />
            <span>3. What We Do NOT Collect via Public Forms</span>
          </div>
          <p className="text-xs text-amber-900/90 leading-relaxed">
            Our public lead form deliberately instructs users <strong>never</strong> to submit:
          </p>
          <ul className="list-disc pl-5 text-xs text-amber-900/90 space-y-1">
            <li>Computerized National Identity Card (CNIC) numbers</li>
            <li>Comprehensive medical histories or psychiatric files</li>
            <li>Diagnostic lab reports or scans</li>
            <li>Credit card, bank credentials, or instant payment data</li>
          </ul>
          <p className="text-[11px] text-amber-800">
            Any formal physician prescription verification is conducted directly and privately between our registered clinical supervisors and the family via confidential communication channels.
          </p>
        </section>

        {/* Section 4 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-care-dark">
            4. Marketing Attribution &amp; Technical Analytics
          </h2>
          <p>
            To understand how visitors discover First Health Care and which campaigns are generating genuine healthcare enquiries, our website captures standard web attribution parameters:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-slate-600">
            <li>Campaign UTM parameters (source, medium, campaign name, content, term)</li>
            <li>Ad click identifiers (Google gclid, Meta fbclid) where applicable</li>
            <li>Referring website and landing page URL</li>
            <li>Randomly generated pseudonymous visitor and session IDs</li>
          </ul>
          <p className="text-xs text-slate-500">
            This technical attribution data is utilized solely for internal service-performance evaluation and fraud prevention. It is never sold to third-party data brokers.
          </p>
        </section>

        {/* Section 5 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-care-dark">
            5. Medical Emergency Disclaimer
          </h2>
          <p>
            First Health Care coordinates scheduled supportive home healthcare. <strong>Our service is not an acute emergency medical service or trauma dispatch unit.</strong> If you or a family member is experiencing an acute, life-threatening emergency (such as sudden chest pain, severe difficulty breathing, uncontrolled bleeding, or acute loss of consciousness), you must immediately transport the patient to the nearest hospital emergency room.
          </p>
        </section>

        {/* Section 6 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-care-dark">
            6. Service Confirmation &amp; Transparent Charges
          </h2>
          <p>
            Enquiry submission through our website does not constitute an automatically binding service contract or guarantee of staff assignment. Healthcare personnel availability, clinical scope of duties, and applicable fees are confirmed only after direct human review by our care desk.
          </p>
        </section>

        {/* Section 7 */}
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-care-dark">
            7. Contact for Data Privacy Inquiries
          </h2>
          <p>
            If you have questions regarding our privacy practices or wish to request the deletion of an enquiry record, please contact our data coordinator:
          </p>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-1">
            <p><strong>First Health Care (Pvt) Ltd</strong></p>
            <p>Executive Heights, Sector F-8 Markaz, Islamabad, Pakistan</p>
            <p>Email: <a href={siteConfig.emailMailto} className="text-brand-800 underline">{siteConfig.email}</a></p>
            <p>Phone: {siteConfig.phone}</p>
          </div>
        </section>
      </div>
    </article>
  );
}
