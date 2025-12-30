"use client";

import { useLanguage } from "@/lib/language-context";
import { AlertTriangle, FileText, Scale, RefreshCw } from "lucide-react";

const icons = [AlertTriangle, Scale, RefreshCw, FileText];

export default function Problem() {
  const { t } = useLanguage();

  return (
    <section id="problem" className="relative py-20 px-4 sm:px-6 lg:px-8 scroll-mt-20">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-violet-500/15 rounded-full blur-3xl animate-pulse-glow" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-12">
          {t.problem.title}
        </h2>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-12">
          {[
            { value: t.problem.stat1Value, label: t.problem.stat1Label },
            { value: t.problem.stat2Value, label: t.problem.stat2Label },
            { value: t.problem.stat3Value, label: t.problem.stat3Label },
          ].map((stat, i) => (
            <div
              key={i}
              className="text-center py-6 px-4 rounded-lg bg-white/5 border border-white/10"
            >
              <div className="text-2xl sm:text-3xl font-bold gradient-text mb-1">
                {stat.value}
              </div>
              <div className="text-gray-400 text-xs sm:text-sm leading-tight">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Challenges */}
        <div className="grid md:grid-cols-2 gap-10 mb-10">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              {t.problem.challengeTitle}
            </h3>
            <ul className="space-y-3">
              {t.problem.challenges.map((challenge, i) => {
                const Icon = icons[i];
                return (
                  <li key={i} className="flex gap-3">
                    <Icon className="w-4 h-4 text-violet-400 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-300 text-sm leading-relaxed">
                      <span className="text-white font-medium">{challenge.bold}</span>{" "}
                      {challenge.text}
                    </p>
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              {t.problem.intlTitle}
            </h3>
            <ul className="space-y-3">
              {t.problem.intlPoints.map((point, i) => (
                <li key={i} className="flex gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-violet-400 flex-shrink-0 mt-2" />
                  <p className="text-gray-300 text-sm leading-relaxed">{point}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Conclusion */}
        <p className="text-center text-base text-gray-400 font-medium">
          {t.problem.conclusion}
        </p>
      </div>
    </section>
  );
}
