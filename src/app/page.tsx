"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ShieldCheck,
  MapPin,
  CheckCircle2,
  PhoneCall,
  Settings,
  Network,
  Cpu,
  Star,
  Download,
  Building,
  Radio,
  FileCheck,
  TrendingUp,
  Activity,
  Award,
  Zap,
  ChevronDown,
  Receipt,
  Compass,
  Plane,
  Clock,
  Navigation,
  Calendar,
  Users,
  Shield,
  Gem,
  HandMetal,
  Filter,
  Car,
  Leaf,
  BatteryCharging,
  Calculator,
  Building2,
  Send,
  Check,
  Copy,
  Briefcase,
  Crown,
  AlertTriangle,
  LifeBuoy,
  HeartHandshake,
  Sparkles,
  Smartphone,
  Layers,
  FileSpreadsheet,
} from "lucide-react";
import SymbolBadge from "@/components/SymbolBadge";
import LiveTelemetrySimulator from "@/components/LiveTelemetrySimulator";
import PictographicalComparison from "@/components/PictographicalComparison";
import SpeedwaysInfoCards from "@/components/SpeedwaysInfoCards";
import InteractiveFleetVisualizer from "@/components/InteractiveFleetVisualizer";
import IndiaNetworkMap from "@/components/IndiaNetworkMap";
import EvolutionRoadmap from "@/components/EvolutionRoadmap";
import Testimonials from "@/components/ui/testimonials-13";
import ClientLogosMarquee from "@/components/ClientLogosMarquee";
import AnimatedStatsGrid from "@/components/AnimatedStatsGrid";
import LeadershipSection from "@/components/LeadershipSection";
import MovingVehicleSegments from "@/components/MovingVehicleSegments";
import DigitalInvoicePreview from "@/components/DigitalInvoicePreview";
import { AnimatedNumber } from "@/components/AnimatedCounter";
import {
  EXECUTIVE_QUESTIONS,
  TESTIMONIALS,
  SAFETY_COMPLIANCE_PILLARS,
  SERVICES_CATALOG,
  EV_ROADMAP_STEPS,
  DIRECT_BRANCHES,
} from "@/data/speedwaysData";

