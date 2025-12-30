"use client";

import { useLanguage } from "@/lib/language-context";
import { Radar, Brain, Bell, Database } from "lucide-react";

const stepIcons = [Radar, Brain, Bell, Database];

export default function HowItWorks() {
  const { t } = useLanguage();

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1s" }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-12">
          {t.howItWorks.title}
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {t.howItWorks.steps.map((step, i) => {
            const Icon = stepIcons[i];
            return (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mb-3">
                  <Icon className="w-5 h-5 text-violet-400" />
                </div>

                <div className="text-xs text-violet-400 font-medium mb-1">
                  {step.number}
                </div>

                <h3 className="text-sm font-semibold text-white mb-1">
                  {step.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
