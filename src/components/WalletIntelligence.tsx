"use client";

import React, { useState } from "react";
import { EDITORIAL_ARTICLES, NewsArticle } from "@/data/mockData";
import { Newspaper, Clock, ArrowUpRight, CheckCircle2 } from "lucide-react";

export function WalletIntelligence() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeArticle, setActiveArticle] = useState<NewsArticle | null>(null);

  const categories = ["All", "Market Strategy", "Regulation & Banking", "Income Tax", "Financial Planning"];

  const filtered =
    selectedCategory === "All"
      ? EDITORIAL_ARTICLES
      : EDITORIAL_ARTICLES.filter((a) => a.category === selectedCategory);

  return (
    <section id="intelligence-editorial" className="py-12 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F7FAF8] border border-[#DDE8E1] text-[#0B3D2E] text-xs font-mono font-medium mb-3">
            <Newspaper className="w-3.5 h-3.5 text-emerald-600" />
            <span>06 / WALLET INTELLIGENCE & POLICY DESK</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-semibold text-[#10251B] tracking-tight leading-tight">
            News that actually impacts your wallet.
          </h2>
          <p className="mt-2 text-[#4B6354] text-sm leading-relaxed">
            Financial headlines are crowded with sensational noise. We distill policy shifts,
            RBI monetary committee resolutions, and CBDT tax circulars into concrete wallet implications.
          </p>
        </div>

        {/* Filter pills */}
        <div className="flex gap-2.5 mb-8 overflow-x-auto no-scrollbar pb-1 font-mono text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl font-medium transition-all shrink-0 ${
                selectedCategory === cat
                  ? "bg-emerald-600 text-white shadow-xs font-semibold"
                  : "bg-[#F7FAF8] text-[#4B6354] border border-[#DDE8E1] hover:text-[#10251B] hover:bg-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Editorial Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filtered.map((article) => (
            <article
              key={article.id}
              className="p-6 sm:p-7 bg-[#F7FAF8] rounded-2xl border border-[#DDE8E1] hover:border-emerald-400 hover:bg-white transition-all flex flex-col justify-between space-y-4 group shadow-2xs"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between text-xs text-[#4B6354]">
                  <span className="font-mono font-semibold px-2.5 py-0.5 bg-white text-[#0B3D2E] rounded-md border border-[#DDE8E1]">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-2 font-mono text-[11px]">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-[#82998B]">
                      <Clock className="w-3 h-3 text-emerald-600" />
                      {article.readTime}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-[#10251B] leading-snug group-hover:text-emerald-800 transition-colors">
                  {article.title}
                </h3>

                <p className="text-sm text-[#4B6354] leading-relaxed">{article.summary}</p>
              </div>

              {/* Wallet Takeaway Banner */}
              <div className="pt-4 border-t border-[#DDE8E1] space-y-3.5">
                <div className="p-3.5 bg-white rounded-xl border border-emerald-500/20 text-xs text-[#10251B] flex items-start gap-2.5 shadow-2xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span className="font-medium leading-snug">{article.walletImpact}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 bg-white text-[#4B6354] rounded border border-[#DDE8E1]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveArticle(article)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-700 hover:text-emerald-800 transition-colors font-mono"
                  >
                    <span>Read Breakdown</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Article Detail Modal */}
        {activeArticle && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#10251B]/40 backdrop-blur-sm">
            <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-5 border border-[#DDE8E1] shadow-2xl animate-in zoom-in-95 duration-150">
              <div className="flex items-center justify-between pb-3 border-b border-[#DDE8E1]">
                <span className="text-xs font-mono font-semibold text-emerald-800 uppercase">
                  {activeArticle.category} • {activeArticle.readTime}
                </span>
                <button
                  type="button"
                  onClick={() => setActiveArticle(null)}
                  className="text-[#4B6354] hover:text-[#10251B] text-sm font-semibold p-1"
                >
                  ✕ Close
                </button>
              </div>

              <h3 className="text-2xl font-bold text-[#10251B] leading-tight">
                {activeArticle.title}
              </h3>

              <div className="p-4 bg-[#F2F7F4] rounded-xl border border-emerald-500/30 text-xs text-[#10251B] font-medium leading-relaxed">
                {activeArticle.walletImpact}
              </div>

              <p className="text-sm text-[#4B6354] leading-relaxed">{activeArticle.summary}</p>

              <div className="pt-4 border-t border-[#DDE8E1] flex justify-end">
                <button
                  type="button"
                  onClick={() => setActiveArticle(null)}
                  className="px-5 py-2.5 bg-emerald-600 text-white rounded-xl text-xs font-semibold hover:bg-emerald-700 transition-colors shadow-xs"
                >
                  Return to Intelligence Desk
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
