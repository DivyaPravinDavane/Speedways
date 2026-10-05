"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import SymbolBadge from "@/components/SymbolBadge";
import InteractiveFleetVisualizer from "@/components/InteractiveFleetVisualizer";
import {
  Car,
  Users,
  Briefcase,
  Fan,
  Fuel,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Zap,
  Bus,
  Layers,
  PhoneCall,
  Check,
  X,
  Send,
  Clock,
  MapPin,
  FileCheck,
} from "lucide-react";
import { FLEET_PORTFOLIO } from "@/data/speedwaysData";

export default function FleetPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeReserveTier, setActiveReserveTier] = useState<any | null>(null);
  const [reserveDays, setReserveDays] = useState<string>("Spot Rental (1-3 Days)");
  const [reserveCity, setReserveCity] = useState<string>("Mumbai");
  const [reserveSubmitted, setReserveSubmitted] = useState<boolean>(false);

  const categories = [
    { label: "All", count: 6 },
    { label: "Economy Sedan", count: 1 },
    { label: "Executive Sedan", count: 1 },
    { label: "MUV", count: 1 },
    { label: "Premium MUV", count: 1 },
    { label: "SUV / Luxury", count: 1 },
    { label: "EV & Coaches", count: 1 },
  ];

  const imageMap: Record<string, string> = {
    "economy-sedan": "/images/hero-sedan.jpg",
    "executive-sedan": "/images/sedan-interior.jpg",
    "muv": "/images/airport-chauffeur.jpg",
    "premium-muv": "/images/airport-chauffeur.jpg",
    "luxury-suv": "/images/vip-fleet-lineup.jpg",
    "ev-coaches": "/images/ev-fleet.jpg",
  };

  const filteredFleet =
    selectedCategory === "All"
      ? FLEET_PORTFOLIO
      : FLEET_PORTFOLIO.filter((item) => item.category === selectedCategory);

  const handleReserveSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setReserveSubmitted(true);
    setTimeout(() => {
      setReserveSubmitted(false);
      setActiveReserveTier(null);
    }, 2000);
  };

  return (
    <div className="bg-[#F4FAF6]">
      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-200/80">
        <Breadcrumbs items={[{ label: "Fleet Portfolio & Specifications" }]} />
      </div>

      {/* Header Banner with Animated Floating Telemetry Badges */}
      <section className="py-14 md:py-20 border-b border-green-100/70 bg-[#F4FAF6] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-700 border border-green-200 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-green-600" />
                1,200+ Owned & Partner Vehicles
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                <ShieldCheck className="w-3 h-3 text-green-600" />
                100% Commercial Yellow-Board
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Enterprise Fleet Portfolio & Vehicle Specifications
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Every vehicle in the Speedways network is commercially registered, AIS-140 GPS-fitted, maintained under strict preventive inspection logs, and operated by a verified corporate chauffeur.
            </p>

            {/* Quick Spec Telemetry Chips */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-bold text-slate-700">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200">
                <Car className="w-4 h-4 text-green-600" />
                <span>6 Commercial Tiers</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200">
                <Clock className="w-4 h-4 text-green-600" />
                <span>&lt; 3.5 Yrs Average Age</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200">
                <ShieldCheck className="w-4 h-4 text-green-600" />
                <span>Sanitized & Ozone Fresh</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200">
                <Zap className="w-4 h-4 text-green-600" />
                <span>EV & Hybrid Ready</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 1. INTERACTIVE FLEET VISUALIZER MODULE */}
      <section className="py-14 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-100 px-3 py-1 rounded-full">
              Interactive Tool
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
              Interactive Capacity & Spec Configurator
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Select any vehicle tier below to preview exact seating capacity, luggage count, and corporate rental tariffs.
            </p>
          </div>

          <InteractiveFleetVisualizer />
        </div>
      </section>

      {/* 2. FULL FLEET CATALOG (FILTERABLE WITH IMAGES & PICTOGRAMS) */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-50 px-3 py-1 rounded-full border border-green-200">
                Directory
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
                Detailed Vehicle Tiers Directory
              </h2>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                Filter by corporate vehicle category to inspect technical specifications and deployment contexts.
              </p>
            </div>

            {/* Filter Pills with Counts */}
            <div className="flex flex-wrap items-center gap-2">
              {categories.map((cat) => (
                <button
                  key={cat.label}
                  onClick={() => setSelectedCategory(cat.label)}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedCategory === cat.label
                      ? "bg-green-500 text-white shadow-xs"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                  }`}
                >
                  <span>{cat.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFleet.map((tier) => (
              <div
                key={tier.id}
                className="bg-white rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-green-400 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
              >
                <div>
                  {/* High Quality Vehicle Thumbnail with Zoom on Hover */}
                  <div className="relative h-48 w-full bg-slate-100 overflow-hidden">
                    <Image
                      src={imageMap[tier.id] || "/images/hero-sedan.jpg"}
                      alt={tier.category}
                      width={500}
                      height={300}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-200 text-[11px] font-bold text-green-700 shadow-2xs">
                      {tier.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-green-600 transition-colors">
                      {tier.models}
                    </h3>

                    <p className="text-xs text-slate-600 mt-1.5 leading-relaxed">
                      {tier.description}
                    </p>

                    {/* Deployment Context Tag */}
                    <div className="mt-3 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-[11px]">
                      <span className="text-slate-400 font-semibold block mb-0.5">Corporate Deployment:</span>
                      <span className="text-slate-800 font-medium">{tier.deploymentContext}</span>
                    </div>

                    {/* Vehicle Spec Grid with Pictograms */}
                    <div className="grid grid-cols-2 gap-2 my-4 pt-3 border-t border-slate-100 text-xs text-slate-700 font-medium">
                      <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50/60">
                        <Users className="w-3.5 h-3.5 text-green-600 shrink-0" />
                        <span>{tier.passengers}</span>
                      </div>

                      <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50/60">
                        <Briefcase className="w-3.5 h-3.5 text-green-600 shrink-0" />
                        <span>{tier.luggage}</span>
                      </div>

                      <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50/60">
                        <Fan className="w-3.5 h-3.5 text-green-600 shrink-0" />
                        <span className="truncate">{tier.acType}</span>
                      </div>

                      <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-50/60">
                        <Fuel className="w-3.5 h-3.5 text-green-600 shrink-0" />
                        <span>{tier.fuelType}</span>
                      </div>
                    </div>

                    {/* Highlights */}
                    <div className="space-y-1 pt-1">
                      {tier.highlights.map((hl, hIdx) => (
                        <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-600">
                          <Check className="w-3.5 h-3.5 text-green-600 shrink-0" />
                          <span>{hl}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Card Action Footer */}
                <div className="p-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => setActiveReserveTier(tier)}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-green-700 hover:text-green-800 group-hover:translate-x-1 transition-transform cursor-pointer"
                  >
                    <span>Instant Tariff Quote</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => setActiveReserveTier(tier)}
                    className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
                  >
                    Reserve
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Standards Guarantee Bar */}
      <section className="py-16 bg-[#F0FDF4] border-b border-[#DCFCE7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-white px-3 py-1 rounded-full border border-green-200">
              Zero-Compromise Standards
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
              Speedways 5-Point Fleet Maintenance Benchmark
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Every vehicle reporting for corporate duty adheres to strict preventive maintenance protocols.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 text-center">
            <div className="bg-white p-5 rounded-2xl border border-green-200 shadow-2xs hover:shadow-md transition-shadow">
              <div className="text-xs font-bold text-green-700 uppercase">Age Benchmark</div>
              <div className="text-base font-black text-slate-900 mt-1">&lt; 3.5 Years Average</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Strict vehicle retirement policy</div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-green-200 shadow-2xs hover:shadow-md transition-shadow">
              <div className="text-xs font-bold text-green-700 uppercase">Sanitation</div>
              <div className="text-base font-black text-slate-900 mt-1">Pre-Trip Ozone Clean</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Deep interior vacuum & fresh scent</div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-green-200 shadow-2xs hover:shadow-md transition-shadow">
              <div className="text-xs font-bold text-green-700 uppercase">Statutory</div>
              <div className="text-base font-black text-slate-900 mt-1">100% Commercial Fitness</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Commercial yellow board & insurance</div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-green-200 shadow-2xs hover:shadow-md transition-shadow">
              <div className="text-xs font-bold text-green-700 uppercase">Telemetry</div>
              <div className="text-base font-black text-slate-900 mt-1">AIS-140 GPS & Panic SOS</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Real-time live cloud tracking</div>
            </div>

            <div className="bg-white p-5 rounded-2xl border border-green-200 shadow-2xs hover:shadow-md transition-shadow">
              <div className="text-xs font-bold text-green-700 uppercase">Amenities</div>
              <div className="text-base font-black text-slate-900 mt-1">Executive Travel Kit</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Water, tissues, and mobile charger</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl font-black text-slate-900">
              Need Multi-City Fleet Allocation?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Whether you need 5 sedans in Mumbai, 10 Innova Crystas in Bengaluru, or an EV fleet in Delhi NCR, we execute nationwide under a unified corporate SLA.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold text-sm shadow-md shadow-green-500/25 transition-all cursor-pointer"
              >
                <span>Empanel Speedways Fleet</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:9820630817"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold text-sm border border-slate-200 transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-green-600" />
                <span>Call Operations Desk</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Reservation / Instant Quote Modal */}
      {activeReserveTier && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setActiveReserveTier(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {reserveSubmitted ? (
              <div className="text-center py-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-green-100 text-green-700 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Tariff Quote Sent!</h3>
                <p className="text-xs text-slate-500">
                  Our corporate operations desk has logged your request for <strong>{activeReserveTier.models}</strong> in <strong>{reserveCity}</strong>.
                </p>
              </div>
            ) : (
              <div>
                <span className="text-[11px] font-bold text-green-700 uppercase tracking-wider bg-green-50 px-2.5 py-1 rounded-full border border-green-200">
                  Vehicle Tariff Desk
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-2">
                  Request Rate Matrix: {activeReserveTier.models}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Category: {activeReserveTier.category} • Capacity: {activeReserveTier.passengers}
                </p>

                <form onSubmit={handleReserveSubmit} className="mt-5 space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      City of Deployment
                    </label>
                    <select
                      value={reserveCity}
                      onChange={(e) => setReserveCity(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-800 bg-white focus:outline-none focus:border-green-500"
                    >
                      <option value="Mumbai">Mumbai (Head Office)</option>
                      <option value="Delhi NCR">Delhi NCR</option>
                      <option value="Bengaluru">Bengaluru</option>
                      <option value="Hyderabad">Hyderabad</option>
                      <option value="Chennai">Chennai</option>
                      <option value="Other">Other City (185+ Network)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Requirement Duration
                    </label>
                    <select
                      value={reserveDays}
                      onChange={(e) => setReserveDays(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-800 bg-white focus:outline-none focus:border-green-500"
                    >
                      <option value="Airport Transfer">Airport Transfer (Spot)</option>
                      <option value="Local 4h/40km">Local Half-Day (4h/40km)</option>
                      <option value="Local 8h/80km">Local Full-Day (8h/80km)</option>
                      <option value="Monthly Dedicated">Monthly Dedicated Corporate Lease</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Work Email / Phone
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. travel@company.com or 9820630817"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-800 bg-white focus:outline-none focus:border-green-500"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between gap-3">
                    <a
                      href="tel:9820630817"
                      className="text-xs font-bold text-slate-600 hover:text-green-600 flex items-center gap-1.5"
                    >
                      <PhoneCall className="w-3.5 h-3.5 text-green-600" />
                      <span>9820630817</span>
                    </a>

                    <button
                      type="submit"
                      className="px-5 py-2.5 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md shadow-green-500/25 cursor-pointer flex items-center gap-1.5"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Get Instant Tariff</span>
                    </button>
                  </div>
                </form>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
