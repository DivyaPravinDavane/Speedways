"use client";

import React, { useState } from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import ClientLogosMarquee from "@/components/ClientLogosMarquee";
import {
  Building2,
  ShieldCheck,
  Award,
  CheckCircle2,
  ArrowRight,
  Star,
  Users,
  Clock,
  TrendingUp,
  MapPin,
  FileCheck,
  Sparkles,
  Quote,
} from "lucide-react";

export default function CustomersPage() {
  const [activeTab, setActiveTab] = useState<"all" | "it" | "pharma" | "banking" | "mfg">("all");

  const clientList = [
    {
      name: "Tata Steel",
      logo: "/logos/tata-steel.svg",
      sector: "Heavy Industries & Manufacturing",
      category: "mfg",
      scope: "Pan-India Executive & Plant Commute",
      stat: "1,400+ Daily Shifts",
      quote: "Speedways has delivered unflinching punctuality and stringent safety compliance across our manufacturing and corporate operations.",
      author: "VP Administration & Logistics",
    },
    {
      name: "Volvo Group",
      logo: "/logos/volvo.svg",
      sector: "Automotive & Engineering",
      category: "mfg",
      scope: "CXO Mobility & Tech Center Commute",
      stat: "99.8% On-Time SLA",
      quote: "The digital platform telemetry and verified chauffeurs align perfectly with our global safety ethos.",
      author: "Head of Facility Services",
    },
    {
      name: "Aditya Birla Group",
      logo: "/logos/aditya-birla.png",
      sector: "Conglomerate & Metals",
      category: "mfg",
      scope: "Spot Rental & Corporate Outstation",
      stat: "185+ Cities Reach",
      quote: "Consistently seamless airport zero-wait transfers and spot reservations across tier-1 and tier-2 business hubs.",
      author: "Chief Procurement Officer",
    },
    {
      name: "DBS Bank",
      logo: "/logos/dbs.svg",
      sector: "Banking & Financial Services",
      category: "banking",
      scope: "VIP Delegations & Shift Logistics",
      stat: "Zero SLA Penalties",
      quote: "White-glove chauffeur etiquette and rigorous geofenced digital billing have streamlined our audit trails completely.",
      author: "Executive Director - Corporate Services",
    },
    {
      name: "Merck Group",
      logo: "/logos/merck.svg",
      sector: "Pharmaceuticals & Healthcare",
      category: "pharma",
      scope: "24×7 Research Lab Workforce Commute",
      stat: "100% Women Safe Commute",
      quote: "Speedways provides real-time SOS tracking and verified security escorts for our late-night laboratory shifts.",
      author: "Director - Workplace Safety",
    },
    {
      name: "ATPI",
      logo: "/logos/atpi.svg",
      sector: "Global Travel Management (TMC)",
      category: "it",
      scope: "International Delegations & Enterprise Travel",
      stat: "24×7 Rapid Dispatch",
      quote: "Flawless ground transport execution, transparent billing, and exceptional 24×7 command centre coordination.",
      author: "Head of Corporate Mobility Alliances",
    },
    {
      name: "Newspace India",
      logo: "/logos/newspace.svg",
      sector: "Space & Aerospace Technology",
      category: "it",
      scope: "Executive Chauffeur & VIP Transit",
      stat: "100% On-Time SLA",
      quote: "Speedways delivers complete reliability with continuous telemetry, sanitized executive vehicles, and dedicated SPOC support.",
      author: "Enterprise Administration Lead",
    },
    {
      name: "DABICO Airport",
      logo: "/logos/dabico-airport.svg",
      sector: "Aviation & Airport Infrastructure",
      category: "mfg",
      scope: "Airport Transfers & Executive Mobility",
      stat: "Zero Wait Time",
      quote: "Live flight tracking and curbside meet-and-greet ensure seamless airport arrivals across all major terminals in India.",
      author: "Operations & Logistics Manager",
    },
    {
      name: "Kimberly",
      logo: "/logos/kimberly.svg",
      sector: "Global Consumer & Healthcare",
      category: "pharma",
      scope: "Corporate Commute & Chauffeur Services",
      stat: "100% Audit Compliance",
      quote: "Punctual dispatches, rigorous vehicle maintenance, and transparent monthly consolidated billing have exceeded our expectations.",
      author: "Corporate Procurement Lead",
    },
    {
      name: "BCD Travel",
      logo: "/logos/bcd-travel.svg",
      sector: "Global Travel Management (TMC)",
      category: "it",
      scope: "Enterprise Corporate Travel Fulfillment",
      stat: "Direct GDS & Portal Sync",
      quote: "Speedways is our trusted pan-India ground transportation partner for international corporate accounts.",
      author: "Senior Manager - Vendor Alliances",
    },
    {
      name: "CMS Info Systems",
      logo: "/logos/cms-info.png",
      sector: "Cash Management & Financial Tech",
      category: "banking",
      scope: "Dedicated Multi-City Operations",
      stat: "12 Cities Deployed",
      quote: "High-reliability vehicle turnaround and robust preventive maintenance schedules.",
      author: "Head of Supply Chain",
    },
    {
      name: "Mu Sigma",
      logo: "/logos/mu-sigma.webp",
      sector: "Decision Sciences & Big Data",
      category: "it",
      scope: "Campus Commute & Tech Delegations",
      stat: "2,500+ Daily Trips",
      quote: "Automated roster clustering cut our peak commute times by 22% while providing employees complete GPS visibility.",
      author: "VP Infrastructure & Operations",
    },
    {
      name: "LUX INDUSTRY",
      logo: "/logos/lux-industry.svg",
      sector: "Textile & Consumer Goods",
      category: "mfg",
      scope: "Corporate Spot & Factory Logistics",
      stat: "10+ Years Partnership",
      quote: "Decade-long trust built on transparent billing, well-maintained fleets, and exemplary chauffeur courtesy.",
      author: "General Manager - Administration",
    },
  ];

  const filteredClients =
    activeTab === "all"
      ? clientList
      : clientList.filter((item) => item.category === activeTab);

  return (
    <div className="bg-[#F4FAF6] min-h-screen">
      {/* 1. Breadcrumbs */}
      <div className="bg-slate-50 border-b border-slate-200/80">
        <Breadcrumbs items={[{ label: "Customers & Enterprise Trust" }]} />
      </div>

      {/* 2. Hero Header */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-white to-white overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-[#48B83D] border border-green-200 text-xs font-bold uppercase tracking-wider mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              Trusted by Fortune 500 Corporates Since 2012
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Powering Mission-Critical Mobility for <span className="text-[#48B83D]">India’s Industry Leaders</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              From global technology conglomerates and heavy manufacturing giants to tier-1 investment banks, over 50+ enterprise organizations rely on Speedways for seamless, audit-compliant fleet logistics.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/contact"
                className="px-7 py-3 rounded-full bg-[#48B83D] hover:bg-[#3ea534] text-white font-bold text-sm shadow-md shadow-green-500/20 transition-all cursor-pointer"
              >
                Request Corporate References
              </Link>
              <Link
                href="/network-safety"
                className="px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm border border-slate-200 shadow-2xs transition-all"
              >
                View 185+ Cities Hubs
              </Link>
            </div>
          </div>

          {/* Key Metric Highlights */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-6 rounded-3xl bg-white border border-green-200/80 card-premium-shadow hover-border-flow text-center transition-all duration-300">
              <div className="text-3xl sm:text-4xl font-black text-slate-900">185+</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">
                Cities Covered
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5">Tier 1, 2 & 3 Metros</p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-green-200/80 card-premium-shadow hover-border-flow text-center transition-all duration-300">
              <div className="text-3xl sm:text-4xl font-black text-[#48B83D]">99.4%</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">
                On-Time SLA
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5">Guaranteed Lead Times</p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-green-200/80 card-premium-shadow hover-border-flow text-center transition-all duration-300">
              <div className="text-3xl sm:text-4xl font-black text-slate-900">500+</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">
                Verified Vehicles
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5">Sedan, MPV, EV & Limos</p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-green-200/80 card-premium-shadow hover-border-flow text-center transition-all duration-300">
              <div className="text-3xl sm:text-4xl font-black text-[#48B83D]">0</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">
                Tolerance Policy
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5">Women Night Safety & SOS</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Continuous Client Logo Marquee */}
      <section className="py-12 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6 text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
            Enterprise Client Portfolio
          </span>
        </div>
        <ClientLogosMarquee />
      </section>

      {/* 4. Filterable Client Cards & Stories */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-200">
          <div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Client Case Studies & Endorsements
            </h2>
            <p className="text-slate-500 text-sm mt-1">
              Real operational feedback from corporate procurement, facilities, and administration leaders.
            </p>
          </div>

          {/* Sector Filter Tabs */}
          <div className="flex items-center gap-1.5 p-1.5 bg-slate-100 rounded-2xl">
            <button
              onClick={() => setActiveTab("all")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === "all"
                  ? "bg-white text-slate-900 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              All Sectors
            </button>
            <button
              onClick={() => setActiveTab("mfg")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === "mfg"
                  ? "bg-white text-slate-900 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Manufacturing
            </button>
            <button
              onClick={() => setActiveTab("it")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === "it"
                  ? "bg-white text-slate-900 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              IT & Tech
            </button>
            <button
              onClick={() => setActiveTab("banking")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === "banking"
                  ? "bg-white text-slate-900 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              BFSI
            </button>
            <button
              onClick={() => setActiveTab("pharma")}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                activeTab === "pharma"
                  ? "bg-white text-slate-900 shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Healthcare
            </button>
          </div>
        </div>

        {/* Client Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredClients.map((client, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white border border-green-200/80 card-premium-shadow hover-border-flow flex flex-col justify-between group transition-all duration-300"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="h-14 w-48 relative flex items-center justify-start">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={client.logo}
                      alt={client.name}
                      className="max-h-12 max-w-full object-contain filter group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <span className="text-[10px] font-bold text-green-700 bg-green-50 border border-green-200 px-2 py-0.5 rounded-full">
                    {client.stat}
                  </span>
                </div>

                <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-1">
                  {client.sector}
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-3">{client.name}</h3>

                <div className="relative p-4 rounded-2xl bg-slate-50 border border-slate-100 mb-4 text-xs text-slate-600 italic leading-relaxed">
                  <Quote className="w-4 h-4 text-green-600/40 mb-1" />
                  &ldquo;{client.quote}&rdquo;
                </div>
              </div>

              <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">{client.author}</span>
                <span className="text-[11px] font-bold text-green-700 flex items-center gap-1">
                  Verified SLA <CheckCircle2 className="w-3.5 h-3.5 text-[#48B83D]" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Enterprise SLA Governance Banner */}
      <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#48B83D] block mb-2">
                Contractual SLA Guarantee
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight leading-tight">
                Zero Excuses. Zero Paper. 100% Audit-Ready Compliance.
              </h2>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                Every corporate agreement includes strict service-level agreements (SLAs), digital duty slip verification (e-DTR), and a dedicated Single Point of Contact (SPOC) backed by our 24×7 Mumbai Operations Control Room.
              </p>

              <div className="mt-6 space-y-2.5">
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#48B83D]" />
                  <span>Guaranteed 4-hour local lead time in all metro hubs</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#48B83D]" />
                  <span>ISO 9001 (Quality), ISO 14001 (Environment), ISO 27001 (Data Security)</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#48B83D]" />
                  <span>Standardized corporate tariff cards with zero hidden surge pricing</span>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-3xl bg-slate-800/90 border border-slate-700 text-center lg:text-left flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Ready to onboard your organization?</h3>
                <p className="text-xs text-slate-400 mb-6">
                  Schedule an exploratory review with our enterprise mobility architects to evaluate tariff structures, roster automation, and pilot fleet trial runs.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="px-6 py-3 rounded-full bg-[#48B83D] hover:bg-[#3ea534] text-white font-bold text-xs tracking-wider uppercase text-center transition-all cursor-pointer shadow-lg shadow-green-500/20"
                >
                  Request Corporate Demo
                </Link>
                <Link
                  href="/services"
                  className="px-6 py-3 rounded-full bg-slate-700 hover:bg-slate-600 text-white font-bold text-xs tracking-wider uppercase text-center transition-all"
                >
                  View All Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
