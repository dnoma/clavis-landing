"use client";

import { useLanguage } from "@/lib/language-context";
import { Scale, Building2, Landmark, Globe, Briefcase } from "lucide-react";

const segmentIcons = [Scale, Building2, Landmark, Globe, Briefcase];

export default function WhoWeServe() {
  const { t } = useLanguage();

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-1/3 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.5s" }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-12">
          {t.whoWeServe.title}
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {t.whoWeServe.segments.map((segment, i) => {
            const Icon = segmentIcons[i];
            return (
              <div
                key={i}
                className="p-4 rounded-lg bg-white/5 border border-white/10 hover:border-violet-500/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-violet-500/10 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-violet-400" />
                </div>
                <h3 className="text-sm font-semibold text-white mb-1">
                  {segment.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {segment.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
