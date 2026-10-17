"use client";

import React, { useState } from "react";
import Image from "next/image";
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
  Download,
  Eye,
  X,
  FileText,
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
  const [showPreviewModal, setShowPreviewModal] = useState<boolean>(false);

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
              {cert.id === "iso-9001" && (
                <span
                  className={`mt-1.5 inline-block text-[9px] font-bold px-1.5 py-0.5 rounded ${
                    isActive
                      ? "bg-white/20 text-white"
                      : "bg-green-100 text-green-700 border border-green-200"
                  }`}
                >
                  PDF / PNG
                </span>
              )}

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

          {/* Dedicated Certificate Showcase for ISO 9001 */}
          {activeCert.id === "iso-9001" && (
            <div className="mt-8 pt-7 border-t border-slate-200">
              <div className="rounded-2xl bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 p-5 sm:p-7 text-white shadow-xl border border-slate-700/80">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  {/* Left Certificate Thumbnail with Zoom Trigger */}
                  <div className="md:col-span-5 lg:col-span-4">
                    <div
                      onClick={() => setShowPreviewModal(true)}
                      className="group relative cursor-pointer overflow-hidden rounded-xl border-2 border-white/20 bg-slate-950 shadow-md hover:border-green-400 transition-all duration-300"
                    >
                      <Image
                        src="/certificates/iso-9001-2015-certificate.png"
                        alt="ISO 9001:2015 Quality Management Certificate"
                        width={480}
                        height={260}
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-slate-950/40 group-hover:bg-slate-950/20 transition-colors flex items-center justify-center">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-black/80 backdrop-blur-md text-white text-xs font-bold border border-white/20 shadow-md group-hover:scale-105 transition-transform">
                          <Eye className="w-3.5 h-3.5 text-green-400" />
                          Click to Preview
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-[11px] text-slate-400 mt-2 px-1">
                      <span>ISO 9001:2015 Specimen</span>
                      <span className="text-green-400 font-semibold">Ready for Empanelment</span>
                    </div>
                  </div>

                  {/* Right Action & Metadata Area */}
                  <div className="md:col-span-7 lg:col-span-8 space-y-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-green-500/20 text-green-300 border border-green-500/30 text-[10px] font-bold uppercase tracking-wider">
                        <Award className="w-3 h-3" />
                        Official Certificate Available
                      </span>
                      <span className="text-[10px] font-mono text-slate-400">
                        Formats: PDF (Vector) &amp; PNG (High-Res)
                      </span>
                    </div>

                    <h4 className="text-lg sm:text-xl font-black text-white tracking-tight">
                      Download ISO 9001:2015 Quality Certificate
                    </h4>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      Download the official ISO 9001:2015 Quality Management Systems certification document for corporate vendor diligence, enterprise RFP submissions, or procurement compliance filing.
                    </p>

                    {/* Download Action Buttons */}
                    <div className="pt-2 flex flex-wrap items-center gap-2.5">
                      <a
                        href="/certificates/iso-9001-2015-certificate.pdf"
                        download="ISO-9001-2015-Speedways-Certificate.pdf"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-green-600 hover:bg-green-700 active:bg-green-800 text-white font-bold text-xs shadow-md shadow-green-600/30 transition-all cursor-pointer"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download as PDF (109 KB)</span>
                      </a>

                      <a
                        href="/certificates/iso-9001-2015-certificate.png"
                        download="ISO-9001-2015-Speedways-Certificate.png"
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 active:bg-white/25 text-white font-bold text-xs border border-white/15 transition-all cursor-pointer"
                      >
                        <Download className="w-4 h-4" />
                        <span>Download as PNG (345 KB)</span>
                      </a>

                      <button
                        type="button"
                        onClick={() => setShowPreviewModal(true)}
                        className="inline-flex items-center gap-1.5 px-3 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white font-bold text-xs border border-slate-700 transition-all cursor-pointer"
                      >
                        <Eye className="w-3.5 h-3.5 text-slate-400" />
                        <span>Preview Fullscreen</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>

      {/* Certificate Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {showPreviewModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white rounded-3xl overflow-hidden shadow-2xl border border-slate-200"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 bg-slate-900 text-white border-b border-slate-800">
                <div className="flex items-center gap-2.5">
                  <span className="p-1.5 rounded-lg bg-green-500/20 text-green-400">
                    <Award className="w-4 h-4" />
                  </span>
                  <div>
                    <h3 className="text-sm sm:text-base font-bold text-white">
                      ISO 9001:2015 Quality Management Certificate
                    </h3>
                    <p className="text-[11px] text-slate-400">
                      Standard: ISO 9001:2015 • Verified Specimen for Enterprise Vendor Diligence
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setShowPreviewModal(false)}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Body / Certificate Image */}
              <div className="flex-1 overflow-auto p-4 sm:p-6 bg-slate-100 flex items-center justify-center">
                <div className="relative max-w-full rounded-2xl overflow-hidden shadow-lg border border-slate-300 bg-white">
                  <Image
                    src="/certificates/iso-9001-2015-certificate.png"
                    alt="ISO 9001:2015 Certificate Full Preview"
                    width={1024}
                    height={542}
                    className="w-full h-auto max-h-[62vh] object-contain"
                  />
                </div>
              </div>

              {/* Modal Footer Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-3 px-6 py-4 bg-white border-t border-slate-200">
                <div className="text-xs text-slate-500">
                  Ready for corporate procurement empanelment and RFP submissions.
                </div>

                <div className="flex items-center gap-2.5">
                  <a
                    href="/certificates/iso-9001-2015-certificate.pdf"
                    download="ISO-9001-2015-Speedways-Certificate.pdf"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-green-600 hover:bg-green-700 text-white text-xs font-bold shadow-xs transition-colors cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PDF</span>
                  </a>

                  <a
                    href="/certificates/iso-9001-2015-certificate.png"
                    download="ISO-9001-2015-Speedways-Certificate.png"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold border border-slate-300 transition-colors cursor-pointer"
                  >
                    <Download className="w-3.5 h-3.5" />
                    <span>Download PNG</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setShowPreviewModal(false)}
                    className="px-3.5 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 text-xs font-semibold transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
