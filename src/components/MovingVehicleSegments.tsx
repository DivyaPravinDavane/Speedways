"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Users,
  Briefcase,
  Fan,
  Fuel,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Car,
  Bus,
  Building2,
  Calendar,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

export interface VehicleSegment {
  id: string;
  category: "Cars & SUVs" | "Group Transportation" | "Corporate Mobility";
  name: string;
  models: string;
  seating: string;
  luggage: string;
  acType: string;
  fuel: string;
  image: string;
  tag: string;
  useCase: string;
}

export const VEHICLE_SEGMENTS: VehicleSegment[] = [
  // 1. Cars & SUVs
  {
    id: "economy-executive-sedans",
    category: "Cars & SUVs",
    name: "01. Economy & Executive Sedans",
    models: "Dzire, Aura, Amaze, Ciaz, Honda City",
    seating: "4 Passengers",
    luggage: "2 - 3 Suitcases",
    acType: "Climate Control AC",
    fuel: "Petrol / Smart Hybrid",
    image: "/images/fleet/01-sedans.png",
    tag: "Everyday Corporate Travel",
    useCase: "Airport transfers, local rentals, and everyday corporate travel.",
  },
  {
    id: "muv-premium-muv",
    category: "Cars & SUVs",
    name: "02. MUV & Premium MUV",
    models: "Ertiga, Carens, Innova Crysta, Innova Hycross",
    seating: "6 - 7 Passengers",
    luggage: "4 - 5 Suitcases",
    acType: "Triple-Zone Auto AC",
    fuel: "Diesel / Strong Hybrid",
    image: "/images/fleet/02-muv.png",
    tag: "Executive Transfers",
    useCase: "Family travel, executive transfers, and outstation journeys.",
  },
  {
    id: "luxury-premium-cars",
    category: "Cars & SUVs",
    name: "03. Luxury & Premium Cars",
    models: "Mercedes-Benz E-Class, BMW 5 Series, Audi A4",
    seating: "4 Passengers",
    luggage: "3 - 4 Suitcases",
    acType: "Multi-Zone Climate Luxury",
    fuel: "Premium Petrol / Diesel",
    image: "/images/fleet/03-luxury.png",
    tag: "CXO & VIP Travel",
    useCase: "CXO travel, VIP guests, weddings, and special occasions.",
  },
  {
    id: "electric-vehicle-fleet",
    category: "Cars & SUVs",
    name: "04. Electric Vehicle Fleet",
    models: "Tata EVs, BYD and other available electric vehicles",
    seating: "4 Passengers",
    luggage: "2 - 3 Suitcases",
    acType: "Instant Eco Electric AC",
    fuel: "100% Zero-Emission Electric",
    image: "/images/fleet/04-electric.png",
    tag: "Sustainable Mobility",
    useCase: "Sustainable corporate and city mobility.",
  },

  // 2. Group Transportation
  {
    id: "tempo-travellers",
    category: "Group Transportation",
    name: "05. Tempo Travellers",
    models: "Multiple seating configurations (12, 17, 20, 26 Seater)",
    seating: "12 - 26 Passengers",
    luggage: "10 - 15 Suitcases",
    acType: "Ducted Individual AC",
    fuel: "Commercial Diesel",
    image: "/images/fleet/05-tempo-travellers.png",
    tag: "Group Tours & Outings",
    useCase: "Group tours, family trips, weddings, and corporate outings.",
  },
  {
    id: "mini-buses-24",
    category: "Group Transportation",
    name: "06. Mini Buses — 24 Seater",
    models: "Medium-capacity group transport (Eicher / Marcopolo)",
    seating: "24 Passengers",
    luggage: "Overhead & Rear Boot",
    acType: "High-Capacity Rooftop AC",
    fuel: "Clean Commercial Diesel",
    image: "/images/fleet/06-minibuses-24.png",
    tag: "Corporate Shuttles",
    useCase: "Corporate events, staff shuttles, and conference transfers.",
  },
  {
    id: "buses-36",
    category: "Group Transportation",
    name: "07. Buses — 36 Seater",
    models: "Group and staff transportation (Tata Starbus / Ashok Leyland)",
    seating: "36 Passengers",
    luggage: "Under-Floor Luggage Bay",
    acType: "Central Rooftop AC",
    fuel: "Heavy Commercial Diesel",
    image: "/images/fleet/07-buses-36.png",
    tag: "Staff Transportation",
    useCase: "Employee commutes, weddings, and event transportation.",
  },
  {
    id: "large-coaches-40",
    category: "Group Transportation",
    name: "08. Large Coaches — 40+ Seater",
    models: "40, 45, 49 and 50+ seats, subject to availability (Volvo / Scania)",
    seating: "40 - 50+ Passengers",
    luggage: "Large Under-Floor Cargo",
    acType: "Climate Controlled Luxury",
    fuel: "Multi-Axle Heavy Diesel",
    image: "/images/fleet/08-large-coaches-40.png",
    tag: "MICE & Large Groups",
    useCase: "MICE events, large corporate groups, tours, and conferences.",
  },

  // 3. Corporate Mobility
  {
    id: "ets-mobility",
    category: "Corporate Mobility",
    name: "Employee Transport (ETS)",
    models: "Sedans, MUVs, Tempo Travellers & AC Buses",
    seating: "Rostered Multi-Shift Capacity",
    luggage: "Laptop & Hand Luggage",
    acType: "Continuous Air-Conditioning",
    fuel: "Hybrid, Diesel & Electric Fleet",
    image: "/images/employee-transit.jpg",
    tag: "24×7 Shift Transit",
    useCase: "Automated route optimization, lady safety protocol, OTP boarding, command centre",
  },
  {
    id: "corporate-rentals",
    category: "Corporate Mobility",
    name: "Corporate Rentals",
    models: "Executive Sedans & Premium MUVs on Demand",
    seating: "4 - 6 Passengers",
    luggage: "Executive Luggage Allowance",
    acType: "Dual Zone Auto AC",
    fuel: "Petrol, Hybrid & EV",
    image: "/images/fleet/01-sedans.png",
    tag: "On-Demand Chauffeur",
    useCase: "Hourly 4h/8h/12h local business usage, airport transfers, client meetings",
  },
  {
    id: "fleet-management",
    category: "Corporate Mobility",
    name: "Fleet Management Services",
    models: "Turnkey Dedicated Corporate Fleet & Chauffeurs",
    seating: "Enterprise Scalable",
    luggage: "Custom Corporate Requirements",
    acType: "Fully Managed Air-Conditioning",
    fuel: "All Fuel Types Managed",
    image: "/images/command-center.jpg",
    tag: "Total Mobility Governance",
    useCase: "Full lifecycle vehicle leasing, driver staffing, preventive maintenance, compliance",
  },
  {
    id: "mice-events",
    category: "Corporate Mobility",
    name: "MICE & Events Transportation",
    models: "Bulk Fleet Mobilization (50 - 200+ Vehicles)",
    seating: "High-Volume Delegation Scale",
    luggage: "Dedicated Event Luggage Logistics",
    acType: "Air-Conditioned Premium Fleet",
    fuel: "Fleet Mix (Luxury, MPVs, Coaches)",
    image: "/images/fleet/08-large-coaches-40.png",
    tag: "Conferences & Summits",
    useCase: "On-site dispatch coordinator, airport paging desks, synchronized fleet dispatch",
  },
];

