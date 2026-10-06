"use client";

import React from "react";
import { MARKET_TICKER_DATA } from "@/data/mockData";
import { TrendingUp, TrendingDown, Clock, Shield } from "lucide-react";

export function MarketTicker() {
  return (
    <div className="w-full bg-[#050B18] text-slate-300 border-b border-[#0D2747] text-xs py-2 px-4 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-3">
        {/* Market Status Indicator */}
        <div className="flex items-center gap-2.5 text-slate-400 font-medium shrink-0">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
          </span>
          <span className="tracking-wider text-[11px] uppercase font-mono font-semibold text-slate-200">
            National Stock Exchange • BSE
          </span>
          <span className="text-[#123A63] font-bold">•</span>
          <span className="hidden sm:flex items-center gap-1 text-[11px] text-slate-400 font-mono">
            <Clock className="w-3 h-3 text-blue-400" />
            IST 09:15 - 15:30 Synced
          </span>
        </div>

        {/* Indices list */}
        <div className="flex items-center gap-5 sm:gap-7 overflow-x-auto no-scrollbar py-0.5 font-mono text-[11px]">
          {MARKET_TICKER_DATA.map((item) => (
            <div key={item.symbol} className="flex items-center gap-2 shrink-0">
              <span className="text-slate-400 font-medium">{item.symbol}</span>
              <span className="text-white font-semibold num-tabular">{item.price}</span>
              <span
                className={`flex items-center text-[10px] font-semibold ${
                  item.isPositive ? "text-emerald-400" : "text-rose-400"
                }`}
              >
                {item.isPositive ? (
                  <TrendingUp className="w-2.5 h-2.5 inline mr-0.5" />
                ) : (
                  <TrendingDown className="w-2.5 h-2.5 inline mr-0.5" />
                )}
                {item.change}
              </span>
            </div>
          ))}
        </div>

        {/* Client-side badge */}
        <div className="hidden lg:flex items-center gap-1.5 text-[11px] text-slate-400 font-mono">
          <Shield className="w-3 h-3 text-cyan-400" />
          <span>Local Simulation Active</span>
        </div>
      </div>
    </div>
  );
}
