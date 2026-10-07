"use client";

import React, { useState } from "react";
import {
  Calculator,
  Home,
  TrendingUp,
  RotateCcw,
  Sparkles,
} from "lucide-react";

export function CalculatorLab() {
  const [activeTab, setActiveTab] = useState<"sip" | "emi" | "swp">("sip");

  // SIP State
  const [sipMode, setSipMode] = useState<"sip" | "lumpsum">("sip");
  const [sipAmount, setSipAmount] = useState(20000);
  const [sipReturnRate, setSipReturnRate] = useState(12);
  const [sipYears, setSipYears] = useState(15);

  // EMI State
  const [loanPrincipal, setLoanPrincipal] = useState(5000000); // 50 Lakhs
  const [loanRate, setLoanRate] = useState(8.5); // 8.5%
  const [loanTenureYrs, setLoanTenureYrs] = useState(20);
  const [monthlyPrepay, setMonthlyPrepay] = useState(5000);

  // SWP State
  const [swpCorpus, setSwpCorpus] = useState(15000000); // 1.5 Crores
  const [swpMonthlyWithdraw, setSwpMonthlyWithdraw] = useState(80000); // 80k/mo
  const [swpRate, setSwpRate] = useState(9); // 9% return

  // Calculations for SIP
  const sipMonths = sipYears * 12;
  const sipMonthlyRate = sipReturnRate / 100 / 12;

  let totalInvested = 0;
  let totalFutureValue = 0;

  if (sipMode === "sip") {
    totalInvested = sipAmount * sipMonths;
    totalFutureValue = Math.round(
      (sipAmount * (Math.pow(1 + sipMonthlyRate, sipMonths) - 1) * (1 + sipMonthlyRate)) /
        sipMonthlyRate
    );
  } else {
    totalInvested = sipAmount * 10; // For lumpsum treat amount as 10x
    totalFutureValue = Math.round(totalInvested * Math.pow(1 + sipReturnRate / 100, sipYears));
  }
  const estimatedReturns = Math.max(0, totalFutureValue - totalInvested);

  // Calculations for EMI
  const emiMonths = loanTenureYrs * 12;
  const emiMonthlyRate = loanRate / 100 / 12;
  const baseEmi = Math.round(
    (loanPrincipal * emiMonthlyRate * Math.pow(1 + emiMonthlyRate, emiMonths)) /
      (Math.pow(1 + emiMonthlyRate, emiMonths) - 1)
  );
  const totalBaseRepayment = baseEmi * emiMonths;
  const totalBaseInterest = totalBaseRepayment - loanPrincipal;

  // Prepayment impact approximation
  const acceleratedMonthly = baseEmi + monthlyPrepay;
  let balance = loanPrincipal;
  let acceleratedMonthsCount = 0;
  let totalInterestWithPrepay = 0;

  while (balance > 0 && acceleratedMonthsCount < emiMonths) {
    const interestForMonth = balance * emiMonthlyRate;
    totalInterestWithPrepay += interestForMonth;
    const principalPaid = acceleratedMonthly - interestForMonth;
    balance -= principalPaid;
    acceleratedMonthsCount++;
  }
  const interestSaved = Math.max(0, totalBaseInterest - Math.round(totalInterestWithPrepay));
  const yearsSaved = Math.max(
    0,
    ((emiMonths - acceleratedMonthsCount) / 12).toFixed(1) as unknown as number
  );

  // Calculations for SWP
  const swpMonthlyReturn = swpRate / 100 / 12;
  let swpRemaining = swpCorpus;
  let swpMonthsSurvived = 0;
  const maxSwpTestMonths = 360; // 30 years test

  while (swpRemaining > 0 && swpMonthsSurvived < maxSwpTestMonths) {
    swpRemaining = swpRemaining * (1 + swpMonthlyReturn) - swpMonthlyWithdraw;
    if (swpRemaining > 0) swpMonthsSurvived++;
  }
  const swpYearsSurvived = Math.floor(swpMonthsSurvived / 12);

  return (
    <section id="calculators" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7FAF8] border border-[#DDE8E1] text-[#0B3D2E] text-xs font-mono font-medium mb-3">
            <Calculator className="w-3.5 h-3.5 text-emerald-600" />
            <span>04 / IN-BROWSER CALCULATION LAB</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-semibold text-[#10251B] tracking-tight leading-tight">
            Institutional math, client-side precision.
          </h2>
          <p className="mt-2 text-[#4B6354] text-sm leading-relaxed">
            Run compounding simulations, debt amortization schedules, and retirement drawdowns with
            zero server round-trips. Your numbers never leave your browser memory.
          </p>
        </div>

        {/* Tab Selection */}
        <div className="flex items-center gap-3 mb-8 border-b border-[#DDE8E1] pb-4 overflow-x-auto no-scrollbar font-mono text-xs">
          <button
            type="button"
            onClick={() => setActiveTab("sip")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold transition-all ${
              activeTab === "sip"
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-950/15"
                : "bg-[#F7FAF8] text-[#4B6354] border border-[#DDE8E1] hover:text-[#10251B] hover:bg-white"
            }`}
          >
            <TrendingUp className="w-4 h-4" />
            <span>SIP & Compounding Engine</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("emi")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold transition-all ${
              activeTab === "emi"
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-950/15"
                : "bg-[#F7FAF8] text-[#4B6354] border border-[#DDE8E1] hover:text-[#10251B] hover:bg-white"
            }`}
          >
            <Home className="w-4 h-4" />
            <span>Home Loan & Prepayment Amortization</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab("swp")}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold transition-all ${
              activeTab === "swp"
                ? "bg-emerald-600 text-white shadow-md shadow-emerald-950/15"
                : "bg-[#F7FAF8] text-[#4B6354] border border-[#DDE8E1] hover:text-[#10251B] hover:bg-white"
            }`}
          >
            <RotateCcw className="w-4 h-4" />
            <span>Retirement SWP Runway</span>
          </button>
        </div>

        {/* TAB 1: SIP CALCULATOR */}
        {activeTab === "sip" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-[#F7FAF8] p-6 sm:p-8 rounded-2xl border border-[#DDE8E1] shadow-xs">
            {/* Inputs (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              {/* Mode switch */}
              <div className="inline-flex rounded-xl bg-white border border-[#DDE8E1] p-1 text-xs font-mono font-semibold">
                <button
                  type="button"
                  onClick={() => setSipMode("sip")}
                  className={`px-4 py-1.5 rounded-lg transition-all ${
                    sipMode === "sip"
                      ? "bg-emerald-600 text-white shadow-xs"
                      : "text-[#4B6354] hover:text-[#10251B]"
                  }`}
                >
                  Monthly SIP
                </button>
                <button
                  type="button"
                  onClick={() => setSipMode("lumpsum")}
                  className={`px-4 py-1.5 rounded-lg transition-all ${
                    sipMode === "lumpsum"
                      ? "bg-emerald-600 text-white shadow-xs"
                      : "text-[#4B6354] hover:text-[#10251B]"
                  }`}
                >
                  One-Time Lumpsum
                </button>
              </div>

              {/* Amount slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-medium text-[#10251B]">
                  <label htmlFor="sip-amt">
                    {sipMode === "sip" ? "Monthly Investment Amount" : "Initial Lumpsum Investment"}
                  </label>
                  <span className="font-mono text-base font-bold text-[#0B3D2E] num-tabular">
                    ₹{sipMode === "sip" ? sipAmount.toLocaleString("en-IN") : (sipAmount * 10).toLocaleString("en-IN")}
                  </span>
                </div>
                <input
                  id="sip-amt"
                  type="range"
                  min={1000}
                  max={150000}
                  step={1000}
                  value={sipAmount}
                  onChange={(e) => setSipAmount(Number(e.target.value))}
                  className="w-full h-2 bg-[#E5ECE7] rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
              </div>

              {/* Rate of return slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-medium text-[#10251B]">
                  <label htmlFor="sip-rate">Expected Annual Return Rate (p.a)</label>
                  <span className="font-mono text-base font-bold text-emerald-600 num-tabular">
                    {sipReturnRate}% CAGR
                  </span>
                </div>
                <input
                  id="sip-rate"
                  type="range"
                  min={8}
                  max={18}
                  step={0.5}
                  value={sipReturnRate}
                  onChange={(e) => setSipReturnRate(Number(e.target.value))}
                  className="w-full h-2 bg-[#E5ECE7] rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex justify-between text-[11px] text-[#82998B] font-mono">
                  <span>8% (Conservative)</span>
                  <span>12% (Nifty Index)</span>
                  <span>18% (Midcap Alpha)</span>
                </div>
              </div>

              {/* Time period slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-medium text-[#10251B]">
                  <label htmlFor="sip-tenure">Investment Duration</label>
                  <span className="font-mono text-base font-bold text-[#0B3D2E] num-tabular">
                    {sipYears} Years ({sipMonths} months)
                  </span>
                </div>
                <input
                  id="sip-tenure"
                  type="range"
                  min={1}
                  max={30}
                  step={1}
                  value={sipYears}
                  onChange={(e) => setSipYears(Number(e.target.value))}
                  className="w-full h-2 bg-[#E5ECE7] rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
              </div>
            </div>

            {/* Results Output (6 cols) */}
            <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-[#DDE8E1] space-y-6 shadow-xs">
              <div>
                <div className="text-xs font-mono font-medium text-[#4B6354] uppercase tracking-wider">
                  Total Expected Maturity Value
                </div>
                <div className="text-3xl sm:text-5xl font-extrabold text-[#10251B] mt-1.5 num-tabular font-mono tracking-tight">
                  ₹{totalFutureValue.toLocaleString("en-IN")}
                </div>
                <div className="text-xs text-[#4B6354] mt-1 font-mono">
                  (₹{(totalFutureValue / 10000000).toFixed(2)} Crores)
                </div>
              </div>

              {/* Visual breakdown bar */}
              <div className="space-y-2">
                <div className="h-3 w-full bg-[#EEF5F1] rounded-md overflow-hidden flex border border-[#DDE8E1]">
                  <div
                    className="h-full bg-[#82998B] transition-all duration-200"
                    style={{
                      width: `${Math.round((totalInvested / totalFutureValue) * 100)}%`,
                    }}
                  ></div>
                  <div
                    className="h-full bg-emerald-500 transition-all duration-200"
                    style={{
                      width: `${Math.round((estimatedReturns / totalFutureValue) * 100)}%`,
                    }}
                  ></div>
                </div>
                <div className="flex justify-between text-xs font-mono font-semibold">
                  <span className="flex items-center gap-1.5 text-[#4B6354]">
                    <span className="w-2.5 h-2.5 rounded-xs bg-[#82998B] inline-block"></span>
                    Invested: ₹{(totalInvested / 100000).toFixed(1)}L
                  </span>
                  <span className="flex items-center gap-1.5 text-emerald-700">
                    <span className="w-2.5 h-2.5 rounded-xs bg-emerald-500 inline-block"></span>
                    Gains: ₹{(estimatedReturns / 100000).toFixed(1)}L
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-3 pt-2 text-xs">
                <div className="p-3.5 bg-[#F7FAF8] rounded-xl border border-[#DDE8E1]">
                  <span className="text-[#4B6354] font-mono">Invested Principal:</span>
                  <div className="font-bold text-[#10251B] mt-1 num-tabular font-mono text-sm">
                    ₹{totalInvested.toLocaleString("en-IN")}
                  </div>
                </div>
                <div className="p-3.5 bg-[#F2F7F4] rounded-xl border border-emerald-500/30">
                  <span className="text-emerald-800 font-mono">Estimated Gains:</span>
                  <div className="font-bold text-emerald-600 mt-1 num-tabular font-mono text-sm">
                    +₹{estimatedReturns.toLocaleString("en-IN")}
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: EMI & PREPAYMENT */}
        {activeTab === "emi" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-[#F7FAF8] p-6 sm:p-8 rounded-2xl border border-[#DDE8E1] shadow-xs">
            {/* Inputs (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              {/* Principal slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-medium text-[#10251B]">
                  <label htmlFor="loan-amt">Home Loan Principal Amount</label>
                  <span className="font-mono text-base font-bold text-[#0B3D2E] num-tabular">
                    ₹{(loanPrincipal / 100000).toFixed(1)} Lakhs
                  </span>
                </div>
                <input
                  id="loan-amt"
                  type="range"
                  min={1000000}
                  max={25000000}
                  step={500000}
                  value={loanPrincipal}
                  onChange={(e) => setLoanPrincipal(Number(e.target.value))}
                  className="w-full h-2 bg-[#E5ECE7] rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
              </div>

              {/* Interest rate slider */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-medium text-[#10251B]">
                  <label htmlFor="loan-rate">Interest Rate (Floating / Fixed)</label>
                  <span className="font-mono text-base font-bold text-emerald-600 num-tabular">
                    {loanRate}% p.a.
                  </span>
                </div>
                <input
                  id="loan-rate"
                  type="range"
                  min={7.5}
                  max={12.0}
                  step={0.1}
                  value={loanRate}
                  onChange={(e) => setLoanRate(Number(e.target.value))}
                  className="w-full h-2 bg-[#E5ECE7] rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
              </div>

              {/* Tenure */}
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-medium text-[#10251B]">
                  <label htmlFor="loan-tenure">Standard Loan Tenure</label>
                  <span className="font-mono text-base font-bold text-[#0B3D2E] num-tabular">
                    {loanTenureYrs} Years ({emiMonths} months)
                  </span>
                </div>
                <input
                  id="loan-tenure"
                  type="range"
                  min={5}
                  max={30}
                  step={1}
                  value={loanTenureYrs}
                  onChange={(e) => setLoanTenureYrs(Number(e.target.value))}
                  className="w-full h-2 bg-[#E5ECE7] rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
              </div>

              {/* Monthly Prepayment Simulator Slider */}
              <div className="p-4 bg-white rounded-xl border border-emerald-500/30 space-y-2 shadow-xs">
                <div className="flex justify-between items-center text-xs font-mono font-bold text-emerald-800">
                  <label htmlFor="prepay-amt">Prepayment Stress Test: Extra Principal/Month</label>
                  <span className="font-mono text-sm num-tabular text-emerald-600 font-bold">
                    +₹{monthlyPrepay.toLocaleString("en-IN")}/mo
                  </span>
                </div>
                <input
                  id="prepay-amt"
                  type="range"
                  min={0}
                  max={30000}
                  step={1000}
                  value={monthlyPrepay}
                  onChange={(e) => setMonthlyPrepay(Number(e.target.value))}
                  className="w-full h-2 bg-[#E5ECE7] rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <p className="text-[11px] text-[#4B6354] font-light">
                  Prepaying even a small amount directly reduces your principal liability from month 1.
                </p>
              </div>
            </div>

            {/* EMI Results (6 cols) */}
            <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-[#DDE8E1] space-y-6 shadow-xs">
              <div>
                <div className="text-xs font-mono font-medium text-[#4B6354] uppercase tracking-wider">
                  Calculated Monthly EMI
                </div>
                <div className="text-3xl sm:text-5xl font-extrabold text-[#10251B] mt-1.5 num-tabular font-mono tracking-tight">
                  ₹{baseEmi.toLocaleString("en-IN")}
                </div>
                <div className="text-xs text-[#4B6354] mt-1 font-mono">
                  Total Interest under original tenure: ₹{(totalBaseInterest / 100000).toFixed(1)} Lakhs
                </div>
              </div>

              {/* Prepayment Impact Card */}
              {monthlyPrepay > 0 && (
                <div className="p-5 bg-[#F2F7F4] border border-emerald-500/40 rounded-xl space-y-3">
                  <div className="flex items-center gap-2 text-emerald-800 text-xs font-mono font-semibold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    <span>The Prepayment Multiplier</span>
                  </div>
                  <div className="text-xl font-bold text-emerald-700 num-tabular font-mono">
                    Saves ₹{(interestSaved / 100000).toFixed(2)} Lakhs in Interest
                  </div>
                  <div className="text-xs text-[#4B6354]">
                    Your {loanTenureYrs}-year loan finishes in just{" "}
                    <span className="font-bold text-emerald-800 font-mono">
                      {(acceleratedMonthsCount / 12).toFixed(1)} Years
                    </span>{" "}
                    — saving you {yearsSaved} years of debt servitude!
                  </div>
                </div>
              )}

              <div className="p-4 bg-[#F7FAF8] rounded-xl border border-[#DDE8E1] text-xs space-y-2 font-mono">
                <div className="font-semibold text-[#10251B]">Total Outgo Comparison:</div>
                <div className="flex justify-between text-[#4B6354]">
                  <span>Standard Repayment:</span>
                  <span className="font-bold text-[#10251B]">
                    ₹{(totalBaseRepayment / 100000).toFixed(1)} Lakhs
                  </span>
                </div>
                {monthlyPrepay > 0 && (
                  <div className="flex justify-between text-emerald-700 font-semibold">
                    <span>With +₹{monthlyPrepay.toLocaleString("en-IN")}/mo prepay:</span>
                    <span className="font-bold text-emerald-800">
                      ₹{((loanPrincipal + totalInterestWithPrepay) / 100000).toFixed(1)} Lakhs
                    </span>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}

        {/* TAB 3: SWP RETIREMENT */}
        {activeTab === "swp" && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start bg-[#F7FAF8] p-6 sm:p-8 rounded-2xl border border-[#DDE8E1] shadow-xs">
            {/* Inputs (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-medium text-[#10251B]">
                  <label htmlFor="swp-corpus">Starting Retirement Corpus</label>
                  <span className="font-mono text-base font-bold text-[#0B3D2E] num-tabular">
                    ₹{(swpCorpus / 10000000).toFixed(2)} Crores
                  </span>
                </div>
                <input
                  id="swp-corpus"
                  type="range"
                  min={5000000}
                  max={50000000}
                  step={1000000}
                  value={swpCorpus}
                  onChange={(e) => setSwpCorpus(Number(e.target.value))}
                  className="w-full h-2 bg-[#E5ECE7] rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-medium text-[#10251B]">
                  <label htmlFor="swp-withdraw">Desired Monthly Withdrawal</label>
                  <span className="font-mono text-base font-bold text-emerald-600 num-tabular">
                    ₹{swpMonthlyWithdraw.toLocaleString("en-IN")}/mo
                  </span>
                </div>
                <input
                  id="swp-withdraw"
                  type="range"
                  min={25000}
                  max={250000}
                  step={5000}
                  value={swpMonthlyWithdraw}
                  onChange={(e) => setSwpMonthlyWithdraw(Number(e.target.value))}
                  className="w-full h-2 bg-[#E5ECE7] rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-medium text-[#10251B]">
                  <label htmlFor="swp-cagr">Expected Portfolio Return in Retirement</label>
                  <span className="font-mono text-base font-bold text-[#0B3D2E] num-tabular">
                    {swpRate}% p.a. (Hybrid Debt + Equity)
                  </span>
                </div>
                <input
                  id="swp-cagr"
                  type="range"
                  min={6}
                  max={12}
                  step={0.5}
                  value={swpRate}
                  onChange={(e) => setSwpRate(Number(e.target.value))}
                  className="w-full h-2 bg-[#E5ECE7] rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
              </div>
            </div>

            {/* SWP Results (6 cols) */}
            <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-2xl border border-[#DDE8E1] space-y-6 shadow-xs">
              <div>
                <div className="text-xs font-mono font-medium text-[#4B6354] uppercase tracking-wider">
                  Corpus Sustainability Runway
                </div>
                <div className="text-3xl sm:text-5xl font-extrabold text-[#10251B] mt-1.5 num-tabular font-mono tracking-tight">
                  {swpYearsSurvived >= 30 ? "30+ Years (Perpetual)" : `${swpYearsSurvived} Years`}
                </div>
                <div className="text-xs text-[#4B6354] mt-1 font-mono">
                  At ₹{(swpMonthlyWithdraw * 12 / 100000).toFixed(1)} Lakhs annual withdrawal rate
                </div>
              </div>

              <div className="p-4 bg-[#F7FAF8] rounded-xl border border-[#DDE8E1] text-xs space-y-2">
                <div className="font-semibold text-[#10251B]">Tax Efficiency Advantage:</div>
                <p className="text-[#4B6354] leading-relaxed">
                  Unlike Fixed Deposit interest which is taxed at your peak slab rate annually,
                  Systematic Withdrawal Plans (SWP) from equity/hybrid funds trigger capital gains
                  tax only on the capital appreciation portion, saving up to 40% in tax leakage.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Quick Launch Pills for Other Native Calculators */}
        <div className="mt-10 pt-8 border-t border-[#DDE8E1]">
          <div className="text-xs font-mono font-semibold uppercase tracking-wider text-[#4B6354] mb-4">
            Additional High-Precision Tools:
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-3">
            {[
              { name: "PPF Calculator", sub: "7.1% EEE Tax-Free" },
              { name: "FD & RD Calculator", sub: "Quarterly Compound" },
              { name: "Gratuity Calculator", sub: "Payment of Gratuity" },
              { name: "NPS Calculator", sub: "Tier-1 Annuity Split" },
              { name: "Compound Interest", sub: "Multi-year Growth" },
              { name: "Lumpsum Calculator", sub: "One-Time Wealth" },
            ].map((tool) => (
              <div
                key={tool.name}
                className="p-3.5 bg-white rounded-xl border border-[#DDE8E1] hover:border-emerald-500/50 hover:bg-[#F7FAF8] transition-all text-left cursor-pointer shadow-2xs"
              >
                <div className="text-xs font-semibold text-[#10251B]">{tool.name}</div>
                <div className="text-[10px] text-[#4B6354] font-mono mt-0.5">{tool.sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
