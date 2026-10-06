"use client";

import React from "react";
import { Shield } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#050B18] text-slate-400 text-xs border-t border-[#0D2747]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 pb-12 border-b border-[#0D2747]">
          {/* Col 1: Brand & Positioning */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#0A1D35] border border-[#123A63] flex items-center justify-center text-blue-400 font-mono font-bold text-sm shadow-inner">
                F
              </div>
              <span className="font-semibold text-base tracking-tight text-white">
                Fermor Technologies
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed font-light">
              Independent private wealth operating system for India. Institutional-grade SIP, EMI,
              tax optimization, and retirement planning with zero advertising and client-side privacy.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-slate-500 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>All Systems Operational • Client-Side Deterministic Engine</span>
            </div>
          </div>

          {/* Col 2: Calculators */}
          <div className="space-y-3 font-light">
            <div className="text-xs font-mono font-semibold text-slate-200 uppercase tracking-wider">
              Terminal Tools
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#calculators" className="hover:text-cyan-300 transition-colors">
                  SIP Compounding Engine
                </a>
              </li>
              <li>
                <a href="#grow" className="hover:text-cyan-300 transition-colors">
                  Step-Up SIP Planner
                </a>
              </li>
              <li>
                <a href="#calculators" className="hover:text-cyan-300 transition-colors">
                  Home Loan EMI & Prepay
                </a>
              </li>
              <li>
                <a href="#understand" className="hover:text-cyan-300 transition-colors">
                  Tax Regime Comparator
                </a>
              </li>
              <li>
                <a href="#calculators" className="hover:text-cyan-300 transition-colors">
                  SWP Retirement Runway
                </a>
              </li>
              <li>
                <a href="#calculators" className="hover:text-cyan-300 transition-colors">
                  PPF & Fixed Deposit
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Platform & Products */}
          <div className="space-y-3 font-light">
            <div className="text-xs font-mono font-semibold text-slate-200 uppercase tracking-wider">
              Architecture
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#health-check" className="hover:text-cyan-300 transition-colors">
                  Financial Health Audit
                </a>
              </li>
              <li>
                <a href="#act" className="hover:text-cyan-300 transition-colors">
                  Direct Asset Tranches
                </a>
              </li>
              <li>
                <a href="#intelligence" className="hover:text-cyan-300 transition-colors">
                  Scenario Intelligence
                </a>
              </li>
              <li>
                <a href="#intelligence-editorial" className="hover:text-cyan-300 transition-colors">
                  Wallet Policy Desk
                </a>
              </li>
              <li>
                <a href="#overview" className="hover:text-cyan-300 transition-colors">
                  Command Center Console
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Transparency & Legal */}
          <div className="space-y-3 font-light">
            <div className="text-xs font-mono font-semibold text-slate-200 uppercase tracking-wider">
              Governance
            </div>
            <ul className="space-y-2">
              <li>
                <span className="hover:text-cyan-300 transition-colors cursor-pointer">
                  Privacy Charter (Zero Trackers)
                </span>
              </li>
              <li>
                <span className="hover:text-cyan-300 transition-colors cursor-pointer">
                  Platform Terms of Service
                </span>
              </li>
              <li>
                <span className="hover:text-cyan-300 transition-colors cursor-pointer">
                  Statutory SEBI Disclosures
                </span>
              </li>
              <li>
                <span className="hover:text-cyan-300 transition-colors cursor-pointer">
                  Security Architecture
                </span>
              </li>
              <li>
                <span className="hover:text-cyan-300 transition-colors cursor-pointer">
                  Developer API & Telemetry
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory & Educational Disclaimer */}
        <div className="pt-8 space-y-4">
          <div className="flex items-start gap-2.5 p-4 rounded-xl bg-[#071426] border border-[#123A63] text-[11px] text-slate-400 leading-relaxed font-light">
            <Shield className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-300 font-medium">Regulatory & Educational Notice: </strong>
              Fermor Technologies Pvt. Ltd. operates fermor.in as an educational financial decision and calculation
              system for Indian users. Fermor is not a SEBI-registered investment advisor, research analyst, or portfolio manager,
              and does not provide personalized investment, legal, or tax advisory services. All mathematical models,
              calculators, and simulated projections are executed client-side for analytical and educational evaluation only.
              Mutual fund investments and equities are subject to market risks; read all scheme-related offer documents carefully before investing.
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
            <div>© {currentYear} Fermor Technologies Pvt. Ltd. All rights reserved.</div>
            <div>Engineered for Indian Wealth Builders • Zero Ads • Client-Side Privacy</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
