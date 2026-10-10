"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Building2,
  MapPin,
  Cpu,
  Leaf,
  Award,
  Car,
  CheckCircle2,
  Navigation,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";

interface Milestone {
  year: string;
  phase: string;
  title: string;
  shortDesc: string;
  metric: string;
  icon: React.ElementType;
  active?: boolean;
}

const MILESTONES: Milestone[] = [
  {
    year: "2012",
    phase: "Phase 01 • Origin",
    title: "Mumbai Launch",
    shortDesc: "15 executive sedans deployed with SLA-backed corporate travel.",
    metric: "15 Fleet Depth",
    icon: Building2,
  },
  {
    year: "2015",
    phase: "Phase 02 • Expansion",
    title: "Metro Hubs",
    shortDesc: "Direct branches in Delhi NCR, Bengaluru, Hyderabad & Chennai.",
    metric: "300+ Dedicated Fleet",
    icon: MapPin,
  },
  {
    year: "2018",
    phase: "Phase 03 • Tech Stack",
    title: "AIS-140 Telemetry",
    shortDesc: "Digital duty slips, real-time GPS tracking & 24×7 Command Centre.",
    metric: "100% Digital Trips",
    icon: Cpu,
  },
  {
    year: "2021",
    phase: "Phase 04 • ESG Rollout",
    title: "Green EV Fleets",
    shortDesc: "Corporate EV mobility launched for Scope 1 & 2 decarbonization.",
    metric: "Zero-Emission Pilot",
    icon: Leaf,
  },
  {
    year: "2026",
    phase: "Present • National Scale",
    title: "Pan-India Grid",
    shortDesc: "1,200+ fleet across 185+ cities serving 156+ Fortune clients.",
    metric: "185+ Cities • 156+ Clients",
    icon: Award,
    active: true,
  },
];

