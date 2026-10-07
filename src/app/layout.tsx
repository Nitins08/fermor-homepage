import type { Metadata } from "next";
import { Newsreader, Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-newsreader",
  display: "swap",
  style: ["normal", "italic"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Fermor — Intelligent Capital Architecture",
  description:
    "Fermor synthesizes fragmented bank feeds, investments, private holdings, and liabilities into a single living balance. Understand, Act, and Grow with clarity.",
  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${newsreader.variable} ${plusJakartaSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="bg-background text-on-surface antialiased selection:bg-primary-container selection:text-white">
        {children}
      </body>
    </html>
  );
}
