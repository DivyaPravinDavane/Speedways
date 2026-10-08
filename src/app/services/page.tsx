"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import SymbolBadge from "@/components/SymbolBadge";
import SpeedwaysInfoCards from "@/components/SpeedwaysInfoCards";
import {
  Compass,
  Plane,
  Clock,
  Navigation,
  Calendar,
  Users,
  Shield,
  Gem,
  Building,
  Zap,
  HandMetal,
  ArrowRight,
  CheckCircle2,
  PhoneCall,
  Sparkles,
  Filter,
  Car,
  MapPin,
  ShieldCheck,
  Radio,
  FileCheck,
  Check,
  X,
  Send,
} from "lucide-react";
import { SERVICES_CATALOG } from "@/data/speedwaysData";

export default function ServicesPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [activeInquiryService, setActiveInquiryService] = useState<string | null>(null);
  const [inquiryCity, setInquiryCity] = useState<string>("Mumbai");
  const [inquirySubmitted, setInquirySubmitted] = useState<boolean>(false);

  const categories = [
    { label: "All", count: 11 },
    { label: "Rental", count: 4 },
    { label: "Commute", count: 2 },
    { label: "Executive", count: 3 },
    { label: "Sustainable", count: 2 },
  ];

  // Map icon name to Lucide Icon
  const iconMap: Record<string, any> = {
    Compass: Compass,
    Plane: Plane,
    Clock: Clock,
    Navigation: Navigation,
    Calendar: Calendar,
    Users: Users,
    Shield: Shield,
    Gem: Gem,
    Building: Building,
    Zap: Zap,
    HandMetal: HandMetal,
  };

  const serviceImageMap: Record<string, string> = {
    "chauffeur-driven": "/images/hero-sedan.jpg",
    "airport-transfers": "/images/airport-chauffeur.jpg",
    "local-rentals": "/images/hero-sedan.jpg",
    "outstation-mobility": "/images/sedan-interior.jpg",
    "long-term-dedicated": "/images/hero-sedan.jpg",
    "employee-transport": "/images/employee-transit.jpg",
    "event-transportation": "/images/mice-fleet.jpg",
    "vip-luxury-movement": "/images/vip-fleet-lineup.jpg",
    "buses-coaches": "/images/employee-transit.jpg",
    "ev-mobility-fleet": "/images/ev-fleet.jpg",
    "self-drive-mobility": "/images/sedan-interior.jpg",
  };

  const filteredServices =
    selectedCategory === "All"
      ? SERVICES_CATALOG
      : SERVICES_CATALOG.filter((s) => s.category === selectedCategory);

  const slaPillars = [
    {
      title: "Guaranteed Lead Time",
      metric: "2h - 4h",
      desc: "2-hour dispatch for spot corporate bookings in Tier-1 metros; 4-hour pan-India guarantee.",
      icon: Clock,
    },
    {
      title: "7-Point Chauffeur Vetting",
      metric: "100% Verified",
      desc: "Mandatory police background clearance, drug/alcohol screening, and soft-skills certification.",
      icon: ShieldCheck,
    },
    {
      title: "Digital Duty Slips",
      metric: "Zero Paper",
      desc: "GPS timestamps via our technology platform, geofenced passenger OTP start/end, and automated toll capture.",
      icon: FileCheck,
    },
    {
      title: "5% Corporate GST Model",
      metric: "100% Compliant",
      desc: "Standardized 5% corporate GST billing structure with unified monthly consolidated MIS, statutory HSN/SAC codes, and e-invoicing.",
      icon: Building,
    },
  ];

  const handleInquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setInquirySubmitted(true);
    setTimeout(() => {
      setInquirySubmitted(false);
      setActiveInquiryService(null);
    }, 2000);
  };

  return (
    <div className="bg-[#F4FAF6]">
      {/* Breadcrumb Bar */}
      <div className="bg-slate-50 border-b border-slate-200/80">
        <Breadcrumbs items={[{ label: "Services Directory Hub" }]} />
      </div>

      {/* Header Banner with Animated Floating Telemetry Badges */}
      <section className="py-14 md:py-20 border-b border-slate-100 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-700 border border-green-200 text-xs font-bold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5 text-green-600" />
                11 Enterprise Mobility Verticals
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                <Radio className="w-3 h-3 text-green-600 animate-pulse" />
                Live 24×7 Operations Command
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Comprehensive Corporate Mobility Solutions
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Every vertical is engineered with standardized corporate SLAs, verified chauffeurs, automated platform telemetry, and compliant 5% GST invoicing across 185+ cities.
            </p>

            {/* Quick Live Telemetry Chips */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-bold text-slate-700">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200">
                <Car className="w-4 h-4 text-green-600" />
                <span>1,200+ Fleet</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200">
                <MapPin className="w-4 h-4 text-green-600" />
                <span>185+ Managed Cities</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200">
                <ShieldCheck className="w-4 h-4 text-green-600" />
                <span>100% Background Verified</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200">
                <Clock className="w-4 h-4 text-green-600" />
                <span>4h Local Lead Time</span>
              </div>
            </div>
          </div>

          {/* Interactive Category Filter Pills */}
          <div className="mt-10 flex flex-wrap items-center gap-2 pt-6 border-t border-slate-100">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2 flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5" /> Filter by:
            </span>
            {categories.map((cat) => (
              <button
                key={cat.label}
                onClick={() => setSelectedCategory(cat.label)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  selectedCategory === cat.label
                    ? "bg-green-500 text-white shadow-md shadow-green-500/25 scale-102"
                    : "bg-slate-100 hover:bg-slate-200 text-slate-700"
                }`}
              >
                <span>{cat.label === "All" ? "All Services" : `${cat.label}`}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${
                    selectedCategory === cat.label
                      ? "bg-white text-green-700"
                      : "bg-slate-200 text-slate-700"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 11 Services Grid with Hover Elevation & Micro-Interactions */}
      <section className="py-16 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => {
              const IconComp = iconMap[service.iconName] || Compass;
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-3xl border border-green-200/80 card-premium-shadow hover-border-flow flex flex-col justify-between group overflow-hidden transition-all duration-300"
                >
                  <div>
                    {/* Service Image Header with Category Badge & Symbol */}
                    <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                      <Image
                        src={serviceImageMap[service.id] || "/images/hero-sedan.jpg"}
                        alt={service.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-900/20 to-transparent pointer-events-none" />

                      <div className="absolute top-3.5 left-3.5">
                        <div className="w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md text-green-700 flex items-center justify-center shadow-xs border border-white/60">
                          <IconComp className="w-5 h-5 text-green-700" />
                        </div>
                      </div>

                      <div className="absolute top-3.5 right-3.5">
                        <span className="text-[11px] font-bold text-slate-900 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg shadow-xs border border-white/60">
                          {service.category}
                        </span>
                      </div>

                      <div className="absolute bottom-3.5 left-4 right-4">
                        <h3 className="text-lg font-bold text-white drop-shadow-xs">
                          {service.name}
                        </h3>
                      </div>
                    </div>

                    <div className="p-6">
                      {/* Description */}
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {service.detailedDesc}
                      </p>

                      {/* Target Audience / Use Case */}
                      <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700">
                        <strong className="text-slate-900 block font-semibold mb-0.5">
                          Enterprise Use Case:
                        </strong>
                        {service.audience}
                      </div>

                      {/* Key Feature Bullets */}
                      <div className="mt-4 space-y-1.5 pt-3 border-t border-slate-100">
                        {service.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between gap-3">
                    <Link
                      href={service.link}
                      className="text-xs font-bold text-green-700 hover:text-green-800 flex items-center gap-1.5 group-hover:translate-x-0.5 transition-transform"
                    >
                      <span>Solution Details</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>

                    <button
                      onClick={() => setActiveInquiryService(service.name)}
                      className="text-xs font-bold text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-green-100 hover:text-green-800 px-3.5 py-2 rounded-xl transition-all cursor-pointer"
                    >
                      Quick Inquiry
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Rotating Conic Gradient InfoCards Showcase */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-100 px-3 py-1 rounded-full">
              Enterprise Mobility Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 tracking-tight">
              Featured Corporate Mobility Tiers
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Explore our core pillars featuring interactive rotating borders, verified chauffeur protocols, and zero-compromise executive transport.
            </p>
          </div>

          <SpeedwaysInfoCards />
        </div>
      </section>

      {/* Corporate SLA Assurance Matrix */}
      <section className="py-20 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-100 px-3 py-1 rounded-full">
              Standard Operating Procedures
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 tracking-tight">
              Speedways 4-Pillar SLA Guarantee
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Every trip booked across our 185+ city network adheres to rigorous contractual benchmarks.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {slaPillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-7 rounded-3xl border border-green-200/80 card-premium-shadow hover-border-flow transition-all group duration-300"
                >
                  <div className="w-10 h-10 rounded-xl bg-green-100 text-green-700 flex items-center justify-center mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors">
                    <IconComp className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-extrabold text-green-700 uppercase tracking-wider mb-1">
                    {pillar.metric}
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Deep-Dive Dedicated Portals Banner */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F0FDF4] border border-[#DCFCE7] rounded-3xl p-8 sm:p-12">
            <div className="max-w-3xl mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-white px-3 py-1 rounded-full border border-green-200">
                Deep-Dive Portals
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mt-3 tracking-tight">
                Looking for Detailed Technical & Operational Specifications?
              </h2>
              <p className="text-slate-600 text-sm mt-2">
                Explore our dedicated solution pages covering tariff matrices, route optimization algorithms, and C-suite chauffeur protocols.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/services/chauffeur-drive"
                className="bg-white p-6 rounded-2xl border border-green-200/80 card-premium-shadow hover-border-flow transition-all group duration-300"
              >
                <h3 className="text-base font-bold text-slate-900 group-hover:text-green-600 transition-colors">
                  Corporate Car Rental & Outstation →
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Airport transfers, 4h/40km, 8h/80km packages, long-term executive fixed leases, and 5% GST billing.
                </p>
              </Link>

              <Link
                href="/services/employee-transport"
                className="bg-white p-6 rounded-2xl border border-green-100 hover:border-green-400 shadow-2xs hover:shadow-md transition-all group"
              >
                <h3 className="text-base font-bold text-slate-900 group-hover:text-green-600 transition-colors">
                  Employee Transport Services (ETS) →
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Turnkey shift commuting for IT/manufacturing campuses, automated rostering, and women safety escorts.
                </p>
              </Link>

              <Link
                href="/services/vip-luxury-events"
                className="bg-white p-6 rounded-2xl border border-green-100 hover:border-green-400 shadow-2xs hover:shadow-md transition-all group"
              >
                <h3 className="text-base font-bold text-slate-900 group-hover:text-green-600 transition-colors">
                  VIP Movement & MICE Summits →
                </h3>
                <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                  Mercedes, BMW, Audi, Fortuner deployments, protocol-trained chauffeurs, and large-scale MICE transport desks.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Quick Inquiry Modal */}
      {activeInquiryService && (
        <div className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative animate-in zoom-in-95 duration-200">
            <button
              onClick={() => setActiveInquiryService(null)}
              className="absolute top-5 right-5 p-2 rounded-xl text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {inquirySubmitted ? (
              <div className="text-center py-6 space-y-3">
                <div className="w-12 h-12 rounded-full bg-green-100 text-green-700 flex items-center justify-center mx-auto">
                  <Check className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-bold text-slate-900">Inquiry Logged!</h3>
                <p className="text-xs text-slate-500">
                  Our corporate relationship desk will call you shortly regarding <strong>{activeInquiryService}</strong>.
                </p>
              </div>
            ) : (
              <div>
                <span className="text-[11px] font-bold text-green-700 uppercase tracking-wider bg-green-50 px-2.5 py-1 rounded-full border border-green-200">
                  Rapid Corporate Response
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-2">
                  Request Rate Card: {activeInquiryService}
                </h3>
                <p className="text-xs text-slate-500 mt-1">
                  Specify your city and contact details for an instant quotation.
                </p>

                <form onSubmit={handleInquirySubmit} className="mt-5 space-y-4">
                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      City of Requirement
                    </label>
                    <select
                      value={inquiryCity}
                      onChange={(e) => setInquiryCity(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-800 bg-white focus:outline-none focus:border-green-500"
                    >
                      <option value="Mumbai">Mumbai (Head Office)</option>
                      <option value="Delhi NCR">Delhi NCR</option>
                      <option value="Bengaluru">Bengaluru</option>
                      <option value="Hyderabad">Hyderabad</option>
                      <option value="Chennai">Chennai</option>
                      <option value="Other">Other (185+ Managed Cities)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-700 mb-1">
                      Corporate Email / Phone
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. procurement@company.com or 9820630817"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-slate-200 text-xs font-medium text-slate-800 bg-white focus:outline-none focus:border-green-500"
                    />
                  </div>

                  <div className="pt-2 flex items-center justify-between gap-3">
                    <a
                      href="tel:9820630817"
                      className="text-xs font-bold text-slate-600 hover:text-green-600 flex items-center gap-1.5"
                    >
                      <PhoneCall className="w-3.5 h-3.5 text-green-600" />
                      <span>Direct: 9820630817</span>
                    </a>

                    <button
                      type="submit"
                      className="px-5 py-2.5 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold text-xs uppercase tracking-wider transition-colors shadow-md shadow-green-500/25 cursor-pointer flex items-center gap-1.5"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Send Request</span>
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
