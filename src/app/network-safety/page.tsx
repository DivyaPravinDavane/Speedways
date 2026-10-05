"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import SymbolBadge from "@/components/SymbolBadge";
import {
  MapPin,
  ShieldCheck,
  Radio,
  MonitorCheck,
  UserCheck,
  Headphones,
  AlertTriangle,
  Globe,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  PhoneCall,
  Building,
  Award,
  Lock,
  FileCheck,
  Search,
  Check,
  Clock,
  Car,
  ChevronRight,
} from "lucide-react";
import {
  DIRECT_BRANCHES,
  COMMAND_CENTRE_PILLARS,
  SAFETY_PILLARS,
} from "@/data/speedwaysData";

export default function NetworkSafetyPage() {
  const [selectedHub, setSelectedHub] = useState<number>(0);
  const [citySearchQuery, setCitySearchQuery] = useState<string>("");
  const [activeIsoTab, setActiveIsoTab] = useState<number>(0);

  const hubCoordinates = [
    { city: "Delhi NCR", top: "28%", left: "35%", role: "North India Regional Hub" },
    { city: "Mumbai (Head Office)", top: "54%", left: "26%", role: "Head Office & Command Centre" },
    { city: "Hyderabad", top: "62%", left: "44%", role: "Telangana & AP Operations Desk" },
    { city: "Bengaluru", top: "76%", left: "38%", role: "South India Hub & Tech Corridor" },
    { city: "Chennai", top: "77%", left: "48%", role: "Automotive Corridor Hub" },
  ];

  const networkCities = [
    "Mumbai", "Delhi NCR", "Bengaluru", "Hyderabad", "Chennai", "Kolkata", "Pune",
    "Ahmedabad", "Jaipur", "Chandigarh", "Lucknow", "Kochi", "Indore", "Coimbatore",
    "Vadodara", "Bhubaneswar", "Visakhapatnam", "Nagpur", "Surat", "Patna", "Guwahati",
    "Bhopal", "Ludhiana", "Agra", "Varanasi", "Mysuru", "Nashik", "Rajkot", "Dehradun",
    "Ranchi", "Thiruvananthapuram", "Mangaluru", "Jamshedpur", "Vijayawada", "Aurangabad"
  ];

  const filteredCities = networkCities.filter((c) =>
    c.toLowerCase().includes(citySearchQuery.toLowerCase())
  );

  const isoStandards = [
    {
      code: "ISO 9001",
      name: "Quality Management Systems",
      desc: "Standardized SLA workflows, preventive fleet inspection schedules, and trip dispatch consistency nationwide.",
      scope: "Pan-India Corporate Mobility & Fleet Management Operations",
      certifiedSince: "2016",
    },
    {
      code: "ISO 27001",
      name: "Information Security & Data Protection",
      desc: "Corporate passenger contact information, travel itineraries, and billing data encrypted under AES-256 standards.",
      scope: "Indecab Cloud Infrastructure & Passenger Personal Data Privacy",
      certifiedSince: "2019",
    },
    {
      code: "ISO 45001",
      name: "Occupational Health & Safety",
      desc: "Continuous driver health checks, fatigue monitoring algorithms, mandatory seatbelt enforcement, and emergency SOS response.",
      scope: "Chauffeur Working Hours, Fleet Roadworthiness & Safety Operations",
      certifiedSince: "2018",
    },
    {
      code: "ISO 14001",
      name: "Environmental Management Systems",
      desc: "Carbon footprint auditing, route clustering to cut dead-kms, and accelerated transition to EV corporate commute fleets.",
      scope: "Fleet Carbon Abatement, Electric Vehicle Deployments & ESG Reporting",
      certifiedSince: "2021",
    },
    {
      code: "ISO 22301",
      name: "Business Continuity Management",
      desc: "Dual command center redundancy, backup telecommunications, and fail-safe corporate transport continuity during regional disruptions.",
      scope: "24×7 Operations Command Resilience & Emergency Escalation Protocol",
      certifiedSince: "2020",
    },
  ];

  const escalationMatrix = [
    { tier: "Level 1: Immediate", eta: "0 - 15 Mins", owner: "24×7 Command Centre Desk", phone: "9820630817", action: "Live route re-routing, vehicle replacement dispatch, radar flight delay update" },
    { tier: "Level 2: City Supervisor", eta: "Within 30 Mins", owner: "City Regional Operations Lead", phone: "Direct SPOC", action: "Chauffeur escalation, airport curbside intervention, local traffic mitigation" },
    { tier: "Level 3: Strategic Account Head", eta: "Within 60 Mins", owner: "Dedicated Corporate Account SPOC", phone: "Dedicated Lead", action: "SLA compliance audit, contractual billing adjustment, VIP protocol resolution" },
    { tier: "Level 4: Executive Leadership", eta: "Within 2 Hours", owner: "Managing Director & Head of Operations", phone: "Executive Office", action: "Enterprise review, systemic SOP refinement, senior management reporting" },
  ];

  return (
    <div className="bg-[#F4FAF6]">
      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-200/80">
        <Breadcrumbs items={[{ label: "Network, Command Centre & Safety" }]} />
      </div>

      {/* Header Banner with Animated Floating Telemetry Badges */}
      <section className="py-14 md:py-20 border-b border-green-100/70 bg-[#F4FAF6] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-700 border border-green-200 text-xs font-bold uppercase tracking-wider">
                <Globe className="w-3.5 h-3.5 text-green-600" />
                Pan-India Reach & Unified Governance
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                <Radio className="w-3 h-3 text-green-600 animate-pulse" />
                Live 24×7 Command Centre Active
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              185+ City Network, 24×7 Command Centre & ISO Safety
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Consolidate single or multi-city corporate accounts under 5 direct metro hubs, 185+ managed partner cities, continuous live telemetry, and ISO-certified quality standards.
            </p>

            {/* Quick Live Telemetry Chips */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-bold text-slate-700">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200">
                <MapPin className="w-4 h-4 text-green-600" />
                <span>185+ Managed Cities</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200">
                <Building className="w-4 h-4 text-green-600" />
                <span>5 Direct Metro Hubs</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200">
                <ShieldCheck className="w-4 h-4 text-green-600" />
                <span>5 ISO Standards Compliant</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200">
                <Radio className="w-4 h-4 text-green-600 animate-pulse" />
                <span>24×7 Centralized Ops</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive India Network & 5 Metro Hubs */}
      <section className="py-20 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-100 px-3 py-1 rounded-full">
              Direct Metros & 185+ Managed Cities
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 tracking-tight">
              Direct Metro Hubs + National Managed Network
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Click on any direct hub below or the map beacons to inspect operational capabilities, office coordinates, and branch coverage.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left: Interactive Map Visual Card */}
            <div className="lg:col-span-6 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-lg relative min-h-[480px] flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-100">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-ping"></span>
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-700">
                      Live Network Radar Map
                    </span>
                  </div>
                  <span className="text-xs font-bold text-green-700 bg-green-50 px-2.5 py-1 rounded-full border border-green-200">
                    185+ Cities Active
                  </span>
                </div>
                <p className="text-xs text-slate-500 mb-6">
                  Select any beacon to highlight branch details, direct telephone hotline, and regional jurisdiction.
                </p>
              </div>

              {/* Styled India Map Outline Canvas */}
              <div className="relative w-full h-[320px] bg-slate-50 rounded-2xl border border-slate-200/60 overflow-hidden flex items-center justify-center p-4">
                {/* SVG India Abstract Contour */}
                <svg viewBox="0 0 400 450" className="w-full h-full opacity-40 text-slate-400">
                  <path
                    d="M180 20 L210 50 L230 40 L260 80 L250 110 L310 140 L350 130 L380 160 L360 200 L320 200 L300 230 L280 250 L250 310 L210 380 L180 430 L160 390 L140 330 L120 280 L100 250 L90 220 L110 190 L130 180 L140 140 L160 110 Z"
                    fill="#e2e8f0"
                    stroke="#94a3b8"
                    strokeWidth="1.5"
                    strokeLinejoin="round"
                  />
                </svg>

                {/* Beacon Pins */}
                {hubCoordinates.map((hub, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedHub(idx)}
                    style={{ top: hub.top, left: hub.left }}
                    className={`absolute transform -translate-x-1/2 -translate-y-1/2 group transition-transform cursor-pointer ${
                      selectedHub === idx ? "scale-125 z-20" : "scale-100 z-10"
                    }`}
                  >
                    <span className="relative flex h-5 w-5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span
                        className={`relative inline-flex rounded-full h-5 w-5 border-2 border-white shadow-md items-center justify-center text-[9px] font-bold text-white ${
                          selectedHub === idx ? "bg-green-600 scale-110" : "bg-green-500"
                        }`}
                      >
                        •
                      </span>
                    </span>
                    <span
                      className={`absolute left-1/2 -translate-x-1/2 -bottom-5 whitespace-nowrap text-[10px] font-bold px-1.5 py-0.5 rounded shadow-xs transition-all ${
                        selectedHub === idx
                          ? "bg-slate-900 text-white"
                          : "bg-white text-slate-700 border border-slate-200"
                      }`}
                    >
                      {hub.city.split(" ")[0]}
                    </span>
                  </button>
                ))}
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>Pulsing Pins = Direct Metro Hubs</span>
                <span className="font-semibold text-slate-700">Central HO: Mumbai</span>
              </div>
            </div>

            {/* Right: Hub Selector & Details */}
            <div className="lg:col-span-6 space-y-4">
              <div className="space-y-3">
                {DIRECT_BRANCHES.map((b, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedHub(idx)}
                    className={`p-5 rounded-2xl border transition-all cursor-pointer ${
                      selectedHub === idx
                        ? "bg-white border-green-500 shadow-md ring-2 ring-green-500/20"
                        : "bg-white/70 hover:bg-white border-slate-200"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <div className="flex items-center gap-2">
                        <MapPin
                          className={`w-4 h-4 ${
                            selectedHub === idx ? "text-green-600" : "text-slate-400"
                          }`}
                        />
                        <h3 className="text-base font-bold text-slate-900">{b.city}</h3>
                      </div>
                      <span className="text-[11px] font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded-full border border-green-200">
                        Direct Hub
                      </span>
                    </div>

                    <p className="text-xs text-slate-600 font-medium">{b.role}</p>

                    <div className="mt-2 text-xs text-slate-500 flex items-start gap-1.5">
                      <span className="text-slate-400">Address:</span>
                      <span>{b.address}</span>
                    </div>

                    <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs font-semibold">
                      <a
                        href={`tel:${b.phone}`}
                        className="text-green-700 hover:text-green-800 flex items-center gap-1 font-bold"
                      >
                        <PhoneCall className="w-3.5 h-3.5 text-green-600" /> Direct: {b.phone}
                      </a>
                      <span className="text-slate-400">{b.email}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Searchable 185+ Cities Directory Drawer */}
          <div className="mt-12 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-50 px-2.5 py-1 rounded-full border border-green-200">
                  National Footprint
                </span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">
                  185+ Managed Cities Directory
                </h3>
                <p className="text-xs text-slate-500">
                  Type any city to verify immediate corporate mobility support and partner network dispatch.
                </p>
              </div>

              <div className="relative w-full sm:w-72">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  value={citySearchQuery}
                  onChange={(e) => setCitySearchQuery(e.target.value)}
                  placeholder="Search city (e.g. Pune, Jaipur)..."
                  className="w-full pl-9 pr-4 py-2 rounded-xl border border-slate-200 text-xs font-medium text-slate-800 focus:outline-none focus:border-green-500"
                />
              </div>
            </div>

            <div className="flex flex-wrap gap-2 max-h-48 overflow-y-auto p-1">
              {filteredCities.map((city, cIdx) => (
                <span
                  key={cIdx}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 hover:bg-green-50 text-slate-700 hover:text-green-800 border border-slate-200 hover:border-green-300 text-xs font-semibold transition-colors"
                >
                  <MapPin className="w-3 h-3 text-green-600" />
                  <span>{city}</span>
                </span>
              ))}
              {filteredCities.length === 0 && (
                <div className="text-xs text-slate-400 py-4 w-full text-center">
                  No cities matching &ldquo;{citySearchQuery}&rdquo;. Speedways operates in 185+ cities nationwide — contact operations desk for custom dispatch.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 24×7 Command Centre: The 6 Operational Control Pillars */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-100 px-3 py-1 rounded-full">
              Centralised Operational Nerve Centre
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 tracking-tight">
              The 6 Pillars of the 24×7 Command Centre
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Based at Mumbai Head Office, our command center provides round-the-clock telemetry, driver monitoring, and escalation control across all 185+ cities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {COMMAND_CENTRE_PILLARS.map((p, idx) => {
              const icons = [MonitorCheck, UserCheck, Radio, Headphones, AlertTriangle, Globe];
              const IconComp = icons[idx];
              return (
                <div
                  key={idx}
                  className="bg-slate-50/70 p-7 rounded-3xl border border-slate-200/90 shadow-2xs hover:border-green-400 hover:bg-white hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors shadow-2xs">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {p.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-200/60 text-[11px] font-bold text-green-700 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>Continuous 24×7 Telemetry</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5-Tier ISO Certification & Auditable Standards */}
      <section className="py-20 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-100 px-3 py-1 rounded-full">
              Enterprise Compliance
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 tracking-tight">
              5 ISO Certifications for Corporate Peace of Mind
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Every operation from chauffeur hiring to GPS encryption is externally audited against international standards.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* ISO Selector Pills */}
            <div className="lg:col-span-4 space-y-2">
              {isoStandards.map((std, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIsoTab(idx)}
                  className={`w-full text-left p-4 rounded-2xl border transition-all cursor-pointer ${
                    activeIsoTab === idx
                      ? "bg-white border-green-500 shadow-md ring-2 ring-green-500/20 text-slate-900"
                      : "bg-white/60 hover:bg-white border-slate-200 text-slate-600"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono font-black text-sm text-green-700">
                      {std.code}
                    </span>
                    <span className="text-[10px] font-semibold text-slate-400">
                      Since {std.certifiedSince}
                    </span>
                  </div>
                  <div className="text-xs font-bold text-slate-900 mt-1 line-clamp-1">
                    {std.name}
                  </div>
                </button>
              ))}
            </div>

            {/* Active ISO Detail Card */}
            <div className="lg:col-span-8 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-xl space-y-6">
              <div className="flex items-center justify-between pb-4 border-b border-slate-100">
                <div>
                  <span className="text-xs font-extrabold text-green-700 uppercase tracking-wider">
                    {isoStandards[activeIsoTab].code} Standard
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 mt-1">
                    {isoStandards[activeIsoTab].name}
                  </h3>
                </div>
                <div className="w-12 h-12 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center font-bold">
                  <Award className="w-6 h-6" />
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed">
                {isoStandards[activeIsoTab].desc}
              </p>

              <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 space-y-2 text-xs">
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Audited Scope:</strong> {isoStandards[activeIsoTab].scope}
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">Annual Surveillance Audit:</strong> Certified & in good standing through 2026.
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between">
                <Link
                  href="/contact"
                  className="text-xs font-bold text-green-700 hover:text-green-800 flex items-center gap-1.5"
                >
                  <span>Request ISO Certificate Copy for RFP</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <span className="text-xs font-mono text-slate-400">Verified by Bureau Veritas</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Escalation Protocol Matrix */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-100 px-3 py-1 rounded-full">
              Rapid Incident Response
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 tracking-tight">
              4-Tier Emergency Escalation Protocol
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              In any unforeseen travel event (flight cancellation, accident, vehicle breakdown), our escalation tree triggers immediate resolution.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {escalationMatrix.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50/70 p-6 rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-green-400 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-black text-green-700 bg-green-100 px-2.5 py-0.5 rounded-full">
                      {item.eta}
                    </span>
                    <span className="text-[10px] font-bold text-slate-400 uppercase">
                      Tier 0{idx + 1}
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-1">
                    {item.tier}
                  </h4>
                  <div className="text-xs font-semibold text-slate-500 mb-3">
                    {item.owner}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.action}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center justify-between text-xs font-bold text-slate-800">
                  <PhoneCall className="w-3.5 h-3.5 text-green-600" />
                  <span>{item.phone}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Direct Contact Banner */}
      <section className="py-16 bg-[#F0FDF4] text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl font-black text-slate-900">
              Connect With the 24×7 Operations Desk
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Speak directly with our centralized command centre lead for urgent trip dispatches, airport VIP coordination, or nationwide fleet contracting.
            </p>
            <div className="pt-2 flex flex-wrap justify-center gap-4">
              <a
                href="tel:9820630817"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold text-sm shadow-md shadow-green-500/25 transition-all"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Call Hotline: 9820630817</span>
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm border border-slate-200 transition-colors"
              >
                <span>Request Enterprise SLA Matrix</span>
                <ArrowRight className="w-4 h-4 text-green-600" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
