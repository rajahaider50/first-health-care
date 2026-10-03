import React from "react";
import { ShieldCheck, AlertCircle, Users, Check, MapPin, Stethoscope } from "lucide-react";

export default function TrustTransparency() {
  const principles = [
    {
      title: "Local Twin Cities Coverage",
      desc: "Rooted in Islamabad and Rawalpindi. We know the local neighborhoods, traffic corridors, and clinical referral hospitals firsthand."
    },
    {
      title: "Requirement-Based Discussion",
      desc: "Every patient has distinct medical nuances. We listen first, review doctor notes, and tailor care instead of forcing generic pre-packaged plans."
    },
    {
      title: "Direct Human Care Desk",
      desc: "You speak directly to experienced care coordinators who understand healthcare realities, not an unassisted automated chat bot."
    },
    {
      title: "No Artificial Outcome Guarantees",
      desc: "Ethical healthcare makes no exaggerated claims or guaranteed cures. We promise verified qualifications, diligent bedside care, and constant communication."
    },
    {
      title: "Coordination, Not Substitution",
      desc: "We coordinate with leading diagnostic laboratories and hospitals, serving as your supportive home care partner rather than an isolated silo."
    },
    {
      title: "Clear Boundaries on Emergency Care",
      desc: "We provide scheduled home nursing and supportive care. In acute, life-threatening emergencies, we direct families to hospital emergency departments immediately."
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-50/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-mono uppercase tracking-wider text-brand-800 font-bold mb-2">
            Ethical Healthcare Standards
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-care-dark tracking-tight mb-4">
            Trust &amp; Transparency
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            In healthcare, honesty is paramount. We avoid synthetic metrics, fake reviews, and inflated marketing promises, holding ourselves to genuine professional standards.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {principles.map((p, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 border border-slate-200/90 shadow-xs space-y-3"
            >
              <div className="flex items-center gap-2 text-brand-800">
                <Check className="w-4 h-4 text-brand-700 shrink-0" />
                <h3 className="text-sm font-bold text-slate-900">
                  {p.title}
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
