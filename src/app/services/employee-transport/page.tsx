import React from "react";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import SymbolBadge from "@/components/SymbolBadge";
import {
  Users,
  ShieldCheck,
  MapPin,
  Clock,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Radio,
  FileCheck,
  TrendingDown,
  ArrowRight,
  PhoneCall,
  Lock,
  Headphones,
  Bus,
} from "lucide-react";

import Image from "next/image";

export const metadata = {
  title: "Employee Transportation Services (ETS) | Speedways",
  description:
    "Turnkey employee commute and shift-based transport management for corporate campuses, IT parks, and manufacturing hubs with dedicated women safety protocols.",
};

export default function EmployeeTransportPage() {
  const etsFeatures = [
    {
      title: "Automated Shift Rostering",
      desc: "Algorithm-based clustering of employee home coordinates to generate optimal routes, reducing travel time by up to 25% and cutting vehicle count.",
      icon: Clock,
    },
    {
      title: "Geofenced Route Tracking",
      desc: "Every vehicle is tracked on active digital maps with automated alerts if a driver deviates from the designated office corridor.",
      icon: MapPin,
    },
    {
      title: "Mobile Boarding OTP",
      desc: "Employees validate entry with a secure OTP code on the driver app, guaranteeing exact attendance records and paperless trip sheets.",
      icon: FileCheck,
    },
    {
      title: "Fleet Scalability & Backup",
      desc: "Access to 4-seater sedans, 6-seater MUVs, 13-seater to 26-seater Tempo Travellers, and 45-seater luxury coaches tailored to shift volume.",
      icon: Bus,
    },
  ];

  const womenSafetyProtocols = [
    {
      title: "First Pick-Up / Last Drop Protocol",
      desc: "A female employee is never the first person to be picked up in an unescorted vehicle before 06:00 AM, nor the last person dropped after 08:00 PM without an escort.",
    },
    {
      title: "Mandatory Security Escort Guard",
      desc: "Deployment of verified security guards inside vehicles carrying female staff during late-night and graveyard shifts (08:00 PM – 06:00 AM).",
    },
    {
      title: "In-Cabin SOS Panic Button",
      desc: "Direct physical emergency push buttons in all ETS fleet vehicles transmitting instant GPS alarms to the 24×7 Command Centre and local police desks.",
    },
    {
      title: "Drop Confirmation Safe Call",
      desc: "Automated or Command Centre tele-executive verification confirming the employee has safely entered their residential premises before the trip is closed.",
    },
  ];

  const adminBenefits = [
    { metric: "22-28%", label: "Average Route Cost Reduction", desc: "Through algorithmic clustering and route consolidation" },
    { metric: "99.8%", label: "Shift On-Time Arrival SLA", desc: "Ensuring zero production or customer support downtime" },
    { metric: "100%", label: "Digital Trip Sheet Reconciliation", desc: "Eliminating manual paper signatures and billing leakages" },
    { metric: "24×7", label: "Dedicated Transport Help Desk", desc: "Immediate resolution for shift change requests and delays" },
  ];

  return (
    <div className="bg-[#F4FAF6]">
      {/* Breadcrumb */}
      <div className="bg-slate-50 border-b border-slate-200/80">
        <Breadcrumbs
          items={[
            { label: "Services", href: "/services" },
            { label: "Employee Transportation (ETS)" },
          ]}
        />
      </div>

      {/* Header Banner with High-Res Fleet Showcase */}
      <section className="py-14 md:py-20 border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-50 text-green-700 border border-green-200 text-xs font-bold uppercase tracking-wider">
                  <Users className="w-3.5 h-3.5 text-green-600" />
                  Campus & Industrial Workforce Transit
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold">
                  <Radio className="w-3 h-3 text-green-600 animate-pulse" />
                  Real-Time Rostering & Geofencing
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Turnkey Employee Transportation Services (ETS)
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
                Safe, punctual, and algorithm-optimized daily commute operations for IT/ITES campuses, banking hubs, BPOs, and manufacturing plants across India.
              </p>

              {/* Quick Live Telemetry Chips */}
              <div className="pt-2 flex flex-wrap items-center gap-3 text-xs font-bold text-slate-700">
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200">
                  <ShieldCheck className="w-4 h-4 text-green-600" />
                  <span>Escort Guard Protocols</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200">
                  <Clock className="w-4 h-4 text-green-600" />
                  <span>99.8% Shift On-Time SLA</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200">
                  <FileCheck className="w-4 h-4 text-green-600" />
                  <span>Contactless Boarding OTP</span>
                </div>
                <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-50 border border-slate-200">
                  <TrendingDown className="w-4 h-4 text-green-600" />
                  <span>22-28% Route Optimization</span>
                </div>
              </div>
            </div>

            {/* Right Showcase Image Card */}
            <div className="lg:col-span-5 relative group">
              <div className="absolute -inset-2 bg-gradient-to-tr from-green-500/20 to-emerald-400/10 rounded-3xl blur-xl opacity-70 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100">
                <Image
                  src="/images/employee-transit.jpg"
                  alt="Speedways Employee Transportation Services bus transit fleet outside tech park campus"
                  width={720}
                  height={480}
                  className="w-full h-[320px] sm:h-[380px] object-cover group-hover:scale-102 transition-transform duration-500"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent pointer-events-none"></div>

                <div className="absolute bottom-4 left-4 right-4 text-white text-xs flex items-center justify-between">
                  <span className="px-3 py-1.5 rounded-lg bg-black/60 backdrop-blur-md border border-white/10 font-semibold">
                    Campus Shuttle & Shift Transit Fleet
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-green-500 text-white font-mono font-bold text-[11px] shadow-xs">
                    99.8% SLA
                  </span>
                </div>
              </div>

              {/* Floating Telemetry Badge */}
              <div className="absolute -bottom-4 -left-3 sm:-left-5 bg-white/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-xl border border-green-200 flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-green-100 text-green-700 flex items-center justify-center shrink-0">
                  <Bus className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Dedicated Fleet Lineup</div>
                  <div className="text-[10px] text-slate-500">Sedans, MUVs & 13-45 Seater Buses</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admin Metrics Block */}
      <section className="py-12 bg-slate-50 border-b border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {adminBenefits.map((b, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-2xs text-center">
                <div className="text-3xl font-extrabold text-green-600">{b.metric}</div>
                <div className="text-sm font-bold text-slate-900 mt-1">{b.label}</div>
                <div className="text-xs text-slate-500 mt-0.5">{b.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Operational Features */}
      <section className="py-20 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-100 px-3 py-1 rounded-full">
              Full Turnkey Transport Desk
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 tracking-tight">
              Smarter Rostering, Fewer Vehicles, Lower Costs
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              We relieve corporate administration and facility teams from daily firefighting by managing shift schedules, dispatch, compliance, and billing reconciliation end-to-end.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {etsFeatures.map((feat, idx) => {
              const IconComp = feat.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50/70 p-6 rounded-2xl border border-slate-200/90 shadow-2xs hover:border-green-400 hover:bg-white transition-all flex flex-col justify-between"
                >
                  <div>
                    <SymbolBadge icon={IconComp} size="sm" className="mb-4" />
                    <h3 className="text-base font-bold text-slate-900 mb-2">
                      {feat.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Women Employee Safety Protocols (Dedicated Deep Module) */}
      <section className="py-20 bg-[#F0FDF4] border-b border-[#DCFCE7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white text-green-700 border border-green-200 text-xs font-bold uppercase tracking-wider">
              Zero-Compromise Security Framework
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mt-3 tracking-tight">
              Mandatory Women Employee Safety Protocols
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Our statutory compliance and safety standards strictly fulfill state government night travel mandates and corporate duty of care guidelines.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {womenSafetyProtocols.map((item, idx) => (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-2xl border border-green-200/80 shadow-2xs hover:shadow-md transition-all flex flex-col justify-between"
                >
                  <div className="flex gap-3.5 items-start">
                    <div className="w-9 h-9 rounded-xl bg-green-100 text-green-700 flex items-center justify-center shrink-0 mt-0.5">
                      <ShieldCheck className="w-5 h-5 text-green-700" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-slate-900 mb-1">
                        {item.title}
                      </h3>
                      <p className="text-xs text-slate-600 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Live Command Center Visual Oversight Card */}
            <div className="lg:col-span-5 bg-white rounded-3xl border-2 border-green-200/90 overflow-hidden shadow-lg p-2 group">
              <div className="relative rounded-2xl overflow-hidden h-60 sm:h-64 bg-slate-100">
                <Image
                  src="/images/command-center.jpg"
                  alt="24x7 Operations Command Centre Telemetry Desk monitoring female employee night drops"
                  fill
                  className="object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-900/20 to-transparent pointer-events-none" />
                <div className="absolute top-3 left-3 bg-white/95 backdrop-blur-md px-3 py-1 rounded-lg border border-slate-200 text-[11px] font-bold text-slate-900 shadow-xs flex items-center gap-1.5">
                  <Radio className="w-3.5 h-3.5 text-green-600 animate-pulse" />
                  <span>24×7 Central Ops Monitoring</span>
                </div>
                <div className="absolute bottom-3 left-3 right-3 text-white">
                  <div className="text-xs font-bold">Mandatory Safe Drop Tele-Verification</div>
                  <div className="text-[11px] text-slate-300">Continuous GPS oversight until employee enters home</div>
                </div>
              </div>
              <div className="p-4 bg-green-50/50 rounded-2xl mt-2 flex items-center justify-between text-xs">
                <span className="font-bold text-green-800">100% Escort Guard Compliance</span>
                <span className="text-[11px] font-mono font-bold text-slate-600">ZERO TOLERANCE SLA</span>
              </div>
            </div>
          </div>

          <div className="mt-8 p-5 bg-white rounded-2xl border border-green-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-sm text-slate-800 font-semibold">
              <Headphones className="w-5 h-5 text-green-600 shrink-0" />
              <span>Have specific shift timing or security escort requirements?</span>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold text-xs uppercase tracking-wider transition-colors shrink-0"
            >
              <span>Consult ETS Specialist</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Box */}
      <section className="py-16 bg-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto space-y-4">
            <h2 className="text-3xl font-bold text-slate-900">
              Request an ETS Route Feasibility Audit
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Share your shift roster coordinates and let our algorithms demonstrate route optimization and cost savings before you sign.
            </p>
            <div className="pt-2 flex justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold text-sm shadow-md transition-all"
              >
                <span>Request ETS Audit</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/technology"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold text-sm border border-slate-200 transition-colors"
              >
                <span>See Tracking Tech</span>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
