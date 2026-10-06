"use client";

import React, { useState } from "react";
import { Compass, Sparkles } from "lucide-react";

export function GrowSection() {
  const [baseSip, setBaseSip] = useState(15000);
  const [tenureYears, setTenureYears] = useState(15);
  const [stepUpPercent, setStepUpPercent] = useState(10);
  const returnRate = 0.12; // 12% benchmark

  // Calculate Flat SIP
  const months = tenureYears * 12;
  const monthlyRate = returnRate / 12;
  const flatInvested = baseSip * months;
  const flatMaturity = Math.round(
    (baseSip * (Math.pow(1 + monthlyRate, months) - 1) * (1 + monthlyRate)) / monthlyRate
  );

  // Calculate Step-Up SIP
  let stepUpInvested = 0;
  let stepUpMaturity = 0;
  let currentMonthly = baseSip;

  for (let y = 0; y < tenureYears; y++) {
    for (let m = 0; m < 12; m++) {
      stepUpInvested += currentMonthly;
      const remainingMonths = months - (y * 12 + m);
      stepUpMaturity += currentMonthly * Math.pow(1 + monthlyRate, remainingMonths);
    }
    currentMonthly = Math.round(currentMonthly * (1 + stepUpPercent / 100));
  }
  stepUpMaturity = Math.round(stepUpMaturity);

  const deltaMaturity = stepUpMaturity - flatMaturity;

  return (
    <section id="grow" className="py-20 bg-[#FAFAF9] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-200 text-slate-800 text-xs font-semibold mb-3">
            <Compass className="w-3.5 h-3.5 text-emerald-700" />
            <span>03 / GROW</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
            Compounding you can visualize and control.
          </h2>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            A static investment plan falls victim to lifestyle inflation. By stepping up your monthly
            SIP by just 10% as your career advances, you shorten your financial independence runway
            by over a decade.
          </p>
        </div>

        {/* Interactive Step-Up Simulation Lab */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Input Controls (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2">
                <div className="flex justify-between items-center text-sm font-semibold text-slate-800">
                  <label htmlFor="base-sip-range">Starting Monthly SIP</label>
                  <span className="font-mono text-base font-bold text-slate-900 num-tabular">
                    ₹{baseSip.toLocaleString("en-IN")}/mo
                  </span>
                </div>
                <input
                  id="base-sip-range"
                  type="range"
                  min={5000}
                  max={100000}
                  step={2500}
                  value={baseSip}
                  onChange={(e) => setBaseSip(Number(e.target.value))}
                  className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-400 font-mono">
                  <span>₹5,000</span>
                  <span>₹50,000</span>
                  <span>₹1,00,000</span>
                </div>
              </div>

              {/* Investment Horizon */}
              <div className="space-y-2">
                <div className="text-sm font-semibold text-slate-800">
                  Investment Horizon (Tenure)
                </div>
                <div className="grid grid-cols-4 gap-2 text-xs">
                  {[10, 15, 20, 25].map((yrs) => (
                    <button
                      key={yrs}
                      type="button"
                      onClick={() => setTenureYears(yrs)}
                      className={`py-2 rounded-lg border font-semibold transition-all ${
                        tenureYears === yrs
                          ? "bg-slate-900 text-white border-slate-900"
                          : "bg-[#FAFAF9] text-slate-700 border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      {yrs} Yrs
                    </button>
                  ))}
                </div>
              </div>

              {/* Annual Step-Up Percentage */}
              <div className="space-y-2">
                <div className="text-sm font-semibold text-slate-800">
                  Annual Contribution Step-Up (%)
                </div>
                <div className="grid grid-cols-4 gap-2 text-xs">
                  {[0, 5, 10, 15].map((pct) => (
                    <button
                      key={pct}
                      type="button"
                      onClick={() => setStepUpPercent(pct)}
                      className={`py-2 rounded-lg border font-semibold transition-all ${
                        stepUpPercent === pct
                          ? "bg-emerald-700 text-white border-emerald-700"
                          : "bg-[#FAFAF9] text-slate-700 border-slate-200 hover:bg-slate-100"
                      }`}
                    >
                      +{pct}% /yr
                    </button>
                  ))}
                </div>
                <p className="text-[11px] text-slate-500">
                  {stepUpPercent > 0
                    ? `Your SIP increases by ${stepUpPercent}% every 12 months with annual salary increments.`
                    : "Flat SIP without adjusting for annual salary promotions."}
                </p>
              </div>

              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 text-xs space-y-1.5">
                <div className="font-semibold text-slate-700">Calculated Assumption Baseline:</div>
                <div className="text-slate-500">
                  • 12.0% Historical annualized Nifty Equity Index CAGR
                  <br />
                  • Monthly compounding compounding reinvestment
                  <br />• 0% upfront distribution leakage (Direct Plans)
                </div>
              </div>
            </div>

            {/* Results Comparison (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Flat SIP outcome */}
                <div className="p-5 rounded-xl border border-slate-200 bg-[#FAFAF9] space-y-2">
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Flat SIP (No Step-Up)
                  </div>
                  <div className="text-2xl font-bold text-slate-800 num-tabular">
                    ₹{(flatMaturity / 10000000).toFixed(2)} Crores
                  </div>
                  <div className="text-xs text-slate-500">
                    Total Invested: ₹{(flatInvested / 100000).toFixed(1)} Lakhs
                  </div>
                  <div className="pt-2 border-t border-slate-200 text-xs text-slate-600 font-medium">
                    Wealth Created: ₹{((flatMaturity - flatInvested) / 100000).toFixed(1)} Lakhs
                  </div>
                </div>

                {/* Step-Up outcome */}
                <div className="p-5 rounded-xl border border-emerald-300 bg-emerald-50/70 space-y-2 ring-1 ring-emerald-300">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">
                      +{stepUpPercent}% Annual Step-Up
                    </span>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 bg-emerald-700 text-white rounded">
                      Exponential
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-emerald-950 num-tabular">
                    ₹{(stepUpMaturity / 10000000).toFixed(2)} Crores
                  </div>
                  <div className="text-xs text-slate-600">
                    Total Invested: ₹{(stepUpInvested / 100000).toFixed(1)} Lakhs
                  </div>
                  <div className="pt-2 border-t border-emerald-200 text-xs text-emerald-900 font-semibold">
                    Wealth Created: ₹{((stepUpMaturity - stepUpInvested) / 100000).toFixed(1)} Lakhs
                  </div>
                </div>
              </div>

              {/* Difference Banner */}
              {stepUpPercent > 0 && (
                <div className="p-5 bg-slate-900 text-white rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>The Compounding Advantage</span>
                  </div>
                  <div className="text-xl sm:text-2xl font-bold num-tabular">
                    +₹{(deltaMaturity / 10000000).toFixed(2)} Crores Extra Wealth
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    By simply dedicating 10% of every increment to scaling your SIP, your final
                    corpus expands by over{" "}
                    {Math.round(((stepUpMaturity - flatMaturity) / flatMaturity) * 100)}% without
                    needing a larger initial starting capital.
                  </p>
                </div>
              )}

              {/* Milestone Forecast Timeline */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-600">
                  Accumulation Milestones Along the Journey:
                </span>
                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                    <div className="text-[11px] text-slate-400 font-mono">Year 5</div>
                    <div className="font-bold text-slate-800 mt-0.5 num-tabular">
                      ₹{Math.round((baseSip * 60 * 1.35) / 100000)} Lakhs
                    </div>
                  </div>
                  <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                    <div className="text-[11px] text-slate-400 font-mono">Year 10</div>
                    <div className="font-bold text-slate-800 mt-0.5 num-tabular">
                      ₹{Math.round((baseSip * 120 * 2.1) / 100000)} Lakhs
                    </div>
                  </div>
                  <div className="p-2.5 bg-white rounded-lg border border-slate-200">
                    <div className="text-[11px] text-emerald-700 font-mono font-semibold">
                      Year {tenureYears} (Goal)
                    </div>
                    <div className="font-bold text-emerald-700 mt-0.5 num-tabular">
                      ₹{(stepUpMaturity / 10000000).toFixed(2)} Cr
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
