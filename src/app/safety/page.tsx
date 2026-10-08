"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  ShieldCheck,
  UserCheck,
  AlertTriangle,
  Navigation,
  Radio,
  ShieldAlert,
  Wrench,
  FileCheck,
  History,
  Siren,
  ClipboardCheck,
  LifeBuoy,
  Award,
  TrendingDown,
  Calendar,
  Coins,
  CheckCircle,
  Sparkles,
  Headphones,
  ArrowRight,
  PhoneCall,
  CheckCircle2,
  Car,
  Clock,
  Layers,
  ChevronRight,
} from "lucide-react";
import {
  SAFETY_COMPLIANCE_PILLARS,
  SUBSCRIPTION_BENEFITS,
} from "@/data/speedwaysData";

export default function SafetyAndCompliancePage() {
  const [activeTab, setActiveTab] = useState<"safety" | "subscription">("safety");
  const [selectedTenure, setSelectedTenure] = useState<"1 Year" | "2 Years" | "3 Years">("2 Years");

  // Map icon strings to Lucide icon components
  const iconMap: Record<string, any> = {
    UserCheck,
    AlertTriangle,
    Navigation,
    Radio,
    ShieldAlert,
    Wrench,
    FileCheck,
    History,
    Siren,
    ClipboardCheck,
    LifeBuoy,
    Award,
    TrendingDown,
    Calendar,
    Coins,
    CheckCircle,
    Sparkles,
    Headphones,
  };

  return (
    <div className="bg-[#F4FAF6] min-h-screen">
      {/* 1. Breadcrumbs */}
      <div className="bg-slate-50 border-b border-slate-200/80">
        <Breadcrumbs items={[{ label: "Safety & Compliance" }]} />
      </div>

      {/* 2. Hero Header */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-white to-white overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-green-50 text-[#48B83D] border border-green-200 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
              <ShieldCheck className="w-3.5 h-3.5" />
              Corporate Duty of Care & Statutory Compliance
            </span>
            <h1 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Safety Built Into <span className="text-[#48B83D]">Every Journey</span>
            </h1>
            <p className="mt-3 text-lg font-bold text-slate-800">
              Safety & Compliance
            </p>
            <p className="mt-2 text-base sm:text-lg text-slate-600 leading-relaxed">
              From police-verified chauffeurs and in-vehicle SOS buttons to round-the-clock command centre oversight and long-term car subscription benefits, Speedways provides an uncompromising safety shield for India’s corporate workforce.
            </p>

            {/* Quick Live Telemetry Badges */}
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs font-bold text-slate-700">
              <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <UserCheck className="w-4 h-4 text-green-600" />
                <span>100% Police-Verified Drivers</span>
              </div>
              <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <AlertTriangle className="w-4 h-4 text-green-600" />
                <span>In-Vehicle SOS & Panic Buttons</span>
              </div>
              <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <Radio className="w-4 h-4 text-green-600 animate-pulse" />
                <span>24×7 Command Centre Telemetry</span>
              </div>
              <div className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <ShieldAlert className="w-4 h-4 text-green-600" />
                <span>Women Safety Priority Protocol</span>
              </div>
            </div>

            {/* Section Switcher Tabs */}
            <div className="mt-10 inline-flex items-center p-1.5 rounded-2xl bg-slate-100 border border-slate-200">
              <button
                onClick={() => setActiveTab("safety")}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === "safety"
                    ? "bg-[#48B83D] text-white shadow-sm"
                    : "text-slate-700 hover:text-slate-900"
                }`}
              >
                12 Safety & Compliance Pillars
              </button>
              <button
                onClick={() => setActiveTab("subscription")}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                  activeTab === "subscription"
                    ? "bg-[#48B83D] text-white shadow-sm"
                    : "text-slate-700 hover:text-slate-900"
                }`}
              >
                Corporate Car Subscription (LTR - Lease)
              </button>
            </div>
          </div>

          {/* Visual Showcase: Verified Executive Fleet & Chauffeur Protocol */}
          <div className="mt-12 max-w-5xl mx-auto relative group">
            <div className="absolute -inset-3 bg-gradient-to-tr from-green-500/20 via-emerald-400/10 to-transparent rounded-[2.5rem] blur-2xl opacity-75 group-hover:opacity-100 transition-opacity pointer-events-none"></div>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
              <Image
                src="/images/hero-sedan.jpg"
                alt="Speedways Executive Chauffeur and Corporate Sedan Staging with Safety Check"
                width={1200}
                height={550}
                className="w-full h-[300px] sm:h-[380px] md:h-[440px] object-cover group-hover:scale-102 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-900/15 to-transparent pointer-events-none"></div>

              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                  <span className="text-xs font-bold uppercase tracking-wider text-green-400 block">
                    Zero-Compromise Security Framework
                  </span>
                  <span className="text-sm font-semibold text-white">
                    7-Point Background Check • Real-Time GPS Geofencing • In-Vehicle SOS Buttons
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1.5 rounded-xl bg-[#48B83D] text-white font-bold text-xs shadow-md flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4" />
                    <span>ISO 9001 & 45001 Certified</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SAFETY & COMPLIANCE (12 PILLARS) SECTION */}
      {activeTab === "safety" && (
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center max-w-2xl mx-auto">
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              12 Pillars of Passenger Safety & Statutory Governance
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Every trip booked across our 185+ city network is governed by standardized standard operating procedures.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SAFETY_COMPLIANCE_PILLARS.map((pillar, idx) => {
              const IconComp = iconMap[pillar.iconName || "ShieldCheck"] || ShieldCheck;
              const stepNumber = String(idx + 1).padStart(2, "0");

              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-7 border border-green-200/80 card-premium-shadow hover-border-flow transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Top Row: Icon + Step Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center group-hover:bg-[#48B83D] group-hover:text-white transition-colors shadow-2xs">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <span className="text-xs font-mono font-bold text-slate-400">
                        #{stepNumber}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg font-black text-slate-900 group-hover:text-[#48B83D] transition-colors">
                      {pillar.title}
                    </h3>

                    {/* Description */}
                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>

                  {/* Badge */}
                  {pillar.badge && (
                    <div className="mt-5 pt-4 border-t border-slate-100">
                      <span className="text-[11px] font-bold text-green-800 bg-green-50 px-2.5 py-1 rounded-full border border-green-200">
                        ✓ {pillar.badge}
                      </span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* 4. SPEEDWAYS CORPORATE CAR SUBSCRIPTION (LTR - LEASE) SECTION */}
      {activeTab === "subscription" && (
        <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12 text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-100 px-3 py-1 rounded-full">
              Long-Term Corporate Fleet Strategy
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 tracking-tight">
              Speedways — Corporate Car Subscription Benefits (LTR- Lease)
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Transform capital expenditure into predictable operating costs with structured 1, 2, or 3-year executive vehicle subscriptions including 100% maintenance, insurance, and 24×7 command centre support.
            </p>

            {/* Tenure Selector */}
            <div className="mt-6 inline-flex items-center gap-2 p-1.5 rounded-2xl bg-white border border-slate-200 shadow-2xs">
              <span className="text-xs font-bold text-slate-500 pl-3">Contract Tenures:</span>
              {(["1 Year", "2 Years", "3 Years"] as const).map((tenure) => (
                <button
                  key={tenure}
                  onClick={() => setSelectedTenure(tenure)}
                  className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                    selectedTenure === tenure
                      ? "bg-[#48B83D] text-white shadow-xs"
                      : "text-slate-700 hover:bg-slate-100"
                  }`}
                >
                  {tenure}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SUBSCRIPTION_BENEFITS.map((benefit, idx) => {
              const IconComp = iconMap[benefit.iconName || "CheckCircle"] || CheckCircle;

              return (
                <div
                  key={idx}
                  className="bg-white rounded-3xl p-7 border border-green-200/80 card-premium-shadow hover-border-flow transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center mb-5 group-hover:bg-[#48B83D] group-hover:text-white transition-colors shadow-2xs">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <span className="text-[11px] font-bold uppercase tracking-wider text-[#48B83D]">
                      {benefit.subtitle}
                    </span>

                    <h3 className="text-xl font-black text-slate-900 mt-1 group-hover:text-[#48B83D] transition-colors">
                      {benefit.title}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-700">
                      {benefit.badge}
                    </span>
                    <span className="text-xs font-bold text-[#48B83D] flex items-center gap-1">
                      Included <CheckCircle2 className="w-3.5 h-3.5" />
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Executive Cabin Standards Showcase */}
          <div className="mt-14 bg-white rounded-3xl border border-green-200/90 p-4 sm:p-6 shadow-md grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-5 relative h-64 sm:h-72 rounded-2xl overflow-hidden bg-slate-100 group">
              <Image
                src="/images/sedan-interior.jpg"
                alt="Executive Leather Interior with tablet and climate control"
                fill
                className="object-cover group-hover:scale-102 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-3 left-3 right-3 text-white">
                <span className="text-[11px] font-bold text-green-400 uppercase tracking-wider block">Executive Cabin Experience</span>
                <span className="text-xs font-semibold">Ergonomic seating, dual climate zones & spotless maintenance</span>
              </div>
            </div>
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-50 px-3 py-1 rounded-full border border-green-200">
                Pristine Fleet Condition
              </span>
              <h3 className="text-2xl font-black text-slate-900 tracking-tight">
                Showroom Vehicle Quality with Dedicated Chauffeurs
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Whether deploying executive sedans for daily director commutes or luxury SUVs for visiting board members, our LTR subscription guarantees immaculate maintenance, zero mechanical downtime, and dedicated white-glove chauffeurs.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-semibold text-slate-700 pt-1">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>Routine 40-point preventive maintenance</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                  <span>Immediate replacement vehicle backup</span>
                </div>
              </div>
            </div>
          </div>

          {/* Subscription Action Form Box */}
          <div className="mt-10 bg-gradient-to-br from-slate-900 to-slate-800 text-white p-8 sm:p-12 rounded-3xl shadow-xl border border-slate-700">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <span className="text-xs font-bold uppercase tracking-wider text-green-400 bg-green-950/80 px-3 py-1 rounded-full border border-green-800/60">
                  Custom Fleet Subscription Consultation
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-white mt-3 tracking-tight">
                  Tailor an LTR Lease Fleet for Your CXOs & Leadership
                </h3>
                <p className="text-sm text-slate-300 mt-2 leading-relaxed">
                  Choose from Toyota Innova Hycross, Mercedes-Benz, BMW, executive sedans, or electric vehicles under a single transparent monthly billing structure with zero depreciation burden.
                </p>
                <div className="mt-6 flex flex-wrap gap-4 text-xs font-medium text-slate-300">
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-green-400" /> 100% Tax Deductible Operating Expense
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-green-400" /> Guaranteed Replacement Vehicle in 2 Hours
                  </span>
                  <span className="flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-green-400" /> 24×7 Central Command Support
                  </span>
                </div>
              </div>

              <div className="lg:col-span-5 bg-white/5 border border-white/10 p-6 rounded-2xl backdrop-blur-sm">
                <h4 className="text-sm font-bold text-white mb-3">
                  Request LTR Lease Quote ({selectedTenure} Plan)
                </h4>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Your Company Name"
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-white placeholder-slate-400 focus:outline-hidden focus:border-green-400"
                  />
                  <input
                    type="email"
                    placeholder="Official Corporate Email"
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-white placeholder-slate-400 focus:outline-hidden focus:border-green-400"
                  />
                  <select className="w-full px-3.5 py-2 rounded-xl bg-slate-800/80 border border-slate-700 text-xs text-white focus:outline-hidden focus:border-green-400">
                    <option value="Hycross">Toyota Innova Hycross / Crysta</option>
                    <option value="Sedan">Executive Sedan (Ciaz / City / Verna)</option>
                    <option value="Luxury">Luxury CXO (Mercedes / BMW / Audi)</option>
                    <option value="EV">EV Green Fleet (Tigor EV / Nexon EV)</option>
                  </select>
                  <Link
                    href="/contact"
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-[#48B83D] hover:bg-[#3ea534] text-white text-xs font-bold uppercase tracking-wider transition-all"
                  >
                    <span>Connect with Fleet Leasing Desk</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 5. PAN-INDIA NETWORK PREVIEW */}
      <section className="py-12 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-green-400 bg-green-950 px-2.5 py-1 rounded-md border border-green-800">
                185+ Cities Network
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white">
                Nationwide Safety SLAs Across 6 Metro Hubs & 185+ Cities
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Identical passenger safety standards, police-verified chauffeurs, and 24×7 command centre oversight guaranteed in every city.
              </p>
            </div>
            <Link
              href="/network-safety"
              className="px-6 py-3.5 rounded-xl bg-[#48B83D] hover:bg-[#3ea534] text-white text-xs font-bold uppercase tracking-wider transition-all shrink-0 shadow-md flex items-center gap-2"
            >
              <span>View Full Network Map</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. BOTTOM CALL TO ACTION */}
      <section className="py-16 bg-[#F4FAF6] border-t border-green-100/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
            Ready to Empanel Speedways for Compliant Corporate Mobility?
          </h3>
          <p className="text-slate-600 text-sm mt-2 max-w-2xl mx-auto">
            185+ cities, 1,200+ verified vehicles, 6 direct metro hubs, and 24×7 command centre monitoring ready to support your organization’s travel desk.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-3.5 rounded-full bg-[#48B83D] hover:bg-[#3ea534] text-white font-bold text-sm shadow-md shadow-green-500/20 transition-all cursor-pointer"
            >
              Initiate Corporate MSA Empanelment
            </Link>
            <a
              href="tel:9820630817"
              className="px-6 py-3.5 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm border border-slate-300 shadow-2xs transition-all flex items-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-green-600" />
              <span>24×7 Operations: 9820630817</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
