"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Award,
  Briefcase,
  Users,
  Compass,
  Building2,
  TrendingUp,
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

export default function LeadershipSection({
  className = "",
  id = "leadership",
}: {
  className?: string;
  id?: string;
}) {
  const [selectedLeader, setSelectedLeader] = useState<LeaderProfile | null>(null);

  const ceo = LEADERSHIP_TEAM[0];
  const allOfficers = LEADERSHIP_TEAM.filter((leader) => leader.role !== "CEO");

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
        "Transparent billing frameworks and corporate credit structures",
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
      id={id}
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
            06. Executive Leadership Team
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
            Decades of Expertise.{" "}
            <span className="bg-gradient-to-r from-green-600 to-emerald-500 bg-clip-text text-transparent">
              Driving the Speedways Vision
            </span>
          </h2>
          <p className="mt-4 text-slate-600 text-sm sm:text-base leading-relaxed">
            Experienced leaders shaping the future of corporate mobility through insight, innovation, and execution.
          </p>
        </motion.div>

        {/* 1. PRESIDENTIAL SPOTLIGHT: FOUNDER & CEO */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <div className="bg-gradient-to-br from-[#EEFBF1] via-[#E2F7E7] to-[#D5F2DC] rounded-3xl p-7 sm:p-11 border-2 border-green-300/80 border-b-[6px] border-b-green-500 shadow-[0_20px_45px_-12px_rgba(22,101,52,0.18),0_6px_18px_rgba(0,0,0,0.04),inset_0_2px_1px_rgba(255,255,255,0.95),inset_0_-2px_4px_rgba(22,101,52,0.08)] relative overflow-hidden group">
            {/* Ambient Green Glow + Dot Grid */}
            <div className="pointer-events-none absolute -top-24 -right-24 w-80 h-80 rounded-full bg-emerald-400/25 blur-3xl group-hover:bg-emerald-400/35 transition-all duration-700" />
            <div
              className="absolute inset-0 opacity-[0.14] pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(#16a34a 1.2px, transparent 1.2px)",
                backgroundSize: "22px 22px",
              }}
            />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left Column: CEO Credentials Card */}
              <div className="lg:col-span-4 flex flex-col items-center sm:items-start text-center sm:text-left border-b lg:border-b-0 lg:border-r border-green-200/90 pb-6 lg:pb-0 lg:pr-8">
                <div className="relative mb-5">
                  <div className="w-28 h-28 sm:w-36 sm:h-36 rounded-3xl bg-gradient-to-br from-[#48B83D] via-emerald-500 to-green-600 p-1.5 shadow-[0_12px_24px_-4px_rgba(22,101,52,0.3)] ring-4 ring-white/90">
                    <div className="relative w-full h-full rounded-[20px] overflow-hidden bg-slate-900">
                      {ceo.image ? (
                        <Image
                          src={ceo.image}
                          alt={ceo.name}
                          fill
                          className="object-cover object-top"
                          priority
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-white">
                          <span className="text-3xl sm:text-4xl font-black tracking-wider text-green-400">
                            ND
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-green-600 to-emerald-600 text-white p-2 rounded-xl shadow-[0_4px_10px_rgba(22,101,52,0.35)] ring-4 ring-white">
                    <Award className="w-4 h-4" />
                  </div>
                </div>

                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-green-800 border border-green-300 text-xs font-black uppercase tracking-wider mb-2 shadow-[0_2px_6px_rgba(22,101,52,0.1),inset_0_1px_0_rgba(255,255,255,0.9)]">
                  <UserCheck className="w-3.5 h-3.5 text-green-600" />
                  Founder & CEO
                </div>

                <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
                  {ceo.name}
                </h3>
                <p className="text-xs font-bold text-slate-600 mt-0.5">
                  Chief Executive Officer
                </p>

                <div className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-white/95 border border-green-300 text-xs text-green-900 font-bold shadow-[0_2px_6px_rgba(22,101,52,0.08)]">
                  <Clock className="w-3.5 h-3.5 text-green-600" />
                  <span>{ceo.experience}</span>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedLeader(ceo)}
                  className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-xs font-black text-white transition-all cursor-pointer shadow-[0_6px_18px_rgba(22,101,52,0.35),inset_0_1px_0_rgba(255,255,255,0.4)] border-b-2 border-green-800 active:translate-y-0.5 active:border-b-0"
                >
                  <span>View Full CEO Dossier</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Right Column: Strategic Pillars & Executive Vision */}
              <div className="lg:col-span-8 space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-white border border-green-200/90 shadow-[0_4px_12px_rgba(22,101,52,0.12),inset_0_1px_0_rgba(255,255,255,1)] flex items-center justify-center shrink-0 mt-0.5">
                    <Quote className="w-6 h-6 text-green-600 fill-green-600/10" />
                  </div>
                  <p className="text-sm sm:text-base text-slate-800 leading-relaxed font-normal">
                    {ceo.about}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* 2. STRUCTURED LEADERSHIP CARDS GRID */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {allOfficers.map((leader, idx) => {
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
                  className="bg-gradient-to-br from-[#F0FDF4] via-[#E6F9EC] to-[#DCF5E3] rounded-3xl p-6 border-2 border-green-300/80 border-b-[5px] border-b-green-500 shadow-[0_12px_24px_-6px_rgba(22,101,52,0.14),inset_0_2px_1px_rgba(255,255,255,0.95)] hover:-translate-y-1.5 hover:border-b-[7px] hover:border-b-green-600 hover:shadow-[0_20px_35px_-8px_rgba(22,101,52,0.22),inset_0_2px_1px_rgba(255,255,255,1)] transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    {/* Header Avatar Photo & Experience Pill */}
                    <div className="flex items-start justify-between mb-4">
                      {leader.image ? (
                        <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-2xl overflow-hidden shadow-md border-2 border-white ring-2 ring-green-300 group-hover:ring-green-500 group-hover:scale-105 transition-all bg-white">
                          <Image
                            src={leader.image}
                            alt={leader.name}
                            fill
                            className="object-cover object-top"
                          />
                        </div>
                      ) : (
                        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-700 p-0.5 shadow-md group-hover:scale-105 transition-transform ring-2 ring-white">
                          <div className="w-full h-full rounded-[14px] bg-white flex items-center justify-center font-black text-base text-green-800">
                            {initials}
                          </div>
                        </div>
                      )}

                      <span className="text-[10px] font-bold text-green-800 bg-white px-2.5 py-1 rounded-full border border-green-300 uppercase tracking-wider text-right shadow-[0_2px_6px_rgba(22,101,52,0.08)]">
                        {leader.experience || "Veteran"}
                      </span>
                    </div>

                    {/* Name & Official Role */}
                    <h4 className="text-lg font-black text-slate-900 group-hover:text-green-700 transition-colors leading-snug">
                      {leader.name}
                    </h4>
                    <div className="text-xs font-bold text-slate-700 mt-0.5 flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                      {leader.role}
                    </div>

                    {/* Industry Pedigree Tags */}
                    {leader.pastBrands && leader.pastBrands.length > 0 && (
                      <div className="mt-3.5 pt-2.5 border-t border-green-200/80">
                        <span className="text-[10px] font-bold uppercase tracking-wider text-green-900/80 block mb-1.5">
                          Prior Enterprise Pedigree:
                        </span>
                        <div className="flex flex-wrap items-center gap-1.5">
                          {leader.pastBrands.map((b, bIdx, arr) => (
                            <React.Fragment key={bIdx}>
                              <span
                                className="text-[10px] font-bold bg-white text-slate-800 px-2 py-0.5 rounded-md border border-green-200 shadow-2xs"
                              >
                                {b}
                              </span>
                              {bIdx < arr.length - 1 && (
                                <span className="text-green-400 text-[10px] select-none">{" · "}</span>
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Structured Key Scope Points */}
                    <div className="mt-3.5 pt-2.5 border-t border-green-200/80">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-green-900/80 block mb-1.5">
                        Key Responsibilities & Scope:
                      </span>
                      <ul className="space-y-1.5 text-xs text-slate-700">
                        {scopePoints.map((point, pIdx) => (
                          <li key={pIdx} className="flex items-start gap-1.5 leading-relaxed">
                            <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0 mt-0.5" />
                            <span className="text-[11px] text-slate-800 font-medium">{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Footer: Competencies + Read Bio Action */}
                  <div className="mt-5 pt-3.5 border-t border-green-200/80 space-y-3">
                    <div className="flex flex-wrap gap-1">
                      {leader.coreExpertise.slice(0, 3).map((exp, eIdx) => (
                        <span
                          key={eIdx}
                          className="text-[10px] font-bold bg-white text-green-900 border border-green-200/90 px-2 py-0.5 rounded-md shadow-2xs"
                        >
                          {exp}
                        </span>
                      ))}
                      {leader.coreExpertise.length > 3 && (
                        <span className="text-[10px] font-bold text-green-800 bg-green-100 border border-green-300 px-1.5 py-0.5 rounded-md">
                          +{leader.coreExpertise.length - 3}
                        </span>
                      )}
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedLeader(leader)}
                      className="w-full py-2.5 px-3 rounded-xl bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-500 hover:to-emerald-500 text-white text-xs font-black transition-all flex items-center justify-center gap-1.5 shadow-[0_4px_12px_rgba(22,101,52,0.25),inset_0_1px_0_rgba(255,255,255,0.35)] border-b-2 border-green-800 active:translate-y-0.5 active:border-b-0 cursor-pointer"
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
                {selectedLeader.image ? (
                  <div className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden shadow-lg border-2 border-green-500/60 shrink-0 bg-slate-100">
                    <Image
                      src={selectedLeader.image}
                      alt={selectedLeader.name}
                      fill
                      className="object-cover object-top"
                    />
                  </div>
                ) : (
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-700 p-0.5 shadow-md shrink-0">
                    <div className="w-full h-full rounded-[14px] bg-white flex items-center justify-center font-black text-xl text-slate-900">
                      {selectedLeader.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                        .substring(0, 2)}
                    </div>
                  </div>
                )}
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
                    href="#contact"
                    onClick={() => setSelectedLeader(null)}
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
