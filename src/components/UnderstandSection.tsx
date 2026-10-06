"use client";

import React, { useState } from "react";
import { PieChart, Calculator, Check, ArrowRight } from "lucide-react";

export function UnderstandSection() {
  const [salary, setSalary] = useState(1500000); // 15 Lakhs
  const [oldDeductions, setOldDeductions] = useState(250000); // 80C + 80D + HRA

  // Tax calculations (Budget 2024/2025 revised slabs)
  const calcNewTax = (income: number) => {
    const taxable = Math.max(0, income - 75000);
    if (taxable <= 700000) return 0; // Rebate u/s 87A

    let tax = 0;
    if (taxable > 1500000) tax += (taxable - 1500000) * 0.3;
    if (taxable > 1200000) tax += Math.min(taxable - 1200000, 300000) * 0.2;
    if (taxable > 1000000) tax += Math.min(taxable - 1000000, 200000) * 0.15;
    if (taxable > 700000) tax += Math.min(taxable - 700000, 300000) * 0.1;
    if (taxable > 300000) tax += Math.min(taxable - 300000, 400000) * 0.05;

    return Math.round(tax * 1.04); // 4% cess
  };

  const calcOldTax = (income: number, deductions: number) => {
    const taxable = Math.max(0, income - 50000 - deductions);
    if (taxable <= 500000) return 0; // Rebate u/s 87A

    let tax = 0;
    if (taxable > 1000000) tax += (taxable - 1000000) * 0.3;
    if (taxable > 500000) tax += Math.min(taxable - 500000, 500000) * 0.2;
    if (taxable > 250000) tax += Math.min(taxable - 250000, 250000) * 0.05;

    return Math.round(tax * 1.04);
  };

  const newTax = calcNewTax(salary);
  const oldTax = calcOldTax(salary, oldDeductions);
  const diff = Math.abs(oldTax - newTax);
  const isNewBetter = newTax <= oldTax;

  return (
    <section id="understand" className="py-24 bg-[#050B18] border-b border-[#0D2747]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header with Editorial Restraint */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A1D35] border border-[#123A63] text-blue-300 text-xs font-mono font-medium mb-4">
            <PieChart className="w-3.5 h-3.5 text-cyan-400" />
            <span>01 / UNDERSTAND TAX & HIDDEN EXPENSES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight leading-tight">
            See through the financial noise.
          </h2>
          <p className="mt-4 text-slate-300 text-base font-light leading-relaxed">
            Most people lose wealth not from bad market timing, but from silent intermediary commissions,
            unoptimized tax regimes, and fragmented bank accounts. Fermor delivers mathematical clarity on every rupee.
          </p>
        </div>

        {/* Feature Grid: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Mini Tool (New vs Old Tax Regime) */}
          <div className="lg:col-span-7 bg-[#071426] p-6 sm:p-8 rounded-2xl border border-[#123A63] shadow-xl space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#0D2747]">
              <div className="flex items-center gap-2.5">
                <Calculator className="w-4 h-4 text-cyan-400" />
                <span className="text-sm font-semibold text-white">
                  Interactive Tax Regime Comparator
                </span>
              </div>
              <span className="text-[11px] font-mono px-2 py-0.5 bg-[#0A1D35] text-blue-300 border border-[#123A63] rounded">
                FY 2025-26 Budget Slabs
              </span>
            </div>

            {/* Slider 1: Gross Annual Salary */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm font-medium text-slate-200">
                <label htmlFor="salary-slider">Gross Annual CTC / Salary</label>
                <span className="font-mono text-base font-bold text-white num-tabular">
                  ₹{(salary / 100000).toFixed(1)} Lakhs
                </span>
              </div>
              <input
                id="salary-slider"
                type="range"
                min={600000}
                max={4000000}
                step={50000}
                value={salary}
                onChange={(e) => setSalary(Number(e.target.value))}
                className="w-full h-2 bg-[#0A1D35] rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>₹6 Lakhs</span>
                <span>₹20 Lakhs</span>
                <span>₹40 Lakhs</span>
              </div>
            </div>

            {/* Slider 2: Old Regime Deductions */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm font-medium text-slate-200">
                <label htmlFor="deductions-slider">Old Regime Deductions (80C + 80D + HRA)</label>
                <span className="font-mono text-base font-bold text-cyan-400 num-tabular">
                  ₹{(oldDeductions / 100000).toFixed(2)} Lakhs
                </span>
              </div>
              <input
                id="deductions-slider"
                type="range"
                min={50000}
                max={500000}
                step={25000}
                value={oldDeductions}
                onChange={(e) => setOldDeductions(Number(e.target.value))}
                className="w-full h-2 bg-[#0A1D35] rounded-lg appearance-none cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                <span>₹50,000 (Min)</span>
                <span>Standard ₹2.5L</span>
                <span>₹5,00,000 (Max)</span>
              </div>
            </div>

            {/* Comparison Cards */}
            <div className="grid grid-cols-2 gap-4 pt-2">
              <div
                className={`p-4 rounded-xl border text-left transition-all ${
                  isNewBetter
                    ? "bg-[#0A1D35] border-blue-400 shadow-md shadow-blue-950/40"
                    : "bg-[#050B18] border-[#0D2747]"
                }`}
              >
                <div className="flex justify-between items-center text-xs font-mono font-semibold">
                  <span className={isNewBetter ? "text-cyan-300" : "text-slate-400"}>
                    New Tax Regime
                  </span>
                  {isNewBetter && (
                    <span className="text-[10px] font-bold px-1.5 py-0.5 bg-blue-600 text-white rounded">
                      Optimal
                    </span>
                  )}
                </div>
                <div className="text-xl sm:text-2xl font-bold text-white mt-2 num-tabular font-mono">
                  ₹{newTax.toLocaleString("en-IN")}
                </div>
                <div className="text-[11px] text-slate-400 mt-1">₹75,000 Standard Deduction included</div>
              </div>

              <div
                className={`p-4 rounded-xl border text-left transition-all ${
                  !isNewBetter
                    ? "bg-[#0A1D35] border-blue-400 shadow-md shadow-blue-950/40"
                    : "bg-[#050B18] border-[#0D2747]"
                }`}
              >
                <div className="flex justify-between items-center text-xs font-mono font-semibold">
                  <span className={!isNewBetter ? "text-cyan-300" : "text-slate-400"}>
                    Old Tax Regime
                  </span>
                  {!isNewBetter && (
                    <span className="text-[10px] font-bold px-1.5 py-0.5 bg-blue-600 text-white rounded">
                      Optimal
                    </span>
                  )}
                </div>
                <div className="text-xl sm:text-2xl font-bold text-white mt-2 num-tabular font-mono">
                  ₹{oldTax.toLocaleString("en-IN")}
                </div>
                <div className="text-[11px] text-slate-400 mt-1">Based on ₹{(oldDeductions / 100000).toFixed(1)}L declared</div>
              </div>
            </div>

            {/* Recommendation Banner */}
            <div className="p-4 bg-[#0A1D35] border border-[#123A63] text-white rounded-xl flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                <span className="font-light">
                  {isNewBetter
                    ? `Choosing the New Regime saves you ₹${diff.toLocaleString("en-IN")} in annual taxes.`
                    : `Your heavy deductions make the Old Regime cheaper by ₹${diff.toLocaleString("en-IN")}.`}
                </span>
              </div>
              <a
                href="#calculators"
                className="font-bold text-cyan-400 hover:text-cyan-300 shrink-0 ml-3 flex items-center gap-1"
              >
                <span>Full Model</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right Column: Key Understanding Differentiators */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 bg-[#071426] rounded-2xl border border-[#123A63] shadow-lg space-y-3">
              <div className="w-8 h-8 rounded-lg bg-[#0A1D35] border border-[#123A63] flex items-center justify-center text-cyan-400 font-mono font-bold text-xs">
                01
              </div>
              <h3 className="text-base font-semibold text-white">
                Unmasking Hidden Intermediary TER
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                Regular mutual funds quietly charge an extra 0.75% to 1.25% every single year in
                distributor commissions. Over 20 years, that eats up to 25% of your final wealth.
                Fermor defaults strictly to Direct Plans.
              </p>
            </div>

            <div className="p-6 bg-[#071426] rounded-2xl border border-[#123A63] shadow-lg space-y-3">
              <div className="w-8 h-8 rounded-lg bg-[#0A1D35] border border-[#123A63] flex items-center justify-center text-blue-400 font-mono font-bold text-xs">
                02
              </div>
              <h3 className="text-base font-semibold text-white">
                Unified Portfolio Classification
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                Break free from fragmented broker silos. View your equity mutual funds, PPF, NPS,
                direct stocks, and gold in one cohesive asset allocation model with genuine XIRR.
              </p>
            </div>

            <div className="p-6 bg-[#071426] rounded-2xl border border-[#123A63] shadow-lg space-y-3">
              <div className="w-8 h-8 rounded-lg bg-[#0A1D35] border border-[#123A63] flex items-center justify-center text-emerald-400 font-mono font-bold text-xs">
                03
              </div>
              <h3 className="text-base font-semibold text-white">
                LTCG Tax-Harvesting Thresholds
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed font-light">
                Track your ₹1.25 Lakh annual long-term capital gains exemption under the revised Finance Act
                rules. Rebalance intelligently each March without triggering unnecessary tax drag.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
