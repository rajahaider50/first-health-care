export interface PartnerItem {
  id: string;
  name: string;
  category: "diagnostic" | "clinical";
  shortDescription: string;
  city: string;
  servicesOffered: string[];
  coordinationRole: string;
}

export const diagnosticPartners: PartnerItem[] = [
  {
    id: "idc",
    name: "Islamabad Diagnostic Centre (IDC)",
    category: "diagnostic",
    shortDescription: "One of Pakistan's most established imaging and laboratory networks with advanced multi-slice CT, MRI, and molecular testing.",
    city: "Islamabad & Rawalpindi",
    servicesOffered: ["Comprehensive Blood Tests", "Digital X-Ray", "Ultrasound", "MRI & CT Imaging", "PCR & Molecular Diagnostics"],
    coordinationRole: "Priority home sample collection booking and report routing."
  },
  {
    id: "nayab-labs",
    name: "Nayab Labs & Diagnostic Centre",
    category: "diagnostic",
    shortDescription: "Respected diagnostic laboratory and imaging center known for rapid turnaround in routine and specialized pathology in Rawalpindi & Islamabad.",
    city: "Rawalpindi & Islamabad",
    servicesOffered: ["Routine Hematology", "Biochemistry Panels", "Histopathology", "Specialized Hormonal Assays", "Ultrasound & ECG"],
    coordinationRole: "Phlebotomist home dispatch and physician reporting."
  },
  {
    id: "excel-labs",
    name: "Excel Labs",
    category: "diagnostic",
    shortDescription: "Nationwide ISO-certified pathology network delivering internationally accredited biochemical, microbiological, and hematological testing.",
    city: "Islamabad, Rawalpindi & Nationwide",
    servicesOffered: ["ISO-Standard Pathology", "Therapeutic Drug Monitoring", "Endocrine Panels", "Genetic & Specialized Diagnostics"],
    coordinationRole: "Home blood draw coordination and online report access."
  },
  {
    id: "chughtai-lab",
    name: "Chughtai Lab",
    category: "diagnostic",
    shortDescription: "Nationally recognized diagnostic pioneer providing 24/7 testing, home blood collection, and clinical pathology.",
    city: "Islamabad & Rawalpindi Branches",
    servicesOffered: ["Routine & Special Blood Tests", "Culture & Sensitivity", "Allergy Testing", "Cardiac Markers", "Home Phlebotomy"],
    coordinationRole: "Direct laboratory sample booking and patient delivery."
  },
  {
    id: "d-watson-labs",
    name: "D. Watson Labs & Diagnostic Centre",
    category: "diagnostic",
    shortDescription: "Trusted healthcare name in the twin cities providing accessible clinical lab tests, routine screenings, and pharmacy support.",
    city: "Islamabad & Rawalpindi",
    servicesOffered: ["Routine Lab Panels", "Diabetes Screenings", "Lipid & Liver Profiles", "Prescription Coordination"],
    coordinationRole: "Convenient local collection and diagnostic routing."
  },
  {
    id: "metropole-labs",
    name: "Metropole Laboratories",
    category: "diagnostic",
    shortDescription: "Specialized pathology lab offering comprehensive blood tests, hormonal evaluations, and prompt home collection services.",
    city: "Rawalpindi & Islamabad",
    servicesOffered: ["Clinical Chemistry", "Hematology", "Immunology", "Urine & Stool Analysis"],
    coordinationRole: "Sample pickup coordination and digital reporting."
  },
  {
    id: "pdc",
    name: "Premium Diagnostic Center (PDC)",
    category: "diagnostic",
    shortDescription: "Modern diagnostic center featuring high-resolution ultrasonography, Doppler studies, digital radiography, and clinical lab work.",
    city: "Islamabad",
    servicesOffered: ["Color Doppler Ultrasound", "Digital X-Ray", "Routine & Preventive Health Checkups", "Executive Screening"],
    coordinationRole: "Diagnostic appointment scheduling and transit coordination."
  }
];

