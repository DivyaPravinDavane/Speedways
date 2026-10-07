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
  title: "Speedways. Advancing Enterprise Mobility | Enterprise Mobility Pan-India",
  description: "Speedways. Advancing Enterprise Mobility. Purpose in Every Promise. Excellence in Every Experience. Inspired by Commitment. Delivered with Excellence. Committed to Excellence. Defined by Trust. 1,200+ fleet depth, 185+ city coverage, our technology platform, and centralised 24x7 command centre governance.",
  keywords: "corporate car rental, employee transportation, ETS, fleet management India, chauffeur drive corporate, enterprise technology platform, VIP movement, airport transfer across India, corporate mobility",
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
