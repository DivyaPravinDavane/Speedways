"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  MapPin,
  Clock,
  Sparkles,
  CheckCircle2,
  PhoneCall,
  Car,
  Plane,
  Users,
  Crown,
  Leaf,
  CalendarCheck,
  Settings,
  Network,
  Cpu,
  Star,
  Download,
  Building,
  Radio,
  FileCheck,
  TrendingUp,
  Activity,
  Award,
  Zap,
} from "lucide-react";
import SymbolBadge from "@/components/SymbolBadge";
import LiveTelemetrySimulator from "@/components/LiveTelemetrySimulator";
import PictographicalComparison from "@/components/PictographicalComparison";
import SpeedwaysInfoCards from "@/components/SpeedwaysInfoCards";
import Testimonials from "@/components/ui/testimonials-13";
import ClientLogosMarquee from "@/components/ClientLogosMarquee";
import AnimatedStatsGrid from "@/components/AnimatedStatsGrid";
import IndiaNetworkMap from "@/components/IndiaNetworkMap";
import LeadershipSection from "@/components/LeadershipSection";
import { AnimatedNumber } from "@/components/AnimatedCounter";
import {
  CLIENT_LOGOS,
  EXECUTIVE_QUESTIONS,
  TESTIMONIALS,
  SAFETY_COMPLIANCE_PILLARS,
  SUBSCRIPTION_BENEFITS,
} from "@/data/speedwaysData";

