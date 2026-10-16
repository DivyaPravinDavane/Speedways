"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShieldCheck,
  Activity,
  Leaf,
  Lock,
  RefreshCw,
  CheckCircle2,
  Award,
  Sparkles,
  FileCheck,
} from "lucide-react";

interface ISOCertificate {
  id: string;
  code: string;
  title: string;
  category: string;
  tagline: string;
  reason: string;
  benefits: string[];
  icon: React.ElementType;
  pillColor: string;
}

const isoCertifications: ISOCertificate[] = [
  {
    id: "iso-9001",
    code: "ISO 9001:2015",
    title: "Quality Management",
    category: "Quality",
    tagline: "Quality You Can Rely On",
    reason:
      "Our Quality Management System helps us deliver a consistent, structured and continuously improving transportation experience.",
    benefits: [
      "Consistent service standards",
      "Defined operational processes",
      "Continuous performance improvement",
      "Structured customer feedback and issue resolution",
      "Greater service reliability",
    ],
    icon: ShieldCheck,
    pillColor: "from-emerald-500 to-green-600",
  },
  {
    id: "iso-45001",
    code: "ISO 45001:2018",
    title: "Occupational Health & Safety",
    category: "Safety",
    tagline: "Safety at the Heart of Every Journey",
    reason:
      "Employee transportation demands more than operational efficiency. It demands a strong culture of health, safety and risk management.",
    benefits: [
      "Stronger employee safety practices",
      "Systematic risk identification",
      "Safer transportation operations",
      "Incident prevention and response processes",
      "Greater confidence in employee mobility",
    ],
    icon: Activity,
    pillColor: "from-teal-500 to-emerald-600",
  },
  {
    id: "iso-14001",
    code: "ISO 14001:2015",
    title: "Environmental Management",
    category: "Sustainability",
    tagline: "Moving People. Respecting the Planet.",
    reason:
      "Our Environmental Management System supports responsible transportation operations and helps us continually improve our environmental performance.",
    benefits: [
      "Better fuel and resource management",
      "Greater environmental awareness",
      "Structured waste management",
      "Support for corporate sustainability objectives",
      "Alignment with ESG-focused organizations",
    ],
    icon: Leaf,
    pillColor: "from-green-500 to-emerald-700",
  },
  {
    id: "iso-27001",
    code: "ISO 27001:2022",
    title: "Information Security",
    category: "Security",
    tagline: "Protecting the Information Behind Every Journey",
    reason:
      "Modern employee transportation involves more than vehicles and drivers. It involves people, passenger information, operational data and technology.",
    benefits: [
      "Stronger protection of passenger information",
      "Secure information management",
      "Reduced information-security risks",
      "Greater confidence for enterprise customers",
      "Support for technology-enabled transportation operations",
    ],
    icon: Lock,
    pillColor: "from-emerald-600 to-teal-700",
  },
  {
    id: "iso-22301",
    code: "ISO 22301:2019",
    title: "Business Continuity",
    category: "Continuity",
    tagline: "Prepared for the Unexpected",
    reason:
      "Employee transportation can be business-critical. Disruptions should not bring essential mobility services to a halt.",
    benefits: [
      "Business continuity preparedness",
      "Structured emergency response",
      "Reduced disruption impact",
      "Faster recovery from operational challenges",
      "Greater resilience in transportation services",
    ],
    icon: RefreshCw,
    pillColor: "from-green-600 to-teal-600",
  },
];

