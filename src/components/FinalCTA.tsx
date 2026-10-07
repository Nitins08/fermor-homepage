"use client";

import React from "react";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-24 bg-[#F7FAF8] text-[#10251B] border-b border-[#DDE8E1] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,rgba(16,185,129,0.08)_0%,rgba(247,250,248,0)_70%)] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white text-[#0B3D2E] text-xs font-mono font-medium border border-[#DDE8E1] shadow-2xs">
          <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
          <span>START MAKING BETTER CAPITAL DECISIONS TODAY</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-balance leading-[1.1] text-[#10251B]">
          Build your wealth with clarity, <br className="hidden sm:inline" />
          <span className="text-emerald-700">
            not guesswork.
          </span>
        </h2>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-[#4B6354] leading-relaxed">
          No mandatory login barriers. No spam phone calls from aggressive third-party distributors.
          Simply open the terminal, test your real numbers, and navigate your compounding journey with precision.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="#calculators"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-emerald-600 text-white font-medium text-sm hover:bg-emerald-700 active:bg-emerald-800 transition-all shadow-md shadow-emerald-950/15 group"
          >
            <span>Launch In-Browser Terminal</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#health-check"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-white text-[#10251B] border border-[#DDE8E1] font-medium text-sm hover:bg-[#EEF5F1] transition-all shadow-2xs"
          >
            <span>Run 60-Second Health Audit</span>
          </a>
        </div>

        <div className="pt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2.5 text-xs text-[#4B6354] font-medium">
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            Zero credit card or credentials required
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            100% Free core mathematical models
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            Calibrated strictly for Indian investors
          </span>
        </div>
      </div>
    </section>
  );
}
