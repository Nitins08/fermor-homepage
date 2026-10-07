"use client";

import React, { useState } from "react";
import { X, Sliders, Activity, Calculator, PieChart, ShieldCheck, Newspaper, ArrowRight } from "lucide-react";
import { CalculatorLab } from "@/components/CalculatorLab";
import { HealthCheckDiagnostic } from "@/components/HealthCheckDiagnostic";
import { UnderstandSection } from "@/components/UnderstandSection";
import { AskFermorSandbox } from "@/components/AskFermorSandbox";
import { WalletIntelligence } from "@/components/WalletIntelligence";

interface ToolsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: "calculators" | "health" | "tax" | "scenarios" | "policy";
}

export function ToolsDrawer({ isOpen, onClose, initialTab = "calculators" }: ToolsDrawerProps) {
  const [activeTab, setActiveTab] = useState<"calculators" | "health" | "tax" | "scenarios" | "policy">(initialTab);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex justify-end bg-[#050B18]/80 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl h-full bg-[#050B18] border-l border-[#123A63] shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-right duration-300">
        {/* Drawer Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-[#071426] border-b border-[#0D2747] text-white">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-[#0A1D35] border border-[#123A63] flex items-center justify-center text-cyan-400 font-mono font-bold text-sm">
              F
            </div>
            <div>
              <h3 className="font-semibold text-base leading-tight">Fermor Institutional Tools Suite</h3>
              <p className="text-[11px] text-slate-400 font-mono">
                100% Client-Side Privacy • Deterministic Mathematical Execution
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg bg-[#0A1D35] hover:bg-[#0D2747] border border-[#123A63] text-slate-300 hover:text-white transition-colors"
            aria-label="Close tools suite"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-2 px-6 py-2.5 bg-[#071426]/60 border-b border-[#0D2747] overflow-x-auto no-scrollbar font-mono text-xs">
          {[
            { id: "calculators", label: "Calculator Lab", icon: Calculator },
            { id: "health", label: "Health Diagnostic", icon: Activity },
            { id: "tax", label: "Tax Regime Comparator", icon: PieChart },
            { id: "scenarios", label: "Scenario Sandbox", icon: Sliders },
            { id: "policy", label: "Wallet Policy Desk", icon: Newspaper },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 px-3.5 py-1.5 rounded-lg transition-all shrink-0 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-xs font-semibold"
                    : "text-slate-400 hover:text-slate-200 hover:bg-[#0A1D35]"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        {/* Scrollable Tool Body */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-8 bg-[#050B18]">
          {activeTab === "calculators" && <CalculatorLab />}
          {activeTab === "health" && <HealthCheckDiagnostic />}
          {activeTab === "tax" && <UnderstandSection />}
          {activeTab === "scenarios" && <AskFermorSandbox />}
          {activeTab === "policy" && <WalletIntelligence />}
        </div>

        {/* Drawer Footer */}
        <div className="px-6 py-3 bg-[#071426] border-t border-[#0D2747] flex items-center justify-between text-[11px] font-mono text-slate-400">
          <span>Client-side execution verified • Zero server storage</span>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors font-sans font-semibold text-xs"
          >
            Return to 3D Journey
          </button>
        </div>
      </div>
    </div>
  );
}
