"use client";

import React, { useState } from "react";
import { Sparkles, ShieldCheck, AlertCircle, ArrowRight, Check } from "lucide-react";

export function HealthCheckDiagnostic() {
  const [monthlyIncome, setMonthlyIncome] = useState(150000);
  const [monthlyInvest, setMonthlyInvest] = useState(45000);
  const [emergencyMonths, setEmergencyMonths] = useState<"low" | "mid" | "optimal">("mid");
  const [debtRatio, setDebtRatio] = useState<"none" | "low" | "medium" | "high">("low");

  // Calculate savings rate
  const savingsRate = Math.min(100, Math.round((monthlyInvest / monthlyIncome) * 100));

  // Compute composite score
  let score = 0;
  // Savings rate contribution (max 40)
  if (savingsRate >= 35) score += 40;
  else if (savingsRate >= 25) score += 32;
  else if (savingsRate >= 15) score += 22;
  else score += 10;

  // Emergency fund contribution (max 30)
  if (emergencyMonths === "optimal") score += 30;
  else if (emergencyMonths === "mid") score += 20;
  else score += 8;

  // Debt servicing contribution (max 30)
  if (debtRatio === "none") score += 30;
  else if (debtRatio === "low") score += 25;
  else if (debtRatio === "medium") score += 15;
  else score += 5;

  let scoreTier = "Healthy & Accelerating";
  let tierBadge = "text-emerald-400 bg-emerald-950/80 border-emerald-800";
  if (score < 50) {
    scoreTier = "Needs Attention";
    tierBadge = "text-rose-400 bg-rose-950/80 border-rose-800";
  } else if (score < 75) {
    scoreTier = "Balanced Foundation";
    tierBadge = "text-blue-400 bg-blue-950/80 border-blue-800";
  }

  return (
    <section id="health-check" className="py-20 bg-[#050B18] border-b border-[#0D2747]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Editorial Restraint */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A1D35] border border-[#123A63] text-blue-300 text-xs font-mono font-medium mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>INSTANT DIAGNOSTIC AUDIT</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight leading-tight">
            Know where your wealth stands in 60 seconds.
          </h2>
          <p className="mt-4 text-slate-300 text-base font-light leading-relaxed">
            No registration, phone number collection, or marketing calls. Calibrate your baseline cash flow
            below to evaluate your savings velocity, debt vulnerability, and liquid runway.
          </p>
        </div>

        {/* Diagnostic Tool Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 bg-[#071426] p-6 sm:p-8 rounded-2xl border border-[#123A63] space-y-7 shadow-xl">
            {/* Input 1: Monthly Income */}
            <div className="space-y-2.5">
              <div className="flex justify-between items-center text-sm font-medium text-slate-200">
                <label htmlFor="income-range">Monthly Take-Home Income</label>
                <span className="font-mono text-base text-white num-tabular font-bold">
                  ₹{monthlyIncome.toLocaleString("en-IN")}
                </span>
              </div>
              <input
                id="income-range"
                type="range"
                min={30000}
                max={500000}
                step={5000}
                value={monthlyIncome}
                onChange={(e) => setMonthlyIncome(Number(e.target.value))}
                className="w-full h-2 bg-[#0A1D35] rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>₹30,000</span>
                <span>₹2,50,000</span>
                <span>₹5,00,000+</span>
              </div>
            </div>

            {/* Input 2: Monthly Investments */}
            <div className="space-y-2.5">
              <div className="flex justify-between items-center text-sm font-medium text-slate-200">
                <label htmlFor="invest-range">Monthly Investments & Systematic SIPs</label>
                <span className="font-mono text-base text-emerald-400 num-tabular font-bold">
                  ₹{monthlyInvest.toLocaleString("en-IN")}
                </span>
              </div>
              <input
                id="invest-range"
                type="range"
                min={2000}
                max={Math.max(monthlyIncome, 50000)}
                step={2000}
                value={monthlyInvest}
                onChange={(e) => setMonthlyInvest(Number(e.target.value))}
                className="w-full h-2 bg-[#0A1D35] rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                <span>₹2,000</span>
                <span className="text-cyan-400 font-semibold">Savings Velocity: {savingsRate}%</span>
                <span>₹{monthlyIncome.toLocaleString("en-IN")}</span>
              </div>
            </div>

            {/* Input 3: Emergency Fund */}
            <div className="space-y-2.5">
              <div className="text-sm font-medium text-slate-200">
                Liquid Emergency Reserve Buffer
              </div>
              <div className="grid grid-cols-3 gap-3 text-xs">
                <button
                  type="button"
                  onClick={() => setEmergencyMonths("low")}
                  className={`p-3 rounded-xl border font-mono font-medium transition-all ${
                    emergencyMonths === "low"
                      ? "bg-blue-600 text-white border-blue-400 shadow-md"
                      : "bg-[#0A1D35] text-slate-300 border-[#123A63] hover:bg-[#0D2747]"
                  }`}
                >
                  &lt; 2 Months
                </button>
                <button
                  type="button"
                  onClick={() => setEmergencyMonths("mid")}
                  className={`p-3 rounded-xl border font-mono font-medium transition-all ${
                    emergencyMonths === "mid"
                      ? "bg-blue-600 text-white border-blue-400 shadow-md"
                      : "bg-[#0A1D35] text-slate-300 border-[#123A63] hover:bg-[#0D2747]"
                  }`}
                >
                  3 - 5 Months
                </button>
                <button
                  type="button"
                  onClick={() => setEmergencyMonths("optimal")}
                  className={`p-3 rounded-xl border font-mono font-medium transition-all ${
                    emergencyMonths === "optimal"
                      ? "bg-blue-600 text-white border-blue-400 shadow-md"
                      : "bg-[#0A1D35] text-slate-300 border-[#123A63] hover:bg-[#0D2747]"
                  }`}
                >
                  6+ Months (Optimal)
                </button>
              </div>
            </div>

            {/* Input 4: Fixed EMI / Debt Servicing */}
            <div className="space-y-2.5">
              <div className="text-sm font-medium text-slate-200">
                Existing Debt & Fixed EMI Outgo
              </div>
              <div className="grid grid-cols-4 gap-2.5 text-xs">
                <button
                  type="button"
                  onClick={() => setDebtRatio("none")}
                  className={`p-2.5 rounded-xl border font-mono font-medium transition-all ${
                    debtRatio === "none"
                      ? "bg-blue-600 text-white border-blue-400 shadow-md"
                      : "bg-[#0A1D35] text-slate-300 border-[#123A63] hover:bg-[#0D2747]"
                  }`}
                >
                  Zero Debt
                </button>
                <button
                  type="button"
                  onClick={() => setDebtRatio("low")}
                  className={`p-2.5 rounded-xl border font-mono font-medium transition-all ${
                    debtRatio === "low"
                      ? "bg-blue-600 text-white border-blue-400 shadow-md"
                      : "bg-[#0A1D35] text-slate-300 border-[#123A63] hover:bg-[#0D2747]"
                  }`}
                >
                  &lt; 25%
                </button>
                <button
                  type="button"
                  onClick={() => setDebtRatio("medium")}
                  className={`p-2.5 rounded-xl border font-mono font-medium transition-all ${
                    debtRatio === "medium"
                      ? "bg-blue-600 text-white border-blue-400 shadow-md"
                      : "bg-[#0A1D35] text-slate-300 border-[#123A63] hover:bg-[#0D2747]"
                  }`}
                >
                  25% - 45%
                </button>
                <button
                  type="button"
                  onClick={() => setDebtRatio("high")}
                  className={`p-2.5 rounded-xl border font-mono font-medium transition-all ${
                    debtRatio === "high"
                      ? "bg-blue-600 text-white border-blue-400 shadow-md"
                      : "bg-[#0A1D35] text-slate-300 border-[#123A63] hover:bg-[#0D2747]"
                  }`}
                >
                  &gt; 45% (High)
                </button>
              </div>
            </div>
          </div>

          {/* Results Scorecard Column (5 cols) */}
          <div className="lg:col-span-5 bg-[#071426] p-6 sm:p-8 rounded-2xl border border-[#123A63] shadow-xl space-y-6">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Resilience Score
                </span>
                <span className={`text-xs font-mono font-semibold px-3 py-1 rounded-full border ${tierBadge}`}>
                  {scoreTier}
                </span>
              </div>
              <div className="flex items-baseline gap-2 mt-3">
                <span className="text-6xl font-extrabold tracking-tight text-white num-tabular font-mono">
                  {score}
                </span>
                <span className="text-slate-500 font-semibold text-xl">/ 100</span>
              </div>
            </div>

            {/* Health Meter Bar */}
            <div className="w-full bg-[#050B18] h-3 rounded-full overflow-hidden border border-[#0D2747]">
              <div
                className={`h-full transition-all duration-300 rounded-full ${
                  score >= 75
                    ? "bg-emerald-500"
                    : score >= 50
                    ? "bg-blue-500"
                    : "bg-rose-500"
                }`}
                style={{ width: `${score}%` }}
              ></div>
            </div>

            {/* Key Findings List */}
            <div className="space-y-4 pt-2 text-xs">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 p-1 rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800">
                  <Check className="w-3.5 h-3.5" />
                </div>
                <div>
                  <span className="font-semibold text-white">
                    Savings Velocity: {savingsRate}% of take-home
                  </span>
                  <p className="text-slate-400 mt-1 leading-relaxed">
                    {savingsRate >= 30
                      ? "Exceptional savings velocity. You are investing above the recommended 25% benchmark for Indian urban professionals."
                      : "Consider stepping up your monthly SIP by 5% annually to reach a 30% savings cushion."}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div
                  className={`mt-0.5 p-1 rounded-full ${
                    emergencyMonths === "optimal"
                      ? "bg-emerald-950 text-emerald-400 border border-emerald-800"
                      : "bg-amber-950 text-amber-400 border border-amber-800"
                  }`}
                >
                  {emergencyMonths === "optimal" ? (
                    <ShieldCheck className="w-3.5 h-3.5" />
                  ) : (
                    <AlertCircle className="w-3.5 h-3.5" />
                  )}
                </div>
                <div>
                  <span className="font-semibold text-white">
                    Liquid Runway:{" "}
                    {emergencyMonths === "optimal"
                      ? "6+ Months Secured"
                      : emergencyMonths === "mid"
                      ? "3-5 Months (Acceptable)"
                      : "Less than 2 Months (Vulnerable)"}
                  </span>
                  <p className="text-slate-400 mt-1 leading-relaxed">
                    {emergencyMonths === "optimal"
                      ? "Strong cushion against market dips or unexpected disruptions without forcing premature equity redemption."
                      : "Build emergency cash in liquid or arbitrage funds before expanding high-volatility mid-cap exposure."}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#0D2747]">
              <a
                href="#calculators"
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-600 text-white text-xs font-semibold hover:bg-blue-500 active:bg-blue-700 transition-colors shadow-md shadow-blue-900/30 border border-blue-400/30"
              >
                <span>Model SIP & Prepayment In Calculator Lab</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
