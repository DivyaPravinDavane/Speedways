"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Car,
  Plane,
  Clock,
  Navigation2,
  Users,
  Crown,
  Leaf,
  CalendarCheck,
  PhoneCall,
  Menu,
  X,
  ChevronDown,
  Building2,
  ShieldCheck,
  Award,
  ArrowRight,
  Radio,
  FileCheck,
  Cpu,
  Layers,
  BarChart3,
  Sliders,
  BookOpen,
  HelpCircle,
  TrendingUp,
  FileText,
  Briefcase,
  CheckCircle2,
  MapPin,
  Sparkles,
} from "lucide-react";

export default function Navbar() {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isCountryOpen, setIsCountryOpen] = useState(false);
  const pathname = usePathname();

  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [pathname]);

  const handleMouseEnter = (menuName: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(menuName);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 160);
  };

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
        scrolled
          ? "shadow-[0_10px_30px_-10px_rgba(15,23,42,0.12)] border-b border-slate-200"
          : "border-b border-slate-200/80"
      }`}
    >
      {/* Animated shimmer line (own clipped layer so dropdowns are never cut off) */}
      <div className="pointer-events-none absolute inset-x-0 top-[74px] h-[2px] overflow-hidden z-10">
        <div className="h-full w-full bg-gradient-to-r from-transparent via-[#48B83D] to-transparent animate-[shimmer-sweep_3.5s_ease-in-out_infinite]" />
      </div>

      {/* 1. MAIN NAVBAR */}
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-4 xl:px-8">
        <div className="flex items-center justify-between gap-2 lg:gap-3 xl:gap-6 h-[74px]">
          {/* Brand Logo (Official SPEEDWAYS Logo) */}
          <Link href="/" className="flex items-center group shrink-0">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/speedways-wordmark.png"
              alt="SPEEDWAYS Fleet & Travel Management"
              className="h-5 xl:h-6 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Navigation Links: Product ⌄ | Services ⌄ | Safety & Compliance | Customers | Leadership | Resources ⌄ | About Us ⌄ */}
          <nav className="hidden lg:flex items-center space-x-2 xl:space-x-3.5 2xl:space-x-6 text-[13px] xl:text-[14px] 2xl:text-[15px] font-medium text-slate-800">
            {/* 1. PRODUCT DROPDOWN */}
            <div
              className="relative py-6"
              onMouseEnter={() => handleMouseEnter("product")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap ${
                  pathname.startsWith("/technology")
                    ? "text-[#48B83D] font-semibold"
                    : "text-slate-800 hover:text-[#48B83D]"
                }`}
                aria-expanded={activeDropdown === "product"}
              >
                <span>Product</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                    activeDropdown === "product" ? "rotate-180 text-[#48B83D]" : ""
                  }`}
                />
              </button>

              {/* Product Mega Menu */}
              {activeDropdown === "product" && (
                <div
                  className="absolute top-full left-0 w-[720px] max-w-[calc(100vw-32px)] bg-white border border-green-200/90 rounded-3xl flyout-premium-shadow p-6 pt-5 animate-in fade-in zoom-in-95 duration-200 z-50 whitespace-normal"
                  onMouseEnter={() => handleMouseEnter("product")}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="flex items-center justify-between pb-3.5 mb-4 border-b border-slate-100">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-[#48B83D] block">
                        Enterprise Mobility Cloud & SaaS
                      </span>
                      <p className="text-xs text-slate-500 mt-0.5">
                        Integrated corporate travel dispatching, telemetry, and automated billing
                      </p>
                    </div>
                    <Link
                      href="/technology"
                      className="text-xs font-bold text-green-700 hover:text-green-800 flex items-center gap-1.5 bg-green-50 px-3 py-1.5 rounded-xl hover:bg-green-100 transition-colors"
                    >
                      <span>Explore Tech Stack</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <Link
                      href="/technology"
                      className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-slate-50 transition-all group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-green-100 text-green-700 flex items-center justify-center shrink-0 group-hover:bg-[#48B83D] group-hover:text-white transition-colors">
                        <Cpu className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-bold text-slate-900 group-hover:text-green-700 transition-colors flex items-center justify-between">
                          <span>Our Technology Platform</span>
                          <span className="text-[9px] font-semibold text-green-700 bg-green-50 px-1.5 py-0.5 rounded border border-green-200">
                            Core SaaS
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 line-clamp-2 mt-0.5">
                          Automated booking distribution, real-time driver allocation, and geofenced trip telemetry.
                        </p>
                      </div>
                    </Link>

                    <Link
                      href="/technology#simulator"
                      className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-slate-50 transition-all group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-green-100 text-green-700 flex items-center justify-center shrink-0 group-hover:bg-[#48B83D] group-hover:text-white transition-colors">
                        <Radio className="w-5 h-5 text-green-600 group-hover:text-white animate-pulse" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-bold text-slate-900 group-hover:text-green-700 transition-colors flex items-center justify-between">
                          <span>Live Telemetry Simulator</span>
                          <span className="text-[9px] font-semibold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200">
                            Interactive
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 line-clamp-2 mt-0.5">
                          Test real-time GPS coordinates, driver OTP validation, and overspeed alerts.
                        </p>
                      </div>
                    </Link>

                    <Link
                      href="/services/chauffeur-drive"
                      className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-slate-50 transition-all group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-green-100 text-green-700 flex items-center justify-center shrink-0 group-hover:bg-[#48B83D] group-hover:text-white transition-colors">
                        <Car className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-bold text-slate-900 group-hover:text-green-700 transition-colors flex items-center justify-between">
                          <span>Corporate Fleet & Vehicles</span>
                          <span className="text-[9px] font-semibold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                            500+ Cabs
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 line-clamp-2 mt-0.5">
                          Filter sedans, MPVs, luxury limousines, and zero-emission electric vehicles.
                        </p>
                      </div>
                    </Link>

                    <Link
                      href="/technology#mobile"
                      className="flex items-start gap-3.5 p-3 rounded-2xl hover:bg-slate-50 transition-all group"
                    >
                      <div className="w-10 h-10 rounded-xl bg-green-100 text-green-700 flex items-center justify-center shrink-0 group-hover:bg-[#48B83D] group-hover:text-white transition-colors">
                        <FileCheck className="w-5 h-5" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-bold text-slate-900 group-hover:text-green-700 transition-colors flex items-center justify-between">
                          <span>Digital Duty Slips (e-DTR)</span>
                          <span className="text-[9px] font-semibold text-slate-500 bg-slate-100 px-1.5 py-0.5 rounded">
                            Paperless
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-500 line-clamp-2 mt-0.5">
                          Tamper-proof digital signatures, route replay, and GST-compliant invoicing.
                        </p>
                      </div>
                    </Link>
                  </div>

                  <div className="mt-4 pt-3.5 border-t border-slate-100 bg-slate-50 -mx-6 -mb-6 p-4 px-6 rounded-b-3xl flex items-center justify-between text-xs">
                    <span className="text-slate-600 flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-[#48B83D]" />
                      <strong>New:</strong> Multi-tenant Corporate Admin Portal with live MIS dashboards
                    </span>
                    <Link
                      href="/technology"
                      className="font-bold text-green-700 hover:text-green-800 flex items-center gap-1"
                    >
                      Explore Cloud Platform <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* 2. SERVICES DROPDOWN */}
            <div
              className="relative py-6"
              onMouseEnter={() => handleMouseEnter("services")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap ${
                  pathname.startsWith("/services")
                    ? "text-[#48B83D] font-semibold"
                    : "text-slate-800 hover:text-[#48B83D]"
                }`}
                aria-expanded={activeDropdown === "services"}
              >
                <span>Services</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                    activeDropdown === "services" ? "rotate-180 text-[#48B83D]" : ""
                  }`}
                />
              </button>

              {/* Services Mega Menu */}
              {activeDropdown === "services" && (
                <div
                  className="absolute top-full left-[-40px] xl:left-[-100px] w-[860px] max-w-[calc(100vw-32px)] bg-white border border-green-200/90 rounded-3xl flyout-premium-shadow p-6 pt-5 animate-in fade-in zoom-in-95 duration-200 z-50 whitespace-normal"
                  onMouseEnter={() => handleMouseEnter("services")}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="flex items-start justify-between gap-4 pb-3.5 mb-4 border-b border-slate-100">
                    <div className="max-w-xl">
                      <span className="text-xs font-bold uppercase tracking-wider text-[#48B83D] block">
                        Enterprise Mobility Solutions
                      </span>
                      <p className="text-xs text-slate-600 mt-1 leading-relaxed whitespace-normal">
                        Seamless mobility across 185+ cities, with standardized spot rentals, hourly disposals, and intercity routes — governed by transparent tariffs, 5% GST billing, and 24×7 command centre oversight.
                      </p>
                    </div>
                    <Link
                      href="/services"
                      className="text-xs font-bold text-green-700 hover:text-green-800 flex items-center gap-1.5 bg-green-50 px-3.5 py-2 rounded-xl hover:bg-green-100 transition-colors shrink-0 whitespace-nowrap"
                    >
                      <span>All 11 Verticals</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <div className="grid grid-cols-2 gap-6">
                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 px-2 flex items-center gap-1.5">
                        <Car className="w-3.5 h-3.5 text-[#48B83D]" />
                        <span>Spot & Executive Travel</span>
                      </div>
                      <div className="space-y-1">
                        <Link
                          href="/services/chauffeur-drive"
                          className="flex items-start gap-3 p-2.5 rounded-2xl hover:bg-slate-50 transition-all group"
                        >
                          <div className="w-9 h-9 rounded-xl bg-green-100 text-green-700 flex items-center justify-center shrink-0 group-hover:bg-[#48B83D] group-hover:text-white transition-colors mt-0.5">
                            <Plane className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs font-bold text-slate-900 group-hover:text-green-700 transition-colors">
                              Airport Transfer across India
                            </div>
                            <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5 whitespace-normal">
                              Reliable airport mobility with live flight monitoring and proactive chauffeur coordination, with specialized meet-and-greet assistance available for VIP and bulk movements.
                            </p>
                          </div>
                        </Link>

                        <Link
                          href="/services/chauffeur-drive"
                          className="flex items-start gap-3 p-2.5 rounded-2xl hover:bg-slate-50 transition-all group"
                        >
                          <div className="w-9 h-9 rounded-xl bg-green-100 text-green-700 flex items-center justify-center shrink-0 group-hover:bg-[#48B83D] group-hover:text-white transition-colors mt-0.5">
                            <Clock className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs font-bold text-slate-900 group-hover:text-green-700 transition-colors">
                              Local / Short Term Rental
                            </div>
                            <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5 whitespace-normal">
                              Flexible hourly mobility tailored for multi-stop corporate meetings, site visits, inspections, and seamless citywide business travel.
                            </p>
                          </div>
                        </Link>

                        <Link
                          href="/services/chauffeur-drive"
                          className="flex items-start gap-3 p-2.5 rounded-2xl hover:bg-slate-50 transition-all group"
                        >
                          <div className="w-9 h-9 rounded-xl bg-green-100 text-green-700 flex items-center justify-center shrink-0 group-hover:bg-[#48B83D] group-hover:text-white transition-colors mt-0.5">
                            <Navigation2 className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs font-bold text-slate-900 group-hover:text-green-700 transition-colors">
                              Out Station Intercity Mobility
                            </div>
                            <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5 whitespace-normal">
                              Enterprise-grade outstation mobility built around safety, comfort, and compliance — with trained chauffeurs, well-maintained vehicles, monitored journeys, and 24×7 operational support.
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>

                    <div>
                      <div className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-2 px-2 flex items-center gap-1.5">
                        <Users className="w-3.5 h-3.5 text-[#48B83D]" />
                        <span>Workforce & Delegations</span>
                      </div>
                      <div className="space-y-1">
                        <Link
                          href="/services/employee-transport"
                          className="flex items-start gap-3 p-2.5 rounded-2xl hover:bg-slate-50 transition-all group"
                        >
                          <div className="w-9 h-9 rounded-xl bg-green-100 text-green-700 flex items-center justify-center shrink-0 group-hover:bg-[#48B83D] group-hover:text-white transition-colors mt-0.5">
                            <Users className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs font-bold text-slate-900 group-hover:text-green-700 transition-colors">
                              Employee Transport (ETS)
                            </div>
                            <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5 whitespace-normal">
                              24×7 shift commute, route clustering & women safety protocols with geofenced live trip telemetry.
                            </p>
                          </div>
                        </Link>

                        <Link
                          href="/services/vip-luxury-events"
                          className="flex items-start gap-3 p-2.5 rounded-2xl hover:bg-slate-50 transition-all group"
                        >
                          <div className="w-9 h-9 rounded-xl bg-green-100 text-green-700 flex items-center justify-center shrink-0 group-hover:bg-[#48B83D] group-hover:text-white transition-colors mt-0.5">
                            <Crown className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs font-bold text-slate-900 group-hover:text-green-700 transition-colors">
                              VIP & Board Mobility
                            </div>
                            <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5 whitespace-normal">
                              Mercedes, BMW, Audi & Fortuner executive fleets for CXO summits, board meetings & high-profile delegations.
                            </p>
                          </div>
                        </Link>

                        <Link
                          href="/sustainability"
                          className="flex items-start gap-3 p-2.5 rounded-2xl hover:bg-slate-50 transition-all group"
                        >
                          <div className="w-9 h-9 rounded-xl bg-green-100 text-green-700 flex items-center justify-center shrink-0 group-hover:bg-[#48B83D] group-hover:text-white transition-colors mt-0.5">
                            <Leaf className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs font-bold text-slate-900 group-hover:text-green-700 transition-colors">
                              EV Mobility & ESG
                            </div>
                            <p className="text-[11px] text-slate-500 leading-relaxed mt-0.5 whitespace-normal">
                              Zero-emission electric vehicle transition, battery telemetry & Scope 1/2 sustainability audit reporting.
                            </p>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3.5 border-t border-slate-100 bg-slate-50 -mx-6 -mb-6 p-4 px-6 rounded-b-3xl flex items-center justify-between text-xs whitespace-normal">
                    <span className="text-slate-600 flex items-center gap-2">
                      <Radio className="w-3.5 h-3.5 text-[#48B83D] animate-pulse shrink-0" />
                      <span><strong>24×7 Active Command Center:</strong> 4h Local Lead Time Guarantee</span>
                    </span>
                    <Link
                      href="/contact"
                      className="font-bold text-green-700 hover:text-green-800 flex items-center gap-1 shrink-0 whitespace-nowrap"
                    >
                      Request Corporate RFP <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* 3. SAFETY & COMPLIANCE (NEW TAB) */}
            <Link
              href="/safety"
              className={`transition-colors py-6 whitespace-nowrap ${
                pathname === "/safety"
                  ? "text-[#48B83D] font-semibold"
                  : "text-slate-800 hover:text-[#48B83D]"
              }`}
            >
              Safety & Compliance
            </Link>

            {/* 4. CUSTOMERS */}
            <Link
              href="/customers"
              className={`transition-colors py-6 whitespace-nowrap ${
                pathname === "/customers"
                  ? "text-[#48B83D] font-semibold"
                  : "text-slate-800 hover:text-[#48B83D]"
              }`}
            >
              Customers
            </Link>

            {/* 5. LEADERSHIP */}
            <Link
              href="/leadership"
              className={`transition-colors py-6 whitespace-nowrap ${
                pathname === "/leadership"
                  ? "text-[#48B83D] font-semibold"
                  : "text-slate-800 hover:text-[#48B83D]"
              }`}
            >
              Leadership
            </Link>

            {/* 4. RESOURCES DROPDOWN */}
            <div
              className="relative py-6"
              onMouseEnter={() => handleMouseEnter("resources")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center gap-1.5 transition-colors cursor-pointer whitespace-nowrap ${
                  pathname.startsWith("/sustainability") || pathname === "/network-safety"
                    ? "text-[#48B83D] font-semibold"
                    : "text-slate-800 hover:text-[#48B83D]"
                }`}
                aria-expanded={activeDropdown === "resources"}
              >
                <span>Resources</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                    activeDropdown === "resources" ? "rotate-180 text-[#48B83D]" : ""
                  }`}
                />
              </button>

              {/* Resources Flyout Menu */}
              {activeDropdown === "resources" && (
                <div
                  className="absolute top-full left-[-100px] w-[640px] max-w-[calc(100vw-32px)] bg-white border border-green-200/90 rounded-3xl flyout-premium-shadow p-5 animate-in fade-in zoom-in-95 duration-200 z-50 whitespace-normal"
                  onMouseEnter={() => handleMouseEnter("resources")}
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="grid grid-cols-2 gap-3">
                    <Link
                      href="/contact"
                      className="flex items-start gap-3 p-3 rounded-2xl hover:bg-slate-50 transition-colors group"
                    >
                      <div className="w-9 h-9 rounded-xl bg-green-100 text-green-700 flex items-center justify-center shrink-0 group-hover:bg-[#48B83D] group-hover:text-white transition-colors">
                        <Sliders className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-bold text-slate-900 group-hover:text-green-700">
                          Corporate Tariff & Empanelment
                        </div>
                        <div className="text-[11px] text-slate-500">
                          Request custom tariffs for local, outstation & airport routes
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/sustainability#calculator"
                      className="flex items-start gap-3 p-3 rounded-2xl hover:bg-slate-50 transition-colors group"
                    >
                      <div className="w-9 h-9 rounded-xl bg-green-100 text-green-700 flex items-center justify-center shrink-0 group-hover:bg-[#48B83D] group-hover:text-white transition-colors">
                        <Leaf className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-bold text-slate-900 group-hover:text-green-700">
                          ESG Carbon Calculator
                        </div>
                        <div className="text-[11px] text-slate-500">
                          Measure fleet CO2 reduction and fuel savings
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/network-safety"
                      className="flex items-start gap-3 p-3 rounded-2xl hover:bg-slate-50 transition-colors group"
                    >
                      <div className="w-9 h-9 rounded-xl bg-green-100 text-green-700 flex items-center justify-center shrink-0 group-hover:bg-[#48B83D] group-hover:text-white transition-colors">
                        <ShieldCheck className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-bold text-slate-900 group-hover:text-green-700">
                          Safety & ISO Governance
                        </div>
                        <div className="text-[11px] text-slate-500">
                          ISO 9001, 14001, 27001 & 4-tier escalation
                        </div>
                      </div>
                    </Link>

                    <Link
                      href="/contact#faq"
                      className="flex items-start gap-3 p-3 rounded-2xl hover:bg-slate-50 transition-colors group"
                    >
                      <div className="w-9 h-9 rounded-xl bg-green-100 text-green-700 flex items-center justify-center shrink-0 group-hover:bg-[#48B83D] group-hover:text-white transition-colors">
                        <HelpCircle className="w-4 h-4" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs font-bold text-slate-900 group-hover:text-green-700">
                          Procurement FAQs & SLAs
                        </div>
                        <div className="text-[11px] text-slate-500">
                          Corporate onboarding guidelines and lead times
                        </div>
                      </div>
                    </Link>
                  </div>

                  <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 px-2">
                    <span className="flex items-center gap-1.5 font-medium">
                      <BookOpen className="w-3.5 h-3.5 text-green-600" />
                      ISO Certified Corporate Mobility Architecture
                    </span>
                    <Link
                      href="/network-safety"
                      className="font-bold text-green-700 hover:text-green-800 flex items-center gap-1"
                    >
                      View Network Map <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* 5. ABOUT US DROPDOWN (Includes Company Overview, Leadership, Investors & Governance) */}
            <div
              className="relative py-6"
              onMouseEnter={() => handleMouseEnter("about")}
              onMouseLeave={handleMouseLeave}
            >
              <button
                className={`flex items-center gap-1 xl:gap-1.5 transition-colors cursor-pointer whitespace-nowrap ${
                  pathname.startsWith("/about-us") || pathname === "/investors"
                    ? "text-[#48B83D] font-semibold"
                    : "text-slate-800 hover:text-[#48B83D]"
                }`}
                aria-expanded={activeDropdown === "about"}
              >
                <span>About Us</span>
                <ChevronDown
                  className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
                    activeDropdown === "about" ? "rotate-180 text-[#48B83D]" : ""
                  }`}
                />
              </button>

              {/* About Us Flyout Menu */}
              {activeDropdown === "about" && (
                <div
                  className="absolute top-full right-0 xl:left-[-120px] w-84 bg-white border border-green-200/90 rounded-3xl flyout-premium-shadow p-3 animate-in fade-in zoom-in-95 duration-200 z-50 whitespace-normal"
                  onMouseEnter={() => handleMouseEnter("about")}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    href="/about-us"
                    className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-slate-50 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-xl bg-green-100 text-green-700 flex items-center justify-center shrink-0 group-hover:bg-[#48B83D] group-hover:text-white transition-colors">
                      <Building2 className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold text-slate-900 group-hover:text-green-700">
                        About Speedways
                      </div>
                      <div className="text-[11px] text-slate-500">2012 Foundation & 14+ Yrs Heritage</div>
                    </div>
                  </Link>

                  <Link
                    href="/leadership"
                    className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-slate-50 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-xl bg-green-100 text-green-700 flex items-center justify-center shrink-0 group-hover:bg-[#48B83D] group-hover:text-white transition-colors">
                      <Users className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold text-slate-900 group-hover:text-green-700">
                        Executive Leadership
                      </div>
                      <div className="text-[11px] text-slate-500">100+ Yrs Mobility Bench</div>
                    </div>
                  </Link>

                  <Link
                    href="/investors"
                    className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-slate-50 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-xl bg-green-100 text-green-700 flex items-center justify-center shrink-0 group-hover:bg-[#48B83D] group-hover:text-white transition-colors">
                      <TrendingUp className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold text-slate-900 group-hover:text-green-700">
                        Investor Relations
                      </div>
                      <div className="text-[11px] text-slate-500">Fleet Scale & ESG Roadmap</div>
                    </div>
                  </Link>

                  <Link
                    href="/network-safety"
                    className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-slate-50 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-xl bg-green-100 text-green-700 flex items-center justify-center shrink-0 group-hover:bg-[#48B83D] group-hover:text-white transition-colors">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold text-slate-900 group-hover:text-green-700">
                        Pan-India Network
                      </div>
                      <div className="text-[11px] text-slate-500">185+ Cities Direct Reach</div>
                    </div>
                  </Link>

                  <Link
                    href="/about-us#governance"
                    className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-slate-50 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-xl bg-green-100 text-green-700 flex items-center justify-center shrink-0 group-hover:bg-[#48B83D] group-hover:text-white transition-colors">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold text-slate-900 group-hover:text-green-700">
                        Client Governance
                      </div>
                      <div className="text-[11px] text-slate-500">Dedicated SPOC & Escalations</div>
                    </div>
                  </Link>

                  <Link
                    href="/about-us#testimonials"
                    className="flex items-center gap-3 p-2.5 rounded-2xl hover:bg-slate-50 transition-colors group"
                  >
                    <div className="w-8 h-8 rounded-xl bg-green-100 text-green-700 flex items-center justify-center shrink-0 group-hover:bg-[#48B83D] group-hover:text-white transition-colors">
                      <Award className="w-4 h-4" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold text-slate-900 group-hover:text-green-700">
                        Client Testimonials
                      </div>
                      <div className="text-[11px] text-slate-500">Tata Steel, DBS, Merck, Kimberly</div>
                    </div>
                  </Link>

                  <div className="mt-2 pt-2 border-t border-slate-100 px-2 flex justify-between items-center text-xs">
                    <span className="text-slate-500 font-medium">Headquarters: Mumbai</span>
                    <Link
                      href="/contact"
                      className="font-bold text-green-700 hover:text-green-800 flex items-center gap-1"
                    >
                      SPOC Contact <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </nav>

          {/* Right Action Elements: Green Pill Button + Regional Country Box */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3 shrink-0">
            {/* Signature Green Pill Button */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-3.5 xl:px-5 py-2 xl:py-2.5 rounded-full bg-[#48B83D] hover:bg-[#3ea534] active:scale-97 text-white font-bold text-xs xl:text-sm whitespace-nowrap btn-glow-pulse transition-all duration-300 cursor-pointer shadow-md"
            >
              Request a Demo
            </Link>

            {/* Country Flag Pill Box (Exactly as seen in MoveInSync: [ 🇮🇳 IN ]) */}
            <div
              className="relative"
              onMouseEnter={() => setIsCountryOpen(true)}
              onMouseLeave={() => setIsCountryOpen(false)}
            >
              <button
                type="button"
                className="flex items-center gap-1.5 px-2.5 xl:px-3 py-1.5 xl:py-2 rounded-xl border border-green-200 bg-white hover:border-green-400 text-xs font-bold text-slate-800 transition-all duration-200 cursor-pointer shadow-xs hover:shadow-md hover:-translate-y-0.5"
                title="Pan-India Corporate Mobility (Direct Metros: BOM, DEL, BLR, HYD, MAA)"
              >
                <span className="text-base leading-none">🇮🇳</span>
                <span className="font-semibold text-slate-800">IN</span>
              </button>

              {/* Regional Dispatch Tooltip */}
              {isCountryOpen && (
                <div className="absolute right-0 top-full mt-2 w-64 p-3 bg-white rounded-2xl flyout-premium-shadow border border-green-200 text-xs animate-in fade-in zoom-in-95 duration-150 z-50">
                  <div className="font-bold text-slate-900 mb-1 flex items-center justify-between">
                    <span>Pan-India Network</span>
                    <span className="text-[10px] text-green-700 bg-green-100 px-2 py-0.5 rounded-full font-bold">
                      185+ Cities
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 mb-2">
                    Centralized Operations Command in Mumbai with direct metro branch offices.
                  </p>
                  <a
                    href="tel:9820630817"
                    className="flex items-center justify-center gap-1.5 w-full py-2 rounded-xl bg-slate-50 hover:bg-green-50 text-green-700 font-bold text-xs border border-green-200 hover:border-green-400 transition-all hover:shadow-xs"
                  >
                    <PhoneCall className="w-3.5 h-3.5" />
                    <span>24×7 Hotline: 9820630817</span>
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Hamburger Toggle (Visible on < lg) */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/contact"
              className="px-4 py-2 rounded-full bg-[#48B83D] text-white text-xs font-bold"
            >
              Demo
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* 2. MOVEINSYNC SIGNATURE AMBER ANNOUNCEMENT RIBBON */}
      <div className="bg-[#FFBE38] text-slate-900 text-xs sm:text-[13.5px] font-semibold py-2.5 px-4 border-t border-amber-400/40">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 sm:gap-4 flex-wrap text-center">
          <span>
            <strong>Mobility Symposium 2026</strong> — Resilient Mobility: Readying India&apos;s Cities for an Uncertain World | 8th Oct, 2026 | The Taj West End
          </span>

          <Link
            href="/contact"
            className="inline-flex items-center gap-1.5 px-4 py-1 rounded-full bg-white text-green-700 font-bold text-[11px] shadow-sm hover:shadow-md hover:scale-105 active:scale-95 transition-all shrink-0 border border-amber-300/60"
          >
            <span>Know More</span>
            <ArrowRight className="w-3 h-3 text-[#48B83D]" />
          </Link>
        </div>
      </div>

      {/* 3. MOBILE RESPONSIVE DRAWER */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-5 pt-3 pb-6 space-y-3 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-4">
          <div className="space-y-1">
            <Link
              href="/"
              className={`block px-3.5 py-2.5 rounded-xl text-sm font-bold ${
                pathname === "/" ? "bg-green-50 text-green-700" : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              Home
            </Link>

            <Link
              href="/technology"
              className={`block px-3.5 py-2.5 rounded-xl text-sm font-bold ${
                pathname.startsWith("/technology") ? "bg-green-50 text-green-700" : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              Product (Tech & Telemetry)
            </Link>

            <Link
              href="/services"
              className={`block px-3.5 py-2.5 rounded-xl text-sm font-bold ${
                pathname.startsWith("/services") ? "bg-green-50 text-green-700" : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              Services (11 Enterprise Verticals)
            </Link>

            <div className="pl-4 space-y-1 border-l-2 border-green-200 my-1">
              <Link
                href="/services/chauffeur-drive"
                className="block py-1 text-xs font-medium text-slate-600 hover:text-green-600"
              >
                • Corporate Car Rental & Outstation
              </Link>
              <Link
                href="/services/employee-transport"
                className="block py-1 text-xs font-medium text-slate-600 hover:text-green-600"
              >
                • Employee Transport Services (ETS)
              </Link>
              <Link
                href="/services/vip-luxury-events"
                className="block py-1 text-xs font-medium text-slate-600 hover:text-green-600"
              >
                • VIP Movement & MICE Summits
              </Link>
            </div>

            <Link
              href="/safety"
              className={`block px-3.5 py-2.5 rounded-xl text-sm font-bold ${
                pathname === "/safety" ? "bg-green-50 text-green-700" : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              Safety & Compliance (12 Pillars)
            </Link>

            <Link
              href="/customers"
              className={`block px-3.5 py-2.5 rounded-xl text-sm font-bold ${
                pathname === "/customers" ? "bg-green-50 text-green-700" : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              Customers (Client Trust)
            </Link>

            <Link
              href="/leadership"
              className={`block px-3.5 py-2.5 rounded-xl text-sm font-bold ${
                pathname === "/leadership" ? "bg-green-50 text-green-700" : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              Leadership (Executive Team)
            </Link>

            <Link
              href="/network-safety"
              className={`block px-3.5 py-2.5 rounded-xl text-sm font-bold ${
                pathname === "/network-safety" ? "bg-green-50 text-green-700" : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              Safety & 185+ Cities
            </Link>

            <Link
              href="/sustainability"
              className={`block px-3.5 py-2.5 rounded-xl text-sm font-bold ${
                pathname === "/sustainability" ? "bg-green-50 text-green-700" : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              Sustainability & ESG
            </Link>

            <Link
              href="/about-us"
              className={`block px-3.5 py-2.5 rounded-xl text-sm font-bold ${
                pathname === "/about-us" ? "bg-green-50 text-green-700" : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              About Us (2012 Legacy)
            </Link>

            <Link
              href="/investors"
              className={`block px-3.5 py-2.5 rounded-xl text-sm font-bold ${
                pathname === "/investors" ? "bg-green-50 text-green-700" : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              Investors & Governance
            </Link>

            <Link
              href="/contact"
              className={`block px-3.5 py-2.5 rounded-xl text-sm font-bold ${
                pathname === "/contact" ? "bg-green-50 text-green-700" : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              Contact RFP Desk
            </Link>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 py-3 rounded-full bg-[#48B83D] text-white text-sm font-bold shadow-md shadow-green-500/20"
            >
              <span>Request a Demo</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="tel:9820630817"
              className="flex items-center justify-center gap-2 py-2.5 rounded-full bg-slate-50 text-slate-800 text-xs font-bold border border-slate-200"
            >
              <PhoneCall className="w-3.5 h-3.5 text-green-600" />
              <span>24×7 Operations: 9820630817</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
