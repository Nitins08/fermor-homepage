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
  let tierColor = "text-emerald-700 bg-emerald-50 border-emerald-200";
  if (score < 50) {
    scoreTier = "Needs Attention";
    tierColor = "text-amber-800 bg-amber-50 border-amber-200";
  } else if (score < 75) {
    scoreTier = "Balanced Foundation";
    tierColor = "text-blue-800 bg-blue-50 border-blue-200";
  }

  return (
    <section id="health-check" className="py-16 bg-white border-b border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-100 text-slate-700 text-xs font-semibold mb-3">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>Interactive Diagnostic</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
            Know where you stand in 60 seconds.
          </h2>
          <p className="mt-3 text-slate-600 text-base">
            No registration or invasive credentials. Adjust your baseline numbers below to diagnose
            your savings rate, debt vulnerability, and emergency resilience.
          </p>
        </div>

        {/* Diagnostic Tool Panel */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column (7 cols) */}
          <div className="lg:col-span-7 bg-[#FAFAF9] p-6 sm:p-8 rounded-xl border border-slate-200 space-y-6">
            {/* Input 1: Monthly Income */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm font-semibold text-slate-800">
                <label htmlFor="income-range">Monthly Take-Home Income</label>
                <span className="font-mono text-base text-slate-900 num-tabular font-bold">
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
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                <span>₹30,000</span>
                <span>₹2,50,000</span>
                <span>₹5,00,000+</span>
              </div>
            </div>

            {/* Input 2: Monthly Investments */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm font-semibold text-slate-800">
                <label htmlFor="invest-range">Monthly Investment & SIPs</label>
                <span className="font-mono text-base text-emerald-700 num-tabular font-bold">
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
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                <span>₹2,000</span>
                <span>Savings Rate: {savingsRate}%</span>
                <span>₹{monthlyIncome.toLocaleString("en-IN")}</span>
              </div>
            </div>

            {/* Input 3: Emergency Fund */}
            <div className="space-y-2">
              <div className="text-sm font-semibold text-slate-800">
                Liquid Emergency Reserve
              </div>
              <div className="grid grid-cols-3 gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => setEmergencyMonths("low")}
                  className={`p-2.5 rounded-lg border font-medium transition-all ${
                    emergencyMonths === "low"
                      ? "bg-slate-900 text-white border-slate-900"
                      : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  &lt; 2 Months
                </button>
                <button
                  type="button"
                  onClick={() => setEmergencyMonths("mid")}
                  className={`p-2.5 rounded-lg border font-medium transition-all ${
                    emergencyMonths === "mid"
                      ? "bg-slate-900 text-white border-slate-900"
                      : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  3 - 5 Months
                </button>
                <button
                  type="button"
                  onClick={() => setEmergencyMonths("optimal")}
                  className={`p-2.5 rounded-lg border font-medium transition-all ${
                    emergencyMonths === "optimal"
                      ? "bg-slate-900 text-white border-slate-900"
                      : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  6+ Months (Optimal)
                </button>
              </div>
            </div>

            {/* Input 4: Fixed EMI / Debt Servicing */}
            <div className="space-y-2">
              <div className="text-sm font-semibold text-slate-800">
                Existing Debt & Loan Outgo (EMIs)
              </div>
              <div className="grid grid-cols-4 gap-2 text-xs">
                <button
                  type="button"
                  onClick={() => setDebtRatio("none")}
                  className={`p-2 rounded-lg border font-medium transition-all ${
                    debtRatio === "none"
                      ? "bg-slate-900 text-white border-slate-900"
                      : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  Zero Debt
                </button>
                <button
                  type="button"
                  onClick={() => setDebtRatio("low")}
                  className={`p-2 rounded-lg border font-medium transition-all ${
                    debtRatio === "low"
                      ? "bg-slate-900 text-white border-slate-900"
                      : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  &lt; 25% Income
                </button>
                <button
                  type="button"
                  onClick={() => setDebtRatio("medium")}
                  className={`p-2 rounded-lg border font-medium transition-all ${
                    debtRatio === "medium"
                      ? "bg-slate-900 text-white border-slate-900"
                      : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  25% - 45%
                </button>
                <button
                  type="button"
                  onClick={() => setDebtRatio("high")}
                  className={`p-2 rounded-lg border font-medium transition-all ${
                    debtRatio === "high"
                      ? "bg-slate-900 text-white border-slate-900"
                      : "bg-white text-slate-700 border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  &gt; 45% (High)
                </button>
              </div>
            </div>
          </div>

          {/* Results Scorecard Column (5 cols) */}
          <div className="lg:col-span-5 bg-white p-6 sm:p-8 rounded-xl border border-slate-200 shadow-sm space-y-6">
            <div>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  Resilience Score
                </span>
                <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full border ${tierColor}`}>
                  {scoreTier}
                </span>
              </div>
              <div className="flex items-baseline gap-2 mt-2">
                <span className="text-5xl font-bold tracking-tight text-slate-900 num-tabular">
                  {score}
                </span>
                <span className="text-slate-400 font-semibold text-lg">/ 100</span>
              </div>
            </div>

            {/* Health Meter Bar */}
            <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-300 rounded-full ${
                  score >= 75
                    ? "bg-emerald-600"
                    : score >= 50
                    ? "bg-blue-600"
                    : "bg-amber-500"
                }`}
                style={{ width: `${score}%` }}
              ></div>
            </div>

            {/* Key Findings List */}
            <div className="space-y-3 pt-2 text-xs">
              <div className="flex items-start gap-2.5">
                <div className="mt-0.5 p-1 rounded-full bg-emerald-100 text-emerald-800">
                  <Check className="w-3 h-3" />
                </div>
                <div>
                  <span className="font-bold text-slate-800">
                    Savings Rate: {savingsRate}% of take-home
                  </span>
                  <p className="text-slate-500 mt-0.5">
                    {savingsRate >= 30
                      ? "Exceptional savings velocity. You are investing above the recommended 25% benchmark for Indian urban earners."
                      : "Consider stepping up your monthly SIP by 5% annually to reach a 30% savings rate buffer."}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <div
                  className={`mt-0.5 p-1 rounded-full ${
                    emergencyMonths === "optimal"
                      ? "bg-emerald-100 text-emerald-800"
                      : "bg-amber-100 text-amber-800"
                  }`}
                >
                  {emergencyMonths === "optimal" ? (
                    <ShieldCheck className="w-3 h-3" />
                  ) : (
                    <AlertCircle className="w-3 h-3" />
                  )}
                </div>
                <div>
                  <span className="font-bold text-slate-800">
                    Liquid Runway:{" "}
                    {emergencyMonths === "optimal"
                      ? "6+ Months Secured"
                      : emergencyMonths === "mid"
                      ? "3-5 Months (Acceptable)"
                      : "Less than 2 Months (Vulnerable)"}
                  </span>
                  <p className="text-slate-500 mt-0.5">
                    {emergencyMonths === "optimal"
                      ? "Strong cushion against layoffs or medical emergencies without forcing premature equity redemption."
                      : "Build emergency cash in overnight or arbitrage funds before taking on aggressive mid/small-cap bets."}
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-2 border-t border-slate-100">
              <a
                href="#calculators"
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-slate-900 text-white text-xs font-semibold hover:bg-slate-800 transition-colors"
              >
                <span>Model SIP & Prepayment Strategy</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
