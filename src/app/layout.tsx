import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Sleep Picks — Best Pillows, Toppers & Sleep Gear (2026)",
    template: "%s | Sleep Picks",
  },
  description:
    "Expert-tested sleep products for 2026. Best pillows for neck pain, mattress toppers, weighted blankets, and sleep accessories compared.",
  metadataBase: new URL("https://sleeproductpicks.vercel.app"),
  alternates: {
    canonical: "https://sleeproductpicks.vercel.app",
  },
  openGraph: {
    siteName: "Sleep Picks",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
