import type { Metadata } from "next";
import { Inter, Instrument_Serif, DM_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const instrument = Instrument_Serif({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-instrument",
  display: "swap",
});

const dmMono = DM_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-dmmono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pomar — Do pomar à mesa",
  description:
    "A seasonal farm-to-table provisions brand from Portugal's southwest coast — a market, a small kitchen, and a weekly harvest box, all sourced from growers down the road.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="pt"
      className={`${inter.variable} ${instrument.variable} ${dmMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
