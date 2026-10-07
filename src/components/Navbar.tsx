"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight, Menu, X, Shield, Activity } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["hero", "problem", "understand", "act", "grow", "intelligence", "trust", "register"];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Product", href: "#understand", id: "understand" },
    { name: "How it works", href: "#problem", id: "problem" },
    { name: "Action Engine", href: "#act", id: "act" },
    { name: "Intelligence", href: "#intelligence", id: "intelligence" },
    { name: "Trust & Security", href: "#trust", id: "trust" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FBFBFA]/90 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.05)] border-b border-black/[0.05]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 h-16 sm:h-20 flex items-center justify-between">
        {/* Brand & Monogram */}
        <div className="flex items-center gap-6">
          <Link href="#" className="flex items-center gap-3 group">
            {/* Custom SVG Monogram */}
            <div className="w-8 h-8 rounded bg-primary text-white flex items-center justify-center font-serif text-lg font-bold tracking-tight shadow-sm transition-transform group-hover:scale-105">
              F
            </div>
            <span className="font-serif text-2xl font-medium tracking-tight text-primary">
              Fermor
            </span>
          </Link>

          {/* Telemetry Live Badge */}
          <div className="hidden xl:flex items-center gap-2 px-2.5 py-1 rounded bg-[#ECECE8] text-[#4B5563] font-mono text-[11px] tracking-wide">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
            <span>SYSTEM: REAL-TIME CONVERGENCE</span>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[13px] font-sans font-medium">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.name}
                href={link.href}
                className={`transition-colors py-1 relative ${
                  isActive
                    ? "text-[#111827] font-semibold"
                    : "text-[#4B5563] hover:text-[#111827]"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href="#register"
            className="text-[13px] font-medium text-[#4B5563] hover:text-[#111827] px-3 py-1.5 transition-colors"
          >
            Sign In
          </a>

          <a
            href="#register"
            className="inline-flex items-center gap-2 bg-primary-container text-white text-[13px] font-semibold px-4 py-2.5 rounded shadow-sm hover:bg-primary transition-all duration-200 group"
          >
            <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
            <span>Experience Fermor</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#4B5563] hover:text-[#111827] rounded focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="sm:hidden bg-[#FBFBFA] border-b border-black/[0.08] px-6 py-6 shadow-xl space-y-4">
          <div className="flex items-center gap-2 px-2.5 py-1 rounded bg-[#ECECE8] text-[#4B5563] font-mono text-[10px] w-fit">
            <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse"></span>
            <span>SYSTEM: REAL-TIME CONVERGENCE</span>
          </div>

          <div className="flex flex-col space-y-3 pt-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-[#111827] py-1 border-b border-black/[0.04]"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-4 flex flex-col gap-3">
            <a
              href="#register"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 border border-black/10 rounded font-medium text-sm text-[#111827]"
            >
              Sign In
            </a>
            <a
              href="#register"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 bg-primary-container text-white rounded font-medium text-sm shadow-sm flex items-center justify-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
              <span>Experience Fermor</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
