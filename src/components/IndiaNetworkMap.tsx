"use client";

import React, { useState, useMemo } from "react";
import {
  MapPin,
  ShieldCheck,
  Radio,
  Clock,
  Car,
  PhoneCall,
  Search,
  Sparkles,
  ArrowRight,
  CheckCircle2,
  Building2,
  Compass,
} from "lucide-react";
import { AnimatedNumber } from "@/components/AnimatedCounter";

export interface CityHubLocation {
  id: string;
  city: string;
  state: string;
  region: "West" | "North" | "South" | "East" | "Central";
  type: "Direct Metro Hub" | "Regional Tech Hub" | "Strategic Network Center";
  isDirectMetro: boolean;
  top: string; // % on SVG map
  left: string; // % on SVG map
  leadTime: string;
  fleetStrength: string;
  address: string;
  phone: string;
  highlights: string[];
  vehiclesAvailable: string[];
}

export const MAJOR_LOCATIONS: CityHubLocation[] = [
  {
    id: "mumbai",
    city: "Mumbai",
    state: "Maharashtra",
    region: "West",
    type: "Direct Metro Hub",
    isDirectMetro: true,
    top: "58%",
    left: "26%",
    leadTime: "2 Hours",
    fleetStrength: "320+ Vehicles",
    address: "Speedways House, Andheri East / BKC Central Corridor, Mumbai 400 069",
    phone: "9820630817",
    highlights: [
      "National Head Office & Central 24×7 Command Centre",
      "CSMIA Terminal 1 & 2 Dedicated Airport Paging Desk",
      "BKC & Lower Parel CXO Executive Chauffeur Pool",
    ],
    vehiclesAvailable: ["Sedans", "Innova Hycross", "Luxury SUVs", "Bus & Coaches"],
  },
  {
    id: "delhi-ncr",
    city: "Delhi NCR",
    state: "Delhi / Haryana / UP",
    region: "North",
    type: "Direct Metro Hub",
    isDirectMetro: true,
    top: "30%",
    left: "37%",
    leadTime: "2 Hours",
    fleetStrength: "240+ Vehicles",
    address: "DLF Cyber City, Sector 24, Gurugram, Haryana 122 002",
    phone: "9820630817",
    highlights: [
      "North India Regional Hub & Diplomatic Movement",
      "IGI Airport T3 24×7 Terminal Transfer Desk",
      "Gurugram Cyber Hub & Noida IT Corridor Coverage",
    ],
    vehiclesAvailable: ["Sedans", "Innova Crysta", "Mercedes / BMW", "Tempo Travellers"],
  },
  {
    id: "bangalore",
    city: "Bengaluru",
    state: "Karnataka",
    region: "South",
    type: "Direct Metro Hub",
    isDirectMetro: true,
    top: "79%",
    left: "38%",
    leadTime: "2 Hours",
    fleetStrength: "220+ Vehicles",
    address: "Serenity, 1176/A, HBR 1st Stage, 4th Block, Bangalore 560 043",
    phone: "9820630817",
    highlights: [
      "South India Regional Operations Hub",
      "KIA Kempegowda Airport VIP Meet & Greet",
      "Electronic City & Whitefield Campus Commutes",
    ],
    vehiclesAvailable: ["Sedans", "EV Green Fleet", "Innova Hycross", "Volvo Coaches"],
  },
  {
    id: "hyderabad",
    city: "Hyderabad",
    state: "Telangana",
    region: "South",
    type: "Direct Metro Hub",
    isDirectMetro: true,
    top: "64%",
    left: "44%",
    leadTime: "2 Hours",
    fleetStrength: "160+ Vehicles",
    address: "HITEC City Phase 2, Madhapur, Hyderabad 500 081",
    phone: "9820630817",
    highlights: [
      "HITEC City & Financial District 24×7 Operations",
      "RGIA Shamshabad Live Flight Tracked Dispatches",
      "Pharma & IT Corporate Dedicated Fleets",
    ],
    vehiclesAvailable: ["Sedans", "Innova Crysta", "Electric Cabs", "Buses"],
  },
  {
    id: "chennai",
    city: "Chennai",
    state: "Tamil Nadu",
    region: "South",
    type: "Direct Metro Hub",
    isDirectMetro: true,
    top: "78%",
    left: "48%",
    leadTime: "2 Hours",
    fleetStrength: "140+ Vehicles",
    address: "Old Mahabalipuram Road (OMR), Perungudi, Chennai 600 096",
    phone: "9820630817",
    highlights: [
      "OMR IT Highway & Guindy Industrial Hub Desk",
      "Sriperumbudur & Oragadam Automotive Plant Commutes",
      "Chennai International Airport Zero-Wait Paging",
    ],
    vehiclesAvailable: ["Sedans", "MUVs", "Tempo Travellers", "Luxury Fleet"],
  },
  {
    id: "pune",
    city: "Pune",
    state: "Maharashtra",
    region: "West",
    type: "Direct Metro Hub",
    isDirectMetro: true,
    top: "62%",
    left: "30%",
    leadTime: "2 Hours",
    fleetStrength: "110+ Vehicles",
    address: "Magarpatta Cybercity / Hinjawadi IT Park Phase 1, Pune 411 028",
    phone: "9820630817",
    highlights: [
      "Hinjawadi IT Corridor & Chakan Auto Belt Operations",
      "Mumbai–Pune Expressway Rapid Transit Service",
      "Corporate Shift Commutes & Factory Audits",
    ],
    vehiclesAvailable: ["Executive Sedans", "Innova Crysta", "Tempo Travellers"],
  },
  {
    id: "kolkata",
    city: "Kolkata",
    state: "West Bengal",
    region: "East",
    type: "Strategic Network Center",
    isDirectMetro: false,
    top: "50%",
    left: "71%",
    leadTime: "3-4 Hours",
    fleetStrength: "70+ Vehicles",
    address: "Sector V, Salt Lake City & New Town, Kolkata 700 091",
    phone: "9820630817",
    highlights: [
      "East India Strategic Corporate Desk",
      "NSCBIA Airport Live Tracked Arrivals",
      "Salt Lake Sector V IT Hub & Central Kolkata Transit",
    ],
    vehiclesAvailable: ["Sedans", "MUVs", "Volvo Coaches"],
  },
  {
    id: "ahmedabad",
    city: "Ahmedabad",
    state: "Gujarat",
    region: "West",
    type: "Strategic Network Center",
    isDirectMetro: false,
    top: "48%",
    left: "24%",
    leadTime: "3-4 Hours",
    fleetStrength: "65+ Vehicles",
    address: "SG Highway & GIFT City Corporate Corridor, Ahmedabad 380 054",
    phone: "9820630817",
    highlights: [
      "GIFT City Financial Center & Sanand Industrial Transit",
      "Sardar Vallabhbhai Patel Airport Chauffeur Desk",
    ],
    vehiclesAvailable: ["Executive Sedans", "Innova Hycross", "Coaches"],
  },
  {
    id: "jaipur",
    city: "Jaipur",
    state: "Rajasthan",
    region: "North",
    type: "Strategic Network Center",
    isDirectMetro: false,
    top: "37%",
    left: "33%",
    leadTime: "3-4 Hours",
    fleetStrength: "45+ Vehicles",
    address: "Tonk Road & Sitapura Industrial Area, Jaipur 302 022",
    phone: "9820630817",
    highlights: [
      "MICE Delegations & Heritage Corporate Conclaves",
      "Sitapura & Mahindra World City Industrial Transit",
    ],
    vehiclesAvailable: ["Sedans", "Innova Crysta", "Luxury SUVs"],
  },
  {
    id: "chandigarh",
    city: "Chandigarh",
    state: "Punjab / Haryana",
    region: "North",
    type: "Strategic Network Center",
    isDirectMetro: false,
    top: "24%",
    left: "35%",
    leadTime: "3-4 Hours",
    fleetStrength: "50+ Vehicles",
    address: "IT Park, Kishangarh / Mohali Phase 8, Chandigarh 160 101",
    phone: "9820630817",
    highlights: [
      "Tricity (Chandigarh-Mohali-Panchkula) Enterprise Transit",
      "Shaheed Bhagat Singh Airport Transfers",
    ],
    vehiclesAvailable: ["Sedans", "MUVs", "Tempo Travellers"],
  },
  {
    id: "kochi",
    city: "Kochi",
    state: "Kerala",
    region: "South",
    type: "Strategic Network Center",
    isDirectMetro: false,
    top: "88%",
    left: "35%",
    leadTime: "3-4 Hours",
    fleetStrength: "40+ Vehicles",
    address: "Infopark Phase 1, Kakkanad, Kochi 682 042",
    phone: "9820630817",
    highlights: [
      "Infopark & SmartCity IT Employee Transit",
      "Cochin International Airport Terminal Desks",
    ],
    vehiclesAvailable: ["Sedans", "Innova Crysta", "Tempo Travellers"],
  },
  {
    id: "indore",
    city: "Indore",
    state: "Madhya Pradesh",
    region: "Central",
    type: "Strategic Network Center",
    isDirectMetro: false,
    top: "50%",
    left: "35%",
    leadTime: "3-4 Hours",
    fleetStrength: "40+ Vehicles",
    address: "Super Corridor & Pithampur Industrial SEZ, Indore 452 010",
    phone: "9820630817",
    highlights: [
      "Central India Commercial & Pharma SEZ Corridor",
      "Devi Ahilya Bai Holkar Airport Transfers",
    ],
    vehiclesAvailable: ["Sedans", "Innova Crysta", "Staff Buses"],
  },
  {
    id: "lucknow",
    city: "Lucknow",
    state: "Uttar Pradesh",
    region: "North",
    type: "Strategic Network Center",
    isDirectMetro: false,
    top: "37%",
    left: "52%",
    leadTime: "3-4 Hours",
    fleetStrength: "35+ Vehicles",
    address: "Vibhuti Khand, Gomti Nagar, Lucknow 226 010",
    phone: "9820630817",
    highlights: [
      "UP Capital Administration & Corporate Movement",
      "Chaudhary Charan Singh Airport Transfers",
    ],
    vehiclesAvailable: ["Sedans", "Innova Crysta"],
  },
  {
    id: "bhubaneswar",
    city: "Bhubaneswar",
    state: "Odisha",
    region: "East",
    type: "Strategic Network Center",
    isDirectMetro: false,
    top: "57%",
    left: "67%",
    leadTime: "3-4 Hours",
    fleetStrength: "30+ Vehicles",
    address: "Infocity / Chandaka Industrial Estate, Bhubaneswar 751 024",
    phone: "9820630817",
    highlights: [
      "Mining, Steel & IT Corridor Transportation",
      "Biju Patnaik International Airport Meet & Greet",
    ],
    vehiclesAvailable: ["Sedans", "Innova Crysta", "Buses"],
  },
  {
    id: "goa",
    city: "Goa",
    state: "Goa",
    region: "West",
    type: "Strategic Network Center",
    isDirectMetro: false,
    top: "70%",
    left: "27%",
    leadTime: "3-4 Hours",
    fleetStrength: "35+ Vehicles",
    address: "Dabolim & Mopa Airport Corridors / Panaji, Goa 403 001",
    phone: "9820630817",
    highlights: [
      "MICE Conventions & Annual Corporate Retreats",
      "Mopa (GOX) & Dabolim (GOI) Airport Transfers",
    ],
    vehiclesAvailable: ["Innova Crysta", "Luxury Sedans", "Tempo Travellers"],
  },
];

