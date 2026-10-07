"use client";

import { useState } from "react";
import { Zap, CheckCircle2, ShieldCheck, ArrowRight, Loader2, FileText, X } from "lucide-react";

export default function ActSection() {
  const [sliderVal, setSliderVal] = useState(85000);
  const [status, setStatus] = useState<"idle" | "authorizing" | "authorized">("idle");
  const [showReceipt, setShowReceipt] = useState(false);

  // Difference between 5.28% Treasury Yield and 0.05% Checking APY
  const annualGain = Math.round(sliderVal * (0.0528 - 0.0005));
  const monthlyGain = Math.round(annualGain / 12);

  const handleAuthorize = () => {
    setStatus("authorizing");
    setTimeout(() => {
      setStatus("authorized");
      setShowReceipt(true);
    }, 1100);
  };

  return (
    <section id="act" className="w-full py-16 sm:py-20 lg:py-24 border-t border-black/[0.06] scroll-mt-28">
      {/* Editorial Header */}
      <div className="max-w-3xl mb-14">
        <div className="font-mono text-xs text-[#006C49] font-semibold uppercase tracking-wider mb-3">
          03 / 04 — DECISION LEVERAGE
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary font-normal leading-[1.12] mb-4">
          Know what to do next. From observation to high-conviction action.
        </h2>
        <p className="font-sans text-sm sm:text-base text-[#4B5563] leading-relaxed">
          Most dashboards simply tell you that you are losing to inflation. Fermor translates balance sheet discrepancies into executable transactions with guaranteed counterparty transparency.
        </p>
      </div>

      {/* The Fermor Action Engine Simulator Card */}
      <div className="bg-white rounded-xl border border-black/[0.08] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-6 sm:p-10 relative overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Action Context Column */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#FFFBEB] text-[#78350F] font-mono text-[11px] font-semibold border border-[#D97706]/20 mb-4">
              <Zap className="w-3.5 h-3.5 text-[#D97706]" />
              <span>TACTICAL LEVERAGE POINT DETECTED</span>
            </div>

            <h3 className="font-serif text-2xl sm:text-3xl text-primary font-normal mb-4">
              Fermor noticed an asymmetry in your cash reserves.
            </h3>

            <p className="font-sans text-sm sm:text-base text-[#4B5563] mb-8 leading-relaxed">
              Your monthly savings cadence has expanded for four consecutive cycles. You are currently leaving <span className="font-semibold text-[#111827]">$142,000 in commercial checking</span> earning 0.05% APY, while institutional 3-Month T-Bills yield 5.28%.
            </p>

            {/* Interactive Simulation Slider */}
            <div className="p-6 bg-[#FBFBFA] rounded-lg border border-black/[0.06] mb-8">
              <div className="flex justify-between items-center mb-3">
                <span className="font-mono text-xs uppercase text-[#111827] font-semibold">
                  Simulate Capital Sweep
                </span>
                <span className="font-mono text-2xl sm:text-3xl font-semibold text-primary tabular-nums">
                  ${sliderVal.toLocaleString()}
                </span>
              </div>

              <input
                type="range"
                min="10000"
                max="130000"
                step="5000"
                value={sliderVal}
                onChange={(e) => setSliderVal(parseInt(e.target.value, 10))}
                className="w-full h-2.5 bg-[#E5E5DF] rounded-lg appearance-none cursor-pointer accent-[#006C49]"
              />

              <div className="flex justify-between text-[11px] text-[#4B5563] font-mono mt-3">
                <span>$10,000 (Conservative)</span>
                <span className="font-semibold text-[#006C49]">
                  $85,000 (Recommended Target)
                </span>
                <span>$130,000 (Max Deploy)</span>
              </div>
            </div>

            {/* Authorize Control */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4">
              <button
                onClick={handleAuthorize}
                disabled={status === "authorizing"}
                className={`inline-flex items-center justify-center gap-2 font-sans text-sm font-semibold px-7 py-3.5 rounded shadow-sm transition-all duration-200 active:scale-[0.98] ${
                  status === "authorized"
                    ? "bg-[#10B981] text-white"
                    : status === "authorizing"
                    ? "bg-primary text-white opacity-80 cursor-wait"
                    : "bg-primary-container text-white hover:bg-primary"
                }`}
              >
                {status === "authorizing" ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Authorizing Simulated Sweep...</span>
                  </>
                ) : status === "authorized" ? (
                  <>
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Sweep Order Queued</span>
                  </>
                ) : (
                  <>
                    <ShieldCheck className="w-4 h-4" />
                    <span>Authorize Simulated Sweep</span>
                  </>
                )}
              </button>

              {status === "authorized" && (
                <button
                  onClick={() => setShowReceipt(true)}
                  className="inline-flex items-center gap-1.5 text-xs text-[#006C49] font-mono font-medium hover:underline"
                >
                  <FileText className="w-3.5 h-3.5" />
                  <span>View Execution Ticket</span>
                </button>
              )}

              <span className="text-xs text-[#4B5563] font-mono sm:ml-auto">
                Zero lockup penalty • T+0 settlement clear
              </span>
            </div>
          </div>

          {/* Calculated Impact Metrics Rail */}
          <div className="lg:col-span-5 bg-[#F4F4F1] rounded-xl border border-black/[0.06] p-6 sm:p-8 flex flex-col justify-between">
            <span className="font-mono text-xs uppercase text-[#4B5563] block mb-5 font-semibold">
              Calculated Action Impact
            </span>

            <div className="space-y-6">
              <div>
                <span className="font-mono text-[11px] uppercase text-[#4B5563] block mb-1">
                  Additional Annual Risk-Free Yield
                </span>
                <div className="font-mono text-3xl sm:text-4xl text-[#006C49] font-bold tabular-nums">
                  +${annualGain.toLocaleString()}.00 / yr
                </div>
                <div className="text-xs text-[#4B5563] mt-1 font-mono">
                  +${monthlyGain.toLocaleString()} monthly cashflow at 5.28% repo
                </div>
              </div>

              <div className="pt-4 border-t border-black/[0.06]">
                <span className="font-mono text-[11px] uppercase text-[#4B5563] block mb-1">
                  Liquidity Penalty
                </span>
                <div className="font-mono text-lg text-[#111827] font-semibold">
                  0 Business Days
                </div>
                <div className="text-xs text-[#4B5563] mt-0.5 font-mono">
                  Instant auto-drawback to checking if balance hits floor
                </div>
              </div>

              <div className="pt-4 border-t border-black/[0.06]">
                <span className="font-mono text-[11px] uppercase text-[#4B5563] block mb-1">
                  Tax Drag Mitigation
                </span>
                <div className="font-mono text-lg text-[#111827] font-semibold">
                  State Tax-Exempt (100%)
                </div>
                <div className="text-xs text-[#4B5563] mt-0.5 font-mono">
                  Federal Treasury exemption qualifies under US Code § 3124
                </div>
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-black/[0.06] flex items-center justify-between text-xs text-[#111827] font-semibold">
              <span>Risk Profile Assessment</span>
              <span className="text-[#006C49] font-mono">AAA US Sovereign Rated</span>
            </div>
          </div>
        </div>
      </div>

      {/* Simulated Execution Ticket Modal */}
      {showReceipt && (
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-xl border border-black/10 shadow-2xl max-w-md w-full p-6 animate-fadeIn">
            <div className="flex items-center justify-between pb-3 border-b border-black/[0.06] mb-4">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#10B981]" />
                <span className="font-mono text-xs uppercase font-semibold text-primary">
                  Simulated Execution Ticket
                </span>
              </div>
              <button
                onClick={() => setShowReceipt(false)}
                className="p-1 text-[#9CA3AF] hover:text-[#111827] rounded"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3 font-mono text-xs">
              <div className="flex justify-between py-1 border-b border-black/[0.04]">
                <span className="text-[#4B5563]">TRANSACTION ID</span>
                <span className="font-semibold text-[#111827]">#FRM-SWEEP-9821</span>
              </div>
              <div className="flex justify-between py-1 border-b border-black/[0.04]">
                <span className="text-[#4B5563]">ALLOCATED CAPITAL</span>
                <span className="font-bold text-primary">${sliderVal.toLocaleString()}.00</span>
              </div>
              <div className="flex justify-between py-1 border-b border-black/[0.04]">
                <span className="text-[#4B5563]">TARGET VESSEL</span>
                <span className="text-[#111827]">US Treasury Repo (4-Wk)</span>
              </div>
              <div className="flex justify-between py-1 border-b border-black/[0.04]">
                <span className="text-[#4B5563]">INSTITUTIONAL YIELD</span>
                <span className="text-[#006C49] font-bold">5.28% APY</span>
              </div>
              <div className="flex justify-between py-1 border-b border-black/[0.04]">
                <span className="text-[#4B5563]">CHECKING FLOOR SHIELD</span>
                <span className="text-[#111827]">$35,000 (Guaranteed)</span>
              </div>
              <div className="flex justify-between py-1">
                <span className="text-[#4B5563]">SETTLEMENT HORIZON</span>
                <span className="text-[#006C49]">T+0 (Immediate)</span>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-black/[0.06]">
              <button
                onClick={() => setShowReceipt(false)}
                className="w-full py-2.5 bg-primary-container text-white font-sans text-xs font-semibold rounded hover:bg-primary transition-all"
              >
                Dismiss Ticket
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
