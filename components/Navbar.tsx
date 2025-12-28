"use client";

import { useState } from "react";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/lib/language-context";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, language, setLanguage } = useLanguage();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "vi" : "en");
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-midnight-900/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="text-2xl font-bold italic tracking-tight gradient-text">
            Clavis
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-4">
            {/* Language toggle */}
            <button
              onClick={toggleLanguage}
              className="flex items-center gap-2 px-4 py-2 rounded-lg border border-violet-500/50 text-violet-300 hover:border-violet-400 hover:text-violet-200 hover:bg-violet-500/10 transition-all text-sm font-medium"
            >
              <Globe className="w-4 h-4" />
              <span>{language === "en" ? "Tiếng Việt" : "English"}</span>
            </button>

            <a
              href="#demo"
              className="btn-glow px-4 py-2 rounded-lg text-white font-medium text-sm"
            >
              {t.nav.requestDemo}
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-gray-400 hover:text-white transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 border-t border-white/5 space-y-3">
            <button
              onClick={() => {
                toggleLanguage();
                setMobileMenuOpen(false);
              }}
              className="flex items-center justify-center gap-2 w-full px-4 py-2 rounded-lg border border-violet-500/50 text-violet-300 hover:border-violet-400 hover:bg-violet-500/10 transition-all text-sm font-medium"
            >
              <Globe className="w-4 h-4" />
              <span>{language === "en" ? "Tiếng Việt" : "English"}</span>
            </button>
            <a
              href="#demo"
              className="block w-full text-center btn-glow px-4 py-2 rounded-lg text-white font-medium text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              {t.nav.requestDemo}
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
