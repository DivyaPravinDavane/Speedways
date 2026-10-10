"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Radio,
  ShieldCheck,
  MapPin,
  Clock,
  PhoneCall,
  CheckCircle2,
  Navigation,
  Car,
  AlertTriangle,
  FileCheck,
  Zap,
  Gauge,
  UserCheck,
} from "lucide-react";

export default function LiveTelemetrySimulator() {
  const [activeRoute, setActiveRoute] = useState<"airport" | "campus" | "highway">("airport");
  const [speed, setSpeed] = useState(54);
  const [etaMins, setEtaMins] = useState(12);
  const [sosActive, setSosActive] = useState(false);
  const [dutySlipSigned, setDutySlipSigned] = useState(false);
  const [vehiclePos, setVehiclePos] = useState(35); // percentage along track

  // Routes configurations
  const routeConfigs = {
    airport: {
      title: "Airport VIP Arrival",
      from: "Mumbai T2 International Terminal",
      to: "BKC Corporate Financial Centre",
      car: "Toyota Innova Hycross Hybrid",
      regNo: "MH 02 EQ 7780",
      driver: "Suresh Verma",
      badge: "Background Verified #PV-9921",
      otp: "8492",
      distance: "8.4 km",
      temp: "21°C",
    },
    campus: {
      title: "Campus ETS Shift Commute",
      from: "Electronic City Gate 3",
      to: "Whitefield Corporate Park",
      car: "Tata Tigor EV Green Fleet",
      regNo: "KA 01 EV 4120",
      driver: "Ramesh Gowda",
      badge: "Background Verified #KA-4412",
      otp: "6319",
      distance: "14.2 km",
      temp: "22°C",
    },
    highway: {
      title: "Intercity Highway Outstation",
      from: "Delhi Aerocity Corporate Hub",
      to: "Cyber City Gurugram",
      car: "Mercedes-Benz E-Class Executive",
      regNo: "DL 1C AC 5590",
      driver: "Vikramjeet Singh",
      badge: "Background Verified #DL-8812",
      otp: "9104",
      distance: "18.6 km",
      temp: "20°C",
    },
  };

  const current = routeConfigs[activeRoute];

  // Subtle speed and position fluctuations
  useEffect(() => {
    const timer = setInterval(() => {
      setSpeed((prev) => {
        const change = Math.floor(Math.random() * 5) - 2;
        return Math.max(38, Math.min(68, prev + change));
      });
      setVehiclePos((prev) => (prev >= 80 ? 25 : prev + 1.5));
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
      {/* Top Console Bar */}
      <div className="bg-slate-900 text-white px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </div>
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-wider text-green-400 flex items-center gap-1.5">
              <span>Enterprise Real-Time Telemetry</span>
              <span className="text-slate-500">{" "}•{" "}</span>
              <span className="text-slate-300">Live GPS Ping (4-second latency)</span>
            </div>
            <div className="text-sm font-bold text-white">
              {current.title} — Active Dispatch Monitor
            </div>
          </div>
        </div>

        {/* Route Selector Tabs */}
        <div className="flex items-center gap-1.5 bg-slate-800 p-1 rounded-xl">
          <button
            onClick={() => {
              setActiveRoute("airport");
              setDutySlipSigned(false);
              setSosActive(false);
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeRoute === "airport"
                ? "bg-green-500 text-white shadow-xs"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Airport VIP
          </button>
          <button
            onClick={() => {
              setActiveRoute("campus");
              setDutySlipSigned(false);
              setSosActive(false);
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeRoute === "campus"
                ? "bg-green-500 text-white shadow-xs"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Campus ETS
          </button>
          <button
            onClick={() => {
              setActiveRoute("highway");
              setDutySlipSigned(false);
              setSosActive(false);
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all ${
              activeRoute === "highway"
                ? "bg-green-500 text-white shadow-xs"
                : "text-slate-400 hover:text-white"
            }`}
          >
            Intercity
          </button>
        </div>
      </div>

      {/* Main Grid: Interactive Map Simulation & Live Telemetry Dials */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-slate-200">
        {/* Left: Map & Route Canvas */}
        <div className="lg:col-span-7 p-6 bg-slate-50 relative flex flex-col justify-between min-h-[380px]">
          {/* Top Route Waypoints */}
          <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-xs space-y-2 z-10">
            <div className="flex items-center gap-2.5 text-xs text-slate-700">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 shrink-0"></span>
              <span className="font-bold text-slate-900">Pickup: </span>
              <span className="truncate">{current.from}</span>
            </div>
            <div className="flex items-center gap-2.5 text-xs text-slate-700 pt-1 border-t border-slate-100">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shrink-0"></span>
              <span className="font-bold text-slate-900">Destination: </span>
              <span className="truncate">{current.to}</span>
            </div>
          </div>

          {/* Graphical Map Canvas with Animated Moving Car */}
          <div className="my-6 relative w-full h-44 bg-slate-100 rounded-2xl border border-slate-200 overflow-hidden flex items-center px-8">
            {/* Grid Pattern Background */}
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  "radial-gradient(#94a3b8 1px, transparent 1px)",
                backgroundSize: "16px 16px",
              }}
            ></div>

            {/* Glowing Track Line */}
            <div className="w-full h-2.5 bg-slate-200 rounded-full relative overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-green-500 to-green-400 rounded-full transition-all duration-700"
                style={{ width: `${vehiclePos}%` }}
              ></div>
            </div>

            {/* Start Beacon */}
            <div className="absolute left-8 flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-green-500 border-2 border-white shadow-md"></div>
              <span className="text-[10px] font-bold text-slate-600 mt-1">Origin</span>
            </div>

            {/* Destination Beacon */}
            <div className="absolute right-8 flex flex-col items-center">
              <div className="w-4 h-4 rounded-full bg-blue-500 border-2 border-white shadow-md"></div>
              <span className="text-[10px] font-bold text-slate-600 mt-1">Drop</span>
            </div>

            {/* Moving Vehicle Beacon */}
            <div
              className="absolute transform -translate-x-1/2 -top-1 transition-all duration-700 flex flex-col items-center z-10"
              style={{ left: `${vehiclePos}%` }}
            >
              <div className="bg-green-600 text-white p-2 rounded-xl shadow-lg border-2 border-white flex items-center gap-1.5 animate-bounce">
                <Car className="w-4 h-4" />
                <span className="text-[10px] font-mono font-bold">{speed} km/h</span>
              </div>
              <div className="w-2.5 h-2.5 bg-green-600 rotate-45 -mt-1"></div>
            </div>

            {/* Geofence Alert Tag */}
            <div className="absolute bottom-3 left-4 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-lg border border-slate-200 text-[10px] font-semibold text-slate-600 flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
              <span>Geofence Corridor Active • 0 Deviation</span>
            </div>
          </div>

          {/* Action Simulation Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-200 z-10">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSosActive(!sosActive)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  sosActive
                    ? "bg-red-600 text-white shadow-md animate-pulse"
                    : "bg-white text-slate-700 border border-slate-200 hover:border-red-300"
                }`}
              >
                <AlertTriangle className="w-3.5 h-3.5" />
                {sosActive ? "SOS Triggered! Command Alerted" : "Test SOS Alarm"}
              </button>

              <button
                onClick={() => setDutySlipSigned(!dutySlipSigned)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                  dutySlipSigned
                    ? "bg-green-600 text-white"
                    : "bg-white text-slate-700 border border-slate-200 hover:border-green-400"
                }`}
              >
                <FileCheck className="w-3.5 h-3.5" />
                {dutySlipSigned ? "Duty Slip Signed ✓" : "Digital Sign Duty Slip"}
              </button>
            </div>

            <span className="text-[11px] font-mono font-semibold text-slate-500">
              Trip ID: SPW-2026-9810
            </span>
          </div>
        </div>

        {/* Right: Driver Profile, Telemetry Dials & Digital Badges */}
        <div className="lg:col-span-5 p-6 bg-white flex flex-col justify-between space-y-6">
          {/* Driver Card */}
          <div className="p-4 rounded-2xl bg-[#F0FDF4] border border-[#DCFCE7] flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-green-500 text-white font-bold text-lg flex items-center justify-center shadow-xs">
                {current.driver.charAt(0)}
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-bold text-slate-900">
                    {current.driver}
                  </span>
                  <span className="text-[10px] font-bold text-green-700 bg-white px-1.5 py-0.5 rounded border border-green-200">
                    4.98 ★
                  </span>
                </div>
                <div className="text-xs text-green-800 font-semibold flex items-center gap-1 mt-0.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-green-600" />
                  <span>{current.badge}</span>
                </div>
              </div>
            </div>

            <a
              href="tel:9820630817"
              className="p-2.5 rounded-xl bg-white border border-green-200 text-green-700 hover:bg-green-100 transition-colors"
              title="Call Chauffeur"
            >
              <PhoneCall className="w-4 h-4" />
            </a>
          </div>

          {/* Vehicle & Verification Metrics Grid */}
          <div className="grid grid-cols-2 gap-3 text-xs">
            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">
                Vehicle Allocated
              </span>
              <span className="font-bold text-slate-900 block mt-0.5 truncate">
                {current.car}
              </span>
              <span className="text-[10px] font-mono text-slate-500">
                {current.regNo}
              </span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">
                Boarding OTP
              </span>
              <span className="text-base font-extrabold font-mono text-green-600 block mt-0.5">
                {current.otp}
              </span>
              <span className="text-[10px] text-green-700 font-semibold">
                OTP Verified ✓
              </span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">
                Live Speed
              </span>
              <span className="text-base font-extrabold text-slate-900 block mt-0.5">
                {speed} <span className="text-xs font-normal text-slate-500">km/h</span>
              </span>
              <span className="text-[10px] text-slate-500">Speed Governor OK</span>
            </div>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
              <span className="text-[10px] uppercase font-bold text-slate-400 block">
                Estimated Arrival (ETA)
              </span>
              <span className="text-base font-extrabold text-green-600 block mt-0.5">
                {etaMins} mins
              </span>
              <span className="text-[10px] text-slate-500">· {current.distance} remaining</span>
            </div>
          </div>

          {/* In-Cabin Comfort & Compliance Checklist */}
          <div className="pt-2 border-t border-slate-100 space-y-1.5 text-xs text-slate-600">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                Air Conditioning Set
              </span>
              <span className="font-bold text-slate-800">{current.temp}</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                Pre-Trip Sanitation & Vacuum
              </span>
              <span className="font-semibold text-green-700">Audit Passed</span>
            </div>

            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-green-600" />
                24×7 Command Centre Tracking
              </span>
              <span className="font-semibold text-green-700">Active Oversight</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
