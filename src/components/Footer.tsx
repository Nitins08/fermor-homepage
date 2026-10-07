"use client";

import Link from "next/link";
import { ShieldCheck, Lock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="w-full bg-white border-t border-black/[0.06]">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-12 mb-16">
          {/* Brand info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-7 rounded bg-primary text-white flex items-center justify-center font-serif text-base font-bold shadow-sm">
                F
              </div>
              <span className="font-serif text-xl font-medium tracking-tight text-primary">
                Fermor
              </span>
            </div>

            <p className="font-sans text-xs text-[#4B5563] mb-6 leading-relaxed">
              Instrument-grade strategic capital orchestration for founders, family offices, and modern sovereign balance sheets.
            </p>

            <div className="flex items-center gap-2 font-mono text-[10px] text-[#4B5563] uppercase tracking-wider">
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              <span>Institutional Protocol v3.4</span>
            </div>
          </div>

          {/* Column 1: Product */}
          <div className="flex flex-col space-y-2.5">
            <span className="font-mono text-[11px] uppercase text-[#111827] font-semibold tracking-wider mb-1">
              Product
            </span>
            <a href="#understand" className="font-sans text-xs text-[#4B5563] hover:text-[#111827] transition-colors">
              Balance Orchestration
            </a>
            <a href="#understand" className="font-sans text-xs text-[#4B5563] hover:text-[#111827] transition-colors">
              Tactical Liquidity
            </a>
            <a href="#act" className="font-sans text-xs text-[#4B5563] hover:text-[#111827] transition-colors">
              Automated Yield Engine
            </a>
            <a href="#interactive-canvas" className="font-sans text-xs text-[#4B5563] hover:text-[#111827] transition-colors">
              Treasury Telemetry
            </a>
          </div>

          {/* Column 2: Architecture */}
          <div className="flex flex-col space-y-2.5">
            <span className="font-mono text-[11px] uppercase text-[#111827] font-semibold tracking-wider mb-1">
              Architecture
            </span>
            <a href="#problem" className="font-sans text-xs text-[#4B5563] hover:text-[#111827] transition-colors">
              Convergence Axis
            </a>
            <a href="#trust" className="font-sans text-xs text-[#4B5563] hover:text-[#111827] transition-colors">
              Zero-Knowledge Vault
            </a>
            <a href="#trust" className="font-sans text-xs text-[#4B5563] hover:text-[#111827] transition-colors">
              Sub-Millisecond Clear
            </a>
            <a href="#trust" className="font-sans text-xs text-[#4B5563] hover:text-[#111827] transition-colors">
              API Specification
            </a>
          </div>

          {/* Column 3: Insights */}
          <div className="flex flex-col space-y-2.5">
            <span className="font-mono text-[11px] uppercase text-[#111827] font-semibold tracking-wider mb-1">
              Insights
            </span>
            <a href="#grow" className="font-sans text-xs text-[#4B5563] hover:text-[#111827] transition-colors">
              Editorial Monographs
            </a>
            <a href="#grow" className="font-sans text-xs text-[#4B5563] hover:text-[#111827] transition-colors">
              The Sovereign Allocator
            </a>
            <a href="#intelligence" className="font-sans text-xs text-[#4B5563] hover:text-[#111827] transition-colors">
              Macro Counterparty Index
            </a>
            <a href="#intelligence" className="font-sans text-xs text-[#4B5563] hover:text-[#111827] transition-colors">
              Research Letters
            </a>
          </div>

          {/* Column 4: Legal & Trust */}
          <div className="flex flex-col space-y-2.5">
            <span className="font-mono text-[11px] uppercase text-[#111827] font-semibold tracking-wider mb-1">
              Legal & Trust
            </span>
            <a href="#trust" className="font-sans text-xs text-[#4B5563] hover:text-[#111827] transition-colors">
              Custodian Framework
            </a>
            <a href="#trust" className="font-sans text-xs text-[#4B5563] hover:text-[#111827] transition-colors">
              Terms of Mandate
            </a>
            <a href="#trust" className="font-sans text-xs text-[#4B5563] hover:text-[#111827] transition-colors">
              Privacy Architecture
            </a>
            <a href="#trust" className="font-sans text-xs text-[#4B5563] hover:text-[#111827] transition-colors">
              Regulatory Disclosures
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div className="pt-8 border-t border-black/[0.06] flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="font-mono text-xs text-[#4B5563]">
            © {new Date().getFullYear()} Fermor Institutional Inc. All rights reserved.
          </div>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#F4F4F1] font-mono text-[10px] text-[#4B5563]">
              <ShieldCheck className="w-3.5 h-3.5 text-[#006C49]" />
              <span>SOC2 TYPE II CERTIFIED</span>
            </div>
            <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#F4F4F1] font-mono text-[10px] text-[#4B5563]">
              <Lock className="w-3.5 h-3.5 text-[#006C49]" />
              <span>256-BIT AES VAULT ENCRYPTION</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
