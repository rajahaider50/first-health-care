export interface FAQItem {
  id: string;
  category: "General & Coordination" | "Pricing & Availability" | "Services & Clinical" | "Locations & Contact";
  question: string;
  answer: string;
}

export const generalFAQs: FAQItem[] = [
  {
    id: "services-available",
    category: "General & Coordination",
    question: "Which home healthcare services are available through First Health Care?",
    answer: "First Health Care coordinates home nursing care, elderly care and caretaker support, home physiotherapy, psychology consultations, stroke recovery & rehabilitation pathways, post-operative nursing, IV therapy at home, and clinical hair restoration consultations in Islamabad."
  },
  {
    id: "service-areas",
    category: "Locations & Contact",
    question: "Which specific areas in Islamabad and Rawalpindi do you serve?",
    answer: "Our care coordination desk covers all sectors of Islamabad (F, G, E, I, H sectors, Bani Gala, Chak Shahzad, Park View), Rawalpindi, DHA Phase 1 & 2, and Bahria Town (Phases 1 through 8). If you reside in an adjacent area, please contact our desk to check current staff availability."
  },
  {
    id: "guaranteed-availability",
    category: "Pricing & Availability",
    question: "Is staff availability guaranteed immediately upon enquiry?",
    answer: "No. In accordance with ethical healthcare practice, staff availability is not automatically guaranteed until your specific requirement, location, schedule, and patient condition are reviewed by our team. Once assessed, we match and confirm qualified personnel."
  },
  {
    id: "how-charges-work",
    category: "Pricing & Availability",
    question: "How are charges and service fees determined?",
    answer: "We avoid arbitrary one-size-fits-all prices because patient requirements vary widely (e.g. single 1-hour visit, 12-hour day/night shift, or 24-hour continuous care). Scope, required qualifications, and schedule are discussed transparently with your family, and applicable charges are agreed upon before care begins."
  },
  {
    id: "enquire-by-phone-whatsapp",
    category: "Locations & Contact",
    question: "Can enquiries be made directly by phone or WhatsApp?",
    answer: "Yes, absolutely. You can call our care desk directly at 0304 5121772 or message us on WhatsApp. Our coordination team is active daily from 8:00 AM to 10:00 PM PKT to assist you."
  },
  {
    id: "emergency-service",
    category: "General & Coordination",
    question: "Is First Health Care an emergency medical service?",
    answer: "No. First Health Care is a scheduled home healthcare coordination and supportive service. We do not provide acute hospital emergency room interventions, active cardiac arrest resuscitation, or trauma rescue. In an acute medical emergency, please immediately take the patient to the nearest hospital emergency room."
  },
  {
    id: "multiple-services",
    category: "Services & Clinical",
    question: "Can multiple services be coordinated together (e.g. nurse + physiotherapist)?",
    answer: "Yes, many of our patients benefit from integrated care plans. For instance, post-stroke patients frequently receive 24-hour caretaker or nursing support along with scheduled home visits from a licensed Doctor of Physical Therapy (DPT)."
  },
  {
    id: "home-visits-availability",
    category: "Services & Clinical",
    question: "Are home visits always available for all services?",
    answer: "Home visits are available for home nursing, elderly care, physiotherapy, stroke rehabilitation, post-operative recovery, IV therapy, and home lab sample collections. Psychology consultations are offered both in-person and via secure online video. Hair restoration consultations take place at partner clinical centers in Islamabad."
  },
  {
    id: "doctor-orders",
    category: "Services & Clinical",
    question: "Do I need a doctor's prescription for home nursing and IV therapy?",
    answer: "For clinical procedures such as intravenous infusions, antibiotic drips, tube insertion, and specialized wound care, a written prescription or hospital discharge summary from a registered medical practitioner is required to ensure safe clinical continuity."
  },
  {
    id: "payment-terms",
    category: "Pricing & Availability",
    question: "What are the payment arrangements for ongoing home healthcare?",
    answer: "Charges and payment schedules (advance deposit for monthly/weekly nursing or per-session payment for physiotherapy) are confirmed in writing prior to deployment. Payments are handled via direct bank transfer or formal billing coordination."
  }
];
