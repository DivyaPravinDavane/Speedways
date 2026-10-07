"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import SymbolBadge from "@/components/SymbolBadge";
import {
  ShieldCheck,
  Target,
  Compass,
  Award,
  Sparkles,
  Users,
  CheckCircle2,
  Building,
  PhoneCall,
  ArrowRight,
  TrendingUp,
  FileCheck,
  Briefcase,
  Layers,
  Clock,
  HeartHandshake,
  Check,
  MapPin,
  Car,
  Radio,
  Quote,
  Star,
} from "lucide-react";
import { TESTIMONIALS } from "@/data/speedwaysData";

export default function AboutUsPage() {
  const [selectedMilestone, setSelectedMilestone] = useState<number>(4);
  const [selectedStakeholder, setSelectedStakeholder] = useState<number>(0);

  const milestones = [
    {
      year: "2012",
      title: "Founding in Mumbai",
      desc: "Speedways Fleet & Travel Management Pvt. Ltd. established with 15 corporate sedans at Mumbai Head Office, introducing structured SLAs to replace informal taxi desks.",
      metric: "15 Cabs",
    },
    {
      year: "2015",
      title: "Direct Metro Expansion",
      desc: "Expanded direct branch offices into Delhi NCR, Bengaluru, Hyderabad, and Chennai, scaling to 300+ dedicated fleet vehicles across manufacturing and IT hubs.",
      metric: "300+ Fleet",
    },
    {
      year: "2018",
      title: "Enterprise Cloud Telemetry",
      desc: "Integrated our proprietary enterprise technology platform nationwide, pioneering 100% digital duty slips, geofenced passenger OTPs, and contactless ERP billing.",
      metric: "Zero Paper",
    },
    {
      year: "2021",
      title: "ESG & EV Green Commute",
      desc: "Launched corporate electric vehicle operations with Tata Tigor EV and Nexon EV fleets, supporting enterprise client Scope 1 and Scope 2 decarbonization targets.",
      metric: "EV Ready",
    },
    {
      year: "2026",
      title: "185+ Cities National Network",
      desc: "Operating 1,200+ managed vehicles across 185+ cities nationwide, governed by our 24×7 Mumbai Command Centre and 5 certified ISO management frameworks.",
      metric: "185+ Cities",
    },
  ];

  const pillars = [
    {
      title: "Vision",
      statement: "Shaping corporate mobility as India's most trusted, dependable, and forward-looking partner.",
      desc: "To be the benchmark in enterprise road travel through consistent service quality, uncompromising safety, and relentless technological modernization.",
      icon: Target,
    },
    {
      title: "Mission",
      statement: "Seamless, intelligent mobility elevating every business journey.",
      desc: "Providing corporate enterprises with integrated, transparent, and technology-powered fleet solutions that save administrative time and safeguard personnel.",
      icon: Compass,
    },
    {
      title: "Purpose",
      statement: "Moving Business. Connecting People. Enabling Progress.",
      desc: "Mobility is the backbone of Indian commerce. We ensure executive talent, teams, and dignitaries move seamlessly across manufacturing clusters and financial districts.",
      icon: HeartHandshake,
    },
    {
      title: "Client Promise",
      statement: "Excellence in Every Journey. Confidence at Every Mile.",
      desc: "A solemn commitment to zero service compromises, guaranteed lead-time fulfillment, transparent billing, and 24×7 proactive human accountability.",
      icon: Award,
    },
  ];

  const stakeholders = [
    {
      role: "Procurement Heads",
      benefit: "Cost Control & Tax Credit Clarity",
      desc: "Transparent contractual rate cards, 5% GST model ensuring clean corporate input tax credit, and volume economies of scale across single or multi-city footprints.",
      icon: Briefcase,
      bullets: [
        "100% compliant 5% GST billing without fuel surcharge surprises",
        "Volume-tiered master service agreements (MSAs)",
        "Unified multi-city single consolidated invoicing",
      ],
    },
    {
      role: "Human Resources (HR)",
      benefit: "Employee Duty of Care & Women Safety",
      desc: "100% police-verified chauffeurs, live GPS link sharing with families, panic SOS buttons, and mandatory night drop-confirmation calls for female employees.",
      icon: Users,
      bullets: [
        "Rigorous 7-point police & background verification for every chauffeur",
        "Safe-drop tele-calling confirmation for late-night female staff",
        "SOS panic alert link directly patched to 24×7 Command Desk",
      ],
    },
    {
      role: "Admin & Travel Desks",
      benefit: "Daily Operational Reliability & Zero Hassle",
      desc: "Automated booking intake, 90-minute prior driver details dispatch, 99.8% on-time arrival rate, and a dedicated SPOC to resolve last-minute itinerary adjustments.",
      icon: Clock,
      bullets: [
        "Driver details dispatched via SMS & WhatsApp 90 minutes prior",
        "Airport flight delay tracking with zero wait penalty",
        "Guaranteed 2-4 hour local dispatch lead time",
      ],
    },
    {
      role: "Finance & Accounts",
      benefit: "100% MIS Traceability & Error-Free Invoicing",
      desc: "Digital duty slips generated via our technology platform with geofenced pickup/drop timestamps, automated kilometer auditing, and centralized e-invoicing ready for ERP import.",
      icon: FileCheck,
      bullets: [
        "Zero manual paper log disputes with GPS geofence timestamps",
        "Automated toll, state tax, and parking receipt itemization",
        "Ready export to SAP, Oracle, and Tally ERP accounting",
      ],
    },
  ];

  const governanceHierarchy = [
    {
      level: "Tier 1",
      title: "Dedicated SPOC Account Manager",
      role: "Strategic Point of Contact",
      desc: "A single senior relationship executive assigned to your enterprise account overseeing SLA audits, contractual reviews, customized tariff adjustments, and monthly MIS reviews.",
      badge: "Strategic Oversight",
    },
    {
      level: "Tier 2",
      title: "24×7 Centralised Command Centre",
      role: "Operational Nerve Centre",
      desc: "24-hour live telemetry desk in Mumbai monitoring real-time dispatch, driver reporting 90 minutes prior, live route adherence, and passenger SOS calls.",
      badge: "Continuous Real-Time",
    },
    {
      level: "Tier 3",
      title: "Direct Metro Branch Operations",
      role: "Local Execution & Coordination",
      desc: "On-ground operations teams in Mumbai, Bengaluru, Hyderabad, Chennai, and Delhi NCR handling vehicle physical audits, chauffeur grooming, and local dispatch.",
      badge: "Local Fulfillment",
    },
    {
      level: "Tier 4",
      title: "Chauffeur & Fleet Standards",
      role: "On-Road Service Delivery",
      desc: "Uniformed, police-verified professional chauffeurs operating sanitized, commercially registered, GPS-equipped vehicles with routine preventive inspections.",
      badge: "Punctual Delivery",
    },
  ];

  const escalationMatrix = [
    { level: "Primary", timing: "Immediate (0-15 Mins)", role: "24×7 Command Centre Desk", contact: "9820630817" },
    { level: "Level 1", timing: "Within 30 Mins", role: "City Operations Head", contact: "City Regional Lead" },
    { level: "Level 2", timing: "Within 1 Hour", role: "Dedicated Corporate Account SPOC", contact: "Account SPOC" },
    { level: "Level 3", timing: "Within 2 Hours", role: "Chief Operating Officer (COO)", contact: "Executive Leadership" },
  ];

  return (
    <div className="bg-[#F4FAF6]">
      {/* Breadcrumb Bar */}
      <div className="bg-slate-50 border-b border-slate-200/80">
        <Breadcrumbs
          items={[
            { label: "Company", href: "/about-us" },
            { label: "About Us & Governance" },
          ]}
        />
      </div>

      {/* Header Banner with Animated Floating Telemetry Badges */}
      <section className="py-14 md:py-20 border-b border-green-100/70 bg-[#F4FAF6] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-700 border border-green-200 text-xs font-bold uppercase tracking-wider">
                <Building className="w-3.5 h-3.5 text-green-600" />
                Corporate Heritage & Governance
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                <Radio className="w-3 h-3 text-green-600 animate-pulse" />
                Established 2012 • 14+ Years Enterprise Trust
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              A Decade of Enterprise Mobility Leadership
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Established in 2012, Speedways Fleet & Travel Management Pvt. Ltd. was founded on a singular principle: to replace fragmented, unorganized local car rentals with structured, technology-driven enterprise mobility governance.
            </p>

            {/* Quick Heritage Telemetry Chips */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-bold text-slate-700">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200">
                <Building className="w-4 h-4 text-green-600" />
                <span>HQ in Mumbai</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200">
                <Car className="w-4 h-4 text-green-600" />
                <span>1,200+ Fleet Network</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200">
                <MapPin className="w-4 h-4 text-green-600" />
                <span>185+ Managed Cities</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200">
                <ShieldCheck className="w-4 h-4 text-green-600" />
                <span>Zero Compromise SLA</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive 2012-to-Present Journey Timeline */}
      <section className="py-20 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-100 px-3 py-1 rounded-full">
              Growth Milestone Timeline
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 tracking-tight">
              The Evolution of Speedways (2012 - Present)
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Click any milestone below to review the operational scaling and technological advancements that built our enterprise credibility.
            </p>
          </div>

          {/* Stepper Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 mb-8">
            {milestones.map((m, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedMilestone(idx)}
                className={`p-4 rounded-2xl text-left border transition-all cursor-pointer ${
                  selectedMilestone === idx
                    ? "bg-white border-green-500 shadow-md ring-2 ring-green-500/20"
                    : "bg-white/60 hover:bg-white border-slate-200"
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span
                    className={`text-sm font-black ${
                      selectedMilestone === idx ? "text-green-700 font-mono" : "text-slate-500 font-mono"
                    }`}
                  >
                    {m.year}
                  </span>
                  <span className="text-[10px] font-bold text-green-700 bg-green-100 px-2 py-0.2 rounded-full">
                    {m.metric}
                  </span>
                </div>
                <div className="text-xs font-bold text-slate-900 line-clamp-1">{m.title}</div>
              </button>
            ))}
          </div>

          {/* Active Milestone Card */}
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-xl flex flex-col md:flex-row gap-8 items-center">
            <div className="w-24 h-24 rounded-2xl bg-green-500 text-white flex flex-col items-center justify-center shrink-0 shadow-lg shadow-green-500/25">
              <span className="text-2xl font-black font-mono">{milestones[selectedMilestone].year}</span>
              <span className="text-[10px] font-bold uppercase tracking-wider text-green-100">Milestone</span>
            </div>
            <div className="space-y-2 flex-1">
              <h3 className="text-2xl font-black text-slate-900">
                {milestones[selectedMilestone].title}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                {milestones[selectedMilestone].desc}
              </p>
              <div className="pt-2 text-xs font-bold text-green-700 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4" />
                <span>Verified Historical Corporate Benchmark</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Operating Philosophy & Narrative */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-100 px-3 py-1 rounded-full">
                Operating Philosophy
              </span>
              <h2 className="text-3xl font-black text-slate-900 tracking-tight">
                Centralised Governance with Local Ground Execution
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Many corporate mobility providers struggle when expanding beyond a single city because they lack either local ground presence or centralized operational oversight. Speedways solves this dual challenge through our unique hybrid architecture.
              </p>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Our central Mumbai Command Centre unifies booking management, safety tracking, and financial reconciliation across all 185+ cities. Meanwhile, our 6 direct metro hubs (Mumbai, Bangalore, Hyderabad, Chennai, Delhi NCR, Pune) and vetted ground partners guarantee on-time physical car deployment and personalized guest care.
              </p>

              <div className="pt-2 space-y-3">
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                  <span>Uniform SLA benchmarks across Tier-1, Tier-2, and Tier-3 cities</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                  <span>Transparent 5% GST corporate billing structure with zero surprise tariffs</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-semibold text-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-green-600 shrink-0" />
                  <span>Dedicated SPOC to serve as your single point of operational accountability</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white bg-slate-100 group">
                <Image
                  src="/images/hero-sedan.jpg"
                  alt="Speedways Corporate Travel Philosophy"
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quad-Pillar Core Philosophy (4 Cards) */}
      <section className="py-20 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-100 px-3 py-1 rounded-full">
              The Speedways Compass
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 tracking-tight">
              Our Core Philosophical Pillars
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Every trip dispatched and every policy implemented is anchored in these four founding tenets.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-7 rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-green-400 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center mb-5 group-hover:bg-green-600 group-hover:text-white transition-colors shadow-2xs">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-wider text-green-700 block mb-1">
                      {pillar.title}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mb-2 leading-snug">
                      &ldquo;{pillar.statement}&rdquo;
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                  <div className="pt-4 mt-4 border-t border-slate-100 text-[11px] font-semibold text-slate-400 uppercase tracking-wider">
                    Pillar 0{idx + 1}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stakeholder Value Matrix (Interactive Selector) */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-100 px-3 py-1 rounded-full">
              Stakeholder Alignment
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 tracking-tight">
              Solving Challenges for Every Corporate Department
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Enterprise mobility touches multiple teams. Here is how Speedways creates tangible measurable value for each key stakeholder.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {stakeholders.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50/70 p-8 rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-green-400 hover:bg-white transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center shrink-0">
                        <IconComp className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs font-extrabold uppercase tracking-wider text-green-700">
                          {item.role}
                        </span>
                        <h3 className="text-lg font-bold text-slate-900">
                          {item.benefit}
                        </h3>
                      </div>
                    </div>

                    <p className="text-sm text-slate-600 leading-relaxed mb-4">
                      {item.desc}
                    </p>

                    <div className="space-y-2 pt-2 border-t border-slate-200/60">
                      {item.bullets.map((b, bIdx) => (
                        <div key={bIdx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                          <Check className="w-3.5 h-3.5 text-green-600 shrink-0" />
                          <span>{b}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Governance Hierarchy & Multi-Tier Escalation Model */}
      <section className="py-20 bg-slate-50/70 border-b border-slate-200/80" id="governance">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-100 px-3 py-1 rounded-full">
              Governance Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 tracking-tight">
              Structured Account Management & Escalation
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Our 4-tier operational pyramid guarantees zero ambiguity, continuous monitoring, and structured executive escalation.
            </p>
          </div>

          {/* 4-Tier Hierarchy Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {governanceHierarchy.map((tier, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-green-400 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-black text-white bg-green-600 px-2.5 py-1 rounded-lg">
                      {tier.level}
                    </span>
                    <span className="text-[11px] font-semibold text-green-700 bg-green-100 px-2 py-0.5 rounded">
                      {tier.badge}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">
                    {tier.title}
                  </h3>
                  <div className="text-xs font-semibold text-slate-500 mb-2">
                    {tier.role}
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {tier.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Escalation Matrix Table */}
          <div className="bg-[#F0FDF4] border border-[#DCFCE7] rounded-3xl p-6 sm:p-8">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-green-600" />
              <span>Multi-Tier Incident Escalation Protocol</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-6">
              In the rare event of route delays, vehicle breakdown, or flight adjustments, our time-bound escalation guarantees immediate executive response.
            </p>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-green-200 text-xs uppercase tracking-wider text-slate-700 font-bold bg-white/70">
                    <th className="py-3 px-4 rounded-l-lg">Escalation Tier</th>
                    <th className="py-3 px-4">Response Benchmark</th>
                    <th className="py-3 px-4">Designated Authority</th>
                    <th className="py-3 px-4 rounded-r-lg">Channel</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-green-100 bg-white">
                  {escalationMatrix.map((row, idx) => (
                    <tr key={idx} className="hover:bg-green-50/50 transition-colors">
                      <td className="py-3.5 px-4 font-bold text-green-700">{row.level}</td>
                      <td className="py-3.5 px-4 font-medium text-slate-800">{row.timing}</td>
                      <td className="py-3.5 px-4 font-semibold text-slate-900">{row.role}</td>
                      <td className="py-3.5 px-4 text-xs font-mono text-slate-600">{row.contact}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Client Testimonials Showcase */}
      <section className="py-20 bg-white border-b border-slate-100" id="testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-100 px-3 py-1 rounded-full">
              Enterprise Client Trust
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 tracking-tight">
              Endorsed by India&apos;s Leading Enterprises
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Hear directly from procurement heads, corporate travel desks, and facilities directors who rely on Speedways daily.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((t, idx) => (
              <div
                key={idx}
                className="bg-slate-50/70 p-7 rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-lg hover:border-green-400 hover:bg-white transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-green-500/30 mb-2" />
                  <p className="text-sm text-slate-700 italic leading-relaxed mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200/60">
                  <div className="font-bold text-slate-900 text-sm">{t.client}</div>
                  <div className="text-xs text-slate-500 font-medium">{t.designation || "Corporate Client"}</div>
                  <div className="text-xs font-bold text-green-700 mt-0.5">{t.category}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-16 bg-[#F0FDF4] text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto space-y-4">
            <h2 className="text-3xl font-black text-slate-900">
              Partner with an Enterprise Mobility Specialist
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Discover how Speedways can tailor corporate SLAs, route optimization, and billing consolidation for your business.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold text-sm shadow-md shadow-green-500/25 transition-all cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Empanel Speedways</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm border border-slate-200 transition-colors"
              >
                <span>Browse Services Directory</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
