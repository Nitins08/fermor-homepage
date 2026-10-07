"use client";

import React from "react";
import { ShieldCheck, Lock, EyeOff, Scale } from "lucide-react";

export function TrustEthics() {
  const pillars = [
    {
      icon: EyeOff,
      title: "Zero Ads. Zero Sponsored Pitches.",
      description:
        "We never sell screen real estate to loan brokers, speculative crypto exchanges, or commission-hungry agents. The interface remains pure and uncompromised.",
    },
    {
      icon: Lock,
      title: "100% Client-Side Privacy",
      description:
        "Every single calculation on Fermor — from home loan prepayments to multi-decade SIP projections — runs locally in your personal browser memory. Zero server storage.",
    },
    {
      icon: ShieldCheck,
      title: "Direct Mutual Funds Exclusively",
      description:
        "We never route you to Regular mutual fund plans that shave off 0.75% - 1.25% in recurring distributor trailing commissions every year. 100% of your compounding stays yours.",
    },
    {
      icon: Scale,
      title: "Educational Non-Advisory Clarity",
      description:
        "We don't sell get-rich-quick tips or derivatives gambles. We equip thoughtful Indian families and professionals with institutional math so they make sovereign decisions.",
    },
  ];

  return (
    <section className="py-24 bg-white border-b border-[#DDE8E1]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F2F7F4] border border-[#DDE8E1] text-[#0B3D2E] text-xs font-mono font-medium mb-4">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>07 / ETHICAL INTEGRITY & PRIVACY CHARTER</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-[#10251B] tracking-tight leading-tight">
            Engineered on trust, not transaction churn.
          </h2>
          <p className="mt-4 text-[#4B6354] text-base font-light leading-relaxed">
            Most financial websites in India make money by pushing high-interest personal loans or
            selling user contact details to insurance telemarketers. Fermor operates on strict client-first principles.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-6 bg-[#F7FAF8] rounded-2xl border border-[#DDE8E1] hover:border-emerald-500/50 hover:bg-[#F2F7F4] transition-all shadow-xs space-y-4"
              >
                <div className="w-10 h-10 rounded-xl bg-white border border-[#DDE8E1] flex items-center justify-center text-emerald-700 shadow-xs">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-semibold text-[#10251B] leading-snug">{pillar.title}</h3>
                <p className="text-xs text-[#4B6354] leading-relaxed font-light">{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
