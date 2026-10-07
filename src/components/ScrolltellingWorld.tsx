"use client";

import React, { useState, useEffect, useRef, useMemo } from "react";
import {
  PieChart,
  Target,
  Wallet,
  TrendingUp,
  Activity,
  Layers,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  ChevronRight,
  Sliders,
  Maximize2,
  Compass,
  Zap,
  Info,
} from "lucide-react";
import { DEMO_PORTFOLIO } from "@/data/mockData";

// Chapter milestones
const CHAPTERS = [
  { id: "core", label: "01 Core", name: "Financial Core", range: [0, 0.16] },
  { id: "flow", label: "02 Flow", name: "Understand Capital", range: [0.16, 0.38] },
  { id: "decide", label: "03 Decide", name: "Decision Engine", range: [0.38, 0.58] },
  { id: "curve", label: "04 Curve", name: "Growth Trajectory", range: [0.58, 0.76] },
  { id: "terminal", label: "05 Terminal", name: "Command Center", range: [0.76, 0.92] },
  { id: "action", label: "06 Sovereign", name: "Institutional Launch", range: [0.92, 1.0] },
];

const LIVE_STREAM_ITEMS = [
  "● NSE/BSE Synced • Market volatility index VIX: 13.8",
  "● Portfolio rebalance trigger: Direct equity tranche at 67.0%",
  "● Tax Harvest alert: ₹1.25L LTCG threshold calibrated for FY 2025-26",
  "● Goal tracker: Early Retirement (FIRE) target on track (94%)",
  "● Zero commission audit: 0.0% intermediary distributor leakage",
];

interface ScrolltellingWorldProps {
  onOpenToolDrawer?: () => void;
}

