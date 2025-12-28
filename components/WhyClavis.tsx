"use client";

import { useLanguage } from "@/lib/language-context";
import { MapPin, Languages, Clock } from "lucide-react";

const reasonIcons = [MapPin, Languages, Clock];

export default function WhyClavis() {
  const { t } = useLanguage();

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-white mb-12">
          {t.whyClavis.title}
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {t.whyClavis.reasons.map((reason, i) => {
            const Icon = reasonIcons[i];
            return (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-5 h-5 text-violet-400" />
                </div>
                <h3 className="text-base font-semibold text-white mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
