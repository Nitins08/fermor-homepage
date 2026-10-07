import Navbar from "@/components/Navbar";
import LivingDataTicker from "@/components/LivingDataTicker";
import NarrativeRail, { NarrativeRailMobile } from "@/components/NarrativeRail";
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

      {/* Full-width Hero Viewport */}
      <Hero />

      {/* Structured Storytelling Container:
          Guarantees dedicated horizontal column space for the Narrative Spine.
          Prevents any overlap with headings, charts, or cards. */}
      <section className="relative w-full border-t border-black/[0.06] bg-[#FBFBFA]">
        {/* Mobile / Tablet Horizontal Navigation Bar (Sticky beneath header) */}
        <div className="lg:hidden sticky top-16 sm:top-20 z-30 w-full">
          <NarrativeRailMobile />
        </div>

        <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-10 xl:gap-14 items-start relative">
            {/* Desktop Narrative Spine Column:
                Sticky within the storytelling section, stops before Final CTA */}
            <aside className="hidden lg:block w-52 xl:w-60 shrink-0 sticky top-28 pt-8 pb-16 z-20">
              <NarrativeRail />
            </aside>

            {/* Main Storytelling Content Column:
                Reserves full remaining width with zero possibility of overlap */}
            <div className="flex-1 min-w-0 w-full space-y-0">
              <FinancialProblem />
              <UnderstandSection />
              <ActSection />
              <GrowSection />
              <IntelligenceSection />
              <TrustSection />
            </div>
          </div>
        </div>
      </section>

      {/* Resolution & Invitation */}
      <FinalCtaSection />
      <Footer />
    </main>
  );
}
