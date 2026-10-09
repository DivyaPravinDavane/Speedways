import React from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import SymbolBadge from "@/components/SymbolBadge";
import {
  Crown,
  Gem,
  CalendarCheck,
  ShieldCheck,
  CheckCircle2,
  Award,
  Plane,
  ArrowRight,
  PhoneCall,
  UserCheck,
  FileLock2,
  Building2,
  Car,
  Check,
  Star,
  Lock,
} from "lucide-react";

export const metadata = {
  title: "VIP Movement, Luxury Fleet & MICE Events | Speedways",
  description:
    "White-glove chauffeur mobility for C-suite executives, visiting board directors, international delegations, and large-scale corporate conferences & MICE summits.",
};

export default function VipLuxuryEventsPage() {
  const vipPillars = [
    {
      title: "Board & CXO Delegations",
      desc: "Mercedes-Benz E-Class, BMW 5 Series, Audi A6, and Toyota Fortuners in flawless showroom condition.",
      icon: Crown,
      tag: "Flagship Luxury",
    },
    {
      title: "Elite Chauffeur Etiquette",
      desc: "English-speaking, corporate groomed chauffeurs trained in executive discretion and defensive driving.",
      icon: UserCheck,
      tag: "Trained Protocol",
    },
    {
      title: "Strict Confidentiality & NDA",
      desc: "Every VIP chauffeur operates under signed non-disclosure agreements, safeguarding boardroom privacy.",
      icon: FileLock2,
      tag: "100% NDA Sign-Off",
    },
    {
      title: "On-Site MICE Transport Desk",
      desc: "Physical event desks at convention centers and airports to coordinate mass attendee shuttles in real time.",
      icon: CalendarCheck,
      tag: "Mass Coordination",
    },
  ];

  const protocolChecklist = [
    "Pre-trip deep sanitation & vacuum inspection 60 minutes prior",
    "Chauffeur in clean formal dark suit, tie & company credentials",
    "Complimentary premium bottled water, fresh tissue box & mints",
    "Universal fast chargers (USB-C, Lightning & Wireless)",
    "Cabin air conditioning pre-cooled to 21°C",
    "Zero mobile phone usage, radio or conversation unless prompted",
    "Smooth defensive driving avoiding harsh acceleration or stops",
    "Dedicated backup luxury vehicle on immediate standby",
  ];

  const eventCapabilities = [
    {
      title: "Annual General Meetings (AGM)",
      desc: "Simultaneous deployment of 20 to 50+ luxury sedans and premium MUVs to ferry board directors, institutional investors, and leadership teams.",
      stats: "20 - 50+ Cabs",
    },
    {
      title: "International Corporate Summits",
      desc: "Coordinated flight arrivals across international terminals with dedicated paging desks, baggage marshals, and direct convoy transit to 5-star hotels.",
      stats: "Meet & Greet Paging",
    },
    {
      title: "Corporate Offsites & Delegations",
      desc: "Executive 13-seater and 26-seater Tempo Travellers and Volvo coaches equipped with reclining seats for high-comfort interstate retreats.",
      stats: "13 - 45 Seater Coaches",
    },
  ];

  return (
    <div className="bg-[#F4FAF6]">
      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-200/80">
        <Breadcrumbs
          items={[
            { label: "Services", href: "/services" },
            { label: "VIP Movement & MICE Summits" },
          ]}
        />
      </div>

      {/* Header Banner */}
      <section className="py-14 md:py-20 border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-700 border border-green-200 text-xs font-bold uppercase tracking-wider">
                <Crown className="w-3.5 h-3.5 text-green-600" />
                Executive Protocol & Event Logistics
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                <ShieldCheck className="w-3 h-3 text-green-600" />
                White-Glove Chauffeur Fleet
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Executive VIP Movement, Luxury Fleet & MICE Summits
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Discreet, white-glove chauffeur mobility engineered for visiting CXOs, international board members, and large-scale corporate summits across India.
            </p>

            {/* Quick Live Telemetry Chips */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-bold text-slate-700">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200">
                <Crown className="w-4 h-4 text-green-600" />
                <span>Mercedes, BMW, Audi & Fortuner</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200">
                <ShieldCheck className="w-4 h-4 text-green-600" />
                <span>100% Signed Chauffeur NDAs</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200">
                <Building2 className="w-4 h-4 text-green-600" />
                <span>On-Site MICE Transport Desks</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200">
                <Plane className="w-4 h-4 text-green-600" />
                <span>Curbside Airport Staging</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Lineup Showcase: Convention Center Fleet */}
      <section className="py-12 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 relative">
            <Image
              src="/images/vip-fleet-lineup.jpg"
              alt="Lineup of luxury Mercedes-Benz and BMW corporate fleet outside International Corporate Convention Centre"
              width={1200}
              height={550}
              className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-6 left-6 right-6 bg-slate-900/85 backdrop-blur-md text-white p-5 rounded-2xl border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs font-bold uppercase tracking-wider text-green-400">
                  Prestige Mobility Fleet
                </span>
                <h3 className="text-lg font-bold text-white">
                  Corporate Summit & MICE Coordination Desk
                </h3>
                <p className="text-xs text-slate-300 mt-0.5">
                  Deployment of 10 to 100+ luxury sedans, Innova Crystas, and executive coaches simultaneously.
                </p>
              </div>
              <Link
                href="/contact"
                className="px-5 py-2.5 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold text-xs uppercase tracking-wider transition-colors shrink-0 shadow-md"
              >
                Inquire For Summit
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars Grid (Pictographical) */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {vipPillars.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50/70 p-7 rounded-3xl border border-slate-200/90 shadow-2xs hover:border-green-400 hover:shadow-lg hover:bg-white transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <SymbolBadge icon={IconComp} size="md" />
                      <span className="text-[10px] font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded border border-green-200">
                        {item.tag}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-green-600 transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-200/60 text-[11px] font-bold text-green-700 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>White-Glove Standard</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Chauffeur Protocol Checklist & Luxury Interior Showcase */}
      <section className="py-20 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-100 px-3 py-1 rounded-full">
                White-Glove Standards
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
                The Speedways 8-Point VIP Protocol Checklist
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                When carrying your highest-profile stakeholders, there is zero tolerance for errors. Our dedicated VIP chauffeurs follow an uncompromising pre-trip protocol.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {protocolChecklist.map((item, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-700 p-3 rounded-2xl bg-white border border-slate-200/90 shadow-2xs">
                    <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                    <span className="font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 relative">
                <Image
                  src="/images/sedan-interior.jpg"
                  alt="Executive passenger relaxing in luxury leather interior working on tablet with telemetry"
                  width={650}
                  height={450}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-900 shadow-md flex items-center gap-1.5">
                  <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                  <span>First-Class Cabin Standard</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MICE & Large Scale Event Fleet Coordination */}
      <section className="py-20 bg-[#F0FDF4] border-b border-[#DCFCE7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-green-700 border border-green-200 text-xs font-bold uppercase tracking-wider">
              MICE Summits & Delegations
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 tracking-tight">
              Flawless Fleet Orchestration for High-Volume Events
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              From global summits at Bharat Mandapam / Jio World Convention Centre to private offsites, our specialized event desk manages complex logistics.
            </p>
          </div>

          {/* MICE Delegation Coach Fleet Visual Showcase */}
          <div className="mb-12 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 relative group">
            <Image
              src="/images/mice-fleet.jpg"
              alt="Speedways MICE Coach Fleet and Executive Delegation Vans Lineup"
              width={1200}
              height={500}
              className="w-full h-[280px] sm:h-[380px] md:h-[440px] object-cover group-hover:scale-102 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none"></div>

            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div className="bg-black/60 backdrop-blur-md px-4 py-2 rounded-xl border border-white/10">
                <span className="text-xs font-bold uppercase tracking-wider text-green-400 block">
                  Large-Scale Event Deployment
                </span>
                <span className="text-sm font-semibold text-white">
                  Luxury Tempo Travellers, Volvo Coaches & VIP Convoy Staging
                </span>
              </div>
              <span className="px-3.5 py-1.5 rounded-xl bg-green-500 text-white font-bold text-xs shadow-md">
                10 to 100+ Cabs Synchronized
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {eventCapabilities.map((event, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-3xl border border-green-200 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-green-100 text-green-700 flex items-center justify-center font-bold text-sm">
                      0{idx + 1}
                    </div>
                    <span className="text-xs font-bold text-green-700 bg-green-50 px-2.5 py-1 rounded-full border border-green-200">
                      {event.stats}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {event.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {event.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-white rounded-2xl border border-green-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h4 className="text-base font-bold text-slate-900">
                Planning an upcoming corporate conference or AGM?
              </h4>
              <p className="text-xs text-slate-500 mt-0.5">
                Our event logistics team provides a dedicated on-site coordinator and digital manifest tracking.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all shrink-0 cursor-pointer"
            >
              <span>Consult Event Coordinator</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold text-slate-900">
              Book Executive VIP Mobility
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Contact our executive desk for Mercedes, BMW, Audi, and Innova Crysta allocations with guaranteed lead times.
            </p>
            <div className="pt-2 flex justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
              >
                <span>Reserve VIP Vehicle</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="tel:9820630817"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold text-sm border border-slate-200 transition-colors"
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
