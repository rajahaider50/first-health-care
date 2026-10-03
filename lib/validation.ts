import { EnquirySubmissionData } from "./types";

export interface ValidationResult {
  isValid: boolean;
  errors: Record<string, string>;
}

export function validatePakistaniPhone(phone: string): boolean {
  if (!phone) return false;
  // Clean phone string
  const cleaned = phone.replace(/[\s\-\(\)]/g, "");
  // Matches:
  // 03001234567 (11 digits starting with 03)
  // +923001234567 or 923001234567 (12-13 digits starting with +923 or 923)
  // 00923001234567 (14 digits starting with 00923)
  const pkRegex = /^((\+92)|(0092)|(92))?3[0-9]{9}$|^03[0-9]{9}$/;
  return pkRegex.test(cleaned);
}

export function validateEmail(email: string): boolean {
  if (!email) return true; // Email is optional in First Health Care blueprint
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
}

export function validateEnquiryForm(data: Partial<EnquirySubmissionData>): ValidationResult {
  const errors: Record<string, string> = {};

  if (!data.full_name || data.full_name.trim().length < 2) {
    errors.full_name = "Please enter your full name.";
  }

  if (!data.phone || !data.phone.trim()) {
    errors.phone = "Please enter your phone or WhatsApp number.";
  } else if (!validatePakistaniPhone(data.phone)) {
    errors.phone = "Please enter a valid Pakistani phone number (e.g., 0304 5121772 or +92 304 5121772).";
  }

  if (data.email && data.email.trim() && !validateEmail(data.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!data.service_id || !data.service_id.trim()) {
    errors.service_id = "Please select a required healthcare service.";
  }

  if (!data.location || data.location.trim().length < 2) {
    errors.location = "Please specify your sector or area in Islamabad/Rawalpindi.";
  }

  if (data.consent !== true) {
    errors.consent = "You must provide consent for our care desk to contact you regarding this enquiry.";
  }

  // Honeypot anti-spam check: if honeypot has any content, it's a bot
  if (data.honeypot && data.honeypot.trim().length > 0) {
    errors.honeypot = "Spam detected.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}
