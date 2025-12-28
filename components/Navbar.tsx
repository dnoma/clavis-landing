"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-midnight-900/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-500 to-violet-600 flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className="text-xl font-semibold text-white">Clavis</span>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <a
              href="#demo"
              className="btn-glow px-4 py-2 rounded-lg text-white font-medium text-sm"
            >
              Request Demo
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
          <div className="md:hidden py-4 border-t border-white/5">
            <a
              href="#demo"
              className="block w-full text-center btn-glow px-4 py-2 rounded-lg text-white font-medium text-sm"
              onClick={() => setMobileMenuOpen(false)}
            >
              Request Demo
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
