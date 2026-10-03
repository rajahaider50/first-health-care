export type LeadStatus =
  | "NEW"
  | "CONTACT_ATTEMPTED"
  | "REQUIREMENT_REVIEW"
  | "AVAILABILITY_CHECK"
  | "OPTIONS_DISCUSSED"
  | "PRICE_DISCUSSED"
  | "CONFIRMED"
  | "SERVICE_COORDINATED"
  | "COMPLETED"
  | "NOT_AVAILABLE"
  | "LOST";

export interface LeadAttribution {
  source_platform?: string;
  landing_page?: string;
  page_url?: string;
  referrer?: string;
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_content?: string;
  utm_term?: string;
  gclid?: string;
  gbraid?: string;
  wbraid?: string;
  fbclid?: string;
  fbc?: string;
  fbp?: string;
  google_campaign_id?: string;
  google_ad_group_id?: string;
  google_ad_id?: string;
  google_keyword?: string;
  meta_campaign_id?: string;
  meta_ad_set_id?: string;
  meta_ad_id?: string;
  visitor_id?: string;
  session_id?: string;
  arrival_id?: string;
}

export interface LeadRecord {
  id: string;
  reference_code: string;
  full_name: string;
  phone: string;
  email?: string;
  service_id: string;
  service_title: string;
  location: string;
  preferred_contact_time?: string;
  care_requirement?: string;
  consent: boolean;
  consent_timestamp: string;
  status: LeadStatus;
  assigned_to?: string;
  internal_notes?: string[];
  attribution: LeadAttribution;
  created_at: string;
  updated_at: string;
}

export interface EnquirySubmissionData {
  full_name: string;
  phone: string;
  email?: string;
  service_id: string;
  location: string;
  preferred_contact_time?: string;
  care_requirement?: string;
  consent: boolean;
  honeypot?: string; // anti-spam
  attribution?: LeadAttribution;
}
