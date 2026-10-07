"use client";

import { useEffect, useState } from "react";
import { Activity, ShieldCheck, ArrowUpRight } from "lucide-react";

export default function LivingDataTicker() {
  const [timeStr, setTimeStr] = useState("");
  const [liveYieldAccumulated, setLiveYieldAccumulated] = useState(4120.5);

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      setTimeStr(
        now.toLocaleTimeString("en-US", {
          hour12: false,
          timeZone: "America/New_York",
        }) + " EDT"
      );
    };
    updateClock();
    const clockInterval = setInterval(updateClock, 1000);

    // Subtle micro-yield accumulation simulation
    const yieldInterval = setInterval(() => {
      setLiveYieldAccumulated((prev) => +(prev + 0.04).toFixed(2));
    }, 2400);

    return () => {
      clearInterval(clockInterval);
      clearInterval(yieldInterval);
    };
  }, []);

  return (
    <div className="w-full bg-[#F4F4F1] border-b border-black/[0.05] py-1.5 px-4 sm:px-6 lg:px-12 text-[#4B5563] font-mono text-[11px] overflow-hidden">
      <div className="max-w-[1440px] mx-auto flex items-center justify-between gap-4 overflow-x-auto whitespace-nowrap scrollbar-none">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5 text-primary font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
            <span>FERMOR NETWORK SYNC: LIVE</span>
          </div>
          <span className="text-black/20">|</span>
          <div>
            <span>SYSTEM TIME: </span>
            <span className="text-[#111827] font-semibold">{timeStr || "14:02:18 EDT"}</span>
          </div>
          <span className="text-black/20 hidden sm:inline">|</span>
          <div className="hidden sm:flex items-center gap-1">
            <span>24H ACCUMULATED YIELD: </span>
            <span className="text-[#006C49] font-semibold tabular-nums">
              +${liveYieldAccumulated.toLocaleString("en-US", { minimumFractionDigits: 2 })}
            </span>
          </div>
        </div>

        <div className="flex items-center gap-4 text-[10px]">
          <span className="hidden md:inline">FED FUNDS INDEX: 5.33% • SOFR SPREAD: +12bps</span>
          <span className="text-black/20 hidden md:inline">|</span>
          <div className="flex items-center gap-1 text-[#065F46] bg-[#ECFDF5] px-2 py-0.5 rounded">
            <ShieldCheck className="w-3 h-3 text-[#10B981]" />
            <span>PFOF: ZERO (100% FIDUCIARY)</span>
          </div>
        </div>
      </div>
    </div>
  );
}
