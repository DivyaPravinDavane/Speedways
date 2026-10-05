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

      {/* Header Banner */}
      <section className="py-14 md:py-20 border-b border-slate-100 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-4">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {womenSafetyProtocols.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-7 rounded-2xl border border-green-200/80 shadow-2xs hover:shadow-md transition-all flex gap-4 items-start"
              >
                <div className="w-10 h-10 rounded-xl bg-green-100 text-green-700 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-5 h-5 text-green-700" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
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
