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
  title: "Speedways | Corporate Car Rental & Employee Transportation Services (ETS) India",
  description: "Speedways is India's trusted corporate mobility platform operating across 185+ cities with 1,200+ fleet vehicles. Providing employee transportation services (ETS), executive car rental with chauffeur, airport transfers, VIP delegation mobility, and 24×7 central command oversight.",
  keywords: "corporate car rental, employee transportation, ETS India, corporate cab service, fleet management India, chauffeur drive corporate, airport transfers India, corporate mobility, long term car lease",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} scroll-smooth`}>
      <body className="min-h-screen bg-[#F4FAF6] text-slate-900 font-sans flex flex-col selection:bg-green-100 selection:text-green-800 overflow-x-hidden">
        <Navbar />
        <main className="flex-1 w-full bg-[#F4FAF6]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
