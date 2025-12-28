"use client";

import { useLanguage } from "@/lib/language-context";
import { Shield, Check } from "lucide-react";

export default function Security() {
  const { t } = useLanguage();

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-transparent via-violet-500/5 to-transparent">
      <div className="max-w-4xl mx-auto">
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
