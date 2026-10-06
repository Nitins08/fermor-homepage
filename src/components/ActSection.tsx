"use client";

import React, { useState } from "react";
import { Zap, ShieldCheck, ArrowRight, Check } from "lucide-react";

interface InvestmentCategory {
  id: string;
  name: string;
  badge: string;
  minTicket: string;
  recommendedFor: string;
  riskProfile: string;
  instruments: {
    name: string;
    expenseRatio: string;
    volatility: string;
    rationale: string;
  }[];
}

const CATEGORIES: InvestmentCategory[] = [
  {
    id: "index",
    name: "Broad Market Index Funds",
    badge: "Core Anchor (50-60%)",
    minTicket: "₹500 / month",
    recommendedFor: "Foundational compounding tracking India's top 50 enterprises",
    riskProfile: "Moderate Market Risk",
    instruments: [
      {
        name: "UTI Nifty 50 Index Fund (Direct)",
        expenseRatio: "0.18% TER",
        volatility: "Standard Beta 1.0",
        rationale: "Lowest tracking error across 5-year cycles; zero distributor commission.",
      },
      {
        name: "Nippon India Nifty Next 50 Junior BeES ETF",
        expenseRatio: "0.22% TER",
        volatility: "Higher Beta 1.15",
        rationale: "Exposure to India's fastest-growing mid-to-large innovators (ranks 51-100).",
      },
    ],
  },
  {
    id: "flexicap",
    name: "Flexi-Cap & Midcap Funds",
    badge: "Alpha Growth (20-30%)",
    minTicket: "₹1,000 / month",
    recommendedFor: "Dynamic capital reallocation across market capitalizations",
    riskProfile: "Moderate-High Risk",
    instruments: [
      {
        name: "Parag Parikh Flexi Cap Fund (Direct)",
        expenseRatio: "0.62% TER",
        volatility: "Controlled Downside",
        rationale: "Long-term value discipline with partial global diversification buffer.",
      },
      {
        name: "Motilal Oswal Midcap Fund (Direct)",
        expenseRatio: "0.68% TER",
        volatility: "High Growth Potential",
        rationale: "High ROCE Indian mid-market leaders with expanding operating leverage.",
      },
    ],
  },
  {
    id: "liquid",
    name: "Liquid & Arbitrage Parking",
    badge: "Emergency Buffer (10-15%)",
    minTicket: "₹500 Lumpsum",
    recommendedFor: "Tax-efficient short-term yield without equity drawdown risk",
    riskProfile: "Lowest Volatility",
    instruments: [
      {
        name: "Tata Arbitrage Fund (Direct-Growth)",
        expenseRatio: "0.34% TER",
        volatility: "Near-Zero Drawdown",
        rationale: "Equity taxation benefits with debt-like stability via cash-futures arbitrage.",
      },
      {
        name: "ICICI Prudential Liquid Fund (Direct)",
        expenseRatio: "0.20% TER",
        volatility: "T+1 Instant Liquidity",
        rationale: "Parks emergency reserves with instantaneous bank sweep-in capability.",
      },
    ],
  },
];