export function ScrolltellingWorld({ onOpenToolDrawer }: ScrolltellingWorldProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  // Smooth scroll progress state (0.0 to 1.0)
  const [scrollProgress, setScrollProgress] = useState(0);
  const [targetProgress, setTargetProgress] = useState(0);

  // Active chapter index (0 to 5)
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);

  // Mouse parallax state
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Scene 3 Decision Engine Interactive State
  const [monthlySipInput, setMonthlySipInput] = useState(25000); // INR
  const [sipReturnRate, setSipReturnRate] = useState(12.5); // % CAGR
  const [sipHorizonYears, setSipHorizonYears] = useState(15); // Years

  // Scene 5 Command Center State
  const [terminalTab, setTerminalTab] = useState<"overview" | "investments" | "cashflow" | "goals" | "forecast">("overview");
  const [selectedAssetTranche, setSelectedAssetTranche] = useState(0);
  const [streamIndex, setStreamIndex] = useState(0);

  // Reduced motion preference
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Detect reduced motion
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReducedMotion(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  // Live ticker rotator
  useEffect(() => {
    const tickerInterval = setInterval(() => {
      setStreamIndex((prev) => (prev + 1) % LIVE_STREAM_ITEMS.length);
    }, 4200);
    return () => clearInterval(tickerInterval);
  }, []);

  // Track scroll position of the tall container
  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const totalScrollable = rect.height - window.innerHeight;
      if (totalScrollable <= 0) return;

      const currentScroll = -rect.top;
      const clamped = Math.min(Math.max(currentScroll / totalScrollable, 0), 1);
      setTargetProgress(clamped);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Continuous animation frame loop for smooth camera lerp (Linear Interpolation)
  useEffect(() => {
    let animId: number;
    const lerpFactor = prefersReducedMotion ? 1 : 0.085;

    const updateCamera = () => {
      setScrollProgress((prev) => {
        const diff = targetProgress - prev;
        if (Math.abs(diff) < 0.0005) return targetProgress;
        return prev + diff * lerpFactor;
      });
      animId = requestAnimationFrame(updateCamera);
    };

    animId = requestAnimationFrame(updateCamera);
    return () => cancelAnimationFrame(animId);
  }, [targetProgress, prefersReducedMotion]);

  // Update active chapter based on scroll progress
  useEffect(() => {
    const idx = CHAPTERS.findIndex(
      (c) => scrollProgress >= c.range[0] && scrollProgress <= c.range[1]
    );
    if (idx !== -1 && idx !== activeChapterIndex) {
      setActiveChapterIndex(idx);
    }
  }, [scrollProgress, activeChapterIndex]);

  // Mouse Parallax for subtle 3D physical depth response
  const handleMouseMove = (e: React.MouseEvent) => {
    if (prefersReducedMotion) return;
    const { innerWidth, innerHeight } = window;
    const normX = (e.clientX / innerWidth - 0.5) * 2;
    const normY = (e.clientY / innerHeight - 0.5) * 2;
    setMousePos({ x: normX, y: normY });
  };

  // Jump smoothly to a specific chapter
  const jumpToChapter = (chapterIdx: number) => {
    if (!containerRef.current) return;
    const targetRange = CHAPTERS[chapterIdx].range;
    const midPoint = (targetRange[0] + targetRange[1]) / 2;
    const totalScrollable = containerRef.current.offsetHeight - window.innerHeight;
    const targetScrollY = containerRef.current.offsetTop + midPoint * totalScrollable;

    window.scrollTo({
      top: targetScrollY,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  };

  // Dynamic Decision Engine Math for Scene 3 & 4
  const decisionMath = useMemo(() => {
    const r = sipReturnRate / 100 / 12;
    const n = sipHorizonYears * 12;
    const existingCorpus = 3842500; // Baseline current wealth
    const futureBaseline = existingCorpus * Math.pow(1 + sipReturnRate / 100, sipHorizonYears);
    const futureSip = monthlySipInput * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);
    const totalTerminalCorpus = Math.round(futureBaseline + futureSip);
    const totalOutlay = existingCorpus + monthlySipInput * n;
    const netGains = Math.max(0, totalTerminalCorpus - totalOutlay);
    const freedomAge = Math.round(32 + Math.min(sipHorizonYears, 16) * (30000 / Math.max(monthlySipInput, 15000)));

    return {
      totalTerminalCorpus,
      totalOutlay,
      netGains,
      freedomAge: Math.max(38, Math.min(56, freedomAge)),
      corpusInCrores: (totalTerminalCorpus / 10000000).toFixed(2),
    };
  }, [monthlySipInput, sipReturnRate, sipHorizonYears]);

  // Compute Virtual Camera Coordinates
  const cameraTransform = useMemo(() => {
    if (prefersReducedMotion) {
      return "translate3d(0, 0, 0)";
    }

    // Progression variables
    const p = scrollProgress;

    // Camera travel along Z axis (zooming in and panning across scenes)
    let camZ = 0;
    let camY = 0;
    let camPitch = mousePos.y * -1.5;
    let camYaw = mousePos.x * 2.5;
    let camScale = 1;

    if (p < 0.16) {
      // Scene 1: Approaches the Financial Core
      const local = p / 0.16;
      camZ = -50 + local * 120;
      camY = local * -10;
      camScale = 0.95 + local * 0.08;
    } else if (p < 0.38) {
      // Scene 2: Enters the Understand Capital Network
      const local = (p - 0.16) / 0.22;
      camZ = 70 + Math.sin(local * Math.PI) * 110;
      camY = -10 + local * -20;
      camYaw += (local - 0.5) * -3;
      camScale = 1.03;
    } else if (p < 0.58) {
      // Scene 3: Dives into the Decision Matrix
      const local = (p - 0.38) / 0.2;
      camZ = 120 - local * 40;
      camY = -30 + local * 25;
      camPitch += 1.5;
      camScale = 1.05;
    } else if (p < 0.76) {
      // Scene 4: Banks along the 3D Trajectory Curve
      const local = (p - 0.58) / 0.18;
      camZ = 80 + local * 140;
      camY = -5 + Math.sin(local * Math.PI) * -35;
      camYaw += Math.sin(local * Math.PI * 2) * 3;
      camScale = 1.02;
    } else if (p < 0.92) {
      // Scene 5: Elevated view of the Assembled Command Center
      const local = (p - 0.76) / 0.16;
      camZ = 180 - local * 130;
      camY = -20 + local * 15;
      camScale = 1;
    } else {
      // Scene 6: Resolution into Sovereign Fermor Anchor
      const local = (p - 0.92) / 0.08;
      camZ = 50 - local * 40;
      camY = 0;
      camScale = 1 - local * 0.03;
    }

    return `translate3d(0px, ${camY}px, ${camZ}px) rotateX(${camPitch}deg) rotateY(${camYaw}deg) scale3d(${camScale}, ${camScale}, 1)`;
  }, [scrollProgress, mousePos, prefersReducedMotion]);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full bg-[#050B18] text-slate-100 min-h-[620vh]"
    >
      {/* =========================================================================
          PERSISTENT STICKY FULL-VIEWPORT WORLD CONTAINER
      ========================================================================== */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between select-none">
        {/* Background Atmospheric Space & Dynamic Radial Volumetric Lighting */}
        <div className="absolute inset-0 bg-[#050B18] pointer-events-none" />
        <div className="absolute inset-0 bg-navy-grid opacity-25 pointer-events-none" />

        {/* Dynamic Chapter Lighting Aura */}
        <div
          className="absolute inset-0 pointer-events-none transition-all duration-700 ease-out"
          style={{
            background:
              activeChapterIndex === 0
                ? "radial-gradient(circle 750px at 50% 40%, rgba(37,99,235,0.18), transparent 70%)"
                : activeChapterIndex === 1
                ? "radial-gradient(circle 800px at 40% 50%, rgba(103,232,249,0.14), transparent 70%)"
                : activeChapterIndex === 2
                ? "radial-gradient(circle 850px at 60% 45%, rgba(59,130,246,0.22), transparent 70%)"
                : activeChapterIndex === 3
                ? "radial-gradient(circle 900px at 50% 60%, rgba(52,211,153,0.16), transparent 70%)"
                : "radial-gradient(circle 800px at 50% 35%, rgba(37,99,235,0.2), transparent 70%)",
          }}
        />

        {/* Top Header HUD / Live Ticker Strip */}
        <div className="relative z-30 w-full px-4 sm:px-8 pt-3 flex items-center justify-between text-xs border-b border-[#0D2747]/70 bg-[#050B18]/80 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
            </div>
            <span className="font-mono text-[11px] uppercase tracking-wider text-slate-300 font-semibold">
              SCROLLTELLING 2.0 • FERMOR 3D ENGINE
            </span>
            <span className="hidden md:inline text-[#123A63]">•</span>
            <span className="hidden md:flex items-center gap-1.5 text-[11px] font-mono text-cyan-400/90 truncate max-w-[340px]">
              <Activity className="w-3 h-3 animate-pulse" />
              {LIVE_STREAM_ITEMS[streamIndex]}
            </span>
          </div>

          <div className="flex items-center gap-3 py-1.5 font-mono text-[11px]">
            <span className="text-slate-400">DEPTH:</span>
            <span className="text-white font-bold num-tabular">
              {Math.round(scrollProgress * 4800)}m
            </span>
            <span className="text-[#123A63]">/</span>
            <span className="text-blue-400 font-semibold uppercase">
              {CHAPTERS[activeChapterIndex].name}
            </span>
            {onOpenToolDrawer && (
              <button
                type="button"
                onClick={onOpenToolDrawer}
                className="ml-2 hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-[#0A1D35] hover:bg-[#0D2747] border border-[#123A63] text-cyan-300 text-[10px] font-sans font-semibold transition-colors"
                title="Open comprehensive calculators & diagnostic mini-audit"
              >
                <Sliders className="w-3 h-3" />
                <span>Calculator Suite</span>
              </button>
            )}
          </div>
        </div>

        {/* =========================================================================
            THE VIRTUAL 3D CAMERA WORLD STAGE
        ========================================================================== */}
        <div className="relative flex-1 w-full virtual-camera-stage flex items-center justify-center overflow-hidden">
          <div
            className="relative w-full max-w-6xl h-full flex items-center justify-center preserve-3d"
            style={{
              transform: cameraTransform,
              transition: prefersReducedMotion ? "none" : "transform 0.12s linear",
            }}
          >
            {/* ===================================================================
                SCENE 1: THE FINANCIAL CORE (Scroll 0.00 - 0.16)
            ==================================================================== */}
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center px-4 transition-all duration-700 ease-out pointer-events-auto ${
                scrollProgress < 0.19
                  ? "opacity-100 scale-100 pointer-events-auto"
                  : "opacity-0 scale-90 pointer-events-none"
              }`}
            >
              {/* Eyebrow badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#0A1D35]/90 border border-[#123A63] text-blue-300 text-xs font-mono font-medium mb-6 shadow-inner backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span>INDEPENDENT PRIVATE WEALTH OPERATING SYSTEM</span>
                <span className="text-[#123A63]">/</span>
                <span className="text-cyan-300 font-semibold">INDIA</span>
              </div>

              {/* Cinematic Headline */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-semibold text-center text-white tracking-tight leading-[1.06] max-w-4xl text-balance">
                Your money,{" "}
                <span className="bg-gradient-to-r from-blue-300 via-white to-cyan-300 bg-clip-text text-transparent">
                  finally engineered in one place.
                </span>
              </h1>

              <p className="mt-5 text-sm sm:text-base text-slate-300 max-w-2xl text-center leading-relaxed font-light">
                Consolidate your SIPs, fixed income, tax liabilities, and life milestones into a calm,
                ad-free command center. Scroll to enter the 3D financial architecture.
              </p>

              {/* The Central 3D Financial Core Artifact */}
              <div className="relative mt-8 sm:mt-12 w-64 h-64 sm:w-80 sm:h-80 flex items-center justify-center">
                {/* Luminous orbital rings */}
                <div className="absolute inset-0 rounded-full border border-blue-500/20 animate-orbit-slow" />
                <div className="absolute inset-4 rounded-full border border-cyan-400/25 border-dashed animate-orbit-reverse" />
                <div className="absolute inset-10 rounded-full border border-blue-400/30" />

                {/* Central Monogram Nucleus */}
                <div className="relative z-10 w-24 h-24 rounded-2xl bg-[#071426] border-2 border-blue-400/70 shadow-[0_0_50px_rgba(59,130,246,0.35)] flex flex-col items-center justify-center backdrop-blur-xl">
                  <span className="font-mono font-bold text-3xl text-white tracking-tighter">F</span>
                  <span className="text-[9px] font-mono uppercase tracking-widest text-cyan-300 mt-0.5">
                    CORE
                  </span>
                </div>

                {/* 4 Radiating Orbital System Nodes */}
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-lg bg-[#0A1D35]/90 border border-blue-500/40 text-[10px] font-mono text-cyan-300 shadow-md">
                  ● INVEST
                </div>
                <div className="absolute top-1/2 -right-4 -translate-y-1/2 px-3 py-1 rounded-lg bg-[#0A1D35]/90 border border-blue-500/40 text-[10px] font-mono text-blue-300 shadow-md">
                  ● CASH FLOW
                </div>
                <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 px-3 py-1 rounded-lg bg-[#0A1D35]/90 border border-blue-500/40 text-[10px] font-mono text-emerald-300 shadow-md">
                  ● FORECAST
                </div>
                <div className="absolute top-1/2 -left-4 -translate-y-1/2 px-3 py-1 rounded-lg bg-[#0A1D35]/90 border border-blue-500/40 text-[10px] font-mono text-cyan-300 shadow-md">
                  ● GOALS
                </div>
              </div>

              {/* Scroll prompt cue */}
              <div className="mt-8 flex items-center gap-2 text-xs font-mono text-slate-400 animate-bounce">
                <span>SCROLL DOWN TO DIVE INTO CAPITAL FLOWS</span>
                <span>↓</span>
              </div>
            </div>

            {/* ===================================================================
                SCENE 2: DATA ASSEMBLES — "UNDERSTAND YOUR MONEY" (Scroll 0.16 - 0.38)
            ==================================================================== */}
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center px-4 transition-all duration-700 ease-out ${
                scrollProgress >= 0.16 && scrollProgress < 0.4
                  ? "opacity-100 scale-100 pointer-events-auto"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              <div className="text-center max-w-3xl mb-8">
                <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-blue-950/80 border border-blue-600/50 text-cyan-300 uppercase">
                  CHAPTER 02 / CAPITAL METRICS
                </span>
                <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight mt-3">
                  Understand where every rupee flows.
                </h2>
                <p className="text-sm text-slate-300 font-light mt-2 max-w-xl mx-auto">
                  Fragmented accounts create hidden fee leakage. Fermor connects your monthly salary,
                  discretionary living, and direct equity tranches into a single living balance sheet.
                </p>
              </div>

              {/* 4 Physical 3D Glass Data Nodes in Flow Pipeline */}
              <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Node 1: Income */}
                <div className="p-5 rounded-2xl bg-[#071426]/90 border border-[#123A63] shadow-xl luxury-glass-interactive transform transition-all hover:-translate-y-1">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>STEP 01</span>
                    <span className="text-emerald-400">● INFLOW</span>
                  </div>
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-3">
                    Monthly Take-Home
                  </div>
                  <div className="text-2xl font-bold text-white num-tabular font-mono mt-1">
                    ₹1,75,000
                  </div>
                  <div className="text-[11px] text-slate-400 mt-2">
                    Salary + verified professional consulting
                  </div>
                </div>

                {/* Node 2: Spending */}
                <div className="p-5 rounded-2xl bg-[#071426]/90 border border-[#123A63] shadow-xl luxury-glass-interactive transform transition-all hover:-translate-y-1">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>STEP 02</span>
                    <span className="text-rose-400">● LIVING</span>
                  </div>
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-3">
                    Fixed Living & EMI
                  </div>
                  <div className="text-2xl font-bold text-white num-tabular font-mono mt-1">
                    ₹72,000
                  </div>
                  <div className="text-[11px] text-slate-400 mt-2">
                    Rent, term cover, utilities (41.1% outlay)
                  </div>
                </div>

                {/* Node 3: Systematic SIP */}
                <div className="p-5 rounded-2xl bg-[#071426]/90 border border-blue-500/50 shadow-xl luxury-glass-interactive transform transition-all hover:-translate-y-1">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>STEP 03</span>
                    <span className="text-cyan-400">● SAVINGS</span>
                  </div>
                  <div className="text-xs font-mono text-cyan-300 uppercase tracking-wider mt-3">
                    Automated SIPs
                  </div>
                  <div className="text-2xl font-bold text-white num-tabular font-mono mt-1">
                    ₹60,000
                  </div>
                  <div className="text-[11px] text-emerald-400 font-semibold mt-2">
                    34.2% Sustained Net Savings Velocity
                  </div>
                </div>

                {/* Node 4: Net Worth */}
                <div className="p-5 rounded-2xl bg-[#071426]/90 border border-[#123A63] shadow-xl luxury-glass-interactive transform transition-all hover:-translate-y-1">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-400">
                    <span>STEP 04</span>
                    <span className="text-emerald-400">● ASSETS</span>
                  </div>
                  <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mt-3">
                    Consolidated Corpus
                  </div>
                  <div className="text-2xl font-bold text-white num-tabular font-mono mt-1">
                    ₹38,42,500
                  </div>
                  <div className="text-[11px] text-cyan-400 font-semibold mt-2">
                    +14.2% Annualized XIRR
                  </div>
                </div>
              </div>

              {/* Data Flow Conduit Vector */}
              <div className="mt-8 flex items-center justify-center gap-3 text-xs font-mono text-slate-400">
                <span>INCOME</span>
                <span className="text-cyan-400 font-bold">→</span>
                <span>LIVING (41%)</span>
                <span className="text-blue-400 font-bold">→</span>
                <span>DIRECT SIP (34%)</span>
                <span className="text-emerald-400 font-bold">→</span>
                <span>NET WORTH ACCUMULATION</span>
              </div>
            </div>

            {/* ===================================================================
                SCENE 3: THE DECISION LAYER — "MAKE BETTER DECISIONS" (Scroll 0.38 - 0.58)
            ==================================================================== */}
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center px-4 transition-all duration-700 ease-out ${
                scrollProgress >= 0.38 && scrollProgress < 0.6
                  ? "opacity-100 scale-100 pointer-events-auto"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              <div className="text-center max-w-3xl mb-6">
                <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-blue-950/80 border border-blue-600/50 text-cyan-300 uppercase">
                  CHAPTER 03 / DECISION ENGINE
                </span>
                <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight mt-2">
                  Test decisions before committing rupees.
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 font-light mt-1.5">
                  Adjust the systematic allocation slider below. Watch the entire financial world physically react.
                </p>
              </div>

              {/* Interactive 3D Decision Console */}
              <div className="w-full max-w-4xl bg-[#071426]/95 border border-[#123A63] rounded-2xl p-6 sm:p-8 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.9),0_0_35px_rgba(37,99,235,0.2)] backdrop-blur-xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                  {/* Left Column: Interactive Controls */}
                  <div className="space-y-6 bg-[#050B18]/70 p-5 rounded-xl border border-[#0D2747]">
                    {/* Control 1: Monthly Systematic Outlay */}
                    <div>
                      <div className="flex justify-between text-xs font-medium text-slate-300 mb-2">
                        <span>Monthly Systematic Outlay:</span>
                        <span className="text-cyan-400 font-mono font-bold text-sm">
                          ₹{monthlySipInput.toLocaleString("en-IN")}/mo
                        </span>
                      </div>
                      <input
                        type="range"
                        min="5000"
                        max="100000"
                        step="2500"
                        value={monthlySipInput}
                        onChange={(e) => setMonthlySipInput(Number(e.target.value))}
                        className="w-full h-2 bg-[#0A1D35] rounded-lg cursor-pointer"
                        aria-label="Monthly Systematic Outlay"
                      />
                      <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
                        <span>₹5,000</span>
                        <span>₹50,000</span>
                        <span>₹1,00,000</span>
                      </div>
                    </div>

                    {/* Control 2: Horizon Years */}
                    <div>
                      <div className="flex justify-between text-xs font-medium text-slate-300 mb-2">
                        <span>Horizon Duration:</span>
                        <span className="text-blue-400 font-mono font-bold text-sm">
                          {sipHorizonYears} Years
                        </span>
                      </div>
                      <input
                        type="range"
                        min="5"
                        max="25"
                        step="1"
                        value={sipHorizonYears}
                        onChange={(e) => setSipHorizonYears(Number(e.target.value))}
                        className="w-full h-2 bg-[#0A1D35] rounded-lg cursor-pointer"
                        aria-label="Horizon Duration"
                      />
                      <div className="flex justify-between text-[10px] font-mono text-slate-500 mt-1">
                        <span>5 Years</span>
                        <span>15 Years</span>
                        <span>25 Years</span>
                      </div>
                    </div>

                    {/* Quick Preset Buttons */}
                    <div className="pt-2 flex items-center gap-2 text-xs font-mono">
                      <span className="text-slate-400">Presets:</span>
                      <button
                        type="button"
                        onClick={() => { setMonthlySipInput(15000); setSipHorizonYears(10); }}
                        className="px-2.5 py-1 bg-[#0A1D35] hover:bg-[#0D2747] border border-[#123A63] text-slate-300 rounded text-[11px]"
                      >
                        Conservative
                      </button>
                      <button
                        type="button"
                        onClick={() => { setMonthlySipInput(35000); setSipHorizonYears(15); }}
                        className="px-2.5 py-1 bg-blue-600/40 hover:bg-blue-600/60 border border-blue-500/50 text-cyan-300 rounded text-[11px]"
                      >
                        Balanced
                      </button>
                      <button
                        type="button"
                        onClick={() => { setMonthlySipInput(60000); setSipHorizonYears(20); }}
                        className="px-2.5 py-1 bg-[#0A1D35] hover:bg-[#0D2747] border border-[#123A63] text-slate-300 rounded text-[11px]"
                      >
                        Aggressive
                      </button>
                    </div>
                  </div>

                  {/* Right Column: World Reaction Display */}
                  <div className="p-6 bg-[#0A1D35]/80 border border-[#123A63] rounded-xl space-y-4">
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                      Simulated Future Valuation
                    </div>
                    <div className="text-3xl sm:text-5xl font-extrabold text-white num-tabular font-mono tracking-tight">
                      ₹{decisionMath.corpusInCrores} Crores
                    </div>
                    <div className="text-xs text-slate-400 font-mono">
                      (₹{decisionMath.totalTerminalCorpus.toLocaleString("en-IN")})
                    </div>

                    <div className="grid grid-cols-2 gap-3 pt-3 border-t border-[#123A63]">
                      <div>
                        <div className="text-[10px] font-mono text-slate-400 uppercase">Capital Invested</div>
                        <div className="text-sm font-bold text-white num-tabular font-mono">
                          ₹{(decisionMath.totalOutlay / 10000000).toFixed(2)} Cr
                        </div>
                      </div>
                      <div>
                        <div className="text-[10px] font-mono text-emerald-400 uppercase">Compounding Gain</div>
                        <div className="text-sm font-bold text-emerald-400 num-tabular font-mono">
                          +₹{(decisionMath.netGains / 10000000).toFixed(2)} Cr
                        </div>
                      </div>
                    </div>

                    <div className="p-3 bg-[#050B18] rounded-lg border border-blue-500/30 text-xs flex items-center justify-between text-slate-300">
                      <span>Early Freedom Milestone (FIRE):</span>
                      <span className="text-cyan-300 font-mono font-bold">Age ~{decisionMath.freedomAge}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ===================================================================
                SCENE 4: THE 3D GROWTH TRAJECTORY (Scroll 0.58 - 0.76)
            ==================================================================== */}
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center px-4 transition-all duration-700 ease-out ${
                scrollProgress >= 0.58 && scrollProgress < 0.78
                  ? "opacity-100 scale-100 pointer-events-auto"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              <div className="text-center max-w-3xl mb-6">
                <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-blue-950/80 border border-blue-600/50 text-cyan-300 uppercase">
                  CHAPTER 04 / COMPILATION CURVE
                </span>
                <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight mt-2">
                  The physical 3D growth curve.
                </h2>
                <p className="text-sm text-slate-300 font-light mt-1.5 max-w-xl mx-auto">
                  Compounding is non-linear. The steepness expands dramatically past Year 7.
                  Follow the trajectory as it unlocks historical milestones through time.
                </p>
              </div>

              {/* Luminous Spatial Growth Trajectory */}
              <div className="w-full max-w-4xl bg-[#071426]/90 border border-[#123A63] rounded-2xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
                {/* SVG 3D Trajectory Ribbon */}
                <div className="relative h-48 sm:h-56 w-full">
                  <svg className="w-full h-full overflow-visible" viewBox="0 0 650 180" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="trajGrad" x1="0" y1="0" x2="1" y2="0">
                        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.8" />
                        <stop offset="50%" stopColor="#67E8F9" stopOpacity="0.9" />
                        <stop offset="100%" stopColor="#34D399" stopOpacity="1" />
                      </linearGradient>
                      <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.3" />
                        <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>

                    {/* Area under curve */}
                    <path
                      d="M 50,150 Q 200,140 320,100 T 600,20 L 600,165 L 50,165 Z"
                      fill="url(#areaGrad)"
                    />

                    {/* Trajectory Spine */}
                    <path
                      d="M 50,150 Q 200,140 320,100 T 600,20"
                      fill="none"
                      stroke="url(#trajGrad)"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />

                    {/* Milestone 1: Today */}
                    <circle cx="50" cy="150" r="5" fill="#3B82F6" stroke="#050B18" strokeWidth="2" />
                    {/* Milestone 2: 3 Years */}
                    <circle cx="190" cy="135" r="5" fill="#60A5FA" stroke="#050B18" strokeWidth="2" />
                    {/* Milestone 3: 7 Years */}
                    <circle cx="340" cy="95" r="5" fill="#67E8F9" stroke="#050B18" strokeWidth="2" />
                    {/* Milestone 4: 15 Years */}
                    <circle cx="600" cy="20" r="7" fill="#34D399" stroke="#050B18" strokeWidth="2" />
                  </svg>
                </div>

                {/* Spatial Milestone Cards */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-4 text-xs font-mono">
                  <div className="p-3 bg-[#0A1D35]/80 rounded-xl border border-[#123A63]">
                    <div className="text-slate-400 text-[10px]">CURRENT BASELINE</div>
                    <div className="text-base font-bold text-white mt-1">₹38.4 Lakhs</div>
                    <div className="text-slate-400 text-[10px] mt-0.5">Year 0 (Today)</div>
                  </div>

                  <div className="p-3 bg-[#0A1D35]/80 rounded-xl border border-[#123A63]">
                    <div className="text-blue-400 text-[10px]">MOMENTUM ACCELERATION</div>
                    <div className="text-base font-bold text-white mt-1">₹68.5 Lakhs</div>
                    <div className="text-slate-400 text-[10px] mt-0.5">Year 3 (+78%)</div>
                  </div>

                  <div className="p-3 bg-[#0A1D35]/80 rounded-xl border border-blue-500/50">
                    <div className="text-cyan-300 text-[10px]">POWER-LAW INFLECTION</div>
                    <div className="text-base font-bold text-white mt-1">₹1.42 Crores</div>
                    <div className="text-slate-400 text-[10px] mt-0.5">Year 7 (Compounding)</div>
                  </div>

                  <div className="p-3 bg-[#0A1D35]/80 rounded-xl border border-emerald-500/60">
                    <div className="text-emerald-400 text-[10px]">HORIZON MATURITY</div>
                    <div className="text-base font-bold text-emerald-400 mt-1">
                      ₹{decisionMath.corpusInCrores} Cr
                    </div>
                    <div className="text-slate-400 text-[10px] mt-0.5">Year {sipHorizonYears} Target</div>
                  </div>
                </div>
              </div>
            </div>

            {/* ===================================================================
                SCENE 5: THE ASSEMBLED COMMAND CENTER (Scroll 0.76 - 0.92)
            ==================================================================== */}
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center px-4 transition-all duration-700 ease-out ${
                scrollProgress >= 0.76 && scrollProgress < 0.93
                  ? "opacity-100 scale-100 pointer-events-auto"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              <div className="text-center max-w-3xl mb-4">
                <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-blue-950/80 border border-blue-600/50 text-cyan-300 uppercase">
                  CHAPTER 05 / FULL FERMOR CONSOLE
                </span>
                <h2 className="text-2xl sm:text-4xl font-semibold text-white tracking-tight mt-1.5">
                  The complete financial operating system.
                </h2>
              </div>

              {/* Master 5-Tab Command Console */}
              <div className="w-full max-w-5xl bg-[#071426]/95 border border-[#123A63] rounded-2xl shadow-2xl overflow-hidden backdrop-blur-xl">
                {/* Console Bar with Tabs */}
                <div className="bg-[#050B18] border-b border-[#0D2747] px-4 py-2.5 sm:px-6 flex flex-wrap items-center justify-between gap-3 text-xs">
                  <div className="flex items-center gap-2.5 font-mono text-white font-semibold">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                    <span>FERMOR CONSOLE v3.0</span>
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
                      const isActive = terminalTab === tab.key;
                      return (
                        <button
                          key={tab.key}
                          type="button"
                          onClick={() => setTerminalTab(tab.key as any)}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-md font-mono text-[11px] font-semibold transition-all ${
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
                </div>

                {/* Tab Content Panes */}
                <div className="p-5 sm:p-6 space-y-4">
                  {terminalTab === "overview" && (
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-xs">
                      <div className="p-3.5 bg-[#0A1D35]/70 rounded-xl border border-[#123A63]">
                        <span className="text-[10px] font-mono text-slate-400">NET WORTH</span>
                        <div className="text-xl font-bold text-white mt-1 num-tabular">₹38,42,500</div>
                        <div className="text-emerald-400 text-[10px] font-semibold mt-1">+14.2% XIRR</div>
                      </div>
                      <div className="p-3.5 bg-[#0A1D35]/70 rounded-xl border border-[#123A63]">
                        <span className="text-[10px] font-mono text-slate-400">EQUITY RATIO</span>
                        <div className="text-xl font-bold text-white mt-1 num-tabular">67.0%</div>
                        <div className="text-slate-300 text-[10px] mt-1">Direct MFs + Equity</div>
                      </div>
                      <div className="p-3.5 bg-[#0A1D35]/70 rounded-xl border border-[#123A63]">
                        <span className="text-[10px] font-mono text-slate-400">FIXED DEBT</span>
                        <div className="text-xl font-bold text-white mt-1 num-tabular">₹9,75,000</div>
                        <div className="text-slate-300 text-[10px] mt-1">PPF + Sovereign Gold</div>
                      </div>
                      <div className="p-3.5 bg-[#0A1D35]/70 rounded-xl border border-[#123A63]">
                        <span className="text-[10px] font-mono text-slate-400">LIQUID RUNWAY</span>
                        <div className="text-xl font-bold text-white mt-1 num-tabular">6.2 Months</div>
                        <div className="text-cyan-400 text-[10px] mt-1">Optimal Buffer</div>
                      </div>
                    </div>
                  )}

                  {terminalTab === "investments" && (
                    <div className="space-y-3 text-xs">
                      <div className="flex justify-between font-mono text-slate-300">
                        <span>Diversification Spectrum</span>
                        <span className="text-cyan-400">Click Tranche to Inspect</span>
                      </div>
                      <div className="h-4 w-full bg-[#050B18] rounded-md overflow-hidden flex border border-[#123A63]">
                        <button type="button" onClick={() => setSelectedAssetTranche(0)} className="h-full bg-blue-600 hover:opacity-90" style={{ width: "55%" }} />
                        <button type="button" onClick={() => setSelectedAssetTranche(1)} className="h-full bg-cyan-600 hover:opacity-90" style={{ width: "25%" }} />
                        <button type="button" onClick={() => setSelectedAssetTranche(2)} className="h-full bg-emerald-600 hover:opacity-90" style={{ width: "12%" }} />
                        <button type="button" onClick={() => setSelectedAssetTranche(3)} className="h-full bg-amber-500 hover:opacity-90" style={{ width: "8%" }} />
                      </div>
                      <div className="p-3 bg-[#050B18] rounded-xl border border-[#0D2747] text-slate-300 flex justify-between">
                        <span>Selected Tranche: <strong className="text-white">{DEMO_PORTFOLIO[selectedAssetTranche].category}</strong></span>
                        <span className="font-mono text-emerald-400">Zero Commission Direct Plan</span>
                      </div>
                    </div>
                  )}

                  {terminalTab === "cashflow" && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                      <div className="p-3.5 bg-[#0A1D35]/80 rounded-xl border border-[#123A63]">
                        <div className="text-slate-400 font-mono text-[10px]">MONTHLY TAKE-HOME</div>
                        <div className="text-xl font-bold text-white mt-1">₹1,75,000</div>
                      </div>
                      <div className="p-3.5 bg-[#0A1D35]/80 rounded-xl border border-[#123A63]">
                        <div className="text-slate-400 font-mono text-[10px]">FIXED LIVING & EMI</div>
                        <div className="text-xl font-bold text-white mt-1">₹72,000</div>
                      </div>
                      <div className="p-3.5 bg-[#0A1D35]/80 rounded-xl border border-blue-500/50">
                        <div className="text-cyan-300 font-mono text-[10px]">AUTOMATED DIRECT SIPS</div>
                        <div className="text-xl font-bold text-emerald-400 mt-1">₹60,000</div>
                      </div>
                    </div>
                  )}

                  {terminalTab === "goals" && (
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                      <div className="p-3.5 bg-[#0A1D35]/80 rounded-xl border border-[#123A63]">
                        <div className="text-emerald-400 font-mono text-[10px]">TARGET: 2027</div>
                        <div className="text-sm font-semibold text-white mt-1">Home Down Payment</div>
                        <div className="w-full bg-[#050B18] h-1.5 rounded-full mt-2 overflow-hidden">
                          <div className="bg-emerald-500 h-full" style={{ width: "80%" }}></div>
                        </div>
                      </div>
                      <div className="p-3.5 bg-[#0A1D35]/80 rounded-xl border border-[#123A63]">
                        <div className="text-blue-400 font-mono text-[10px]">TARGET: 2034</div>
                        <div className="text-sm font-semibold text-white mt-1">Higher Education</div>
                        <div className="w-full bg-[#050B18] h-1.5 rounded-full mt-2 overflow-hidden">
                          <div className="bg-blue-500 h-full" style={{ width: "41%" }}></div>
                        </div>
                      </div>
                      <div className="p-3.5 bg-[#0A1D35]/80 rounded-xl border border-cyan-500/50">
                        <div className="text-cyan-300 font-mono text-[10px]">TARGET: AGE 48</div>
                        <div className="text-sm font-semibold text-white mt-1">Early FIRE Freedom</div>
                        <div className="w-full bg-[#050B18] h-1.5 rounded-full mt-2 overflow-hidden">
                          <div className="bg-cyan-400 h-full" style={{ width: "62%" }}></div>
                        </div>
                      </div>
                    </div>
                  )}

                  {terminalTab === "forecast" && (
                    <div className="p-4 bg-[#050B18] rounded-xl border border-[#0D2747] flex flex-wrap items-center justify-between gap-3 text-xs">
                      <div>
                        <div className="text-slate-400 font-mono">15-YEAR COMPOUNDING FORECAST</div>
                        <div className="text-2xl font-bold text-emerald-400 num-tabular font-mono mt-1">
                          ₹{decisionMath.corpusInCrores} Crores
                        </div>
                      </div>
                      <div className="text-slate-400 font-light max-w-sm">
                        At ₹{monthlySipInput.toLocaleString("en-IN")}/mo at {sipReturnRate}% CAGR.
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* ===================================================================
                SCENE 6: RESOLUTION & SOVEREIGN ACTION (Scroll 0.92 - 1.00)
            ==================================================================== */}
            <div
              className={`absolute inset-0 flex flex-col items-center justify-center px-4 transition-all duration-700 ease-out ${
                scrollProgress >= 0.92
                  ? "opacity-100 scale-100 pointer-events-auto"
                  : "opacity-0 scale-95 pointer-events-none"
              }`}
            >
              <div className="text-center max-w-3xl space-y-4">
                {/* Fermor Brand Anchor Monogram Loop */}
                <div className="w-16 h-16 mx-auto rounded-2xl bg-[#071426] border-2 border-blue-400/80 shadow-[0_0_40px_rgba(59,130,246,0.35)] flex items-center justify-center">
                  <span className="font-mono font-bold text-3xl text-white">F</span>
                </div>

                <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight leading-tight">
                  Independent wealth sovereignty.
                </h2>

                <p className="text-sm sm:text-base text-slate-300 font-light max-w-xl mx-auto leading-relaxed">
                  No commission bias. No investor credentials collected. Zero tracking cookies.
                  Launch your deterministic financial journey on Fermor.
                </p>

                <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <a
                    href="#calculators"
                    onClick={(e) => {
                      if (onOpenToolDrawer) {
                        e.preventDefault();
                        onOpenToolDrawer();
                      }
                    }}
                    className="px-8 py-3.5 rounded-xl bg-blue-600 text-white font-medium text-sm hover:bg-blue-500 active:bg-blue-700 shadow-xl shadow-blue-900/40 border border-blue-400/40 flex items-center gap-2 group"
                  >
                    <span>Launch Comprehensive Calculators</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </a>

                  <a
                    href="#health-check"
                    onClick={(e) => {
                      if (onOpenToolDrawer) {
                        e.preventDefault();
                        onOpenToolDrawer();
                      }
                    }}
                    className="px-7 py-3.5 rounded-xl bg-[#0A1D35] hover:bg-[#0D2747] border border-[#123A63] text-slate-200 text-sm font-medium transition-colors"
                  >
                    <span>Run 60s Health Audit</span>
                  </a>
                </div>

                <div className="pt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    100% Client-Side Privacy
                  </span>
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                    Direct Plans Exclusively
                  </span>
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-400" />
                    Built for Indian Investors
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* =========================================================================
            PERSISTENT RIGHT-SIDE CINEMATIC TRAJECTORY HUD GAUGE
        ========================================================================== */}
        <div className="hidden lg:flex fixed right-6 top-1/2 -translate-y-1/2 z-40 flex-col items-center gap-4 py-4 px-3 rounded-2xl bg-[#071426]/85 border border-[#123A63]/80 backdrop-blur-md shadow-2xl">
          <div className="text-[10px] font-mono text-slate-400 uppercase tracking-widest writing-mode-vertical">
            JOURNEY
          </div>

          {/* Vertical trajectory rail */}
          <div className="relative w-1.5 h-64 bg-[#0A1D35] rounded-full overflow-hidden">
            <div
              className="w-full bg-gradient-to-b from-blue-500 via-cyan-400 to-emerald-400 rounded-full transition-all duration-150"
              style={{ height: `${Math.round(scrollProgress * 100)}%` }}
            />
          </div>

          {/* Interactive Chapter Milestone Buttons */}
          <div className="flex flex-col gap-2">
            {CHAPTERS.map((ch, idx) => {
              const isActive = activeChapterIndex === idx;
              return (
                <button
                  key={ch.id}
                  type="button"
                  onClick={() => jumpToChapter(idx)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 relative group flex items-center justify-center ${
                    isActive
                      ? "bg-cyan-400 ring-4 ring-cyan-500/20 scale-125"
                      : "bg-[#123A63] hover:bg-blue-400"
                  }`}
                  aria-label={`Jump to ${ch.name}`}
                >
                  {/* Tooltip on hover */}
                  <span className="absolute right-6 px-2.5 py-1 rounded bg-[#0A1D35] border border-[#123A63] text-white text-[10px] font-mono whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
                    {ch.name}
                  </span>
                </button>
              );
            })}
          </div>

          <span className="text-[9px] font-mono text-cyan-300">
            {Math.round(scrollProgress * 100)}%
          </span>
        </div>

        {/* Bottom Status / Navigation Bar */}
        <div className="relative z-30 w-full px-6 py-2.5 flex items-center justify-between text-xs border-t border-[#0D2747]/80 bg-[#050B18]/80 backdrop-blur-md font-mono text-slate-400">
          <div className="flex items-center gap-2">
            <span className="text-slate-500">SCROLL DOWN TO PROGRESS CAMERA</span>
            <span className="text-cyan-400">↓</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <span>CAMERA YAW: {Math.round(mousePos.x * 2.5)}°</span>
            <span>PERSPECTIVE: 1200px</span>
          </div>
        </div>
      </div>
    </div>
  );
}
