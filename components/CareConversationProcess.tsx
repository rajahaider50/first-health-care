import React from "react";
import { MessageSquareText, PhoneCall, CheckCheck, FileText } from "lucide-react";

export default function CareConversationProcess() {
  const steps = [
    {
      num: "01",
      name: "Tell us",
      icon: <MessageSquareText className="w-5 h-5 text-brand-800" />,
      detail: "Share your service need, location in Islamabad/Rawalpindi, and schedule via our online form, direct phone call, or WhatsApp."
    },
    {
      num: "02",
      name: "Discuss",
      icon: <PhoneCall className="w-5 h-5 text-brand-800" />,
      detail: "Our care coordination desk reviews practical medical details, doctor orders, patient mobility, and caregiver preferences."
    },
    {
      num: "03",
      name: "Review",
      icon: <FileText className="w-5 h-5 text-brand-800" />,
      detail: "We check qualified staff availability, clarify the specific scope of duties, and provide clear applicable charges with no surprises."
    },
    {
      num: "04",
      name: "Confirm",
      icon: <CheckCheck className="w-5 h-5 text-brand-800" />,
      detail: "Once your family agrees on schedule, scope, and fees, the care assignment is confirmed and coordinated smoothly."
    }
  ];

  return (
    <section className="py-16 sm:py-20 bg-slate-900 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mb-12 sm:mb-16">
          <div className="text-xs font-mono uppercase tracking-wider text-brand-400 font-bold mb-2">
            The 4-Step Process
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight mb-4">
            The Care Conversation
          </h2>
          <p className="text-base text-slate-300 leading-relaxed">
            How First Health Care handles every healthcare enquiry from initial contact through to verified deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, index) => (
            <div
              key={s.num}
              className="bg-slate-800/80 rounded-xl p-6 border border-slate-700/80 relative flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-2xl font-black text-brand-400">
                    {s.num}
                  </span>
                  <div className="w-9 h-9 rounded-lg bg-slate-700/60 border border-slate-600/80 flex items-center justify-center">
                    {s.icon}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-white mb-2">
                  {s.name}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {s.detail}
                </p>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-700/60 flex items-center justify-between text-[11px] font-mono text-slate-400">
                <span>Step {s.num} of 04</span>
                {index < 3 ? <span>→ Next step</span> : <span>✓ Care begins</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
