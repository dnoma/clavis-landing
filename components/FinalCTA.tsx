"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/language-context";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  const { t } = useLanguage();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section id="demo" className="py-20 px-4 sm:px-6 lg:px-8 scroll-mt-20">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
          {t.finalCta.title}
        </h2>
        <p className="text-base text-gray-400 mb-6">
          {t.finalCta.subtitle}
        </p>

        <div className="max-w-md mx-auto">
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.finalCta.emailPlaceholder}
                required
                className="flex-1 px-5 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:border-violet-500 focus:outline-none transition-colors"
              />
              <button
                type="submit"
                className="btn-glow px-5 py-3 rounded-lg text-white font-medium text-sm flex items-center justify-center gap-2 whitespace-nowrap"
              >
                {t.finalCta.cta}
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          ) : (
            <div className="p-3 rounded-lg bg-violet-500/10 border border-violet-500/20">
              <p className="text-violet-300 font-medium text-sm">{t.finalCta.thankYou}</p>
            </div>
          )}

          <p className="mt-3 text-xs text-gray-500">{t.finalCta.noSpam}</p>
        </div>
      </div>
    </section>
  );
}
