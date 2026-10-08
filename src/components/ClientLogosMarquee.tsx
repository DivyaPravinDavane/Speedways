"use client";

import React from "react";
import Image from "next/image";
import { Marquee } from "@/components/ui/testimonials-13-utils/marquee";

export interface EnterpriseClient {
  name: string;
  logo: string;
  alt: string;
  imgClass?: string;
}

export const ENTERPRISE_CLIENTS: EnterpriseClient[] = [
  {
    name: "Tata Steel",
    logo: "/logos/tata-steel.svg",
    alt: "Tata Steel Corporate Client",
    imgClass: "h-11 sm:h-12 max-w-[185px] w-auto scale-110",
  },
  {
    name: "Volvo",
    logo: "/logos/volvo.svg",
    alt: "Volvo Group Client",
    imgClass: "h-10 sm:h-11 max-w-[175px] w-auto scale-110",
  },
  {
    name: "Aditya Birla Group",
    logo: "/logos/aditya-birla.png",
    alt: "Aditya Birla Group Client",
    imgClass: "h-12 sm:h-13 max-w-[160px] w-auto",
  },
  {
    name: "DBS Bank",
    logo: "/logos/dbs.svg",
    alt: "DBS Bank Corporate Client",
    imgClass: "h-11 sm:h-12 max-w-[165px] w-auto",
  },
  {
    name: "Merck",
    logo: "/logos/merck.svg",
    alt: "Merck Healthcare Client",
    imgClass: "h-11 sm:h-12 max-w-[170px] w-auto",
  },
  {
    name: "Newspace",
    logo: "/logos/newspace.svg",
    alt: "Newspace India Limited Client",
    imgClass: "h-11 sm:h-12 max-w-[190px] w-auto",
  },
  {
    name: "ATPI",
    logo: "/logos/atpi.svg",
    alt: "ATPI Travel Management Client",
    imgClass: "h-10 sm:h-11 max-w-[160px] w-auto",
  },
  {
    name: "DABICO Airport",
    logo: "/logos/dabico-airport.svg",
    alt: "DABICO Airport Solutions Client",
    imgClass: "h-11 sm:h-12 max-w-[190px] w-auto",
  },
  {
    name: "Kimberly",
    logo: "/logos/kimberly.svg",
    alt: "Kimberly-Clark Enterprise Client",
    imgClass: "h-11 sm:h-12 max-w-[185px] w-auto",
  },
  {
    name: "BCD Travel",
    logo: "/logos/bcd-travel.svg",
    alt: "BCD Travel Partner",
    imgClass: "h-11 sm:h-12 max-w-[160px] w-auto",
  },
  {
    name: "CMS Info Systems",
    logo: "/logos/cms-info.png",
    alt: "CMS Info Systems Client",
    imgClass: "h-11 sm:h-12 max-w-[160px] w-auto",
  },
  {
    name: "Mu Sigma",
    logo: "/logos/mu-sigma.webp",
    alt: "Mu Sigma Analytics Client",
    imgClass: "h-11 sm:h-12 max-w-[170px] w-auto",
  },
  {
    name: "LUX INDUSTRY",
    logo: "/logos/lux-industry.svg",
    alt: "LUX INDUSTRY Corporate Client",
    imgClass: "h-11 sm:h-12 max-w-[175px] w-auto",
  },
  {
    name: "Quona Capital",
    logo: "/logos/quona.svg",
    alt: "Quona Capital Enterprise Client",
    imgClass: "h-8 sm:h-9 max-w-[150px] w-auto",
  },
];

export default function ClientLogosMarquee() {
  return (
    <section className="py-10 bg-slate-50 border-b border-slate-200/80 overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-4 mb-6 text-center">
        <span className="text-[11px] uppercase tracking-widest font-extrabold text-slate-500">
          Trusted by Procurement & Corporate Travel Desks at India&apos;s Leading Enterprises
        </span>
      </div>

      {/* Marquee Container with Gradient Edge Masks */}
      <div className="relative w-full overflow-hidden">
        {/* Left Gradient Fade */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-32 bg-gradient-to-r from-slate-50 to-transparent z-20" />

        {/* Right Gradient Fade */}
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-32 bg-gradient-to-l from-slate-50 to-transparent z-20" />

        {/* Continuous Infinite Animated Marquee Loop */}
        <Marquee className="py-2 [--duration:35s] [--gap:1.5rem]" pauseOnHover={false} repeat={4}>
          {ENTERPRISE_CLIENTS.map((client, idx) => (
            <div
              key={idx}
              className="group relative flex items-center justify-center px-6 py-3 rounded-2xl bg-white border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-green-400 hover:-translate-y-0.5 transition-all duration-300 min-w-[180px] sm:min-w-[210px] h-20 shrink-0"
              title={client.name}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <Image
                  src={client.logo}
                  alt={client.alt}
                  width={180}
                  height={60}
                  className={`object-contain transition-transform duration-300 group-hover:scale-105 ${
                    client.imgClass || "h-10 max-w-[150px] w-auto"
                  }`}
                />
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