export default function ISOCertificationsSection() {
  const [activeTabId, setActiveTabId] = useState<string>("iso-9001");

  const activeCert =
    isoCertifications.find((cert) => cert.id === activeTabId) ||
    isoCertifications[0];

  const ActiveIcon = activeCert.icon;

  return (
    <section className="p-6 sm:p-10 rounded-3xl bg-gradient-to-b from-slate-50 via-white to-slate-50 border border-slate-200/90 shadow-sm mb-16">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-green-700 shadow-2xs mb-3">
          <Award className="w-3.5 h-3.5 text-[#48B83D]" />
          ISO Certifications &amp; Audited Governance
        </div>
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
          ISO Certified Enterprise Mobility
        </h2>
      </div>

      {/* Interactive Tabs Header */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5 mb-8">
        {isoCertifications.map((cert) => {
          const Icon = cert.icon;
          const isActive = cert.id === activeTabId;

          return (
            <button
              key={cert.id}
              onClick={() => setActiveTabId(cert.id)}
              className={`group relative text-left p-3.5 rounded-2xl transition-all duration-300 border cursor-pointer ${
                isActive
                  ? "bg-gradient-to-br from-[#48B83D] to-emerald-700 text-white border-green-500 shadow-lg shadow-green-600/25 -translate-y-0.5 ring-2 ring-green-400/40"
                  : "bg-white text-slate-700 border-slate-200/90 hover:border-green-400 hover:bg-slate-50/80"
              }`}
            >
              <div className="flex items-center gap-2.5 mb-2">
                <span
                  className={`p-1.5 rounded-lg transition-colors ${
                    isActive
                      ? "bg-white text-green-700 shadow-xs"
                      : "bg-green-50 text-[#48B83D] group-hover:bg-green-100"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </span>
                <span
                  className={`text-[10px] font-bold uppercase tracking-wider ${
                    isActive ? "text-green-100 font-extrabold" : "text-slate-400"
                  }`}
                >
                  {cert.category}
                </span>
              </div>
              <div
                className={`text-xs sm:text-sm font-extrabold leading-tight ${
                  isActive ? "text-white" : "text-slate-900 group-hover:text-green-700"
                }`}
              >
                {cert.code}
              </div>

              {/* Active Tab Bottom Indicator */}
              {isActive && (
                <motion.div
                  layoutId="activeIsoIndicator"
                  className="absolute -bottom-1 left-4 right-4 h-1 bg-green-200 shadow-sm rounded-full"
                  transition={{ type: "spring", stiffness: 400, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>

      {/* Tab Content Card */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeCert.id}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -12 }}
          transition={{ duration: 0.25 }}
          className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Column: ISO Identity & Reason */}
            <div className="lg:col-span-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-green-50 border border-green-200 flex items-center justify-center text-[#48B83D] shadow-xs">
                  <ActiveIcon className="w-6 h-6" />
                </div>
                <div>
                  <div className="inline-block text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-700 text-white tracking-wide shadow-xs">
                    {activeCert.code}
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                    {activeCert.tagline}
                  </h3>
                </div>
              </div>

              {/* Reason of Having ISO Box */}
              <div className="p-5 rounded-2xl bg-gradient-to-br from-green-50/70 to-emerald-50/40 border border-green-200/80">
                <div className="text-xs font-bold uppercase tracking-wider text-green-800 mb-1.5 flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-[#48B83D]" />
                  Operational Purpose &amp; Rationale
                </div>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-medium">
                  {activeCert.reason}
                </p>
              </div>

              {/* Standard Classification Tag */}
              <div className="flex items-center gap-2 text-xs text-slate-500 pt-1">
                <FileCheck className="w-4 h-4 text-[#48B83D]" />
                <span>
                  Official Scope: <strong className="text-slate-800">{activeCert.title}</strong>
                </span>
              </div>
            </div>

            {/* Right Column: Key Benefits */}
            <div className="lg:col-span-6">
              <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-[#48B83D]" />
                Key Benefits of {activeCert.code}
              </div>

              <div className="space-y-2.5">
                {activeCert.benefits.map((benefit, idx) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: 8 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.04 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-slate-50/90 border border-slate-200/80 hover:bg-green-50/60 hover:border-green-300 transition-colors"
                  >
                    <span className="w-6 h-6 rounded-full bg-green-100 border border-green-300 text-green-700 flex items-center justify-center shrink-0 font-bold text-xs">
                      ✓
                    </span>
                    <span className="text-sm font-semibold text-slate-800">
                      {benefit}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
