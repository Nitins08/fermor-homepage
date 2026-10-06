export interface MarketIndex {
  symbol: string;
  name: string;
  price: string;
  change: string;
  isPositive: boolean;
}

export const MARKET_TICKER_DATA: MarketIndex[] = [
  { symbol: "NIFTY 50", name: "Nifty 50", price: "24,852.15", change: "+0.45%", isPositive: true },
  { symbol: "SENSEX", name: "BSE Sensex", price: "81,390.40", change: "+0.38%", isPositive: true },
  { symbol: "NIFTY BANK", name: "Bank Nifty", price: "51,210.80", change: "-0.18%", isPositive: false },
  { symbol: "10Y G-SEC", name: "Govt Bond Yield", price: "6.82%", change: "-2 bps", isPositive: true },
  { symbol: "USD / INR", name: "Rupee Exchange", price: "₹84.12", change: "+0.04%", isPositive: false },
  { symbol: "GOLD 24K", name: "Gold per 10g", price: "₹76,450", change: "+0.62%", isPositive: true },
];

export interface PortfolioAsset {
  category: string;
  allocationPercent: number;
  value: string;
  returnRate: string;
  items: string[];
}

export const DEMO_PORTFOLIO: PortfolioAsset[] = [
  {
    category: "Equity Mutual Funds (Direct)",
    allocationPercent: 55,
    value: "₹21,45,000",
    returnRate: "+14.8% XIRR",
    items: ["UTI Nifty 50 Index Fund", "Parag Parikh Flexi Cap Fund", "Mirae Asset Large & Midcap"],
  },
  {
    category: "Fixed Income & Sovereign",
    allocationPercent: 25,
    value: "₹9,75,000",
    returnRate: "+7.4% p.a.",
    items: ["Public Provident Fund (PPF)", "Corporate Bond Funds", "RBI Floating Rate Bonds"],
  },
  {
    category: "Direct Equities & ETFs",
    allocationPercent: 12,
    value: "₹4,68,000",
    returnRate: "+16.2% XIRR",
    items: ["HDFC Bank", "Tata Consultancy Services", "Nippon India Junior BeES"],
  },
  {
    category: "Emergency & Liquid Stash",
    allocationPercent: 8,
    value: "₹3,12,000",
    returnRate: "+6.9% p.a.",
    items: ["Aditya Birla Sun Life Liquid Fund", "Sweep-in Fixed Deposit"],
  },
];

export interface NewsArticle {
  id: string;
  category: string;
  date: string;
  readTime: string;
  title: string;
  summary: string;
  walletImpact: string;
  tags: string[];
}

export const EDITORIAL_ARTICLES: NewsArticle[] = [
  {
    id: "sensex-nifty-valuation-cycle",
    category: "Market Strategy",
    date: "Sep 29, 2026",
    readTime: "6 min read",
    title: "Nifty Trailing PE Contraction: What Past Consolidations Teach Long-Term SIP Investors",
    summary:
      "When market multiples cool while corporate earnings hold resilient, systematic investors experience peak rupee-cost averaging. Here is how allocation shifts buffer portfolio volatility.",
    walletImpact: "Action: Maintain existing active SIPs; avoid lump-sum timing during multiple contractions.",
    tags: ["Nifty 50", "SIP Strategy", "Valuation"],
  },
  {
    id: "upi-mdr-regulatory-circular",
    category: "Regulation & Banking",
    date: "Sep 22, 2026",
    readTime: "5 min read",
    title: "NPCI Operating Circular on Merchant UPI: Deciphering the Rules for Everyday Payments",
    summary:
      "A granular breakdown of the revised framework for high-value merchant payments: why peer-to-peer transfers remain strictly zero-fee and what small business merchants actually pay.",
    walletImpact: "Action: P2P UPI and small merchants remain 100% free; zero consumer pass-through on daily spends.",
    tags: ["UPI", "NPCI", "Digital Payments"],
  },
  {
    id: "tax-rebate-87a-marginal-relief",
    category: "Income Tax",
    date: "Jul 30, 2026",
    readTime: "7 min read",
    title: "Section 87A Marginal Relief: How the ₹12 Lakh to ₹12.75 Lakh Threshold Actually Computes",
    summary:
      "A step-by-step mathematical walkthrough of how marginal relief works under the revised new regime, preventing the sudden steep cliff tax on modest salary bonuses.",
    walletImpact: "Action: Verify employer TDS calculations if your gross taxable salary sits near ₹12.5 Lakhs.",
    tags: ["New Tax Regime", "Section 87A", "Salaried Tax"],
  },
  {
    id: "home-loan-prepayment-vs-sip",
    category: "Financial Planning",
    date: "Aug 14, 2026",
    readTime: "8 min read",
    title: "The Mathematical Duel: Prepaying an 8.65% Home Loan vs Compounding in Nifty Index Funds",
    summary:
      "Comparing guaranteed post-tax interest liability reduction against equity risk premiums over 15-year horizons, factoring in Section 24(b) deductions and capital gains tax brackets.",
    walletImpact: "Action: Hybrid strategy—prepaying 1 extra EMI annually saves ₹14.2 Lakhs in interest without sacrificing SIPs.",
    tags: ["Home Loan", "EMI Math", "Debt vs Equity"],
  },
];

export interface FAQItem {
  question: string;
  answer: string;
}

export const FAQS_DATA: FAQItem[] = [
  {
    question: "What is Fermor and how does it differ from broker apps like Zerodha or Groww?",
    answer:
      "Broker apps are transactional platforms designed for order execution. Fermor is an independent financial command center and decision layer. We bring together automated financial health checks, institutional-grade calculators, scenario forecasting, and noise-free economic intelligence so you can model choices before committing your hard-earned money.",
  },
  {
    question: "Do I need to create an account or link bank accounts to use the calculators?",
    answer:
      "No. All calculators and mathematical models on Fermor run 100% locally inside your web browser. You can model SIPs, home loan prepayments, tax comparisons, and retirement milestones without sign-up, phone numbers, or spam messages.",
  },
  {
    question: "Is Fermor a SEBI-registered investment advisor?",
    answer:
      "Fermor Technologies Pvt. Ltd. provides financial tools, calculators, and educational analysis. We are not a SEBI-registered investment advisor and do not provide individualized stock tips, portfolio management, or guaranteed returns. We equip you with clear arithmetic and trade-offs so you stay in complete control.",
  },
  {
    question: "How does the Step-Up SIP calculator accelerate wealth compounding?",
    answer:
      "A standard SIP keeps your monthly contribution fixed for decades despite your salary growing annually. A Step-Up SIP automatically scales your investment (e.g. by 10% each year). Over a 15-year period, a ₹15,000/month SIP with a 10% annual step-up accumulates more than double the final wealth of a flat SIP.",
  },
  {
    question: "How do you ensure data privacy with financial inputs?",
    answer:
      "Zero server logging for browser calculations. What you calculate stays on your personal device. When you choose to save custom plans, data is protected using AES-256 bank-grade encryption with zero advertising trackers or data resale.",
  },
];
