"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import SymbolBadge from "@/components/SymbolBadge";
import {
  Leaf,
  Zap,
  TrendingDown,
  BarChart3,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  BatteryCharging,
  Car,
  FileCheck,
  Building2,
  Layers,
  Calculator,
  Download,
  ShieldCheck,
  Clock,
  Radio,
  Check,
} from "lucide-react";
import { EV_ROADMAP_STEPS } from "@/data/speedwaysData";

export default function SustainabilityPage() {
  const [dailyKms, setDailyKms] = useState<number>(300);
  const [vehicleCount, setVehicleCount] = useState<number>(10);
  const [selectedPhase, setSelectedPhase] = useState<number>(0);
  const [certDownloaded, setCertDownloaded] = useState<boolean>(false);

  // Carbon math: Average ICE car emits ~160g CO2 per km.
  // EV emission reduction ~120g CO2 per km saved (factoring grid electricity).
  const annualKm = dailyKms * 260 * vehicleCount; // 260 working days
  const annualCo2Kg = Math.round((annualKm * 0.12) / 1000); // Metric tons of CO2 saved
  const treesEquivalent = Math.round(annualCo2Kg * 45); // ~45 trees planted per ton of CO2
  const litersDieselSaved = Math.round(annualKm / 14); // ~14 km/L fuel benchmark

  const handleDownloadCert = () => {
    setCertDownloaded(true);
    setTimeout(() => setCertDownloaded(false), 2500);
  };

  return (
    <div className="bg-[#F4FAF6]">
      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-200/80">
        <Breadcrumbs items={[{ label: "Sustainability & EV Mobility" }]} />
      </div>

      {/* Header Banner with Animated Floating Telemetry Badges */}
      <section className="py-14 md:py-20 border-b border-green-100/70 bg-[#F4FAF6] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-700 border border-green-200 text-xs font-bold uppercase tracking-wider">
                <Leaf className="w-3.5 h-3.5 text-green-600" />
                Enterprise ESG Mobility Transition
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                <Zap className="w-3 h-3 text-green-600 animate-pulse" />
                Zero-Tailpipe Emission Operations
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              A Practical Roadmap for Cleaner Corporate Mobility
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Transition from conventional ICE sedans to zero-tailpipe-emission electric vehicles with structured route feasibility, campus charging infrastructure, and monthly carbon abatement documentation.
            </p>

            {/* Quick Live ESG Telemetry Chips */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-bold text-slate-700">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                <span>Scope 1 & 2 Decarbonization</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200">
                <Zap className="w-4 h-4 text-green-600" />
                <span>Tata EV Fleet Deployments</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200">
                <BatteryCharging className="w-4 h-4 text-green-600" />
                <span>Campus Fast-Charging Setup</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200">
                <FileCheck className="w-4 h-4 text-green-600" />
                <span>Auditable ESG Certificates</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Showcase: Electric Fleet Charging at Corporate Campus */}
      <section className="py-14 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 group">
                <Image
                  src="/images/ev-fleet.jpg"
                  alt="Speedways Electric Vehicle Fleet Charging at LEED Certified Corporate Campus"
                  width={750}
                  height={450}
                  className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
                />
              </div>
            </div>

            <div className="lg:col-span-5 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider">
                Fleet Electrification
              </span>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                Empowering India&apos;s Corporate Green Commute
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                As multinational corporations commit to Scope 1, Scope 2, and Scope 3 Net Zero targets, employee ground transportation becomes a prime opportunity for measurable carbon reduction.
              </p>
              <div className="space-y-2.5 pt-2 text-xs sm:text-sm text-slate-700 font-medium">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                  <span>Tata Tigor EV & Tata Nexon EV deployments</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                  <span>Campus fast-charger installation & maintenance coordination</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                  <span>Battery State-of-Charge (SoC) smart dispatch algorithms</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                  <span>Auditable monthly carbon offset certificates for ESG filing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Phase EV Transition Plan (The MoveInSync ESG Roadmap) */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-100 px-3 py-1 rounded-full">
              Structured ESG Phasing
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 tracking-tight">
              The 4-Phase Corporate EV Transition Plan
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              We de-risk fleet electrification with phased deployment, avoiding range anxiety and ensuring complete operational continuity.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {EV_ROADMAP_STEPS.map((step, idx) => (
              <div
                key={idx}
                onClick={() => setSelectedPhase(idx)}
                className={`p-7 rounded-3xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                  selectedPhase === idx
                    ? "bg-white border-green-500 shadow-xl ring-2 ring-green-500/20"
                    : "bg-slate-50/70 hover:bg-white border-slate-200 hover:border-slate-300"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className={`w-8 h-8 rounded-xl font-extrabold text-xs flex items-center justify-center ${
                        selectedPhase === idx
                          ? "bg-green-600 text-white"
                          : "bg-slate-200 text-slate-700"
                      }`}
                    >
                      0{idx + 1}
                    </span>
                    <span className="text-[11px] font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded">
                      {step.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200/60 text-[11px] font-bold text-slate-500 uppercase tracking-wider flex items-center justify-between">
                  <span>{step.phase.split(":")[0]}</span>
                  {selectedPhase === idx && (
                    <span className="text-green-600 font-extrabold text-[10px]">Active Selection</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive ESG Carbon Savings Calculator */}
      <section className="py-20 bg-[#F0FDF4] border-b border-[#DCFCE7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-green-700 border border-green-200 text-xs font-bold uppercase tracking-wider">
              <Calculator className="w-3.5 h-3.5 text-green-600" />
              Interactive ESG Modeling Tool
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 tracking-tight">
              Corporate Carbon Reduction Estimator
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Estimate the annual carbon emissions avoided and tree plantation equivalence by transitioning your daily corporate commute to Speedways electric vehicles.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white p-8 sm:p-10 rounded-3xl border border-green-200 shadow-md">
            {/* Input Controls */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="flex justify-between text-sm font-bold text-slate-900 mb-2">
                  <span>Number of Daily Fleet Vehicles:</span>
                  <span className="text-green-600 font-extrabold text-base">{vehicleCount} Vehicles</span>
                </div>
                <input
                  type="range"
                  min="2"
                  max="100"
                  step="2"
                  value={vehicleCount}
                  onChange={(e) => setVehicleCount(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-green-500"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>2 Vehicles (Pilot)</span>
                  <span>50 Vehicles</span>
                  <span>100 Vehicles (Campus)</span>
                </div>
              </div>

              <div>
                <div className="flex justify-between text-sm font-bold text-slate-900 mb-2">
                  <span>Average Daily Kilometers per Vehicle:</span>
                  <span className="text-green-600 font-extrabold text-base">{dailyKms} KM / Day</span>
                </div>
                <input
                  type="range"
                  min="50"
                  max="600"
                  step="25"
                  value={dailyKms}
                  onChange={(e) => setDailyKms(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-green-500"
                />
                <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                  <span>50 KM (Local)</span>
                  <span>300 KM (Standard Shift)</span>
                  <span>600 KM (Intense Commute)</span>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-600">
                <span className="font-semibold text-slate-900 block mb-0.5">Methodology Benchmark:</span>
                Calculated on 260 annual working days, comparing 160g CO2/km ICE average against grid-adjusted EV emissions (~40g CO2/km net saving).
              </div>
            </div>

            {/* Calculated Output Stats */}
            <div className="lg:col-span-6 bg-slate-900 text-white p-8 rounded-3xl shadow-xl flex flex-col justify-between space-y-6">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-green-400">
                  Estimated Annual ESG Impact
                </span>
                <div className="mt-3">
                  <div className="text-4xl sm:text-5xl font-black text-white tracking-tight">
                    {annualCo2Kg.toLocaleString()} <span className="text-xl sm:text-2xl font-bold text-green-400">Metric Tons</span>
                  </div>
                  <div className="text-xs text-slate-300 mt-1">
                    Direct tailpipe CO2 emissions eliminated annually
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-800">
                <div className="p-3.5 rounded-2xl bg-slate-800/80">
                  <span className="text-[11px] text-slate-400 block">Tree Equivalent</span>
                  <span className="text-xl font-bold text-green-400">
                    ≈ {treesEquivalent.toLocaleString()} Trees
                  </span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">
                    10-year carbon absorption
                  </span>
                </div>

                <div className="p-3.5 rounded-2xl bg-slate-800/80">
                  <span className="text-[11px] text-slate-400 block">Fuel Avoided</span>
                  <span className="text-xl font-bold text-green-400">
                    {litersDieselSaved.toLocaleString()} L
                  </span>
                  <span className="text-[10px] text-slate-400 block mt-0.5">
                    Diesel liters displaced
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={handleDownloadCert}
                  className="w-full py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-green-500/25"
                >
                  <Download className="w-4 h-4" />
                  <span>
                    {certDownloaded ? "ESG Report Sample Queued!" : "Download Sample ESG Audit Report"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ESG Certification & Scope 1/2 Auditing Box */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 border border-slate-200/90 rounded-3xl p-8 sm:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-100 px-3 py-1 rounded-full">
                  Monthly Auditable Documentation
                </span>
                <h3 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                  Seamless Scope 1 & Scope 2 Corporate Disclosure
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Every month, Speedways generates timestamped, geofenced carbon abatement certificates detailing exact kilometers traveled by electric vehicles, kilowatt-hours consumed, and net greenhouse gas emissions avoided.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 text-xs font-semibold text-slate-700">
                  <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                    <span>GRI Standard 305 Compliant</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                    <span>BRSR Reporting Ready</span>
                  </div>
                  <div className="p-3 bg-white rounded-xl border border-slate-200 flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                    <span>External Auditor Sign-off</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 text-center lg:text-right">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold text-sm shadow-md shadow-green-500/25 transition-all cursor-pointer"
                >
                  <span>Request EV Pilot RFP</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
