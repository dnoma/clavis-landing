"use client";

import { useState } from "react";
import { ArrowRight, Sparkles, Shield, Zap, ChevronDown } from "lucide-react";
import { useLanguage } from "@/lib/language-context";
import GradientText from "@/components/GradientText";

export default function Hero() {
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
    <section className="relative min-h-screen bg-glow flex flex-col">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse-glow" />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl animate-pulse-glow"
          style={{ animationDelay: "1.5s" }}
        />
      </div>

      {/* Main content - centered */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center pt-16">
        <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center flex flex-col items-center gap-6">
            {/* Badge */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20">
                <Sparkles className="w-4 h-4 text-violet-400" />
                <span className="text-sm text-violet-300 font-medium">
                  {t.hero.badge}
                </span>
              </div>
            </div>

            {/* Headline */}
            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-col items-center gap-2">
                <GradientText text="Regulations move fast." className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl" />
                <GradientText text="You move faster." className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl" />
              </div>
              <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                {t.hero.subhead}
              </p>
            </div>

            {/* CTA Form */}
            <div className="w-full flex justify-center">
              <div className="w-full max-w-md">
                {!submitted ? (
                  <form
                    onSubmit={handleSubmit}
                    className="flex w-full flex-col sm:flex-row gap-2"
                  >
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t.hero.emailPlaceholder}
                      required
                      className="flex-1 px-6 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:border-violet-500 focus:outline-none transition-colors"
                    />
                    <button
                      type="submit"
                      className="btn-glow px-6 py-3 rounded-lg text-white font-medium text-sm flex items-center justify-center gap-2 whitespace-nowrap"
                    >
                      {t.hero.cta}
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                ) : (
                  <div className="p-4 rounded-lg bg-violet-500/10 border border-violet-500/20">
                    <p className="text-violet-300 font-medium">
                      {t.hero.thankYou}
                    </p>
                  </div>
                )}

                <p className="mt-4 text-center text-xs text-gray-500">
                  {t.hero.noSpam}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section - trust badges and scroll indicator */}
      <div className="relative z-10 pb-6 flex flex-col items-center gap-4">
        {/* Trust badges */}
        <div className="flex flex-wrap items-center justify-center gap-8 text-gray-500">
          <div className="flex items-center gap-2">
            <Shield className="w-5 h-5 text-violet-400/60" />
            <span className="text-sm">{t.hero.trust1}</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-violet-400/60" />
            <span className="text-sm">{t.hero.trust2}</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <a
          href="#problem"
          className="group flex flex-col items-center gap-1 text-gray-500 hover:text-violet-400 transition-colors"
        >
          <span className="text-xs uppercase tracking-wider opacity-60 group-hover:opacity-100">
            {t.hero.learnMore}
          </span>
          <div className="animate-bounce">
            <ChevronDown className="w-5 h-5" />
          </div>
        </a>
      </div>
    </section>
  );
}
