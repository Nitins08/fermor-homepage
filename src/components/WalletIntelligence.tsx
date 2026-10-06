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
    <section id="intelligence-editorial" className="py-24 bg-[#050B18] border-b border-[#0D2747]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0A1D35] border border-[#123A63] text-blue-300 text-xs font-mono font-medium mb-4">
            <Newspaper className="w-3.5 h-3.5 text-cyan-400" />
            <span>06 / WALLET INTELLIGENCE & POLICY DESK</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-semibold text-white tracking-tight leading-tight">
            News that actually impacts your wallet.
          </h2>
          <p className="mt-4 text-slate-300 text-base font-light leading-relaxed">
            Financial headlines are crowded with sensational noise. We distill policy shifts,
            RBI monetary committee resolutions, and CBDT tax circulars into concrete wallet implications.
          </p>
        </div>

        {/* Filter pills */}
        <div className="flex gap-2.5 mb-10 overflow-x-auto no-scrollbar pb-1 font-mono text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl font-medium transition-all shrink-0 ${
                selectedCategory === cat
                  ? "bg-blue-600 text-white shadow-md shadow-blue-950/40"
                  : "bg-[#071426] text-slate-400 border border-[#123A63] hover:text-white hover:bg-[#0A1D35]"
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
              className="p-6 sm:p-7 bg-[#071426] rounded-2xl border border-[#123A63] hover:border-blue-500/50 hover:bg-[#0A1D35]/60 transition-all flex flex-col justify-between space-y-4 group shadow-xl"
            >
              <div className="space-y-3.5">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono font-semibold px-2.5 py-0.5 bg-[#050B18] text-cyan-300 rounded-md border border-[#123A63]">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-2 font-mono text-[11px]">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1 text-slate-400">
                      <Clock className="w-3 h-3 text-blue-400" />
                      {article.readTime}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-semibold text-white leading-snug group-hover:text-cyan-300 transition-colors">
                  {article.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed font-light">{article.summary}</p>
              </div>

              {/* Wallet Takeaway Banner */}
              <div className="pt-4 border-t border-[#0D2747] space-y-3.5">
                <div className="p-3.5 bg-[#050B18] rounded-xl border border-blue-500/30 text-xs text-slate-200 flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="font-medium leading-snug">{article.walletImpact}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex gap-2">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 bg-[#0A1D35] text-slate-400 rounded border border-[#123A63]"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveArticle(article)}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#050B18]/80 backdrop-blur-md">
            <div className="bg-[#071426] rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-5 border border-[#123A63] shadow-2xl animate-in zoom-in-95 duration-150">
              <div className="flex items-center justify-between pb-3 border-b border-[#0D2747]">
                <span className="text-xs font-mono font-semibold text-cyan-400 uppercase">
                  {activeArticle.category} • {activeArticle.readTime}
                </span>
                <button
                  type="button"
                  onClick={() => setActiveArticle(null)}
                  className="text-slate-400 hover:text-white text-sm font-semibold p-1"
                >
                  ✕ Close
                </button>
              </div>

              <h3 className="text-2xl font-bold text-white leading-tight">
                {activeArticle.title}
              </h3>

              <div className="p-4 bg-[#050B18] rounded-xl border border-blue-500/40 text-xs text-slate-200 font-medium leading-relaxed">
                {activeArticle.walletImpact}
              </div>

              <p className="text-sm text-slate-300 leading-relaxed font-light">{activeArticle.summary}</p>

              <div className="pt-4 border-t border-[#0D2747] flex justify-end">
                <button
                  type="button"
                  onClick={() => setActiveArticle(null)}
                  className="px-5 py-2.5 bg-blue-600 text-white rounded-xl text-xs font-semibold hover:bg-blue-500 transition-colors shadow-md shadow-blue-900/30"
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
