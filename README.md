# First Health Care (Pvt) Ltd — Web Platform & Care Coordination Engine

> **Target:** [https://firsthealthcare.pk/](https://firsthealthcare.pk/)  
> **Geographic Coverage:** Islamabad, Rawalpindi, DHA Phase 1 & 2, Bahria Town (Phases 1–8)  
> **Direct Care Desk:** `0304 5121772` | `info@firsthealthcare.pk`  
> **Brand Principle:** *Human care. Clearly coordinated.*

---

## 1. Executive Overview

First Health Care is a **healthcare lead-generation and service-coordination platform** serving the Islamabad & Rawalpindi metropolitan area. 

### The Core Engine
Unlike an e-commerce storefront or instant automated marketplace, First Health Care implements a **human-in-the-loop healthcare coordination model**:
1. **Visitor arrives** and identifies a care need.
2. **Visitor selects a care route** or submits an enquiry with location and schedule.
3. **Care desk receives the enquiry** with complete marketing attribution (UTMs, click IDs, referrer).
4. **Clinical supervisors review** doctor instructions, patient mobility, and shift feasibility.
5. **Scope, schedule, and applicable charges are agreed** with the family prior to service.
6. **Qualified personnel are deployed** for home nursing, elderly care, physical therapy, or diagnostic sample collection.

---

## 2. 8 Coordinated Care Routes

The platform is structured into three numbered editorial categories:

### 01–04 Everyday & Ongoing Care
- **01 Home Nursing Care** (`/home-nursing-care/`): Post-hospital discharge, routine monitoring, injections, wound dressing, Foley catheter, and NG tube feeding.
- **02 Elderly Care & Caretaker** (`/elderly-care-caretaker/`): Respectful daily living assistance (ADLs), mobility support, bathing, grooming, and companionship.
- **03 Physiotherapy at Home** (`/physiotherapy-at-home/`): Certified Doctors of Physical Therapy (DPT) for post-op ortho rehab, back pain, and gait retraining.
- **04 Psychology Consultations** (`/psychology-consultations/`): Confidential psychotherapy and counseling in-person or via secure video.

### 05–06 Specialized Recovery
- **05 Stroke Recovery & Rehabilitation** (`/stroke-recovery-rehabilitation/`): Multidisciplinary pathway combining neuro-physiotherapy, skilled nursing, and 24h bedside care.
- **06 Post-Operative Nursing Care** (`/post-operative-nursing-care/`): Sterile surgical wound care, drain management, and surgeon protocol continuity.

### 07–08 Additional Specialist Routes
- **07 IV Therapy at Home** (`/iv-therapy-at-home/`): Sterile antibiotic drips, fluid rehydration, and injections administered per registered doctor's prescription.
- **08 Hair Restoration** (`/hair-restoration-islamabad/`): Specialist consultations, trichoscopy, and Sapphire FUE transplant coordination with partner clinical facilities in Islamabad.

---

## 3. Technology Stack

- **Framework:** Next.js 14+ (App Router with SSR & dynamic API routes)
- **Language:** TypeScript 5 (Strict typing across leads, attribution, and service models)
- **Styling:** Tailwind CSS with custom medical-editorial theme
- **Icons:** Lucide Icons (Consistent medical and navigation iconography)
- **Data Persistence:**
  - Local JSON persistence engine (`lib/storage.ts`) out of the box
  - Supabase / PostgreSQL production schema ready (`supabase/schema.sql`)
- **SEO & Metadata:** Structured Data (JSON-LD) for `MedicalBusiness`, `Service`, `Organization`, and dynamic OpenGraph tags
- **Form Security:** Client & server validation, Pakistani phone regex (`03xx` / `+92`), honeypot bot trap, no sensitive medical records collected on public forms

---

## 4. Platform Architecture & Routes

```text
/                                   -> Home (Hero, Requirement Block, 8 Care Routes, Process, Partners, Form)
/services/                          -> Comprehensive Services Directory & Shift Comparison
/home-nursing-care/                 -> Service 01 Dedicated File
/elderly-care-caretaker/            -> Service 02 Dedicated File
/physiotherapy-at-home/             -> Service 03 Dedicated File
/psychology-consultations/          -> Service 04 Dedicated File
/stroke-recovery-rehabilitation/    -> Service 05 Dedicated File
/post-operative-nursing-care/       -> Service 06 Dedicated File
/iv-therapy-at-home/                -> Service 07 Dedicated File
/hair-restoration-islamabad/        -> Service 08 Dedicated File
/hospital-diagnostic-partners/      -> Partner Diagnostic Labs (IDC, Nayab, Excel, Chughtai) & Clinical Facilities
/about-us/                          -> Corporate Identity, Leadership Philosophy & Office Desks
/contact-us/                        -> Direct Call Desk, WhatsApp, Email, and Google Maps Links
/faqs/                              -> Comprehensive Categorized FAQ Accordion
/privacy-policy/                    -> Privacy Architecture & Medical Disclaimer
/admin/                             -> Internal Care Dispatch & Attribution CRM Portal
/api/enquiry/                       -> Public Lead Ingestion Endpoint (POST)
/api/leads/                         -> Internal CRM Query & Status Update Endpoint (GET, PATCH)
```

---

## 5. Marketing Attribution & Lead Engine

Every enquiry captures first-party marketing attribution automatically:
- `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`
- Google Ads Click ID (`gclid`), Meta Click ID (`fbclid`)
- Referring URL & Landing Page
- Anonymous `visitor_id`, `session_id`, and `arrival_id`
- Timestamp and explicit affirmative consent

### Lead Workflow States (CRM Pipeline)
```text
NEW -> CONTACT_ATTEMPTED -> REQUIREMENT_REVIEW -> AVAILABILITY_CHECK 
    -> OPTIONS_DISCUSSED -> PRICE_DISCUSSED -> CONFIRMED -> SERVICE_COORDINATED 
    -> COMPLETED (or NOT_AVAILABLE / LOST)
```

---

## 6. Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Start the Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) to view the public website.  
Open [http://localhost:3000/admin](http://localhost:3000/admin) to view the Internal Care Desk CRM.

### 3. Build for Production
```bash
npm run build
npm start
```

---

## 7. Medical Precaution & Compliance
First Health Care provides scheduled supportive healthcare coordination. It does not provide acute hospital emergency room trauma resuscitation. In life-threatening emergencies, patients must immediately be transported to a hospital emergency department.
