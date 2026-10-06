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
} from "lucide-react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Understand", href: "#understand", icon: PieChart },
    { label: "Act & Invest", href: "#act", icon: Zap },
    { label: "Grow & Forecast", href: "#grow", icon: Compass },
    { label: "Calculators", href: "#calculators", icon: Calculator },
    { label: "Intelligence", href: "#intelligence", icon: ShieldCheck },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-xs border-b border-slate-200/80"
          : "bg-[#FAFAF9]/90 backdrop-blur-xs border-b border-slate-200/50"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus-visible:ring-2 focus-visible:ring-emerald-600 rounded-lg p-1"
            aria-label="Fermor Home"
          >
            <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-white shadow-xs group-hover:bg-emerald-700 transition-colors">
              <span className="font-mono font-bold text-base tracking-tighter">F</span>
            </div>
            <div className="flex flex-col">
              <span className="font-semibold text-lg tracking-tight text-slate-900 flex items-center gap-1">
                Fermor
                <span className="text-[10px] uppercase font-mono px-1.5 py-0.2 bg-emerald-50 text-emerald-700 border border-emerald-200/60 rounded font-medium">
                  India
                </span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="px-3 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100/80 rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#health-check"
              className="text-xs font-semibold px-3 py-2 text-emerald-800 bg-emerald-50 hover:bg-emerald-100/80 border border-emerald-200/70 rounded-md transition-colors"
            >
              Free Health Audit
            </a>
            <a
              href="#calculators"
              className="inline-flex items-center gap-1.5 text-xs font-semibold px-4 py-2.5 text-white bg-slate-900 hover:bg-slate-800 rounded-md shadow-xs transition-colors"
            >
              <span>Explore Tools</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href="#health-check"
              className="text-[11px] font-semibold px-2.5 py-1.5 text-emerald-800 bg-emerald-50 border border-emerald-200/70 rounded-md"
            >
              Audit
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-md focus:outline-hidden focus:ring-2 focus:ring-slate-900"
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
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 shadow-lg animate-in slide-in-from-top-2 duration-150">
          <div className="flex flex-col space-y-1">
            {navLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center gap-3 px-3 py-2.5 text-sm font-medium text-slate-700 hover:bg-slate-50 rounded-md"
                >
                  <Icon className="w-4 h-4 text-slate-400" />
                  {link.label}
                </a>
              );
            })}
          </div>
          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <a
              href="#health-check"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center text-xs font-semibold py-2.5 text-emerald-800 bg-emerald-50 border border-emerald-200 rounded-md"
            >
              Instant Financial Health Audit
            </a>
            <a
              href="#calculators"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center text-xs font-semibold py-2.5 text-white bg-slate-900 rounded-md flex items-center justify-center gap-2"
            >
              <span>Explore In-Browser Tools</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