const HOME_FAQS = [
  {
    q: "Is Speedways primarily a B2B corporate car rental provider or also B2C?",
    a: "Speedways operates strictly as an enterprise B2B mobility partner specializing in long-term contracts, employee transportation services (ETS), executive daily car rental with chauffeur, and airport transfers for corporations. We also support large-scale MICE events, VIP board delegations, and executive mobility for empaneled enterprise clients with 30-day corporate credit terms and 5% GST input tax credit.",
  },
  {
    q: "How does Speedways ensure driver training and police verification?",
    a: "Every chauffeur undergoes an exhaustive 7-point background verification protocol: mandatory local police criminal background clearance, permanent address physical verification, commercial badge validation, medical and drug screening, defensive driving certification, and soft-skills corporate grooming. Drivers are continuously tracked in real time through AIS-140 GPS telemetry.",
  },
  {
    q: "What 3-layer operational governance does Speedways follow across India?",
    a: "We maintain a three-tier operational structure modeled on top enterprise standards: (1) On-Site Transport Desk & Account Manager for daily dispatch and shift coordination, (2) 24×7 Central Command Center continuously tracking trip lifecycle, SOS triggers, and speed compliance, and (3) Rapid Response Team providing emergency breakdown assistance and replacement vehicles within 30 minutes in all metro cities.",
  },
  {
    q: "How does transparent 5% GST billing and digital duty slips (e-DDS) work?",
    a: "Speedways operates on a 100% paperless workflow. Chauffeurs and passengers close trips digitally with OTP authentication and digital signatures, capturing GPS mileage, route polyline snapshots, and toll receipts instantly. Finance and procurement teams receive itemized monthly GST invoices with direct ERP/SAP export capabilities, ensuring 100% audit compliance and 5% GST input tax credit.",
  },
  {
    q: "What safety protocols are followed for female employees during night shifts?",
    a: "For female employees traveling between 8:00 PM and 6:00 AM, Speedways mandates first-pickup / last-drop security protocols, vetted security escort guards in vehicles where required, panic SOS buttons linked to our 24×7 command center, continuous geofence deviation alerts, and automated WhatsApp/SMS live trip sharing with company transport administrators.",
  },
  {
    q: "Which cities are covered and what is the typical onboarding SLA for new corporate RFPs?",
    a: "Speedways has direct operational hubs in Mumbai (HQ), Bengaluru, Hyderabad, Chennai, Delhi NCR, and Pune, with direct & managed network capability across 185+ Tier-1, Tier-2, and Tier-3 cities in India. For new corporate empanelments, standard rate matrices and service level agreements (SLAs) are delivered within 24 to 48 hours.",
  },
];

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [selectedServiceCategory, setSelectedServiceCategory] = useState<string>("All");

  // Sustainability Calculator State
  const [dailyKms, setDailyKms] = useState<number>(300);
  const [vehicleCount, setVehicleCount] = useState<number>(10);
  const [selectedPhase, setSelectedPhase] = useState<number>(0);
  const [certDownloaded, setCertDownloaded] = useState<boolean>(false);

  const annualKm = dailyKms * 260 * vehicleCount; // 260 working days
  const annualCo2Kg = Math.round((annualKm * 0.12) / 1000); // Metric tons of CO2 saved
  const treesEquivalent = Math.round(annualCo2Kg * 45); // ~45 trees planted per ton of CO2
  const litersDieselSaved = Math.round(annualKm / 14); // ~14 km/L fuel benchmark

  const handleDownloadCert = () => {
    setCertDownloaded(true);
    setTimeout(() => setCertDownloaded(false), 2500);
  };

  // Contact Form State
  const [contactTab, setContactTab] = useState<"spot" | "ets" | "vip">("spot");
  const [selectedServices, setSelectedServices] = useState<string[]>([
    "Corporate Car Rental",
  ]);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    phone: "",
    city: "Mumbai",
    monthlyFleetCount: "5 - 15 Vehicles",
    message: "",
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState<string | null>(null);

  const availableServices = [
    "Corporate Car Rental",
    "Airport Transfers",
    "Employee Transport (ETS)",
    "Monthly & Long-Term Leasing",
    "VIP & CXO Movement",
    "MICE & Event Transportation",
    "Intercity & Outstation",
    "Fleet Management Services",
    "EV Mobility Solutions",
  ];

  const serviceCategories = [
    { label: "All", count: SERVICES_CATALOG.length },
    { label: "Rental", count: SERVICES_CATALOG.filter((s) => s.category === "Rental").length },
    { label: "Commute", count: SERVICES_CATALOG.filter((s) => s.category === "Commute").length },
    { label: "Executive", count: SERVICES_CATALOG.filter((s) => s.category === "Executive").length },
    { label: "Management", count: SERVICES_CATALOG.filter((s) => s.category === "Management").length },
    { label: "Sustainable", count: SERVICES_CATALOG.filter((s) => s.category === "Sustainable").length },
  ];

  const iconMap: Record<string, any> = {
    Compass,
    Plane,
    Clock,
    Navigation,
    Calendar,
    Users,
    Shield,
    Gem,
    Building,
    Zap,
    HandMetal,
  };

  const serviceImageMap: Record<string, string> = {
    "corporate-car-rental": "/images/hero-sedan.jpg",
    "airport-transfers": "/images/airport-chauffeur.jpg",
    "employee-transport": "/images/employee-transit.jpg",
    "monthly-long-term-leasing": "/images/sedan-interior.jpg",
    "vip-cxo-movement": "/images/vip-fleet-lineup.jpg",
    "mice-event-transport": "/images/mice-fleet.jpg",
    "intercity-outstation": "/images/hero-sedan.jpg",
    "fleet-management-services": "/images/command-center.jpg",
    "ev-mobility-solutions": "/images/ev-fleet.jpg",
  };

  const filteredServices =
    selectedServiceCategory === "All"
      ? SERVICES_CATALOG
      : SERVICES_CATALOG.filter((s) => s.category === selectedServiceCategory);

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

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }, 800);
  };

  const scrollToSection = (targetId: string) => {
    const el = document.getElementById(targetId);
    if (el) {
      const headerOffset = 76;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      window.history.pushState(null, "", `#${targetId}`);
    }
  };

  const scrollToContactWithService = (serviceName: string) => {
    if (!selectedServices.includes(serviceName)) {
      setSelectedServices([serviceName, ...selectedServices]);
    }
    scrollToSection("enquiry");
  };

  return (
    <div className="bg-[#F4FAF6]">
      {/* =========================================================================
          STEP 1: ABOUT THE COMPANY SPEEDWAYS AND ITS USP
          (Vision, Mission, Promise, Fleet Strength, Network Coverage, 100% Compliance,
           Trusted by 185+ corporates across the sectors Pan India)
         ========================================================================= */}
      <section id="about" className="scroll-mt-24 relative pt-8 pb-20 overflow-hidden border-b border-slate-200/80 bg-white">
        {/* Anchor alias for any legacy links to #hero */}
        <div id="hero" className="absolute top-0 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* 1.1 Hero Spotlight & Tagline Showcase */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center mb-14">
            {/* Left Content Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="lg:col-span-6 space-y-6"
            >
              {/* Pre-Headline Flow Eyebrow & Tagline Callout */}
              <div className="flex flex-wrap items-center gap-2.5">
                <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-100 px-3.5 py-1.5 rounded-full inline-block">
                  01. About Speedways &amp; Enterprise USP
                </span>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
                  className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-green-400 text-xs font-black uppercase tracking-widest shadow-md"
                >
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  <span>&ldquo;YOUR JOURNEY STARTS HERE…&rdquo;</span>
                </motion.div>
              </div>

              {/* Main H1 Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.12]"
              >
                Speedways.{" "}
                <motion.span
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                  className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500"
                >
                  Advancing Enterprise Mobility.
                </motion.span>
              </motion.h1>

              {/* Supporting Copy */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl"
              >
                <strong className="text-slate-800 font-bold block mb-1.5 text-sm sm:text-base">
                  India&apos;s Premier Corporate Mobility &amp; Employee Transportation Partner
                </strong>
                Established in 2012, Speedways Fleet &amp; Travel Management delivers safe, 100% compliant, and technology-driven ground transportation across{" "}
                <span className="font-bold text-slate-900">
                  <AnimatedNumber value={185} suffix="+" />
                </span>{" "}
                cities. Trusted by{" "}
                <span className="font-bold text-slate-900">185+ corporates</span> across sectors Pan-India with{" "}
                <span className="font-bold text-slate-900">
                  <AnimatedNumber value={1200} suffix="+" format={true} />
                </span>{" "}
                verified fleet vehicles, Indecab cloud management, and centralized 24×7 command centre governance.
              </motion.p>

              {/* Action Buttons: Direct In-Page Anchor Smooth Scrolling */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
                className="flex flex-wrap items-center gap-3.5 pt-2"
              >
                <button
                  type="button"
                  onClick={() => scrollToSection("enquiry")}
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl bg-green-600 hover:bg-green-700 active:scale-98 text-white font-bold text-sm sm:text-base shadow-sm hover:shadow-md transition-all group cursor-pointer"
                >
                  <span>Request Corporate Empanelment</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection("services")}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-green-50 hover:bg-green-100 text-green-800 font-bold text-sm border border-green-200 transition-all cursor-pointer"
                >
                  <span>2. Mobility Services</span>
                </button>

                <button
                  type="button"
                  onClick={() => scrollToSection("fleet")}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-bold text-sm border border-slate-300 shadow-2xs hover:border-slate-400 transition-all cursor-pointer"
                >
                  <span>3. Vehicle Segments</span>
                </button>
              </motion.div>

              {/* Trust Badges Row */}
              <div className="pt-4 grid grid-cols-3 gap-3 border-t border-slate-200/80 max-w-lg">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                  <span>99.4% On-Time SLA</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                  <span>Paperless e-DTR</span>
                </div>
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                  <span>5% GST ITC Compliant</span>
                </div>
              </div>
            </motion.div>

            {/* Right Hero Image Column with Anchored Telemetry Badges */}
            <div className="lg:col-span-6 relative mt-6 lg:mt-0 group">
              <div className="relative rounded-2xl overflow-hidden shadow-lg border border-slate-200 bg-white p-1.5 transition-colors duration-300">
                <Image
                  src="/images/hero-sedan.jpg"
                  alt="Speedways Executive Corporate Mobility Fleet with Chauffeur outside modern corporate headquarters"
                  width={1100}
                  height={650}
                  className="w-full h-[360px] sm:h-[430px] md:h-[480px] lg:h-[510px] xl:h-[540px] object-cover rounded-xl transition-transform duration-700 ease-out"
                  priority
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-900/15 to-transparent rounded-xl pointer-events-none" />

                <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-medium flex items-center justify-between">
                  <span className="px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 shadow-sm font-semibold tracking-wide">
                    Speedways Executive Chauffeur &amp; Fleet Operations
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-green-600 text-white font-mono font-bold text-[11px] shadow-sm flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
                    24×7 ACTIVE
                  </span>
                </div>
              </div>

              {/* Anchored Badge 1: 100% Background Verified */}
              <div className="absolute -top-4 -left-2 sm:-left-5 bg-white/95 backdrop-blur-md p-3.5 rounded-xl shadow-lg border border-slate-200 flex items-center gap-3 z-20">
                <div className="w-10 h-10 rounded-lg bg-green-50 text-green-700 flex items-center justify-center shrink-0 border border-green-200">
                  <ShieldCheck className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 tracking-tight flex items-center gap-1">
                    <span className="text-green-700 font-extrabold text-base">
                      <AnimatedNumber value={100} suffix="%" duration={1400} />
                    </span>
                    <span>100% Verified</span>
                  </div>
                  <div className="text-[11px] font-medium text-slate-500">Chauffeur Police Background Clearance</div>
                </div>
              </div>

              {/* Anchored Badge 2: Live GPS Telemetry */}
              <div className="absolute -bottom-4 -right-2 sm:-right-5 bg-white/95 backdrop-blur-md p-3.5 rounded-xl shadow-lg border border-slate-200 flex items-center gap-3 z-20">
                <div className="relative w-10 h-10 rounded-lg bg-green-50 text-green-700 flex items-center justify-center shrink-0 border border-green-200">
                  <Radio className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
                    Live GPS Telemetry
                  </div>
                  <div className="text-[11px] font-medium text-slate-500">
                    Continuous <span className="font-bold text-slate-700">24×7</span> Central Command Oversight
                  </div>
                </div>
              </div>

              {/* Anchored Badge 3: 185+ Cities */}
              <div className="hidden sm:flex absolute top-1/2 -right-4 sm:-right-6 transform -translate-y-1/2 bg-white/95 backdrop-blur-md p-3.5 rounded-xl shadow-lg border border-slate-200 items-center gap-3 z-20">
                <div className="w-10 h-10 rounded-lg bg-green-50 text-green-700 flex items-center justify-center shrink-0 border border-green-200">
                  <MapPin className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="text-sm font-bold text-slate-900 tracking-tight flex items-center gap-1">
                    <span className="text-green-700 font-extrabold text-base">
                      <AnimatedNumber value={185} suffix="+" duration={1600} />
                    </span>
                    <span>Cities</span>
                  </div>
                  <div className="text-[11px] font-medium text-slate-500">Pan-India Coverage</div>
                </div>
              </div>
            </div>
          </div>

          {/* Section Divider & Foundational Corporate Pillars Heading */}
          <div className="border-t border-slate-200/90 pt-14 mb-12 text-center max-w-3xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-50 border border-green-200 px-3.5 py-1 rounded-full inline-block">
              Foundational Corporate Pillars
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-slate-900 mt-2 tracking-tight">
              Strategic Vision, Mission &amp; The Speedways Promise
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm mt-2">
              The core principles driving 14+ years of institutional mobility excellence, zero-compromise compliance, and nationwide enterprise trust.
            </p>
          </div>

          {/* Vision, Mission & Promise Cards (Pillars of Speedways USP) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* Vision */}
            <div className="p-7 rounded-3xl bg-slate-900 text-white shadow-xl flex flex-col justify-between relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/10 rounded-full blur-2xl pointer-events-none" />
              <div>
                <div className="w-12 h-12 rounded-2xl bg-green-500/20 text-green-400 flex items-center justify-center mb-5 border border-green-500/30">
                  <Compass className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-green-400">Our Strategic Aim</span>
                <h3 className="text-2xl font-black text-white mt-1 mb-3">Our Vision</h3>
                <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
                  To be India&apos;s most trusted, technologically forward, and compliance-driven enterprise mobility ecosystem — eliminating operational friction for corporate travel desks nationwide.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-800 text-xs font-semibold text-slate-400 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-green-400" />
                <span>Pan-India Mobility Standard</span>
              </div>
            </div>

            {/* Mission */}
            <div className="p-7 rounded-3xl bg-white border border-green-200/90 shadow-md flex flex-col justify-between hover:shadow-xl transition-all group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center mb-5">
                  <TrendingUp className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-green-700">Operational Philosophy</span>
                <h3 className="text-2xl font-black text-slate-900 mt-1 mb-3">Our Mission</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Delivering seamless, safe, punctual, and transparent ground transportation solutions across 185+ cities with verified chauffeurs, zero surge pricing, and live 24×7 command center accountability.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-slate-100 text-xs font-semibold text-slate-600 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-green-600" />
                <span>100% Operational Discipline</span>
              </div>
            </div>

            {/* Promise */}
            <div className="p-7 rounded-3xl bg-gradient-to-br from-green-50 to-emerald-50 border border-green-200 shadow-md flex flex-col justify-between hover:shadow-xl transition-all group">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-green-600 text-white flex items-center justify-center mb-5 shadow-sm">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <span className="text-xs font-bold uppercase tracking-wider text-green-800">Our Enterprise Commitment</span>
                <h3 className="text-2xl font-black text-slate-900 mt-1 mb-3">The Speedways Promise</h3>
                <p className="text-slate-700 text-xs sm:text-sm leading-relaxed">
                  99.4% on-time arrival guarantee, 100% police background verified chauffeurs, instant paperless digital billing, and rapid 30-minute replacement guarantee across all metro hubs.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-green-200/60 text-xs font-semibold text-green-800 flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-green-700" />
                <span>Zero Compromise Service Level</span>
              </div>
            </div>
          </div>

          {/* Scale Metrics & Fleet Strength */}
          <div className="mb-14">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Verified Fleet Strength &amp; Scale</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-1">
                1,200+ Fleet Vehicles Across 185+ Cities
              </h3>
            </div>
            <AnimatedStatsGrid />
          </div>

          {/* Network Coverage: 185+ Cities with 6 Direct Metro Hubs Map */}
          <div className="mb-16">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-100 px-3 py-1 rounded-full">
                Pan-India Footprint
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Network Coverage: 185+ Cities with 6 Direct Metro Hubs
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-1">
                Headquartered in Mumbai with direct branch offices in Bengaluru, Delhi NCR, Hyderabad, Chennai, and Pune — providing single point of contact (SPOC) accountability across India.
              </p>
            </div>
            <IndiaNetworkMap />
          </div>

          {/* 100% Statutory, Regulatory & Safety Compliance Framework */}
          <div className="p-6 sm:p-8 rounded-3xl bg-slate-50 border border-slate-200/90 mb-16">
            <div className="text-center max-w-2xl mx-auto mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-100 px-3 py-1 rounded-full">
                Zero Compromise Compliance Framework
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
                100% Statutory, Regulatory &amp; Safety Compliance
              </h3>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 items-center text-center divide-y md:divide-y-0 md:divide-x divide-slate-200">
              <div className="flex items-center justify-center gap-2.5 py-1 px-3">
                <ShieldCheck className="w-5 h-5 text-green-600 shrink-0" />
                <div className="text-left">
                  <div className="text-xs font-bold text-slate-900 leading-tight">ISO 9001:2015</div>
                  <div className="text-[10px] text-slate-500">Quality Certified Operations</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2.5 py-1 px-3">
                <FileCheck className="w-5 h-5 text-green-600 shrink-0" />
                <div className="text-left">
                  <div className="text-xs font-bold text-slate-900 leading-tight">ISO 27001</div>
                  <div className="text-[10px] text-slate-500">Enterprise Data Security</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2.5 py-1 px-3">
                <Radio className="w-5 h-5 text-green-600 shrink-0" />
                <div className="text-left">
                  <div className="text-xs font-bold text-slate-900 leading-tight">AIS-140 GPS</div>
                  <div className="text-[10px] text-slate-500">Govt Telemetry Certified</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2.5 py-1 px-3">
                <Award className="w-5 h-5 text-green-600 shrink-0" />
                <div className="text-left">
                  <div className="text-xs font-bold text-slate-900 leading-tight">100% Police Verified</div>
                  <div className="text-[10px] text-slate-500">7-Point Chauffeur Vetting</div>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2.5 py-1 px-3 col-span-2 md:col-span-1">
                <Receipt className="w-5 h-5 text-green-600 shrink-0" />
                <div className="text-left">
                  <div className="text-xs font-bold text-slate-900 leading-tight">5% GST ITC Compliant</div>
                  <div className="text-[10px] text-slate-500">Audit-Ready e-Invoicing</div>
                </div>
              </div>
            </div>
          </div>

          {/* Trusted by 185+ Corporates Client Marquee */}
          <div>
            <div className="text-center max-w-2xl mx-auto mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-100 px-3 py-1 rounded-full">
                Corporate Endorsement
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 mt-2">
                Trusted by 185+ Corporates Across All Industry Sectors Pan India
              </h3>
              <p className="text-slate-500 text-xs mt-1">
                BFSI, IT &amp; ITES, Consulting, Pharma, Automotive, Aerospace, and Manufacturing leaders.
              </p>
            </div>
            <ClientLogosMarquee />
          </div>
        </div>
      </section>

      {/* =========================================================================
          STEP 2: SERVICES
          (Corporate Car Rental, Airport Transfers, Employee Transport (ETS),
           Monthly & Long-Term Leasing, VIP & CXO Movement, MICE & Event Transportation,
           Intercity & Outstation, Fleet Management Services, EV Mobility Solutions)
         ========================================================================= */}
      <section id="services" className="scroll-mt-24 py-20 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-100 px-3.5 py-1 rounded-full inline-block">
              02. Corporate Mobility Services Suite
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-3 tracking-tight">
              Enterprise Mobility Services
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              All 9 specialized corporate mobility verticals designed with strict SLAs, verified chauffeurs, Indecab live telemetry, and 5% GST tax compliance across 185+ cities.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2 flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5" /> Category Filter:
            </span>
            {serviceCategories.map((cat) => (
              <button
                key={cat.label}
                type="button"
                onClick={() => setSelectedServiceCategory(cat.label)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  selectedServiceCategory === cat.label
                    ? "bg-green-600 text-white shadow-md shadow-green-600/25 scale-102"
                    : "bg-white hover:bg-slate-200 text-slate-700 border border-slate-200"
                }`}
              >
                <span>{cat.label === "All" ? "All 9 Services" : cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                    selectedServiceCategory === cat.label
                      ? "bg-white text-green-700"
                      : "bg-slate-100 text-slate-600"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            ))}
          </div>

          {/* 9 Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredServices.map((service) => {
              const IconComp = iconMap[service.iconName] || Compass;
              return (
                <div
                  key={service.id}
                  className="bg-white rounded-3xl border border-green-200/80 card-premium-shadow hover-border-flow flex flex-col justify-between group overflow-hidden transition-all duration-300"
                >
                  <div>
                    {/* Service Image Header with Category Badge & Symbol */}
                    <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                      <Image
                        src={serviceImageMap[service.id] || "/images/hero-sedan.jpg"}
                        alt={service.name}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-900/20 to-transparent pointer-events-none" />

                      <div className="absolute top-3.5 left-3.5">
                        <div className="w-10 h-10 rounded-xl bg-white/95 backdrop-blur-md text-green-700 flex items-center justify-center shadow-xs border border-white/60">
                          <IconComp className="w-5 h-5 text-green-700" />
                        </div>
                      </div>

                      <div className="absolute top-3.5 right-3.5">
                        <span className="text-[11px] font-bold text-slate-900 bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-lg shadow-xs border border-white/60">
                          {service.category}
                        </span>
                      </div>

                      <div className="absolute bottom-3.5 left-4 right-4">
                        <h3 className="text-lg font-bold text-white drop-shadow-xs">
                          {service.name}
                        </h3>
                      </div>
                    </div>

                    <div className="p-6">
                      <p className="text-sm text-slate-600 leading-relaxed">
                        {service.detailedDesc}
                      </p>

                      <div className="mt-4 p-3 rounded-xl bg-slate-50 border border-slate-100 text-xs text-slate-700">
                        <strong className="text-slate-900 block font-semibold mb-0.5">
                          Enterprise Application:
                        </strong>
                        {service.audience}
                      </div>

                      <div className="mt-4 space-y-1.5 pt-3 border-t border-slate-100">
                        {service.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2 text-xs text-slate-600 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-green-600 shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="p-6 pt-0 border-t border-slate-100 mt-2">
                    <button
                      type="button"
                      onClick={() => scrollToContactWithService(service.name)}
                      className="w-full mt-4 inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-slate-50 hover:bg-green-600 text-slate-700 hover:text-white border border-slate-200 hover:border-green-600 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer group/btn"
                    >
                      <span>Inquire for {service.name}</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 4 SLA Pillars Strip */}
          <div className="mt-14 pt-10 border-t border-slate-200 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200">
              <Clock className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-bold text-slate-900">2h - 4h Lead Time</div>
                <div className="text-xs text-slate-600 mt-0.5">2-hour spot dispatch in Tier-1 metros; 4-hour pan-India guarantee.</div>
              </div>
            </div>
            <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200">
              <ShieldCheck className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-bold text-slate-900">100% Chauffeur Vetting</div>
                <div className="text-xs text-slate-600 mt-0.5">Mandatory police background clearance, drug screening, defensive driving.</div>
              </div>
            </div>
            <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200">
              <FileCheck className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-bold text-slate-900">Zero Paper Workflow</div>
                <div className="text-xs text-slate-600 mt-0.5">GPS timestamps via e-DTR, geofenced passenger OTP start/end, and toll capture.</div>
              </div>
            </div>
            <div className="flex items-start gap-3.5 p-4 rounded-2xl bg-white border border-slate-200">
              <Building className="w-5 h-5 text-green-600 shrink-0 mt-0.5" />
              <div>
                <div className="text-sm font-bold text-slate-900">5% Corporate GST Model</div>
                <div className="text-xs text-slate-600 mt-0.5">Unified monthly consolidated MIS, statutory HSN/SAC codes, e-invoicing.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          STEP 3: CATEGORY / SEGMENT OF VEHICLES OFFERED – HORIZONTAL AND MOVING
          (Cars & SUVs: Economy · Executive · MUV · Premium MUV · Luxury · Electric)
          (Group Transportation: Tempo Travellers · 24-Seater Mini Buses · 36-Seater Buses · 40+ Seater Coaches)
          (Corporate Mobility: Employee Transport · Corporate Rentals · Fleet Management · MICE & Events)
         ========================================================================= */}
      <section id="fleet" className="scroll-mt-24 py-20 bg-[#F4FAF6] border-b border-green-100/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-100 px-3.5 py-1 rounded-full inline-block">
              03. Vehicle Segments (Horizontal &amp; Moving)
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-3 tracking-tight">
              Vehicle Categories &amp; Moving Fleet Segments
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Explore our complete range spanning executive sedans, premium MUVs, group coaches, and corporate employee mobility. Hover over any moving card to inspect specifications.
            </p>
          </div>

          {/* 3 Categories Pills Overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            <div className="p-4 rounded-2xl bg-white border border-green-200 shadow-2xs text-center">
              <span className="text-[11px] font-bold uppercase tracking-wider text-green-700 bg-green-50 px-2.5 py-0.5 rounded-full inline-block mb-1">
                Tier 1
              </span>
              <h4 className="text-base font-bold text-slate-900">Cars &amp; SUVs</h4>
              <p className="text-xs text-slate-600 mt-1">
                Economy • Executive • MUV • Premium MUV • Luxury • Electric
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-green-200 shadow-2xs text-center">
              <span className="text-[11px] font-bold uppercase tracking-wider text-green-700 bg-green-50 px-2.5 py-0.5 rounded-full inline-block mb-1">
                Tier 2
              </span>
              <h4 className="text-base font-bold text-slate-900">Group Transportation</h4>
              <p className="text-xs text-slate-600 mt-1">
                Tempo Travellers • 24-Seater Mini Buses • 36-Seater Buses • 40+ Seater Coaches
              </p>
            </div>
            <div className="p-4 rounded-2xl bg-white border border-green-200 shadow-2xs text-center">
              <span className="text-[11px] font-bold uppercase tracking-wider text-green-700 bg-green-50 px-2.5 py-0.5 rounded-full inline-block mb-1">
                Tier 3
              </span>
              <h4 className="text-base font-bold text-slate-900">Corporate Mobility</h4>
              <p className="text-xs text-slate-600 mt-1">
                Employee Transport • Corporate Rentals • Fleet Management • MICE &amp; Events
              </p>
            </div>
          </div>

          {/* Moving Horizontal Marquee Component */}
          <div className="mb-14">
            <MovingVehicleSegments onSelectSegment={(name) => scrollToContactWithService(name)} />
          </div>

          {/* Interactive Fleet Visualizer & Tariffs */}
          <div className="pt-10 border-t border-green-200/80">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-100 px-3 py-1 rounded-full">
                Detailed Tariff Guide
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Executive Fleet Matrix &amp; Transparent Tariff Guide
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-1">
                Compare models, luggage capacity, in-cabin amenities, and standard 4h/40km, 8h/80km, and outstation pricing structures.
              </p>
            </div>
            <InteractiveFleetVisualizer />
          </div>
        </div>
      </section>

      {/* =========================================================================
          STEP 4: TECHNOLOGY
          (Inde cab – Booking Process – Confirmation – SLA – No Show –
           Chauffeur Details shared well in Advance – Tracking –
           Invoicing (Invoice Screen shot with GPS map and route) – MIS)
         ========================================================================= */}
      <section id="technology" className="scroll-mt-24 py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-100 px-3.5 py-1 rounded-full inline-block">
              04. Technology &amp; Indecab Platform Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-3 tracking-tight">
              Indecab Platform &amp; End-to-End Digital Workflow
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              From instant corporate booking to paperless digital duty slips and GPS breadcrumb invoices — every journey is automated, tracked, and reconciliation-ready.
            </p>
          </div>

          {/* Indecab 8-Stage Digital Workflow Visual Strip */}
          <div className="mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {/* Stage 1 */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-7 h-7 rounded-lg bg-green-600 text-white font-mono font-bold text-xs flex items-center justify-center">
                      01
                    </span>
                    <span className="text-[10px] font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded">
                      Inde cab Cloud
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-1.5">Booking Process</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Corporate travel desks book in seconds via web portal, WhatsApp bot, email, or direct API integration with employee cost-center tagging.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/80 text-[11px] font-semibold text-slate-500">
                  ✓ Self-Service &amp; Desk Booking
                </div>
              </div>

              {/* Stage 2 */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-7 h-7 rounded-lg bg-green-600 text-white font-mono font-bold text-xs flex items-center justify-center">
                      02
                    </span>
                    <span className="text-[10px] font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded">
                      Instant Push
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-1.5">Booking Confirmation</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Automated confirmation sent within seconds to the employee and travel coordinator with unique booking ID, route parameters, and emergency hotline.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/80 text-[11px] font-semibold text-slate-500">
                  ✓ SMS, Email &amp; WhatsApp Alert
                </div>
              </div>

              {/* Stage 3 */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-7 h-7 rounded-lg bg-green-600 text-white font-mono font-bold text-xs flex items-center justify-center">
                      03
                    </span>
                    <span className="text-[10px] font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded">
                      99.4% Punctuality
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-1.5">SLA Commitment</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Guaranteed 2-hour spot dispatch SLA in Tier-1 metros and 4-hour pan-India guarantee with 99.4% contractual on-time arrival benchmark.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/80 text-[11px] font-semibold text-slate-500">
                  ✓ Contractual Service Penalty
                </div>
              </div>

              {/* Stage 4 */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-7 h-7 rounded-lg bg-green-600 text-white font-mono font-bold text-xs flex items-center justify-center">
                      04
                    </span>
                    <span className="text-[10px] font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded">
                      Zero No-Show
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-1.5">No-Show Mitigation</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Chauffeur reports 15 to 30 minutes in advance. If any transit delay is flagged by automated telemetry, our standby buffer vehicle is instantly dispatched.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/80 text-[11px] font-semibold text-slate-500">
                  ✓ 15-30 Min Prior Arrival
                </div>
              </div>

              {/* Stage 5 */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-7 h-7 rounded-lg bg-green-600 text-white font-mono font-bold text-xs flex items-center justify-center">
                      05
                    </span>
                    <span className="text-[10px] font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded">
                      2 Hours Prior
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-1.5">Chauffeur Details in Advance</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Chauffeur photo, name, police-verified badge ID, direct phone number, vehicle registration, and boarding OTP are dispatched 2 hours before trip time.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/80 text-[11px] font-semibold text-slate-500">
                  ✓ Full Driver Identity Profile
                </div>
              </div>

              {/* Stage 6 */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-7 h-7 rounded-lg bg-green-600 text-white font-mono font-bold text-xs flex items-center justify-center">
                      06
                    </span>
                    <span className="text-[10px] font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded">
                      AIS-140 GPS
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-1.5">Live Real-Time Tracking</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Live telemetry link for passenger and transport manager with real-time speed monitoring, geofence deviation detection, and automated arrival alerts.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/80 text-[11px] font-semibold text-slate-500">
                  ✓ Continuous Command Oversight
                </div>
              </div>

              {/* Stage 7 */}
              <div className="p-5 rounded-2xl bg-green-50 border border-green-300 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-7 h-7 rounded-lg bg-green-600 text-white font-mono font-bold text-xs flex items-center justify-center">
                      07
                    </span>
                    <span className="text-[10px] font-bold text-green-800 bg-green-200 px-2 py-0.5 rounded">
                      GPS Map Attached
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-1.5">Automated e-Invoicing</h4>
                  <p className="text-xs text-slate-700 leading-relaxed">
                    Paperless digital duty slip (e-DTR) with start/end OTP verification, electronic toll sync, and an embedded GPS breadcrumb route map snapshot.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-green-200 text-[11px] font-bold text-green-800">
                  ✓ 100% Audit-Ready Invoice
                </div>
              </div>

              {/* Stage 8 */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-7 h-7 rounded-lg bg-green-600 text-white font-mono font-bold text-xs flex items-center justify-center">
                      08
                    </span>
                    <span className="text-[10px] font-bold text-green-700 bg-green-100 px-2 py-0.5 rounded">
                      ERP / SAP Sync
                    </span>
                  </div>
                  <h4 className="text-base font-bold text-slate-900 mb-1.5">Corporate MIS &amp; Analytics</h4>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Consolidated monthly MIS billing broken down by cost center, business unit, city, and vehicle tier, with direct SAP/Oracle export capabilities.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-200/80 text-[11px] font-semibold text-slate-500">
                  ✓ 5% GST Input Tax Credit
                </div>
              </div>
            </div>
          </div>

          {/* Interactive Digital Invoice Screenshot Mockup with GPS Map and Route */}
          <div className="mb-16">
            <div className="text-center max-w-2xl mx-auto mb-6">
              <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-100 px-3 py-1 rounded-full">
                Interactive Invoice &amp; GPS Map Demonstration
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Sample Digital e-Invoice with Route &amp; GPS Polyline
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-1">
                Toggle between the itemized invoice view and the AIS-140 GPS route replay to see how Speedways eliminates billing disputes and guarantees audit compliance.
              </p>
            </div>
            <DigitalInvoicePreview />
          </div>

          {/* Interactive Live Telemetry Simulator */}
          <div className="pt-10 border-t border-slate-200">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-100 px-3 py-1 rounded-full">
                Interactive Platform Simulator
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Live Trip Telemetry &amp; 24×7 Command Dispatch
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-1">
                Simulate trip progression, speed telemetry, geofence monitoring, and instant driver re-assignment in real time.
              </p>
            </div>
            <LiveTelemetrySimulator />
          </div>
        </div>
      </section>

      {/* =========================================================================
          STEP 5: SAFETY
          (Compliance – Driver Verification – ISO Certificates – SLA –
           Documents Validation – SOS – Panic Button – Lady Traveller SLA and Tracking
           Mechanism - 24/7 Command Centre, Incident Report – Replacement process -
           Emergency Response)
         ========================================================================= */}
      <section id="safety" className="scroll-mt-24 py-20 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-100 px-3.5 py-1 rounded-full inline-block">
              05. Safety, Enterprise Compliance &amp; Lady Traveller SLA
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-3 tracking-tight">
              Institutional Safety &amp; 100% Statutory Compliance
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Engineered with 7-point chauffeur verification, ISO systems, in-cab panic buttons, 24×7 command center monitoring, and specialized night safety protocols for women employees.
            </p>
          </div>

          {/* Detailed Lady Traveller SLA & Night Safety Spotlight Card */}
          <div className="mb-16 p-8 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white shadow-2xl border border-slate-800 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7 space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-black uppercase tracking-wider">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  <span>Specialized Lady Traveller Protocol (8:00 PM – 6:00 AM)</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                  Lady Traveller SLA &amp; Real-Time Tracking Mechanism
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Speedways operates an uncompromising duty-of-care protocol for female corporate employees during late-night and early-morning shifts. Every trip adheres to rigorous statutory guidelines and automated tech triggers.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-semibold">First-Pickup / Last-Drop Protection</strong>
                      <span className="text-slate-400 text-[11px]">Female employee is never left alone in vehicle without security personnel.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-semibold">Vetted Security Escort Guard</strong>
                      <span className="text-slate-400 text-[11px]">Mandatory physical security guard deployed for late shift single drops.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-semibold">Live Trip Route Link</strong>
                      <span className="text-slate-400 text-[11px]">Automated live map sharing link sent to family and transport coordinator.</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/10">
                    <CheckCircle2 className="w-4 h-4 text-green-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white block font-semibold">Safe Confirmation Callback</strong>
                      <span className="text-slate-400 text-[11px]">Command center verifies employee safe entry into residence before trip close.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lady Traveller Telemetry Box */}
              <div className="lg:col-span-5 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-xs font-bold text-green-400 flex items-center gap-1.5">
                    <Radio className="w-3.5 h-3.5 animate-pulse" />
                    Command Center Geofence Monitor
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-green-500 text-slate-950 font-black">
                    ACTIVE SENSORS
                  </span>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="flex justify-between items-center p-2.5 rounded-lg bg-black/40">
                    <span className="text-slate-300">In-Cab Physical Panic SOS:</span>
                    <strong className="text-green-400 font-mono">AIS-140 Connected</strong>
                  </div>
                  <div className="flex justify-between items-center p-2.5 rounded-lg bg-black/40">
                    <span className="text-slate-300">Route Deviation Alarm (&gt;200m):</span>
                    <strong className="text-green-400 font-mono">0 Deviations Flagged</strong>
                  </div>
                  <div className="flex justify-between items-center p-2.5 rounded-lg bg-black/40">
                    <span className="text-slate-300">Standby Emergency Response:</span>
                    <strong className="text-green-400 font-mono">&lt; 15 Mins Rapid SLA</strong>
                  </div>
                  <div className="flex justify-between items-center p-2.5 rounded-lg bg-black/40">
                    <span className="text-slate-300">Chauffeur Background Status:</span>
                    <strong className="text-green-400 font-mono">100% Police Cleared</strong>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => scrollToSection("enquiry")}
                  className="w-full py-2.5 rounded-xl bg-green-500 hover:bg-green-600 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Request Night Shift Transport Matrix →
                </button>
              </div>
            </div>
          </div>

          {/* 12 Core Safety & Compliance Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {SAFETY_COMPLIANCE_PILLARS.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md hover:border-green-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xl bg-green-100 text-green-700 flex items-center justify-center">
                      <ShieldCheck className="w-5 h-5 text-green-600" />
                    </div>
                    <span className="text-[10px] font-bold text-green-800 bg-green-100/70 px-2 py-0.5 rounded">
                      ✓ {pillar.badge}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500 font-medium">
                  <span>Pan-India SLA Governance</span>
                  <span className="text-green-600 font-bold">Audit-Ready</span>
                </div>
              </div>
            ))}
          </div>

          {/* Incident Report, 30-min Replacement Process & Emergency Response Strip */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            <div className="p-6 rounded-2xl bg-white border border-green-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center mb-3">
                <AlertTriangle className="w-5 h-5 text-amber-600" />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-1">Incident Report SOP</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Standard operating protocol with 15-minute escalation to enterprise travel admin, automated ticket logging, and comprehensive post-incident analysis report within 12 hours.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-green-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-green-100 text-green-700 flex items-center justify-center mb-3">
                <Clock className="w-5 h-5 text-green-600" />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-1">30-Min Replacement Process SLA</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                Standby buffer vehicles deployed at central metro nodes (Mumbai, BLR, DEL, HYD, MAA, PNQ) ensuring a replacement vehicle is dispatched and on-site within 30 minutes in breakdown cases.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-white border border-green-200 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-red-100 text-red-700 flex items-center justify-center mb-3">
                <LifeBuoy className="w-5 h-5 text-red-600" />
              </div>
              <h4 className="text-base font-bold text-slate-900 mb-1">Emergency Response Team (ERT)</h4>
              <p className="text-xs text-slate-600 leading-relaxed">
                24×7 multi-tier emergency response coordinated with local medical networks, road assistance towing networks, and city police control rooms across all 185+ operating cities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          STEP 6: LEADERSHIP
          (Leadership Team: Nikhil Desai, C K Balram, Srinivas Krishna,
           A S Kumaresh, Sreejit with verified photos and executive dossiers)
         ========================================================================= */}
      <LeadershipSection id="leadership" />

      {/* =========================================================================
          STEP 7: TESTIMONIAL
          (Corporate Client Endorsements, Reviews & Animated Testimonials Marquee)
         ========================================================================= */}
      <section id="testimonials" className="scroll-mt-24 py-20 bg-white border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-100 px-3.5 py-1 rounded-full inline-block">
              07. Client Testimonials &amp; Corporate Endorsements
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-3 tracking-tight">
              Verified Feedback from Enterprise Travel Desks
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Authentic reviews from corporate procurement managers, administration heads, and national mobility directors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {TESTIMONIALS.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50/80 p-6 rounded-2xl border border-slate-200/90 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm text-slate-700 italic leading-relaxed">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="pt-4 mt-4 border-t border-slate-200">
                  <div className="text-sm font-bold text-slate-900">
                    {item.client}
                  </div>
                  <div className="text-xs font-semibold text-green-600">
                    {item.category}
                  </div>
                  {item.designation && (
                    <div className="text-[11px] text-slate-500">
                      {item.designation}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Animated Marquee Success Stories */}
          <div className="mt-14 pt-10 border-t border-slate-200/80">
            <Testimonials hideHeader={true} />
          </div>
        </div>
      </section>

      {/* =========================================================================
          STEP 8: WHY SPEEDWAYS
          (Why Speedways – Corporate differentiators, Traditional Desks vs Speedways,
           4 Critical Empanelment Questions, Evolution Roadmap & FAQs)
         ========================================================================= */}
      <section id="why-us" className="scroll-mt-24 py-20 bg-[#F4FAF6] border-b border-green-100/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-100 px-3.5 py-1 rounded-full inline-block">
              08. Why Speedways — Enterprise Advantage
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-3 tracking-tight">
              Why Corporate Travel Desks Empanel Speedways
            </h2>
            <div className="mt-2.5 inline-block text-xs sm:text-sm font-black uppercase tracking-widest text-green-700 bg-white border border-green-200 px-3 py-1 rounded-xl shadow-xs">
              &ldquo;YOUR JOURNEY STARTS HERE…&rdquo;
            </div>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              How Speedways consistently outperforms fragmented local travel operators, rideshare apps, and traditional rental desks across India.
            </p>
          </div>

          {/* 4 Critical Vendor Empanelment Questions */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {EXECUTIVE_QUESTIONS.map((item, idx) => {
              const icons = [Settings, Network, ShieldCheck, Cpu];
              const IconComp = icons[idx];
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-green-200/80 hover-border-flow card-premium-shadow flex flex-col justify-between group transition-all duration-300"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <SymbolBadge icon={IconComp} size="md" />
                      <span className="text-[11px] font-bold text-green-700 bg-green-50 px-2.5 py-1 rounded-full border border-green-200">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-xs font-extrabold tracking-wider uppercase text-green-700">
                      {item.question}
                    </h3>

                    <h4 className="text-base font-bold text-slate-900 mt-1 mb-2 leading-snug">
                      {item.headline}
                    </h4>

                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100">
                    <button
                      type="button"
                      onClick={() =>
                        scrollToSection(
                          idx === 1
                            ? "about"
                            : idx === 2
                            ? "safety"
                            : idx === 3
                            ? "technology"
                            : "enquiry"
                        )
                      }
                      className="text-xs font-bold text-green-600 hover:text-green-700 flex items-center gap-1 group-hover:translate-x-1 transition-transform cursor-pointer"
                    >
                      <span>Explore Evidence</span> <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Pictographical Comparison: Traditional Desks vs Speedways */}
          <div className="mb-16">
            <PictographicalComparison />
          </div>

          {/* ESG Carbon Reduction & Net-Zero Commute Calculator */}
          <div className="mb-16 bg-white p-8 sm:p-10 rounded-3xl border border-green-200 shadow-md">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-700 border border-green-200 text-xs font-bold uppercase tracking-wider">
                <Leaf className="w-3.5 h-3.5 text-green-600" />
                Enterprise ESG &amp; Net Zero Commute
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Corporate Carbon Reduction &amp; EV Fleet Roadmap
              </h3>
              <p className="text-slate-600 text-xs sm:text-sm mt-1">
                Measure annual CO2 abatement and transition seamlessly to electric mobility with auditable ESG certification.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <div className="flex justify-between text-sm font-bold text-slate-900 mb-2">
                    <span>Number of Daily Fleet Vehicles:</span>
                    <span className="text-green-600 font-extrabold text-base">{vehicleCount} Vehicles</span>
                  </div>
                  <input
                    type="range"
                    min="2"
                    max="100"
                    step="2"
                    value={vehicleCount}
                    onChange={(e) => setVehicleCount(Number(e.target.value))}
                    className="w-full accent-green-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                    <span>2 Cars (Pilot)</span>
                    <span>50 Cars (Mid-size)</span>
                    <span>100 Cars (Enterprise)</span>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-sm font-bold text-slate-900 mb-2">
                    <span>Average Daily KMs per Vehicle:</span>
                    <span className="text-green-600 font-extrabold text-base">{dailyKms} km / day</span>
                  </div>
                  <input
                    type="range"
                    min="80"
                    max="600"
                    step="20"
                    value={dailyKms}
                    onChange={(e) => setDailyKms(Number(e.target.value))}
                    className="w-full accent-green-600 cursor-pointer"
                  />
                  <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                    <span>80 km (City Daily)</span>
                    <span>300 km (Airport + City)</span>
                    <span>600 km (Multi-Shift ETS)</span>
                  </div>
                </div>
              </div>

              {/* Live Metrics Output Cards */}
              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-5 rounded-2xl bg-green-50 border border-green-200 text-center">
                  <Leaf className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-3xl font-black text-green-800">
                    {annualCo2Kg.toLocaleString()}
                  </div>
                  <div className="text-xs font-bold text-slate-700 mt-1">Metric Tons CO2 Saved</div>
                  <div className="text-[10px] text-slate-500">Annual abatement</div>
                </div>

                <div className="p-5 rounded-2xl bg-green-50 border border-green-200 text-center">
                  <BatteryCharging className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <div className="text-3xl font-black text-green-800">
                    {treesEquivalent.toLocaleString()}
                  </div>
                  <div className="text-xs font-bold text-slate-700 mt-1">Trees Equivalent</div>
                  <div className="text-[10px] text-slate-500">Carbon offset equivalence</div>
                </div>

                <div className="p-5 rounded-2xl bg-green-50 border border-green-200 text-center sm:col-span-2">
                  <div className="text-2xl font-black text-slate-900">
                    {litersDieselSaved.toLocaleString()} Liters
                  </div>
                  <div className="text-xs font-bold text-slate-700 mt-0.5">Diesel Consumption Avoided per Year</div>
                  <div className="mt-3 flex items-center justify-center gap-2">
                    <button
                      type="button"
                      onClick={handleDownloadCert}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold text-xs shadow-xs transition-all cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      <span>{certDownloaded ? "Sample Certificate Generated!" : "Download Sample ESG Certificate"}</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Speedways Heritage & Evolution Roadmap (2012 — 2024) */}
          <div className="mb-16 pt-12 border-t border-green-200/80">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-100 px-3 py-1 rounded-full">
                Over a Decade of Trust
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2 tracking-tight">
                Speedways Evolution Roadmap (2012 — 2024)
              </h3>
            </div>
            <EvolutionRoadmap />
          </div>

          {/* Procurement FAQ Accordion */}
          <div className="pt-12 border-t border-green-200/80 max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-100 px-3 py-1 rounded-full">
                Vendor Diligence FAQs
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
                Frequently Asked Vendor Empanelment Questions
              </h3>
            </div>

            <div className="space-y-3.5">
              {HOME_FAQS.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-slate-200/90 rounded-2xl overflow-hidden shadow-2xs transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    className="w-full p-5 text-left font-bold text-slate-900 flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-sm sm:text-base">{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#48B83D] shrink-0 transition-transform duration-200 ${
                        openFaq === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaq === idx && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-3 animate-in fade-in duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          STEP 9: ENQUIRY
          (Enquiry Desk – Corporate RFP Form, 24/7 Command Hotline, Direct Metro Hubs)
         ========================================================================= */}
      <section id="enquiry" className="scroll-mt-24 py-20 bg-[#F0FDF4] border-t border-[#DCFCE7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white text-green-700 border border-green-200 text-xs font-bold uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5 text-green-600" />
              09. Corporate Mobility Enquiry &amp; RFP Desk
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 mt-3 tracking-tight">
              Submit Your Corporate Mobility Enquiry
            </h2>
            <div className="mt-2.5 inline-block text-xs sm:text-sm font-black uppercase tracking-widest text-green-800 bg-green-100 border border-green-200 px-3.5 py-1 rounded-xl">
              &ldquo;YOUR JOURNEY STARTS HERE…&rdquo;
            </div>
            <p className="text-slate-600 text-sm sm:text-base mt-3">
              Request standard corporate rate matrices, custom shift transport routes, or empanel Speedways for single or multi-city corporate operations within 24 to 48 hours.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Left: Interactive RFP Form Container */}
            <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-green-200 shadow-xl">
              {/* Form Navigation Tabs */}
              <div className="flex items-center gap-2 p-1 bg-slate-100 rounded-2xl mb-8">
                <button
                  type="button"
                  onClick={() => setContactTab("spot")}
                  className={`flex-1 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                    contactTab === "spot"
                      ? "bg-white text-slate-900 shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Spot &amp; Chauffeur Drive
                </button>
                <button
                  type="button"
                  onClick={() => setContactTab("ets")}
                  className={`flex-1 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                    contactTab === "ets"
                      ? "bg-white text-slate-900 shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  Employee Transport (ETS)
                </button>
                <button
                  type="button"
                  onClick={() => setContactTab("vip")}
                  className={`flex-1 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer ${
                    contactTab === "vip"
                      ? "bg-white text-slate-900 shadow-xs"
                      : "text-slate-600 hover:text-slate-900"
                  }`}
                >
                  VIP &amp; Board Mobility
                </button>
              </div>

              {formSubmitted ? (
                <div className="text-center py-12 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-black text-slate-900">
                    Corporate Enquiry Submitted Successfully!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto">
                    Thank you, <strong className="text-slate-900">{formData.fullName || "Partner"}</strong>. Our enterprise account director will connect with your travel desk within 2 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({
                        fullName: "",
                        email: "",
                        companyName: "",
                        phone: "",
                        city: "Mumbai",
                        monthlyFleetCount: "5 - 15 Vehicles",
                        message: "",
                      });
                    }}
                    className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6">
                  {/* Service Multi-Select Chips */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                      Select Required Mobility Services:
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {availableServices.map((srv) => (
                        <button
                          key={srv}
                          type="button"
                          onClick={() => toggleService(srv)}
                          className={`px-3 py-1.5 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                            selectedServices.includes(srv)
                              ? "bg-green-600 text-white border-green-600 shadow-2xs"
                              : "bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300"
                          }`}
                        >
                          {selectedServices.includes(srv) && <span className="mr-1">✓</span>}
                          {srv}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Rahul Sharma"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-green-600 focus:ring-2 focus:ring-green-600/20 text-sm text-slate-900 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Official Corporate Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="rahul@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-green-600 focus:ring-2 focus:ring-green-600/20 text-sm text-slate-900 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Company / Organization *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Enterprise Name"
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-green-600 focus:ring-2 focus:ring-green-600/20 text-sm text-slate-900 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Contact Phone *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-green-600 focus:ring-2 focus:ring-green-600/20 text-sm text-slate-900 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Primary Hub City *
                      </label>
                      <select
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-green-600 focus:ring-2 focus:ring-green-600/20 text-sm text-slate-900 outline-none bg-white transition-all"
                      >
                        <option value="Mumbai">Mumbai (Headquarters)</option>
                        <option value="Bengaluru">Bengaluru</option>
                        <option value="Delhi NCR">Delhi NCR</option>
                        <option value="Hyderabad">Hyderabad</option>
                        <option value="Chennai">Chennai</option>
                        <option value="Pune">Pune</option>
                        <option value="Pan-India Multi-City">Pan-India Multi-City</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1.5">
                        Estimated Monthly Fleet Requirement
                      </label>
                      <select
                        value={formData.monthlyFleetCount}
                        onChange={(e) => setFormData({ ...formData, monthlyFleetCount: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-green-600 focus:ring-2 focus:ring-green-600/20 text-sm text-slate-900 outline-none bg-white transition-all"
                      >
                        <option value="1 - 5 Vehicles (Spot / CXO)">1 - 5 Vehicles (Spot / CXO)</option>
                        <option value="5 - 15 Vehicles">5 - 15 Vehicles</option>
                        <option value="15 - 50 Vehicles (ETS / Regional)">15 - 50 Vehicles (ETS / Regional)</option>
                        <option value="50+ Vehicles (Enterprise Pan-India)">50+ Vehicles (Enterprise Pan-India)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1.5">
                      Specific Operational Scope / Notes
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Mention expected shift timings, special route parameters, airport frequency, or specific vehicle preferences..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-green-600 focus:ring-2 focus:ring-green-600/20 text-sm text-slate-900 outline-none transition-all"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-green-600 hover:bg-green-700 active:bg-green-800 text-white font-bold text-sm uppercase tracking-wider shadow-md shadow-green-600/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <span>Processing RFP Submission...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Submit Corporate Enquiry (Fast-Track 24h SLA)</span>
                      </>
                    )}
                  </button>

                  <div className="flex items-center justify-center gap-6 pt-2 text-xs text-slate-500 font-medium text-center">
                    <span className="flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4 text-green-600" />
                      5% GST ITC Compliant
                    </span>
                    <span className="flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      30-Day Corporate Credit Terms
                    </span>
                  </div>
                </form>
              )}
            </div>

            {/* Right: 24/7 Command Hotline & Direct Branch Office Cards */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-6 rounded-3xl bg-slate-900 text-white shadow-xl">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-950 border border-green-800 text-green-400 text-xs font-bold uppercase tracking-wider mb-3">
                  <PhoneCall className="w-3.5 h-3.5" />
                  24×7 Operations Command
                </span>
                <h3 className="text-xl font-black text-white">
                  Immediate Dispatch &amp; SPOC Desk
                </h3>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Connect directly with our centralized duty manager for emergency spot dispatches, airport VIP coordination, or procurement empanelment reviews.
                </p>

                <div className="mt-5 space-y-3">
                  <a
                    href="tel:9820630817"
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 text-white transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-green-500 text-white flex items-center justify-center font-bold">
                        <PhoneCall className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <div className="text-xs text-slate-400">24×7 Direct Operations Hotline</div>
                        <div className="text-sm font-black">+91 98206 30817</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-green-400">Call Now →</span>
                  </a>

                  <a
                    href="mailto:info@speedwaysftm.com"
                    className="flex items-center justify-between p-3.5 rounded-2xl bg-white/10 hover:bg-white/15 border border-white/10 text-white transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-slate-700 text-slate-200 flex items-center justify-center font-bold">
                        @
                      </div>
                      <div className="text-left">
                        <div className="text-xs text-slate-400">Corporate RFP &amp; Empanelment</div>
                        <div className="text-sm font-bold">info@speedwaysftm.com</div>
                      </div>
                    </div>
                    <span className="text-xs font-bold text-slate-300">Email →</span>
                  </a>
                </div>
              </div>

              {/* Metro Direct Branch Cards */}
              <div className="space-y-3 max-h-[500px] overflow-y-auto pr-1">
                {DIRECT_BRANCHES.map((b, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-white border border-green-200 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-1.5">
                        <span className="text-xs font-bold text-slate-900 flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-green-600 shrink-0" />
                          {b.city}
                        </span>
                        <span className="text-[10px] font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded border border-green-200">
                          Direct Hub
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-600 leading-relaxed mb-2">
                        {b.address}
                      </p>
                    </div>

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs">
                      <a
                        href={`tel:${b.phone}`}
                        className="text-green-700 font-bold hover:underline flex items-center gap-1"
                      >
                        <PhoneCall className="w-3 h-3" />
                        <span>{b.phone}</span>
                      </a>
                      <button
                        type="button"
                        onClick={() => handleCopyPhone(b.phone)}
                        className="text-[11px] text-slate-400 hover:text-slate-700 flex items-center gap-1 cursor-pointer"
                      >
                        <Copy className="w-3 h-3" />
                        <span>{copiedPhone === b.phone ? "Copied!" : "Copy"}</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