export default function EvolutionRoadmap() {
  const [activeIdx, setActiveIdx] = useState<number>(4); // Default to current milestone (2026)

  return (
    <div className="w-full">
      {/* Header with minimal context */}
      <div className="text-center max-w-2xl mx-auto mb-12">
        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-[#48B83D] border border-green-200 text-xs font-bold uppercase tracking-wider mb-3">
          <Navigation className="w-3.5 h-3.5" />
          The Speedways Journey
        </span>
        <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
          The Evolution of Speedways
        </h2>
        <p className="text-slate-600 text-xs sm:text-sm mt-2">
          From 15 sedans in Mumbai to a 1,200+ fleet network spanning 185+ cities.
        </p>
      </div>

      {/* DESKTOP ROADMAP (md and above) */}
      <div className="hidden md:block relative py-8 px-2">
        {/* Animated Highway Track Ribbon */}
        <div className="relative mb-8">
          {/* Road Asphalt Bed */}
          <div className="h-10 bg-slate-900 rounded-full shadow-inner relative overflow-hidden flex items-center px-4 border border-slate-700">
            {/* Animated Highway Center Lane Dashes */}
            <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between gap-3 overflow-hidden opacity-85">
              {[...Array(32)].map((_, i) => (
                <motion.div
                  key={i}
                  className="h-1 w-6 bg-amber-300 rounded-full shrink-0"
                  animate={{ x: [-24, 0] }}
                  transition={{
                    repeat: Infinity,
                    duration: 1.2,
                    ease: "linear",
                  }}
                />
              ))}
            </div>

            {/* Glowing Progress Highway Layer */}
            <div
              className="absolute left-0 top-0 bottom-0 bg-linear-to-r from-emerald-600/30 to-green-500/40 rounded-full transition-all duration-500 pointer-events-none"
              style={{
                width: `${((activeIdx + 1) / MILESTONES.length) * 100}%`,
              }}
            />

            {/* Active Moving Vehicle Indicator */}
            <motion.div
              className="absolute top-1/2 -translate-y-1/2 z-20"
              animate={{
                left: `calc(${((activeIdx + 0.5) / MILESTONES.length) * 100}% - 22px)`,
              }}
              transition={{ type: "spring", stiffness: 260, damping: 24 }}
            >
              <div className="w-11 h-7 rounded-lg bg-[#48B83D] text-white flex items-center justify-center shadow-lg shadow-green-500/40 border border-white/40">
                <Car className="w-4 h-4 animate-pulse" />
              </div>
            </motion.div>
          </div>

          {/* Road Checkpoint Nodes */}
          <div className="grid grid-cols-5 gap-4 mt-4 relative z-10">
            {MILESTONES.map((m, idx) => {
              const isSelected = activeIdx === idx;
              const isCurrent = m.active;
              const Icon = m.icon;

              return (
                <button
                  key={m.year}
                  onClick={() => setActiveIdx(idx)}
                  className="flex flex-col items-center group cursor-pointer text-left focus:outline-hidden"
                >
                  {/* Waypoint Pin */}
                  <motion.div
                    whileHover={{ scale: 1.12, y: -2 }}
                    whileTap={{ scale: 0.96 }}
                    className={`relative w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300 shadow-sm ${
                      isSelected
                        ? "bg-[#48B83D] text-white ring-4 ring-green-100 shadow-md shadow-green-500/30"
                        : "bg-white text-slate-700 border border-slate-200 group-hover:border-green-300 group-hover:text-green-600"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    {isCurrent && (
                      <span className="absolute -top-1 -right-1 flex h-3 w-3">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#48B83D]"></span>
                      </span>
                    )}
                  </motion.div>

                  {/* Year Tag */}
                  <span
                    className={`mt-2 text-xs font-black transition-colors ${
                      isSelected
                        ? "text-[#48B83D]"
                        : "text-slate-600 group-hover:text-slate-900"
                    }`}
                  >
                    {m.year}
                  </span>
                  <span className="text-[10px] font-semibold text-slate-400 tracking-tight">
                    {m.phase.split("•")[0].trim()}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Milestone Detail Cards Grid */}
        <div className="grid grid-cols-5 gap-4 mt-6">
          {MILESTONES.map((m, idx) => {
            const isSelected = activeIdx === idx;
            return (
              <motion.div
                key={m.year}
                onClick={() => setActiveIdx(idx)}
                whileHover={{ y: -3 }}
                className={`p-4 rounded-2xl transition-all duration-300 cursor-pointer border flex flex-col justify-between ${
                  isSelected
                    ? "bg-white border-[#48B83D] ring-2 ring-green-100 shadow-md shadow-green-500/10"
                    : "bg-white/80 border-slate-200/90 hover:border-slate-300 hover:bg-white"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-1 mb-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#48B83D]">
                      {m.year}
                    </span>
                    {isSelected && (
                      <span className="text-[9px] font-black uppercase text-green-700 bg-green-50 border border-green-200 px-1.5 py-0.5 rounded-full">
                        Selected
                      </span>
                    )}
                  </div>
                  <h3 className="text-xs font-black text-slate-900 leading-snug">
                    {m.title}
                  </h3>
                  <p className="text-[11px] text-slate-600 mt-1.5 leading-relaxed">
                    {m.shortDesc}
                  </p>
                </div>

                <div className="mt-3 pt-2.5 border-t border-slate-100">
                  <span className="text-[10px] font-bold text-slate-700 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded-md inline-block">
                    {m.metric}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* MOBILE & TABLET ROADMAP (under md) */}
      <div className="block md:hidden relative pl-6 pr-2 py-4">
        {/* Vertical Asphalt Road Strip */}
        <div className="absolute left-2 top-2 bottom-2 w-3 bg-slate-900 rounded-full overflow-hidden flex flex-col items-center py-2">
          {/* Animated vertical yellow dashes */}
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="w-0.5 h-3 bg-amber-300 rounded-full my-1 shrink-0"
              animate={{ y: [-10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
          ))}
        </div>

        <div className="space-y-4">
          {MILESTONES.map((m, idx) => {
            const isSelected = activeIdx === idx;
            const Icon = m.icon;

            return (
              <motion.div
                key={m.year}
                onClick={() => setActiveIdx(idx)}
                whileTap={{ scale: 0.98 }}
                className={`ml-4 p-4 rounded-2xl border transition-all cursor-pointer ${
                  isSelected
                    ? "bg-white border-[#48B83D] ring-2 ring-green-100 shadow-sm"
                    : "bg-white border-slate-200"
                }`}
              >
                <div className="flex items-center gap-3 mb-2">
                  <div
                    className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                      isSelected
                        ? "bg-[#48B83D] text-white"
                        : "bg-slate-100 text-slate-700"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-black text-slate-900">
                        {m.year}
                      </span>
                      <span className="text-[10px] font-bold text-[#48B83D]">
                        {m.phase}
                      </span>
                    </div>
                    <h3 className="text-xs font-bold text-slate-800">
                      {m.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed ml-11">
                  {m.shortDesc}
                </p>

                <div className="mt-2.5 ml-11">
                  <span className="text-[10px] font-bold text-slate-700 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded-md">
                    {m.metric}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
