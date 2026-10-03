export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface ServiceDetail {
  id: string;
  number: string;
  slug: string;
  title: string;
  category: "Everyday & ongoing care" | "Specialized recovery" | "Additional specialist routes";
  categoryGroup: "01–04" | "05–06" | "07–08";
  shortDescription: string;
  heroDescription: string;
  whyThisHelps: string[];
  whatGetsDiscussed: string[];
  scope: string[];
  arrangements: string[];
  guidance: string;
  iconName: string;
  badge: string;
  faqs: ServiceFAQ[];
  metaDescription: string;
}

export const servicesData: ServiceDetail[] = [
  {
    id: "home-nursing",
    number: "01",
    slug: "home-nursing-care",
    title: "Home Nursing Care",
    category: "Everyday & ongoing care",
    categoryGroup: "01–04",
    badge: "Continuous & Visiting Nursing",
    shortDescription: "Professional home nursing for post-hospital discharge, routine monitoring, injections, and medication management.",
    heroDescription: "Qualified nursing assistance delivered directly at home across Islamabad and Rawalpindi. Coordinated around your doctor's instructions, patient mobility, and preferred family schedule.",
    whyThisHelps: [
      "Smooth transition from hospital discharge to home recovery",
      "Regular vital signs tracking and clinical observation",
      "Medication and injection administration according to formal medical prescriptions",
      "Clean dressing, wound care, and infection prevention",
      "Peace of mind for families needing dependable, qualified nursing presence"
    ],
    whatGetsDiscussed: [
      "Patient diagnosis, current discharge summary, or doctor orders",
      "Clinical needs: IV lines, catheter, NG tube, injections, or dressing changes",
      "Preferred shift format: 6-hour, 12-hour daytime, 12-hour night, or 24-hour dedicated nursing",
      "Exact residence address in Islamabad or Rawalpindi",
      "Applicable charges and professional availability before confirmation"
    ],
    scope: [
      "Vitals monitoring (blood pressure, pulse, blood glucose, temperature, oxygen saturation)",
      "Medication administration per physician prescriptions",
      "Intravenous (IV) & intramuscular (IM) injections where ordered",
      "Aseptic wound dressing, surgical suture care, and bed sore management",
      "Catheter care (insertion/removal per protocol) and Ryle's tube / NG feeding management",
      "Oxygen therapy monitoring and tracheostomy care support",
      "Liaison with primary treating physicians and daily family reporting"
    ],
    arrangements: [
      "Focused Clinical Visits (1–2 hours for dressings, injections, or catheter maintenance)",
      "12-Hour Day / Night Nursing Shift",
      "24-Hour Continuous Nursing Care (rotating qualified nursing staff)",
      "Ongoing Multi-Week Convalescence Packages"
    ],
    guidance: "Home nursing care is coordinated strictly in alignment with your physician's written instructions. First Health Care provides nursing personnel support; acute emergency situations require immediate hospital emergency room attention.",
    iconName: "Stethoscope",
    metaDescription: "Professional home nursing care in Islamabad and Rawalpindi. Qualified nurses for post-hospital care, wound dressing, vitals monitoring, and injections.",
    faqs: [
      {
        question: "Are the nurses qualified and registered?",
        answer: "Yes. All nursing personnel coordinated by First Health Care possess accredited nursing qualifications, verified credentials, and proven bedside clinical experience in recognized hospitals."
      },
      {
        question: "Can I choose between male and female nursing staff?",
        answer: "Yes, you can specify your preference for a male or female nurse during the initial intake discussion. We match staff based on patient comfort and clinical suitability."
      },
      {
        question: "How quickly can nursing care begin at our home?",
        answer: "Following our initial care conversation, review of the patient's requirement, and confirmation of availability, nursing support can typically be deployed within 4 to 24 hours across Islamabad, Rawalpindi, DHA, and Bahria Town."
      },
      {
        question: "Are medical consumables and equipment included?",
        answer: "Basic nursing assessment tools (vitals kit) are brought by the nurse. Specialized disposable items (syringes, catheters, dressing gauze, specific medications) are supplied by the family or coordinated via our partner pharmacy network."
      }
    ]
  },
  {
    id: "elderly-care",
    number: "02",
    slug: "elderly-care-caretaker",
    title: "Elderly Care & Caretaker",
    category: "Everyday & ongoing care",
    categoryGroup: "01–04",
    badge: "Compassionate Daily Living Assistance",
    shortDescription: "Dedicated caretakers assisting older adults with mobility, personal hygiene, companionship, and medication reminders.",
    heroDescription: "Respectful, continuous caretaker assistance for senior family members in Islamabad & Rawalpindi. Designed to preserve dignity, encourage safe daily movement, and give families reassurance.",
    whyThisHelps: [
      "Preventing domestic falls and assisting with safe transfers",
      "Assistance with bathing, dressing, grooming, and personal hygiene",
      "Timely reminders for prescribed oral medicines",
      "Warm companionship, cognitive engagement, and emotional reassurance",
      "Assisting with nutritious meal feeding and hydration routines"
    ],
    whatGetsDiscussed: [
      "Level of mobility: bedbound, wheelchair-assisted, or ambulatory with stick",
      "Cognitive status: dementia, Alzheimer's, Parkinson's, or clear orientation",
      "Personal care routines and dietary preferences",
      "Shift preference: 12-hour day, 12-hour night, or 24-hour live-in support",
      "Room setup, home environment, and caregiver accommodation details"
    ],
    scope: [
      "Assisted personal grooming, sponge baths, shower support, and oral hygiene",
      "Assistance with toileting, diaper changing, and skin hygiene to prevent bedsores",
      "Bed repositioning every 2 hours for immobile individuals",
      "Mobility support for walking, gentle indoor stretching, and wheelchair transfers",
      "Timely reminders for oral medications (following doctor instructions)",
      "Serving prepared meals, feeding assistance, and ensuring steady hydration",
      "Companionship, reading, conversing, and family communication log"
    ],
    arrangements: [
      "12-Hour Daytime Caretaker Shift (e.g., 8:00 AM – 8:00 PM)",
      "12-Hour Nighttime Caretaker Shift (vigilance, bathroom assistance, peace of mind)",
      "24-Hour Live-in Caretaker Support (with designated rest schedule)",
      "Weekend or Respite Care for primary family caregivers"
    ],
    guidance: "Caretakers are trained personal support workers assisting with non-clinical activities of daily living (ADLs). For clinical procedures (injections, catheterization, IVs), our Home Nursing service route is recommended.",
    iconName: "UserRound",
    metaDescription: "Compassionate elderly care and trained caretakers in Islamabad and Rawalpindi. Assistance with personal hygiene, mobility, feeding, and companionship for seniors.",
    faqs: [
      {
        question: "What is the difference between a nurse and a caretaker?",
        answer: "A caretaker assists with daily living activities (bathing, feeding, mobility, diaper changes, companionship, and reminders). A registered nurse performs clinical procedures like IV infusions, wound dressings, injections, and medical vitals interpretation."
      },
      {
        question: "Can we interview the caretaker before starting?",
        answer: "Yes. We outline candidate profiles and can arrange a preliminary phone or video introduction to ensure your family feels comfortable with the match."
      },
      {
        question: "Do you provide caretakers for male and female patients?",
        answer: "Yes, both experienced male and female caretakers are available to honor religious, cultural, and personal preferences."
      }
    ]
  },
  {
    id: "physiotherapy",
    number: "03",
    slug: "physiotherapy-at-home",
    title: "Physiotherapy at Home",
    category: "Everyday & ongoing care",
    categoryGroup: "01–04",
    badge: "Mobility & Functional Rehabilitation",
    shortDescription: "Certified physical therapists delivering customized pain relief, stroke rehab, orthopedic recovery, and gait training at your doorstep.",
    heroDescription: "Evidence-based physical therapy delivered in the privacy of your home across Islamabad and Rawalpindi. Focused on restoring physical independence, relieving joint pain, and accelerating recovery.",
    whyThisHelps: [
      "Eliminates strenuous travel for patients with limited mobility or acute pain",
      "Personalized 1-on-1 assessment and continuous functional evaluation",
      "Post-fracture, joint replacement, and spinal surgery rehabilitation",
      "Therapeutic exercise, manual therapy, and gait retraining",
      "Empowers family members with safe transfer techniques and home exercise plans"
    ],
    whatGetsDiscussed: [
      "Primary clinical condition (e.g., stroke, hip replacement, knee arthroplasty, disc herniation)",
      "Current functional baseline and weight-bearing status",
      "Patient age, general health, and physician rehabilitation protocols",
      "Session scheduling (alternate days, 3 times weekly, or daily intensive sessions)",
      "Location and therapist gender preference"
    ],
    scope: [
      "Comprehensive initial musculoskeletal and neurological functional assessment",
      "Post-surgical rehabilitation (TKR, THR, spinal fusions, post-fractures)",
      "Neuro-rehabilitation for stroke, Parkinson's disease, and neuropathy",
      "Manual therapy, joint mobilization, and trigger-point myofascial release",
      "Strengthening, balance training, fall prevention, and vestibular exercises",
      "Gait retraining with walkers, crutches, or independent ambulation",
      "Chest physiotherapy and breathing exercises for respiratory health"
    ],
    arrangements: [
      "Single Diagnostic Evaluation & Initial Treatment Session",
      "Structured 10-Session or 15-Session Rehabilitation Packages",
      "Daily Intensive Rehab for acute post-discharge patients",
      "Clinic Visit Consultation route at partner physical therapy centers"
    ],
    guidance: "Sessions are conducted by qualified Doctors of Physical Therapy (DPT). All therapeutic protocols are aligned with your orthopedic surgeon's or neurologist's rehabilitation precautions.",
    iconName: "Activity",
    metaDescription: "Home physiotherapy in Islamabad & Rawalpindi. Qualified DPT therapists for stroke rehabilitation, post-surgery recovery, back pain, and mobility training.",
    faqs: [
      {
        question: "What qualifications do your physiotherapists hold?",
        answer: "Our physiotherapists hold accredited 5-year Doctor of Physical Therapy (DPT) degrees and extensive clinical experience in major teaching hospitals."
      },
      {
        question: "Do you have female physiotherapists for female patients?",
        answer: "Yes, we have female physical therapists for female patients across all major sectors of Islamabad and Rawalpindi."
      },
      {
        question: "How long does each home physiotherapy session last?",
        answer: "A typical home physiotherapy session lasts between 45 to 60 minutes, dedicated entirely to one-on-one manual therapy, guided exercise, and progressive assessment."
      }
    ]
  },
  {
    id: "psychology",
    number: "04",
    slug: "psychology-consultations",
    title: "Psychology Consultations",
    category: "Everyday & ongoing care",
    categoryGroup: "01–04",
    badge: "Confidential Clinical Counseling",
    shortDescription: "Private mental health consultations, psychotherapy, and emotional wellbeing counseling conducted in-person or securely online.",
    heroDescription: "Ethical, evidence-based psychological support delivered with utmost confidentiality in Islamabad, Rawalpindi, and online. Helping individuals navigate grief, chronic illness adjustment, anxiety, and depression.",
    whyThisHelps: [
      "Safe, judgment-free space to explore emotional challenges",
      "Evidence-backed therapies including Cognitive Behavioral Therapy (CBT)",
      "Support for patients coping with chronic medical diagnoses and stroke recovery",
      "Caregiver burnout counseling for family members managing intensive care",
      "Flexible formats: in-person clinic consultation, home visit where appropriate, or secure video"
    ],
    whatGetsDiscussed: [
      "Presenting concern: anxiety, mood, trauma, family stress, or illness-related distress",
      "Prior therapy history or ongoing psychiatric prescriptions",
      "Preferred session format: online via secure video or in-person consultation",
      "Scheduling preferences and urgency level",
      "Confirmation of strict client confidentiality and consultation boundaries"
    ],
    scope: [
      "Clinical psychological assessment and intake formulation",
      "Cognitive Behavioral Therapy (CBT) and Acceptance & Commitment Therapy (ACT)",
      "Stress management, panic disorder, and generalized anxiety interventions",
      "Depression support and mood regulation strategies",
      "Health psychology: supporting patients living with chronic illness or post-stroke changes",
      "Caregiver support counseling and boundary establishment",
      "Family communication and relational counseling"
    ],
    arrangements: [
      "Initial 50-Minute Clinical Intake & Assessment",
      "Weekly or Bi-Weekly Psychotherapy Sessions",
      "Online Confidential Video Sessions (accessible across Pakistan & overseas)",
      "In-Home Consultations for mobility-restricted or elderly clients (subject to clinical review)"
    ],
    guidance: "Psychology consultations provide psychological counseling and psychotherapy; psychologists do not prescribe pharmacological medication. If psychiatric medical evaluation is needed, coordination with a partner psychiatrist can be arranged.",
    iconName: "Brain",
    metaDescription: "Confidential clinical psychology consultations in Islamabad and Rawalpindi. Professional counseling for anxiety, depression, caregiver stress, and emotional recovery.",
    faqs: [
      {
        question: "Are consultations completely confidential?",
        answer: "Yes, strict clinical confidentiality is maintained in accordance with international psychological ethics. No session notes or client details are shared without your explicit consent."
      },
      {
        question: "Can consultations take place online via video?",
        answer: "Yes, many of our clients prefer secure online video consultations, which offer complete discretion and flexibility without travel."
      },
      {
        question: "Do your psychologists prescribe medicines?",
        answer: "Clinical psychologists provide psychotherapy and behavioral interventions. If pharmacological treatment is indicated, we coordinate with accredited consulting psychiatrists."
      }
    ]
  },
  {
    id: "stroke-recovery",
    number: "05",
    slug: "stroke-recovery-rehabilitation",
    title: "Stroke Recovery & Rehabilitation",
    category: "Specialized recovery",
    categoryGroup: "05–06",
    badge: "Multidisciplinary Post-Stroke Pathway",
    shortDescription: "Coordinated post-stroke care integrating physical therapy, speech exercises, skilled nursing, and dedicated caretaker assistance.",
    heroDescription: "A structured, human-led recovery pathway for stroke survivors returning home. Bringing together physical rehabilitation, nursing vigilance, and daily living support into a cohesive plan.",
    whyThisHelps: [
      "Maximizes the critical early months of neurological neuroplasticity",
      "Combines physical mobility retraining with daily bedside care",
      "Vigilant blood pressure and glycemic monitoring to prevent secondary complications",
      "Swallowing and aspiration precautions guidance",
      "Reduces caregiver exhaustion by providing skilled and coordinated home assistance"
    ],
    whatGetsDiscussed: [
      "Type of stroke (ischemic or hemorrhagic), date of event, and hospital discharge summary",
      "Functional impairments: hemiplegia, speech difficulty (aphasia), dysphagia, or cognitive changes",
      "Feeding mode: oral, pureed diet, or nasogastric (NG) tube feeding",
      "Mobility status and transfer requirements",
      "Combination care needs: e.g. nursing + caretaker + physiotherapy visits"
    ],
    scope: [
      "Daily neurological vitals tracking and secondary stroke risk factor surveillance",
      "Neuro-physiotherapy: tone normalization, upper-limb recovery, trunk stability, and gait training",
      "Positioning and passive range-of-motion to prevent contractures and shoulder subluxation",
      "Aspiration prevention techniques, upright positioning, and NG tube feeding management",
      "Skin integrity maintenance: scheduled turns and pressure-relief mattress management",
      "Cognitive engagement and encouragement for daily communication",
      "Family coaching on transfers, wheelchair handling, and home safety modifications"
    ],
    arrangements: [
      "Integrated Care (12/24-hour Nurse or Caretaker + Regular Home Physiotherapist Visits)",
      "Post-Acute Transition Phase (focused initial 4–8 weeks post hospital discharge)",
      "Long-Term Maintenance & Mobility Support Pathway"
    ],
    guidance: "Stroke rehabilitation involves collaborative multidisciplinary care. First Health Care coordinates the home team; treatment goals are shared with your neurologist or physiatrist to maintain clinical continuity.",
    iconName: "HeartPulse",
    metaDescription: "Comprehensive stroke recovery and rehabilitation at home in Islamabad & Rawalpindi. Integrated physiotherapy, home nursing, and caretaker support for stroke survivors.",
    faqs: [
      {
        question: "Why is multidisciplinary care important in stroke recovery?",
        answer: "A stroke affects mobility, speech, swallowing, and emotional well-being simultaneously. Combining skilled nursing, physical therapy, and attentive caregiving yields significantly better functional recovery than disjointed care."
      },
      {
        question: "When should home stroke rehabilitation begin?",
        answer: "Rehabilitation should commence as soon as the patient is medically stabilized and discharged from the hospital, taking advantage of the prime neuroplastic recovery window."
      },
      {
        question: "Can we combine a 24-hour caretaker with visits from a physiotherapist?",
        answer: "Yes, this is one of our most popular and effective arrangements. The caretaker assists with daily routines and transfers, while the licensed physiotherapist conducts targeted therapeutic sessions 3 to 6 times per week."
      }
    ]
  },
  {
    id: "post-operative",
    number: "06",
    slug: "post-operative-nursing-care",
    title: "Post-Operative Nursing Care",
    category: "Specialized recovery",
    categoryGroup: "05–06",
    badge: "Safe Hospital-to-Home Transition",
    shortDescription: "Specialized surgical aftercare including wound dressing, surgical drain monitoring, pain relief schedule, and mobility recovery.",
    heroDescription: "Clinical surgical convalescence delivered at home after major or minor operations in Islamabad and Rawalpindi. Designed to prevent hospital readmissions, surgical site infections, and recovery delays.",
    whyThisHelps: [
      "Safely bridge the vulnerable window between hospital discharge and full healing",
      "Sterile wound dressings adhering to surgical asepsis standards",
      "Prompt identification of surgical site complications (redness, dehiscence, fever)",
      "Professional handling of surgical drains, stomas, and catheters",
      "Strict adherence to surgeon's postoperative medication and mobility guidelines"
    ],
    whatGetsDiscussed: [
      "Type of surgery performed (cardiac, orthopedic, general, gynecological, neurosurgical)",
      "Hospital discharge instructions and surgeon's specific wound care protocol",
      "Presence of drains (Jackson-Pratt, Hemovac), urinary catheters, or external fixators",
      "Scheduled follow-up dates with the surgeon",
      "Preferred duration: short-term (3–7 days) or extended recovery (2–4 weeks)"
    ],
    scope: [
      "Strict aseptic wound inspection, dressing changes, and suture/staple observation",
      "Surgical drain measurement, recording, emptying, and site care",
      "Pain medication schedule adherence according to the discharge prescription",
      "Deep vein thrombosis (DVT) prevention support (compression stockings, early leg mobilization)",
      "Incentive spirometry guidance and respiratory monitoring post-general anesthesia",
      "Hydration and postoperative dietary transition monitoring",
      "Emergency warning signs surveillance and rapid surgeon notification if required"
    ],
    arrangements: [
      "Short-Term Intensive Convalescence (3–10 days post-discharge)",
      "12-Hour Day or Night Post-Op Nursing Vigilance",
      "24-Hour Continuous Surgical Nursing Support",
      "Scheduled Wound Dressing Home Visits (alternate days or daily as prescribed)"
    ],
    guidance: "Post-operative care is provided in direct continuity with your operating surgeon's written protocol. In the event of acute surgical emergencies (active hemorrhage, sudden severe pain, fever spikes), immediate hospital assessment is mandated.",
    iconName: "ShieldCheck",
    metaDescription: "Post-operative home nursing care in Islamabad & Rawalpindi. Sterile surgical wound dressing, drain management, pain relief schedules, and post-surgery convalescence.",
    faqs: [
      {
        question: "Can your nurses handle surgical drains and Foley catheters?",
        answer: "Yes, our nurses are fully trained in the sterile management, output measurement, and maintenance of Jackson-Pratt drains, Hemovacs, and urinary catheters."
      },
      {
        question: "Can you remove surgical sutures or staples at home?",
        answer: "Sutures and staples can be removed at home only when explicitly authorized in writing by your operating surgeon, utilizing sterile suture removal instruments."
      },
      {
        question: "How do we coordinate with our operating hospital?",
        answer: "We review your hospital discharge summary and nursing transfer sheet before care begins, ensuring every protocol is followed accurately."
      }
    ]
  },
  {
    id: "iv-therapy",
    number: "07",
    slug: "iv-therapy-at-home",
    title: "IV Therapy at Home",
    category: "Additional specialist routes",
    categoryGroup: "07–08",
    badge: "Clinical Infusion & Hydration",
    shortDescription: "Scheduled intravenous therapy, antibiotic drips, fluid rehydration, and injectable medications administered by certified nurses under physician orders.",
    heroDescription: "Safe, sterile intravenous infusions and injections administered in the comfort of your home in Islamabad and Rawalpindi. Administered strictly with a verified physician's prescription.",
    whyThisHelps: [
      "Avoids tedious travel and hospital waiting rooms for recurring IV infusions",
      "Experienced nurses proficient in cannulation and vein preservation",
      "Continuous monitoring throughout the infusion for adverse reactions or infiltration",
      "Aseptic maintenance of IV cannulas and peripheral lines",
      "Convenient scheduling around patient comfort and daily routine"
    ],
    whatGetsDiscussed: [
      "Valid, signed physician prescription specifying drug, dosage, and diluent",
      "Type of infusion: IV antibiotics, electrolyte rehydration, iron infusion, or vitamins",
      "Patient age, clinical history, and known drug allergies",
      "Availability of prescribed medications and infusion sets (or coordination with our pharmacy partners)",
      "Appointment timing and precise home location"
    ],
    scope: [
      "Review of physician's prescription and verification of drug expiry and clarity",
      "Peripheral intravenous cannulation with aseptic technique",
      "Controlled infusion administration via drip counter or calibrated rate",
      "Vital signs check prior to, during, and following infusion completion",
      "Pre-medication administration where prescribed (e.g., anti-allergics, antiemetics)",
      "Cannula flush with saline/heparin lock or safe cannula removal",
      "Immediate cessation protocol and emergency first aid if hypersensitivity occurs"
    ],
    arrangements: [
      "Single Infusion Visit (e.g. 1-hour antibiotic drip or hydration bag)",
      "Multi-Day Scheduled Antibiotic Courses (e.g. BD or TID administration over 5–7 days)",
      "Subcutaneous / Intramuscular Injection Visits",
      "Iron Infusion & Micronutrient Administration (under explicit physician authorization)"
    ],
    guidance: "IV therapy requires a valid, current prescription from a registered medical practitioner (PMC/PMDC). High-risk biologicals, chemotherapy, or untested proprietary blends will not be administered without specialized institutional clearance.",
    iconName: "FlaskConical",
    metaDescription: "Safe IV therapy at home in Islamabad & Rawalpindi. Antibiotic drips, hydration infusions, and injections administered by qualified nurses per physician prescription.",
    faqs: [
      {
        question: "Is a doctor's prescription required for IV therapy?",
        answer: "Yes, absolutely. A written prescription from a licensed physician specifying the medication, dosage, and dilution is mandatory for all intravenous therapies."
      },
      {
        question: "Who brings the medicines and cannula supplies?",
        answer: "You may purchase prescribed medications from your preferred pharmacy, or our care coordinator can assist in arranging them through accredited pharmacy partners."
      },
      {
        question: "What happens if there is an allergic reaction?",
        answer: "Our nurses monitor the infusion continuously. If any sign of allergic reaction or discomfort appears, the infusion is immediately halted, appropriate initial supportive steps are taken, and your physician or emergency services are contacted."
      }
    ]
  },
  {
    id: "hair-restoration",
    number: "08",
    slug: "hair-restoration-islamabad",
    title: "Hair Restoration",
    category: "Additional specialist routes",
    categoryGroup: "07–08",
    badge: "Specialist Clinical Consultation",
    shortDescription: "Specialist medical consultations, hair loss evaluation, PRP therapies, and surgical hair transplant coordination with accredited Islamabad clinics.",
    heroDescription: "Confidential clinical consultations for androgenetic alopecia, hair thinning, and restoration in Islamabad. Coordinated through leading partner dermatologists and hair transplant surgeons.",
    whyThisHelps: [
      "Scientific assessment of hair loss patterns, scalp health, and follicle density",
      "Clear differentiation between medical treatments, PRP therapy, and surgical options",
      "Direct referrals to certified, experienced hair restoration specialists",
      "Transparent consultation regarding realistic graft counts, timelines, and outcomes",
      "Avoids misleading commercial sales tactics with unbiased clinical guidance"
    ],
    whatGetsDiscussed: [
      "Age, duration and pattern of hair thinning (Norwood / Ludwig scale)",
      "Prior medical treatments (minoxidil, finasteride, PRP sessions)",
      "Family history of alopecia and overall scalp condition",
      "Preference between non-surgical therapies or Follicular Unit Extraction (FUE)",
      "Scheduling an in-clinic specialist consultation at our partner clinic in Islamabad"
    ],
    scope: [
      "Clinical hair and scalp assessment by qualified dermatological practitioners",
      "Digital trichoscopy evaluation of donor density and follicular units",
      "Medical management protocols for early to moderate hair thinning",
      "Platelet-Rich Plasma (PRP) and GFC (Growth Factor Concentrate) therapy coordination",
      "Advanced Sapphire FUE and DHI hair transplant surgical coordination",
      "Post-procedure wound care and follow-up washing protocols",
      "Long-term hair preservation and maintenance strategies"
    ],
    arrangements: [
      "Initial Specialist Clinical Consultation (in partner aesthetic clinic)",
      "Non-Surgical Regimen & PRP Session Package",
      "Sapphire FUE Hair Transplant Surgical Booking",
      "Post-Transplant Nursing Support & Scalp Care Visits"
    ],
    guidance: "Hair restoration consultations and surgical procedures take place in sterile partner aesthetic clinics in Islamabad under certified specialists. Home coordination covers preliminary intake, appointment coordination, and post-op nursing care.",
    iconName: "Sparkles",
    metaDescription: "Hair restoration and hair transplant consultations in Islamabad. Specialist evaluations, PRP therapy, and Sapphire FUE hair transplant coordination.",
    faqs: [
      {
        question: "Where does the hair restoration procedure take place?",
        answer: "Procedures and diagnostic trichoscopy evaluations are conducted at our accredited partner clinical facilities in Islamabad, equipped with sterile surgical theaters."
      },
      {
        question: "Can post-transplant washing be done at home?",
        answer: "Yes, our trained home nursing staff can assist with gentle postoperative hair washes and sterile saline misting according to your surgeon's exact protocol."
      },
      {
        question: "How do I know if I am a candidate for a hair transplant?",
        answer: "Candidate suitability depends on donor hair density, age, stability of hair loss, and scalp health. An in-person consultation with a hair restoration specialist provides an honest assessment."
      }
    ]
  }
];

export const serviceCategories = [
  {
    group: "01–04",
    name: "Everyday & ongoing care",
    description: "Core continuous healthcare and supportive care delivered at home for daily dignity and recovery.",
    services: servicesData.slice(0, 4)
  },
  {
    group: "05–06",
    name: "Specialized recovery",
    description: "Multi-disciplinary, targeted convalescence pathways for complex recovery needs.",
    services: servicesData.slice(4, 6)
  },
  {
    group: "07–08",
    name: "Additional specialist routes",
    description: "Specialized clinical procedures, intravenous therapies, and partner clinic routes.",
    services: servicesData.slice(6, 8)
  }
];
