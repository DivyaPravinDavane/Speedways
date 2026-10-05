"use client";

import React from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  TrendingUp,
  ShieldCheck,
  Leaf,
  Building2,
  FileCheck,
  CheckCircle2,
  ArrowRight,
  PieChart,
  Award,
  Globe2,
  PhoneCall,
  Mail,
  Download,
} from "lucide-react";

export default function InvestorsPage() {
  return (
    <div className="bg-[#F4FAF6] min-h-screen">
      {/* 1. Breadcrumbs */}
      <div className="bg-slate-50 border-b border-slate-200/80">
        <Breadcrumbs items={[{ label: "Investors & Corporate Governance" }]} />
      </div>

      {/* 2. Hero Section */}
      <section className="relative py-16 sm:py-24 bg-gradient-to-b from-slate-50 via-white to-white overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-[#48B83D] border border-green-200 text-xs font-bold uppercase tracking-wider mb-4">
              <TrendingUp className="w-3.5 h-3.5" />
              Corporate Governance & Growth Architecture
            </span>
            <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Sustainable Scale, Zero-Incident Culture, and <span className="text-[#48B83D]">Institutional Integrity</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Founded in 2012, Speedways Fleet & Travel Management Pvt. Ltd. operates one of India’s most resilient enterprise mobility operations, combining tech-enabled SaaS dispatch with certified Pan-India ground execution.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="px-6 py-3 rounded-full bg-[#48B83D] hover:bg-[#3ea534] text-white font-bold text-xs uppercase tracking-wider transition-all shadow-md shadow-green-500/20"
              >
                Connect with Board Office
              </Link>
              <Link
                href="/sustainability"
                className="px-6 py-3 rounded-full bg-white hover:bg-slate-50 text-slate-800 font-bold text-xs uppercase tracking-wider border border-slate-200 shadow-2xs transition-all flex items-center gap-2"
              >
                <Leaf className="w-4 h-4 text-green-600" />
                <span>ESG Transition Roadmap</span>
              </Link>
            </div>
          </div>

          {/* Key Operational Pillars */}
          <div className="mt-14 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs">
              <div className="text-3xl sm:text-4xl font-black text-slate-900">14+</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">
                Years Operating
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5">Established in 2012</p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs">
              <div className="text-3xl sm:text-4xl font-black text-[#48B83D]">185+</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">
                Cities Network
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5">Tier 1, 2 & 3 Metros</p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs">
              <div className="text-3xl sm:text-4xl font-black text-slate-900">96.8%</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">
                Client Retention
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5">Long-term Master Service Agreements</p>
            </div>

            <div className="p-6 rounded-3xl bg-white border border-slate-200 shadow-xs">
              <div className="text-3xl sm:text-4xl font-black text-[#48B83D]">100%</div>
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">
                Statutory Compliance
              </div>
              <p className="text-[11px] text-slate-400 mt-0.5">ISO 9001, 14001 & 27001</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Operational Governance & Compliance Grid */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-green-600 block mb-1">
            Enterprise Governance Model
          </span>
          <h2 className="text-2xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Institutional Rigor & Audited Transparency
          </h2>
          <p className="text-slate-600 text-sm mt-2">
            Speedways enforces zero-compromise audit standards across vehicle roadworthiness, chauffeur statutory verification, client data privacy, and GST compliance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center mb-6">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Quality & Environment (ISO 9001 & 14001)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Standard operating procedures governing preventive maintenance schedules, tire tread depth limits, vehicle hygiene sanitization, and green fleet procurement guidelines.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-200/80 mt-6 flex items-center justify-between text-xs">
              <span className="text-slate-500 font-medium">Standardized Quality</span>
              <span className="font-bold text-green-700">Certified Audits</span>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center mb-6">
                <FileCheck className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Information Security (ISO 27001)</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                End-to-end encryption of employee commuter rosters, geofenced OTP duty slips, trip telemetry logs, and customer corporate travel payment records.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-200/80 mt-6 flex items-center justify-between text-xs">
              <span className="text-slate-500 font-medium">Data Privacy & e-DTR</span>
              <span className="font-bold text-green-700">Encrypted Cloud</span>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-slate-50 border border-slate-200/90 flex flex-col justify-between">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center mb-6">
                <Leaf className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Net-Zero EV Fleet Transition</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Capital deployment plan committing to 60% electric fleet expansion across major IT campus corridors by 2028, delivering actionable Scope 1 & 2 carbon abatement data.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-200/80 mt-6 flex items-center justify-between text-xs">
              <span className="text-slate-500 font-medium">ESG Alignment</span>
              <span className="font-bold text-green-700">Scope 1/2 Reductions</span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Contact & Inquiries */}
      <section className="py-16 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="text-xs font-bold uppercase tracking-widest text-[#48B83D] block mb-2">
              Investor Relations & Corporate Inquiries
            </span>
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight">
              Speedways Fleet & Travel Management Pvt. Ltd.
            </h2>
            <p className="text-xs text-slate-400 mt-2">
              Registered Corporate Office: Mumbai, Maharashtra, India.
            </p>

            <div className="mt-8 space-y-3">
              <div className="flex items-center gap-3 text-xs text-slate-300">
                <PhoneCall className="w-4 h-4 text-[#48B83D]" />
                <span>Executive Office Hotline: +91 9820630817</span>
              </div>
              <div className="flex items-center gap-3 text-xs text-slate-300">
                <Mail className="w-4 h-4 text-[#48B83D]" />
                <span>Corporate Email: info@speedwaysftm.com</span>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#48B83D] hover:bg-[#3ea534] text-white font-bold text-xs uppercase tracking-wider transition-all"
              >
                <span>Request Governance Dossier</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
