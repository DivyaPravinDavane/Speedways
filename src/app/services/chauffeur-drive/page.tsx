import React from "react";
import Link from "next/link";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";
import SymbolBadge from "@/components/SymbolBadge";
import {
  Car,
  Plane,
  Clock,
  Navigation,
  Calendar,
  ShieldCheck,
  CheckCircle2,
  FileText,
  Percent,
  Sparkles,
  ArrowRight,
  PhoneCall,
  DollarSign,
  Fuel,
  CreditCard,
  Luggage,
  Users,
  Compass,
  Check,
} from "lucide-react";

export const metadata = {
  title: "Corporate Car Rental, Airport & Outstation | Speedways",
  description:
    "Enterprise chauffeur-driven mobility solutions: airport transfers, local 4h/8h packages, intercity outstation routes, and long-term fixed leases with 5% GST billing.",
};

export default function ChauffeurDrivePage() {
  const packages = [
    {
      title: "Airport Transfers",
      badge: "Radar Flight-Tracked",
      sub: "Terminal Pickups & Drop-offs",
      icon: Plane,
      features: [
        "Live flight radar delay monitoring",
        "Chauffeur reports 30 mins prior",
        "Terminal meet & greet with placard",
        "Zero wait penalty on flight delay",
        "Automated toll & parking capture",
      ],
      idealFor: "Domestic & international business delegates, leadership travel",
      rateEstimate: "From ₹ 1,450",
    },
    {
      title: "Local Half-Day",
      badge: "4 Hours / 40 KM",
      sub: "City Transit & Client Meetings",
      icon: Clock,
      features: [
        "Dedicated chauffeur & car at disposal",
        "Multiple intermediate corporate stops",
        "Transparent extra km & hr pricing",
        "Digital trip start/end with OTP",
        "Morning or afternoon schedules",
      ],
      idealFor: "Client visits, vendor inspections, local executive errands",
      rateEstimate: "From ₹ 1,450",
    },
    {
      title: "Local Full-Day",
      badge: "8 Hours / 80 KM",
      sub: "All-Day Corporate Disposal",
      icon: Car,
      features: [
        "Full working day vehicle allocation",
        "Flexible citywide itinerary",
        "Indecab GPS digital duty slip",
        "Chauffeur meal allowance included",
        "Seamless extended hour support",
      ],
      idealFor: "Visiting delegations, board committee tours, full-day meetings",
      rateEstimate: "From ₹ 2,400",
    },
    {
      title: "Intercity Outstation",
      badge: "Per-KM Tariff",
      sub: "Cross-City Industrial Travel",
      icon: Navigation,
      features: [
        "Transparent 250 / 300 km daily benchmark",
        "Highway-certified senior chauffeurs",
        "Toll, state taxes & night fees itemized",
        "High-comfort dual AC sedans & MUVs",
        "24×7 GPS Command Centre tracking",
      ],
      idealFor: "Plant visits, multi-branch factory audits, regional tours",
      rateEstimate: "From ₹ 12 / km",
    },
  ];

  const longTermFeatures = [
    {
      title: "Dedicated Vehicle & Chauffeur",
      desc: "Brand new or pristine car assigned exclusively to your CXO with a full-time verified chauffeur.",
    },
    {
      title: "100% Maintenance & Insurance",
      desc: "Comprehensive insurance, scheduled maintenance, tires, and road tax covered by Speedways.",
    },
    {
      title: "Zero-Downtime Replacement",
      desc: "In event of servicing, a replacement vehicle of identical or higher tier is deployed in 2 hours.",
    },
    {
      title: "Consolidated Monthly MIS",
      desc: "Single monthly invoice with 5% GST tax credit documentation, replacing asset depreciation.",
    },
  ];

  return (
    <div className="bg-[#F4FAF6]">
      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-200/80">
        <Breadcrumbs
          items={[
            { label: "Services", href: "/services" },
            { label: "Corporate Car Rental & Outstation" },
          ]}
        />
      </div>

      {/* Header Banner */}
      <section className="py-14 md:py-20 border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-700 border border-green-200 text-xs font-bold uppercase tracking-wider">
                <Car className="w-3.5 h-3.5 text-green-600" />
                Chauffeur-Driven Enterprise Mobility
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                <Sparkles className="w-3 h-3 text-green-600" />
                Spot & Daily Rentals Across 185+ Cities
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Corporate Car Rental, Airport & Outstation Mobility
            </h1>

            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Standardized spot rentals, hourly in-city disposals, and highway intercity routes across 185+ cities. Governed by transparent tariffs, 5% GST billing, and 24×7 command centre oversight.
            </p>

            {/* Quick Live Telemetry Chips */}
            <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-bold text-slate-700">
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200">
                <Plane className="w-4 h-4 text-green-600" />
                <span>Radar Flight Delay Tracking</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200">
                <Clock className="w-4 h-4 text-green-600" />
                <span>4h / 8h Local Disposals</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200">
                <ShieldCheck className="w-4 h-4 text-green-600" />
                <span>Police Verified Chauffeurs</span>
              </div>
              <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200">
                <CreditCard className="w-4 h-4 text-green-600" />
                <span>5% GST Clean ITC</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Showcase: Airport Arrival Chauffeur Hero */}
      <section className="py-12 bg-slate-50/70 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <div className="rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 relative">
                <Image
                  src="/images/airport-chauffeur.jpg"
                  alt="Corporate Chauffeur greeting executive at airport terminal with Toyota Innova Hycross"
                  width={800}
                  height={480}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-slate-200 text-xs font-bold text-slate-900 shadow-md">
                  VIP Terminal Paging & Zero-Wait Transfer Desk
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 space-y-5">
              <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-100 px-3 py-1 rounded-full">
                Executive Airport Arrival
              </span>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
                Punctual, Stress-Free Airport Mobility Nationwide
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Never leave your visiting executives waiting at terminal curbs. Our flight radar system syncs with real-time airport schedules, deploying vetted chauffeurs with personalized paging boards.
              </p>

              <div className="space-y-3 pt-1">
                <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="w-8 h-8 rounded-lg bg-green-100 text-green-700 flex items-center justify-center font-bold text-xs">
                    01
                  </div>
                  <div className="text-xs font-semibold text-slate-800">
                    Chauffeur reports 30 minutes prior to scheduled flight touchdown
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="w-8 h-8 rounded-lg bg-green-100 text-green-700 flex items-center justify-center font-bold text-xs">
                    02
                  </div>
                  <div className="text-xs font-semibold text-slate-800">
                    Live SMS & WhatsApp dispatch with driver name, phone & vehicle registration
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-xl bg-white border border-slate-200 shadow-2xs">
                  <div className="w-8 h-8 rounded-lg bg-green-100 text-green-700 flex items-center justify-center font-bold text-xs">
                    03
                  </div>
                  <div className="text-xs font-semibold text-slate-800">
                    Contactless digital duty slip closure with exact toll & parking upload
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Core Rental Packages Grid (Pictographical Infographics) */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-100 px-3 py-1 rounded-full">
              Structured Tariff Packages
            </span>
            <h2 className="text-3xl font-bold text-slate-900 mt-3 tracking-tight">
              Standardized City & Highway Packages
            </h2>
            <p className="text-slate-600 text-sm mt-2">
              Clear benchmarks engineered to simplify travel desk approvals and eradicate billing disputes.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg, idx) => {
              const IconComp = pkg.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50/70 p-6 rounded-3xl border border-slate-200/90 shadow-2xs hover:shadow-xl hover:border-green-400 hover:bg-white transition-all flex flex-col justify-between group"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <SymbolBadge icon={IconComp} size="sm" />
                      <span className="text-[11px] font-bold text-green-700 bg-green-50 px-2.5 py-1 rounded-full border border-green-200">
                        {pkg.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-slate-900 group-hover:text-green-600 transition-colors">
                      {pkg.title}
                    </h3>
                    <div className="text-xs font-semibold text-slate-500 mb-4">
                      {pkg.sub}
                    </div>

                    <div className="space-y-2 pt-2 border-t border-slate-200/60">
                      {pkg.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-600">
                          <Check className="w-3.5 h-3.5 text-green-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-4 mt-6 border-t border-slate-200/60">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400">Tariff</span>
                      <span className="text-sm font-extrabold text-slate-900">{pkg.rateEstimate}</span>
                    </div>
                    <div className="text-[11px] text-slate-500 bg-white p-2.5 rounded-xl border border-slate-100">
                      <strong className="text-slate-900 block font-semibold">Ideal for:</strong>
                      {pkg.idealFor}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Long-Term Fixed Leases (LTR) Module */}
      <section className="py-20 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#F0FDF4] border border-[#DCFCE7] rounded-3xl p-8 lg:p-12 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-5 space-y-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-green-700 border border-green-200 text-xs font-bold uppercase tracking-wider">
                  Executive Dedicated Mobility
                </span>
                <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
                  Long-Term Rentals & Leases (LTR)
                </h2>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Eliminate capital expenditure and asset depreciation with Speedways Long-Term Lease program. We supply executive vehicles and vetted chauffeurs on 1-year to 3-year enterprise contracts.
                </p>
                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
                  >
                    <span>Request LTR Proposal</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {longTermFeatures.map((feat, idx) => (
                  <div key={idx} className="bg-white p-5 rounded-2xl border border-green-100 shadow-2xs">
                    <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                      <span>{feat.title}</span>
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial & Billing Clarity (5% GST Model) */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-100 px-3 py-1 rounded-full">
              Financial Integrity & Statutory Compliance
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 tracking-tight">
              Commercial Transparency & The 5% GST Model
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Procurement teams appreciate our straightforward rate matrices and zero-surprise billing practices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-slate-50 p-7 rounded-2xl border border-slate-200/90 shadow-2xs hover:bg-white transition-all">
              <SymbolBadge icon={Percent} size="md" className="mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                5% GST Corporate Structure
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Speedways operates on the compliant 5% GST corporate billing structure across India, allowing corporations clean audit trails, predictable budgeting, and direct tax compliance.
              </p>
            </div>

            <div className="bg-slate-50 p-7 rounded-2xl border border-slate-200/90 shadow-2xs hover:bg-white transition-all">
              <SymbolBadge icon={Fuel} size="md" className="mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Transparent Fuel Adjustment Formula
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                For contract accounts, fuel escalation or de-escalation is calculated strictly on government-notified fuel rate changes via a clear mathematical formula agreed in the master service agreement.
              </p>
            </div>

            <div className="bg-slate-50 p-7 rounded-2xl border border-slate-200/90 shadow-2xs hover:bg-white transition-all">
              <SymbolBadge icon={FileText} size="md" className="mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">
                Digital Duty Slip Verification
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Every kilometer logged is GPS-stamped through Indecab software. Toll receipts and parking tickets are electronically uploaded with no manual alterations or inflated invoices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-[#F0FDF4] text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold text-slate-900">
              Need Corporate Rate Cards for Your City?
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Get an instant rate matrix for economy sedans, executive sedans, Innova Crystas, or luxury vehicles tailored to your monthly trip volume.
            </p>
            <div className="pt-2 flex justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold text-sm shadow-md transition-all cursor-pointer"
              >
                <span>Request Rate Card</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/fleet"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-700 font-semibold text-sm border border-slate-200 transition-colors"
              >
                <span>Compare Fleet Tiers</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
