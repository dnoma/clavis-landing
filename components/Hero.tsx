"use client";

import { useState } from "react";
import { ArrowRight, Sparkles, Shield, Zap } from "lucide-react";

export default function Hero() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      // TODO: Integrate with your backend/email service
    }
  };

  return (
    <section className="relative min-h-screen bg-glow">
  <div className="absolute inset-0 overflow-hidden pointer-events-none">
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-pulse-glow" />
    <div
      className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-violet-600/10 rounded-full blur-3xl animate-pulse-glow"
      style={{ animationDelay: "1.5s" }}
    />
  </div>

  {/* HERO WRAPPER (controls vertical centring of hero only) */}
  <div className="relative z-10 min-h-screen flex flex-col items-center justify-center">
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* HERO CONTENT GROUP (shift this block as one) */}
      <div className="text-center flex flex-col items-center gap-6">

        {/* BADGE GROUP */}
        <div>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20">
            <Sparkles className="w-4 h-4 text-violet-400" />
            <span className="text-sm text-violet-300 font-medium">
              AI-Powered Regulatory Intelligence
            </span>
          </div>
        </div>

        {/* HEADLINE + SUBHEAD GROUP */}
        <div className="flex flex-col items-center gap-4">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            <span className="text-white">Regulations move fast.</span>
            <br />
            <span className="gradient-text">You move faster.</span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Monitor Vietnamese regulations and stay ahead.
          </p>
        </div>

        {/* CTA GROUP (shift independently if needed) */}
        <div className="w-full flex justify-center">
          <div id="demo" className="w-full max-w-md">
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="flex w-full flex-col sm:flex-row gap-2"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your work email"
                  required
                  className="flex-1 px-6 py-2 rounded-md bg-white/5 border border-white/10 text-white placeholder-gray-500 text-sm focus:border-violet-500 transition-colors"
                />
                <button
                  type="submit"
                  className="btn-glow px-6 py-2 rounded-md text-white font-medium text-sm flex items-center justify-center gap-2 whitespace-nowrap"
                >
                  Request Demo
                  <ArrowRight className="w-4 h-4" />
                </button>
              </form>
            ) : (
              <div className="p-4 rounded-lg bg-violet-500/10 border border-violet-500/20">
                <p className="text-violet-300 font-medium">
                  Thanks! We&apos;ll be in touch soon.
                </p>
              </div>
            )}

            <p className="mt-4 text-center text-xs text-gray-500">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>

      </div>
    </div>
  </div>

  {/* BELOW-THE-FOLD CONTENT */}
  <div className="relative z-10 pb-24">
    <div className="flex flex-wrap items-center justify-center gap-8 text-gray-500">
      <div className="flex items-center gap-2">
        <Shield className="w-5 h-5 text-violet-400/60" />
        <span className="text-sm">Enterprise-grade security</span>
      </div>
      <div className="flex items-center gap-2">
        <Zap className="w-5 h-5 text-violet-400/60" />
        <span className="text-sm">Real-time updates</span>
      </div>
    </div>
  </div>
</section>
  );
}
