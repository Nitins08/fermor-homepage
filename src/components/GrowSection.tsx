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
    <section id="grow" className="py-24 bg-[#050B18] border-b border-[#0D2747]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A1D35] border border-[#123A63] text-blue-300 text-xs font-mono font-medium mb-4">
            <Compass className="w-3.5 h-3.5 text-cyan-400" />
            <span>03 / GROW & STEP-UP COMPOUNDING</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight leading-tight">
            Compounding you can visualize and control.
          </h2>
          <p className="mt-4 text-slate-300 text-base font-light leading-relaxed">
            A static investment plan falls prey to lifestyle creep. By stepping up your monthly SIP
            by just 10% alongside annual career increments, you accelerate your financial independence milestone
            by over a decade.
          </p>
        </div>

        {/* Interactive Step-Up Simulation Lab */}
        <div className="bg-[#071426] rounded-2xl border border-[#123A63] shadow-xl overflow-hidden">
          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Input Controls (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2.5">
                <div className="flex justify-between items-center text-sm font-medium text-slate-200">
                  <label htmlFor="base-sip-range">Starting Monthly SIP</label>
                  <span className="font-mono text-base font-bold text-white num-tabular">
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
                  className="w-full h-2 bg-[#0A1D35] rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-[11px] text-slate-500 font-mono">
                  <span>₹5,000</span>
                  <span>₹50,000</span>
                  <span>₹1,00,000</span>
                </div>
              </div>

              {/* Investment Horizon */}
              <div className="space-y-2.5">
                <div className="text-sm font-medium text-slate-200">
                  Investment Horizon (Tenure)
                </div>
                <div className="grid grid-cols-4 gap-2.5 text-xs font-mono">
                  {[10, 15, 20, 25].map((yrs) => (
                    <button
                      key={yrs}
                      type="button"
                      onClick={() => setTenureYears(yrs)}
                      className={`py-2.5 rounded-xl border font-semibold transition-all ${
                        tenureYears === yrs
                          ? "bg-blue-600 text-white border-blue-400 shadow-md"
                          : "bg-[#0A1D35] text-slate-300 border-[#123A63] hover:bg-[#0D2747]"
                      }`}
                    >
                      {yrs} Yrs
                    </button>
                  ))}
                </div>
              </div>

              {/* Annual Step-Up Percentage */}
              <div className="space-y-2.5">
                <div className="text-sm font-medium text-slate-200">
                  Annual Contribution Step-Up (%)
                </div>
                <div className="grid grid-cols-4 gap-2.5 text-xs font-mono">
                  {[0, 5, 10, 15].map((pct) => (
                    <button
                      key={pct}
                      type="button"
                      onClick={() => setStepUpPercent(pct)}
                      className={`py-2.5 rounded-xl border font-semibold transition-all ${
                        stepUpPercent === pct
                          ? "bg-blue-600 text-white border-blue-400 shadow-md"
                          : "bg-[#0A1D35] text-slate-300 border-[#123A63] hover:bg-[#0D2747]"
                      }`}
                    >
                      +{pct}% /yr
                    </button>
                  ))}
                </div>
                <p className="text-[11px] text-slate-400 font-light">
                  {stepUpPercent > 0
                    ? `Your SIP increases by ${stepUpPercent}% every 12 months with annual salary increments.`
                    : "Static flat SIP without increment compounding."}
                </p>
              </div>

              <div className="p-4 bg-[#050B18] rounded-xl border border-[#0D2747] text-xs space-y-1.5 font-light">
                <div className="font-semibold text-slate-300">Simulation Foundation:</div>
                <div className="text-slate-400 space-y-1 font-mono text-[11px]">
                  <div>• 12.0% Historical annualized Nifty Equity Index CAGR</div>
                  <div>• Monthly compounding with automated reinvestment</div>
                  <div>• 0.0% upfront distribution leakage (Direct Plans)</div>
                </div>
              </div>
            </div>

            {/* Results Comparison (7 cols) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Flat SIP outcome */}
                <div className="p-5 rounded-xl border border-[#0D2747] bg-[#050B18] space-y-2">
                  <div className="text-xs font-mono font-medium text-slate-400 uppercase tracking-wider">
                    Flat SIP (No Step-Up)
                  </div>
                  <div className="text-2xl font-bold text-white num-tabular font-mono">
                    ₹{(flatMaturity / 10000000).toFixed(2)} Crores
                  </div>
                  <div className="text-xs text-slate-400 font-mono">
                    Total Invested: ₹{(flatInvested / 100000).toFixed(1)} Lakhs
                  </div>
                  <div className="pt-2 border-t border-[#0D2747] text-xs text-slate-300 font-medium">
                    Wealth Created: ₹{((flatMaturity - flatInvested) / 100000).toFixed(1)} Lakhs
                  </div>
                </div>

                {/* Step-Up outcome */}
                <div className="p-5 rounded-xl border border-blue-500/60 bg-[#0A1D35] space-y-2 shadow-lg shadow-blue-950/40">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-mono font-semibold text-cyan-300 uppercase tracking-wider">
                      +{stepUpPercent}% Annual Step-Up
                    </span>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-blue-600 text-white rounded">
                      Exponential
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-white num-tabular font-mono">
                    ₹{(stepUpMaturity / 10000000).toFixed(2)} Crores
                  </div>
                  <div className="text-xs text-slate-300 font-mono">
                    Total Invested: ₹{(stepUpInvested / 100000).toFixed(1)} Lakhs
                  </div>
                  <div className="pt-2 border-t border-[#123A63] text-xs text-emerald-400 font-semibold">
                    Wealth Created: ₹{((stepUpMaturity - stepUpInvested) / 100000).toFixed(1)} Lakhs
                  </div>
                </div>
              </div>

              {/* Difference Banner */}
              {stepUpPercent > 0 && (
                <div className="p-5 bg-[#0A1D35] border border-blue-500/40 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-cyan-400 text-xs font-mono font-semibold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>The Step-Up Power Law</span>
                  </div>
                  <div className="text-2xl font-bold text-white num-tabular font-mono">
                    +₹{(deltaMaturity / 10000000).toFixed(2)} Crores Additional Corpus
                  </div>
                  <p className="text-xs text-slate-300 leading-relaxed font-light">
                    By dedicating 10% of each annual salary increment toward stepping up your SIP, your final wealth
                    expands by over{" "}
                    <span className="font-semibold text-cyan-300 font-mono">
                      {Math.round(((stepUpMaturity - flatMaturity) / flatMaturity) * 100)}%
                    </span>{" "}
                    without requiring a larger starting principal.
                  </p>
                </div>
              )}

              {/* Milestone Forecast Timeline */}
              <div className="p-5 bg-[#050B18] rounded-xl border border-[#0D2747] space-y-3">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-400">
                  Accumulation Milestones Along the Trajectory:
                </span>
                <div className="grid grid-cols-3 gap-3 text-center text-xs">
                  <div className="p-3 bg-[#0A1D35] rounded-xl border border-[#123A63]">
                    <div className="text-[11px] text-slate-400 font-mono">Year 5</div>
                    <div className="font-bold text-white mt-1 num-tabular font-mono">
                      ₹{Math.round((baseSip * 60 * 1.35) / 100000)} Lakhs
                    </div>
                  </div>
                  <div className="p-3 bg-[#0A1D35] rounded-xl border border-[#123A63]">
                    <div className="text-[11px] text-slate-400 font-mono">Year 10</div>
                    <div className="font-bold text-white mt-1 num-tabular font-mono">
                      ₹{Math.round((baseSip * 120 * 2.1) / 100000)} Lakhs
                    </div>
                  </div>
                  <div className="p-3 bg-[#0A1D35] rounded-xl border border-blue-500/50">
                    <div className="text-[11px] text-cyan-400 font-mono font-semibold">
                      Year {tenureYears} (Goal)
                    </div>
                    <div className="font-bold text-emerald-400 mt-1 num-tabular font-mono">
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
