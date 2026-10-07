import Navbar from "@/components/Navbar";
import LivingDataTicker from "@/components/LivingDataTicker";
import NarrativeRail from "@/components/NarrativeRail";
import Hero from "@/components/Hero";
import FinancialProblem from "@/components/FinancialProblem";
import UnderstandSection from "@/components/UnderstandSection";
import ActSection from "@/components/ActSection";
import GrowSection from "@/components/GrowSection";
import IntelligenceSection from "@/components/IntelligenceSection";
import TrustSection from "@/components/TrustSection";
import FinalCtaSection from "@/components/FinalCtaSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-on-surface flex flex-col w-full selection:bg-primary-container selection:text-white relative">
      <Navbar />
      <div className="pt-16 sm:pt-20">
        <LivingDataTicker />
      </div>
      <NarrativeRail />
      <Hero />
      <FinancialProblem />
      <UnderstandSection />
      <ActSection />
      <GrowSection />
      <IntelligenceSection />
      <TrustSection />
      <FinalCtaSection />
      <Footer />
    </main>
  );
}
