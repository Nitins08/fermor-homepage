import React from "react";
import { MarketTicker } from "@/components/MarketTicker";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { HealthCheckDiagnostic } from "@/components/HealthCheckDiagnostic";
import { UnderstandSection } from "@/components/UnderstandSection";
import { ActSection } from "@/components/ActSection";
import { GrowSection } from "@/components/GrowSection";
import { CalculatorLab } from "@/components/CalculatorLab";
import { AskFermorSandbox } from "@/components/AskFermorSandbox";
import { WalletIntelligence } from "@/components/WalletIntelligence";
import { TrustEthics } from "@/components/TrustEthics";
import { FAQSection } from "@/components/FAQSection";
import { FinalCTA } from "@/components/FinalCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-[#050B18] text-slate-100 selection:bg-blue-600 selection:text-white">
      {/* 1. Live Indian Market Micro Ticker */}
      <MarketTicker />

      {/* 2. Primary Navigation Bar with Brand Assembly Reveal */}
      <Navbar />

      <main className="flex-1">
        {/* 3. Hero Section with Unified 3D Financial Command Console */}
        <Hero />

        {/* 4. 60-Second Financial Health Diagnostic Mini-Audit */}
        <HealthCheckDiagnostic />

        {/* 5. Pillar 1: Understand (Tax Regimes, Fee Breakdown) */}
        <UnderstandSection />

        {/* 6. Pillar 2: Act (Direct Funds, Smart Allocation, Low Expense Ratios) */}
        <ActSection />

        {/* 7. Pillar 3: Grow (Step-Up SIP Compounding Simulation & Horizon Forecast) */}
        <GrowSection />

        {/* 8. Comprehensive Interactive In-Browser Calculator Lab */}
        <CalculatorLab />

        {/* 9. Ask Fermor: Natural Language Financial Scenario Intelligence */}
        <AskFermorSandbox />

        {/* 10. News That Impacts Your Wallet: Editorial Insights */}
        <WalletIntelligence />

        {/* 11. Ethical Foundations: Zero Ads, Client-Side Privacy, Direct Plans */}
        <TrustEthics />

        {/* 12. Clarifications & Disclosures: Expandable FAQ */}
        <FAQSection />

        {/* 13. Conversion Command Center Final Action */}
        <FinalCTA />
      </main>

      {/* 14. Comprehensive Sitemap & Legal Disclaimers */}
      <Footer />
    </div>
  );
}
