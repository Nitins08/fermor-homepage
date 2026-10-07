"use client";

import { ShieldCheck, Lock, CheckCircle, Database, KeyRound, EyeOff } from "lucide-react";

export default function TrustSection() {
  const securityGuarantees = [
    {
      title: "1. Bank-Grade Credential Isolation (Read-Only)",
      status: "Enforced",
      icon: EyeOff,
      description: "Ephemeral read tokens with zero persistent plain-text storage.",
    },
    {
      title: "2. 256-bit AES Hardware Security Keys",
      status: "FIPS 140-3",
      icon: KeyRound,
      description: "Hardware enclave encryption audited against federal security standards.",
    },
    {
      title: "3. Zero Payment for Order Flow (PFOF) Mandate",
      status: "Guaranteed",
      icon: ShieldCheck,
      description: "Pure fiduciary execution architecture with no broker kickbacks.",
    },
    {
      title: "4. Direct Custodian Multi-Hop Clearing",
      status: "Sub-Sec",
      icon: Database,
      description: "Synchronized directly with institutional clearing counterparties.",
    },
  ];

  return (
    <section id="trust" className="w-full py-24 px-4 sm:px-6 lg:px-12 max-w-[1440px] mx-auto border-t border-black/[0.06]">
      <div className="bg-primary text-white rounded-xl p-8 sm:p-12 lg:p-16 shadow-xl relative overflow-hidden">
        {/* Subtle grid pattern background */}
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "24px 24px",
          }}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center relative z-10">
          {/* Left Column */}
          <div className="lg:col-span-6">
            <span className="font-mono text-xs text-[#A7F3D0] font-semibold uppercase tracking-wider block mb-3">
              SOVEREIGN SECURITY FRAMEWORK
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-normal leading-[1.15] mb-6">
              Institutional rigor. Zero proprietary kickbacks.
            </h2>

            <p className="font-sans text-sm sm:text-base text-gray-300 max-w-lg leading-relaxed mb-8">
              We never take payment for order flow, push proprietary high-fee fund products, or sell telemetry. Fermor operates under strict fiduciary protocol with hardware-isolated credentials.
            </p>

            <div className="grid grid-cols-2 gap-6 pt-6 border-t border-white/10">
              <div>
                <span className="font-mono text-3xl sm:text-4xl text-white font-bold block">
                  $4.8B+
                </span>
                <span className="font-mono text-[11px] uppercase text-gray-400 mt-1 block">
                  Monitored Assets
                </span>
              </div>
              <div>
                <span className="font-mono text-3xl sm:text-4xl text-white font-bold block">
                  SOC2 Type II
                </span>
                <span className="font-mono text-[11px] uppercase text-gray-400 mt-1 block">
                  Continuous Compliance
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Vault Architecture Diagram */}
          <div className="lg:col-span-6 bg-[#0B0F15] p-6 sm:p-8 rounded-lg border border-white/10 shadow-lg">
            <div className="font-mono text-xs uppercase text-[#A7F3D0] mb-5 flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#10B981]" />
              <span>Zero-Knowledge Hardware Vault Architecture</span>
            </div>

            <div className="space-y-3.5">
              {securityGuarantees.map((item) => (
                <div
                  key={item.title}
                  className="p-3.5 bg-white/[0.04] rounded border border-white/[0.06] hover:bg-white/[0.07] transition-colors"
                >
                  <div className="flex items-center justify-between font-sans text-xs sm:text-sm text-gray-200">
                    <span className="font-medium">{item.title}</span>
                    <span className="font-mono text-xs text-[#A7F3D0] px-2 py-0.5 rounded bg-white/[0.08] ml-2 whitespace-nowrap">
                      {item.status}
                    </span>
                  </div>
                  <p className="font-sans text-[11px] text-gray-400 mt-1 leading-normal">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
