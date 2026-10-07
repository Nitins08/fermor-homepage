"use client";

import { useState } from "react";
import { AlertCircle, Check, ShieldAlert, Sparkles, ArrowRight } from "lucide-react";

export default function IntelligenceSection() {
  const [resolvedCards, setResolvedCards] = useState<Record<string, boolean>>({});

  const handleResolve = (id: string) => {
    setResolvedCards((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <section id="intelligence" className="w-full py-16 sm:py-20 lg:py-24 border-t border-black/[0.06] scroll-mt-28">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
        <div>
          <div className="font-mono text-xs text-[#006C49] font-semibold uppercase tracking-wider mb-3">
            AUTONOMOUS OBSERVATION
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary font-normal leading-[1.15]">
            &ldquo;Fermor noticed something.&rdquo;
          </h2>
        </div>
        <p className="font-sans text-sm text-[#4B5563] max-w-md mt-4 md:mt-0 leading-relaxed">
          Autonomous pattern recognition running continuously across cross-custodian feeds to protect against creep, regulatory drift, and uncompensated risk.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Scenario Card 1: SaaS Creep */}
        <div className="bg-white p-6 sm:p-7 rounded-lg border border-black/[0.08] shadow-sm flex flex-col justify-between transition-all hover:shadow-md">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-[11px] uppercase text-[#4B5563] font-medium">
                SaaS & Enterprise Waste
              </span>
              <span className="w-2 h-2 rounded-full bg-[#D97706]" />
            </div>
            <h3 className="font-sans text-lg text-primary font-semibold mb-3">
              Zombie Seats Creep
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#4B5563] mb-6 leading-relaxed">
              Detected 6 inactive recurring SaaS and data subscriptions with zero team activity over 90 days across cards and ACH.
            </p>
          </div>

          <div className="p-4 bg-[#FBFBFA] rounded border border-black/[0.06]">
            <div className="flex justify-between items-baseline mb-3">
              <span className="font-mono text-[11px] uppercase text-[#4B5563]">
                Recoverable Velocity
              </span>
              <span className="font-mono text-base font-bold text-[#006C49]">
                +$740.00 / mo
              </span>
            </div>
            <button
              onClick={() => handleResolve("saas")}
              className={`w-full py-2.5 font-sans text-xs font-semibold rounded shadow-sm transition-all flex items-center justify-center gap-1.5 ${
                resolvedCards["saas"]
                  ? "bg-[#ECFDF5] text-[#065F46] border border-[#10B981]/30"
                  : "bg-white border border-black/10 text-primary hover:bg-[#F4F4F1]"
              }`}
            >
              {resolvedCards["saas"] ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>Subscriptions Purged</span>
                </>
              ) : (
                <span>Cancel Inactive Seats</span>
              )}
            </button>
          </div>
        </div>

        {/* Scenario Card 2: 1099 Tax Calibration */}
        <div className="bg-white p-6 sm:p-7 rounded-lg border border-black/[0.08] shadow-sm flex flex-col justify-between transition-all hover:shadow-md">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-[11px] uppercase text-[#4B5563] font-medium">
                Quarterly Tax Calibration
              </span>
              <span className="w-2 h-2 rounded-full bg-[#10B981]" />
            </div>
            <h3 className="font-sans text-lg text-primary font-semibold mb-3">
              1099 Liquidity Event Drag
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#4B5563] mb-6 leading-relaxed">
              Secondary stock liquidity event detected. Calculated exact safe-harbor federal estimate and auto-segregated liability into T-Bill escrow.
            </p>
          </div>

          <div className="p-4 bg-[#FBFBFA] rounded border border-black/[0.06]">
            <div className="flex justify-between items-baseline mb-3">
              <span className="font-mono text-[11px] uppercase text-[#4B5563]">
                Underpayment Penalty
              </span>
              <span className="font-mono text-base font-bold text-primary">
                $0.00 Shielded
              </span>
            </div>
            <button
              onClick={() => handleResolve("tax")}
              className={`w-full py-2.5 font-sans text-xs font-semibold rounded shadow-sm transition-all flex items-center justify-center gap-1.5 ${
                resolvedCards["tax"]
                  ? "bg-[#ECFDF5] text-[#065F46] border border-[#10B981]/30"
                  : "bg-white border border-black/10 text-primary hover:bg-[#F4F4F1]"
              }`}
            >
              {resolvedCards["tax"] ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>Escrow Locked in T-Bills</span>
                </>
              ) : (
                <span>Inspect IRS Escrow Rule</span>
              )}
            </button>
          </div>
        </div>

        {/* Scenario Card 3: Concentration Warning */}
        <div className="bg-white p-6 sm:p-7 rounded-lg border border-black/[0.08] shadow-sm flex flex-col justify-between transition-all hover:shadow-md">
          <div>
            <div className="flex items-center justify-between mb-4">
              <span className="font-mono text-[11px] uppercase text-[#4B5563] font-medium">
                Portfolio Drift Guard
              </span>
              <span className="w-2 h-2 rounded-full bg-[#D97706]" />
            </div>
            <h3 className="font-sans text-lg text-primary font-semibold mb-3">
              Concentration Warning
            </h3>
            <p className="font-sans text-xs sm:text-sm text-[#4B5563] mb-6 leading-relaxed">
              Single technology equity appreciated past 28% threshold of liquid net worth. Triggered collar hedging recommendation to lock downside.
            </p>
          </div>

          <div className="p-4 bg-[#FBFBFA] rounded border border-black/[0.06]">
            <div className="flex justify-between items-baseline mb-3">
              <span className="font-mono text-[11px] uppercase text-[#4B5563]">
                Concentration Exposure
              </span>
              <span className="font-mono text-base font-bold text-[#92400E]">
                29.4% (Max 20%)
              </span>
            </div>
            <button
              onClick={() => handleResolve("hedge")}
              className={`w-full py-2.5 font-sans text-xs font-semibold rounded shadow-sm transition-all flex items-center justify-center gap-1.5 ${
                resolvedCards["hedge"]
                  ? "bg-[#ECFDF5] text-[#065F46] border border-[#10B981]/30"
                  : "bg-white border border-black/10 text-primary hover:bg-[#F4F4F1]"
              }`}
            >
              {resolvedCards["hedge"] ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>Collar Strategy Modeled</span>
                </>
              ) : (
                <span>Evaluate Collar Hedge</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
