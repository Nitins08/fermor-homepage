"use client";

import React, { useState } from "react";
import { FAQS_DATA } from "@/data/mockData";
import { HelpCircle, ChevronDown } from "lucide-react";

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-[#F7FAF8] border-b border-[#DDE8E1]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[#DDE8E1] text-[#0B3D2E] text-xs font-mono font-medium mb-4 shadow-xs">
            <HelpCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>08 / CLARITY & REGULATORY DISCLOSURES</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-[#10251B] tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-[#4B6354] text-sm sm:text-base font-light leading-relaxed">
            Transparent answers regarding client-side calculation execution, complete privacy guarantees, and our independent mandate.
          </p>
        </div>

        <div className="space-y-3.5">
          {FAQS_DATA.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-[#DDE8E1] bg-white overflow-hidden transition-all shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-medium text-[#10251B] hover:text-[#0B3D2E] transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-semibold">{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-emerald-700 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-[#4B6354] leading-relaxed border-t border-[#DDE8E1] bg-[#F2F7F4]/50 font-light">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
