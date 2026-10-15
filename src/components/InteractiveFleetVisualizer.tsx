"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Users,
  Briefcase,
  Fan,
  Fuel,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Zap,
  Gauge,
  Calculator,
} from "lucide-react";

export default function InteractiveFleetVisualizer() {
  const [activeTierIndex, setActiveTierIndex] = useState(2); // default to Premium MUV (Innova)
  const [selectedDuration, setSelectedDuration] = useState<"4h" | "8h" | "outstation">("8h");

  const fleetData = [
    {
      id: "economy-sedan",
      name: "Economy & Executive Sedans",
      models: "Dzire, Aura, Amaze, Ciaz, Honda City",
      image: "/images/fleet/01-sedans.png",
      tag: "Point-to-Point & Airport",
      passengers: 4,
      luggage: 2,
      ac: "Dual AC Climate Control",
      fuel: "Petrol / Smart Hybrid",
      rates: { "4h": "₹ 1,450", "8h": "₹ 2,400", outstation: "₹ 12 / km" },
      amenities: [
        "Police-verified chauffeur",
        "AIS-140 GPS tracking",
        "Ozone sanitized cabin",
        "Digital duty slip",
      ],
      idealFor: "Airport transfers, local rentals, and everyday corporate travel",
    },
    {
      id: "premium-muv",
      name: "MUV & Premium MUV",
      models: "Ertiga, Carens, Innova Crysta, Innova Hycross",
      image: "/images/fleet/02-muv.png",
      tag: "Enterprise Benchmark",
      passengers: 7,
      luggage: 5,
      ac: "Triple-Zone Auto AC",
      fuel: "Strong Hybrid / Diesel",
      rates: { "4h": "₹ 2,600", "8h": "₹ 4,400", outstation: "₹ 21 / km" },
      amenities: [
        "Captain recliner seats",
        "Superior highway endurance",
        "Dedicated airport paging desk",
        "50-point safety inspection",
      ],
      idealFor: "Family travel, executive transfers, and outstation journeys",
    },
    {
      id: "luxury-suv",
      name: "Luxury & Premium Cars",
      models: "Mercedes-Benz E-Class, BMW 5 Series, Audi A4",
      image: "/images/fleet/03-luxury.png",
      tag: "C-Suite & State Summits",
      passengers: 4,
      luggage: 4,
      ac: "Quad-Zone Climate Control",
      fuel: "Premium Petrol / Diesel",
      rates: { "4h": "₹ 6,500", "8h": "₹ 11,500", outstation: "₹ 45 / km" },
      amenities: [
        "White-glove chauffeur in suit",
        "Strict Non-Disclosure (NDA)",
        "Pre-trip VIP inspection",
        "Priority Command Room escort",
      ],
      idealFor: "CXO travel, VIP guests, weddings, and special occasions",
    },
    {
      id: "ev-green",
      name: "Electric Vehicle Fleet",
      models: "Tata EVs, BYD and other available electric vehicles",
      image: "/images/fleet/04-electric.png",
      tag: "Scope 1 & 2 ESG Compliance",
      passengers: 4,
      luggage: 2,
      ac: "Instant Eco Electric AC",
      fuel: "100% Electric (Zero Tailpipe CO2)",
      rates: { "4h": "₹ 1,750", "8h": "₹ 2,900", outstation: "₹ 14 / km" },
      amenities: [
        "Zero carbon emissions",
        "Smart battery SoC dispatch",
        "Campus charger compatibility",
        "Monthly ESG certificate",
      ],
      idealFor: "Sustainable corporate and city mobility",
    },
    {
      id: "tempo-travellers",
      name: "Tempo Travellers",
      models: "Multiple seating configurations (12, 17, 20, 26 Seater)",
      image: "/images/fleet/05-tempo-travellers.png",
      tag: "Group Tours & Offsites",
      passengers: 17,
      luggage: 12,
      ac: "Ducted Individual AC",
      fuel: "Commercial Clean Diesel",
      rates: { "4h": "₹ 3,500", "8h": "₹ 5,800", outstation: "₹ 26 / km" },
      amenities: [
        "Reclining push-back seats",
        "Individual AC louvers",
        "Ample luggage boot",
        "Trained highway chauffeur",
      ],
      idealFor: "Group tours, family trips, weddings, and corporate outings",
    },
    {
      id: "large-coaches",
      name: "Buses & Large Coaches (24 to 50+ Seater)",
      models: "24-Seater Mini, 36-Seater Bus, 40+ Seater Volvo/Scania",
      image: "/images/fleet/08-large-coaches-40.png",
      tag: "MICE & Employee Transit",
      passengers: 45,
      luggage: 40,
      ac: "Central High-Tonnage AC",
      fuel: "Multi-Axle Heavy Diesel",
      rates: { "4h": "₹ 7,500", "8h": "₹ 13,000", outstation: "₹ 55 / km" },
      amenities: [
        "Air suspension comfort",
        "Under-floor luggage holds",
        "On-ground logistics coordinator",
        "PA & microphone system",
      ],
      idealFor: "MICE events, large corporate groups, tours, and conferences",
    },
  ];

  const current = fleetData[activeTierIndex];

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
      {/* Tier Selection Pills */}
      <div className="p-4 sm:p-6 bg-slate-50/80 border-b border-slate-200">
        <div className="flex items-center justify-between mb-3">
          <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-100 px-3 py-1 rounded-full">
            Interactive Fleet Visualizer
          </span>
          <span className="text-xs font-semibold text-slate-500">
            Click any tier to preview pictograms & specs
          </span>
        </div>

        <div className="flex flex-wrap gap-2">
          {fleetData.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => setActiveTierIndex(idx)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                activeTierIndex === idx
                  ? "bg-green-500 text-white shadow-md shadow-green-500/25 scale-102"
                  : "bg-white hover:bg-slate-100 text-slate-700 border border-slate-200"
              }`}
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      {/* Main Grid: Visual Media & Pictogram Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        {/* Left: High-Res Studio Image with Overlay Badges */}
        <div className="lg:col-span-6 relative bg-slate-100 min-h-[360px] flex items-center justify-center overflow-hidden">
          <Image
            src={current.image}
            alt={current.name}
            width={700}
            height={450}
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
          />

          <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-slate-200/80 shadow-md">
            <span className="text-xs font-bold text-slate-900 block">{current.models}</span>
            <span className="text-[10px] font-semibold text-green-700">{current.tag}</span>
          </div>

          <div className="absolute bottom-4 left-4 right-4 bg-slate-900/80 backdrop-blur-md text-white p-3 rounded-xl border border-white/10 text-xs flex items-center justify-between">
            <span className="truncate">Suitability: {current.idealFor}</span>
            <span className="text-green-400 font-bold shrink-0 ml-2">Verified SLA</span>
          </div>
        </div>

        {/* Right: Pictographical Specs & Dynamic Tariff Calculator */}
        <div className="lg:col-span-6 p-6 sm:p-8 bg-white flex flex-col justify-between space-y-6">
          <div>
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-2xl font-bold text-slate-900">{current.name}</h3>
              <span className="text-xs font-bold text-green-700 bg-green-50 px-2.5 py-1 rounded-full border border-green-200">
                100% Commercially Registered
              </span>
            </div>
            <p className="text-xs text-slate-500 font-medium">{current.models}</p>

            {/* Pictograms: Capacity Visuals */}
            <div className="grid grid-cols-2 gap-3 my-5">
              {/* Passengers Pictogram */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <Users className="w-4 h-4 text-green-600" />
                    Passenger Seating
                  </span>
                  <span className="text-xs font-extrabold text-green-700">
                    {current.passengers} Seats
                  </span>
                </div>
                {/* Visual Seat Icons */}
                <div className="flex items-center gap-1.5 pt-1">
                  {[...Array(7)].map((_, i) => (
                    <span
                      key={i}
                      className={`w-4 h-4 rounded-md flex items-center justify-center text-[10px] font-bold ${
                        i < current.passengers
                          ? "bg-green-500 text-white"
                          : "bg-slate-200 text-slate-400"
                      }`}
                    >
                      •
                    </span>
                  ))}
                </div>
              </div>

              {/* Luggage Pictogram */}
              <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
                    <Briefcase className="w-4 h-4 text-green-600" />
                    Luggage Capacity
                  </span>
                  <span className="text-xs font-extrabold text-green-700">
                    {current.luggage} Bags
                  </span>
                </div>
                {/* Visual Luggage Icons */}
                <div className="flex items-center gap-1.5 pt-1">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`w-4 h-4 rounded-md flex items-center justify-center text-[10px] font-bold ${
                        i < current.luggage
                          ? "bg-green-500 text-white"
                          : "bg-slate-200 text-slate-400"
                      }`}
                    >
                      ▪
                    </span>
                  ))}
                </div>
              </div>

              {/* Climate Control */}
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2.5">
                <Fan className="w-4 h-4 text-green-600 shrink-0" />
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Climate</span>
                  <span className="text-xs font-bold text-slate-800">{current.ac}</span>
                </div>
              </div>

              {/* Fuel / Powertrain */}
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-2.5">
                <Fuel className="w-4 h-4 text-green-600 shrink-0" />
                <div>
                  <span className="text-[10px] uppercase font-bold text-slate-400 block">Powertrain</span>
                  <span className="text-xs font-bold text-slate-800 truncate block">{current.fuel}</span>
                </div>
              </div>
            </div>

            {/* Checklist of Included Corporate Amenities */}
            <div className="grid grid-cols-2 gap-2 text-xs text-slate-600">
              {current.amenities.map((item, idx) => (
                <div key={idx} className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Interactive Tariff Card Selector */}
          <div className="pt-4 border-t border-slate-200">
            <div className="p-4 rounded-2xl bg-[#F0FDF4] border border-[#DCFCE7] flex flex-wrap items-center justify-between gap-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-green-800 block">
                  Indicative Corporate Tariff:
                </span>
                <div className="flex items-center gap-2 mt-1">
                  <button
                    onClick={() => setSelectedDuration("4h")}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${
                      selectedDuration === "4h"
                        ? "bg-green-600 text-white"
                        : "bg-white text-slate-700 border border-green-200"
                    }`}
                  >
                    4h / 40km
                  </button>
                  <button
                    onClick={() => setSelectedDuration("8h")}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${
                      selectedDuration === "8h"
                        ? "bg-green-600 text-white"
                        : "bg-white text-slate-700 border border-green-200"
                    }`}
                  >
                    8h / 80km
                  </button>
                  <button
                    onClick={() => setSelectedDuration("outstation")}
                    className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${
                      selectedDuration === "outstation"
                        ? "bg-green-600 text-white"
                        : "bg-white text-slate-700 border border-green-200"
                    }`}
                  >
                    Outstation
                  </button>
                </div>
              </div>

              <div className="text-right">
                <div className="text-2xl font-black text-slate-900 tracking-tight">
                  {current.rates[selectedDuration]}
                </div>
                <div className="text-[10px] text-slate-500">+ 5% Corporate GST Model</div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between">
              <a
                href="#services"
                className="text-xs font-bold text-slate-600 hover:text-green-600 transition-colors"
              >
                View All 11 Mobility Services →
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
              >
                <span>Reserve {current.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
