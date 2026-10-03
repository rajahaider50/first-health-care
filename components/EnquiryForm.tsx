"use client";

import React, { useState, useEffect } from "react";
import { Send, CheckCircle, AlertTriangle, ShieldCheck, Phone, MessageCircle, RefreshCw } from "lucide-react";
import { servicesData } from "@/data/services";
import { validateEnquiryForm } from "@/lib/validation";
import { getClientAttribution, trackEvent } from "@/lib/analytics";
import { siteConfig } from "@/data/siteConfig";

interface EnquiryFormProps {
  defaultServiceId?: string;
  formTitle?: string;
  formSubtitle?: string;
}

export default function EnquiryForm({
  defaultServiceId,
  formTitle = "Request a Care Consultation & Callback",
  formSubtitle = "Share the patient's requirement, preferred schedule, and location. Our care desk will contact you to review availability, scope, and applicable charges."
}: EnquiryFormProps) {
  const [formData, setFormData] = useState({
    full_name: "",
    phone: "",
    email: "",
    service_id: defaultServiceId || "",
    location: "",
    preferred_contact_time: "Morning (9 AM – 12 PM)",
    care_requirement: "",
    consent: true,
    honeypot: "", // Bot anti-spam trap
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submittedLead, setSubmittedLead] = useState<{
    reference_code: string;
    full_name: string;
    service_title: string;
  } | null>(null);
  const [serverError, setServerError] = useState<string | null>(null);

  // Update default service if prop changes
  useEffect(() => {
    if (defaultServiceId) {
      setFormData((prev) => ({ ...prev, service_id: defaultServiceId }));
    }
  }, [defaultServiceId]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }

    // Clear field error on change
    if (errors[name]) {
      setErrors((prev) => {
        const newErrs = { ...prev };
        delete newErrs[name];
        return newErrs;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    // Track attempt
    trackEvent("request_form_submit_attempt", { service: formData.service_id });

    // Validate
    const validation = validateEnquiryForm(formData);
    if (!validation.isValid) {
      setErrors(validation.errors);
      trackEvent("request_form_error", { errors: validation.errors });
      return;
    }

    setIsSubmitting(true);

    try {
      // Gather attribution data
      const attribution = getClientAttribution();

      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          attribution,
        }),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || "Failed to submit enquiry. Please try again or call our care desk.");
      }

      setSubmittedLead({
        reference_code: result.lead.reference_code,
        full_name: result.lead.full_name,
        service_title: result.lead.service_title,
      });

      trackEvent("request_form_success", {
        reference_code: result.lead.reference_code,
        service: result.lead.service_id,
      });
    } catch (err: any) {
      console.error("Enquiry submission failed:", err);
      setServerError(err.message || "We could not submit your enquiry right now. Please call our care desk or reach out via WhatsApp.");
      trackEvent("request_form_server_failure", { error: err.message });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      full_name: "",
      phone: "",
      email: "",
      service_id: defaultServiceId || "",
      location: "",
      preferred_contact_time: "Morning (9 AM – 12 PM)",
      care_requirement: "",
      consent: true,
      honeypot: "",
    });
    setErrors({});
    setSubmittedLead(null);
    setServerError(null);
  };

  return (
    <section id="enquiry-section" className="py-16 sm:py-20 bg-slate-900 text-white relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-800/90 rounded-2xl border border-slate-700 p-6 sm:p-10 shadow-2xl relative">
          {/* Header */}
          <div className="mb-8 pb-6 border-b border-slate-700/80">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-900/60 border border-brand-700/60 text-brand-300 text-xs font-mono uppercase tracking-wider mb-3">
              CARE / INTAKE DESK
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
              {formTitle}
            </h2>
            <p className="text-sm text-slate-300 leading-relaxed">
              {formSubtitle}
            </p>
          </div>

          {/* Success State */}
          {submittedLead ? (
            <div className="bg-slate-900/90 border border-brand-700/60 rounded-xl p-8 text-center space-y-6 animate-in fade-in duration-300">
              <div className="w-16 h-16 bg-brand-900/60 text-brand-300 rounded-full flex items-center justify-center mx-auto border border-brand-500/40">
                <CheckCircle className="w-8 h-8" />
              </div>

              <div>
                <span className="text-xs font-mono uppercase tracking-wider text-brand-400 font-bold block mb-1">
                  Enquiry Logged Successfully
                </span>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Thank you, {submittedLead.full_name}
                </h3>
                <div className="inline-block bg-slate-800 border border-slate-700 px-4 py-2 rounded-lg font-mono text-base font-bold text-brand-300 my-2">
                  Reference Code: {submittedLead.reference_code}
                </div>
                <p className="text-sm text-slate-300 max-w-lg mx-auto leading-relaxed mt-2">
                  Your enquiry for <strong>{submittedLead.service_title}</strong> has been received by our local care desk. Our care coordinator will contact you to review requirement details, clinical availability, and confirm applicable charges.
                </p>
              </div>

              <div className="bg-slate-800/70 p-4 rounded-xl border border-slate-700 text-xs text-slate-300 max-w-md mx-auto space-y-2">
                <p className="font-semibold text-white">Need an immediate answer?</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <a
                    href={`https://wa.me/923045121772?text=Hello%20First%20Health%20Care%2C%20I%20just%20submitted%20enquiry%20reference%20${submittedLead.reference_code}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-2 bg-emerald-700 hover:bg-emerald-600 text-white rounded-lg text-xs font-semibold"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>WhatsApp this reference</span>
                  </a>
                  <a
                    href={siteConfig.phoneTel}
                    className="inline-flex items-center gap-1.5 px-3 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg text-xs font-semibold"
                  >
                    <Phone className="w-4 h-4" />
                    <span>Call Care Desk</span>
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="button"
                  onClick={handleReset}
                  className="text-xs text-slate-400 hover:text-white underline inline-flex items-center gap-1"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Submit another enquiry</span>
                </button>
              </div>
            </div>
          ) : (
            /* Main Form */
            <form onSubmit={handleSubmit} className="space-y-6" noValidate>
              {/* Anti-spam honeypot (hidden from human view) */}
              <div className="hidden" aria-hidden="true" style={{ display: "none" }}>
                <label htmlFor="website_hp">Do not fill this</label>
                <input
                  id="website_hp"
                  type="text"
                  name="honeypot"
                  value={formData.honeypot}
                  onChange={handleChange}
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {serverError && (
                <div className="p-4 bg-red-950/80 border border-red-800 rounded-xl text-xs text-red-200 flex items-start gap-2.5">
                  <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold block">Submission Error</span>
                    <span>{serverError}</span>
                  </div>
                </div>
              )}

              {/* Grid 1: Name & Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="full_name" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Full Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="full_name"
                    type="text"
                    name="full_name"
                    value={formData.full_name}
                    onChange={handleChange}
                    placeholder="e.g. Tariq Mahmood"
                    className={`w-full px-3.5 py-2.5 bg-slate-900 border rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500 ${
                      errors.full_name ? "border-red-500" : "border-slate-700"
                    }`}
                    required
                  />
                  {errors.full_name && (
                    <span className="text-xs text-red-400 mt-1 block">{errors.full_name}</span>
                  )}
                </div>

                <div>
                  <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Phone / WhatsApp Number <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="e.g. 0304 5121772"
                    className={`w-full px-3.5 py-2.5 bg-slate-900 border rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500 ${
                      errors.phone ? "border-red-500" : "border-slate-700"
                    }`}
                    required
                  />
                  {errors.phone && (
                    <span className="text-xs text-red-400 mt-1 block">{errors.phone}</span>
                  )}
                </div>
              </div>

              {/* Grid 2: Email & Service */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Email Address <span className="text-slate-500 font-normal lowercase">(optional)</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="e.g. name@example.com"
                    className={`w-full px-3.5 py-2.5 bg-slate-900 border rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500 ${
                      errors.email ? "border-red-500" : "border-slate-700"
                    }`}
                  />
                  {errors.email && (
                    <span className="text-xs text-red-400 mt-1 block">{errors.email}</span>
                  )}
                </div>

                <div>
                  <label htmlFor="service_id" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Service Route Required <span className="text-red-400">*</span>
                  </label>
                  <select
                    id="service_id"
                    name="service_id"
                    value={formData.service_id}
                    onChange={handleChange}
                    className={`w-full px-3.5 py-2.5 bg-slate-900 border rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-500 ${
                      errors.service_id ? "border-red-500" : "border-slate-700"
                    }`}
                    required
                  >
                    <option value="">-- Please select a care route --</option>
                    {servicesData.map((s) => (
                      <option key={s.id} value={s.id}>
                        {s.number}. {s.title} ({s.category})
                      </option>
                    ))}
                    <option value="general-inquiry">General Care Desk Enquiry</option>
                  </select>
                  {errors.service_id && (
                    <span className="text-xs text-red-400 mt-1 block">{errors.service_id}</span>
                  )}
                </div>
              </div>

              {/* Grid 3: Area & Preferred Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="location" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Area / Location in Islamabad &amp; Rawalpindi <span className="text-red-400">*</span>
                  </label>
                  <input
                    id="location"
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="e.g. Sector F-8/2, DHA Phase 2, Bahria Phase 4"
                    className={`w-full px-3.5 py-2.5 bg-slate-900 border rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500 ${
                      errors.location ? "border-red-500" : "border-slate-700"
                    }`}
                    required
                  />
                  {errors.location && (
                    <span className="text-xs text-red-400 mt-1 block">{errors.location}</span>
                  )}
                </div>

                <div>
                  <label htmlFor="preferred_contact_time" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                    Preferred Time to Contact
                  </label>
                  <select
                    id="preferred_contact_time"
                    name="preferred_contact_time"
                    value={formData.preferred_contact_time}
                    onChange={handleChange}
                    className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white focus:outline-none focus:ring-2 focus:ring-brand-500"
                  >
                    <option value="Morning (9 AM – 12 PM)">Morning (9:00 AM – 12:00 PM)</option>
                    <option value="Afternoon (12 PM – 4 PM)">Afternoon (12:00 PM – 4:00 PM)</option>
                    <option value="Evening (4 PM – 8 PM)">Evening (4:00 PM – 8:00 PM)</option>
                    <option value="Anytime during care hours">Anytime during care hours (8 AM – 10 PM)</option>
                  </select>
                </div>
              </div>

              {/* Requirement Textarea */}
              <div>
                <label htmlFor="care_requirement" className="block text-xs font-bold uppercase tracking-wider text-slate-300 mb-1.5">
                  Brief Care Requirement <span className="text-slate-500 font-normal lowercase">(condition, mobility, shift preference)</span>
                </label>
                <textarea
                  id="care_requirement"
                  name="care_requirement"
                  rows={3}
                  value={formData.care_requirement}
                  onChange={handleChange}
                  placeholder="Describe patient age, general condition, preferred shift (e.g. 12-hour day/night or visiting sessions), or doctor instructions."
                  className="w-full px-3.5 py-2.5 bg-slate-900 border border-slate-700 rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500"
                />
              </div>

              {/* Privacy & Medical Records Warning */}
              <div className="p-3.5 bg-slate-900/90 rounded-lg border border-slate-700/70 text-[11px] text-slate-400 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-slate-300">
                  <ShieldCheck className="w-3.5 h-3.5 text-brand-400" />
                  <span>Privacy Notice &amp; Emergency Precaution:</span>
                </div>
                <p>
                  Please <strong>do not submit</strong> CNIC numbers, sensitive diagnostic reports, or acute emergency requests in this form. First Health Care provides scheduled supportive care. In acute medical emergencies, immediately take the patient to the nearest hospital emergency room.
                </p>
              </div>

              {/* Consent Checkbox */}
              <div>
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    name="consent"
                    checked={formData.consent}
                    onChange={handleChange}
                    className="mt-1 w-4 h-4 rounded border-slate-700 bg-slate-900 text-brand-600 focus:ring-brand-500"
                    required
                  />
                  <span className="text-xs text-slate-300 leading-normal">
                    I agree to be contacted by First Health Care via phone, SMS, or WhatsApp regarding this enquiry to discuss care scope, availability, and applicable charges. <span className="text-red-400">*</span>
                  </span>
                </label>
                {errors.consent && (
                  <span className="text-xs text-red-400 mt-1 block">{errors.consent}</span>
                )}
              </div>

              {/* Submit Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-brand-700 hover:bg-brand-600 text-white font-semibold text-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-200 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Submitting to Care Desk...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Care Enquiry</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
