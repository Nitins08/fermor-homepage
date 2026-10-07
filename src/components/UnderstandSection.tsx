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
    <section id="understand" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7FAF8] border border-[#DDE8E1] text-[#0B3D2E] text-xs font-mono font-medium mb-3">
            <PieChart className="w-3.5 h-3.5 text-emerald-600" />
            <span>01 / UNDERSTAND TAX & HIDDEN EXPENSES</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-semibold text-[#10251B] tracking-tight leading-tight">
            See through the financial noise.
          </h2>
          <p className="mt-2 text-[#4B6354] text-sm leading-relaxed">
            Most people lose wealth not from bad market timing, but from silent intermediary commissions,
            unoptimized tax regimes, and fragmented bank accounts. Fermor delivers mathematical clarity on every rupee.
          </p>
        </div>

        {/* Feature Grid: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Mini Tool (New vs Old Tax Regime) */}
          <div className="lg:col-span-7 bg-[#F7FAF8] p-6 sm:p-8 rounded-2xl border border-[#DDE8E1] shadow-xs space-y-6">
            <div className="flex items-center justify-between pb-3 border-b border-[#DDE8E1]">
              <div className="flex items-center gap-2.5">
                <Calculator className="w-4 h-4 text-emerald-600" />
                <span className="text-sm font-semibold text-[#10251B]">
                  Interactive Tax Regime Comparator
                </span>
              </div>
              <span className="text-[11px] font-mono px-2 py-0.5 bg-white text-[#0B3D2E] border border-[#DDE8E1] rounded">
                FY 2025-26 Budget Slabs
              </span>
            </div>

            {/* Slider 1: Gross Annual Salary */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm font-medium text-[#10251B]">
                <label htmlFor="salary-slider">Gross Annual CTC / Salary</label>
                <span className="font-mono text-base font-bold text-[#0B3D2E] num-tabular">
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
                className="w-full h-2 bg-[#E5ECE7] rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
              <div className="flex justify-between text-[11px] text-[#82998B] font-mono">
                <span>₹6 Lakhs</span>
                <span>₹20 Lakhs</span>
                <span>₹40 Lakhs</span>
              </div>
            </div>

            {/* Slider 2: Old Regime Deductions */}
            <div className="space-y-2">
              <div className="flex justify-between items-center text-sm font-medium text-[#10251B]">
                <label htmlFor="deductions-slider">Old Regime Deductions (80C + 80D + HRA)</label>
                <span className="font-mono text-base font-bold text-emerald-600 num-tabular">
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
                className="w-full h-2 bg-[#E5ECE7] rounded-lg appearance-none cursor-pointer accent-emerald-600"
              />
              <div className="flex justify-between text-[11px] text-[#82998B] font-mono">
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
                    ? "bg-white border-emerald-500 shadow-xs ring-1 ring-emerald-500/20"
                    : "bg-[#F2F7F4] border-[#DDE8E1]"
                }`}
              >
                <div className="flex justify-between items-center text-xs font-mono font-semibold">
                  <span className={isNewBetter ? "text-emerald-800" : "text-[#4B6354]"}>
                    New Tax Regime
                  </span>
                  {isNewBetter && (
                    <span className="text-[10px] font-bold px-1.5 py-0.5 bg-emerald-600 text-white rounded">
                      Optimal
                    </span>
                  )}
                </div>
                <div className="text-xl sm:text-2xl font-bold text-[#10251B] mt-2 num-tabular font-mono">
                  ₹{newTax.toLocaleString("en-IN")}
                </div>
                <div className="text-[11px] text-[#4B6354] mt-1">₹75,000 Standard Deduction included</div>
              </div>

              <div
                className={`p-4 rounded-xl border text-left transition-all ${
                  !isNewBetter
                    ? "bg-white border-emerald-500 shadow-xs ring-1 ring-emerald-500/20"
                    : "bg-[#F2F7F4] border-[#DDE8E1]"
                }`}
              >
                <div className="flex justify-between items-center text-xs font-mono font-semibold">
                  <span className={!isNewBetter ? "text-emerald-800" : "text-[#4B6354]"}>
                    Old Tax Regime
                  </span>
                  {!isNewBetter && (
                    <span className="text-[10px] font-bold px-1.5 py-0.5 bg-emerald-600 text-white rounded">
                      Optimal
                    </span>
                  )}
                </div>
                <div className="text-xl sm:text-2xl font-bold text-[#10251B] mt-2 num-tabular font-mono">
                  ₹{oldTax.toLocaleString("en-IN")}
                </div>
                <div className="text-[11px] text-[#4B6354] mt-1">Based on ₹{(oldDeductions / 100000).toFixed(1)}L declared</div>
              </div>
            </div>

            {/* Recommendation Banner */}
            <div className="p-4 bg-white border border-[#DDE8E1] text-[#10251B] rounded-xl flex items-center justify-between text-xs shadow-2xs">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                <span className="font-normal text-[#4B6354]">
                  {isNewBetter
                    ? `Choosing the New Regime saves you ₹${diff.toLocaleString("en-IN")} in annual taxes.`
                    : `Your heavy deductions make the Old Regime cheaper by ₹${diff.toLocaleString("en-IN")}.`}
                </span>
              </div>
              <a
                href="#calculators"
                className="font-bold text-emerald-700 hover:text-emerald-800 shrink-0 ml-3 flex items-center gap-1 font-mono text-xs"
              >
                <span>Full Model</span>
                <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Right Column: Key Understanding Differentiators */}
          <div className="lg:col-span-5 space-y-4">
            <div className="p-6 bg-[#F7FAF8] rounded-2xl border border-[#DDE8E1] shadow-2xs space-y-3">
              <div className="w-8 h-8 rounded-lg bg-white border border-[#DDE8E1] flex items-center justify-center text-[#0B3D2E] font-mono font-bold text-xs shadow-2xs">
                01
              </div>
              <h3 className="text-base font-semibold text-[#10251B]">
                Unmasking Hidden Intermediary TER
              </h3>
              <p className="text-sm text-[#4B6354] leading-relaxed">
                Regular mutual funds quietly charge an extra 0.75% to 1.25% every single year in
                distributor commissions. Over 20 years, that eats up to 25% of your final wealth.
                Fermor defaults strictly to Direct Plans.
              </p>
            </div>

            <div className="p-6 bg-[#F7FAF8] rounded-2xl border border-[#DDE8E1] shadow-2xs space-y-3">
              <div className="w-8 h-8 rounded-lg bg-white border border-[#DDE8E1] flex items-center justify-center text-[#0B3D2E] font-mono font-bold text-xs shadow-2xs">
                02
              </div>
              <h3 className="text-base font-semibold text-[#10251B]">
                Unified Portfolio Classification
              </h3>
              <p className="text-sm text-[#4B6354] leading-relaxed">
                Break free from fragmented broker silos. View your equity mutual funds, PPF, NPS,
                direct stocks, and gold in one cohesive asset allocation model with genuine XIRR.
              </p>
            </div>

            <div className="p-6 bg-[#F7FAF8] rounded-2xl border border-[#DDE8E1] shadow-2xs space-y-3">
              <div className="w-8 h-8 rounded-lg bg-white border border-[#DDE8E1] flex items-center justify-center text-[#0B3D2E] font-mono font-bold text-xs shadow-2xs">
                03
              </div>
              <h3 className="text-base font-semibold text-[#10251B]">
                LTCG Tax-Harvesting Thresholds
              </h3>
              <p className="text-sm text-[#4B6354] leading-relaxed">
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
