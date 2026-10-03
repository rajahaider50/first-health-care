import React from "react";
import { ClipboardList, MapPin, Clock, CheckCircle } from "lucide-react";

export default function BeforeCareBegins() {
  const points = [
    {
      step: "01",
      title: "Requirement",
      icon: <ClipboardList className="w-5 h-5 text-brand-800" />,
      description: "Clearly identify the patient's primary condition, current doctor instructions, or specific daily living needs so the right care role is selected."
    },
    {
      step: "02",
      title: "Location",
      icon: <MapPin className="w-5 h-5 text-brand-800" />,
      description: "Provide the exact sector or community in Islamabad, Rawalpindi, DHA, or Bahria Town to confirm staff transit feasibility and response window."
    },
    {
      step: "03",
      title: "Schedule",
      icon: <Clock className="w-5 h-5 text-brand-800" />,
      description: "Specify preferred attendance format: single targeted visit, 12-hour day or night shift, or dedicated 24-hour continuous care."
    },
    {
      step: "04",
      title: "Next Step",
      icon: <CheckCircle className="w-5 h-5 text-brand-800" />,
      description: "Our care coordinator reviews staff availability, agrees on written scope and charges with your family, and confirms deployment."
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <div className="text-xs font-mono uppercase tracking-wider text-brand-800 font-bold mb-2">
            Pre-Deployment Clarity
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-care-dark tracking-tight mb-4">
            Before Care Begins
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            We operate with complete clinical transparency. These four key details are clarified before any personnel is deployed to your home.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((pt) => (
            <div
              key={pt.step}
              className="bg-slate-50 rounded-xl p-6 border border-slate-200 relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-black text-slate-300">
                    {pt.step}
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-white border border-slate-200 flex items-center justify-center shadow-xs">
                    {pt.icon}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-care-dark mb-2">
                  {pt.title}
                </h3>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {pt.description}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-200/60 text-[11px] font-mono text-brand-800 font-semibold">
                Transparent verification
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
