"use client";

import { useEffect, useState } from "react";

const STAGES = [
  { id: "hero", label: "00 / ECOSYSTEM", title: "Living Canvas" },
  { id: "problem", label: "01 / ANOMALY", title: "Fragmentation" },
  { id: "understand", label: "02 / REVELATION", title: "Understand" },
  { id: "act", label: "03 / LEVERAGE", title: "Act" },
  { id: "grow", label: "04 / TRAJECTORY", title: "Grow" },
  { id: "intelligence", label: "05 / AUTONOMOUS", title: "Intelligence" },
  { id: "trust", label: "06 / RIGOR", title: "Trust" },
];

export default function NarrativeRail() {
  const [activeStage, setActiveStage] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight * 0.35;
      for (const stage of STAGES) {
        const el = document.getElementById(stage.id);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveStage(stage.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <aside className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden 2xl:flex flex-col gap-3 pointer-events-auto">
      <div className="bg-white/80 backdrop-blur-md p-3 rounded-lg border border-black/[0.06] shadow-[0_4px_20px_-2px_rgba(11,15,21,0.04)] flex flex-col gap-2.5">
        <div className="font-mono text-[9px] uppercase tracking-wider text-[#9CA3AF] px-2 pb-1 border-b border-black/[0.04] font-semibold">
          Narrative Spine
        </div>
        {STAGES.map((s, idx) => {
          const isActive = activeStage === s.id;
          return (
            <a
              key={s.id}
              href={`#${s.id}`}
              className={`group flex items-center gap-3 px-2 py-1 rounded transition-all text-left ${
                isActive ? "bg-[#F4F4F1] text-primary" : "text-[#4B5563] hover:text-[#111827]"
              }`}
            >
              <span
                className={`w-1.5 h-1.5 rounded-full transition-all ${
                  isActive ? "bg-[#10B981] scale-125" : "bg-black/20 group-hover:bg-black/50"
                }`}
              />
              <div className="flex flex-col">
                <span className="font-mono text-[9px] uppercase tracking-wider font-semibold opacity-80 leading-none">
                  {s.label}
                </span>
                <span className={`font-serif text-xs leading-tight ${isActive ? "font-medium text-primary" : "text-[#4B5563]"}`}>
                  {s.title}
                </span>
              </div>
            </a>
          );
        })}
      </div>
    </aside>
  );
}
