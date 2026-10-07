"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RefreshCw, ArrowRight, ShieldAlert, Sparkles, CheckCircle2, Split } from "lucide-react";

type MorphStage = "fragmented" | "converging" | "unified";

interface ShardItem {
  id: string;
  name: string;
  amount: string;
  custodian: string;
  yieldRate: string;
  dragRate: string;
  status: string;
  scatterCoords: { x: number; y: number; rotate: number };
  convergedCoords: { x: number; y: number };
}

const SHARDS_DATA: ShardItem[] = [
  {
    id: "checking",
    name: "Commercial Checking",
    amount: "$142,000",
    custodian: "Silicon Valley Bridge",
    yieldRate: "0.05% APY",
    dragRate: "-5.23% Inflation Drag",
    status: "Stagnant",
    scatterCoords: { x: -140, y: -70, rotate: -4 },
    convergedCoords: { x: -210, y: 0 },
  },
  {
    id: "brokerage",
    name: "Taxable Brokerage",
    amount: "$614,500",
    custodian: "Interactive Brokers Prime",
    yieldRate: "9.84% Index",
    dragRate: "Unmanaged Tax Drag",
    status: "Disjointed",
    scatterCoords: { x: 130, y: -80, rotate: 5 },
    convergedCoords: { x: -70, y: 0 },
  },
  {
    id: "realestate",
    name: "Real Asset Equity",
    amount: "$140,240",
    custodian: "County Registry",
    yieldRate: "Unlevered",
    dragRate: "Manual Appraisal 2023",
    status: "Static",
    scatterCoords: { x: -120, y: 80, rotate: 3 },
    convergedCoords: { x: 70, y: 0 },
  },
  {
    id: "venture",
    name: "Private Syndicate LP",
    amount: "$380,000",
    custodian: "Carta / AngelList",
    yieldRate: "Illiquid",
    dragRate: "Capital Call Schedule Unknown",
    status: "Blind Spot",
    scatterCoords: { x: 140, y: 70, rotate: -3 },
    convergedCoords: { x: 210, y: 0 },
  },
];

