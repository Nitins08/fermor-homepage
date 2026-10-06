"use client";

import React, { useState } from "react";
import { MessageSquareText, Sparkles, Check } from "lucide-react";

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
        note: "After new 12.5% Long-Term Capital Gains tax above ₹1.25L threshold.",
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
        note: "Step-up saves cashflow strain in early career years when expenses like home setup are high.",
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
  const [selectedId, setSelectedId] = useState<string>("prepay-vs-sip");
  const current = SCENARIOS.find((s) => s.id === selectedId) || SCENARIOS[0];

  return (
    <section id="ask" className="py-20 bg-[#FAFAF9] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-200 text-slate-800 text-xs font-semibold mb-3">
            <MessageSquareText className="w-3.5 h-3.5 text-emerald-700" />
            <span>FINANCIAL INTELLIGENCE ENGINE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
            Ask complex money questions. Get arithmetic, not opinions.
          </h2>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            Personal finance is full of trade-offs. Fermor tests the numbers across tax regimes,
            interest rates, and investment compounding to deliver clear decisions.
          </p>
        </div>

        {/* Interactive Query Sandbox */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          {/* Query Selector Pills */}
          <div className="p-4 sm:p-6 bg-slate-50 border-b border-slate-200">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3">
              Explore Common Financial Dilemmas:
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {SCENARIOS.map((sc) => {
                const isSelected = sc.id === selectedId;
                return (
                  <button
                    key={sc.id}
                    type="button"
                    onClick={() => setSelectedId(sc.id)}
                    className={`p-3.5 rounded-lg border text-left transition-all ${
                      isSelected
                        ? "bg-slate-900 text-white border-slate-900 shadow-xs"
                        : "bg-white text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                    }`}
                  >
                    <span
                      className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                        isSelected
                          ? "bg-emerald-900 text-emerald-300"
                          : "bg-slate-100 text-slate-600"
                      }`}
                    >
                      {sc.tag}
                    </span>
                    <div className="text-xs font-semibold mt-2 line-clamp-2">{sc.question}</div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Engine Output Console */}
          <div className="p-6 sm:p-8 space-y-6">
            <div className="flex items-start gap-3">
              <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5">
                <Sparkles className="w-4 h-4" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base sm:text-lg font-bold text-slate-900">
                  {current.question}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">{current.answerSummary}</p>
              </div>
            </div>

            {/* Arithmetic Breakdown Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {current.mathBreakdown.map((item) => (
                <div key={item.label} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
                  <div className="text-xs font-medium text-slate-500">{item.label}</div>
                  <div className="text-lg font-bold text-slate-900 num-tabular">{item.value}</div>
                  <div className="text-[11px] text-slate-500 leading-snug">{item.note}</div>
                </div>
              ))}
            </div>

            {/* Verdict Box */}
            <div className="p-4 sm:p-5 bg-emerald-50/80 rounded-xl border border-emerald-200/80 flex items-start gap-3">
              <div className="p-1 rounded-full bg-emerald-600 text-white shrink-0 mt-0.5">
                <Check className="w-3.5 h-3.5" />
              </div>
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-emerald-900">
                  Data-Grounded Recommendation
                </div>
                <div className="text-sm font-semibold text-emerald-950 mt-1 leading-relaxed">
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
