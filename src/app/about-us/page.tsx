"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import SymbolBadge from "@/components/SymbolBadge";
import LeadershipSection from "@/components/LeadershipSection";
import {
  ShieldCheck,
  Target,
  Compass,
  Award,
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
  Building2,
  Leaf,
  Zap,
} from "lucide-react";
import { TESTIMONIALS } from "@/data/speedwaysData";
import { Timeline, type TimelineItem } from "@/components/ui/timeline";

export default function AboutUsPage() {
  const [selectedStakeholder, setSelectedStakeholder] = useState<number>(0);

  const evolutionTimelineItems: TimelineItem[] = [
    {
      id: "2012",
      title: "Founding & Launch in Mumbai (2012)",
      description:
        "Speedways Fleet & Travel Management Pvt. Ltd. was established with 15 corporate sedans at Mumbai Head Office, introducing structured SLAs to replace informal local rental desks.",
      timestamp: "Founding Year • 2012",
      status: "completed",
      icon: <Building2 className="h-3 w-3 text-white" />,
      content: (
        <div className="rounded-2xl border border-green-200/90 bg-white p-4 card-premium-shadow">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <span className="text-xs font-black text-slate-900">Head Office Established</span>
            <span className="text-[10px] font-bold text-green-700 bg-green-50 border border-green-200 px-2 py-0.5 rounded-full">
              15 Verified Vehicles
            </span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Pioneered guaranteed chauffeur reporting protocols and monthly consolidated corporate billing for Mumbai's major financial centers.
          </p>
        </div>
      ),
    },
    {
      id: "2015",
      title: "Direct Metro Hub Expansion (2015)",
      description:
        "Expanded direct branch offices into Delhi NCR, Bengaluru, Hyderabad, and Chennai, scaling to 300+ dedicated fleet vehicles across manufacturing clusters and IT corridors.",
      timestamp: "Pan-Metro Expansion • 2015",
      status: "completed",
      icon: <MapPin className="h-3 w-3 text-white" />,
      content: (
        <div className="rounded-2xl border border-green-200/90 bg-white p-4 card-premium-shadow">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <span className="text-xs font-black text-slate-900">Direct Metro Branches</span>
            <span className="text-[10px] font-bold text-green-700 bg-green-50 border border-green-200 px-2 py-0.5 rounded-full">
              300+ Fleet Depth
            </span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Enabled enterprise clients to sign uniform single-vendor transportation agreements across multi-city operating footprints.
          </p>
        </div>
      ),
    },
    {
      id: "2018",
      title: "Enterprise Cloud & AIS-140 Telemetry (2018)",
      description:
        "Integrated proprietary enterprise dispatch technology nationwide, pioneering 100% digital duty slips (e-DDS), geofenced passenger OTP authentication, and automated monthly ERP invoicing.",
      timestamp: "Digital Innovation • 2018",
      status: "completed",
      icon: <Radio className="h-3 w-3 text-white" />,
      content: (
        <div className="rounded-2xl border border-green-200/90 bg-white p-4 card-premium-shadow">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <span className="text-xs font-black text-slate-900">100% Digital Duty Slips</span>
            <span className="text-[10px] font-bold text-green-700 bg-green-50 border border-green-200 px-2 py-0.5 rounded-full">
              Zero-Dispute ERP MIS
            </span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Deployed live AIS-140 GPS telemetry tracking, geofence deviation alarms, and a centralized 24×7 Command Centre in Mumbai for continuous trip oversight.
          </p>
        </div>
      ),
    },
    {
      id: "2021",
      title: "ESG Leadership & Green Fleet Transition (2021)",
      description:
        "Launched corporate electric vehicle operations with Tata Tigor EV and Nexon EV fleets, supporting enterprise client Scope 1 and Scope 2 decarbonization targets.",
      timestamp: "Green Mobility • 2021",
      status: "completed",
      icon: <Leaf className="h-3 w-3 text-white" />,
      content: (
        <div className="rounded-2xl border border-green-200/90 bg-white p-4 card-premium-shadow">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <span className="text-xs font-black text-slate-900">Zero-Emission Commute</span>
            <span className="text-[10px] font-bold text-green-700 bg-green-50 border border-green-200 px-2 py-0.5 rounded-full">
              Scope 1 &amp; 2 ESG Ready
            </span>
          </div>
          <p className="text-xs text-slate-600 leading-relaxed">
            Introduced EV pilot corridors for campus shuttles and airport transfers with managed charging grids and clean emission audit logs.
          </p>
        </div>
      ),
    },
    {
      id: "2026",
      title: "185+ Cities National Network (2026 Present)",
      description:
        "Operating 1,200+ verified vehicles across 185+ cities and 6 direct metro hubs, serving 156+ Fortune & Enterprise clients with 24×7 Command Centre governance and statutory 5% GST corporate billing.",
      timestamp: "Institutional Scale • 2026 Present",
      status: "active",
      icon: <Award className="h-3 w-3 text-white" />,
      content: (
        <div className="rounded-2xl border border-green-300 bg-green-50/70 p-4 card-premium-shadow">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
            <span className="text-xs font-black text-slate-900">Pan-India Unified Governance</span>
            <span className="text-[10px] font-bold text-green-800 bg-white border border-green-300 px-2 py-0.5 rounded-full">
              1,200+ Fleet • 185+ Cities
            </span>
          </div>
          <p className="text-xs text-slate-700 leading-relaxed">
            Consolidated single or multi-city accounts governed by ISO-aligned quality frameworks, dedicated SPOCs, and structured Long-Term Rental (LTR Lease) programs.
          </p>
        </div>
      ),
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
      benefit: "Cost Control & Statutory Billing Clarity",
      desc: "Transparent contractual rate cards, compliant 5% GST billing structure, and volume economies of scale across single or multi-city footprints.",
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

      {/* Header Banner with High-Impact Fleet Showcase */}
      <section className="py-14 md:py-20 border-b border-green-100/70 bg-[#F4FAF6] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-4">
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

            {/* Right Showcase Image Card */}
            <div className="lg:col-span-5 relative group">
              <div className="absolute -inset-2 bg-gradient-to-tr from-green-500/20 to-emerald-400/10 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                <Image
                  src="/images/vip-fleet-lineup.jpg"
                  alt="Speedways Corporate Fleet Staging outside Convention Center"
                  width={720}
                  height={480}
                  className="w-full h-[320px] sm:h-[380px] object-cover group-hover:scale-102 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none"></div>

                <div className="absolute bottom-4 left-4 right-4 text-white text-xs flex items-center justify-between">
                  <span className="px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 font-semibold">
                    185+ Cities Managed Network
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-green-500 text-white font-mono font-bold text-[11px] shadow-xs">
                    Since 2012
                  </span>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-4 -left-3 sm:-left-5 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-green-200 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-green-100 text-green-700 flex items-center justify-center font-black text-xs">
                  ISO
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">5 ISO Quality Certifications</div>
                  <div className="text-[10px] text-slate-500">Externally Audited & Certified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive 2012-to-Present Journey Timeline */}
      <section className="py-20 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-[#48B83D] border border-green-200 text-xs font-bold uppercase tracking-wider mb-3">
              <Award className="w-3.5 h-3.5" />
              Growth Milestone Timeline
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mt-1 tracking-tight">
              The Evolution of Speedways (2012 - Present)
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              From our 2012 founding with 15 corporate sedans in Mumbai to a 1,200+ vehicle pan-India footprint across 185+ cities, explore the key milestones that established Speedways as a trusted enterprise mobility leader.
            </p>
          </div>

          <div className="max-w-4xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-green-200/90 card-premium-shadow">
            <Timeline
              items={evolutionTimelineItems}
              variant="spacious"
              orientation="vertical"
              showConnectors={true}
              showTimestamps={true}
              timestampPosition="top"
            />
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
                Our central Mumbai Command Centre unifies booking management, safety tracking, and financial reconciliation across all 185+ cities. Meanwhile, our 6 direct metro hubs (Mumbai, Bengaluru, Hyderabad, Chennai, Delhi NCR, Pune) and vetted ground partners guarantee on-time physical car deployment and personalized guest care.
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

      {/* Executive Leadership Team Organization Chart */}
      <div id="leadership">
        <LeadershipSection />
      </div>

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

          {/* Operations Command Centre Visual Showcase */}
          <div className="mb-12 bg-white rounded-3xl border border-slate-200/90 p-3 sm:p-4 shadow-xl overflow-hidden group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 relative h-64 sm:h-72 rounded-2xl overflow-hidden bg-slate-900">
                <Image
                  src="/images/command-center.jpg"
                  alt="24x7 Operations Command Centre Telemetry Desk at Speedways Mumbai HQ"
                  fill
                  className="object-cover group-hover:scale-102 transition-transform duration-500 opacity-95"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-lg text-xs font-bold text-slate-900 shadow-sm flex items-center gap-1.5">
                  <Radio className="w-3.5 h-3.5 text-green-600 animate-pulse" />
                  <span>Tier 2 Nerve Centre: Mumbai HQ</span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white text-xs">
                  <div className="font-bold">24×7 Operations Control Desk</div>
                  <div className="text-slate-300 text-[11px]">Continuous dispatch, flight tracking & panic SOS telemetry</div>
                </div>
              </div>
              <div className="lg:col-span-6 p-4 sm:p-6 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-100 px-3 py-1 rounded-full">
                  Continuous Real-Time Oversight
                </span>
                <h3 className="text-2xl font-black text-slate-900">
                  Zero Gaps Between Booking, Dispatch & Billing
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Every driver deployment across 185+ cities is actively monitored by our central command team. If a flight is delayed or an itinerary changes, our controllers adjust dispatches proactively before any passenger inconvenience occurs.
                </p>
                <div className="pt-2 flex flex-wrap gap-3 text-xs font-semibold text-slate-700">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>90-min prior driver details</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>0-15 min rapid escalation</span>
                  </div>
                </div>
              </div>
            </div>
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
