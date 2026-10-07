"use client";

import React, { useState } from "react";
import { MarketTicker } from "@/components/MarketTicker";
import { Navbar } from "@/components/Navbar";
import { ScrolltellingWorld } from "@/components/ScrolltellingWorld";
import { ToolsDrawer } from "@/components/ToolsDrawer";
import { TrustEthics } from "@/components/TrustEthics";
import { FAQSection } from "@/components/FAQSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  const [toolsDrawerOpen, setToolsDrawerOpen] = useState(false);
  const [toolsDrawerTab, setToolsDrawerTab] = useState<"calculators" | "health" | "tax" | "scenarios" | "policy">("calculators");

  const handleOpenTools = (tab: "calculators" | "health" | "tax" | "scenarios" | "policy" = "calculators") => {
    setToolsDrawerTab(tab);
    setToolsDrawerOpen(true);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-[#10251B] selection:bg-emerald-100 selection:text-emerald-900">
      {/* 1. Real-time Indian Market Ticker (NSE / BSE / Gold / VIX) */}
      <MarketTicker />

      {/* 2. Primary Navigation Bar with Brand Assembly Reveal & Quick Jump */}
      <Navbar onOpenTools={handleOpenTools} />

      {/* 3. Master Scrolltelling 2.0 World (The 6-Stage Continuous 3D Experience) */}
      <main className="flex-1 w-full relative">
        <ScrolltellingWorld onOpenToolDrawer={() => handleOpenTools("calculators")} />

        {/* 4. Ethical Foundations & Privacy Charter (Resolving the Experience) */}
        <TrustEthics />

        {/* 5. Statutory & Governance Disclosures / FAQ */}
        <FAQSection />
      </main>

      {/* 6. Legal Notice, SEBI Disclaimer & Comprehensive Footer */}
      <Footer />

      {/* 7. Comprehensive Institutional Tools Drawer (Calculator Lab, Diagnostic, Tax Comparator, Sandbox) */}
      <ToolsDrawer
        isOpen={toolsDrawerOpen}
        onClose={() => setToolsDrawerOpen(false)}
        initialTab={toolsDrawerTab}
      />
    </div>
  );
}
