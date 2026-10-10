"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import SymbolBadge from "@/components/SymbolBadge";
import IndiaNetworkMap from "@/components/IndiaNetworkMap";
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
    { city: "Pune", top: "58%", left: "30%", role: "Automotive & Engineering Corridor Hub" },
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
      scope: "Enterprise Cloud Infrastructure & Passenger Personal Data Privacy",
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
    { tier: "Level 1: Immediate", eta: "0 - 15 Mins", owner: "24×7 Command Centre Desk", phone: "9820630817", action: "Live route re-routing, vehicle replacement dispatch, flight delay update" },
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

      {/* Header Banner with High-Tech Command Centre Visual */}
      <section className="py-14 md:py-20 border-b border-green-100/70 bg-[#F4FAF6] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4">
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
                Consolidate single or multi-city corporate accounts under 6 direct metro hubs (Mumbai, Bengaluru, Hyderabad, Chennai, Delhi NCR, Pune), 185+ managed partner cities, continuous live telemetry, and ISO-aligned quality standards.
              </p>

              {/* Quick Live Telemetry Chips */}
              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-bold text-slate-700">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200">
                  <MapPin className="w-4 h-4 text-green-600" />
                  <span>185+ Managed Cities</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200">
                  <Building className="w-4 h-4 text-green-600" />
                  <span>6 Direct Metro Hubs</span>
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

            {/* Right Showcase: 24x7 Operations Command Centre */}
            <div className="lg:col-span-5 relative group">
              <div className="absolute -inset-2 bg-gradient-to-tr from-green-500/20 to-emerald-400/10 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                <Image
                  src="/images/command-center.jpg"
                  alt="Speedways 24x7 Operations Command Centre and Live Telemetry Desk in Mumbai"
                  width={720}
                  height={480}
                  className="w-full h-[320px] sm:h-[380px] object-cover group-hover:scale-102 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent pointer-events-none"></div>

                <div className="absolute bottom-4 left-4 right-4 text-white text-xs flex items-center justify-between">
                  <span className="px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 font-semibold">
                    Mumbai Operations Command Centre
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-green-500 text-white font-mono font-bold text-[11px] shadow-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                    ACTIVE
                  </span>
                </div>
              </div>

              {/* Floating Telemetry Badge */}
              <div className="absolute -bottom-4 -left-3 sm:-left-5 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-green-200 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-green-100 text-green-700 flex items-center justify-center shrink-0">
                  <Radio className="w-5 h-5 text-green-600 animate-pulse" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Live AIS-140 GPS Tracking</div>
                  <div className="text-[10px] text-slate-500">Continuous 24×7 Network Oversight</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive India Network & 6 Metro Hubs */}
      <IndiaNetworkMap />

      {/* Searchable 185+ Cities Directory Drawer */}
      <section className="py-12 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200/90 shadow-sm">
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
