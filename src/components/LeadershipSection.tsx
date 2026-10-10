"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  ShieldCheck,
  Briefcase,
  Users,
  Compass,
  Building2,
  TrendingUp,
  ChevronRight,
  Quote,
  CheckCircle2,
  X,
  ExternalLink,
  PhoneCall,
  Clock,
  Layers,
  ArrowRight,
  UserCheck,
} from "lucide-react";
import { LEADERSHIP_TEAM, type LeaderProfile } from "@/data/speedwaysData";
import { AnimatedNumber } from "@/components/AnimatedCounter";

type FilterTab = "all" | "c-suite" | "operations" | "commercial";

export default function LeadershipSection({ className = "" }: { className?: string }) {
  const [activeTab, setActiveTab] = useState<FilterTab>("all");
  const [selectedLeader, setSelectedLeader] = useState<LeaderProfile | null>(null);

  const ceo = LEADERSHIP_TEAM[0];
  const allOfficers = LEADERSHIP_TEAM;

  // Filter leaders based on active tab
  const filteredLeaders = allOfficers.filter((leader) => {
    if (activeTab === "all") return true;
    if (activeTab === "c-suite") return leader.role === "CEO" || leader.role === "COO";
    if (activeTab === "operations")
      return (
        leader.role === "COO" ||
        leader.role.includes("Fleet") ||
        leader.role.includes("Operations")
      );
    if (activeTab === "commercial")
      return leader.role.includes("Sales") || leader.role === "CEO";
    return true;
  });

  // Specific structured scope points for executive cards
  const getStructuredScope = (leader: LeaderProfile): string[] => {
    if (leader.role === "CEO") {
      return [
        "Nationwide corporate mobility strategy and institutional vision",
        "Pioneering technology-driven operations and centralized telemetry",
        "Fostering long-term enterprise empanelments with Fortune 500s",
      ];
    }
    if (leader.role === "COO") {
      return [
        "18+ years leading Mumbai & Bengaluru operations for Avis India",
        "Overseeing multi-city branch profitability and SLA benchmarks",
        "Standardizing fleet quality, branch logistics, and revenue growth",
      ];
    }
    if (leader.role.includes("Sales")) {
      return [
        "Enterprise contract negotiations and corporate client acquisition",
        "Transparent billing frameworks with 5% corporate GST billing",
        "Key account management across technology, banking & consulting",
      ];
    }
    if (leader.role.includes("Fleet")) {
      return [
        "Nationwide maintenance standards for 1,200+ commercial vehicles",
        "Mandatory chauffeur police verification and training governance",
        "Zero-breakdown preventative inspection routines and audit logs",
      ];
    }
    // Head of Operations
    return [
      "24×7 Central Command Centre coordination across 185+ cities",
      "Real-time GPS telemetry monitoring and emergency panic SOS handling",
      "Consistent 99.4% on-time departure and multi-tiered SLA enforcement",
    ];
  };

  return (
    <section
      className={`py-16 md:py-24 bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden ${className}`}
    >
      {/* Decorative Blur Background Orbs */}
      <div className="pointer-events-none absolute -top-32 right-0 w-96 h-96 rounded-full bg-green-100/50 blur-3xl" />
      <div className="pointer-events-none absolute bottom-10 left-0 w-96 h-96 rounded-full bg-emerald-100/40 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12"
        >
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-green-50 text-green-700 border border-green-200/80 text-xs font-bold uppercase tracking-wider mb-4 shadow-2xs">
            <Building2 className="w-3.5 h-3.5 text-green-600" />
            Executive Leadership & Governance
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Industry Veterans Driving{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
              India’s Corporate Mobility
            </span>
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Over a century of collective leadership expertise forged across top global mobility brands—including Avis, Orix, Carzonrent, Emirates, and Premier Logistics—powers Speedways’ pan-India reliability, technological innovation, and client trust.
          </p>

          {/* Quick Leadership Experience Metrics Strip */}
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4 p-5 rounded-2xl bg-white border border-slate-200/90 card-premium-shadow text-center">
            <div className="p-2 transition-transform hover:-translate-y-0.5">
              <div className="text-2xl sm:text-3xl font-black text-slate-900">
                <AnimatedNumber value={100} suffix="+ Yrs" duration={1600} />
              </div>
              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-1">
                Combined Leadership
              </div>
            </div>
            <div className="p-2 transition-transform hover:-translate-y-0.5">
              <div className="text-2xl sm:text-3xl font-black text-[#48B83D]">
                <AnimatedNumber value={1200} format suffix="+" duration={1600} />
              </div>
              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-1">
                Verified Fleet Managed
              </div>
            </div>
            <div className="p-2 transition-transform hover:-translate-y-0.5">
              <div className="text-2xl sm:text-3xl font-black text-slate-900">
                <AnimatedNumber value={185} suffix="+" duration={1600} />
              </div>
              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-1">
                Cities Governed
              </div>
            </div>
            <div className="p-2 transition-transform hover:-translate-y-0.5">
              <div className="text-2xl sm:text-3xl font-black text-[#48B83D]">
                <AnimatedNumber value={156} suffix="+" duration={1600} />
              </div>
              <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider mt-1">
                Enterprise Corporates
              </div>
            </div>
          </div>
        </motion.div>

        {/* 1. PRESIDENTIAL SPOTLIGHT: FOUNDER & CEO */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 rounded-3xl p-7 sm:p-11 text-white border border-green-500/30 shadow-2xl relative overflow-hidden group">
            {/* Ambient Green Glow + Dot Grid */}
            <div className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full bg-green-500/15 blur-3xl group-hover:bg-green-500/25 transition-all duration-700" />
            <div
              className="absolute inset-0 opacity-[0.08] pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(#48B83D 1px, transparent 1px)",
                backgroundSize: "22px 22px",
              }}
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: CEO Credentials Card */}
              <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left border-b lg:border-b-0 lg:border-r border-slate-800/90 pb-6 lg:pb-0 lg:pr-8">
                <div className="relative mb-5">
                  <div className="w-28 h-28 sm:w-32 sm:h-32 rounded-3xl bg-gradient-to-br from-[#48B83D] via-emerald-500 to-green-600 p-1 shadow-xl">
                    <div className="w-full h-full rounded-[22px] bg-slate-950 flex items-center justify-center text-white">
                      <span className="text-3xl sm:text-4xl font-black tracking-wider text-green-400">
                        ND
                      </span>
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-[#48B83D] text-white p-2 rounded-xl shadow-lg ring-4 ring-slate-900">
                    <Award className="w-4 h-4" />
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/20 text-green-300 border border-green-500/30 text-xs font-bold uppercase tracking-wider mb-2">
                  <UserCheck className="w-3.5 h-3.5" />
                  Founder & CEO
                </div>

                <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
                  {ceo.name}
                </h3>
                <p className="text-xs font-semibold text-slate-400 mt-0.5">
                  Chief Executive Officer • Established 2012
                </p>

                <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800/70 border border-slate-700 text-xs text-green-400 font-medium">
                  <Clock className="w-3.5 h-3.5 text-green-400" />
                  <span>{ceo.experience}</span>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedLeader(ceo)}
                  className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-bold text-slate-200 hover:text-white transition-colors cursor-pointer border border-slate-700"
                >
                  <span>View Full CEO Dossier</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Right Column: Strategic Pillars & Executive Vision */}
              <div className="lg:col-span-8 space-y-5">
                <div className="flex items-start gap-3">
                  <Quote className="w-8 h-8 text-[#48B83D] shrink-0 opacity-80 mt-1" />
                  <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-light">
                    {ceo.about}
                  </p>
                </div>

                {/* 3 Structured Executive Pillars */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-slate-800/80">
                  <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800">
                    <div className="w-8 h-8 rounded-lg bg-green-500/10 text-green-400 flex items-center justify-center mb-2 font-bold text-xs">
                      01
                    </div>
                    <div className="text-xs font-bold text-white">Pan-India Governance</div>
                    <p className="text-[11px] text-slate-400 mt-1">
                      Institutional accountability spanning 185+ tier 1, 2 & 3 city nodes.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800">
                    <div className="w-8 h-8 rounded-lg bg-green-500/10 text-green-400 flex items-center justify-center mb-2 font-bold text-xs">
                      02
                    </div>
                    <div className="text-xs font-bold text-white">Technology-Led Scale</div>
                    <p className="text-[11px] text-slate-400 mt-1">
                      Real-time AIS-140 telemetry, 5-stage trip lifecycle, and digital audit logs.
                    </p>
                  </div>

                  <div className="p-3.5 rounded-2xl bg-slate-900/90 border border-slate-800">
                    <div className="w-8 h-8 rounded-lg bg-green-500/10 text-green-400 flex items-center justify-center mb-2 font-bold text-xs">
                      03
                    </div>
                    <div className="text-xs font-bold text-white">Long-Term Trust</div>
                    <p className="text-[11px] text-slate-400 mt-1">
                      Transparent 5% corporate billing and 14+ years of customer-centricity.
                    </p>
                  </div>
                </div>

                {/* Core Strategic Focus Badges */}
                <div className="pt-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                    Core Strategic Focus:
                  </span>
                  <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
                    {ceo.coreExpertise.map((exp, idx) => (
                      <li
                        key={idx}
                        className="text-xs font-medium px-3 py-1 rounded-xl bg-slate-800/90 text-green-300 border border-slate-700/80 hover:border-green-500/50 transition-colors"
                      >
                        <span aria-hidden="true" className="mr-1">✓</span>
                        <span>{exp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2. STRUCTURED FILTER TABS */}
        <div className="mb-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">
              Executive Committee & Operational Heads
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
              Decades of institutional mobility pedigree across Avis, Orix, Carzonrent, Emirates, and Premier Logistics.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-slate-100 border border-slate-200 text-xs font-semibold">
            {[
              { id: "all", label: "All Leaders", count: allOfficers.length },
              { id: "c-suite", label: "C-Suite & Board", count: 2 },
              { id: "operations", label: "Operations & Fleet", count: 3 },
              { id: "commercial", label: "Commercial", count: 2 },
            ].map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActiveTab(tab.id as FilterTab)}
                className={`relative px-3 py-1.5 rounded-xl transition-all cursor-pointer ${
                  activeTab === tab.id
                    ? "text-slate-900 font-bold"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                {activeTab === tab.id && (
                  <motion.div
                    layoutId="activeLeaderTab"
                    className="absolute inset-0 bg-white rounded-xl shadow-xs border border-slate-200/80"
                    transition={{ type: "spring", stiffness: 450, damping: 35 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {tab.label}
                  <span
                    className={`text-[10px] px-1.5 py-0.2 rounded-full ${
                      activeTab === tab.id
                        ? "bg-green-100 text-green-800"
                        : "bg-slate-200 text-slate-600"
                    }`}
                  >
                    {tab.count}
                  </span>
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* 3. STRUCTURED LEADERSHIP CARDS GRID */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredLeaders.map((leader, idx) => {
              const initials = leader.name
                .split(" ")
                .map((n) => n[0])
                .join("")
                .substring(0, 2);

              const scopePoints = getStructuredScope(leader);

              return (
                <motion.div
                  key={leader.name}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.35, delay: idx * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="bg-white rounded-3xl p-6 border border-slate-200/90 card-premium-shadow hover:border-green-400 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Header Avatar Monogram & Experience Pill */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-700 p-0.5 shadow-sm group-hover:scale-105 transition-transform">
                        <div className="w-full h-full rounded-[14px] bg-white flex items-center justify-center font-black text-base text-slate-900 group-hover:bg-green-50 group-hover:text-green-800 transition-colors">
                          {initials}
                        </div>
                      </div>

                      <span className="text-[10px] font-bold text-green-800 bg-green-50 px-2.5 py-1 rounded-full border border-green-200 uppercase tracking-wider text-right shadow-2xs">
                        {leader.experience || "Veteran"}
                      </span>
                    </div>

                    {/* Name & Official Role */}
                    <h4 className="text-lg font-black text-slate-900 group-hover:text-[#48B83D] transition-colors leading-snug">
                      {leader.name}
                    </h4>
                    <div className="text-xs font-bold text-slate-600 mt-0.5 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                      {leader.role}
                    </div>

                    {/* Industry Pedigree Tags */}
                    {leader.pastBrands && leader.pastBrands.length > 0 && (
                      <div className="mt-3.5 pt-2.5 border-t border-slate-100">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                          Prior Enterprise Pedigree:
                        </span>
                        <div className="flex flex-wrap items-center gap-1.5">
                          {leader.pastBrands.map((b, bIdx, arr) => (
                            <React.Fragment key={bIdx}>
                              <span
                                className="text-[10px] font-semibold bg-slate-100 text-slate-700 px-2 py-0.5 rounded-md border border-slate-200/60"
                              >
                                {b}
                              </span>
                              {bIdx < arr.length - 1 && (
                                <span className="text-slate-300 text-[10px] select-none">{" · "}</span>
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Structured Key Scope Points */}
                    <div className="mt-3.5 pt-2.5 border-t border-slate-100">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block mb-1.5">
                        Key Responsibilities & Scope:
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-600">
                        {scopePoints.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-1.5 leading-relaxed">
                            <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0 mt-0.5" />
                            <span className="text-[11px] text-slate-600">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Footer: Competencies + Read Bio Action */}
                  <div className="mt-5 pt-3.5 border-t border-slate-100 space-y-3">
                    <div className="flex flex-wrap gap-1">
                      {leader.coreExpertise.slice(0, 3).map((exp, eIdx) => (
                        <span
                          key={eIdx}
                          className="text-[10px] font-medium bg-slate-50 text-slate-700 border border-slate-200/80 px-2 py-0.5 rounded-md"
                        >
                          {exp}
                        </span>
                      ))}
                      {leader.coreExpertise.length > 3 && (
                        <span className="text-[10px] font-medium text-green-700 bg-green-50 px-1.5 py-0.5 rounded-md">
                          +{leader.coreExpertise.length - 3}
                        </span>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedLeader(leader)}
                      className="w-full py-2 px-3 rounded-xl bg-slate-50 hover:bg-green-50 text-slate-700 hover:text-green-800 text-xs font-bold transition-all flex items-center justify-center gap-1.5 border border-slate-200/80 cursor-pointer"
                    >
                      <span>Read Career Bio</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* 4. STRUCTURED GOVERNANCE & ESCALATION HIERARCHY */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-7 sm:p-9 rounded-3xl bg-white border border-slate-200/90 card-premium-shadow"
        >
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-5 border-b border-slate-100">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-green-700 block mb-1">
                Institutional SLA Assurance
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Enterprise Multi-Tier Governance & Escalation Matrix
              </h3>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-50 border border-green-200 text-xs font-bold text-green-700">
              <ShieldCheck className="w-4 h-4 text-green-600" />
              <span>Direct C-Suite Escalation Binding</span>
            </div>
          </div>

          {/* 5-Step Escalation Hierarchy Flow */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5">
            {[
              {
                step: "Level 1",
                sla: "0–5 Min",
                role: "24×7 Central Command",
                desc: "Live AIS-140 telemetry, driver OTP, and immediate route dispatch support.",
              },
              {
                step: "Level 2",
                sla: "15 Min",
                role: "City Hub Operations",
                desc: "On-ground replacement cab deployment and direct station master coordination.",
              },
              {
                step: "Level 3",
                sla: "30 Min",
                role: "National Operations Head",
                desc: "Pan-India SLA reconciliation led directly by Sreejit & A S Kumaresh.",
              },
              {
                step: "Level 4",
                sla: "60 Min",
                role: "Chief Operating Officer",
                desc: "Enterprise account review and executive resolution led by C K Balram.",
              },
              {
                step: "Level 5",
                sla: "Direct Board",
                role: "Chief Executive Officer",
                desc: "Final institutional SLA accountability governed directly by Nikhil Desai.",
              },
            ].map((tier, idx) => (
              <div
                key={idx}
                className="p-4 rounded-2xl bg-slate-50 border border-slate-200/80 hover:bg-green-50/60 hover:border-green-300 transition-colors group"
              >
                <div className="flex items-center justify-between text-xs font-bold text-slate-500 mb-2">
                  <span className="px-2 py-0.5 rounded-md bg-white border border-slate-200 text-slate-700">
                    {tier.step}
                  </span>
                  <span className="text-green-700 font-mono font-bold">{tier.sla}</span>
                </div>
                <div className="text-sm font-bold text-slate-900 group-hover:text-green-800 transition-colors">
                  {tier.role}
                </div>
                <p className="text-[11px] text-slate-500 mt-1 leading-relaxed">{tier.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>

        {/* 5. CORPORATE CONSULTATION CTA BANNER */}
        <div className="mt-14 p-6 sm:p-8 rounded-3xl bg-green-50/70 border border-green-200/80 flex flex-col md:flex-row items-center justify-between gap-6 card-premium-shadow">
          <div className="max-w-2xl">
            <h4 className="text-lg font-bold text-slate-900">
              Want to discuss custom enterprise SLAs directly with our leadership team?
            </h4>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Connect with our National Sales Head or COO to review your pan-India travel volume, customized tariff structures, and master service agreements.
            </p>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-500 hover:bg-green-600 active:bg-green-700 text-white text-xs font-bold uppercase tracking-wider shadow-md hover:shadow-lg transition-all cursor-pointer"
            >
              <span>Schedule Executive Consultation</span>
              <ChevronRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* 6. INTERACTIVE LEADER BIO DOSSIER MODAL */}
      <AnimatePresence>
        {selectedLeader && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedLeader(null)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200 z-10"
            >
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setSelectedLeader(null)}
                className="absolute top-5 right-5 p-2 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="flex items-start gap-4 mb-6 pr-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-700 p-0.5 shadow-md shrink-0">
                  <div className="w-full h-full rounded-[14px] bg-white flex items-center justify-center font-black text-xl text-slate-900">
                    {selectedLeader.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")
                      .substring(0, 2)}
                  </div>
                </div>
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-green-50 text-green-700 border border-green-200 text-[11px] font-bold uppercase tracking-wider mb-1">
                    {selectedLeader.experience || "Executive"}
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">{selectedLeader.name}</h3>
                  <p className="text-xs font-semibold text-slate-500 mt-0.5">
                    {selectedLeader.titleBadge || selectedLeader.role}
                  </p>
                </div>
              </div>

              {/* Past Brands if present */}
              {selectedLeader.pastBrands && selectedLeader.pastBrands.length > 0 && (
                <div className="mb-5 p-3 rounded-2xl bg-slate-50 border border-slate-200/80">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1.5">
                    Previous Executive Experience:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedLeader.pastBrands.map((b, idx) => (
                      <span
                        key={idx}
                        className="text-xs font-semibold bg-white border border-slate-200 text-slate-800 px-2.5 py-1 rounded-lg"
                      >
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Full Detailed Bio */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Professional Biography
                </h4>
                <p className="text-sm text-slate-700 leading-relaxed">{selectedLeader.about}</p>
              </div>

              {/* Core Competencies */}
              <div className="mb-6">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
                  Specialized Competencies
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {selectedLeader.coreExpertise.map((exp, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium bg-green-50 border border-green-200/80 text-green-800 px-3 py-1 rounded-xl"
                    >
                      ✓ {exp}
                    </span>
                  ))}
                </div>
              </div>

              {/* Modal Actions */}
              <div className="pt-4 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
                <span className="text-xs text-slate-500">
                  Speedways Fleet & Travel Management Pvt. Ltd.
                </span>
                <div className="flex items-center gap-3 w-full sm:w-auto">
                  <button
                    type="button"
                    onClick={() => setSelectedLeader(null)}
                    className="w-full sm:w-auto px-5 py-2.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-700 hover:bg-slate-50 transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                  <a
                    href="/contact"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-green-500 hover:bg-green-600 text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all"
                  >
                    <span>Connect with Office</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