export function ActSection() {
  const [activeCategory, setActiveCategory] = useState<string>("index");
  const [selectedTicket, setSelectedTicket] = useState<number>(500);

  const currentCategory = CATEGORIES.find((c) => c.id === activeCategory) || CATEGORIES[0];

  return (
    <section id="act" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-100 text-slate-800 text-xs font-semibold mb-3">
            <Zap className="w-3.5 h-3.5 text-emerald-700" />
            <span>02 / ACT</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
            Execute with institutional discipline.
          </h2>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            Eliminate emotional noise and speculative tips. Start small, build steadily, and
            allocate across verified low-cost direct instruments with disciplined automation.
          </p>
        </div>

        {/* Interactive Asset Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Category Tabs (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Select Strategic Asset Tranche:
            </div>
            {CATEGORIES.map((cat) => {
              const isActive = cat.id === activeCategory;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all ${
                    isActive
                      ? "bg-slate-900 text-white border-slate-900 shadow-md"
                      : "bg-[#FAFAF9] text-slate-800 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-semibold px-2 py-0.5 rounded ${
                        isActive
                          ? "bg-emerald-900 text-emerald-300"
                          : "bg-emerald-50 text-emerald-800 border border-emerald-200/60"
                      }`}
                    >
                      {cat.badge}
                    </span>
                    <span
                      className={`text-xs font-mono ${
                        isActive ? "text-slate-400" : "text-slate-500"
                      }`}
                    >
                      {cat.minTicket}
                    </span>
                  </div>
                  <div className="text-base font-bold mt-2">{cat.name}</div>
                  <p
                    className={`text-xs mt-1 leading-relaxed ${
                      isActive ? "text-slate-300" : "text-slate-500"
                    }`}
                  >
                    {cat.recommendedFor}
                  </p>
                </button>
              );
            })}

            {/* Quick Micro Callout */}
            <div className="p-4 bg-emerald-50/60 rounded-xl border border-emerald-200 text-xs space-y-2">
              <div className="flex items-center gap-2 font-bold text-emerald-900">
                <ShieldCheck className="w-4 h-4 text-emerald-700" />
                <span>Zero Commission Guarantee</span>
              </div>
              <p className="text-emerald-800/90 leading-relaxed">
                Fermor charges 0 transaction surcharges and routes 100% directly to Asset Management
                Companies (AMCs). You save thousands in recurring distributor fees.
              </p>
            </div>
          </div>

          {/* Asset Deep-Dive Inspector (8 cols) */}
          <div className="lg:col-span-8 bg-[#FAFAF9] p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-slate-200">
              <div>
                <span className="text-xs font-mono text-slate-500 uppercase">Selected Vehicle</span>
                <h3 className="text-xl font-bold text-slate-900 mt-0.5">
                  {currentCategory.name}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs text-slate-500 font-medium">Test SIP Ticket:</span>
                <div className="inline-flex rounded-lg bg-white border border-slate-200 p-0.5 text-xs font-semibold">
                  {[500, 2500, 10000].map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => setSelectedTicket(amt)}
                      className={`px-3 py-1 rounded-md transition-colors ${
                        selectedTicket === amt
                          ? "bg-slate-900 text-white"
                          : "text-slate-600 hover:text-slate-900"
                      }`}
                    >
                      ₹{amt.toLocaleString("en-IN")}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Sample Verified Direct Instruments */}
            <div className="space-y-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Benchmark Quality Direct Plans
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentCategory.instruments.map((inst) => (
                  <div
                    key={inst.name}
                    className="p-5 bg-white rounded-xl border border-slate-200 shadow-xs space-y-3"
                  >
                    <div className="flex justify-between items-start">
                      <span className="font-bold text-sm text-slate-900 leading-snug">
                        {inst.name}
                      </span>
                      <span className="shrink-0 ml-2 text-xs font-mono px-2 py-0.5 bg-slate-100 text-slate-700 rounded font-semibold">
                        {inst.expenseRatio}
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 leading-relaxed">{inst.rationale}</p>

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                      <span>Risk: {inst.volatility}</span>
                      <span className="text-emerald-700 font-semibold flex items-center gap-1">
                        <Check className="w-3 h-3" />
                        SEBI Regulated
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Simulated 10-Year Outcome with Selected Ticket */}
            <div className="p-4 bg-white rounded-xl border border-slate-200 flex flex-wrap items-center justify-between gap-4 text-xs">
              <div>
                <span className="text-slate-500 font-medium">
                  If you start an automated SIP of ₹{selectedTicket.toLocaleString("en-IN")}/mo today:
                </span>
                <div className="text-sm font-bold text-slate-900 mt-0.5">
                  Projected 10Y Corpus: ~₹
                  {Math.round(
                    (selectedTicket * (Math.pow(1 + 0.12 / 12, 120) - 1) * (1 + 0.12 / 12)) /
                      (0.12 / 12)
                  ).toLocaleString("en-IN")}{" "}
                  <span className="text-slate-400 font-normal">(at 12% historical CAGR)</span>
                </div>
              </div>

              <a
                href="#calculators"
                className="inline-flex items-center gap-1.5 font-bold text-xs px-3.5 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
              >
                <span>Customize in SIP Lab</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
