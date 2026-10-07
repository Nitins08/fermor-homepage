import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FBFBFA",
        surface: "#FBFBFA",
        "surface-container-lowest": "#FFFFFF",
        "surface-container-low": "#F4F4F1",
        "surface-container": "#ECECE8",
        "surface-container-high": "#E5E5DF",
        "surface-container-highest": "#DDDCD5",
        "on-surface": "#111827",
        "on-surface-variant": "#4B5563",
        "on-surface-muted": "#9CA3AF",
        primary: "#003527",
        "primary-container": "#064E3B",
        "on-primary": "#FFFFFF",
        "on-primary-container": "#A7F3D0",
        secondary: "#006C49",
        "secondary-emerald": "#10B981",
        "secondary-container": "#ECFDF5",
        "on-secondary-container": "#065F46",
        tertiary: "#92400E",
        "tertiary-amber": "#D97706",
        "tertiary-container": "#FFFBEB",
        "on-tertiary-container": "#78350F",
        "inverse-surface": "#0B0F15",
        "inverse-on-surface": "#EDF0FF",
        outline: "#E5E7EB",
        "outline-variant": "#D1D5DB",
      },
      fontFamily: {
        serif: ["var(--font-newsreader)", "Newsreader", "Georgia", "serif"],
        sans: ["var(--font-jakarta)", "Plus Jakarta Sans", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains)", "JetBrains Mono", "monospace"],
      },
      borderRadius: {
        DEFAULT: "4px",
        sm: "2px",
        md: "6px",
        lg: "8px",
        xl: "12px",
        "2xl": "16px",
      },
    },
  },
  plugins: [],
};
export default config;
