"use client";

import React, { useState } from "react";
import {
  FileText,
  MapPin,
  CheckCircle2,
  Clock,
  Car,
  QrCode,
  ShieldCheck,
  Download,
  ExternalLink,
  Navigation,
  Sparkles,
} from "lucide-react";

export default function DigitalInvoicePreview() {
  const [activeTab, setActiveTab] = useState<"invoice" | "gpsRoute">("invoice");
  const [isCopied, setIsCopied] = useState(false);

  const handleCopyInvoiceNumber = () => {
    navigator.clipboard.writeText("SW-INV-2024-BOM-88492");
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="bg-white rounded-3xl border border-green-200/90 shadow-xl overflow-hidden">
      {/* Top Header Bar of the Mockup Window */}
      <div className="bg-slate-900 text-white px-5 py-3.5 flex flex-wrap items-center justify-between gap-3 border-b border-slate-800">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-green-500 inline-block" />
          </div>
          <span className="text-xs text-slate-400 font-mono pl-2 border-l border-slate-700">
            portal.speedways.in/invoice/SW-INV-2024-BOM-88492
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex bg-slate-800 p-0.5 rounded-lg text-xs font-semibold">
            <button
              type="button"
              onClick={() => setActiveTab("invoice")}
              className={`px-3 py-1 rounded-md transition-all cursor-pointer ${
                activeTab === "invoice"
                  ? "bg-green-600 text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              e-Invoice &amp; Duty Slip
            </button>
            <button
              type="button"
              onClick={() => setActiveTab("gpsRoute")}
              className={`px-3 py-1 rounded-md transition-all cursor-pointer flex items-center gap-1 ${
                activeTab === "gpsRoute"
                  ? "bg-green-600 text-white"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              <Navigation className="w-3 h-3" />
              <span>GPS Route &amp; Map</span>
            </button>
          </div>
          <button
            type="button"
            onClick={handleCopyInvoiceNumber}
            className="px-2.5 py-1 rounded-lg bg-white/10 hover:bg-white/20 text-slate-300 text-xs font-mono transition-colors"
            title="Copy Invoice ID"
          >
            {isCopied ? "✓ Copied" : "#88492"}
          </button>
        </div>
      </div>

      {/* Main Invoice Preview Card */}
      <div className="p-6 sm:p-8">
        {activeTab === "invoice" ? (
          <div className="space-y-6">
            {/* Invoice Top Branding */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-5 border-b border-slate-200">
              <div className="space-y-1">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/speedways-wordmark.png"
                  alt="Speedways Fleet & Travel Management"
                  className="h-6 w-auto object-contain"
                />
                <div className="text-[11px] text-slate-500 font-medium">
                  SPEEDWAYS FLEET &amp; TRAVEL MANAGEMENT PVT. LTD.
                </div>
                <div className="text-[10px] text-slate-400 font-mono">
                  GSTIN: 27AABCS8891M1Z4 • PAN: AABCS8891M • SAC Code: 996601
                </div>
              </div>

              <div className="text-left sm:text-right space-y-0.5">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-green-100 text-green-800 font-bold text-[10px] uppercase tracking-wider mb-1">
                  100% Tax Compliant (5% GST)
                </span>
                <div className="text-base font-black text-slate-900 font-mono">
                  SW-INV-2024-BOM-88492
                </div>
                <div className="text-xs text-slate-500">Duty Date: 14 Oct 2024 • Dispatch Hub: Mumbai</div>
              </div>
            </div>

            {/* Trip Particulars Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-slate-50 border border-slate-200/80 text-xs">
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Corporate Client</span>
                <strong className="text-slate-900 font-bold">Tata Steel Ltd.</strong>
                <span className="text-[10px] text-slate-500 block">Cost Center: CC-CORP-409</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Passenger</span>
                <strong className="text-slate-900 font-bold">Dr. V. Ramanathan</strong>
                <span className="text-[10px] text-slate-500 block">VP - Global Procurement</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Allocated Vehicle</span>
                <strong className="text-slate-900 font-bold">Toyota Innova Hycross</strong>
                <span className="text-[10px] text-slate-500 font-mono block">MH 01 DX 4920 (Hybrid)</span>
              </div>
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 block">Verified Chauffeur</span>
                <strong className="text-slate-900 font-bold flex items-center gap-1">
                  Rajesh Kumar
                  <CheckCircle2 className="w-3 h-3 text-green-600" />
                </strong>
                <span className="text-[10px] text-green-700 block font-semibold">Police Cleared #MH-PV-8831</span>
              </div>
            </div>

            {/* Digital Duty Slip & GPS Log */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-green-50/60 border border-green-200/80 space-y-3">
                <div className="flex items-center justify-between text-xs font-bold text-green-900 border-b border-green-200/60 pb-2">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-green-700" />
                    e-DTR Trip Telemetry Summary
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-green-200 text-green-800 font-mono">
                    OTP Verified
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-3 text-xs">
                  <div>
                    <span className="text-[10px] text-slate-500 block">Start Reading (OTP #4928)</span>
                    <strong className="text-slate-900 font-mono font-bold block">08:30 AM • 42,100 KM</strong>
                    <span className="text-[10px] text-slate-600">Mumbai Airport T2 VIP Gate</span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-500 block">Close Reading (OTP #7104)</span>
                    <strong className="text-slate-900 font-mono font-bold block">05:45 PM • 42,215 KM</strong>
                    <span className="text-[10px] text-slate-600">BKC Corporate Tower C</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-green-200/60 flex items-center justify-between text-xs text-slate-700 font-semibold">
                  <span>Duration: <strong className="text-slate-900 font-mono">9h 15m</strong></span>
                  <span>Distance: <strong className="text-slate-900 font-mono">115 KM</strong></span>
                  <span className="text-green-700 font-bold">Zero Route Deviation</span>
                </div>
              </div>

              {/* Embedded Route Snapshot */}
              <div
                onClick={() => setActiveTab("gpsRoute")}
                className="relative rounded-2xl overflow-hidden border border-slate-200 bg-slate-900 p-4 text-white cursor-pointer group flex flex-col justify-between"
              >
                <div className="flex items-center justify-between z-10">
                  <span className="text-xs font-bold flex items-center gap-1.5 text-green-400">
                    <Navigation className="w-3.5 h-3.5" />
                    AIS-140 GPS Route Polyline
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded bg-white/10 group-hover:bg-green-600 text-white transition-colors flex items-center gap-1">
                    <span>Enlarge Map</span>
                    <ExternalLink className="w-3 h-3" />
                  </span>
                </div>

                {/* Stylized vector map graphic */}
                <div className="py-4 my-auto">
                  <div className="flex items-center justify-between text-[11px] font-mono text-slate-300">
                    <span className="flex items-center gap-1 text-green-400">
                      <span className="w-2 h-2 rounded-full bg-green-500 animate-ping inline-block" />
                      T2 Airport (08:30)
                    </span>
                    <span className="text-slate-500">•••• WE Highway ••••</span>
                    <span className="text-amber-400">Sea Link (09:15)</span>
                    <span className="text-slate-500">••••</span>
                    <span className="flex items-center gap-1 text-emerald-300">
                      <MapPin className="w-3 h-3 text-red-400" />
                      BKC HQ (17:45)
                    </span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-slate-800 overflow-hidden relative">
                    <div className="h-full bg-gradient-to-r from-green-500 via-amber-400 to-green-600 w-full" />
                  </div>
                </div>

                <div className="flex items-center justify-between text-[10px] text-slate-400 z-10 pt-2 border-t border-slate-800">
                  <span>Average Speed: 42 km/h (No Overspeed)</span>
                  <span className="text-green-400 font-mono">100% Geofence Compliant</span>
                </div>
              </div>
            </div>

            {/* Itemized Commercial Table */}
            <div className="border border-slate-200 rounded-2xl overflow-hidden">
              <table className="w-full text-xs text-left">
                <thead className="bg-slate-100 text-slate-700 uppercase font-bold text-[10px] tracking-wider border-b border-slate-200">
                  <tr>
                    <th className="py-2.5 px-4">Billing Item / Tariff Component</th>
                    <th className="py-2.5 px-4 text-center">Basis</th>
                    <th className="py-2.5 px-4 text-center">Units</th>
                    <th className="py-2.5 px-4 text-right">Rate (₹)</th>
                    <th className="py-2.5 px-4 text-right">Amount (₹)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-800 font-medium">
                  <tr>
                    <td className="py-2.5 px-4">
                      <strong className="block text-slate-900 font-semibold">Base Corporate Package (8 Hrs / 80 KMs)</strong>
                      <span className="text-[10px] text-slate-500">Toyota Innova Hycross • Executive Chauffeur</span>
                    </td>
                    <td className="py-2.5 px-4 text-center">Daily Slab</td>
                    <td className="py-2.5 px-4 text-center">1 Day</td>
                    <td className="py-2.5 px-4 text-right font-mono">2,800.00</td>
                    <td className="py-2.5 px-4 text-right font-mono font-bold">2,800.00</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4">
                      <span>Extra Distance Covered (115 km - 80 km)</span>
                    </td>
                    <td className="py-2.5 px-4 text-center">Per KM</td>
                    <td className="py-2.5 px-4 text-center">35 KM</td>
                    <td className="py-2.5 px-4 text-right font-mono">22.00</td>
                    <td className="py-2.5 px-4 text-right font-mono">770.00</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4">
                      <span>Extra Hours Elapsed (9.25 hrs - 8.00 hrs)</span>
                    </td>
                    <td className="py-2.5 px-4 text-center">Per Hour</td>
                    <td className="py-2.5 px-4 text-center">1.25 Hrs</td>
                    <td className="py-2.5 px-4 text-right font-mono">250.00</td>
                    <td className="py-2.5 px-4 text-right font-mono">312.50</td>
                  </tr>
                  <tr>
                    <td className="py-2.5 px-4">
                      <span className="flex items-center gap-1">
                        Fastag Toll &amp; Parking (Bandra-Worli Sea Link e-Receipt auto-captured)
                      </span>
                    </td>
                    <td className="py-2.5 px-4 text-center">Actuals</td>
                    <td className="py-2.5 px-4 text-center">1 Pass</td>
                    <td className="py-2.5 px-4 text-right font-mono">230.00</td>
                    <td className="py-2.5 px-4 text-right font-mono">230.00</td>
                  </tr>
                </tbody>
                <tfoot className="bg-slate-50 border-t border-slate-200 text-xs">
                  <tr>
                    <td colSpan={3} className="py-2 px-4 text-right text-slate-500 font-medium">
                      Subtotal (Taxable Value):
                    </td>
                    <td colSpan={2} className="py-2 px-4 text-right font-mono font-bold text-slate-900">
                      ₹ 4,112.50
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={3} className="py-1 px-4 text-right text-slate-500">
                      CGST @ 2.5%:
                    </td>
                    <td colSpan={2} className="py-1 px-4 text-right font-mono text-slate-700">
                      ₹ 97.06
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={3} className="py-1 px-4 text-right text-slate-500">
                      SGST @ 2.5%:
                    </td>
                    <td colSpan={2} className="py-1 px-4 text-right font-mono text-slate-700">
                      ₹ 97.06
                    </td>
                  </tr>
                  <tr className="bg-green-50/70 border-t border-green-200">
                    <td colSpan={3} className="py-3 px-4 text-right font-bold text-slate-900">
                      Total Invoice Payable (5% GST ITC Compliant):
                    </td>
                    <td colSpan={2} className="py-3 px-4 text-right font-mono font-black text-green-800 text-sm">
                      ₹ 4,306.62
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>

            {/* Bottom Footer Verification Stamp */}
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200 text-xs text-slate-500">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center text-slate-800 font-mono text-xs border border-slate-300">
                  <QrCode className="w-5 h-5 text-slate-800" />
                </div>
                <div>
                  <div className="font-bold text-slate-800">Govt. e-Invoice IRN Verified</div>
                  <div className="text-[10px] font-mono text-slate-400">
                    IRN: 8a42f6...e190 | Digital Sign: Speedways Cloud System
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-green-100 text-green-800 text-[11px] font-bold">
                  <ShieldCheck className="w-3.5 h-3.5 text-green-700" />
                  Audited &amp; Approved
                </span>
                <span className="text-slate-400 font-mono text-[11px]">ERP/SAP Ready</span>
              </div>
            </div>
          </div>
        ) : (
          /* GPS MAP & ROUTE VIEW */
          <div className="space-y-5">
            <div className="flex items-center justify-between">
              <div>
                <h4 className="text-base font-bold text-slate-900 flex items-center gap-2">
                  <Navigation className="w-4 h-4 text-green-600" />
                  Continuous AIS-140 GPS Route Replay &amp; Telemetry Trace
                </h4>
                <p className="text-xs text-slate-500 mt-0.5">
                  Trip ID: SW-TRIP-74921 • Chauffeur: Rajesh Kumar • Vehicle: MH 01 DX 4920
                </p>
              </div>

              <button
                type="button"
                onClick={() => setActiveTab("invoice")}
                className="px-3 py-1.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-bold transition-colors cursor-pointer"
              >
                ← Back to Invoice
              </button>
            </div>

            {/* Simulated Live Route Map Box */}
            <div className="relative rounded-2xl bg-slate-950 border border-slate-800 p-6 text-white min-h-[340px] flex flex-col justify-between overflow-hidden">
              {/* Background Map Grid Graphic */}
              <div
                className="absolute inset-0 opacity-20 pointer-events-none"
                style={{
                  backgroundImage:
                    "radial-gradient(#22c55e 1px, transparent 1px), radial-gradient(#22c55e 1px, #020617 1px)",
                  backgroundSize: "28px 28px",
                  backgroundPosition: "0 0, 14px 14px",
                }}
              />

              {/* Map Route SVG Illustration */}
              <div className="relative z-10 w-full max-w-2xl mx-auto my-4">
                <svg
                  viewBox="0 0 600 180"
                  className="w-full h-auto drop-shadow-[0_0_12px_rgba(34,197,94,0.4)]"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Road backdrop */}
                  <path
                    d="M 30 140 Q 120 40, 220 100 T 380 70 T 570 40"
                    stroke="#1e293b"
                    strokeWidth="14"
                    strokeLinecap="round"
                  />
                  {/* Active Green Travel Polyline */}
                  <path
                    d="M 30 140 Q 120 40, 220 100 T 380 70 T 570 40"
                    stroke="#22c55e"
                    strokeWidth="4"
                    strokeDasharray="6 4"
                    strokeLinecap="round"
                  />

                  {/* Point 1: Pickup */}
                  <circle cx="30" cy="140" r="8" fill="#22c55e" />
                  <circle cx="30" cy="140" r="14" stroke="#22c55e" strokeWidth="2" opacity="0.6" />
                  <text x="30" y="170" fill="#a7f3d0" fontSize="11" fontFamily="monospace" textAnchor="middle">
                    START: Airport T2 (08:30)
                  </text>

                  {/* Waypoint 1 */}
                  <circle cx="220" cy="100" r="5" fill="#facc15" />
                  <text x="220" y="125" fill="#fef08a" fontSize="10" fontFamily="monospace" textAnchor="middle">
                    WE Highway (48 km/h)
                  </text>

                  {/* Waypoint 2 */}
                  <circle cx="380" cy="70" r="5" fill="#38bdf8" />
                  <text x="380" y="95" fill="#bae6fd" fontSize="10" fontFamily="monospace" textAnchor="middle">
                    Sea Link Toll (Toll Cleared)
                  </text>

                  {/* Point 2: Drop */}
                  <circle cx="570" cy="40" r="8" fill="#ef4444" />
                  <circle cx="570" cy="40" r="14" stroke="#ef4444" strokeWidth="2" opacity="0.6" />
                  <text x="540" y="25" fill="#fecaca" fontSize="11" fontFamily="monospace" textAnchor="middle">
                    DROP: BKC Towers (17:45)
                  </text>
                </svg>
              </div>

              {/* Telemetry Stats Bar */}
              <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-3 p-3.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs">
                <div>
                  <span className="text-[10px] text-slate-400 block">Total GPS Distance</span>
                  <span className="font-mono font-bold text-green-400 text-sm">115.42 KM</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block">Max Speed Recorded</span>
                  <span className="font-mono font-bold text-slate-200 text-sm">62 KM/H (Limit: 80)</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block">Geofence Compliance</span>
                  <span className="font-mono font-bold text-green-400 text-sm">100% On-Track</span>
                </div>
                <div>
                  <span className="text-[10px] text-slate-400 block">SOS / Panic Triggers</span>
                  <span className="font-mono font-bold text-slate-200 text-sm">0 (Normal)</span>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-center justify-between">
              <span>
                💡 Every digital invoice generated through Speedways is permanently attached with this exact GPS breadcrumb trail and toll metadata.
              </span>
              <button
                type="button"
                onClick={() => setActiveTab("invoice")}
                className="text-green-700 font-bold hover:underline shrink-0 ml-4 cursor-pointer"
              >
                View Duty Slip &amp; Cost Breakdown →
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
