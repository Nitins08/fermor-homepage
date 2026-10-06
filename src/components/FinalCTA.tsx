"use client";

import React from "react";
import { ArrowRight, Sparkles, CheckCircle2 } from "lucide-react";

export function FinalCTA() {
  return (
    <section className="py-24 bg-[#050B18] text-white border-b border-[#0D2747] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[radial-gradient(ellipse,rgba(37,99,235,0.15)_0%,rgba(5,11,24,0)_70%)] pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A1D35] text-cyan-300 text-xs font-mono font-medium border border-[#123A63]">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>START MAKING BETTER CAPITAL DECISIONS TODAY</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-balance leading-[1.1]">
          Build your wealth with clarity, <br className="hidden sm:inline" />
          <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
            not guesswork.
          </span>
        </h2>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-slate-300 leading-relaxed font-light">
          No mandatory login barriers. No spam phone calls from aggressive third-party distributors.
          Simply open the terminal, test your real numbers, and navigate your compounding journey with precision.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a
            href="#calculators"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-blue-600 text-white font-medium text-sm hover:bg-blue-500 active:bg-blue-700 transition-all shadow-xl shadow-blue-900/40 border border-blue-400/40 group"
          >
            <span>Launch In-Browser Terminal</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#health-check"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-[#0A1D35] text-slate-200 border border-[#123A63] font-medium text-sm hover:bg-[#0D2747] hover:text-white transition-all shadow-xs"
          >
            <span>Run 60-Second Health Audit</span>
          </a>
        </div>

        <div className="pt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2.5 text-xs text-slate-400 font-medium">
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
            Zero credit card or credentials required
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
            100% Free core mathematical models
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
            Calibrated strictly for Indian investors
          </span>
        </div>
      </div>
    </section>
  );
}
