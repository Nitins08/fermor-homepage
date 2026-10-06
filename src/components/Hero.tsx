"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  Shield,
  TrendingUp,
  PieChart,
  Target,
  Wallet,
  CheckCircle2,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { DEMO_PORTFOLIO } from "@/data/mockData";

export function Hero() {
  const [activeTab, setActiveTab] = useState<"wealth" | "cashflow" | "goals">("wealth");
  const [selectedAssetIndex, setSelectedAssetIndex] = useState(0);

  return (
    <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden border-b border-slate-200/70">
      {/* Subtle background ambient pattern */}
      <div className="absolute inset-0 bg-grid-subtle opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Eyebrow & Headline */}
        <div className="max-w-3xl mx-auto text-center mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/70 text-emerald-800 text-xs font-semibold mb-6 shadow-xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
            <span>Independent Financial Decision Platform</span>
            <span className="text-emerald-300">/</span>
            <span className="text-emerald-700 font-medium">India</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold text-slate-900 tracking-tight leading-[1.1] text-balance">
            Your money, <br className="hidden sm:inline" />
            <span className="text-slate-900">finally in one place.</span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Consolidate your SIPs, fixed income, tax liabilities, and life milestones into a calm,
            ad-free command center. Test financial decisions with client-side mathematics before
            committing a single rupee.
          </p>

          {/* Primary Action Row */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <a
              href="#calculators"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-slate-900 text-white font-medium text-sm hover:bg-slate-800 transition-all shadow-sm hover:shadow group"
            >
              <span>Explore In-Browser Calculators</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <a
              href="#health-check"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-white border border-slate-300 text-slate-700 font-medium text-sm hover:bg-slate-50 hover:text-slate-900 transition-colors shadow-xs"
            >
              <Sparkles className="w-4 h-4 text-emerald-600" />
              <span>Run 60s Financial Health Audit</span>
            </a>
          </div>

          {/* Micro trust indicators */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500 font-medium">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Zero ads or product sales pitches
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              100% Client-side calculation privacy
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Built specifically for Indian tax & investment rules
            </span>
          </div>
        </div>

        {/* HERO VISUAL: Live Interactive Financial Command Center */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-white rounded-xl border border-slate-200/90 shadow-xl overflow-hidden transition-all">
            {/* Top Command Center Bar */}
            <div className="bg-slate-900 text-white px-4 py-3 sm:px-6 flex flex-wrap items-center justify-between gap-3 border-b border-slate-800">
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400"></div>
                <div className="text-xs sm:text-sm font-semibold tracking-wide flex items-center gap-2">
                  <span>FERMOR CONSOLE</span>
                  <span className="text-slate-500 font-mono text-xs">v2.4</span>
                </div>
                <span className="hidden sm:inline-block text-[11px] px-2 py-0.5 bg-slate-800 text-slate-300 rounded font-mono">
                  Simulated Portfolio Preview
                </span>
              </div>

              {/* View Switcher Tabs */}
              <div className="flex items-center bg-slate-800 p-0.5 rounded-lg text-xs" role="tablist">
                <button
                  type="button"
                  onClick={() => setActiveTab("wealth")}
                  className={`px-3 py-1.5 rounded-md font-medium transition-all ${
                    activeTab === "wealth"
                      ? "bg-emerald-600 text-white shadow-xs"
                      : "text-slate-300 hover:text-white"
                  }`}
                  role="tab"
                  aria-selected={activeTab === "wealth"}
                >
                  <span className="flex items-center gap-1.5">
                    <PieChart className="w-3 h-3" />
                    Net Worth
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("cashflow")}
                  className={`px-3 py-1.5 rounded-md font-medium transition-all ${
                    activeTab === "cashflow"
                      ? "bg-emerald-600 text-white shadow-xs"
                      : "text-slate-300 hover:text-white"
                  }`}
                  role="tab"
                  aria-selected={activeTab === "cashflow"}
                >
                  <span className="flex items-center gap-1.5">
                    <Wallet className="w-3 h-3" />
                    Cashflow & SIP
                  </span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab("goals")}
                  className={`px-3 py-1.5 rounded-md font-medium transition-all ${
                    activeTab === "goals"
                      ? "bg-emerald-600 text-white shadow-xs"
                      : "text-slate-300 hover:text-white"
                  }`}
                  role="tab"
                  aria-selected={activeTab === "goals"}
                >
                  <span className="flex items-center gap-1.5">
                    <Target className="w-3 h-3" />
                    Life Goals
                  </span>
                </button>
              </div>
            </div>

            {/* TAB CONTENT 1: WEALTH & NET WORTH */}
            {activeTab === "wealth" && (
              <div className="p-4 sm:p-6 lg:p-8 space-y-6">
                {/* Metric Summary Ribbon */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                  <div className="p-4 bg-slate-50/80 rounded-lg border border-slate-200/70">
                    <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Total Net Worth
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-slate-900 mt-1 num-tabular">
                      ₹38,42,500
                    </div>
                    <div className="text-xs text-emerald-600 font-semibold mt-1 flex items-center gap-1">
                      <TrendingUp className="w-3 h-3" />
                      +14.2% 1Y Return
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50/80 rounded-lg border border-slate-200/70">
                    <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Equity Allocation
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-slate-900 mt-1 num-tabular">
                      67.0%
                    </div>
                    <div className="text-xs text-slate-500 mt-1 font-medium">
                      Mutual Funds + Direct
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50/80 rounded-lg border border-slate-200/70">
                    <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Fixed Income & PPF
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-slate-900 mt-1 num-tabular">
                      ₹9,75,000
                    </div>
                    <div className="text-xs text-slate-500 mt-1 font-medium">
                      Risk buffer (25%)
                    </div>
                  </div>

                  <div className="p-4 bg-slate-50/80 rounded-lg border border-slate-200/70">
                    <div className="text-xs font-medium text-slate-500 uppercase tracking-wider">
                      Emergency Runway
                    </div>
                    <div className="text-xl sm:text-2xl font-bold text-slate-900 mt-1 num-tabular">
                      6.2 Months
                    </div>
                    <div className="text-xs text-emerald-600 font-semibold mt-1">
                      Optimal resilience
                    </div>
                  </div>
                </div>

                {/* Allocation Visual Bar */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs font-semibold text-slate-600">
                    <span>Portfolio Diversification Structure</span>
                    <span className="text-slate-400">Click a tranche to inspect underlying holdings</span>
                  </div>
                  <div className="h-4 w-full bg-slate-100 rounded-md overflow-hidden flex shadow-inner border border-slate-200/60 cursor-pointer">
                    <button
                      type="button"
                      onClick={() => setSelectedAssetIndex(0)}
                      className="h-full bg-emerald-600 hover:opacity-90 transition-opacity"
                      style={{ width: "55%" }}
                      title="Equity Mutual Funds: 55%"
                      aria-label="Select Equity Mutual Funds"
                    />
                    <button
                      type="button"
                      onClick={() => setSelectedAssetIndex(1)}
                      className="h-full bg-blue-600 hover:opacity-90 transition-opacity"
                      style={{ width: "25%" }}
                      title="Fixed Income & PPF: 25%"
                      aria-label="Select Fixed Income and PPF"
                    />
                    <button
                      type="button"
                      onClick={() => setSelectedAssetIndex(2)}
                      className="h-full bg-indigo-600 hover:opacity-90 transition-opacity"
                      style={{ width: "12%" }}
                      title="Direct Equities & ETFs: 12%"
                      aria-label="Select Direct Equities and ETFs"
                    />
                    <button
                      type="button"
                      onClick={() => setSelectedAssetIndex(3)}
                      className="h-full bg-amber-500 hover:opacity-90 transition-opacity"
                      style={{ width: "8%" }}
                      title="Emergency Liquid: 8%"
                      aria-label="Select Emergency Liquid"
                    />
                  </div>
                </div>

                {/* Interactive Tranche Inspector */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
                  {DEMO_PORTFOLIO.map((asset, index) => {
                    const isSelected = selectedAssetIndex === index;
                    return (
                      <div
                        key={asset.category}
                        onClick={() => setSelectedAssetIndex(index)}
                        className={`p-3.5 rounded-lg border text-left cursor-pointer transition-all ${
                          isSelected
                            ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                            : "bg-white text-slate-800 border-slate-200 hover:border-slate-300 hover:bg-slate-50/60"
                        }`}
                      >
                        <div className="flex items-center justify-between text-xs font-semibold">
                          <span
                            className={
                              isSelected ? "text-emerald-300" : "text-emerald-700"
                            }
                          >
                            {asset.allocationPercent}% Share
                          </span>
                          <span
                            className={`text-[11px] font-mono ${
                              isSelected ? "text-slate-300" : "text-slate-500"
                            }`}
                          >
                            {asset.returnRate}
                          </span>
                        </div>
                        <div
                          className={`text-sm font-bold mt-1 truncate ${
                            isSelected ? "text-white" : "text-slate-900"
                          }`}
                        >
                          {asset.category}
                        </div>
                        <div
                          className={`text-xs mt-1 num-tabular font-medium ${
                            isSelected ? "text-slate-300" : "text-slate-600"
                          }`}
                        >
                          {asset.value}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Detailed holdings inspection for the selected category */}
                <div className="bg-slate-50 rounded-lg p-4 border border-slate-200 text-xs">
                  <div className="flex items-center justify-between mb-2 pb-2 border-b border-slate-200">
                    <span className="font-semibold text-slate-700">
                      Sample Holdings in {DEMO_PORTFOLIO[selectedAssetIndex].category}:
                    </span>
                    <span className="text-emerald-700 font-mono font-medium">
                      Direct Plans • Zero Intermediary Expense Leak
                    </span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                    {DEMO_PORTFOLIO[selectedAssetIndex].items.map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-2 p-2 bg-white rounded border border-slate-200/70 font-medium text-slate-700"
                      >
                        <ChevronRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT 2: CASHFLOW & SIP */}
            {activeTab === "cashflow" && (
              <div className="p-4 sm:p-6 lg:p-8 space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 bg-emerald-50/70 rounded-lg border border-emerald-200/80">
                    <div className="text-xs font-semibold text-emerald-800 uppercase tracking-wider">
                      Monthly Inflow (Post-Tax)
                    </div>
                    <div className="text-2xl font-bold text-slate-900 mt-1 num-tabular">
                      ₹1,75,000
                    </div>
                    <div className="text-xs text-slate-500 mt-1">Salary & Consulting</div>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                    <div className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
                      Fixed Living Expenses & EMI
                    </div>
                    <div className="text-2xl font-bold text-slate-900 mt-1 num-tabular">
                      ₹72,000
                    </div>
                    <div className="text-xs text-slate-500 mt-1">Rent, Utilities, Insurance</div>
                  </div>

                  <div className="p-4 bg-blue-50/70 rounded-lg border border-blue-200/80">
                    <div className="text-xs font-semibold text-blue-800 uppercase tracking-wider">
                      Automated Monthly SIPs
                    </div>
                    <div className="text-2xl font-bold text-slate-900 mt-1 num-tabular">
                      ₹60,000
                    </div>
                    <div className="text-xs text-blue-700 font-medium mt-1">
                      34.2% Sustained Savings Rate
                    </div>
                  </div>
                </div>

                <div className="p-4 rounded-lg bg-slate-50 border border-slate-200">
                  <h3 className="text-sm font-semibold text-slate-900 mb-3">
                    Active Monthly Investment Direct debits:
                  </h3>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between p-2.5 bg-white rounded border border-slate-200">
                      <div>
                        <span className="font-semibold text-slate-800">
                          UTI Nifty 50 Index Fund Direct-Growth
                        </span>
                        <span className="ml-2 text-slate-400 font-mono">1st of Month</span>
                      </div>
                      <span className="font-bold text-slate-900 num-tabular">₹25,000/mo</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 bg-white rounded border border-slate-200">
                      <div>
                        <span className="font-semibold text-slate-800">
                          Parag Parikh Flexi Cap Fund Direct-Growth
                        </span>
                        <span className="ml-2 text-slate-400 font-mono">5th of Month</span>
                      </div>
                      <span className="font-bold text-slate-900 num-tabular">₹20,000/mo</span>
                    </div>
                    <div className="flex items-center justify-between p-2.5 bg-white rounded border border-slate-200">
                      <div>
                        <span className="font-semibold text-slate-800">
                          Public Provident Fund (PPF) Statutory Deposit
                        </span>
                        <span className="ml-2 text-slate-400 font-mono">10th of Month</span>
                      </div>
                      <span className="font-bold text-slate-900 num-tabular">₹15,000/mo</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* TAB CONTENT 3: LIFE GOALS */}
            {activeTab === "goals" && (
              <div className="p-4 sm:p-6 lg:p-8 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div className="p-4 bg-white rounded-lg border border-slate-200 space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="text-xs font-semibold text-emerald-700 uppercase">
                          Target: 2027
                        </div>
                        <div className="text-sm font-bold text-slate-900">
                          Home Down Payment
                        </div>
                      </div>
                      <span className="text-xs font-bold px-2 py-0.5 bg-emerald-100 text-emerald-800 rounded">
                        80%
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-emerald-600 h-full rounded-full" style={{ width: "80%" }}></div>
                    </div>
                    <div className="flex justify-between text-xs text-slate-500 font-medium">
                      <span>Saved: ₹24,00,000</span>
                      <span>Target: ₹30,00,000</span>
                    </div>
                  </div>

                  <div className="p-4 bg-white rounded-lg border border-slate-200 space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="text-xs font-semibold text-blue-700 uppercase">
                          Target: 2034
                        </div>
                        <div className="text-sm font-bold text-slate-900">
                          Higher Education Corpus
                        </div>
                      </div>
                      <span className="text-xs font-bold px-2 py-0.5 bg-blue-100 text-blue-800 rounded">
                        41%
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-blue-600 h-full rounded-full" style={{ width: "41%" }}></div>
                    </div>
                    <div className="flex justify-between text-xs text-slate-500 font-medium">
                      <span>Saved: ₹18,50,000</span>
                      <span>Target: ₹45,00,000</span>
                    </div>
                  </div>

                  <div className="p-4 bg-white rounded-lg border border-slate-200 space-y-3">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="text-xs font-semibold text-purple-700 uppercase">
                          Target: Age 48
                        </div>
                        <div className="text-sm font-bold text-slate-900">
                          Financial Freedom (FIRE)
                        </div>
                      </div>
                      <span className="text-xs font-bold px-2 py-0.5 bg-purple-100 text-purple-800 rounded">
                        On Pace
                      </span>
                    </div>
                    <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-purple-600 h-full rounded-full" style={{ width: "52%" }}></div>
                    </div>
                    <div className="flex justify-between text-xs text-slate-500 font-medium">
                      <span>Projected: ₹3.84 Cr</span>
                      <span>Required: ₹3.50 Cr</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 bg-emerald-50/60 rounded-md border border-emerald-200/70 text-xs text-emerald-900 flex items-center justify-between">
                  <span className="font-medium">
                    All goals adapt dynamically to inflation adjustments (assumed 6.0% annual CPI).
                  </span>
                  <a href="#calculators" className="font-semibold underline hover:text-emerald-700">
                    Adjust Parameters
                  </a>
                </div>
              </div>
            )}

            {/* Bottom Status / Privacy Bar */}
            <div className="bg-slate-50 border-t border-slate-200 px-4 py-2.5 sm:px-6 flex flex-wrap items-center justify-between text-[11px] text-slate-500">
              <div className="flex items-center gap-1.5 font-medium">
                <Shield className="w-3.5 h-3.5 text-slate-400" />
                <span>Zero Account Requirement for Modeling • 100% Client-Side Privacy</span>
              </div>
              <div className="font-mono text-slate-400">
                INR Format Standard (Lakhs & Crores)
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
