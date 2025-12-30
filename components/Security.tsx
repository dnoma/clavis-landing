"use client";

import { useLanguage } from "@/lib/language-context";
import { Shield, Check } from "lucide-react";

export default function Security() {
  const { t } = useLanguage();

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-violet-600/15 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: "1.2s" }} />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Shield className="w-6 h-6 text-violet-400" />
          <h2 className="text-2xl sm:text-3xl font-bold text-white">
            {t.security.title}
          </h2>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {t.security.points.map((point, i) => (
            <div
              key={i}
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10"
            >
              <Check className="w-4 h-4 text-violet-400" />
              <span className="text-gray-300 text-sm">{point}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