export default function IndiaNetworkMap() {
  const [selectedHubId, setSelectedHubId] = useState<string>("mumbai");
  const [regionFilter, setRegionFilter] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const filteredLocations = useMemo(() => {
    return MAJOR_LOCATIONS.filter((loc) => {
      const matchesRegion =
        regionFilter === "All"
          ? true
          : regionFilter === "Direct Metros"
          ? loc.isDirectMetro
          : loc.region === regionFilter;

      const matchesSearch =
        searchQuery.trim() === "" ||
        loc.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
        loc.state.toLowerCase().includes(searchQuery.toLowerCase());

      return matchesRegion && matchesSearch;
    });
  }, [regionFilter, searchQuery]);

  const activeHub = useMemo(() => {
    return (
      MAJOR_LOCATIONS.find((l) => l.id === selectedHubId) || MAJOR_LOCATIONS[0]
    );
  }, [selectedHubId]);

  return (
    <section className="py-16 md:py-24 bg-white border-b border-slate-200/80 relative overflow-hidden">
      {/* Decorative background glow */}
      <div className="pointer-events-none absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-green-100/50 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 -right-32 w-96 h-96 rounded-full bg-emerald-100/50 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-green-700 shadow-2xs mb-4">
            <Compass className="w-3.5 h-3.5 text-[#48B83D]" />
            Pan-India Footprint & Operations
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            185+ Cities Nationwide,{" "}
            <span className="bg-gradient-to-r from-[#48B83D] to-emerald-600 bg-clip-text text-transparent">
              One Unified Standard
            </span>
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
            From our 24×7 Central Command Centre in Mumbai to 6 direct metro hubs and strategic Tier-2/3 network centers, Speedways ensures guaranteed lead times, verified fleet availability, and identical service SLAs across India.
          </p>
        </div>

        {/* Filter Pills and Search */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-slate-100">
          <div className="flex flex-wrap items-center gap-2">
            {["All", "Direct Metros", "North", "South", "West", "East"].map((cat) => (
              <button
                key={cat}
                onClick={() => setRegionFilter(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  regionFilter === cat
                    ? "bg-[#48B83D] text-white shadow-sm"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
              >
                {cat === "Direct Metros" ? "★ 6 Direct Metros" : cat}
              </button>
            ))}
          </div>

          <div className="relative min-w-[220px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder="Search major cities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-1.5 rounded-xl border border-slate-200 text-xs text-slate-800 placeholder-slate-400 bg-slate-50 focus:bg-white focus:outline-hidden focus:border-green-500 transition-colors"
            />
          </div>
        </div>

        {/* Map + Detail Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT: Interactive India Map Visual Container */}
          <div className="lg:col-span-7 bg-slate-900 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-2xl border border-slate-800 flex flex-col justify-between min-h-[580px] sm:min-h-[640px]">
            {/* Dark Map Grid & Telemetry Overlay */}
            <div
              className="absolute inset-0 opacity-15 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(#48B83D 1px, transparent 1px), linear-gradient(to right, #334155 1px, transparent 1px), linear-gradient(to bottom, #334155 1px, transparent 1px)",
                backgroundSize: "24px 24px, 48px 48px, 48px 48px",
              }}
            />

            {/* Top Telemetry Header inside Map */}
            <div className="relative z-10 flex items-center justify-between border-b border-slate-800/80 pb-4 mb-2">
              <div className="flex items-center gap-2">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
                </span>
                <span className="text-xs font-mono font-bold tracking-wider text-green-400 uppercase">
                  Speedways Fleet Radar • Live Pan-India Grid
                </span>
              </div>
              <span className="text-[11px] font-mono text-slate-400">
                185+ Cities Connected
              </span>
            </div>

            {/* MAP CANVAS with Stylized Vector India Outline & Beacons */}
            <div className="relative w-full h-[440px] sm:h-[480px] my-auto flex items-center justify-center">
              {/* Detailed Stylized SVG Map Contour of India */}
              <svg
                viewBox="0 0 500 580"
                className="w-full h-full max-h-[460px] object-contain opacity-40 filter drop-shadow-[0_0_15px_rgba(72,184,61,0.15)]"
                fill="none"
              >
                {/* Stylized high-accuracy boundary polygon for India */}
                <path
                  d="M 215 35
                     C 220 25, 230 20, 240 25
                     C 255 35, 270 45, 275 60
                     C 280 75, 265 90, 260 100
                     C 275 110, 290 120, 310 135
                     C 325 145, 345 155, 360 155
                     C 380 155, 410 145, 435 150
                     C 450 155, 465 170, 460 185
                     C 455 200, 435 205, 415 205
                     C 390 205, 375 220, 360 235
                     C 345 250, 335 270, 325 290
                     C 320 310, 310 330, 295 355
                     C 280 380, 260 410, 245 445
                     C 235 470, 225 500, 215 530
                     C 210 545, 205 550, 200 550
                     C 195 550, 190 540, 185 525
                     C 175 490, 160 450, 150 420
                     C 140 390, 130 360, 125 330
                     C 118 295, 110 270, 100 245
                     C 90 220, 85 205, 95 190
                     C 105 175, 120 180, 135 185
                     C 150 190, 165 175, 175 160
                     C 185 145, 190 125, 195 105
                     C 200 85, 205 60, 215 35 Z"
                  fill="#1E293B"
                  stroke="#334155"
                  strokeWidth="2.5"
                  strokeLinejoin="round"
                />

                {/* Regional Contour Rings */}
                <circle cx="215" cy="180" r="140" stroke="#48B83D" strokeWidth="0.5" strokeDasharray="4 6" opacity="0.3" />
                <circle cx="215" cy="330" r="110" stroke="#48B83D" strokeWidth="0.5" strokeDasharray="3 5" opacity="0.25" />
              </svg>

              {/* BEACONS LAYER */}
              {filteredLocations.map((hub) => {
                const isSelected = selectedHubId === hub.id;
                return (
                  <button
                    key={hub.id}
                    onClick={() => setSelectedHubId(hub.id)}
                    style={{ top: hub.top, left: hub.left }}
                    className={`absolute -translate-x-1/2 -translate-y-1/2 group transition-all duration-300 cursor-pointer ${
                      isSelected ? "scale-125 z-30" : "scale-100 z-10 hover:scale-115"
                    }`}
                    title={`${hub.city} - ${hub.type}`}
                  >
                    <span className="relative flex h-5 w-5 items-center justify-center">
                      {/* Pulse Ring */}
                      {hub.isDirectMetro ? (
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                      ) : (
                        <span className="animate-pulse absolute inline-flex h-3.5 w-3.5 rounded-full bg-emerald-400 opacity-40" />
                      )}

                      {/* Beacon Core Dot */}
                      <span
                        className={`relative inline-flex rounded-full items-center justify-center font-bold text-[9px] shadow-lg transition-all ${
                          isSelected
                            ? "h-5 w-5 bg-white text-slate-950 ring-3 ring-[#48B83D]"
                            : hub.isDirectMetro
                            ? "h-4 w-4 bg-[#48B83D] text-white border-2 border-slate-900"
                            : "h-3 w-3 bg-emerald-400 border border-slate-900"
                        }`}
                      >
                        {hub.isDirectMetro ? "★" : ""}
                      </span>
                    </span>

                    {/* Floating City Label */}
                    <span
                      className={`absolute left-1/2 -translate-x-1/2 -bottom-5 whitespace-nowrap text-[10px] font-bold px-2 py-0.5 rounded-md shadow-md transition-all ${
                        isSelected
                          ? "bg-[#48B83D] text-white font-extrabold scale-105"
                          : "bg-slate-900/90 text-slate-300 border border-slate-700/80 group-hover:text-white group-hover:border-green-400"
                      }`}
                    >
                      {hub.city}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Bottom Legend inside Map */}
            <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-800 text-[11px] text-slate-400">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#48B83D] inline-block" />
                  <strong className="text-white">★ 6 Direct Metros</strong> (Mumbai HO, BLR, HYD, MAA, DEL, Pune)
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block" />
                  Strategic Hubs
                </span>
              </div>
              <span className="text-slate-500 font-mono">185+ Managed Cities</span>
            </div>
          </div>

          {/* RIGHT: Active Hub Executive Spec Card */}
          <div className="lg:col-span-5 bg-slate-50 rounded-3xl p-7 border border-slate-200/90 shadow-sm flex flex-col justify-between min-h-[580px] sm:min-h-[640px]">
            <div>
              {/* Type Badge & City Headline */}
              <div className="flex items-center justify-between mb-3">
                <span
                  className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                    activeHub.isDirectMetro
                      ? "bg-green-100 text-green-800 border border-green-200"
                      : "bg-slate-200 text-slate-700"
                  }`}
                >
                  {activeHub.type}
                </span>
                <span className="text-xs font-semibold text-slate-500">
                  {activeHub.region} India Region
                </span>
              </div>

              <h3 className="text-3xl font-black text-slate-900 tracking-tight flex items-center gap-2">
                {activeHub.city}
                <span className="text-sm font-medium text-slate-500">({activeHub.state})</span>
              </h3>

              {/* SLA & Fleet Metric Badges */}
              <div className="mt-4 grid grid-cols-2 gap-3">
                <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-bold uppercase tracking-wider">
                    <Clock className="w-3.5 h-3.5 text-green-600" />
                    Dispatch SLA
                  </div>
                  <div className="text-xl font-black text-slate-900 mt-1">
                    {activeHub.leadTime}
                  </div>
                  <div className="text-[11px] text-slate-500">Guaranteed lead time</div>
                </div>

                <div className="p-3.5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
                  <div className="flex items-center gap-1.5 text-xs text-slate-500 font-bold uppercase tracking-wider">
                    <Car className="w-3.5 h-3.5 text-green-600" />
                    Verified Fleet
                  </div>
                  <div className="text-xl font-black text-green-700 mt-1">
                    {activeHub.fleetStrength}
                  </div>
                  <div className="text-[11px] text-slate-500">Commercially licensed</div>
                </div>
              </div>

              {/* Operations Highlights */}
              <div className="mt-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#48B83D]" />
                  Hub Operational Capabilities
                </h4>
                <ul className="space-y-2">
                  {activeHub.highlights.map((h, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Vehicles Available in this Location */}
              <div className="mt-6 pt-5 border-t border-slate-200">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 block mb-2">
                  Vehicles Deployed in {activeHub.city}:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {activeHub.vehiclesAvailable.map((v, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium bg-white text-slate-800 border border-slate-200 px-2.5 py-1 rounded-lg"
                    >
                      {v}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Address & Direct Desk Callout */}
            <div className="mt-6 pt-5 border-t border-slate-200">
              <div className="flex items-start gap-2 text-xs text-slate-600 mb-3">
                <MapPin className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                <span>{activeHub.address}</span>
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href={`tel:${activeHub.phone}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#48B83D] hover:bg-[#3ea534] text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>Call Operations Desk</span>
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 border border-slate-300 text-xs font-bold transition-all"
                >
                  <span>Request RFP</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Global Network Metrics Footer Bar */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 p-6 rounded-2xl bg-slate-50 border border-slate-200/90 text-center">
          <div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900">
              <AnimatedNumber value={185} suffix="+" duration={1600} />
            </div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-0.5">
              Cities Covered
            </div>
            <div className="text-[11px] text-slate-400">Pan-India Tier 1, 2 & 3</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-[#48B83D]">
              <AnimatedNumber value={1200} format suffix="+" duration={1600} />
            </div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-0.5">
              Verified Vehicles
            </div>
            <div className="text-[11px] text-slate-400">Sedans, MPVs, Bus, Coaches</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-slate-900">
              <AnimatedNumber value={6} duration={1200} />
            </div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-0.5">
              Direct Metro Hubs
            </div>
            <div className="text-[11px] text-slate-400">Company-Owned Facilities</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-black text-[#48B83D]">
              <AnimatedNumber value={24} duration={1200} />×<AnimatedNumber value={7} duration={1200} />
            </div>
            <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-0.5">
              Command Centre
            </div>
            <div className="text-[11px] text-slate-400">Mumbai HO Central Telemetry</div>
          </div>
        </div>
      </div>
    </section>
  );
}
