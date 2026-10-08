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
  Sparkles,
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
      name: "Economy Sedan",
      models: "Maruti Dzire / Hyundai Aura / Amaze",
      image: "/images/hero-sedan.jpg",
      tag: "Point-to-Point Transit",
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
      idealFor: "Daily office commutes, spot staff errands, single executive airport drop",
    },
    {
      id: "executive-sedan",
      name: "Executive Sedan",
      models: "Maruti Ciaz / Honda City / Verna",
      image: "/images/sedan-interior.jpg",
      tag: "Mid-to-Senior Leadership",
      passengers: 4,
      luggage: 3,
      ac: "Multi-Zone Auto Climate",
      fuel: "Petrol / Hybrid",
      rates: { "4h": "₹ 1,950", "8h": "₹ 3,200", outstation: "₹ 15 / km" },
      amenities: [
        "Extra legroom comfort",
        "Leatherette executive seats",
        "Bottled water & sanitizers",
        "High-speed device chargers",
      ],
      idealFor: "Client visits, visiting auditors, executive meetings, senior management transit",
    },
    {
      id: "premium-muv",
      name: "Premium MUV (Innova)",
      models: "Toyota Innova Crysta / Hycross",
      image: "/images/airport-chauffeur.jpg",
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
      idealFor: "Visiting delegations, Fortune 500 leadership, airport VIP transfers, outstation tours",
    },
    {
      id: "luxury-suv",
      name: "Luxury SUV & Board Sedans",
      models: "Mercedes-Benz E-Class / BMW 5 / Fortuner",
      image: "/images/vip-fleet-lineup.jpg",
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
      idealFor: "Board members, international dignitaries, AGM summits, executive delegations",
    },
    {
      id: "ev-green",
      name: "EV Mobility (Green Fleet)",
      models: "Tata Tigor EV / Tata Nexon EV",
      image: "/images/ev-fleet.jpg",
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
      idealFor: "Corporate sustainability mandates, campus fixed routes, eco-conscious leadership",
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
              <Link
                href="/services/chauffeur-drive"
                className="text-xs font-bold text-slate-600 hover:text-green-600 transition-colors"
              >
                View Chauffeur Drive Specifications →
              </Link>

              <Link
                href={`/contact?vehicle=${current.id}`}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
              >
                <span>Reserve {current.name}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
