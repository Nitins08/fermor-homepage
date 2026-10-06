"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  Shield,
  TrendingUp,
  PieChart,
  Target,
  Wallet,
  Sparkles,
  ChevronRight,
  BarChart3,
  LineChart,
  RefreshCw,
  Activity,
  Layers,
  CheckCircle2,
} from "lucide-react";
import { DEMO_PORTFOLIO } from "@/data/mockData";

type TabKey = "overview" | "investments" | "cashflow" | "goals" | "forecast";

const LIVE_ACTIVITIES = [
  { text: "LIVE Market data • Synchronized across NSE/BSE", tag: "MARKET", color: "text-emerald-400" },
  { text: "Portfolio check: Equity allocation calibrated to 67.0%", tag: "ALLOCATION", color: "text-blue-400" },
  { text: "Life Goal: Early Retirement (FIRE) target on track at 94%", tag: "GOAL", color: "text-cyan-400" },
  { text: "Direct Plan Audit: Zero intermediary fee leak (0.0% distributor commission)", tag: "AUDIT", color: "text-emerald-400" },
  { text: "Tax Optimization: ₹1.5L Sec 80C threshold maxed via PPF + ELSS", tag: "TAX", color: "text-blue-400" },
];

export function Hero() {
  const [activeTab, setActiveTab] = useState<TabKey>("overview");
  const [selectedAssetIndex, setSelectedAssetIndex] = useState(0);
  const [activityIndex, setActivityIndex] = useState(0);

  // 3D Tilt & Mouse-Reactive Glow
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [mouseGlow, setMouseGlow] = useState({ x: 50, y: 50, opacity: 0 });
  const consoleRef = useRef<HTMLDivElement>(null);

  // Interactive Chart Tooltip State
  const [hoveredPointIndex, setHoveredPointIndex] = useState<number | null>(4);

  // Forecast Simulation State
  const [forecastHorizon, setForecastHorizon] = useState(15); // years
  const [forecastMonthlySIP, setForecastMonthlySIP] = useState(60000); // INR

  // Live activity stream ticker
  useEffect(() => {
    const timer = setInterval(() => {
      setActivityIndex((prev) => (prev + 1) % LIVE_ACTIVITIES.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  // Handle 3D perspective tilt
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!consoleRef.current) return;
    const rect = consoleRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const percentX = (x / rect.width) * 100;
    const percentY = (y / rect.height) * 100;

    const calcTiltX = ((y / rect.height) - 0.5) * -4; // Max -2 to +2 deg
    const calcTiltY = ((x / rect.width) - 0.5) * 4;

    setTilt({ x: calcTiltX, y: calcTiltY });
    setMouseGlow({ x: percentX, y: percentY, opacity: 1 });
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setMouseGlow((prev) => ({ ...prev, opacity: 0 }));
  };

  // Chart data for historical growth & forecast
  const historicalPoints = [
    { year: "2021", value: 1250000, label: "₹12.5L" },
    { year: "2022", value: 1820000, label: "₹18.2L" },
    { year: "2023", value: 2480000, label: "₹24.8L" },
    { year: "2024", value: 3190000, label: "₹31.9L" },
    { year: "2025", value: 3842500, label: "₹38.4L (Current)" },
    { year: "2026", value: 4620000, label: "₹46.2L (Proj)" },
  ];

  // Dynamic calculation for forecast tab
  const calculateCorpus = (years: number, monthly: number) => {
    const r = 0.12 / 12; // 12% annual
    const n = years * 12;
    const initial = 3842500;
    const fvInitial = initial * Math.pow(1 + 0.12, years);
    const fvSIP = monthly * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    return Math.round(fvInitial + fvSIP);
  };

  const projectedCorpus = calculateCorpus(forecastHorizon, forecastMonthlySIP);
  const totalInvested = 3842500 + forecastMonthlySIP * 12 * forecastHorizon;
  const wealthGained = projectedCorpus - totalInvested;

  return (
    <section className="relative pt-12 pb-24 md:pt-20 md:pb-32 overflow-hidden bg-[#050B18]">
      {/* Editorial Ambient Depth Lighting */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.18)_0%,rgba(7,20,38,0)_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-navy-grid opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Eyebrow & Headline with Restrained Luxury Space */}
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#0A1D35]/90 border border-[#123A63] text-blue-300 text-xs font-mono font-medium mb-8 shadow-inner backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            <span>INDEPENDENT PRIVATE WEALTH ARCHITECTURE</span>
            <span className="text-[#123A63]">/</span>
            <span className="text-cyan-300 font-semibold">INDIA</span>
          </div>

          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold text-white tracking-tight leading-[1.08] text-balance">
            Your wealth intelligence,{" "}
            <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-white via-slate-100 to-blue-200 bg-clip-text text-transparent">
              engineered in one terminal.
            </span>
          </h1>

          <p className="mt-6 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed font-light">
            Unify your mutual funds, equity tranches, statutory PPF, tax liabilities, and horizon milestones
            into a calm, mathematically transparent command center. 100% private, client-side execution.
          </p>

          {/* Primary Action Buttons */}
          <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#calculators"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-blue-600 text-white font-medium text-sm hover:bg-blue-500 active:bg-blue-700 transition-all shadow-lg shadow-blue-900/30 border border-blue-400/30 group"
            >
              <span>Explore In-Browser Calculators</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#health-check"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-lg bg-[#0A1D35]/80 border border-[#123A63] text-slate-200 font-medium text-sm hover:bg-[#0D2747] hover:border-blue-400/40 hover:text-white transition-all backdrop-blur-md shadow-xs"
            >
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>Run 60s Financial Health Audit</span>
            </a>
          </div>

          {/* Trust Attributes */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-8 gap-y-2.5 text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
              Direct plans only • Zero commissions
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
              100% Client-side mathematical privacy
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" />
              Calibrated for Indian tax & investment laws
            </span>
          </div>
        </div>

        {/* HERO MASTER 3D FINANCIAL COMMAND CONSOLE */}
        <div className="max-w-6xl mx-auto perspective-container">
          <div
            ref={consoleRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
              transition: "transform 0.18s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
            className="relative rounded-2xl bg-[#071426]/95 border border-[#123A63] shadow-[0_25px_60px_-15px_rgba(0,0,0,0.9),0_0_40px_rgba(37,99,235,0.15)] backdrop-blur-xl overflow-hidden preserve-3d"
          >
            {/* Cursor-Following Subtle Specular Glow */}
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-300"
              style={{
                opacity: mouseGlow.opacity,
                background: `radial-gradient(circle 380px at ${mouseGlow.x}% ${mouseGlow.y}%, rgba(59, 130, 246, 0.12), transparent 70%)`,
              }}
            />

            {/* Top Control Bar: Console Brand, 5 Luxury Tabs, Live Activity Feed */}
            <div className="bg-[#050B18]/90 border-b border-[#0D2747] px-4 py-3 sm:px-6 flex flex-wrap items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-3">
                <div className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </div>
                <div className="font-mono font-semibold tracking-wide text-white flex items-center gap-2">
                  <span>FERMOR FINANCIAL OPERATING SYSTEM</span>
                  <span className="text-slate-500 text-[11px]">v3.0</span>
                </div>
              </div>

              {/* 5 Luxury Command Tabs */}
              <div className="flex items-center bg-[#071426] p-1 rounded-lg border border-[#0D2747]" role="tablist">
                {[
                  { key: "overview", label: "OVERVIEW", icon: PieChart },
                  { key: "investments", label: "INVESTMENTS", icon: Layers },
                  { key: "cashflow", label: "CASH FLOW", icon: Wallet },
                  { key: "goals", label: "GOALS", icon: Target },
                  { key: "forecast", label: "FORECAST", icon: TrendingUp },
                ].map((tab) => {
                  const Icon = tab.icon;
                  const isActive = activeTab === tab.key;
                  return (
                    <button
                      key={tab.key}
                      type="button"
                      onClick={() => setActiveTab(tab.key as TabKey)}
                      className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-mono text-[11px] font-semibold transition-all duration-200 ${
                        isActive
                          ? "bg-blue-600 text-white shadow-xs"
                          : "text-slate-400 hover:text-slate-200 hover:bg-[#0A1D35]"
                      }`}
                      role="tab"
                      aria-selected={isActive}
                    >
                      <Icon className="w-3 h-3" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </div>

              {/* Simulated Live Financial Activity Pill */}
              <div className="hidden lg:flex items-center gap-2 px-3 py-1 bg-[#0A1D35]/80 border border-[#123A63] rounded-md font-mono text-[11px]">
                <Activity className="w-3 h-3 text-cyan-400 animate-pulse shrink-0" />
                <span className="text-slate-300 truncate max-w-[280px]">
                  {LIVE_ACTIVITIES[activityIndex].text}
                </span>
              </div>
            </div>

            {/* TAB CONTENT 1: OVERVIEW (Interactive Net Worth & Growth Trajectory) */}
            {activeTab === "overview" && (
              <div className="p-5 sm:p-7 space-y-6">
                {/* Metric Summary Ribbon */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
                  <div className="p-4 bg-[#0A1D35]/70 rounded-xl border border-[#123A63]/60 hover:border-blue-500/40 transition-colors">
                    <div className="text-[11px] font-mono font-medium text-slate-400 uppercase tracking-wider">
                      Consolidated Net Worth
                    </div>
                    <div className="text-2xl font-bold text-white mt-1 num-tabular tracking-tight">
                      ₹38,42,500
                    </div>
                    <div className="text-xs text-emerald-400 font-semibold mt-1 flex items-center gap-1">
                      <TrendingUp className="w-3.5 h-3.5" />
                      +14.2% Annualized (XIRR)
                    </div>
                  </div>

                  <div className="p-4 bg-[#0A1D35]/70 rounded-xl border border-[#123A63]/60 hover:border-blue-500/40 transition-colors">
                    <div className="text-[11px] font-mono font-medium text-slate-400 uppercase tracking-wider">
                      Equity Allocation
                    </div>
                    <div className="text-2xl font-bold text-white mt-1 num-tabular tracking-tight">
                      67.0%
                    </div>
                    <div className="text-xs text-slate-300 mt-1 font-medium">
                      Direct Mutual Funds + Smallcase
                    </div>
                  </div>

                  <div className="p-4 bg-[#0A1D35]/70 rounded-xl border border-[#123A63]/60 hover:border-blue-500/40 transition-colors">
                    <div className="text-[11px] font-mono font-medium text-slate-400 uppercase tracking-wider">
                      Debt & Statutory PPF
                    </div>
                    <div className="text-2xl font-bold text-white mt-1 num-tabular tracking-tight">
                      ₹9,75,000
                    </div>
                    <div className="text-xs text-slate-300 mt-1 font-medium">
                      25.4% Capital preservation
                    </div>
                  </div>

                  <div className="p-4 bg-[#0A1D35]/70 rounded-xl border border-[#123A63]/60 hover:border-blue-500/40 transition-colors">
                    <div className="text-[11px] font-mono font-medium text-slate-400 uppercase tracking-wider">
                      Liquid Emergency Runway
                    </div>
                    <div className="text-2xl font-bold text-white mt-1 num-tabular tracking-tight">
                      6.2 Months
                    </div>
                    <div className="text-xs text-cyan-400 font-semibold mt-1">
                      Target achieved (≥6 mo)
                    </div>
                  </div>
                </div>

                {/* Interactive Chart Component with Hairline Guide & Tooltip */}
                <div className="bg-[#050B18]/60 rounded-xl p-5 border border-[#0D2747]">
                  <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                    <div>
                      <h4 className="text-sm font-semibold text-white">Net Worth Compounding Trajectory</h4>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Interactive client-side coordinate guide. Hover along points to inspect valuation.
                      </p>
                    </div>
                    <div className="flex items-center gap-4 text-xs font-mono">
                      <div className="flex items-center gap-1.5 text-blue-400">
                        <span className="w-2.5 h-0.5 bg-blue-500 rounded-full inline-block"></span>
                        Historical Net Worth
                      </div>
                      <div className="flex items-center gap-1.5 text-cyan-400">
                        <span className="w-2.5 h-0.5 bg-cyan-400 border border-dashed border-cyan-400 rounded-full inline-block"></span>
                        Projected 12% Growth
                      </div>
                    </div>
                  </div>

                  {/* SVG Chart with Hairline Crosshair */}
                  <div className="relative h-44 w-full">
                    <svg className="w-full h-full overflow-visible" viewBox="0 0 600 160" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.35" />
                          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.0" />
                        </linearGradient>
                      </defs>

                      {/* Horizontal Grid lines */}
                      <line x1="0" y1="30" x2="600" y2="30" stroke="#0D2747" strokeDasharray="3 3" />
                      <line x1="0" y1="75" x2="600" y2="75" stroke="#0D2747" strokeDasharray="3 3" />
                      <line x1="0" y1="120" x2="600" y2="120" stroke="#0D2747" strokeDasharray="3 3" />

                      {/* Shaded Area */}
                      <path
                        d="M 50,140 L 150,115 L 250,90 L 350,65 L 450,40 L 550,20 L 550,150 L 50,150 Z"
                        fill="url(#chartGradient)"
                      />

                      {/* Growth Line */}
                      <path
                        d="M 50,140 L 150,115 L 250,90 L 350,65 L 450,40 L 550,20"
                        fill="none"
                        stroke="#3B82F6"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                      />

                      {/* Interactive Crosshair and Coordinate points */}
                      {historicalPoints.map((pt, idx) => {
                        const cx = 50 + idx * 100;
                        const cy = 140 - idx * 24;
                        const isHovered = hoveredPointIndex === idx;

                        return (
                          <g
                            key={pt.year}
                            onMouseEnter={() => setHoveredPointIndex(idx)}
                            className="cursor-pointer"
                          >
                            {/* Vertical hairline on hover */}
                            {isHovered && (
                              <line
                                x1={cx}
                                y1="0"
                                x2={cx}
                                y2="150"
                                stroke="#67E8F9"
                                strokeWidth="1"
                                strokeDasharray="2 2"
                              />
                            )}

                            {/* Point Dot */}
                            <circle
                              cx={cx}
                              cy={cy}
                              r={isHovered ? 6 : 4}
                              fill={isHovered ? "#67E8F9" : "#3B82F6"}
                              stroke="#050B18"
                              strokeWidth="2"
                              className="transition-all duration-200"
                            />
                          </g>
                        );
                      })}
                    </svg>

                    {/* Active Point Hover Overlay */}
                    {hoveredPointIndex !== null && (
                      <div
                        className="absolute top-1 pointer-events-none transform -translate-x-1/2 bg-[#0A1D35] border border-cyan-500/50 rounded-lg px-3 py-1.5 shadow-xl text-center"
                        style={{ left: `${(hoveredPointIndex / (historicalPoints.length - 1)) * 82 + 9}%` }}
                      >
                        <div className="text-[10px] text-slate-400 font-mono">
                          Year {historicalPoints[hoveredPointIndex].year}
                        </div>
                        <div className="text-xs font-bold text-white num-tabular font-mono">
                          {historicalPoints[hoveredPointIndex].label}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Horizontal timeline axis labels */}
                  <div className="flex justify-between text-[11px] font-mono text-slate-400 mt-2 px-6">
                    {historicalPoints.map((pt, idx) => (
                      <span
                        key={pt.year}
                        className={`cursor-pointer transition-colors ${
                          hoveredPointIndex === idx ? "text-cyan-400 font-bold" : ""
                        }`}
                        onClick={() => setHoveredPointIndex(idx)}
                      >
                        {pt.year}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT 2: INVESTMENTS (Allocation breakdown & holdings) */}
            {activeTab === "investments" && (
              <div className="p-5 sm:p-7 space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-semibold text-slate-300">
                    <span>Portfolio Diversification Spectrum</span>
                    <span className="text-slate-400 font-mono text-[11px]">Select asset tranche to inspect holdings</span>
                  </div>
                  {/* Segmented spectrum bar */}
                  <div className="h-4 w-full bg-[#050B18] rounded-md overflow-hidden flex border border-[#123A63] cursor-pointer">
                    <button
                      type="button"
                      onClick={() => setSelectedAssetIndex(0)}
                      className="h-full bg-blue-600 hover:opacity-90 transition-opacity"
                      style={{ width: "55%" }}
                      title="Equity Mutual Funds: 55%"
                    />
                    <button
                      type="button"
                      onClick={() => setSelectedAssetIndex(1)}
                      className="h-full bg-cyan-600 hover:opacity-90 transition-opacity"
                      style={{ width: "25%" }}
                      title="Fixed Income & PPF: 25%"
                    />
                    <button
                      type="button"
                      onClick={() => setSelectedAssetIndex(2)}
                      className="h-full bg-emerald-600 hover:opacity-90 transition-opacity"
                      style={{ width: "12%" }}
                      title="Direct Equities & ETFs: 12%"
                    />
                    <button
                      type="button"
                      onClick={() => setSelectedAssetIndex(3)}
                      className="h-full bg-amber-500 hover:opacity-90 transition-opacity"
                      style={{ width: "8%" }}
                      title="Emergency Liquid: 8%"
                    />
                  </div>
                </div>

                {/* Tranche Cards */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                  {DEMO_PORTFOLIO.map((asset, index) => {
                    const isSelected = selectedAssetIndex === index;
                    return (
                      <div
                        key={asset.category}
                        onClick={() => setSelectedAssetIndex(index)}
                        className={`p-4 rounded-xl border text-left cursor-pointer transition-all ${
                          isSelected
                            ? "bg-[#0D2747] text-white border-blue-400/80 shadow-md shadow-blue-900/30"
                            : "bg-[#0A1D35]/60 text-slate-300 border-[#123A63] hover:border-slate-400 hover:bg-[#0A1D35]"
                        }`}
                      >
                        <div className="flex items-center justify-between text-xs font-mono font-semibold">
                          <span className={isSelected ? "text-cyan-300" : "text-blue-400"}>
                            {asset.allocationPercent}%
                          </span>
                          <span className="text-[11px] text-slate-400">{asset.returnRate}</span>
                        </div>
                        <div className="text-sm font-semibold text-white mt-1.5 truncate">
                          {asset.category}
                        </div>
                        <div className="text-xs mt-1 num-tabular text-slate-300 font-mono">
                          {asset.value}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Direct holdings preview */}
                <div className="bg-[#050B18]/70 rounded-xl p-4 border border-[#0D2747] text-xs">
                  <div className="flex items-center justify-between mb-3 pb-2 border-b border-[#0D2747]">
                    <span className="font-semibold text-white">
                      Direct Holdings in {DEMO_PORTFOLIO[selectedAssetIndex].category}:
                    </span>
                    <span className="text-emerald-400 font-mono">
                      Zero Commission • Direct-Growth Plans
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                    {DEMO_PORTFOLIO[selectedAssetIndex].items.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 p-2.5 bg-[#0A1D35]/80 rounded-lg border border-[#123A63]/60 text-slate-200"
                      >
                        <ChevronRight className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT 3: CASH FLOW & AUTOMATION */}
            {activeTab === "cashflow" && (
              <div className="p-5 sm:p-7 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 bg-[#0A1D35]/70 rounded-xl border border-[#123A63]">
                    <div className="text-[11px] font-mono font-medium text-emerald-400 uppercase">
                      Monthly Post-Tax Inflow
                    </div>
                    <div className="text-2xl font-bold text-white mt-1.5 num-tabular">
                      ₹1,75,000
                    </div>
                    <div className="text-xs text-slate-400 mt-1">Salary + Verified Consulting</div>
                  </div>

                  <div className="p-4 bg-[#0A1D35]/70 rounded-xl border border-[#123A63]">
                    <div className="text-[11px] font-mono font-medium text-slate-400 uppercase">
                      Fixed Living & EMI
                    </div>
                    <div className="text-2xl font-bold text-white mt-1.5 num-tabular">
                      ₹72,000
                    </div>
                    <div className="text-xs text-slate-400 mt-1">Rent, Utilities, Term Cover</div>
                  </div>

                  <div className="p-4 bg-[#0A1D35]/70 rounded-xl border border-blue-500/40">
                    <div className="text-[11px] font-mono font-medium text-blue-400 uppercase">
                      Automated Monthly SIPs
                    </div>
                    <div className="text-2xl font-bold text-white mt-1.5 num-tabular">
                      ₹60,000
                    </div>
                    <div className="text-xs text-emerald-400 font-medium mt-1">
                      34.2% Sustained Net Savings Rate
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#050B18]/70 border border-[#0D2747]">
                  <h4 className="text-xs font-mono font-semibold text-slate-300 uppercase mb-3">
                    Active Monthly Direct Debits (Day 1 - Day 10 of month)
                  </h4>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between p-3 bg-[#0A1D35]/80 rounded-lg border border-[#123A63]">
                      <div>
                        <span className="font-semibold text-white">UTI Nifty 50 Index Fund Direct-Growth</span>
                        <span className="ml-2 text-slate-400 font-mono text-[11px]">1st of Month</span>
                      </div>
                      <span className="font-bold text-emerald-400 num-tabular">₹25,000/mo</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-[#0A1D35]/80 rounded-lg border border-[#123A63]">
                      <div>
                        <span className="font-semibold text-white">Parag Parikh Flexi Cap Fund Direct-Growth</span>
                        <span className="ml-2 text-slate-400 font-mono text-[11px]">5th of Month</span>
                      </div>
                      <span className="font-bold text-emerald-400 num-tabular">₹20,000/mo</span>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-[#0A1D35]/80 rounded-lg border border-[#123A63]">
                      <div>
                        <span className="font-semibold text-white">Public Provident Fund (PPF) Statutory Deposit</span>
                        <span className="ml-2 text-slate-400 font-mono text-[11px]">10th of Month</span>
                      </div>
                      <span className="font-bold text-emerald-400 num-tabular">₹15,000/mo</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT 4: GOALS & MILESTONES */}
            {activeTab === "goals" && (
              <div className="p-5 sm:p-7 space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 bg-[#0A1D35]/80 rounded-xl border border-[#123A63] space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="text-[10px] font-mono text-emerald-400 uppercase font-semibold">
                          Horizon: 2027
                        </div>
                        <div className="text-sm font-semibold text-white">Home Down Payment</div>
                      </div>
                      <span className="text-xs font-mono font-bold px-2 py-0.5 bg-emerald-950 text-emerald-400 border border-emerald-800 rounded">
                        80%
                      </span>
                    </div>
                    <div className="w-full bg-[#050B18] h-2 rounded-full overflow-hidden border border-[#0D2747]">
                      <div className="bg-emerald-500 h-full rounded-full" style={{ width: "80%" }}></div>
                    </div>
                    <div className="flex justify-between text-xs font-mono text-slate-400">
                      <span>Saved: ₹24,00,000</span>
                      <span>Target: ₹30,00,000</span>
                    </div>
                  </div>

                  <div className="p-4 bg-[#0A1D35]/80 rounded-xl border border-[#123A63] space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="text-[10px] font-mono text-blue-400 uppercase font-semibold">
                          Horizon: 2034
                        </div>
                        <div className="text-sm font-semibold text-white">Higher Education Corpus</div>
                      </div>
                      <span className="text-xs font-mono font-bold px-2 py-0.5 bg-blue-950 text-blue-400 border border-blue-800 rounded">
                        41%
                      </span>
                    </div>
                    <div className="w-full bg-[#050B18] h-2 rounded-full overflow-hidden border border-[#0D2747]">
                      <div className="bg-blue-500 h-full rounded-full" style={{ width: "41%" }}></div>
                    </div>
                    <div className="flex justify-between text-xs font-mono text-slate-400">
                      <span>Saved: ₹18,50,000</span>
                      <span>Target: ₹45,00,000</span>
                    </div>
                  </div>

                  <div className="p-4 bg-[#0A1D35]/80 rounded-xl border border-[#123A63] space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="text-[10px] font-mono text-cyan-400 uppercase font-semibold">
                          Target: Age 48
                        </div>
                        <div className="text-sm font-semibold text-white">Financial Freedom (FIRE)</div>
                      </div>
                      <span className="text-xs font-mono font-bold px-2 py-0.5 bg-cyan-950 text-cyan-400 border border-cyan-800 rounded">
                        On Track
                      </span>
                    </div>
                    <div className="w-full bg-[#050B18] h-2 rounded-full overflow-hidden border border-[#0D2747]">
                      <div className="bg-cyan-400 h-full rounded-full" style={{ width: "62%" }}></div>
                    </div>
                    <div className="flex justify-between text-xs font-mono text-slate-400">
                      <span>Projected: ₹3.84 Cr</span>
                      <span>Required: ₹3.50 Cr</span>
                    </div>
                  </div>
                </div>

                <div className="p-3.5 bg-[#050B18]/80 rounded-xl border border-[#0D2747] text-xs text-slate-300 flex flex-wrap items-center justify-between gap-2">
                  <span className="font-light">
                    Every milestone accounts for 6.0% persistent Indian CPI inflation and tax drag.
                  </span>
                  <a href="#calculators" className="font-semibold text-cyan-400 hover:text-cyan-300 flex items-center gap-1">
                    <span>Tune parameters in Calculator Lab</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            )}

            {/* TAB CONTENT 5: FORECAST (Interactive Horizon Simulator) */}
            {activeTab === "forecast" && (
              <div className="p-5 sm:p-7 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {/* Slider Controls */}
                  <div className="space-y-5 bg-[#050B18]/70 p-4 rounded-xl border border-[#0D2747]">
                    <div>
                      <div className="flex justify-between text-xs font-medium text-slate-300 mb-2">
                        <span>Horizon Duration:</span>
                        <span className="text-cyan-400 font-mono font-bold">{forecastHorizon} Years</span>
                      </div>
                      <input
                        type="range"
                        min="5"
                        max="30"
                        step="1"
                        value={forecastHorizon}
                        onChange={(e) => setForecastHorizon(Number(e.target.value))}
                        className="w-full h-2 bg-[#0A1D35] rounded-lg cursor-pointer"
                        aria-label="Horizon Duration"
                      />
                      <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
                        <span>5y</span>
                        <span>15y</span>
                        <span>30y</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-medium text-slate-300 mb-2">
                        <span>Monthly Systematic SIP:</span>
                        <span className="text-blue-400 font-mono font-bold">₹{forecastMonthlySIP.toLocaleString("en-IN")}</span>
                      </div>
                      <input
                        type="range"
                        min="10000"
                        max="200000"
                        step="5000"
                        value={forecastMonthlySIP}
                        onChange={(e) => setForecastMonthlySIP(Number(e.target.value))}
                        className="w-full h-2 bg-[#0A1D35] rounded-lg cursor-pointer"
                        aria-label="Monthly Systematic SIP"
                      />
                      <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
                        <span>₹10,000</span>
                        <span>₹1,00,000</span>
                        <span>₹2,00,000</span>
                      </div>
                    </div>

                    <div className="text-[11px] text-slate-400 font-light border-t border-[#0D2747] pt-3">
                      Assuming conservative 12.0% equity blended return with compounding reinvestment.
                    </div>
                  </div>

                  {/* Projected Metric Output */}
                  <div className="flex flex-col justify-between p-5 bg-[#0A1D35]/80 rounded-xl border border-[#123A63]">
                    <div>
                      <div className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                        Projected Total Corpus in {forecastHorizon} Years
                      </div>
                      <div className="text-3xl sm:text-4xl font-extrabold text-white mt-2 num-tabular tracking-tight">
                        ₹{(projectedCorpus / 10000000).toFixed(2)} Crores
                      </div>
                      <div className="text-xs text-slate-400 font-mono mt-1">
                        (₹{projectedCorpus.toLocaleString("en-IN")})
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#123A63] mt-4">
                      <div>
                        <div className="text-[10px] font-mono text-slate-400 uppercase">Total Capital Invested</div>
                        <div className="text-sm font-bold text-white num-tabular">
                          ₹{(totalInvested / 10000000).toFixed(2)} Cr
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] font-mono text-emerald-400 uppercase">Estimated Wealth Gain</div>
                        <div className="text-sm font-bold text-emerald-400 num-tabular">
                          +₹{(wealthGained / 10000000).toFixed(2)} Cr
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Status & Privacy Bar */}
            <div className="bg-[#050B18] border-t border-[#0D2747] px-4 py-3 sm:px-6 flex flex-wrap items-center justify-between text-[11px] text-slate-400">
              <div className="flex items-center gap-2">
                <Shield className="w-3.5 h-3.5 text-cyan-400" />
                <span>Zero Account Requirement • 100% Client-Side Privacy Guaranteed</span>
              </div>
              <div className="font-mono text-slate-500">
                INR Standard Format • Real-time Calculation Engine
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
