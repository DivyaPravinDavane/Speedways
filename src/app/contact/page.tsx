"use client";

import React, { useState } from "react";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import SymbolBadge from "@/components/SymbolBadge";
import {
  Building2,
  PhoneCall,
  Mail,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  ShieldCheck,
  Globe,
  FileCheck,
  AlertCircle,
  Car,
  Users,
  Crown,
  ChevronDown,
  Copy,
  Check,
  HelpCircle,
} from "lucide-react";
import { DIRECT_BRANCHES } from "@/data/speedwaysData";

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<"spot" | "ets" | "vip">("spot");
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    phone: "",
    city: "Mumbai",
    monthlyFleetCount: "5 - 15 Vehicles",
    message: "",
  });

  const [selectedServices, setSelectedServices] = useState<string[]>([
    "Corporate Car Rental",
  ]);

  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const availableServices = [
    "Corporate Car Rental",
    "Airport Transfers",
    "Local 4h/8h Rental",
    "Intercity Outstation",
    "Employee Transport (ETS)",
    "VIP & Board Mobility",
    "Long-Term Leases (LTR)",
    "MICE & Event Fleet",
    "EV Green Mobility",
  ];

  const faqs = [
    {
      q: "How does the 5% GST corporate billing structure work?",
      a: "Speedways operates under the standardized 5% GST corporate commercial transport model. All invoices carry statutory GSTIN numbers, HSN/SAC codes, and geofenced digital duty slips, ensuring transparent accounting, zero billing ambiguity, and smooth reconciliation for your finance department.",
    },
    {
      q: "What is your guaranteed lead time for vehicle dispatch?",
      a: "For spot bookings in direct metro hubs (Mumbai, Bengaluru, Hyderabad, Chennai, Delhi NCR, Pune), we guarantee a 2 to 4-hour lead time. For pre-booked airport transfers, chauffeurs report 15 minutes prior to scheduled flight touchdown with live flight delay monitoring.",
    },
    {
      q: "How are Speedways chauffeurs verified and monitored?",
      a: "Every chauffeur undergoes a mandatory 7-point verification process including local police criminal background verification, address validation, medical checks, soft-skills grooming, and highway defense driving certification. Drivers are tracked continuously via AIS-140 GPS telemetry.",
    },
    {
      q: "Can we consolidate multi-city travel under a single corporate agreement?",
      a: "Yes. You can empanel Speedways under a single Master Service Agreement (MSA) covering all 185+ cities. You receive a dedicated SPOC Account Manager, uniform SLA benchmarks, and a single consolidated monthly MIS statement ready for ERP import.",
    },
  ];

  const toggleService = (srv: string) => {
    if (selectedServices.includes(srv)) {
      if (selectedServices.length > 1) {
        setSelectedServices(selectedServices.filter((s) => s !== srv));
      }
    } else {
      setSelectedServices([...selectedServices, srv]);
    }
  };

  const handleCopyPhone = (phone: string) => {
    navigator.clipboard.writeText(phone);
    setCopiedPhone(phone);
    setTimeout(() => setCopiedPhone(null), 2000);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 800);
  };

  return (
    <div className="bg-[#F4FAF6]">
      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-200/80">
        <Breadcrumbs items={[{ label: "Contact & Corporate Empanelment" }]} />
      </div>

      {/* Header Banner with Animated Floating Telemetry Badges */}
      <section className="py-14 md:py-20 border-b border-green-100/70 bg-[#F4FAF6] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-700 border border-green-200 text-xs font-bold uppercase tracking-wider">
                <ShieldCheck className="w-3.5 h-3.5 text-green-600" />
                Procurement & Vendor Onboarding
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                <Clock className="w-3 h-3 text-green-600 animate-pulse" />
                24-Hour Corporate RFP Response SLA
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Empanel Speedways for Your Corporate Fleet
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Submit your corporate mobility RFP, request customized rate matrices, or contact our 24×7 command centre operations desk across India.
            </p>

            {/* Quick Live Telemetry Chips */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-bold text-slate-700">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200">
                <Clock className="w-4 h-4 text-green-600" />
                <span>24h RFP Turnaround</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200">
                <MapPin className="w-4 h-4 text-green-600" />
                <span>185+ Managed Cities</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200">
                <ShieldCheck className="w-4 h-4 text-green-600" />
                <span>100% Compliant 5% GST Billing</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200">
                <PhoneCall className="w-4 h-4 text-green-600" />
                <span>Direct SPOC Assigned</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid: Empanelment Form (Left) & Head Office / Branches (Right) */}
      <section className="py-16 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Form Column */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-slate-200/90 shadow-xl">
              <div className="mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-50 px-3 py-1 rounded-full border border-green-200">
                  Corporate RFP Portal
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-slate-900 mt-2">
                  Vendor Empanelment Request Form
                </h2>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Our corporate accounts lead will provide structured tariff cards and SLA proposals within 24 business hours.
                </p>
              </div>

              {/* Requirement Mode Tabs */}
              <div className="grid grid-cols-3 gap-2 mb-6 p-1.5 bg-slate-100 rounded-2xl">
                <button
                  type="button"
                  onClick={() => setActiveTab("spot")}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    activeTab === "spot"
                      ? "bg-white text-green-700 shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <Car className="w-3.5 h-3.5" />
                  <span>Spot / Airport</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("ets")}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    activeTab === "ets"
                      ? "bg-white text-green-700 shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <Users className="w-3.5 h-3.5" />
                  <span>Employee ETS</span>
                </button>

                <button
                  type="button"
                  onClick={() => setActiveTab("vip")}
                  className={`py-2 px-3 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-1.5 ${
                    activeTab === "vip"
                      ? "bg-white text-green-700 shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  <Crown className="w-3.5 h-3.5" />
                  <span>VIP & Events</span>
                </button>
              </div>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-green-50 border border-green-200 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-green-500 text-white flex items-center justify-center mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    Empanelment Request Received!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Your corporate mobility proposal for <strong className="text-slate-900">{formData.companyName}</strong> has been logged in our enterprise ticketing system.
                  </p>
                  <div className="p-4 rounded-xl bg-white border border-green-200 text-xs text-slate-600 text-left space-y-1">
                    <div><strong>Selected Hub:</strong> {formData.city}</div>
                    <div><strong>Estimated Scale:</strong> {formData.monthlyFleetCount}</div>
                    <div><strong>Requirements:</strong> {selectedServices.join(", ")}</div>
                    <div><strong>Direct Assigned SPOC Desk:</strong> 9820630817</div>
                  </div>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-6 py-2.5 rounded-xl bg-slate-900 text-white font-semibold text-xs transition-colors hover:bg-slate-800 cursor-pointer"
                  >
                    Submit Another Request
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.fullName}
                        onChange={(e) =>
                          setFormData({ ...formData, fullName: e.target.value })
                        }
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="rahul@company.com"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Company / Organization Name *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.companyName}
                        onChange={(e) =>
                          setFormData({ ...formData, companyName: e.target.value })
                        }
                        placeholder="e.g. Tata Consultancy Services"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Phone / Direct Extension *
                      </label>
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })
                        }
                        placeholder="+91 98XXXXXXXX"
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Primary City / Operational Hub *
                      </label>
                      <select
                        value={formData.city}
                        onChange={(e) =>
                          setFormData({ ...formData, city: e.target.value })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 bg-white"
                      >
                        <option value="Mumbai">Mumbai (Head Office)</option>
                        <option value="Bengaluru">Bengaluru</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Delhi NCR">Delhi NCR</option>
                        <option value="Pan-India Multi-City">
                          Pan-India Multi-City Account
                        </option>
                        <option value="Tier-2/3 Network City">
                          Other Tier-2 / Tier-3 City
                        </option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                        Estimated Monthly Fleet Requirement *
                      </label>
                      <select
                        value={formData.monthlyFleetCount}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            monthlyFleetCount: e.target.value,
                          })
                        }
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500 bg-white"
                      >
                        <option value="1 - 4 Vehicles">1 - 4 Vehicles (Spot / Executive)</option>
                        <option value="5 - 15 Vehicles">5 - 15 Vehicles (Standard Desk)</option>
                        <option value="16 - 50 Vehicles">16 - 50 Vehicles (Large Account)</option>
                        <option value="50+ Vehicles">50+ Vehicles (Campus / ETS / Bulk)</option>
                      </select>
                    </div>
                  </div>

                  {/* Multi-Select Services */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                      Required Service Verticals (Select all that apply) *
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {availableServices.map((srv) => {
                        const isSelected = selectedServices.includes(srv);
                        return (
                          <button
                            type="button"
                            key={srv}
                            onClick={() => toggleService(srv)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors cursor-pointer ${
                              isSelected
                                ? "bg-green-100 text-green-800 border-green-400 font-semibold"
                                : "bg-slate-50 text-slate-600 border-slate-200 hover:border-slate-300"
                            }`}
                          >
                            {isSelected ? "✓ " : "+ "}
                            {srv}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
                      Specific Requirements / Scope of Work
                    </label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Mention your preferred vehicle classes (Sedan/Innova/EV), shift timings, or special billing instructions..."
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-green-500 hover:bg-green-600 active:bg-green-700 text-white font-bold text-sm uppercase tracking-wider shadow-md shadow-green-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Processing Request...</span>
                    ) : (
                      <>
                        <span>Submit Empanelment Request</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-center text-slate-400">
                    🔒 Non-disclosure protected. Speedways does not share client RFP details with third parties.
                  </p>
                </form>
              )}
            </div>

            {/* Right Column: Head Office & Direct Branches */}
            <div className="lg:col-span-5 space-y-6">
              {/* Head Office Card */}
              <div className="bg-white rounded-3xl border border-green-200 shadow-md relative overflow-hidden group">
                <div className="relative h-44 w-full bg-slate-100">
                  <Image
                    src="/images/hero-sedan.jpg"
                    alt="Speedways Mumbai Corporate Head Office Fleet Staging"
                    fill
                    className="object-cover group-hover:scale-102 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent pointer-events-none" />
                  <div className="absolute top-3 right-3 bg-green-500 text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-sm">
                    Headquarters
                  </div>
                  <div className="absolute bottom-3 left-4 text-white">
                    <span className="text-xs font-bold block">Mumbai Central Operations Desk</span>
                    <span className="text-[10px] text-slate-300">Neelkanth Business Park, Vidyavihar</span>
                  </div>
                </div>

                <div className="p-7">
                  <div className="flex items-center gap-3 mb-4">
                  <div className="w-11 h-11 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center">
                    <Building2 className="w-6 h-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Corporate Head Office
                    </h3>
                    <span className="text-xs text-slate-500">
                      Speedways Fleet & Travel Management Pvt. Ltd.
                    </span>
                  </div>
                </div>

                <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                    <span>
                      Wing D 301, Neelkanth Business Park, Nathani Road, Vidyavihar West, Mumbai 400 086
                    </span>
                  </div>

                  <div className="flex items-center justify-between gap-2.5">
                    <div className="flex items-center gap-2.5">
                      <PhoneCall className="w-4 h-4 text-green-600 shrink-0" />
                      <a
                        href="tel:9820630817"
                        className="font-bold text-green-700 hover:underline"
                      >
                        Hotline: 9820630817
                      </a>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopyPhone("9820630817")}
                      className="p-1 rounded-lg text-slate-400 hover:text-green-700 hover:bg-green-50 transition-colors"
                      title="Copy Phone"
                    >
                      {copiedPhone === "9820630817" ? (
                        <Check className="w-3.5 h-3.5 text-green-600" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                    </button>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-green-600 shrink-0" />
                    <a
                      href="mailto:info@speedwaysftm.com"
                      className="hover:underline text-slate-800"
                    >
                      info@speedwaysftm.com
                    </a>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Globe className="w-4 h-4 text-green-600 shrink-0" />
                    <span className="text-slate-800">www.speedwaysftm.com</span>
                  </div>
                </div>

                <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-500">Established 2012</span>
                  <span className="font-semibold text-green-700 bg-green-50 px-2 py-0.5 rounded border border-green-200">
                    5% Corporate GST Model
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Branch Network Directory */}
            <div className="bg-white p-7 rounded-3xl border border-slate-200/90 shadow-xs">
                <h3 className="text-base font-bold text-slate-900 mb-4 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-green-600" />
                  <span>6 Direct Metro Branch Desks</span>
                </h3>

                <div className="space-y-3">
                  {DIRECT_BRANCHES.map((b, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-2xl bg-slate-50 hover:bg-green-50/50 border border-slate-100 transition-colors text-xs flex items-center justify-between"
                    >
                      <div>
                        <div className="font-bold text-slate-900">{b.city}</div>
                        <p className="text-slate-500 text-[11px] mt-0.5">{b.address}</p>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <a
                          href={`tel:${b.phone}`}
                          className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-green-700 font-bold hover:bg-green-50 transition-colors flex items-center gap-1 text-[11px]"
                        >
                          <PhoneCall className="w-3 h-3" />
                          <span>Call</span>
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Instant Operations Banner */}
              <div className="bg-[#F0FDF4] border border-[#DCFCE7] p-6 rounded-3xl flex items-center justify-between gap-4">
                <div>
                  <h4 className="text-sm font-bold text-slate-900">
                    Immediate Operational Emergency?
                  </h4>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Our live Mumbai command desk is available 24 hours.
                  </p>
                </div>
                <a
                  href="tel:9820630817"
                  className="px-4 py-2.5 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold text-xs uppercase tracking-wider shadow-xs transition-colors shrink-0"
                >
                  Dial 9820630817
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corporate Procurement FAQ Accordion */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-100 px-3 py-1 rounded-full">
              Procurement & Vendor FAQ
            </span>
            <h2 className="text-3xl font-black text-slate-900 mt-3 tracking-tight">
              Frequently Asked Corporate Questions
            </h2>
            <p className="text-slate-600 text-sm mt-1">
              Key answers regarding contractual terms, billing cycles, and operational onboarding.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-slate-50 border border-slate-200 rounded-2xl overflow-hidden transition-all"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-5 text-left font-bold text-slate-900 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-100/70 transition-colors"
                >
                  <span className="text-sm sm:text-base">{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-green-600 shrink-0 transition-transform duration-200 ${
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
    </div>
  );
}
