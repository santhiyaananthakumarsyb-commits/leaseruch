import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import FloatingCall from "../components/FloatingCall";
import CookieBanner from "../components/CookieBanner";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AI Lease Abstraction | 100% quality | 60% reduced TAT & Cost",
  description:
    "LeaseRush uses AI and human expertise to deliver fast, accurate, and cost-effective lease abstraction for commercial real estate, reducing costs and TAT.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingCall />
        <CookieBanner />
      </body>
    </html>
  );
}