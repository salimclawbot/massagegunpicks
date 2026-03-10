import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: { default: "Massage Gun Picks — Expert Reviews & Buying Guides (2026)", template: "%s | Massage Gun Picks" },
  description: "Expert massage gun reviews and buying guides for 2026. Find the best percussive therapy device for recovery, pain relief, and muscle soreness.",
  metadataBase: new URL("https://massagegunpicks.com"),
  openGraph: { siteName: "Massage Gun Picks", type: "website" },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en"><body className={inter.className}>{children}</body></html>);
}
