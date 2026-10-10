"use client";

import React from "react";
import { Check, X, Shield, Clock, FileText, Radio, Headphones, Award } from "lucide-react";

export default function PictographicalComparison() {
  const comparisonItems = [
    {
      metric: "Chauffeur Verification",
      icon: Shield,
      traditional: "Self-declared or unknown local drivers with no formal police audit",
      speedways: "Documented police verification, biometric background checks & trained in corporate service standards",
    },
    {
      metric: "Duty Slip & Billing",
      icon: FileText,
      traditional: "Manual paper logbooks, illegible handwriting, inflated KM disputes",
      speedways: "Contactless digital duty slip, GPS timestamps, zero-dispute ERP MIS",
    },
    {
      metric: "On-Time Fulfillment",
      icon: Clock,
      traditional: "Frequent delays, last-minute cancellations, no driver dispatch buffer",
      speedways: "99.8% On-time SLA, chauffeur reporting confirmation sent 90 minutes before scheduled pickup",
    },
    {
      metric: "Live Telemetry & Safety",
      icon: Radio,
      traditional: "No central tracking, zero emergency SOS protocol for female staff",
      speedways: "Continuous 24×7 GPS monitoring, geofence deviation alarms & panic button",
    },
    {
      metric: "Corporate Tax Credit",
      icon: Award,
      traditional: "Unorganized vendors, unregistered bills, lost GST input tax credits",
      speedways: "Statutory 5% GST corporate billing model with full invoice audit traceability",
    },
  ];

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
      <div className="p-6 sm:p-8 bg-slate-50 border-b border-slate-200 text-center max-w-2xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-100 px-3 py-1 rounded-full">
          The Enterprise Advantage
        </span>
        <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-2">
          Traditional Taxi Desks vs. Speedways Platform
        </h3>
        <p className="text-xs sm:text-sm text-slate-500 mt-1">
          Why procurement heads and admin managers migrate to our unified corporate governance.
        </p>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="border-b border-slate-200 bg-white">
              <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-slate-400 w-1/4">
                Operational Factor
              </th>
              <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-red-600 bg-red-50/50 w-3/8">
                ✕ Traditional Local Rental Desks
              </th>
              <th className="py-4 px-6 text-xs font-bold uppercase tracking-wider text-green-700 bg-green-50/70 w-3/8">
                ✓ Speedways Enterprise Platform
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {comparisonItems.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <tr key={idx} className="hover:bg-slate-50/60 transition-colors">
                  <td className="py-4 px-6 font-bold text-slate-900 flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center shrink-0">
                      <IconComp className="w-4 h-4 text-green-600" />
                    </div>
                    <span>{item.metric}</span>
                  </td>
                  <td className="py-4 px-6 text-xs text-slate-500 bg-red-50/20">
                    <div className="flex items-start gap-2">
                      <X className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                      <span>{item.traditional}</span>
                    </div>
                  </td>
                  <td className="py-4 px-6 text-xs font-medium text-slate-800 bg-green-50/30">
                    <div className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                      <span>{item.speedways}</span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
