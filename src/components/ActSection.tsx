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
        name: "UTI Nifty 50 Index Fund (Direct-Growth)",
        expenseRatio: "0.18% TER",
        volatility: "Standard Beta 1.0",
        rationale: "Lowest tracking error across 5-year cycles; zero distributor commission.",
      },
      {
        name: "Nippon India Nifty Next 50 Junior BeES ETF",
        expenseRatio: "0.22% TER",
        volatility: "Higher Beta 1.15",
        rationale: "Exposure to India's fastest-growing innovators (ranks 51-100).",
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
        name: "Parag Parikh Flexi Cap Fund (Direct-Growth)",
        expenseRatio: "0.62% TER",
        volatility: "Controlled Downside",
        rationale: "Long-term value discipline with partial global diversification buffer.",
      },
      {
        name: "Motilal Oswal Midcap Fund (Direct-Growth)",
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
        name: "ICICI Prudential Liquid Fund (Direct-Growth)",
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
    <section id="act" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7FAF8] border border-[#DDE8E1] text-[#0B3D2E] text-xs font-mono font-medium mb-3">
            <Zap className="w-3.5 h-3.5 text-emerald-600" />
            <span>02 / ACT & INVEST DIRECTLY</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-semibold text-[#10251B] tracking-tight leading-tight">
            Execute with precision. Zero middleman drag.
          </h2>
          <p className="mt-2 text-[#4B6354] text-sm leading-relaxed">
            Move from passive intent to automated systematic execution. Build institutional-grade portfolios
            anchored in low-cost direct plans, index tracking, and disciplined asset-allocation rules.
          </p>
        </div>

        {/* Interactive Asset Matrix */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Category Tabs (4 cols) */}
          <div className="lg:col-span-4 space-y-3.5">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#4B6354] mb-2">
              Strategic Asset Tranches:
            </div>
            {CATEGORIES.map((cat) => {
              const isActive = cat.id === activeCategory;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveCategory(cat.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all ${
                    isActive
                      ? "bg-white text-[#10251B] border-emerald-500 shadow-md ring-1 ring-emerald-500/20"
                      : "bg-[#F7FAF8] text-[#4B6354] border-[#DDE8E1] hover:border-emerald-300 hover:bg-white"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`text-xs font-mono font-semibold px-2.5 py-0.5 rounded-full ${
                        isActive
                          ? "bg-emerald-600 text-white"
                          : "bg-white text-emerald-800 border border-[#DDE8E1]"
                      }`}
                    >
                      {cat.badge}
                    </span>
                    <span className="text-xs font-mono text-[#82998B]">
                      {cat.minTicket}
                    </span>
                  </div>
                  <div className="text-base font-semibold text-[#10251B] mt-2.5">{cat.name}</div>
                  <p className="text-xs mt-1.5 leading-relaxed text-[#4B6354]">
                    {cat.recommendedFor}
                  </p>
                </button>
              );
            })}

            {/* Quick Micro Callout */}
            <div className="p-4 bg-[#F7FAF8] rounded-2xl border border-[#DDE8E1] text-xs space-y-2">
              <div className="flex items-center gap-2 font-semibold text-[#10251B]">
                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                <span>Zero Commission Guarantee</span>
              </div>
              <p className="text-[#4B6354] leading-relaxed">
                Fermor charges 0 transaction markups and directs you strictly to AMC Direct Plans.
                You retain 100% of your compounding return.
              </p>
            </div>
          </div>

          {/* Asset Deep-Dive Inspector (8 cols) */}
          <div className="lg:col-span-8 bg-[#F7FAF8] p-6 sm:p-8 rounded-2xl border border-[#DDE8E1] shadow-xs space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-4 pb-4 border-b border-[#DDE8E1]">
              <div>
                <span className="text-xs font-mono text-[#4B6354] uppercase">Selected Vehicle</span>
                <h3 className="text-xl font-bold text-[#10251B] mt-0.5">
                  {currentCategory.name}
                </h3>
              </div>
              <div className="flex items-center gap-2.5">
                <span className="text-xs text-[#4B6354] font-medium font-mono">Test SIP Outgo:</span>
                <div className="inline-flex rounded-xl bg-white border border-[#DDE8E1] p-1 text-xs font-mono font-semibold">
                  {[500, 2500, 10000].map((amt) => (
                    <button
                      key={amt}
                      type="button"
                      onClick={() => setSelectedTicket(amt)}
                      className={`px-3 py-1 rounded-lg transition-all ${
                        selectedTicket === amt
                          ? "bg-emerald-600 text-white shadow-xs"
                          : "text-[#4B6354] hover:text-[#10251B]"
                      }`}
                    >
                      ₹{amt.toLocaleString("en-IN")}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Benchmark Quality Direct Plans */}
            <div className="space-y-4">
              <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#4B6354]">
                Direct Plan Benchmark Quality Instruments
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {currentCategory.instruments.map((inst) => (
                  <div
                    key={inst.name}
                    className="p-5 bg-white rounded-xl border border-[#DDE8E1] space-y-3 hover:border-emerald-400 transition-colors shadow-2xs"
                  >
                    <div className="flex justify-between items-start">
                      <span className="font-semibold text-sm text-[#10251B] leading-snug">
                        {inst.name}
                      </span>
                      <span className="shrink-0 ml-2 text-xs font-mono px-2 py-0.5 bg-[#F2F7F4] text-emerald-800 border border-emerald-500/20 rounded font-semibold">
                        {inst.expenseRatio}
                      </span>
                    </div>

                    <p className="text-xs text-[#4B6354] leading-relaxed">{inst.rationale}</p>

                    <div className="pt-2 border-t border-[#DDE8E1] flex items-center justify-between text-[11px] text-[#4B6354] font-mono">
                      <span>{inst.volatility}</span>
                      <span className="text-emerald-700 font-semibold flex items-center gap-1">
                        <Check className="w-3 h-3 text-emerald-600" />
                        SEBI Regulated
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Simulated 10-Year Outcome with Selected Ticket */}
            <div className="p-5 bg-white rounded-xl border border-[#DDE8E1] flex flex-wrap items-center justify-between gap-4 text-xs shadow-2xs">
              <div>
                <span className="text-[#4B6354]">
                  If you run an automated SIP of ₹{selectedTicket.toLocaleString("en-IN")}/mo today:
                </span>
                <div className="text-sm font-semibold text-[#10251B] mt-1">
                  Projected 10Y Corpus: ~₹
                  {Math.round(
                    (selectedTicket * (Math.pow(1 + 0.12 / 12, 120) - 1) * (1 + 0.12 / 12)) /
                      (0.12 / 12)
                  ).toLocaleString("en-IN")}{" "}
                  <span className="text-[#82998B] font-mono">(assumed 12% CAGR)</span>
                </div>
              </div>

              <a
                href="#calculators"
                className="inline-flex items-center gap-1.5 font-semibold text-xs px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors shadow-xs"
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
