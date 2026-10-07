"use client";

import { useState } from "react";
import { Check, Target, TrendingUp, Sparkles, Plus, CheckCircle2 } from "lucide-react";

export default function GrowSection() {
  const [horizonYears, setHorizonYears] = useState<3 | 5 | 10>(10);
  const [boostedGoals, setBoostedGoals] = useState<Record<string, boolean>>({});

  const horizonMetrics = {
    3: {
      statusQuo: "$1.68M",
      compound: "$1.94M",
      delta: "+$260K Delta",
      curvePath: "M 0 200 C 250 180, 500 150, 800 110",
      polygonPoints: "0,200 250,180 500,150 800,110 800,240 0,240",
      endY: 110,
      yieldEliminated: "$48,600",
      cycles: "36 Cycles",
    },
    5: {
      statusQuo: "$1.85M",
      compound: "$2.42M",
      delta: "+$570K Delta",
      curvePath: "M 0 200 C 250 175, 500 130, 800 70",
      polygonPoints: "0,200 250,175 500,130 800,70 800,240 0,240",
      endY: 70,
      yieldEliminated: "$92,400",
      cycles: "60 Cycles",
    },
    10: {
      statusQuo: "$2.14M",
      compound: "$3.42M",
      delta: "+$1.28M Delta",
      curvePath: "M 0 200 C 250 170, 500 110, 800 30",
      polygonPoints: "0,200 250,170 500,110 800,30 800,240 0,240",
      endY: 30,
      yieldEliminated: "$184,200",
      cycles: "120 Cycles",
    },
  };

  const current = horizonMetrics[horizonYears];

  const toggleBoost = (goalKey: string) => {
    setBoostedGoals((prev) => ({ ...prev, [goalKey]: !prev[goalKey] }));
  };

  return (
    <section id="grow" className="w-full py-16 sm:py-20 lg:py-24 border-t border-black/[0.06] scroll-mt-28">
      {/* Editorial Header */}
      <div className="max-w-3xl mb-14">
        <div className="font-mono text-xs text-[#006C49] font-semibold uppercase tracking-wider mb-3">
          04 / 04 — TRAJECTORY
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary font-normal leading-[1.12] mb-4">
          Turn clarity into compound momentum.
        </h2>
        <p className="font-sans text-sm sm:text-base text-[#4B5563] leading-relaxed">
          The difference between passive drift and deliberate optimization compounds exponentially over 3, 5, and 10-year horizons. See how continuous yield orchestration reshapes your runway.
        </p>
      </div>

      {/* Projection Simulator & Goal Gauges */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Interactive Trajectory Curve Panel */}
        <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-xl border border-black/[0.08] shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-black/[0.06] mb-6">
            <div>
              <span className="font-mono text-[11px] uppercase text-[#4B5563] block font-medium">
                {horizonYears}-Year Trajectory Model
              </span>
              <h3 className="font-sans text-lg text-primary font-semibold">
                Status Quo vs. Fermor Orchestrated Execution
              </h3>
            </div>

            {/* Horizon Switcher */}
            <div className="inline-flex p-1 bg-[#F4F4F1] rounded border border-black/[0.05] font-mono text-xs">
              {([3, 5, 10] as const).map((years) => (
                <button
                  key={years}
                  onClick={() => setHorizonYears(years)}
                  className={`px-3 py-1.5 rounded transition-all font-medium ${
                    horizonYears === years
                      ? "bg-primary-container text-white font-semibold shadow-sm"
                      : "text-[#4B5563] hover:text-[#111827]"
                  }`}
                >
                  {years}-Year
                </button>
              ))}
            </div>
          </div>

          {/* SVG Projection Visualization */}
          <div className="w-full h-64 sm:h-72 bg-[#FBFBFA] rounded-lg border border-black/[0.05] p-4 relative overflow-hidden flex flex-col justify-between">
            <svg
              className="w-full h-full"
              viewBox="0 0 800 240"
              preserveAspectRatio="none"
            >
              {/* Grid rules */}
              <line x1="0" y1="60" x2="800" y2="60" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="0" y1="120" x2="800" y2="120" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="0" y1="180" x2="800" y2="180" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" />

              {/* Status Quo Path (Inertia) */}
              <path
                d="M 0 200 C 250 185, 500 170, 800 150"
                fill="none"
                stroke="#9CA3AF"
                strokeWidth="2"
                strokeDasharray="4 4"
              />

              {/* Fill area under optimized */}
              <polygon
                points={current.polygonPoints}
                fill="#006C49"
                fillOpacity="0.08"
              />

              {/* Fermor Path (Optimized Compounding) */}
              <path
                d={current.curvePath}
                fill="none"
                stroke="#006C49"
                strokeWidth="3"
                className="transition-all duration-700 ease-out"
              />

              <circle cx="800" cy={current.endY} r="5" fill="#10B981" stroke="#ffffff" strokeWidth="2" />
              <circle cx="800" cy="150" r="4" fill="#9CA3AF" />
            </svg>

            <div className="flex flex-wrap justify-between items-center text-xs font-mono text-[#4B5563] pt-2 border-t border-black/[0.04]">
              <span>Baseline: $1.48M</span>
              <span className="text-[#4B5563]">Status Quo: {current.statusQuo}</span>
              <span className="text-[#006C49] font-semibold bg-[#ECFDF5] px-2 py-0.5 rounded border border-[#10B981]/20">
                Fermor Compound: {current.compound} ({current.delta})
              </span>
            </div>
          </div>

          {/* Metric Footers */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6">
            <div className="p-3.5 bg-[#FBFBFA] rounded-lg border border-black/[0.06]">
              <span className="font-mono text-[10px] text-[#4B5563] uppercase block font-medium">
                Yield Drag Eliminated
              </span>
              <span className="font-mono text-xl text-primary font-semibold">
                {current.yieldEliminated}
              </span>
            </div>

            <div className="p-3.5 bg-[#FBFBFA] rounded-lg border border-black/[0.06]">
              <span className="font-mono text-[10px] text-[#4B5563] uppercase block font-medium">
                Automated Sweep Cadence
              </span>
              <span className="font-mono text-xl text-[#006C49] font-semibold">
                {current.cycles}
              </span>
            </div>

            <div className="p-3.5 bg-[#FBFBFA] rounded-lg border border-black/[0.06]">
              <span className="font-mono text-[10px] text-[#4B5563] uppercase block font-medium">
                Downside Volatility
              </span>
              <span className="font-mono text-xl text-[#111827] font-semibold">
                -42% StDev
              </span>
            </div>
          </div>
        </div>

        {/* Goal Progress Gauges (Right Column) */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          {/* Goal 1 */}
          <div className="bg-white p-6 rounded-xl border border-black/[0.08] shadow-sm">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-sans text-sm font-semibold text-primary">
                Family Endowment Fund
              </h4>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#ECFDF5] text-[#065F46] font-semibold">
                Ahead (+14 mo)
              </span>
            </div>
            <p className="font-sans text-xs text-[#4B5563] mb-3">
              Target: $2,500,000 liquid capital milestone.
            </p>
            <div className="w-full bg-[#ECECE8] h-2.5 rounded-full overflow-hidden mb-2">
              <div
                className="bg-[#10B981] h-full transition-all duration-700"
                style={{ width: boostedGoals["endowment"] ? "84%" : "72%" }}
              />
            </div>
            <div className="flex justify-between items-center text-xs font-mono text-[#4B5563]">
              <span>
                {boostedGoals["endowment"] ? "$2,100,000" : "$1,800,000"} / $2,500,000
              </span>
              <button
                onClick={() => toggleBoost("endowment")}
                className="font-semibold text-primary hover:underline"
              >
                {boostedGoals["endowment"] ? "84% (Boost Active)" : "72% (+Boost)"}
              </button>
            </div>
          </div>

          {/* Goal 2 */}
          <div className="bg-white p-6 rounded-xl border border-black/[0.08] shadow-sm">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-sans text-sm font-semibold text-primary">
                Venture Angel Reserve
              </h4>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#F4F4F1] text-[#4B5563] font-medium">
                On Schedule
              </span>
            </div>
            <p className="font-sans text-xs text-[#4B5563] mb-3">
              Target: $500,000 deployable allocation.
            </p>
            <div className="w-full bg-[#ECECE8] h-2.5 rounded-full overflow-hidden mb-2">
              <div
                className="bg-primary h-full transition-all duration-700"
                style={{ width: boostedGoals["venture"] ? "96%" : "88%" }}
              />
            </div>
            <div className="flex justify-between items-center text-xs font-mono text-[#4B5563]">
              <span>
                {boostedGoals["venture"] ? "$480,000" : "$440,000"} / $500,000
              </span>
              <button
                onClick={() => toggleBoost("venture")}
                className="font-semibold text-primary hover:underline"
              >
                {boostedGoals["venture"] ? "96% (Boost Active)" : "88% (+Boost)"}
              </button>
            </div>
          </div>

          {/* Goal 3 */}
          <div className="bg-white p-6 rounded-xl border border-black/[0.08] shadow-sm">
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-sans text-sm font-semibold text-primary">
                Debt-Free Real Property
              </h4>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#ECFDF5] text-[#065F46] font-semibold">
                Realized
              </span>
            </div>
            <p className="font-sans text-xs text-[#4B5563] mb-3">
              Primary residence unencumbered.
            </p>
            <div className="w-full bg-[#ECECE8] h-2.5 rounded-full overflow-hidden mb-2">
              <div className="bg-[#10B981] h-full w-full" />
            </div>
            <div className="flex justify-between items-center text-xs font-mono text-[#4B5563]">
              <span>Zero Senior Liens</span>
              <span className="font-semibold text-[#006C49]">100% Equity</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
