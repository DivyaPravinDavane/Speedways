"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import SymbolBadge from "@/components/SymbolBadge";
import LiveTelemetrySimulator from "@/components/LiveTelemetrySimulator";
import {
  Cpu,
  Smartphone,
  Laptop,
  CheckCircle2,
  Clock,
  Radio,
  FileCheck,
  TrendingUp,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Database,
  BarChart3,
  Layers,
  PhoneCall,
  Lock,
} from "lucide-react";
import { PLATFORM_STAGES, SLA_BENCHMARKS } from "@/data/speedwaysData";

export default function TechnologyPage() {
  const [activeStage, setActiveStage] = useState<number>(0);

  const currentStage = PLATFORM_STAGES[activeStage];

  return (
    <div className="bg-[#F4FAF6]">
      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-200/80">
        <Breadcrumbs items={[{ label: "Technology Platform" }]} />
      </div>

      {/* Header Banner with Command Centre & SaaS Engine Showcase */}
      <section className="py-14 md:py-20 border-b border-green-100/70 bg-[#F4FAF6] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-green-50 border border-green-200 text-green-700 text-xs font-bold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span>ENTERPRISE MOBILITY CLOUD • PROPRIETARY SAAS ENGINE</span>
              </div>
              <h1 className="text-4xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
                Enterprise Mobility Engine: From Booking to Automated MIS
              </h1>
              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Experience zero paper log sheets, real-time GPS telemetry, algorithmic driver dispatch, and instant ERP-ready corporate invoicing across single or multi-city accounts.
              </p>

              {/* Quick-Glance Architecture Pills */}
              <div className="flex flex-wrap items-center gap-2 pt-2">
                <span className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 flex items-center gap-1.5 shadow-2xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                  4h Local Lead Time
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 flex items-center gap-1.5 shadow-2xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                  99.8% On-Time SLA
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 flex items-center gap-1.5 shadow-2xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                  Contactless OTP Duty Slips
                </span>
                <span className="px-3 py-1.5 rounded-xl bg-white border border-slate-200 text-xs font-bold text-slate-700 flex items-center gap-1.5 shadow-2xs">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                  SAP / Oracle MIS Exports
                </span>
              </div>
            </div>

            {/* Right Showcase: Live Operations Console */}
            <div className="lg:col-span-5 relative group">
              <div className="absolute -inset-2 bg-gradient-to-tr from-green-500/20 to-emerald-400/10 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
                <Image
                  src="/images/command-center.jpg"
                  alt="Speedways Enterprise Mobility Cloud and Command Center Telemetry Engine"
                  width={720}
                  height={480}
                  className="w-full h-[320px] sm:h-[380px] object-cover group-hover:scale-102 transition-transform duration-500 opacity-90"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"></div>

                <div className="absolute bottom-4 left-4 right-4 text-white text-xs flex items-center justify-between">
                  <span className="px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 font-semibold">
                    Proprietary SaaS Telemetry Desk
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-green-500 text-white font-mono font-bold text-[11px] shadow-xs flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                    ONLINE
                  </span>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-3 sm:-left-5 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-green-200 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-green-100 text-green-700 flex items-center justify-center font-bold text-xs">
                  API
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Real-Time ERP Sync</div>
                  <div className="text-[10px] text-slate-500">SAP, Oracle & Workday Compatible</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive 5-Stage Trip Lifecycle Stepper */}
      <section className="py-16 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-100 px-3 py-1 rounded-full">
              End-to-End Digital Workflow
            </span>
            <h2 className="text-3xl font-bold text-slate-900 mt-3 tracking-tight">
              The 5-Stage Automated Trip Lifecycle
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Click through the lifecycle stages below to explore the digital controls that guarantee on-time reporting and eliminate billing disputes.
            </p>
          </div>

          {/* Stepper Navigation Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-8">
            {PLATFORM_STAGES.map((s, idx) => (
              <button
                key={idx}
                onClick={() => setActiveStage(idx)}
                className={`p-4 rounded-2xl text-left border transition-all ${
                  activeStage === idx
                    ? "bg-white border-green-500 shadow-md ring-2 ring-green-500/20"
                    : "bg-white/60 hover:bg-white border-slate-200 hover:border-slate-300"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center ${
                      activeStage === idx
                        ? "bg-green-500 text-white"
                        : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    {s.step}
                  </span>
                  <span className="text-[10px] uppercase font-bold text-slate-400">
                    Stage {idx + 1}
                  </span>
                </div>
                <div className="text-sm font-bold text-slate-900 line-clamp-1">
                  {s.title}
                </div>
                <div className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                  {s.subtitle}
                </div>
              </button>
            ))}
          </div>

          {/* Active Stage Deep-Dive Card */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 border border-slate-200/90 shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="w-10 h-10 rounded-xl bg-green-100 text-green-700 font-extrabold flex items-center justify-center text-base">
                  {currentStage.step}
                </span>
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-green-700">
                    Stage {currentStage.step} of 05
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {currentStage.title}
                  </h3>
                </div>
              </div>

              <p className="text-sm text-slate-600 leading-relaxed font-medium">
                {currentStage.subtitle}
              </p>

              <p className="text-sm text-slate-600 leading-relaxed">
                {currentStage.desc}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-3">
                {currentStage.details.map((detail, dIdx) => (
                  <div
                    key={dIdx}
                    className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700"
                  >
                    <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                    <span className="font-medium">{detail}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Simulated Mockup Card */}
            <div className="lg:col-span-5 bg-slate-900 text-white p-6 rounded-2xl shadow-inner relative overflow-hidden">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs text-slate-400">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-ping"></span>
                  <span className="text-white font-mono font-bold">Speedways Cloud Hub</span>
                </div>
                <span className="font-mono text-[11px] text-green-400">STATUS: 200 OK</span>
              </div>

              <div className="py-4 space-y-3 font-mono text-xs">
                <div className="p-3 rounded-lg bg-slate-800/80 border border-slate-700/60">
                  <div className="text-slate-400 text-[10px]">CURRENT STAGE</div>
                  <div className="text-green-400 font-bold text-sm">
                    {currentStage.step} • {currentStage.title.toUpperCase()}
                  </div>
                  <div className="text-slate-300 text-[11px] mt-1">
                    {currentStage.subtitle}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 text-[11px]">
                  <div className="p-2 rounded bg-slate-800/40 border border-slate-800">
                    <span className="text-slate-500 block text-[9px]">OTP STATUS</span>
                    <span className="text-white font-semibold">Verified via SMS</span>
                  </div>
                  <div className="p-2 rounded bg-slate-800/40 border border-slate-800">
                    <span className="text-slate-500 block text-[9px]">GPS PING</span>
                    <span className="text-green-400 font-semibold">Live (4s latency)</span>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-green-950/40 border border-green-800/40 text-[11px] text-green-300">
                  <span className="font-bold">Automated MIS Export:</span>
                  <span className="block text-[10px] text-green-400/80 mt-0.5">
                    Syncs to SAP, Oracle, Zoho & Workday via REST API.
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Embedded Interactive Telemetry Simulator Widget */}
          <div className="mt-14">
            <div className="text-center max-w-2xl mx-auto mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-100 px-3 py-1 rounded-full">
                Interactive Telemetry Sandbox
              </span>
              <h3 className="text-2xl font-bold text-slate-900 mt-2">
                Live Cloud Dispatch Console Simulation
              </h3>
              <p className="text-xs text-slate-500 mt-1">
                Toggle between Airport VIP, Campus ETS, and Highway trips to simulate live speed gauges and OTP validation.
              </p>
            </div>
            <LiveTelemetrySimulator />
          </div>
        </div>
      </section>

      {/* SLA Reference Standards Grid */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-100 px-3 py-1 rounded-full">
              Contractual Benchmark Commitments
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 tracking-tight">
              SLA Reference Standards Guaranteed by Technology
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Our technology platform infrastructure holds every driver, fleet vehicle, and dispatcher to strict time-bound performance metrics.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SLA_BENCHMARKS.map((sla, idx) => (
              <div
                key={idx}
                className="bg-slate-50/70 p-7 rounded-2xl border border-slate-200/90 shadow-2xs hover:border-green-400 hover:bg-white transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="text-3xl font-extrabold text-green-600 tracking-tight mb-1">
                    {sla.metric}
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    {sla.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {sla.desc}
                  </p>
                </div>
                <div className="pt-4 mt-4 border-t border-slate-200/60 flex items-center gap-1.5 text-xs font-semibold text-green-700">
                  <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                  <span>SLA Governed</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise Architecture Dashboard Showcase */}
      <section className="py-20 bg-[#F0FDF4] border-b border-[#DCFCE7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                <Image
                  src="/images/command-center.jpg"
                  alt="Enterprise Fleet Telemetry & Operations Console"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-6 space-y-5">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-green-700 border border-green-200 text-xs font-bold uppercase tracking-wider">
                Enterprise MIS & Analytics
              </span>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
                Single Corporate Dashboard for All Indian Cities
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Whether you have travel operations in Mumbai, Chennai, or a Tier-3 industrial hub, all trip data flows into a unified corporate analytics portal.
              </p>

              <div className="space-y-3 pt-1">
                <div className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                  <span><strong>Cost Center Segregation:</strong> Tag trips by business unit, project code, or employee department for exact budget allocation.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                  <span><strong>Digital Slip Verification:</strong> View chauffeur digital signature, passenger OTP stamp, and GPS route map for any completed duty.</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                  <span><strong>One-Click Tax Exports:</strong> Download monthly GST invoices with itemized tax breakdowns ready for automated ERP reconciliation.</span>
                </div>
              </div>

              <div className="pt-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold text-sm shadow-md transition-all"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Schedule Platform Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold text-slate-900">
              Ready to Modernize Your Travel Desk?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Say goodbye to manual paper duty slips, misplaced parking tickets, and endless invoice reconciliation calls.
            </p>
            <div className="pt-2 flex justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold text-sm shadow-md transition-all"
              >
                <span>Request Corporate Empanelment</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/network-safety"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold text-sm border border-slate-200 transition-colors"
              >
                <span>View Pan-India Network</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
