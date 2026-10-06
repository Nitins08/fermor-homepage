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
    <section id="intelligence" className="py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-100 text-slate-800 text-xs font-semibold mb-3">
            <Newspaper className="w-3.5 h-3.5 text-emerald-700" />
            <span>EDITORIAL INTELLIGENCE</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight">
            News that impacts your wallet.
          </h2>
          <p className="mt-3 text-slate-600 text-base leading-relaxed">
            Financial news is crowded with speculative sensationalism. We filter out the noise and
            break down what policy shifts, RBI rate decisions, and tax circulars mean for your bank
            account.
          </p>
        </div>

        {/* Filter pills */}
        <div className="flex gap-2 mb-8 overflow-x-auto no-scrollbar pb-1">
          {categories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-colors shrink-0 ${
                selectedCategory === cat
                  ? "bg-slate-900 text-white"
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
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
              className="p-6 bg-[#FAFAF9] rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50/80 transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <span className="font-semibold px-2 py-0.5 bg-white rounded border border-slate-200 text-slate-700">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-2 font-mono text-[11px]">
                    <span>{article.date}</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-slate-400" />
                      {article.readTime}
                    </span>
                  </div>
                </div>

                <h3 className="text-lg font-bold text-slate-900 leading-snug group-hover:text-emerald-800 transition-colors">
                  {article.title}
                </h3>

                <p className="text-sm text-slate-600 leading-relaxed">{article.summary}</p>
              </div>

              {/* Wallet Takeaway Banner */}
              <div className="pt-3 border-t border-slate-200 space-y-3">
                <div className="p-3 bg-emerald-50/80 rounded-lg border border-emerald-200/70 text-xs text-emerald-900 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-700 shrink-0 mt-0.5" />
                  <span className="font-medium leading-snug">{article.walletImpact}</span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex gap-1.5">
                    {article.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 bg-slate-200/70 text-slate-700 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveArticle(article)}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-slate-900 hover:text-emerald-700"
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-xs">
            <div className="bg-white rounded-2xl max-w-2xl w-full p-6 sm:p-8 space-y-5 border border-slate-200 shadow-2xl animate-in zoom-in-95 duration-150">
              <div className="flex items-center justify-between pb-3 border-b border-slate-100">
                <span className="text-xs font-mono font-semibold text-emerald-700 uppercase">
                  {activeArticle.category} • {activeArticle.readTime}
                </span>
                <button
                  type="button"
                  onClick={() => setActiveArticle(null)}
                  className="text-slate-400 hover:text-slate-700 text-sm font-semibold p-1"
                >
                  ✕ Close
                </button>
              </div>

              <h3 className="text-2xl font-bold text-slate-900 leading-tight">
                {activeArticle.title}
              </h3>

              <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-xs text-emerald-950 font-medium">
                {activeArticle.walletImpact}
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">{activeArticle.summary}</p>

              <div className="pt-4 border-t border-slate-100 flex justify-end">
                <button
                  type="button"
                  onClick={() => setActiveArticle(null)}
                  className="px-4 py-2 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800"
                >
                  Return to Intelligence Hub
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
