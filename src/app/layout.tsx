import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Speedways Fleet & Travel Management | Enterprise Mobility Pan-India",
  description: "Enterprise mobility platform combining 1,200+ fleet depth, 185+ city coverage, Indecab technology, and centralised 24x7 command centre governance. Established 2012.",
  keywords: "corporate car rental, employee transport services, ETS, fleet management India, chauffeur drive corporate, Indecab technology, VIP movement, airport transfers, corporate mobility",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#F4FAF6] text-slate-900 font-sans flex flex-col selection:bg-green-100 selection:text-green-800">
        <Navbar />
        <main className="flex-1 w-full bg-[#F4FAF6]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
