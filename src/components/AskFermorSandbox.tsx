"use client";

import React, { useState } from "react";
import { MessageSquareText, Sparkles, Check, ArrowRight } from "lucide-react";

interface QueryScenario {
  id: string;
  question: string;
  tag: string;
  answerSummary: string;
  mathBreakdown: {
    label: string;
    value: string;
    note: string;
  }[];
  verdict: string;
}

const SCENARIOS: QueryScenario[] = [
  {
    id: "prepay-vs-sip",
    question: "Should I prepay my 8.65% home loan or double my Nifty 50 SIP?",
    tag: "Debt vs Equity",
    answerSummary:
      "A guaranteed 8.65% interest saving outperforms equity after tax if your time horizon is short, but equity wins decisively past 7 years.",
    mathBreakdown: [
      {
        label: "Guaranteed Post-Tax Loan Cost",
        value: "6.92% - 8.65%",
        note: "Depends on whether Section 24(b) interest deduction is claimed in Old Regime.",
      },
      {
        label: "Nifty 50 Historical 10Y CAGR",
        value: "12.4% (Post-LTCG ~10.8%)",
        note: "After revised 12.5% Long-Term Capital Gains tax above ₹1.25L threshold.",
      },
      {
        label: "The Spread / Net Equity Premium",
        value: "+2.2% to +3.8% p.a.",
        note: "Compounding equity creates ~₹18.4 Lakhs higher net terminal wealth over 15 years.",
      },
    ],
    verdict:
      "Fermor Hybrid Strategy: Prepay 1 additional EMI every year (knocks 5 years off tenure) while directing all remaining monthly surplus into Nifty 50 Direct Index funds.",
  },
  {
    id: "corpus-age-48",
    question: "How much monthly SIP do I need to accumulate ₹3.0 Crores by age 48?",
    tag: "Retirement Math",
    answerSummary:
      "Assuming you are 32 years old (16-year compounding window) and investing in a diversified 70:30 Equity/Debt asset allocation.",
    mathBreakdown: [
      {
        label: "Flat SIP Requirement",
        value: "₹48,500 / month",
        note: "Requires locking in ₹48.5k immediately without any future step-ups.",
      },
      {
        label: "Step-Up SIP Requirement (10% annual bump)",
        value: "₹24,200 / month starting",
        note: "Half the initial cashflow burden! Scales smoothly with annual career promotions.",
      },
      {
        label: "Total Capital Outlay Difference",
        value: "₹93.1L vs ₹89.4L",
        note: "Step-up saves cashflow strain in early career years when life expenses are higher.",
      },
    ],
    verdict:
      "Start with a ₹25,000/month SIP today with an automated 10% annual step-up. You reach ₹3.0 Cr comfortably by age 47.8.",
  },
  {
    id: "tax-regime-22l",
    question: "Which tax regime saves more on ₹22 Lakh salary with ₹3 Lakhs deductions?",
    tag: "Tax Optimization",
    answerSummary:
      "At ₹22 Lakhs gross income, the New Tax Regime’s wider slabs and lower rates significantly overcome the Old Regime deductions.",
    mathBreakdown: [
      {
        label: "New Tax Regime Liability",
        value: "₹3,43,200",
        note: "Includes ₹75,000 standard deduction + 4% health & education cess.",
      },
      {
        label: "Old Tax Regime Liability",
        value: "₹3,79,600",
        note: "Based on ₹50,000 standard deduction + ₹3,00,000 declared exemptions.",
      },
      {
        label: "Net Annual Tax Savings",
        value: "₹36,400 in your pocket",
        note: "New Regime saves ₹3,033 every single month without locking cash in 5-year lock-in products.",
      },
    ],
    verdict:
      "Switch to the New Tax Regime. In addition to saving ₹36,400 in taxes, you free up ₹1.5 Lakhs of capital that would otherwise be locked in restrictive tax-saving lock-in schemes.",
  },
];

export function AskFermorSandbox() {
  const [activeScenario, setActiveScenario] = useState<string>("prepay-vs-sip");
  const current = SCENARIOS.find((s) => s.id === activeScenario) || SCENARIOS[0];

  return (
    <section id="intelligence" className="py-24 bg-[#050B18] border-b border-[#0D2747]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A1D35] border border-[#123A63] text-blue-300 text-xs font-mono font-medium mb-4">
            <MessageSquareText className="w-3.5 h-3.5 text-cyan-400" />
            <span>05 / NATURAL SCENARIO INTELLIGENCE</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight leading-tight">
            Ask complex trade-offs. Get mathematical clarity.
          </h2>
          <p className="mt-4 text-slate-300 text-base font-light leading-relaxed">
            Financial decisions are never one-dimensional. Explore realistic scenarios tested against
            Indian tax legislation, market volatility benchmarks, and cash flow constraints.
          </p>
        </div>

        {/* Interactive Query Sandbox */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Query Selection Prompts (4 cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400 mb-2">
              Select Real-World Financial Query:
            </div>
            {SCENARIOS.map((scenario) => {
              const isSelected = scenario.id === activeScenario;
              return (
                <button
                  key={scenario.id}
                  type="button"
                  onClick={() => setActiveScenario(scenario.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl border transition-all ${
                    isSelected
                      ? "bg-[#0A1D35] text-white border-blue-400 shadow-xl shadow-blue-950/40"
                      : "bg-[#071426] text-slate-300 border-[#123A63] hover:border-slate-400 hover:bg-[#0A1D35]/50"
                  }`}
                >
                  <span
                    className={`text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full ${
                      isSelected
                        ? "bg-blue-600 text-white"
                        : "bg-[#050B18] text-cyan-300 border border-[#123A63]"
                    }`}
                  >
                    {scenario.tag}
                  </span>
                  <div className="text-sm font-semibold text-white mt-2 leading-snug">
                    {scenario.question}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Intelligence Breakdown (8 cols) */}
          <div className="lg:col-span-8 bg-[#071426] p-6 sm:p-8 rounded-2xl border border-[#123A63] shadow-xl space-y-6">
            <div>
              <div className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-cyan-400 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Deterministic Calculation Model</span>
              </div>
              <h3 className="text-xl font-bold text-white leading-snug">{current.question}</h3>
              <p className="mt-2 text-sm text-slate-300 leading-relaxed font-light">
                {current.answerSummary}
              </p>
            </div>

            {/* Numerical breakdown matrix */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 pt-2">
              {current.mathBreakdown.map((item) => (
                <div
                  key={item.label}
                  className="p-4 bg-[#0A1D35]/70 rounded-xl border border-[#123A63] space-y-2 hover:border-blue-500/40 transition-colors"
                >
                  <div className="text-[11px] font-mono font-medium text-slate-400 uppercase">
                    {item.label}
                  </div>
                  <div className="text-base font-bold text-white num-tabular font-mono">
                    {item.value}
                  </div>
                  <div className="text-[11px] text-slate-400 leading-snug font-light">{item.note}</div>
                </div>
              ))}
            </div>

            {/* Verdict Box */}
            <div className="p-5 bg-[#050B18] rounded-xl border border-blue-500/40 flex items-start gap-3.5">
              <div className="p-1.5 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800 shrink-0 mt-0.5">
                <Check className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-mono font-semibold uppercase tracking-wider text-cyan-300">
                  Data-Grounded Synthesis
                </div>
                <div className="text-sm font-medium text-slate-200 mt-1 leading-relaxed">
                  {current.verdict}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
