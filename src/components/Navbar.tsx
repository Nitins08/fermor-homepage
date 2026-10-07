"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  Menu,
  X,
  ArrowRight,
  Calculator,
  Compass,
  PieChart,
  ShieldCheck,
  Zap,
  Activity,
  Sliders,
} from "lucide-react";

interface NavbarProps {
  onOpenTools?: (tab?: any) => void;
}

export function Navbar({ onOpenTools }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoRevealed, setLogoRevealed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    const timer = setTimeout(() => {
      setLogoRevealed(true);
    }, 1400);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const navLinks = [
    { label: "01 Core", href: "#", action: () => window.scrollTo({ top: 0, behavior: "smooth" }) },
    { label: "02 Flow", href: "#", action: () => window.scrollTo({ top: window.innerHeight * 1.5, behavior: "smooth" }) },
    { label: "03 Decide", href: "#", action: () => window.scrollTo({ top: window.innerHeight * 2.8, behavior: "smooth" }) },
    { label: "04 Curve", href: "#", action: () => window.scrollTo({ top: window.innerHeight * 4.0, behavior: "smooth" }) },
    { label: "05 Terminal", href: "#", action: () => window.scrollTo({ top: window.innerHeight * 5.2, behavior: "smooth" }) },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-[#050B18]/90 backdrop-blur-md shadow-2xl border-b border-[#0D2747]"
          : "bg-[#050B18]/70 backdrop-blur-sm border-b border-[#0D2747]/60"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo with Brand Reveal Animation */}
          <Link
            href="/"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-3 group focus-visible:ring-2 focus-visible:ring-blue-500 rounded-lg p-1"
            aria-label="Fermor Homepage"
          >
            {/* Geometric Mark */}
            <div className="relative w-9 h-9 rounded-lg bg-[#0A1D35] border border-[#123A63] flex items-center justify-center overflow-hidden shadow-inner group-hover:border-blue-500/50 transition-all duration-300">
              <svg
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-5 h-5"
              >
                {/* Precision Geometric Monogram */}
                <path
                  d="M8 7H24V11H12.5V14.5H21V18.5H12.5V25H8V7Z"
                  stroke="#3B82F6"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={!logoRevealed ? "animate-mark-stroke" : ""}
                  fill="url(#fermor-gradient)"
                />
                <defs>
                  <linearGradient id="fermor-gradient" x1="8" y1="7" x2="24" y2="25" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#3B82F6" stopOpacity="0.8" />
                    <stop offset="1" stopColor="#67E8F9" stopOpacity="0.4" />
                  </linearGradient>
                </defs>
              </svg>
              {/* Subtle ambient corner specular */}
              <div className="absolute top-0 right-0 w-3 h-3 bg-blue-400/20 blur-xs rounded-full pointer-events-none" />
            </div>

            {/* Wordmark and Tag */}
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span
                  className={`font-semibold text-lg tracking-tight text-white ${
                    !logoRevealed ? "logo-shimmer" : ""
                  }`}
                >
                  Fermor
                </span>
                <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 bg-[#0D2747] text-blue-300 border border-[#123A63] rounded tracking-wider font-medium">
                  Scrolltelling 2.0
                </span>
              </div>
              <span className="text-[10px] text-slate-400 font-mono tracking-widest uppercase">
                Private Wealth Architecture
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2 font-mono" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <button
                key={link.label}
                type="button"
                onClick={link.action}
                className="px-3 py-1.5 text-xs font-medium text-slate-300 hover:text-cyan-300 hover:bg-[#0A1D35]/60 rounded-md transition-all duration-200 border border-transparent hover:border-[#123A63]/50"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              onClick={() => onOpenTools ? onOpenTools("health") : undefined}
              className="inline-flex items-center gap-2 text-xs font-semibold px-3.5 py-2 text-blue-300 bg-[#0A1D35]/80 hover:bg-[#0D2747] border border-[#123A63] hover:border-blue-500/40 rounded-lg transition-all shadow-xs"
            >
              <Activity className="w-3.5 h-3.5 text-cyan-400" />
              <span>Health Audit</span>
            </button>
            <button
              type="button"
              onClick={() => onOpenTools ? onOpenTools("calculators") : undefined}
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2 text-white bg-blue-600 hover:bg-blue-500 active:bg-blue-700 rounded-lg shadow-md shadow-blue-900/30 border border-blue-400/30 transition-all group"
            >
              <Sliders className="w-3.5 h-3.5" />
              <span>Tools Suite</span>
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              type="button"
              onClick={() => onOpenTools ? onOpenTools("calculators") : undefined}
              className="text-[11px] font-semibold px-2.5 py-1.5 text-blue-300 bg-[#0A1D35] border border-[#123A63] rounded-md"
            >
              Tools
            </button>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-300 hover:text-white hover:bg-[#0A1D35] border border-[#123A63] rounded-md focus:outline-hidden focus:ring-2 focus:ring-blue-500"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-[#0D2747] bg-[#050B18]/98 backdrop-blur-xl px-4 pt-3 pb-6 shadow-2xl animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <button
                key={link.label}
                type="button"
                onClick={() => {
                  link.action();
                  setMobileMenuOpen(false);
                }}
                className="w-full text-left px-3 py-2.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-[#0A1D35] rounded-md"
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-[#0D2747] flex flex-col gap-2.5">
            <button
              type="button"
              onClick={() => {
                if (onOpenTools) onOpenTools("health");
                setMobileMenuOpen(false);
              }}
              className="w-full text-center text-xs font-semibold py-2.5 text-blue-300 bg-[#0A1D35] border border-[#123A63] rounded-md"
            >
              Instant Financial Health Audit
            </button>
            <button
              type="button"
              onClick={() => {
                if (onOpenTools) onOpenTools("calculators");
                setMobileMenuOpen(false);
              }}
              className="w-full text-center text-xs font-semibold py-2.5 text-white bg-blue-600 rounded-md flex items-center justify-center gap-2"
            >
              <span>Explore In-Browser Calculators</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
