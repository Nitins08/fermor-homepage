"use client";

import { useState } from "react";
import { Sliders, ArrowUpRight, CheckCircle2, AlertCircle } from "lucide-react";

export default function UnderstandSection() {
  const [horizon, setHorizon] = useState<"30D" | "90D" | "1Y">("30D");
  const [sweepActive, setSweepActive] = useState(true);

  const tableData = {
    "30D": [
      {
        asset: "Treasury Yield Sweeps (4-Wk T-Bills)",
        custodian: "Fermor Institutional Custody",
        amount: "$285,000.00",
        yield: "5.32%",
        status: "Optimized",
        statusType: "success",
      },
      {
        asset: "Primary Operating Checking",
        custodian: "Silicon Valley Bridge",
        amount: "$142,000.00",
        yield: "0.05%",
        status: "Idle Drag",
        statusType: "warning",
      },
      {
        asset: "Global Core Equity Allocation",
        custodian: "Interactive Brokers Prime",
        amount: "$614,500.00",
        yield: "9.84%",
        status: "Rebalanced",
        statusType: "neutral",
      },
      {
        asset: "Direct Seed & Series A LP Interests",
        custodian: "AngelList / Carta Ledger",
        amount: "$380,000.00",
        yield: "Unrealized",
        status: "Active LP",
        statusType: "neutral",
      },
    ],
    "90D": [
      {
        asset: "Treasury Yield Sweeps (4-Wk T-Bills)",
        custodian: "Fermor Institutional Custody",
        amount: "$310,000.00",
        yield: "5.30%",
        status: "Optimized",
        statusType: "success",
      },
      {
        asset: "Primary Operating Checking",
        custodian: "Silicon Valley Bridge",
        amount: "$120,000.00",
        yield: "0.05%",
        status: "Idle Drag",
        statusType: "warning",
      },
      {
        asset: "Global Core Equity Allocation",
        custodian: "Interactive Brokers Prime",
        amount: "$645,000.00",
        yield: "11.2%",
        status: "Rebalanced",
        statusType: "neutral",
      },
      {
        asset: "Direct Seed & Series A LP Interests",
        custodian: "AngelList / Carta Ledger",
        amount: "$380,000.00",
        yield: "Unrealized",
        status: "Active LP",
        statusType: "neutral",
      },
    ],
    "1Y": [
      {
        asset: "Treasury Yield Sweeps (4-Wk T-Bills)",
        custodian: "Fermor Institutional Custody",
        amount: "$420,000.00",
        yield: "5.26%",
        status: "Optimized",
        statusType: "success",
      },
      {
        asset: "Primary Operating Checking",
        custodian: "Silicon Valley Bridge",
        amount: "$95,000.00",
        yield: "0.05%",
        status: "Minimized",
        statusType: "success",
      },
      {
        asset: "Global Core Equity Allocation",
        custodian: "Interactive Brokers Prime",
        amount: "$720,000.00",
        yield: "14.8%",
        status: "Rebalanced",
        statusType: "neutral",
      },
      {
        asset: "Direct Seed & Series A LP Interests",
        custodian: "AngelList / Carta Ledger",
        amount: "$380,000.00",
        yield: "Unrealized",
        status: "Active LP",
        statusType: "neutral",
      },
    ],
  };

  return (
    <section id="understand" className="w-full py-24 px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto border-t border-black/[0.06]">
      {/* Editorial Header */}
      <div className="max-w-3xl mb-14">
        <div className="font-mono text-xs text-[#006C49] font-semibold uppercase tracking-wider mb-3">
          02 / 04 — REVELATION
        </div>
        <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary font-normal leading-[1.15] mb-4">
          See the whole picture. Without the cognitive clutter.
        </h2>
        <p className="font-sans text-sm sm:text-base text-[#4B5563] leading-relaxed">
          Not an administrative ledger, but a high-fidelity architectural vantage point. Every inflow, burn velocity, and idle penny is indexed into real-time deployable intelligence.
        </p>
      </div>

      {/* Modular Dashboard Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Main Analytical Ledger Table */}
        <div className="lg:col-span-8 bg-white rounded-lg border border-black/[0.08] shadow-sm p-5 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-black/[0.06] mb-6">
            <div>
              <span className="font-mono text-[11px] uppercase text-[#4B5563] block font-medium">
                Analytical Ledger
              </span>
              <h3 className="font-sans text-lg text-primary font-semibold">
                Active Capital Deployments & Flows
              </h3>
            </div>

            {/* Horizon Filter Tabs */}
            <div className="inline-flex p-1 bg-[#F4F4F1] rounded border border-black/[0.05] font-mono text-xs">
              {(["30D", "90D", "1Y"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setHorizon(tab)}
                  className={`px-3 py-1 rounded transition-all font-medium ${
                    horizon === tab
                      ? "bg-white text-primary font-semibold shadow-sm"
                      : "text-[#4B5563] hover:text-[#111827]"
                  }`}
                >
                  {tab === "30D" ? "30D Velocity" : tab === "90D" ? "90D Rolling" : "1Y Macro"}
                </button>
              ))}
            </div>
          </div>

          {/* Table */}
          <div className="overflow-x-auto">
            <table className="w-full text-left font-sans text-xs sm:text-sm">
              <thead>
                <tr className="text-[#4B5563] font-mono text-[11px] uppercase border-b border-black/[0.06]">
                  <th className="pb-3 font-medium">Asset / Vessel</th>
                  <th className="pb-3 font-medium hidden md:table-cell">Custodian</th>
                  <th className="pb-3 font-medium text-right">Holding</th>
                  <th className="pb-3 font-medium text-right">Effective Yield</th>
                  <th className="pb-3 font-medium text-right">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-black/[0.04]">
                {tableData[horizon].map((row) => (
                  <tr
                    key={row.asset}
                    className="h-14 hover:bg-[#FBFBFA] transition-colors"
                  >
                    <td className="font-medium text-[#111827] pr-4">
                      <div className="flex items-center gap-2">
                        <span
                          className={`w-2 h-2 rounded-full flex-shrink-0 ${
                            row.statusType === "success"
                              ? "bg-[#10B981]"
                              : row.statusType === "warning"
                              ? "bg-[#D97706]"
                              : "bg-primary"
                          }`}
                        />
                        <span className="truncate max-w-[220px] sm:max-w-none">{row.asset}</span>
                      </div>
                    </td>
                    <td className="text-[#4B5563] hidden md:table-cell pr-4 truncate">
                      {row.custodian}
                    </td>
                    <td className="font-mono text-right font-medium text-[#111827] pr-4 whitespace-nowrap">
                      {row.amount}
                    </td>
                    <td
                      className={`font-mono text-right font-medium pr-4 whitespace-nowrap ${
                        row.statusType === "warning" ? "text-[#92400E]" : "text-[#006C49]"
                      }`}
                    >
                      {row.yield}
                    </td>
                    <td className="text-right">
                      <span
                        className={`inline-flex px-2 py-0.5 rounded font-mono text-[10px] font-medium ${
                          row.statusType === "success"
                            ? "bg-[#ECFDF5] text-[#065F46] border border-[#10B981]/20"
                            : row.statusType === "warning"
                            ? "bg-[#FFFBEB] text-[#78350F] border border-[#D97706]/20 font-semibold"
                            : "bg-[#F4F4F1] text-[#4B5563]"
                        }`}
                      >
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Strategic Insight Rail (Right Column) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          {/* Liquidity Ratio Card */}
          <div className="bg-white p-6 rounded-lg border border-black/[0.08] shadow-sm">
            <span className="font-mono text-[11px] uppercase tracking-wider text-[#4B5563] block mb-1 font-medium">
              True Liquidity Ratio
            </span>
            <div className="flex items-baseline justify-between mb-3">
              <span className="font-mono text-3xl text-primary font-semibold">
                4.8x Coverage
              </span>
              <span className="font-mono text-xs text-[#006C49] font-medium bg-[#ECFDF5] px-2 py-0.5 rounded">
                Surplus ($188k)
              </span>
            </div>
            <p className="font-sans text-xs text-[#4B5563] leading-relaxed mb-4">
              Calculated net of 6-month burn commitment, pending quarterly tax distributions ($24,000), and venture capital calls.
            </p>
            {/* Allocation Ratio Bar */}
            <div className="w-full bg-[#ECECE8] h-2 rounded-full overflow-hidden flex">
              <div className="bg-primary h-full w-[65%]" title="Operating 65%" />
              <div className="bg-[#10B981] h-full w-[20%]" title="Reserve 20%" />
              <div className="bg-[#D97706] h-full w-[15%]" title="Tax Escrow 15%" />
            </div>
            <div className="flex justify-between items-center text-[10px] text-[#4B5563] font-mono mt-2">
              <span>Operating (65%)</span>
              <span>Reserve (20%)</span>
              <span>Tax (15%)</span>
            </div>
          </div>

          {/* Automated Savings Sweep Engine Card */}
          <div className="bg-white p-6 rounded-lg border border-black/[0.08] shadow-sm flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#ECFDF5] text-[#065F46] font-mono text-[10px] font-medium mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981]" />
                <span>Proactive Optimization</span>
              </div>
              <h4 className="font-sans text-base text-primary font-semibold mb-2">
                Automated Savings Sweep
              </h4>
              <p className="font-sans text-xs text-[#4B5563] leading-relaxed">
                Currently sweeping <span className="font-semibold text-[#111827]">$18,400 monthly</span> across cash excess into overnight Treasury repos at 5.28%.
              </p>
            </div>

            <div className="mt-5 pt-4 border-t border-black/[0.06] flex items-center justify-between">
              <span className="font-mono text-xs text-[#006C49] font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#10B981]" />
                {sweepActive ? "Active Sweep Engine" : "Engine Paused"}
              </span>
              <button
                onClick={() => setSweepActive(!sweepActive)}
                className="p-1.5 hover:bg-[#F4F4F1] rounded text-[#4B5563] transition-colors"
                title="Toggle Sweep Engine"
              >
                <Sliders className="w-4 h-4 text-[#006C49]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
