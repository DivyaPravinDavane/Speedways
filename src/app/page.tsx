"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  MapPin,
  CheckCircle2,
  PhoneCall,
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
  ChevronDown,
  Receipt,
} from "lucide-react";
import SymbolBadge from "@/components/SymbolBadge";
import LiveTelemetrySimulator from "@/components/LiveTelemetrySimulator";
import PictographicalComparison from "@/components/PictographicalComparison";
import SpeedwaysInfoCards from "@/components/SpeedwaysInfoCards";
import Testimonials from "@/components/ui/testimonials-13";
import ClientLogosMarquee from "@/components/ClientLogosMarquee";
import AnimatedStatsGrid from "@/components/AnimatedStatsGrid";
import { AnimatedNumber } from "@/components/AnimatedCounter";
import {
  CLIENT_LOGOS,
  EXECUTIVE_QUESTIONS,
  TESTIMONIALS,
  SAFETY_COMPLIANCE_PILLARS,
  SUBSCRIPTION_BENEFITS,
} from "@/data/speedwaysData";

const HOME_FAQS = [
  {
    q: "Is Speedways primarily a B2B corporate car rental provider or also B2C?",
    a: "Speedways operates primarily as an enterprise B2B mobility partner specializing in long-term contracts, employee transportation services (ETS), executive daily car rental with chauffeur, and airport transfers for corporations. We also support large-scale MICE events, VIP board delegations, and executive personal mobility for empaneled enterprise clients with 30-day corporate credit terms and 5% GST input tax credit.",
  },
  {
    q: "How does Speedways ensure driver training and police verification?",
    a: "Every chauffeur undergoes an exhaustive 7-point background verification protocol: mandatory local police criminal background clearance, permanent address verification, commercial badge validation, medical and drug screening, defensive driving certification, and soft-skills corporate grooming. Drivers are continuously tracked in real time through AIS-140 GPS telemetry.",
  },
  {
    q: "What 3-layer operational governance does Speedways follow across India?",
    a: "We maintain a three-tier operational structure modeled on top enterprise standards: (1) On-Site Transport Desk & Account Manager for daily dispatch and shift coordination, (2) 24×7 Central Command Center continuously tracking trip lifecycle, SOS triggers, and speed compliance, and (3) Rapid Response Team providing emergency breakdown assistance and replacement vehicles within 30 minutes in all metro cities.",
  },
  {
    q: "How does transparent 5% GST billing and digital duty slips (e-DDS) work?",
    a: "Speedways operates on a 100% paperless workflow. Chauffeurs and passengers close trips digitally with OTP authentication and digital signatures, capturing GPS mileage and toll receipts instantly. Finance and procurement teams receive itemized monthly GST invoices with direct ERP/SAP export capabilities, ensuring 100% audit compliance and 5% GST input tax credit.",
  },
  {
    q: "What safety protocols are followed for female employees during night shifts?",
    a: "For female employees traveling between 8:00 PM and 6:00 AM, Speedways mandates first-pickup / last-drop security protocols, vetted security escort guards in vehicles where required, panic SOS buttons linked to our 24×7 command center, continuous geofence deviation alerts, and automated WhatsApp/SMS live trip sharing with company transport administrators.",
  },
  {
    q: "Which cities are covered and what is the typical onboarding SLA for new corporate RFPs?",
    a: "Speedways has direct operational hubs in Mumbai, Bengaluru, Hyderabad, Chennai, Delhi NCR, and Pune, with direct & managed network capability across 185+ Tier-1, Tier-2, and Tier-3 cities in India. For new corporate empanelments, standard rate matrices and service level agreements (SLAs) are delivered within 24 to 48 hours.",
  },
];

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
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
                  India&apos;s Trusted Corporate Mobility &amp; Employee Transportation Partner
                </strong>
                Delivering safe, compliant, and technology-driven ground transportation across{" "}
                <span className="font-bold text-slate-900">
                  <AnimatedNumber value={185} suffix="+" />
                </span>{" "}
                cities. Serving 150+ Fortune enterprises with{" "}
                <span className="font-bold text-slate-900">
                  <AnimatedNumber value={1200} suffix="+" format={true} />
                </span>{" "}
                verified fleet vehicles, AIS-140 live telemetry, and centralized 24×7 command center governance.
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
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-green-600 hover:bg-green-700 active:scale-98 text-white font-bold text-base shadow-sm hover:shadow-md transition-all group cursor-pointer"
                >
                  <span>Request Corporate Empanelment</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-base border border-slate-300 shadow-2xs hover:border-slate-400 transition-all"
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

            {/* Right Hero Image Column with Larger Display & Anchored Corporate Telemetry Badges */}
            <div className="lg:col-span-6 relative mt-6 lg:mt-0 group">
              {/* Main Image Showcase Container */}
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white p-1.5 transition-colors duration-300">
                <Image
                  src="/images/hero-sedan.jpg"
                  alt="Speedways Executive Corporate Mobility Fleet with Chauffeur outside modern corporate headquarters"
                  width={1100}
                  height={650}
                  className="w-full h-[360px] sm:h-[430px] md:h-[480px] lg:h-[510px] xl:h-[540px] object-cover rounded-xl transition-transform duration-700 ease-out"
                  priority
                />

                {/* Subtle gradient vignette at bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/15 to-transparent rounded-xl pointer-events-none"></div>

                <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-medium flex items-center justify-between">
                  <span className="px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 shadow-sm font-semibold tracking-wide">
                    Speedways Executive Chauffeur &amp; Fleet Operations
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-green-600 text-white font-mono font-bold text-[11px] shadow-sm flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                    24×7 ACTIVE
                  </span>
                </div>
              </div>

              {/* Anchored Corporate Badge 1: 100% Background Verified */}
              <div className="absolute -top-4 -left-2 sm:-left-5 bg-white/95 backdrop-blur-md p-3.5 rounded-xl shadow-lg border border-slate-200 flex items-center gap-3 z-20">
                <div className="w-10 h-10 rounded-lg bg-green-50 text-green-700 flex items-center justify-center shrink-0 border border-green-200">
                  <ShieldCheck className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 tracking-tight flex items-center gap-1">
                    <span className="text-green-700 font-extrabold text-base">
                      <AnimatedNumber value={100} suffix="%" duration={1400} />
                    </span>
                    <span>Background-Verified</span>
                  </div>
                  <div className="text-[11px] font-medium text-slate-500">Chauffeur Police Background Check</div>
                </div>
              </div>

              {/* Anchored Corporate Badge 2: Live GPS Telemetry */}
              <div className="absolute -bottom-4 -right-2 sm:-right-5 bg-white/95 backdrop-blur-md p-3.5 rounded-xl shadow-lg border border-slate-200 flex items-center gap-3 z-20">
                <div className="relative w-10 h-10 rounded-lg bg-green-50 text-green-700 flex items-center justify-center shrink-0 border border-green-200">
                  <Radio className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-600"></span>
                    Live GPS Telemetry
                  </div>
                  <div className="text-[11px] font-medium text-slate-500">
                    Continuous <span className="font-bold text-slate-700"><AnimatedNumber value={24} duration={1200} />×<AnimatedNumber value={7} duration={1200} /></span> Central Command Oversight
                  </div>
                </div>
              </div>

              {/* Anchored Corporate Badge 3: 185+ Cities */}
              <div className="hidden sm:flex absolute top-1/2 -right-4 sm:-right-6 transform -translate-y-1/2 bg-white/95 backdrop-blur-md p-3.5 rounded-xl shadow-lg border border-slate-200 items-center gap-3 z-20">
                <div className="w-10 h-10 rounded-lg bg-green-50 text-green-700 flex items-center justify-center shrink-0 border border-green-200">
                  <MapPin className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 tracking-tight flex items-center gap-1">
                    <span className="text-green-700 font-extrabold text-base">
                      <AnimatedNumber value={185} suffix="+" duration={1600} />
                    </span>
                    <span>Cities</span>
                  </div>
                  <div className="text-[11px] font-medium text-slate-500">Direct &amp; Managed Hubs</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ENTERPRISE CLIENT TRUST MARQUEE (ORIGINAL CORPORATE BRAND LOGOS) */}
      <ClientLogosMarquee />

      {/* 2B. ENTERPRISE COMPLIANCE & ACCREDITATION STRIP */}
      <section className="bg-white border-b border-slate-200/80 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center text-center divide-y md:divide-y-0 md:divide-x divide-slate-100">
            <div className="flex items-center justify-center gap-2.5 py-1 px-3">
              <ShieldCheck className="w-5 h-5 text-green-600 shrink-0" />
              <div className="text-left">
                <div className="text-xs font-bold text-slate-900 leading-tight">ISO 9001:2015</div>
                <div className="text-[10px] text-slate-500">Quality Certified</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2.5 py-1 px-3">
              <FileCheck className="w-5 h-5 text-green-600 shrink-0" />
              <div className="text-left">
                <div className="text-xs font-bold text-slate-900 leading-tight">ISO 27001</div>
                <div className="text-[10px] text-slate-500">Data Security Standard</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2.5 py-1 px-3">
              <Radio className="w-5 h-5 text-green-600 shrink-0" />
              <div className="text-left">
                <div className="text-xs font-bold text-slate-900 leading-tight">AIS-140 GPS</div>
                <div className="text-[10px] text-slate-500">Govt Telemetry Certified</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2.5 py-1 px-3">
              <Award className="w-5 h-5 text-green-600 shrink-0" />
              <div className="text-left">
                <div className="text-xs font-bold text-slate-900 leading-tight">100% Police Verified</div>
                <div className="text-[10px] text-slate-500">7-Point Chauffeur Vetting</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-2.5 py-1 px-3 col-span-2 md:col-span-1">
              <Receipt className="w-5 h-5 text-green-600 shrink-0" />
              <div className="text-left">
                <div className="text-xs font-bold text-slate-900 leading-tight">5% GST ITC Compliant</div>
                <div className="text-[10px] text-slate-500">Audit-Ready e-Invoicing</div>
              </div>
            </div>
          </div>
        </div>
      </section>

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

      {/* 5B. DYNAMIC ROTATING BORDER INFOCARDS SPOTLIGHT */}
      <SpeedwaysInfoCards />

      {/* 5C. 185+ CITIES NETWORK PREVIEW (Short Summary) */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 shadow-xl relative overflow-hidden flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-950 border border-green-800 text-green-400 text-xs font-bold uppercase tracking-wider">
                <MapPin className="w-3.5 h-3.5" />
                Pan-India Reach
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                185+ Cities Nationwide • 6 Direct Metro Hubs
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                Direct branch hubs in Mumbai, Bengaluru, Hyderabad, Chennai, Delhi NCR, and Pune with verified Tier-2/3 coverage nationwide under 24×7 central command oversight.
              </p>
            </div>
            <Link
              href="/network-safety"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold text-sm shadow-md shadow-green-500/25 transition-all shrink-0 cursor-pointer"
            >
              <span>Explore Interactive Network Map</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

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

      {/* 10. CORPORATE PROCUREMENT FAQ ACCORDION (Rego reference) */}
      <section className="py-20 bg-white border-t border-slate-200/80">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-100 px-3 py-1 rounded-full">
              Enterprise Procurement &amp; Due Diligence
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
              Frequently Asked Questions by Corporate Travel Desks
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Essential answers regarding B2B contract terms, driver verification standards, 3-layer governance, and statutory GST compliance.
            </p>
          </div>

          <div className="space-y-3.5">
            {HOME_FAQS.map((faq, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200/90 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left font-bold text-slate-900 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-100/70 transition-colors"
                >
                  <span className="text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#48B83D] shrink-0 transition-transform duration-200 ${
                      openFaq === idx ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-200/60 pt-3 animate-in fade-in duration-200">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 11. BOTTOM CORPORATE EMPANELMENT CTA BANNER */}
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
