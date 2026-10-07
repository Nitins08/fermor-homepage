"use client";

import { useEffect, useState } from "react";
import { ArrowUp, ChevronRight } from "lucide-react";

export const NARRATIVE_STAGES = [
  { id: "problem", number: "01", label: "THE ANOMALY", title: "Fragmentation" },
  { id: "understand", number: "02", label: "REVELATION", title: "Understand" },
  { id: "act", number: "03", label: "LEVERAGE", title: "Act" },
  { id: "grow", number: "04", label: "TRAJECTORY", title: "Grow" },
  { id: "intelligence", number: "05", label: "AUTONOMOUS", title: "Intelligence" },
  { id: "trust", number: "06", label: "SOVEREIGN", title: "Trust & Proof" },
];

export default function NarrativeRail() {
  const [activeStage, setActiveStage] = useState("problem");

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight * 0.35;
      for (let i = NARRATIVE_STAGES.length - 1; i >= 0; i--) {
        const el = document.getElementById(NARRATIVE_STAGES[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerPoint) {
            setActiveStage(NARRATIVE_STAGES[i].id);
            return;
          }
        }
      }
      setActiveStage(NARRATIVE_STAGES[0].id);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToStage = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 90;
      const elementTop = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementTop - navOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full flex flex-col gap-3 select-none">
      {/* Return to Hero top link */}
      <button
        onClick={() => {
          const heroEl = document.getElementById("hero");
          if (heroEl) {
            heroEl.scrollIntoView({ behavior: "smooth" });
          } else {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }
        }}
        className="flex items-center gap-2 px-3 py-1.5 rounded text-[11px] font-mono text-[#4B5563] hover:text-primary transition-colors group w-fit"
      >
        <ArrowUp className="w-3 h-3 group-hover:-translate-y-0.5 transition-transform" />
        <span className="uppercase tracking-wider">Top: Canvas</span>
      </button>

      {/* Narrative Spine Card */}
      <div className="bg-white/90 backdrop-blur-md p-3.5 rounded-xl border border-black/[0.08] shadow-[0_4px_24px_-4px_rgba(11,15,21,0.06)] flex flex-col gap-2">
        <div className="flex items-center justify-between px-2 pb-2 border-b border-black/[0.06]">
          <span className="font-mono text-[10px] uppercase tracking-wider text-[#9CA3AF] font-semibold">
            Narrative Spine
          </span>
          <span className="font-mono text-[9px] text-[#006C49] font-medium bg-[#ECFDF5] px-1.5 py-0.5 rounded">
            Live Flow
          </span>
        </div>

        <nav className="flex flex-col space-y-1">
          {NARRATIVE_STAGES.map((s) => {
            const isActive = activeStage === s.id;
            return (
              <button
                key={s.id}
                onClick={() => scrollToStage(s.id)}
                className={`group flex items-center gap-3 px-2.5 py-2 rounded-lg transition-all text-left w-full ${
                  isActive
                    ? "bg-[#F4F4F1] text-primary shadow-xs"
                    : "text-[#4B5563] hover:bg-[#FBFBFA] hover:text-[#111827]"
                }`}
              >
                {/* Active Indicator Verdant Pill */}
                <span
                  className={`w-1.5 h-1.5 rounded-full transition-all shrink-0 ${
                    isActive
                      ? "bg-[#10B981] scale-125 shadow-[0_0_8px_rgba(16,185,129,0.8)]"
                      : "bg-black/20 group-hover:bg-black/50"
                  }`}
                />

                <div className="flex flex-col min-w-0">
                  <span className="font-mono text-[9px] uppercase tracking-wider font-semibold opacity-80 leading-none">
                    {s.number} / {s.label}
                  </span>
                  <span
                    className={`font-serif text-[13px] leading-tight truncate mt-0.5 ${
                      isActive ? "font-medium text-primary" : "text-[#4B5563]"
                    }`}
                  >
                    {s.title}
                  </span>
                </div>
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

export function NarrativeRailMobile() {
  const [activeStage, setActiveStage] = useState("problem");

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight * 0.35;
      for (let i = NARRATIVE_STAGES.length - 1; i >= 0; i--) {
        const el = document.getElementById(NARRATIVE_STAGES[i].id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= triggerPoint) {
            setActiveStage(NARRATIVE_STAGES[i].id);
            return;
          }
        }
      }
      setActiveStage(NARRATIVE_STAGES[0].id);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToStage = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const navOffset = 90;
      const elementTop = el.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementTop - navOffset,
        behavior: "smooth",
      });
    }
  };

  const currentObj = NARRATIVE_STAGES.find((s) => s.id === activeStage) || NARRATIVE_STAGES[0];

  return (
    <div className="w-full bg-[#FBFBFA]/95 backdrop-blur-md border-y border-black/[0.08] shadow-xs px-4 py-2">
      {/* Top micro status */}
      <div className="flex items-center justify-between mb-1.5 font-mono text-[10px]">
        <div className="flex items-center gap-1.5 text-primary font-medium">
          <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
          <span className="uppercase">CHAPTER: {currentObj.number} {currentObj.title}</span>
        </div>
        <span className="text-[#9CA3AF]">Tap to Jump ↓</span>
      </div>

      {/* Horizontal pill navigation */}
      <div className="flex items-center gap-1.5 overflow-x-auto scrollbar-none py-0.5">
        {NARRATIVE_STAGES.map((s) => {
          const isActive = activeStage === s.id;
          return (
            <button
              key={s.id}
              onClick={() => scrollToStage(s.id)}
              className={`shrink-0 px-2.5 py-1 rounded-full font-mono text-[10px] transition-all flex items-center gap-1 whitespace-nowrap ${
                isActive
                  ? "bg-primary text-white font-semibold shadow-xs"
                  : "bg-white text-[#4B5563] border border-black/[0.06] hover:text-[#111827]"
              }`}
            >
              <span>{s.number}</span>
              <span>{s.title}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
