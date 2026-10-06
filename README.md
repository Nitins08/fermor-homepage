# Fermor — Smart Financial Decisions for India

> Production-grade homepage redesign and interactive financial architecture built for the Fermor Frontend Developer evaluation.

Live Demo: [https://fermor-homepage.vercel.app](https://fermor-homepage.vercel.app) *(or run locally via steps below)*  
Repository: [https://github.com/your-username/fermor-homepage](https://github.com/your-username/fermor-homepage)

---

## 1. Overview

Fermor is an independent Indian wealth and financial decision platform designed to bring clarity to fragmented personal finances. Rather than acting as a transactional broker or pitching high-commission credit products, Fermor provides client-side mathematical models, transparent tax comparison engines, scenario forecasting, and noise-free financial intelligence.

This project delivers a completely re-imagined, product-led homepage for Fermor. It demonstrates how an early-stage fintech startup can communicate value within 5 seconds while giving users immediate, working tools directly in the browser—with **zero ads, zero account barriers, and pure math**.

---

## 2. Product Thinking & Strategic Narrative

### Target User
- **Digitally comfortable Indian earners (Ages 22–45)**: Salaried tech and corporate professionals, entrepreneurs, and families managing investments across SIPs, direct equities, PPF, NPS, fixed deposits, and home loans.
- **The Core Frustration**: Modern personal finance in India is deeply fragmented. Net worth is scattered across multiple banking and broker apps (Zerodha, Groww, HDFC, ICICI), tax rules change frequently with confusing budget slabs, and financial websites are bloated with intrusive banner ads, aggressive personal loan leads, and opaque distribution commissions.

### Product Positioning: Clarity > Complexity
Instead of a passive landing page with marketing platitudes ("Unlock your potential"), this redesign is **product-led**. The user immediately encounters:
1. **Understand**: Visualising net worth, identifying hidden regular-fund distributor commissions (TER), and comparing the New vs. Old Tax Regime in real-time.
2. **Act**: Lowering investment friction down to ₹500/month with institutional discipline across Direct Nifty 50 Index funds, Flexicap funds, and liquid parking.
3. **Grow**: Modeling dynamic Step-Up SIP compounding to show how a modest 10% annual increment doubles terminal wealth compared to a static flat SIP.

---

## 3. Key Interactive Features Built

- **Live Market Micro-Ticker**: Real-time IST tracking for NIFTY 50, SENSEX, Bank Nifty, 10Y Sovereign G-Sec Yields, Gold (24K), and USD/INR.
- **Interactive Financial Command Center (Hero Console)**:
  - Multi-view tab switcher: **Net Worth & Asset Allocation**, **Monthly Cashflow & SIP Velocity**, and **Life Goals Progress**.
  - Interactive tranche inspector allowing users to explore underlying holdings and liquidity across tranches.
- **60-Second Financial Health Diagnostic**:
  - Interactive sliders for monthly take-home income, SIP investments, emergency runway, and existing EMI burden.
  - Computes a dynamic Financial Resilience Score (0–100) with diagnostic feedback tailored to Indian personal finance benchmarks.
- **Interactive Tax Regime Comparator (Budget FY 2025–26)**:
  - Dynamically compares the New Tax Regime (with ₹75,000 standard deduction and revised slabs) against the Old Tax Regime (factoring in Section 80C, 80D, and HRA exemptions).
  - Highlights exact annual rupee savings and the breakeven threshold.
- **Direct Plan Asset Matrix (ACT)**:
  - Breakdown of broad market index funds, alpha flexi-caps, and liquid arbitrage parking.
  - Interactive ticket size toggle (₹500, ₹2,500, ₹10,000) showing 10-year terminal compounding.
- **Step-Up SIP Compounding Simulator (GROW)**:
  - Compares flat SIP investments against 5%, 10%, and 15% annual step-ups over 10 to 25 year horizons.
  - Visualizes the exponential delta in Crores created by matching SIP increases with career increments.
- **In-Browser Financial Calculator Suite**:
  - **SIP & Lumpsum Wealth Accumulator**: Real-time maturity values and visual investment vs wealth gains breakdown.
  - **Home Loan EMI & Prepayment Accelerator**: Calculates monthly EMI and models how an extra ₹5,000/month prepayment cuts 5–7 years off a 20-year home loan.
  - **SWP (Systematic Withdrawal Plan)**: Retirement sustainability modeling and post-retirement cashflow planning.
  - Quick launch pills for PPF, FD, Gratuity, and NPS models.
- **Ask Fermor Natural Language Sandbox**:
  - Interactive simulator demonstrating Fermor's "Ask" engine, running sensitivity trade-offs on real Indian financial dilemmas (e.g. Prepaying 8.65% Home Loan vs. Nifty 50 SIP).
- **Wallet-Impact Editorial Intelligence**:
  - Filterable by policy, markets, and taxes with explicit, noise-free "Wallet Takeaways" on NPCI UPI MDR rules, Budget Section 87A marginal relief, and market valuation cycles.
- **Ethical Architecture Section**:
  - Plainspoken manifesto explaining Fermor's commitment to zero advertising, client-side privacy, direct mutual funds, and educational transparency.
- **Accessible FAQ Accordion & Regulatory Footer**:
  - Comprehensive answers to platform questions, accompanied by SEBI compliance disclosures and statutory Indian market guidelines.

---

## 4. Tech Stack & Architectural Decisions

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript 5 (Strict type checking enabled)
- **Styling**: Tailwind CSS v4 with custom design tokens and semantic CSS variables
- **Iconography**: Lucide React
- **Typography**: Inter (Variable font) with `tabular-nums` formatting for precision currency and percentage alignment
- **Rendering Architecture**:
  - High performance hybrid model: Fast SSR/Static prerendering for SEO and fast First Contentful Paint (FCP).
  - Leaf client components (`"use client"`) isolated specifically for user interaction states (sliders, tab toggles, modal dialogs).

---

## 5. Design Decisions

1. **Fintech Restraint over AI Clichés**:
   - Avoided neon glows, purple-to-pink gradient cards, and meaningless 3D floating spheres.
   - Employed an editorial aesthetic inspired by institutional finance and modern design leaders (Linear, Stripe, Monzo).
   - Warm porcelain background (`#FAFAF9`), crisp hairline slate borders (`#E2E8F0`), high-contrast ink typography (`#0F172A`), and forest emerald growth accents (`#047857`).
2. **Indian Financial Realism**:
   - Formatted using standard Indian currency conventions (Lakhs, Crores, ₹).
   - Accurately incorporates actual Indian instruments: Nifty 50, Public Provident Fund (PPF), Section 80C, 87A rebate, and Direct Mutual Fund Total Expense Ratios (TER).
3. **Data Density & Rhythm**:
   - Varied column structures (asymmetrical 7:5 and 5:7 grids) to keep the narrative engaging without repetitive card grids.

---

## 6. Responsive Design

Tested and optimized across all major breakpoints:
- **Mobile (375px, 390px, 430px)**: Touch-friendly targets (minimum 44x44px), full-screen accessible slide-down navigation drawer, stackable calculation grids, and horizontal scroll with snap indicators for dense financial tables.
- **Tablet (768px, 1024px)**: Fluid 2-column rebalancing with proportional font scaling.
- **Desktop (1280px, 1440px+)**: Max-width contained layouts (`max-w-7xl`) preventing unreadable ultra-wide line lengths.

---

## 7. Accessibility & Performance

- **Semantic HTML**: Proper `<header>`, `<main>`, `<section>`, `<article>`, and `<footer>` landmarks.
- **Keyboard Navigation**: Native focus rings (`:focus-visible`), standard button element states, and tab-accessible accordion and tablists with `aria-selected` and `aria-expanded` attributes.
- **Reduced Motion Support**: Honors `prefers-reduced-motion` media query by disabling continuous animations.
- **Contrast Ratios**: Body text meets WCAG AAA standards on porcelain and slate backgrounds.
- **Zero Runtime Dependencies for Math**: All financial formulas (EMI amortization, SIP step-up compounding, tax brackets) execute in micro-seconds on vanilla TypeScript functions without heavy external math libraries.

---

## 8. AI Usage Statement

In accordance with the assignment guidelines, AI was utilized as a development accelerator during initial scaffolding and drafting. All product strategy, Indian financial formulas, information architecture, visual design tokens, component hierarchies, and final QA were manually reviewed, refined, and engineered to ensure a cohesive, professional result.

---

## 9. Getting Started

### Prerequisites
- Node.js 18.18+ or 20+ (Tested on Node.js v24.21.0)
- npm 9+ or 10+

### Installation & Local Development
```bash
# Clone the repository
git clone https://github.com/your-username/fermor-homepage.git
cd fermor-homepage

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Linting & Production Build
```bash
# Run ESLint (passes with 0 errors, 0 warnings)
npm run lint

# Compile optimized production build
npm run build

# Start production server locally
npm start
```

---

## 10. Vercel Deployment

This project is configured out of the box for immediate zero-config deployment on [Vercel](https://vercel.com):

1. Push your repository to GitHub.
2. Import the repository in your Vercel Dashboard.
3. Keep default settings (`Framework Preset: Next.js`, `Root Directory: ./`).
4. Click **Deploy**.
