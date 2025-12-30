"use client";

import { useLanguage } from "@/lib/language-context";
import { Layers, Cpu, Target, Users } from "lucide-react";

const categoryIcons = [Layers, Cpu, Target, Users];

export default function Features() {
  const { t } = useLanguage();

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-violet-500/15 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "0.5s" }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-12">
          {t.features.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {t.features.categories.map((category, i) => {
            const Icon = categoryIcons[i];
            return (
              <div
                key={i}
                className="p-5 rounded-lg bg-white/5 border border-white/10 hover:border-violet-500/30 transition-colors"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-violet-500/10 flex items-center justify-center">
                    <Icon className="w-4 h-4 text-violet-400" />
                  </div>
                  <h3 className="text-base font-semibold text-white">
                    {category.title}
                  </h3>
                </div>

                <ul className="space-y-1.5">
                  {category.items.map((item, j) => (
                    <li key={j} className="flex items-start gap-2">
                      <div className="w-1 h-1 rounded-full bg-violet-400 mt-1.5 flex-shrink-0" />
                      <span className="text-gray-300 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
