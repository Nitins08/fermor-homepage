import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fermor — Smart Financial Decisions for India | Wealth, Planning & Calculators",
  description:
    "Your money, finally in one place. Explore interactive financial command centers, free SIP & tax calculators, portfolio allocation models, and noise-free market intelligence.",
  keywords: [
    "Fermor",
    "SIP Calculator",
    "Indian Finance",
    "Mutual Funds India",
    "Financial Planning",
    "New vs Old Tax Regime",
    "Home Loan Prepayment",
    "Nifty 50",
    "Wealth Management",
  ],
  authors: [{ name: "Fermor Technologies" }],
  openGraph: {
    title: "Fermor — Smart Financial Decisions for India",
    description: "Invest, track and plan in one place. Zero ads, pure math, institutional clarity.",
    url: "https://fermor.in",
    siteName: "Fermor",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fermor — Smart Financial Decisions for India",
    description: "Your money, finally in one place. Interactive calculators and financial command center.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth antialiased`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className="min-h-screen bg-[#FAFAF9] text-slate-900 font-sans selection:bg-emerald-100 selection:text-emerald-900">
        {children}
      </body>
    </html>
  );
}