export default function FinancialProblem() {
  const [stage, setStage] = useState<MorphStage>("fragmented");

  const cycleStage = () => {
    if (stage === "fragmented") setStage("converging");
    else if (stage === "converging") setStage("unified");
    else setStage("fragmented");
  };

  return (
    <section id="problem" className="w-full py-24 px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto border-t border-black/[0.06]">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
        {/* Narrative Left Column */}
        <div className="lg:col-span-5">
          <div className="font-mono text-xs text-[#006C49] font-semibold uppercase tracking-wider mb-3">
            01 / 04 — THE ANOMALY
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary font-normal leading-[1.12] mb-6">
            The modern financial life is fractured by design.
          </h2>

          <p className="font-sans text-sm sm:text-base text-[#4B5563] mb-8 leading-relaxed">
            Legacy institutions trap your wealth inside closed silos. Checking balances sit asleep earning near-zero returns. CSVs age in email threads. Tax drags compound unseen in isolated brokerage corners. You cannot deploy what you cannot clearly observe.
          </p>

          {/* Metric cluster */}
          <div className="grid grid-cols-3 gap-3 mb-8">
            <div className="p-4 bg-white rounded border border-black/[0.08] shadow-sm">
              <div className="font-mono text-xl sm:text-2xl text-[#111827] font-semibold">
                8.4
              </div>
              <div className="font-mono text-[10px] text-[#4B5563] uppercase tracking-wider mt-1 leading-tight">
                Disparate Portal Logins
              </div>
            </div>

            <div className="p-4 bg-white rounded border border-black/[0.08] shadow-sm">
              <div className="font-mono text-xl sm:text-2xl text-[#92400E] font-semibold">
                3.2%
              </div>
              <div className="font-mono text-[10px] text-[#4B5563] uppercase tracking-wider mt-1 leading-tight">
                Hidden Friction Drag
              </div>
            </div>

            <div className="p-4 bg-white rounded border border-black/[0.08] shadow-sm">
              <div className="font-mono text-xl sm:text-2xl text-[#111827] font-semibold">
                $14,800
              </div>
              <div className="font-mono text-[10px] text-[#4B5563] uppercase tracking-wider mt-1 leading-tight">
                Avg. Idle Cash Opportunity Loss
              </div>
            </div>
          </div>

          {/* Morph Controller Bar */}
          <div className="p-4 bg-[#F4F4F1] rounded-lg border border-black/[0.06] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="font-mono text-[11px] uppercase text-[#111827] font-semibold block">
                Morphing Data Engine
              </span>
              <span className="text-xs text-[#4B5563]">
                {stage === "fragmented"
                  ? "Silos in isolated conflict"
                  : stage === "converging"
                  ? "Pulling into central vector"
                  : "Continuous Fermor Convergence"}
              </span>
            </div>

            <button
              onClick={cycleStage}
              className="inline-flex items-center justify-center gap-2 px-4 py-2 bg-primary-container text-white font-mono text-xs rounded font-medium shadow-sm hover:bg-primary transition-all active:scale-[0.98] whitespace-nowrap"
            >
              <RefreshCw className="w-3.5 h-3.5" />
              <span>
                {stage === "fragmented"
                  ? "Initiate Convergence"
                  : stage === "converging"
                  ? "Lock Aligned Axis"
                  : "Reset To Silos"}
              </span>
            </button>
          </div>
        </div>

        {/* Morphing Visual Canvas (Right Column) */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-xl border border-black/[0.08] shadow-sm min-h-[480px] flex flex-col justify-between relative overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-black/[0.06]">
            <span className="font-mono text-xs uppercase text-[#4B5563] font-medium tracking-wide">
              Dynamic Topology Morph
            </span>
            <div className="flex items-center gap-2">
              <span
                className={`font-mono text-[10px] px-2.5 py-1 rounded font-semibold uppercase transition-colors ${
                  stage === "unified"
                    ? "bg-[#ECFDF5] text-[#065F46] border border-[#10B981]/20"
                    : stage === "converging"
                    ? "bg-[#EFF6FF] text-[#1D4ED8] border border-blue-200"
                    : "bg-[#FFFBEB] text-[#78350F] border border-[#D97706]/20"
                }`}
              >
                {stage === "unified"
                  ? "State: Aligned Protocol"
                  : stage === "converging"
                  ? "State: Vector Confluence"
                  : "State: Fragmented Shards"}
              </span>
            </div>
          </div>

          {/* Morphing Arena */}
          <div className="relative w-full h-84 sm:h-96 my-4 bg-[#FBFBFA] rounded-lg border border-black/[0.05] flex items-center justify-center overflow-hidden">
            {/* Background alignment axis line with animated glow */}
            <motion.div
              initial={false}
              animate={{
                opacity: stage === "unified" ? 1 : stage === "converging" ? 0.4 : 0,
                scaleX: stage === "fragmented" ? 0.2 : 1,
              }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute inset-x-8 h-1 bg-[#10B981] rounded-full shadow-[0_0_16px_rgba(16,185,129,0.45)] pointer-events-none"
            />

            {/* Central convergence node */}
            <motion.div
              animate={{
                scale: stage === "unified" ? [1, 1.1, 1] : 0,
                opacity: stage === "unified" ? 1 : 0,
              }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              className="absolute w-4 h-4 rounded-full bg-primary border-2 border-[#10B981] z-20 pointer-events-none"
            />

            {/* Morphing Shards */}
            <div className="relative w-full h-full flex items-center justify-center">
              {SHARDS_DATA.map((shard) => {
                const isUnified = stage === "unified";
                const isConverging = stage === "converging";

                const currentX = isUnified
                  ? shard.convergedCoords.x
                  : isConverging
                  ? shard.convergedCoords.x * 0.7
                  : shard.scatterCoords.x;

                const currentY = isUnified
                  ? shard.convergedCoords.y
                  : isConverging
                  ? shard.scatterCoords.y * 0.4
                  : shard.scatterCoords.y;

                const currentRotate = isUnified ? 0 : shard.scatterCoords.rotate;

                return (
                  <motion.div
                    key={shard.id}
                    animate={{
                      x: currentX,
                      y: currentY,
                      rotate: currentRotate,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 70,
                      damping: 14,
                    }}
                    className={`absolute z-10 w-44 sm:w-48 p-3.5 rounded border transition-shadow ${
                      isUnified
                        ? "bg-white border-[#10B981]/40 shadow-md ring-1 ring-[#10B981]/10"
                        : "bg-white border-black/10 shadow-sm"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1">
                      <span className="font-mono text-[9px] uppercase text-[#4B5563] font-medium truncate">
                        {shard.name}
                      </span>
                      <span
                        className={`w-1.5 h-1.5 rounded-full ${
                          isUnified
                            ? "bg-[#10B981]"
                            : shard.status === "Stagnant" || shard.status === "Blind Spot"
                            ? "bg-[#D97706]"
                            : "bg-[#4B5563]"
                        }`}
                      />
                    </div>

                    <div className="font-mono text-sm sm:text-base font-semibold text-[#111827]">
                      {shard.amount}
                    </div>

                    <div className="mt-1 pt-1 border-t border-black/[0.04] text-[10px] font-mono">
                      {isUnified ? (
                        <span className="text-[#006C49] font-medium flex items-center gap-1">
                          <CheckCircle2 className="w-3 h-3 text-[#10B981]" />
                          <span>Axis Cleared (T+0)</span>
                        </span>
                      ) : (
                        <span className="text-[#92400E] font-medium">
                          {shard.dragRate}
                        </span>
                      )}
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Footer Telemetry */}
          <div className="flex flex-wrap items-center justify-between text-xs text-[#4B5563] font-mono pt-3 border-t border-black/[0.04]">
            <span>Telemetry: Open Banking, Direct SEC EDGAR, Swift MT940</span>
            <span className="text-[#006C49] font-medium">Continuous Multi-Hop Cleared</span>
          </div>
        </div>
      </div>
    </section>
  );
}
