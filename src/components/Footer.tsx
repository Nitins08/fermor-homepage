"use client";

import React from "react";
import { Shield } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 lg:gap-12 pb-12 border-b border-slate-800/80">
          {/* Col 1: Brand & Positioning */}
          <div className="col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-md bg-emerald-600 flex items-center justify-center text-white font-mono font-bold text-sm">
                F
              </div>
              <span className="font-semibold text-base tracking-tight text-white">
                Fermor Technologies
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Smart financial decisions for India. Free SIP, EMI, home loan, tax, and retirement
              calculators with zero advertising and institutional-grade mathematics.
            </p>
            <div className="flex items-center gap-2 text-[11px] text-slate-500 font-mono">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
              <span>All Systems Operational • Client-Side Engine</span>
            </div>
          </div>

          {/* Col 2: Calculators */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Calculators
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#calculators" className="hover:text-white transition-colors">
                  SIP Calculator
                </a>
              </li>
              <li>
                <a href="#grow" className="hover:text-white transition-colors">
                  Step-Up SIP Planner
                </a>
              </li>
              <li>
                <a href="#calculators" className="hover:text-white transition-colors">
                  Home Loan EMI & Prepay
                </a>
              </li>
              <li>
                <a href="#understand" className="hover:text-white transition-colors">
                  New vs Old Tax Regime
                </a>
              </li>
              <li>
                <a href="#calculators" className="hover:text-white transition-colors">
                  SWP Retirement Cashflow
                </a>
              </li>
              <li>
                <a href="#calculators" className="hover:text-white transition-colors">
                  PPF & Fixed Deposit
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Platform & Products */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Platform
            </div>
            <ul className="space-y-2">
              <li>
                <a href="#health-check" className="hover:text-white transition-colors">
                  Financial Health Audit
                </a>
              </li>
              <li>
                <a href="#act" className="hover:text-white transition-colors">
                  Direct Index Funds (ACT)
                </a>
              </li>
              <li>
                <a href="#ask" className="hover:text-white transition-colors">
                  Ask Fermor (Intelligence)
                </a>
              </li>
              <li>
                <a href="#intelligence" className="hover:text-white transition-colors">
                  Wallet Impact News
                </a>
              </li>
              <li>
                <a href="#hero" className="hover:text-white transition-colors">
                  Portfolio Command Center
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4: Transparency & Legal */}
          <div className="space-y-3">
            <div className="text-xs font-bold text-slate-200 uppercase tracking-wider">
              Governance
            </div>
            <ul className="space-y-2">
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Privacy Policy (Zero Trackers)
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Terms of Platform Use
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Statutory Disclosures
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  About Fermor Technologies
                </span>
              </li>
              <li>
                <span className="hover:text-white transition-colors cursor-pointer">
                  Contact & Support
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Regulatory & Educational Disclaimer */}
        <div className="pt-8 space-y-4">
          <div className="flex items-start gap-2.5 p-4 rounded-lg bg-slate-900 border border-slate-800 text-[11px] text-slate-400 leading-relaxed">
            <Shield className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
            <div>
              <strong className="text-slate-300">Regulatory Disclaimer: </strong>
              Fermor Technologies Pvt. Ltd. operates fermor.in as an educational financial technology
              and calculation platform for Indian users. Fermor is not a SEBI-registered investment
              advisor, research analyst, or portfolio manager, and does not provide personalized
              financial, investment, legal, or tax advisory services. All mathematical models,
              calculators, and simulated projections are provided for analytical and educational
              evaluation only. Mutual fund investments and equities are subject to market risks; read
              all scheme-related offer documents carefully before investing.
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500 font-mono">
            <div>© {currentYear} Fermor Technologies Pvt. Ltd. All rights reserved.</div>
            <div>Built for Indian Wealth Builders • Zero Ads • Client-Side Privacy</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
