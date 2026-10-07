"use client";

import { useState, useEffect } from "react";
import { ArrowRight, TrendingUp, Sparkles, Globe, Layers, Eye, RefreshCw } from "lucide-react";
import FinancialEcosystemCanvas from "./FinancialEcosystemCanvas";

export default function Hero() {
  const [activeView, setActiveView] = useState<"3d" | "chart">("3d");
  const [telemetry, setTelemetry] = useState("T: 14:02:18 EDT | Yield Sweep: Active");
  const [selectedAssetIndex, setSelectedAssetIndex] = useState<number | null>(null);
  const [netWorth, setNetWorth] = useState(1482940.24);

  // Subtle simulated micro-fluctuation in consolidated net balance
  useEffect(() => {
    const interval = setInterval(() => {
      setNetWorth((prev) => +(prev + (Math.random() * 0.4 - 0.1)).toFixed(2));
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  const allocations = [
    {
      title: "Liquid Cash & Sweeps",
      amount: "$348,200",
      detail: "5.28% blended APY",
      color: "border-[#10B981]",
      note: "Instant T+0 sweep into Treasury repos",
    },
    {
      title: "Yield Equities & ETFs",
      amount: "$614,500",
      detail: "+14.2% YTD indexed",
      color: "border-primary",
      note: "Global broad-market & factor hedged",
    },
    {
      title: "Private Equity & LP",
      amount: "$380,000",
      detail: "4 active positions",
      color: "border-[#92400E]",
      note: "Real-time cap table & valuation sync",
    },
    {
      title: "Real Asset Collateral",
      amount: "$140,240",
      detail: "Low LTV (12.4%)",
      color: "border-[#4B5563]",
      note: "Senior unencumbered property equity",
    },
  ];

  const handleMouseMove = (e: React.MouseEvent<SVGSVGElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = Math.round(e.clientX - rect.left);
    const y = Math.round(e.clientY - rect.top);
    const projectedValue = (1482940 + x * 420).toLocaleString();
    setTelemetry(`POS: [${x}, ${y}] | Model Projected: $${projectedValue} | Delta: +1.4%`);
  };

  return (
    <section id="hero" className="relative w-full pt-16 sm:pt-24 pb-20 px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto">
      {/* Background subtle editorial watermark texture */}
      <div className="absolute top-12 right-12 font-serif text-[180px] sm:text-[240px] text-black/[0.015] select-none pointer-events-none -z-10 leading-none">
        FRM
      </div>

      {/* Editorial Hero Header */}
      <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
        {/* Eyebrow Chip */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#F4F4F1] border border-black/[0.06] shadow-sm mb-6">
          <span className="w-2 h-2 rounded-full bg-[#10B981] animate-ping" />
          <span className="font-mono text-[11px] font-semibold tracking-wider text-primary uppercase">
            Intelligent Capital Architecture
          </span>
          <span className="w-1 h-1 rounded-full bg-[#9CA3AF]" />
          <span className="font-mono text-[10px] tracking-wide text-[#4B5563] uppercase">
            Synchronized Data Engine
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-serif text-4xl sm:text-6xl lg:text-[76px] font-normal text-primary tracking-tight leading-[1.06] mb-6">
          Your money,{" "}
          <span className="italic font-normal text-primary">
            finally making sense.
          </span>
        </h1>

        {/* Subtitle */}
        <p className="font-sans text-base sm:text-lg lg:text-xl text-[#4B5563] max-w-2xl mx-auto leading-relaxed mb-10 font-normal">
          Fermor synthesizes fragmented bank feeds, investments, private holdings,
          and liabilities into a single living balance. Understand where you stand
          today, uncover high-leverage moves, and compound with unwavering conviction.
        </p>

        {/* Action Controls */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#register"
            className="inline-flex items-center gap-2.5 bg-primary-container text-white font-sans text-sm font-semibold px-7 py-3.5 rounded shadow-sm hover:bg-primary transition-all duration-200 group active:scale-[0.98]"
          >
            <span>Open Private Account</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>

          <a
            href="#problem"
            className="inline-flex items-center gap-2.5 bg-white text-[#111827] font-sans text-sm font-medium px-6 py-3.5 rounded border border-black/10 shadow-sm hover:bg-[#F4F4F1] transition-all duration-200 active:scale-[0.98]"
          >
            <span className="w-2 h-2 rounded-full bg-[#006C49]" />
            <span>Discover The Anomaly</span>
          </a>
        </div>
      </div>

      {/* Living Financial Canvas (Instrument Dashboard & 3D Topology) */}
      <div
        id="interactive-canvas"
        className="w-full bg-white rounded-xl border border-black/[0.08] shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-5 sm:p-8 relative overflow-hidden"
      >
        {/* Canvas Header: Numerical Readout & Real-Time Signals */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-black/[0.06] mb-6">
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-4 sm:gap-8">
            <div>
              <div className="font-mono text-[11px] uppercase tracking-wider text-[#4B5563] mb-1.5 flex items-center gap-2 font-medium">
                <span>Consolidated Net Balance</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
              </div>
              <div className="flex items-baseline gap-3">
                <span className="font-mono text-3xl sm:text-4xl lg:text-5xl tracking-tight text-[#111827] font-semibold tabular-nums">
                  ${netWorth.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
                <span className="inline-flex items-center gap-1 font-mono text-xs text-[#065F46] font-medium px-2 py-0.5 rounded bg-[#ECFDF5] border border-[#10B981]/20">
                  <TrendingUp className="w-3.5 h-3.5 text-[#10B981]" />
                  <span>+$4,120.50 (24h)</span>
                </span>
              </div>
            </div>

            <div className="hidden sm:block border-l border-black/[0.08] pl-6">
              <span className="font-mono text-[11px] uppercase tracking-wider text-[#4B5563] block mb-1 font-medium">
                Liquidity Confidence
              </span>
              <span className="font-mono text-lg font-semibold text-primary">
                99.4% Verified
              </span>
            </div>
          </div>

          {/* Perspective Viewport Switcher */}
          <div className="flex items-center gap-2">
            <div className="inline-flex p-1 bg-[#F4F4F1] rounded border border-black/[0.06] font-mono text-xs">
              <button
                onClick={() => setActiveView("3d")}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded transition-all font-medium ${
                  activeView === "3d"
                    ? "bg-white text-primary font-semibold shadow-sm"
                    : "text-[#4B5563] hover:text-[#111827]"
                }`}
              >
                <Layers className="w-3.5 h-3.5 text-[#006C49]" />
                <span>3D Capital Lattice</span>
              </button>
              <button
                onClick={() => setActiveView("chart")}
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded transition-all font-medium ${
                  activeView === "chart"
                    ? "bg-white text-primary font-semibold shadow-sm"
                    : "text-[#4B5563] hover:text-[#111827]"
                }`}
              >
                <TrendingUp className="w-3.5 h-3.5 text-[#006C49]" />
                <span>Analytical Curve</span>
              </button>
            </div>
          </div>
        </div>

        {/* Viewport Display: 3D Topology Canvas or SVG Chart */}
        {activeView === "3d" ? (
          <div className="w-full">
            <FinancialEcosystemCanvas />
          </div>
        ) : (
          <div className="relative w-full h-72 sm:h-80 lg:h-96 rounded bg-[#FBFBFA] border border-black/[0.05] p-4 flex flex-col justify-between overflow-hidden">
            {/* Live Telemetry Floating HUD */}
            <div className="absolute top-4 left-4 z-10 flex items-center gap-3 bg-white/95 backdrop-blur px-3 py-1.5 rounded border border-black/[0.08] shadow-sm">
              <span className="font-mono text-[10px] text-[#4B5563] uppercase">
                Live Coordinate
              </span>
              <span className="font-mono text-[11px] text-primary font-medium">
                {telemetry}
              </span>
            </div>

            {/* SVG Trajectory Visualization */}
            <svg
              className="w-full h-full cursor-crosshair"
              viewBox="0 0 1000 360"
              preserveAspectRatio="none"
              onMouseMove={handleMouseMove}
              onMouseLeave={() => setTelemetry("T: 14:02:18 EDT | Yield Sweep: Active")}
            >
              <defs>
                <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#006C49" stopOpacity="0.16" />
                  <stop offset="100%" stopColor="#006C49" stopOpacity="0.0" />
                </linearGradient>
              </defs>

              <line x1="0" y1="90" x2="1000" y2="90" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="0" y1="180" x2="1000" y2="180" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" />
              <line x1="0" y1="270" x2="1000" y2="270" stroke="#E5E7EB" strokeWidth="1" strokeDasharray="4 4" />

              <path
                d="M 0 310 C 150 290, 220 280, 350 250 C 480 220, 560 210, 700 170 C 820 135, 920 110, 1000 80 L 1000 360 L 0 360 Z"
                fill="url(#chartGradient)"
              />

              <path
                d="M 0 310 C 150 290, 220 280, 350 250 C 480 220, 560 210, 700 170 C 820 135, 920 110, 1000 80"
                fill="none"
                stroke="#006C49"
                strokeWidth="2.5"
              />

              <path
                d="M 350 250 C 500 245, 750 240, 1000 220"
                fill="none"
                stroke="#9CA3AF"
                strokeWidth="1.5"
                strokeDasharray="6 6"
              />

              <circle cx="350" cy="250" r="4.5" fill="#003527" stroke="#ffffff" strokeWidth="2" />
              <circle cx="700" cy="170" r="4.5" fill="#003527" stroke="#ffffff" strokeWidth="2" />
              <circle cx="1000" cy="80" r="6" fill="#10B981" stroke="#ffffff" strokeWidth="2" className="animate-pulse" />
            </svg>

            <div className="flex justify-between items-center font-mono text-[10px] text-[#4B5563] pt-2 border-t border-black/[0.04]">
              <span>Q1 2024</span>
              <span>Q2 2024</span>
              <span>Q3 2024</span>
              <span>Q4 2024</span>
              <span className="text-[#065F46] font-semibold bg-[#ECFDF5] px-2 py-0.5 rounded">
                CURRENT HORIZON
              </span>
              <span>Q4 2025 (PROJECTION)</span>
            </div>
          </div>
        )}

        {/* Allocation Compartments */}
        <div className="mt-6 pt-6 border-t border-black/[0.06] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {allocations.map((item, idx) => (
            <div
              key={item.title}
              onClick={() => setSelectedAssetIndex(selectedAssetIndex === idx ? null : idx)}
              className={`p-4 bg-[#FBFBFA] rounded border cursor-pointer transition-all ${
                selectedAssetIndex === idx
                  ? "border-primary bg-white shadow-sm ring-1 ring-primary/20"
                  : "border-black/[0.06] hover:border-black/20 hover:bg-white"
              }`}
            >
              <div className="flex items-center justify-between mb-1.5">
                <span className="font-mono text-[11px] uppercase text-[#4B5563] font-medium">
                  {item.title}
                </span>
                <span className={`w-1.5 h-1.5 rounded-full ${idx === 0 ? "bg-[#10B981]" : idx === 1 ? "bg-primary" : idx === 2 ? "bg-[#92400E]" : "bg-[#4B5563]"}`} />
              </div>
              <div className="font-mono text-xl text-[#111827] font-semibold tracking-tight">
                {item.amount}
              </div>
              <div className="text-xs text-[#006C49] font-mono mt-1 font-medium">
                {item.detail}
              </div>
              {selectedAssetIndex === idx && (
                <div className="mt-2.5 pt-2 border-t border-black/[0.06] text-xs text-[#4B5563] animate-fadeIn">
                  {item.note}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
