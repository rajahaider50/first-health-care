import React from "react";
import Link from "next/link";
import { ArrowRight, Stethoscope, UserRound, Activity, Brain, HeartPulse, ShieldCheck, FlaskConical, Sparkles } from "lucide-react";
import { serviceCategories } from "@/data/services";

export default function ServiceRouteGrid() {
  const getIcon = (name: string) => {
    switch (name) {
      case "Stethoscope":
        return <Stethoscope className="w-5 h-5 text-brand-800" />;
      case "UserRound":
        return <UserRound className="w-5 h-5 text-brand-800" />;
      case "Activity":
        return <Activity className="w-5 h-5 text-brand-800" />;
      case "Brain":
        return <Brain className="w-5 h-5 text-brand-800" />;
      case "HeartPulse":
        return <HeartPulse className="w-5 h-5 text-brand-800" />;
      case "ShieldCheck":
        return <ShieldCheck className="w-5 h-5 text-brand-800" />;
      case "FlaskConical":
        return <FlaskConical className="w-5 h-5 text-brand-800" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5 text-brand-800" />;
      default:
        return <Activity className="w-5 h-5 text-brand-800" />;
    }
  };

  return (
    <section className="py-16 sm:py-20 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16">
          <div className="text-xs font-mono uppercase tracking-wider text-brand-800 font-bold mb-2">
            Service Navigation Architecture
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-care-dark tracking-tight mb-4">
            8 Coordinated Care Routes
          </h2>
          <p className="text-base text-slate-600 leading-relaxed">
            Every route has dedicated clinical scope, verified healthcare personnel, and transparent pre-service coordination.
          </p>
        </div>

        {/* Grouped Service Categories */}
        <div className="space-y-12">
          {serviceCategories.map((cat) => (
            <div key={cat.group} className="space-y-6">
              {/* Category Header */}
              <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 pb-3 border-b border-slate-200">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-care-navy bg-slate-200/80 px-2 py-0.5 rounded">
                    {cat.group}
                  </span>
                  <h3 className="text-lg font-bold text-care-dark tracking-tight">
                    {cat.name}
                  </h3>
                </div>
                <p className="text-xs text-slate-500 font-medium">
                  {cat.description}
                </p>
              </div>

              {/* Service Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {cat.services.map((service) => (
                  <Link
                    key={service.id}
                    href={`/${service.slug}`}
                    className="group flex flex-col justify-between bg-white rounded-xl border border-slate-200/90 p-5 shadow-sm hover:shadow-md hover:border-brand-700/60 transition-all duration-200 relative overflow-hidden"
                  >
                    {/* Top row: Number and Icon */}
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <span className="font-mono text-xl font-extrabold text-slate-300 group-hover:text-brand-800 transition-colors">
                          {service.number}
                        </span>
                        <div className="w-10 h-10 rounded-lg bg-brand-50 flex items-center justify-center group-hover:bg-brand-100 transition-colors">
                          {getIcon(service.iconName)}
                        </div>
                      </div>

                      <div className="text-[10px] font-mono text-brand-800 font-semibold uppercase tracking-wider mb-1">
                        {service.badge}
                      </div>

                      <h4 className="text-base font-bold text-care-dark group-hover:text-brand-900 transition-colors mb-2.5">
                        {service.title}
                      </h4>

                      <p className="text-xs text-slate-600 leading-relaxed mb-4 line-clamp-3">
                        {service.shortDescription}
                      </p>
                    </div>

                    {/* Bottom CTA link */}
                    <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-care-navy group-hover:text-brand-900 transition-colors">
                      <span>Explore Service Route</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-brand-800" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
