"use client";

import { useState } from "react";
import { ArrowRight, CheckCircle2, Shield, Lock } from "lucide-react";

export default function FinalCtaSection() {
  const [email, setEmail] = useState("");
  const [tier, setTier] = useState("founder");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section id="register" className="w-full py-28 px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto text-center border-t border-black/[0.06]">
      <div className="max-w-3xl mx-auto">
        {/* Progressive Sequence Pills */}
        <div className="inline-flex items-center gap-2.5 mb-8">
          <span className="px-3 py-1 rounded-full bg-[#F4F4F1] font-mono text-[10px] sm:text-[11px] font-semibold text-primary">
            01 UNDERSTAND
          </span>
          <span className="text-[#9CA3AF] font-mono text-xs">→</span>
          <span className="px-3 py-1 rounded-full bg-[#F4F4F1] font-mono text-[10px] sm:text-[11px] font-semibold text-primary">
            02 ACT
          </span>
          <span className="text-[#9CA3AF] font-mono text-xs">→</span>
          <span className="px-3 py-1 rounded-full bg-[#ECFDF5] font-mono text-[10px] sm:text-[11px] font-bold text-[#065F46] border border-[#10B981]/20">
            03 GROW
          </span>
        </div>

        {/* Headline */}
        <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl text-primary font-normal leading-[1.1] mb-6 tracking-tight">
          Know your money. <br className="hidden sm:inline" />
          Know your next move.
        </h2>

        {/* Subtitle */}
        <p className="font-sans text-base sm:text-lg text-[#4B5563] mb-12 max-w-xl mx-auto leading-relaxed">
          Step into sovereign financial clarity. Join thousands of high-conviction founders, operators, and stewards of private capital.
        </p>

        {/* Membership Application Console */}
        <div className="bg-white p-6 sm:p-8 rounded-lg border border-black/[0.08] shadow-[0_4px_24px_-4px_rgba(11,15,21,0.06)] max-w-md mx-auto text-left mb-8">
          {submitted ? (
            <div className="py-6 text-center space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#ECFDF5] text-[#006C49] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6 text-[#10B981]" />
              </div>
              <h3 className="font-serif text-xl text-primary font-semibold">
                Priority Mandate Reserved
              </h3>
              <p className="font-sans text-xs sm:text-sm text-[#4B5563] leading-relaxed">
                Verification credentials and institutional onboarding protocol dispatched to <span className="font-medium text-[#111827]">{email}</span>.
              </p>
              <div className="pt-2 font-mono text-[11px] text-[#006C49] bg-[#ECFDF5] p-2.5 rounded">
                QUEUE TOKEN: #FRM-2025-08491
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="invite-email"
                  className="font-mono text-[11px] uppercase text-[#4B5563] block mb-1.5 font-medium"
                >
                  Work or Private Primary Email
                </label>
                <input
                  id="invite-email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="allocator@firm.com"
                  className="w-full h-11 px-3.5 bg-[#FBFBFA] border border-black/10 text-[#111827] font-sans text-sm rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all placeholder:text-[#9CA3AF]"
                />
              </div>

              <div>
                <label
                  htmlFor="invite-tier"
                  className="font-mono text-[11px] uppercase text-[#4B5563] block mb-1.5 font-medium"
                >
                  Select Mandate Tier
                </label>
                <select
                  id="invite-tier"
                  value={tier}
                  onChange={(e) => setTier(e.target.value)}
                  className="w-full h-11 px-3 bg-[#FBFBFA] border border-black/10 text-[#111827] font-sans text-sm rounded focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                >
                  <option value="individual">Sovereign Individual ($250k - $2M)</option>
                  <option value="founder">Founder & Executive ($2M - $10M)</option>
                  <option value="office">Family Office / Multi-Entity ($10M+)</option>
                </select>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-primary-container text-white font-sans text-sm font-semibold rounded shadow-sm hover:bg-primary transition-all flex items-center justify-center gap-2 group"
              >
                <span>Reserve Membership Allocation</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          )}
        </div>

        {/* Security Footnote */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 font-mono text-xs text-[#4B5563]">
          <span>Read-only credentials</span>
          <span>•</span>
          <span>No custody lock-in</span>
          <span>•</span>
          <span>Cancel mandate anytime</span>
        </div>
      </div>
    </section>
  );
}