export const clinicalPartners: PartnerItem[] = [
  {
    id: "premium-hospital",
    name: "Premium International Hospital",
    category: "clinical",
    shortDescription: "Multispecialty tertiary hospital with state-of-the-art operative theaters, inpatient convalescence, and specialty physician clinics.",
    city: "Islamabad",
    servicesOffered: ["Surgical Admissions", "Specialist Consultations", "ICU Support", "Post-Discharge Rehabilitation Alignment"],
    coordinationRole: "Hospital discharge planning and nursing continuity at home."
  },
  {
    id: "care-plus",
    name: "Care+ Medical Centre",
    category: "clinical",
    shortDescription: "Comprehensive outpatient clinic network offering consulting physicians, geriatricians, and specialized rehabilitation facilities.",
    city: "Islamabad & Rawalpindi",
    servicesOffered: ["Internal Medicine", "Geriatric Care", "Physiotherapy Clinics", "Preventive Wellness Checks"],
    coordinationRole: "Physician referral and treatment plan coordination."
  },
  {
    id: "medix-clinic",
    name: "Medix Signature Clinic",
    category: "clinical",
    shortDescription: "Premier aesthetic, restorative, and specialist clinical center offering hair restoration, dermatology, and restorative procedures.",
    city: "Islamabad",
    servicesOffered: ["Hair Restoration & FUE Transplant", "PRP & Scalp Rejuvenation", "Clinical Dermatology"],
    coordinationRole: "Specialist consultation scheduling and post-op care linkage."
  }
];

export const diagnosticTests = [
  { name: "Complete Blood Count (CBC)", category: "Hematology", description: "Evaluates overall health, detects infection, anemia, and white blood cell status." },
  { name: "Erythrocyte Sedimentation Rate (ESR)", category: "Inflammation", description: "Markers of systemic inflammation or ongoing medical conditions." },
  { name: "Fasting & Random Blood Glucose", category: "Metabolic", description: "Monitoring diabetes management and glycemic control." },
  { name: "Liver Function Tests (LFT)", category: "Biochemistry", description: "Bilirubin, ALT, AST, ALP, and albumin to evaluate liver health." },
  { name: "Renal / Kidney Function Tests (RFT/KFT)", category: "Biochemistry", description: "Serum creatinine, urea, BUN, and electrolytes for kidney health." },
  { name: "Glycated Hemoglobin (HbA1c)", category: "Diabetes", description: "Reflects 3-month average blood glucose control." },
  { name: "Lipid Profile", category: "Cardiovascular", description: "Total cholesterol, HDL, LDL, and triglycerides for heart health." },
  { name: "Thyroid Stimulating Hormone (TSH)", category: "Endocrine", description: "Assesses thyroid gland activity and metabolic regulation." },
  { name: "Vitamin D (25-OH)", category: "Bone Health", description: "Crucial for bone density, immune health, and elderly recovery." },
  { name: "HBsAg & Anti-HCV", category: "Serology", description: "Screening for Hepatitis B and Hepatitis C viral infections." },
  { name: "Urine Routine Examination (Urine R/E)", category: "Urology", description: "Identifies urinary tract infections (UTI), kidney health, and proteinuria." },
  { name: "Digital X-Ray (Chest / Orthopedic)", category: "Radiology", description: "Imaging for lungs, bone fractures, and joint evaluations." },
  { name: "Diagnostic Ultrasound / Doppler", category: "Imaging", description: "Abdominal, pelvic, and vascular evaluation." },
  { name: "Electrocardiogram (ECG)", category: "Cardiology", description: "Recording electrical activity of the heart at home or partner clinic." },
  { name: "Home Sample Collection", category: "Phlebotomy", description: "Sterile phlebotomist visit directly to your home across Islamabad & Rawalpindi." }
];
