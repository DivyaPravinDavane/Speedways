"use client";

import React from "react";
import Image from "next/image";

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
    name: "Economy & Executive Sedans",
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
    name: "MUV & Premium MUV",
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
    name: "Luxury & Premium Cars",
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
    name: "Electric Vehicle Fleet",
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
    name: "Tempo Travellers",
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
    name: "Mini Buses — 24 Seater",
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
    name: "Buses — 36 Seater",
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
    name: "Large Coaches — 40+ Seater",
    models: "40, 45, 49 and 50+ seats, subject to availability (Volvo / Scania)",
    seating: "40 - 50+ Passengers",
    luggage: "Large Under-Floor Cargo",
    acType: "Climate Controlled Luxury",
    fuel: "Multi-Axle Heavy Diesel",
    image: "/images/fleet/08-large-coaches-40.png",
    tag: "MICE & Large Groups",
    useCase: "MICE events, large corporate groups, tours, and conferences.",
  },
];

export default function MovingVehicleSegments({
  onSelectSegment,
}: {
  onSelectSegment?: (segmentName: string) => void;
}) {
  const displayedSegments = VEHICLE_SEGMENTS;

  return (
    <div className="w-full">
      {/* 2-Column Catalogue Layout */}
      <div className="bg-white rounded-3xl p-6 sm:p-8 border border-green-200 shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-6">
          {displayedSegments.map((seg) => (
            <div
              key={seg.id}
              onClick={() => onSelectSegment?.(seg.name)}
              className="flex items-start gap-4 sm:gap-5 pb-5 border-b border-slate-100 last:border-b-0 md:[&:nth-last-child(-n+2)]:border-b-0 group cursor-pointer"
            >
              {/* Image Thumbnail matching user image */}
              <div className="relative w-32 sm:w-40 h-24 sm:h-28 rounded-2xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200 shadow-2xs">
                <Image
                  src={seg.image}
                  alt={seg.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Typography matching user layout */}
              <div className="space-y-1 min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <h4 className="text-base sm:text-lg font-black text-slate-900 group-hover:text-green-700 transition-colors">
                    {seg.name}
                  </h4>
                  <span className="text-[10px] font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded border border-green-200 shrink-0">
                    {seg.category}
                  </span>
                </div>
                <div className="text-xs sm:text-sm text-slate-500 font-medium line-clamp-1 sm:line-clamp-2">
                  {seg.models}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
