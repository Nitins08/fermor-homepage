"use client";

import React from "react";
import { ShieldCheck, Lock, EyeOff, Scale } from "lucide-react";

export function TrustEthics() {
  const pillars = [
    {
      icon: EyeOff,
      title: "Zero Ads. Zero Sponsored Products.",
      description:
        "We never sell your screen real estate to loan sharks, predatory personal loan providers, or high-commission insurance agents. Our tool designs stay completely uncompromised.",
    },
    {
      icon: Lock,
      title: "100% Client-Side Privacy",
      description:
        "Every single calculation on Fermor — from home loan prepayments to multi-decade SIP projections — runs locally in your personal browser engine. No uninvited database storage.",
    },
    {
      icon: ShieldCheck,
      title: "Direct Mutual Plans Exclusively",
      description:
        "We never route you to Regular mutual fund plans that quietly shave off 0.75% - 1.25% in recurring distributor trailing fees every year. 100% of your gains compound for you.",
    },
    {
      icon: Scale,
      title: "Educational Non-Advisory Clarity",
      description:
        "We don't sell get-rich-quick tips or speculative derivatives. We equip thoughtful Indian families and professionals with institutional math so they make self-reliant decisions.",
    },
  ];

  return (
    <section className="py-20 bg-[#FAFAF9] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-200 text-slate-800 text-xs font-semibold mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-700" />
            <span>ETHICAL ARCHITECTURE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
            Built on trust, not transaction fees.
          </h2>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            Most financial websites in India make money by pushing high-interest personal loans or
            selling user contact details to insurance telemarketers. Fermor operates on the opposite
            philosophy.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-6 bg-white rounded-xl border border-slate-200 shadow-xs space-y-3"
              >
                <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200/70 flex items-center justify-center text-emerald-800">
                  <Icon className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-slate-900 leading-snug">{pillar.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{pillar.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
