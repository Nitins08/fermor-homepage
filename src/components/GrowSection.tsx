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
    <section id="grow" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7FAF8] border border-[#DDE8E1] text-[#0B3D2E] text-xs font-mono font-medium mb-3">
            <Compass className="w-3.5 h-3.5 text-emerald-600" />
            <span>03 / GROW & STEP-UP COMPOUNDING</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-semibold text-[#10251B] tracking-tight leading-tight">
            Compounding you can visualize and control.
          </h2>
          <p className="mt-2 text-[#4B6354] text-sm leading-relaxed">
            A static investment plan falls prey to lifestyle creep. By stepping up your monthly SIP
            by just 10% alongside annual career increments, you accelerate your financial independence milestone
            by over a decade.
          </p>
        </div>

        {/* Interactive Step-Up Simulation Lab */}
        <div className="bg-[#F7FAF8] rounded-2xl border border-[#DDE8E1] shadow-xs overflow-hidden">
          <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Input Controls (5 cols) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="space-y-2.5">
                <div className="flex justify-between items-center text-sm font-medium text-[#10251B]">
                  <label htmlFor="base-sip-range">Starting Monthly SIP</label>
                  <span className="font-mono text-base font-bold text-[#0B3D2E] num-tabular">
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
                  className="w-full h-2 bg-[#E5ECE7] rounded-lg appearance-none cursor-pointer accent-emerald-600"
                />
                <div className="flex justify-between text-[11px] text-[#82998B] font-mono">
                  <span>₹5,000</span>
                  <span>₹50,000</span>
                  <span>₹1,00,000</span>
                </div>
              </div>

              {/* Investment Horizon */}
              <div className="space-y-2.5">
                <div className="text-sm font-medium text-[#10251B]">
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
                          ? "bg-emerald-600 text-white border-emerald-600 shadow-xs"
                          : "bg-white text-[#4B6354] border-[#DDE8E1] hover:bg-[#EEF5F1] hover:text-[#10251B]"
                      }`}
                    >
                      {yrs} Yrs
                    </button>
                  ))}
                </div>
              </div>

              {/* Annual Step-Up Percentage */}
              <div className="space-y-2.5">
                <div className="text-sm font-medium text-[#10251B]">
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
                          ? "bg-emerald-600 text-white border-emerald-600 shadow-xs"
                          : "bg-white text-[#4B6354] border-[#DDE8E1] hover:bg-[#EEF5F1] hover:text-[#10251B]"
                      }`}
                    >
                      +{pct}% /yr
                    </button>
                  ))}
                </div>
                <p className="text-[11px] text-[#4B6354]">
                  {stepUpPercent > 0
                    ? `Your SIP increases by ${stepUpPercent}% every 12 months with annual salary increments.`
                    : "Static flat SIP without increment compounding."}
                </p>
              </div>

              <div className="p-4 bg-white rounded-xl border border-[#DDE8E1] text-xs space-y-1.5 shadow-2xs">
                <div className="font-semibold text-[#10251B]">Simulation Foundation:</div>
                <div className="text-[#4B6354] space-y-1 font-mono text-[11px]">
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
                <div className="p-5 rounded-xl border border-[#DDE8E1] bg-white space-y-2 shadow-2xs">
                  <div className="text-xs font-mono font-medium text-[#4B6354] uppercase tracking-wider">
                    Flat SIP (No Step-Up)
                  </div>
                  <div className="text-2xl font-bold text-[#10251B] num-tabular font-mono">
                    ₹{(flatMaturity / 10000000).toFixed(2)} Crores
                  </div>
                  <div className="text-xs text-[#82998B] font-mono">
                    Total Invested: ₹{(flatInvested / 100000).toFixed(1)} Lakhs
                  </div>
                  <div className="pt-2 border-t border-[#DDE8E1] text-xs text-[#4B6354] font-medium">
                    Wealth Created: ₹{((flatMaturity - flatInvested) / 100000).toFixed(1)} Lakhs
                  </div>
                </div>

                {/* Step-Up outcome */}
                <div className="p-5 rounded-xl border border-emerald-500/50 bg-white space-y-2 shadow-xs ring-1 ring-emerald-500/20">
                  <div className="flex justify-between items-center">
                    <span className="text-xs font-mono font-semibold text-emerald-800 uppercase tracking-wider">
                      +{stepUpPercent}% Annual Step-Up
                    </span>
                    <span className="text-[10px] font-mono font-bold px-2 py-0.5 bg-emerald-600 text-white rounded">
                      Exponential
                    </span>
                  </div>
                  <div className="text-2xl font-bold text-[#10251B] num-tabular font-mono">
                    ₹{(stepUpMaturity / 10000000).toFixed(2)} Crores
                  </div>
                  <div className="text-xs text-[#82998B] font-mono">
                    Total Invested: ₹{(stepUpInvested / 100000).toFixed(1)} Lakhs
                  </div>
                  <div className="pt-2 border-t border-[#DDE8E1] text-xs text-emerald-700 font-semibold">
                    Wealth Created: ₹{((stepUpMaturity - stepUpInvested) / 100000).toFixed(1)} Lakhs
                  </div>
                </div>
              </div>

              {/* Difference Banner */}
              {stepUpPercent > 0 && (
                <div className="p-5 bg-[#F2F7F4] border border-emerald-500/30 rounded-xl space-y-2">
                  <div className="flex items-center gap-2 text-emerald-800 text-xs font-mono font-semibold uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                    <span>The Step-Up Power Law</span>
                  </div>
                  <div className="text-2xl font-bold text-[#10251B] num-tabular font-mono">
                    +₹{(deltaMaturity / 10000000).toFixed(2)} Crores Additional Corpus
                  </div>
                  <p className="text-xs text-[#4B6354] leading-relaxed">
                    By dedicating 10% of each annual salary increment toward stepping up your SIP, your final wealth
                    expands by over{" "}
                    <span className="font-semibold text-emerald-800 font-mono">
                      {Math.round(((stepUpMaturity - flatMaturity) / flatMaturity) * 100)}%
                    </span>{" "}
                    without requiring a larger starting principal.
                  </p>
                </div>
              )}

              {/* Milestone Forecast Timeline */}
              <div className="p-5 bg-white rounded-xl border border-[#DDE8E1] space-y-3 shadow-2xs">
                <span className="text-xs font-mono font-semibold uppercase tracking-wider text-[#4B6354]">
                  Accumulation Milestones Along the Trajectory:
                </span>
                <div className="grid grid-cols-3 gap-3 text-center text-xs">
                  <div className="p-3 bg-[#F7FAF8] rounded-xl border border-[#DDE8E1]">
                    <div className="text-[11px] text-[#4B6354] font-mono">Year 5</div>
                    <div className="font-bold text-[#10251B] mt-1 num-tabular font-mono">
                      ₹{Math.round((baseSip * 60 * 1.35) / 100000)} Lakhs
                    </div>
                  </div>
                  <div className="p-3 bg-[#F7FAF8] rounded-xl border border-[#DDE8E1]">
                    <div className="text-[11px] text-[#4B6354] font-mono">Year 10</div>
                    <div className="font-bold text-[#10251B] mt-1 num-tabular font-mono">
                      ₹{Math.round((baseSip * 120 * 2.1) / 100000)} Lakhs
                    </div>
                  </div>
                  <div className="p-3 bg-[#F2F7F4] rounded-xl border border-emerald-500/30">
                    <div className="text-[11px] text-emerald-800 font-mono font-semibold">
                      Year {tenureYears} (Goal)
                    </div>
                    <div className="font-bold text-emerald-700 mt-1 num-tabular font-mono">
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