export default function MovingVehicleSegments({
  onSelectSegment,
}: {
  onSelectSegment?: (segmentName: string) => void;
}) {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const categories = [
    { label: "All Segments", count: VEHICLE_SEGMENTS.length },
    {
      label: "Cars & SUVs",
      count: VEHICLE_SEGMENTS.filter((s) => s.category === "Cars & SUVs").length,
    },
    {
      label: "Group Transportation",
      count: VEHICLE_SEGMENTS.filter((s) => s.category === "Group Transportation").length,
    },
    {
      label: "Corporate Mobility",
      count: VEHICLE_SEGMENTS.filter((s) => s.category === "Corporate Mobility").length,
    },
  ];

  const displayedSegments =
    activeCategory === "All Segments" || activeCategory === "All"
      ? VEHICLE_SEGMENTS
      : VEHICLE_SEGMENTS.filter((s) => s.category === activeCategory);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    checkScroll();
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll, { passive: true });
      window.addEventListener("resize", checkScroll);
      return () => {
        el.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      };
    }
  }, [displayedSegments]);

  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  }, [activeCategory]);

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const cardWidth = 384; // card width (360) + gap (24)
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -cardWidth : cardWidth,
        behavior: "smooth",
      });
    }
  };

  const [viewMode, setViewMode] = useState<"carousel" | "catalogue">("carousel");

  return (
    <div className="w-full space-y-6">
      {/* Controls Bar: Category Pills + Arrows + View Mode Switcher */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Category Pills Switcher */}
        <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
          {categories.map((cat) => (
            <button
              key={cat.label}
              type="button"
              onClick={() => setActiveCategory(cat.label)}
              className={`flex items-center gap-2 px-3.5 py-1.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeCategory === cat.label ||
                (activeCategory === "All" && cat.label === "All Segments")
                  ? "bg-green-600 text-white shadow-md shadow-green-600/25 scale-102"
                  : "bg-white hover:bg-slate-100 text-slate-700 border border-slate-200"
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${
                  activeCategory === cat.label ||
                  (activeCategory === "All" && cat.label === "All Segments")
                    ? "bg-white text-green-700"
                    : "bg-slate-100 text-slate-600"
                }`}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>

        {/* Navigation Arrows Controls & View Mode */}
        <div className="flex items-center gap-3">
          {viewMode === "carousel" && (
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={() => scroll("left")}
                disabled={!canScrollLeft}
                aria-label="Previous vehicles"
                className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-all cursor-pointer ${
                  canScrollLeft
                    ? "bg-white text-slate-800 border-slate-200 hover:bg-[#48B83D] hover:text-white hover:border-[#48B83D] shadow-xs active:scale-95"
                    : "bg-slate-100 text-slate-300 border-slate-200 cursor-not-allowed opacity-50"
                }`}
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                type="button"
                onClick={() => scroll("right")}
                disabled={!canScrollRight}
                aria-label="Next vehicles"
                className={`w-9 h-9 rounded-xl border flex items-center justify-center transition-all cursor-pointer ${
                  canScrollRight
                    ? "bg-white text-slate-800 border-slate-200 hover:bg-[#48B83D] hover:text-white hover:border-[#48B83D] shadow-xs active:scale-95"
                    : "bg-slate-100 text-slate-300 border-slate-200 cursor-not-allowed opacity-50"
                }`}
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}

          <div className="flex items-center gap-1 p-1 bg-white border border-slate-200 rounded-xl text-xs font-bold shadow-2xs shrink-0">
            <button
              type="button"
              onClick={() => setViewMode("carousel")}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                viewMode === "carousel"
                  ? "bg-green-600 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Carousel
            </button>
            <button
              type="button"
              onClick={() => setViewMode("catalogue")}
              className={`px-3 py-1.5 rounded-lg transition-all cursor-pointer ${
                viewMode === "catalogue"
                  ? "bg-green-600 text-white shadow-xs"
                  : "text-slate-600 hover:text-slate-900"
              }`}
            >
              Catalogue List
            </button>
          </div>
        </div>
      </div>

      {viewMode === "carousel" ? (
        /* Horizontal Carousel with Arrows at Ends */
        <div className="relative w-full py-4 group">
          {/* Floating Left Arrow Button at the end */}
          <button
            type="button"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            aria-label="Previous vehicles"
            className={`absolute -left-2 sm:-left-5 top-1/2 -translate-y-1/2 z-20 w-11 sm:w-12 h-11 sm:h-12 rounded-full border flex items-center justify-center transition-all duration-200 cursor-pointer shadow-xl ${
              canScrollLeft
                ? "bg-white/95 text-slate-900 border-slate-200 hover:bg-[#48B83D] hover:text-white hover:border-[#48B83D] hover:scale-110 active:scale-95"
                : "bg-white/60 text-slate-300 border-slate-100 cursor-not-allowed opacity-0 pointer-events-none"
            }`}
          >
            <ChevronLeft className="w-6 h-6 -ml-0.5" />
          </button>

          {/* Floating Right Arrow Button at the end */}
          <button
            type="button"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            aria-label="Next vehicles"
            className={`absolute -right-2 sm:-right-5 top-1/2 -translate-y-1/2 z-20 w-11 sm:w-12 h-11 sm:h-12 rounded-full border flex items-center justify-center transition-all duration-200 cursor-pointer shadow-xl ${
              canScrollRight
                ? "bg-white/95 text-slate-900 border-slate-200 hover:bg-[#48B83D] hover:text-white hover:border-[#48B83D] hover:scale-110 active:scale-95"
                : "bg-white/60 text-slate-300 border-slate-100 cursor-not-allowed opacity-0 pointer-events-none"
            }`}
          >
            <ChevronRight className="w-6 h-6 -mr-0.5" />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto scroll-smooth py-3 px-1 snap-x snap-mandatory focus:outline-none [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {displayedSegments.map((seg) => (
              <div
                key={seg.id}
                className="w-[320px] sm:w-[360px] bg-white rounded-3xl p-5 border border-green-200/90 shadow-md hover:shadow-xl hover:border-green-500 transition-all duration-300 shrink-0 flex flex-col justify-between snap-start"
              >
                <div>
                  {/* Image Header with Segment Tag */}
                  <div className="relative h-44 w-full rounded-2xl overflow-hidden bg-slate-100 mb-4">
                    <Image
                      src={seg.image}
                      alt={seg.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent pointer-events-none" />

                    <div className="absolute top-3 left-3">
                      <span className="px-2.5 py-1 rounded-lg bg-black/60 backdrop-blur-md text-white text-[10px] font-bold tracking-wide uppercase border border-white/10">
                        {seg.category}
                      </span>
                    </div>

                    <div className="absolute top-3 right-3">
                      <span className="px-2.5 py-1 rounded-lg bg-green-600 text-white text-[10px] font-bold shadow-xs">
                        {seg.tag}
                      </span>
                    </div>

                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-xl font-black text-white drop-shadow-xs">
                        {seg.name}
                      </h3>
                    </div>
                  </div>

                  {/* Models List */}
                  <div className="mb-3 text-xs font-semibold text-slate-800 flex items-start gap-1.5">
                    <span className="text-green-600 font-bold shrink-0">Models:</span>
                    <span className="line-clamp-2">{seg.models}</span>
                  </div>

                  {/* Specs Grid */}
                  <div className="grid grid-cols-2 gap-2 p-3 rounded-2xl bg-slate-50 border border-slate-100 text-[11px] font-medium text-slate-700 mb-3">
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-green-600 shrink-0" />
                      <span>{seg.seating}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Briefcase className="w-3.5 h-3.5 text-green-600 shrink-0" />
                      <span>{seg.luggage}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Fan className="w-3.5 h-3.5 text-green-600 shrink-0" />
                      <span className="truncate">{seg.acType}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Fuel className="w-3.5 h-3.5 text-green-600 shrink-0" />
                      <span className="truncate">{seg.fuel}</span>
                    </div>
                  </div>

                  {/* Use Case */}
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong className="text-slate-900 block font-semibold mb-0.5">
                      Corporate Deployment:
                    </strong>
                    {seg.useCase}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Catalogue List View Matching User Uploaded Screenshot Design */
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-green-200 shadow-xl divide-y divide-slate-100">
          {displayedSegments.map((seg) => (
            <div
              key={seg.id}
              className="py-5 first:pt-0 last:pb-0 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6 group"
            >
              <div className="flex items-start sm:items-center gap-4 sm:gap-6 flex-1">
                {/* Image Thumbnail matching user image */}
                <div className="relative w-32 sm:w-44 h-24 sm:h-28 rounded-2xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200 shadow-2xs">
                  <Image
                    src={seg.image}
                    alt={seg.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Typography matching user layout */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <h4 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-green-700 transition-colors">
                      {seg.name}
                    </h4>
                    <span className="text-[10px] font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded border border-green-200">
                      {seg.category}
                    </span>
                  </div>
                  <div className="text-xs sm:text-sm text-slate-500 font-medium">
                    {seg.models}
                  </div>
                  <div className="text-xs sm:text-sm text-slate-800 font-semibold leading-relaxed">
                    {seg.useCase}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