export default function HomePage() {
  const featuredServices = [
    {
      title: "Airport Transfer across India",
      desc: "Reliable airport mobility with live flight monitoring and proactive chauffeur coordination, with specialized meet-and-greet assistance available for VIP and bulk movements.",
      icon: Plane,
      link: "/services/chauffeur-drive",
      tag: "Flight-Tracked",
      stats: "Terminal Meet & Greet",
      image: "/images/airport-chauffeur.jpg",
    },
    {
      title: "Local / Short Term Rental",
      desc: "Flexible hourly mobility tailored for multi-stop corporate meetings, site visits, inspections, and seamless citywide business travel.",
      icon: Clock,
      link: "/services/chauffeur-drive",
      tag: "Hourly Disposals",
      stats: "4h & 8h Packages",
      image: "/images/hero-sedan.jpg",
    },
    {
      title: "Out Station Mobility",
      desc: "Enterprise-grade outstation mobility built around safety, comfort, and compliance — with trained chauffeurs, well-maintained vehicles, monitored journeys, and 24×7 operational support.",
      icon: Car,
      link: "/services/chauffeur-drive",
      tag: "Intercity Highway",
      stats: "Monitored Journeys",
      image: "/images/sedan-interior.jpg",
    },
    {
      title: "Employee Transportation (ETS)",
      desc: "Turnkey shift commute, algorithmic route clustering, and women safety escorts.",
      icon: Users,
      link: "/services/employee-transport",
      tag: "Turnkey Commute",
      stats: "22-28% Cost Cut",
      image: "/images/employee-transit.jpg",
    },
    {
      title: "VIP & Luxury Movement",
      desc: "Mercedes, BMW, Audi, and Fortuner deployments for C-suite and board summits.",
      icon: Crown,
      link: "/services/vip-luxury-events",
      tag: "White-Glove CXO",
      stats: "Strict NDA Guard",
      image: "/images/vip-fleet-lineup.jpg",
    },
    {
      title: "EV Mobility & ESG",
      desc: "Clean ICE-to-EV corporate fleet transition with verified carbon abatement reports.",
      icon: Leaf,
      link: "/sustainability",
      tag: "Zero-Emissions",
      stats: "Scope 1 & 2 ESG",
      image: "/images/ev-fleet.jpg",
    },
    {
      title: "MICE & Bulk Events",
      desc: "Transport desks, on-site fleet dispatchers, and mass delegate shuttles for annual AGMs.",
      icon: CalendarCheck,
      link: "/services/vip-luxury-events",
      tag: "Mass Coordination",
      stats: "10 to 100+ Cabs",
      image: "/images/mice-fleet.jpg",
    },
  ];

  return (
    <div className="bg-[#F4FAF6]">
      {/* 1. HERO SECTION */}
      <section className="relative pt-8 pb-16 md:pt-14 md:pb-24 overflow-hidden border-b border-green-100/70 bg-[#F4FAF6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="lg:col-span-6 space-y-6"
            >
              {/* Pre-Headline Eyebrow Pill */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-green-50 border border-green-200/80 text-green-700 text-xs font-bold uppercase tracking-wider shadow-xs"
              >
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                <span>ESTABLISHED <AnimatedNumber value={2012} duration={1200} /> • PAN-INDIA ENTERPRISE MOBILITY</span>
              </motion.div>

              {/* Main H1 Headline with New Tag */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]"
              >
                Speedways.{" "}
                <motion.span
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500"
                >
                  Advancing Enterprise Mobility.
                </motion.span>
              </motion.h1>

              {/* Supporting Copy with New Pillars */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl"
              >
                <strong className="text-slate-800 font-bold block mb-1.5 text-sm sm:text-base">
                  Purpose in Every Promise. Excellence in Every Experience. Inspired by Commitment. Delivered with Excellence. Committed to Excellence. Defined by Trust.
                </strong>
                India&apos;s premier corporate mobility platform combining{" "}
                <span className="font-bold text-slate-900">
                  <AnimatedNumber value={1200} suffix="+" format={true} />
                </span>{" "}
                fleet depth,{" "}
                <span className="font-bold text-slate-900">
                  <AnimatedNumber value={185} suffix="+" />
                </span>{" "}
                city coverage, our technology platform, and centralised 24×7 governance.
              </motion.p>

              {/* Action Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                className="flex flex-wrap items-center gap-4 pt-2"
              >
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-bold text-base shadow-md shadow-green-500/25 hover:shadow-lg hover:shadow-green-500/30 transition-all group cursor-pointer"
                >
                  <Sparkles className="w-5 h-5" />
                  <span>Request Corporate Empanelment</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold text-base border border-slate-200 transition-colors"
                >
                  <span>Explore Services</span>
                </Link>
              </motion.div>

              {/* Trust Badges Minimal Row with Animated Numbers */}
              <div className="pt-4 grid grid-cols-3 gap-3 border-t border-slate-100 max-w-lg">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                  <span>
                    <AnimatedNumber value={156} suffix="+" className="font-bold text-slate-900" /> Fortune Clients
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                  <span>
                    <AnimatedNumber value={6} className="font-bold text-slate-900" /> Direct Metro Hubs
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                  <span>
                    <AnimatedNumber value={5} suffix="%" className="font-bold text-slate-900" /> GST Billing Model
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Right Hero Image Column with Larger Display & Animated Floating Badges */}
            <div className="lg:col-span-6 relative mt-6 lg:mt-0 group">
              {/* Decorative Ambient Backdrop Glow */}
              <div className="absolute -inset-3 sm:-inset-5 bg-gradient-to-tr from-green-500/20 via-emerald-400/15 to-transparent rounded-[2.5rem] blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 -z-10 pointer-events-none"></div>

              {/* Main Image Showcase Container */}
              <div className="relative rounded-[28px] overflow-hidden card-premium-shadow border-2 border-green-200/90 bg-white p-1.5 hover:border-green-400 transition-colors duration-300">
                <Image
                  src="/images/hero-sedan.jpg"
                  alt="Speedways Executive Corporate Mobility Fleet with Chauffeur outside modern corporate headquarters"
                  width={1100}
                  height={650}
                  className="w-full h-[360px] sm:h-[430px] md:h-[480px] lg:h-[510px] xl:h-[540px] object-cover rounded-[22px] transform group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  priority
                />

                {/* Subtle gradient vignette at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/15 to-transparent rounded-[22px] pointer-events-none"></div>

                <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-medium flex items-center justify-between">
                  <span className="px-3 py-1.5 rounded-lg bg-black/50 backdrop-blur-md border border-white/10 shadow-sm font-semibold tracking-wide">
                    Speedways Executive Chauffeur & Fleet Operations
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-green-500 text-white font-mono font-bold text-[11px] shadow-sm flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
                    LIVE
                  </span>
                </div>
              </div>

              {/* Floating Badge 1: 100% Background Verified with Animated Counter */}
              <div className="absolute -top-5 -left-3 sm:-left-6 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-xl border border-green-200/90 flex items-center gap-3.5 hover:scale-105 transition-all duration-300 animate-float z-20">
                <div className="w-11 h-11 rounded-xl bg-green-100 text-green-700 flex items-center justify-center shrink-0 shadow-inner">
                  <ShieldCheck className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-slate-900 tracking-tight flex items-center gap-1">
                    <span className="text-[#48B83D] font-black text-base">
                      <AnimatedNumber value={100} suffix="%" duration={1400} />
                    </span>
                    <span>Background-Verified</span>
                  </div>
                  <div className="text-[11px] font-medium text-slate-500">Chauffeur Background Check</div>
                </div>
              </div>

              {/* Floating Badge 2: Live GPS Telemetry with Pulsing Radar and Live Status */}
              <div className="absolute -bottom-5 -right-3 sm:-right-6 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-xl border border-green-200/90 flex items-center gap-3.5 hover:scale-105 transition-all duration-300 animate-float-delayed z-20">
                <div className="relative w-11 h-11 rounded-xl bg-green-100 text-green-700 flex items-center justify-center shrink-0 shadow-inner">
                  <Radio className="w-6 h-6 text-green-600 animate-pulse" />
                  <span className="absolute -top-1 -right-1 flex h-3 w-3">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex h-3 w-3 rounded-full border-2 border-white bg-green-500" />
                  </span>
                </div>
                <div>
                  <div className="text-sm font-extrabold text-slate-900 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-500"></span>
                    Live GPS Telemetry
                  </div>
                  <div className="text-[11px] font-medium text-slate-500">
                    Continuous <span className="font-bold text-slate-700"><AnimatedNumber value={24} duration={1200} />×<AnimatedNumber value={7} duration={1200} /></span> Oversight
                  </div>
                </div>
              </div>

              {/* Floating Badge 3: 185+ Cities with Animated Counter */}
              <div className="hidden sm:flex absolute top-1/2 -right-5 sm:-right-7 transform -translate-y-1/2 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-xl border border-green-200/90 items-center gap-3 hover:scale-105 transition-all duration-300 animate-float-slow z-20">
                <div className="w-10 h-10 rounded-xl bg-green-100 text-green-700 flex items-center justify-center shrink-0 shadow-inner">
                  <MapPin className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-extrabold text-slate-900 tracking-tight flex items-center gap-1">
                    <span className="text-[#48B83D] font-black text-base">
                      <AnimatedNumber value={185} suffix="+" duration={1600} />
                    </span>
                    <span>Cities</span>
                  </div>
                  <div className="text-[11px] font-medium text-slate-500">Direct & Managed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ENTERPRISE CLIENT TRUST MARQUEE (ORIGINAL CORPORATE BRAND LOGOS) */}
      <ClientLogosMarquee />

      {/* 3. SCALE COUNTERS BLOCK (animated, structured) */}
      <AnimatedStatsGrid />

      {/* 4. INTERACTIVE LIVE TELEMETRY & DISPATCH SIMULATOR */}
      <section className="py-16 bg-slate-50/70 border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-100 px-3 py-1 rounded-full">
              Interactive Platform Demonstration
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 tracking-tight">
              Live Trip Telemetry & 24×7 Control Simulation
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Explore how our technology platform tracks speed, boarding OTP, geofence adherence, and digital duty slip sign-off in real time.
            </p>
          </div>

          {/* Interactive Widget Component */}
          <LiveTelemetrySimulator />
        </div>
      </section>

      {/* 5. CORE SERVICES PREVIEW (Picture-Rich Cards) */}
      <section className="py-20 bg-[#F4FAF6]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-100 px-3 py-1 rounded-full">
                Full-Spectrum Portfolio
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-2 tracking-tight">
                Corporate Mobility Solutions
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-2xl leading-relaxed">
                Seamless mobility across 185+ cities, with standardized spot rentals, hourly disposals, and intercity routes — governed by transparent tariffs, 5% GST billing, and 24×7 command centre oversight.
              </p>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-sm font-bold text-green-600 hover:text-green-700 hover:underline shrink-0"
            >
              <span>Explore All 11 Services</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredServices.map((service, idx) => {
              const IconComp = service.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-green-200/80 hover-border-flow card-premium-shadow group flex flex-col justify-between overflow-hidden transition-all duration-300"
                >
                  {/* Service Image Card Header */}
                  <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute top-3 left-3">
                      <SymbolBadge icon={IconComp} size="sm" />
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="text-[11px] font-bold text-slate-900 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md shadow-xs">
                        {service.tag}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 right-3">
                      <h3 className="text-lg font-bold text-white drop-shadow-xs">
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {service.desc}
                      </p>

                      <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                        <span className="font-semibold text-green-700 bg-green-50 px-2 py-0.5 rounded">
                          {service.stats}
                        </span>
                        <span className="text-slate-500 font-medium">Pan-India SLAs</span>
                      </div>
                    </div>

                    <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                      <Link
                        href={service.link}
                        className="text-xs font-bold text-green-600 hover:text-green-700 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                      >
                        View Specs & Tariff <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5B. DYNAMIC ROTATING BORDER INFOCARDS SPOTLIGHT */}
      <SpeedwaysInfoCards />

      {/* 5C. 185+ CITIES INDIA NETWORK MAP */}
      <IndiaNetworkMap />

      {/* 6. SAFETY BUILT INTO EVERY JOURNEY (Safety & Compliance Showcase) */}
      <section className="py-20 bg-white border-b border-slate-200/80 relative overflow-hidden" id="safety">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div className="max-w-3xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-700 border border-green-200 text-xs font-bold uppercase tracking-wider mb-3">
                <ShieldCheck className="w-3.5 h-3.5 text-green-600" />
                Safety & Compliance Standard
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
                Safety Built Into{" "}
                <span className="bg-gradient-to-r from-[#48B83D] to-emerald-600 bg-clip-text text-transparent">
                  Every Journey
                </span>
              </h2>
              <p className="text-slate-600 text-sm sm:text-base mt-2 leading-relaxed">
                From police-verified chauffeurs and in-vehicle SOS buttons to 24×7 command centre telemetry and women night safety protocols, our operational standard protects every passenger across 185+ cities.
              </p>
            </div>
            <Link
              href="/safety"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#48B83D] hover:bg-[#3ea534] text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all shrink-0"
            >
              <span>Explore All 12 Safety Pillars & LTR Lease</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Quick Highlight of Top Safety Pillars */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SAFETY_COMPLIANCE_PILLARS.slice(0, 4).map((pillar, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-green-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-green-100 text-green-700 flex items-center justify-center mb-4">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/80">
                  <span className="text-[10px] font-bold text-green-800 bg-green-100/70 px-2 py-0.5 rounded">
                    ✓ {pillar.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Corporate Car Subscription Benefits Callout */}
          <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 to-slate-800 text-white flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl">
            <div className="max-w-2xl">
              <span className="text-xs font-bold uppercase tracking-wider text-green-400 bg-green-950 px-2.5 py-1 rounded-md border border-green-800/80">
                Long-Term Vehicle Leasing
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-2.5">
                Speedways — Corporate Car Subscription Benefits (LTR- Lease)
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 mt-1 leading-relaxed">
                Lower total cost of mobility, flexible 1, 2, or 3-year contract tenures, minimal upfront investment, comprehensive maintenance, modern fleet, and 24×7 command centre support.
              </p>
            </div>
            <Link
              href="/safety"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white text-slate-900 hover:bg-slate-100 text-xs font-bold uppercase tracking-wider transition-all shrink-0 shadow-md"
            >
              <span>View Subscription Benefits</span>
              <ArrowRight className="w-4 h-4 text-[#48B83D]" />
            </Link>
          </div>
        </div>
      </section>

      {/* 7. EXECUTIVE SUMMARY GRID (4 Procurement Questions) */}
      <section className="py-20 bg-[#F4FAF6] border-b border-green-100/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-100 px-3 py-1 rounded-full">
              Enterprise Procurement Due Diligence
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 tracking-tight">
              Answering the 4 Critical Vendor Empanelment Questions
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              How Speedways satisfies the exacting standards of corporate travel desks, finance heads, and compliance officers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {EXECUTIVE_QUESTIONS.map((item, idx) => {
              const icons = [Settings, Network, ShieldCheck, Cpu];
              const IconComp = icons[idx];
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-green-200/80 hover-border-flow card-premium-shadow flex flex-col justify-between group transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <SymbolBadge icon={IconComp} size="md" />
                      <span className="text-[11px] font-bold text-green-700 bg-green-50 px-2.5 py-1 rounded-full border border-green-200">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-xs font-extrabold tracking-wider uppercase text-green-700">
                      {item.question}
                    </h3>

                    <h4 className="text-base font-bold text-slate-900 mt-1 mb-2 leading-snug">
                      {item.headline}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100">
                    <Link
                      href={idx === 1 ? "/network-safety" : idx === 2 ? "/network-safety" : idx === 3 ? "/technology" : "/about-us"}
                      className="text-xs font-bold text-green-600 hover:text-green-700 flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                    >
                      Learn More <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. PICTOGRAPHICAL COMPARISON: TRADITIONAL DESKS VS SPEEDWAYS */}
      <section className="py-20 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <PictographicalComparison />
        </div>
      </section>

      {/* 8B. EXECUTIVE LEADERSHIP BENCH */}
      <LeadershipSection />

      {/* 9. VERIFIED TESTIMONIALS (PPT Sourced Exact Quotes) */}
      <section className="py-20 bg-[#F4FAF6]" id="testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-100 px-3 py-1 rounded-full">
              Enterprise Endorsements
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 tracking-tight">
              Verified Feedback from Corporate Travel Desks
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Authentic reviews from procurement managers, administration heads, and mobility coordinators.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50/80 p-6 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-700 italic leading-relaxed">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200">
                  <div className="text-sm font-bold text-slate-900">
                    {item.client}
                  </div>
                  <div className="text-xs font-semibold text-green-600">
                    {item.category}
                  </div>
                  {item.designation && (
                    <div className="text-[11px] text-slate-500">
                      {item.designation}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Animated Marquee Success Stories (Testimonials-13) */}
          <div className="mt-16 pt-12 border-t border-slate-100">
            <Testimonials />
          </div>
        </div>
      </section>

      {/* 10. BOTTOM CORPORATE EMPANELMENT CTA BANNER */}
      <section className="py-16 bg-[#F0FDF4] border-t border-[#DCFCE7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-green-700 border border-green-200 text-xs font-bold uppercase tracking-wider">
              Empanelment Process • Fast-Track 48h Turnaround
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Ready to Empanel Speedways for Your Corporate Mobility Needs?
            </h2>
            <p className="text-slate-600 text-base">
              Submit your corporate RFP or schedule a direct consultation with our enterprise account team. 6 direct branches (Mumbai, Bangalore, Hyderabad, Chennai, Delhi, Pune) and 185+ managed cities ready for deployment.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-bold text-base shadow-md shadow-green-500/25 transition-all"
              >
                <Sparkles className="w-5 h-5" />
                <span>Submit Empanelment Request</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:9820630817"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-base border border-slate-200 transition-colors"
              >
                <PhoneCall className="w-4 h-4 text-green-600" />
                <span>Call 9820630817</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
