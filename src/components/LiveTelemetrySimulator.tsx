"use client";

import React, { useState, useEffect, useRef } from "react";
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
  Compass,
  Layers,
  Wifi,
  Satellite,
} from "lucide-react";

export default function LiveTelemetrySimulator() {
  const [activeRoute, setActiveRoute] = useState<"airport" | "campus" | "highway">("airport");
  const [speed, setSpeed] = useState(52);
  const [etaMins, setEtaMins] = useState(12);
  const [sosActive, setSosActive] = useState(false);
  const [dutySlipSigned, setDutySlipSigned] = useState(false);
  const [vehiclePos, setVehiclePos] = useState(38); // percentage along track (0 - 100)
  const [pathTotalLength, setPathTotalLength] = useState(620);
  const [carCoord, setCarCoord] = useState<{ x: number; y: number; angle: number }>({
    x: 220,
    y: 85,
    angle: 0,
  });

  const pathRef = useRef<SVGPathElement>(null);

  // High-fidelity route profiles with authentic city geography and vector paths
  const routeConfigs = {
    airport: {
      title: "Airport VIP Arrival",
      badgeText: "VVIP Terminal Protocol",
      from: "Mumbai T2 International Terminal (VIP Gate 4)",
      to: "BKC Corporate Financial Centre (Tower C)",
      car: "Toyota Innova Hycross Hybrid",
      regNo: "MH 02 EQ 7780",
      driver: "Suresh Verma",
      badge: "Police Verified #PV-9921",
      otp: "8492",
      distance: "8.4 km",
      temp: "21°C",
      gpsCoords: "19.0896° N, 72.8656° E",
      highwayName: "Western Express Highway • BKC Flyover Corridor",
      speedLimit: "70 km/h",
      trafficStatus: "Smooth Corridor (Avg 48 km/h)",
      pathD: "M 48 195 C 110 195, 140 100, 220 85 C 310 70, 360 175, 440 165 C 495 160, 525 110, 580 85",
      originLabel: "T2 Terminal (VIP Ramp)",
      dropLabel: "BKC Financial Centre",
      waypoints: [
        { x: 220, y: 85, label: "WE Highway Express", status: "49 km/h (Clear)" },
        { x: 440, y: 165, label: "BKC Connector / Sea Link", status: "FastTag Cleared ✓" },
      ],
      waterbody: "M 0 170 C 120 180, 260 210, 390 230 C 470 240, 560 255, 640 260 L 640 260 L 0 260 Z",
    },
    campus: {
      title: "Campus ETS Shift Commute",
      badgeText: "Safe Commute SLA",
      from: "Electronic City Tech Zone Gate 3",
      to: "Whitefield Corporate SEZ Park",
      car: "Tata Tigor EV Green Fleet",
      regNo: "KA 01 EV 4120",
      driver: "Ramesh Gowda",
      badge: "Police Verified #KA-4412",
      otp: "6319",
      distance: "14.2 km",
      temp: "22°C",
      gpsCoords: "12.8452° N, 77.6602° E",
      highwayName: "Hosur Elevated Tollway • Outer Ring Road",
      speedLimit: "60 km/h",
      trafficStatus: "Optimized Tech Corridor",
      pathD: "M 48 70 C 130 65, 160 185, 250 190 C 330 195, 370 95, 450 105 C 500 110, 530 170, 580 175",
      originLabel: "E-City Campus Gate 3",
      dropLabel: "Whitefield SEZ Hub",
      waypoints: [
        { x: 250, y: 190, label: "Elevated Expressway", status: "52 km/h (Clear)" },
        { x: 450, y: 105, label: "Silk Board Flyover", status: "Pass Cleared ✓" },
      ],
      waterbody: "M 180 0 C 210 50, 240 100, 220 160 C 200 210, 180 260, 170 260 L 220 260 C 240 210, 270 140, 250 80 C 240 40, 230 0, 220 0 Z",
    },
    highway: {
      title: "Intercity Highway Outstation",
      badgeText: "Long-Haul SLA Guaranteed",
      from: "Delhi Aerocity Corporate Hub",
      to: "Cyber City Gurugram Gateway",
      car: "Mercedes-Benz E-Class Executive",
      regNo: "DL 1C AC 5590",
      driver: "Vikramjeet Singh",
      badge: "Police Verified #DL-8812",
      otp: "9104",
      distance: "18.6 km",
      temp: "20°C",
      gpsCoords: "28.5562° N, 77.1200° E",
      highwayName: "NH-48 Delhi-Gurgaon Access Expressway",
      speedLimit: "90 km/h",
      trafficStatus: "Expressway Free Flow",
      pathD: "M 48 140 C 130 130, 180 70, 270 75 C 360 80, 400 170, 480 165 C 515 160, 545 135, 580 130",
      originLabel: "Delhi Aerocity Hub",
      dropLabel: "DLF Cyber City",
      waypoints: [
        { x: 270, y: 75, label: "Rajokri / NH-48 Flyover", status: "62 km/h (Clear)" },
        { x: 480, y: 165, label: "Sirhaul Toll Plaza", status: "FastTag Cleared ✓" },
      ],
      waterbody: "M 0 0 C 120 30, 240 40, 360 20 C 460 5, 550 0, 640 0 L 640 30 C 530 40, 420 50, 300 40 C 180 30, 80 20, 0 15 Z",
    },
  };

  const current = routeConfigs[activeRoute];

  // Measure path total length on mount or route switch
  useEffect(() => {
    if (pathRef.current) {
      try {
        const len = pathRef.current.getTotalLength();
        if (len > 0) {
          setPathTotalLength(len);
        }
      } catch (e) {
        // Fallback for SSR or non-rendered element
      }
    }
  }, [activeRoute]);

  // Compute live vehicle coordinates and heading angle along SVG curve
  useEffect(() => {
    if (pathRef.current) {
      try {
        const total = pathRef.current.getTotalLength() || pathTotalLength;
        const currentDist = Math.max(0, Math.min(total, (vehiclePos / 100) * total));
        const pt = pathRef.current.getPointAtLength(currentDist);
        const lookAhead = Math.min(total, currentDist + 3);
        const ptAhead = pathRef.current.getPointAtLength(lookAhead);
        const angle = Math.atan2(ptAhead.y - pt.y, ptAhead.x - pt.x) * (180 / Math.PI);

        setCarCoord({
          x: Math.round(pt.x * 10) / 10,
          y: Math.round(pt.y * 10) / 10,
          angle: Math.round(angle),
        });
      } catch (e) {
        // Fallback
      }
    }
  }, [vehiclePos, activeRoute, pathTotalLength]);

  // Subtle speed and position fluctuations simulating real GPS feed
  useEffect(() => {
    const timer = setInterval(() => {
      setSpeed((prev) => {
        const change = Math.floor(Math.random() * 5) - 2;
        return Math.max(42, Math.min(65, prev + change));
      });
      setVehiclePos((prev) => (prev >= 88 ? 22 : prev + 1.4));
    }, 1800);
    return () => clearInterval(timer);
  }, []);

  // Calculate dash offset for traveled path (green polyline following the car)
  const traveledOffset = pathTotalLength * (1 - vehiclePos / 100);

  return (
    <div className="bg-white rounded-3xl border border-slate-200/90 shadow-xl overflow-hidden">
      {/* Top Console Bar in Light Theme */}
      <div className="bg-gradient-to-r from-slate-100 via-slate-50 to-slate-100 border-b border-slate-200/90 px-5 sm:px-6 py-4 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="relative flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-green-600 shadow-[0_0_8px_rgba(22,163,74,0.6)]"></span>
          </div>
          <div>
            <div className="text-xs font-mono font-bold uppercase tracking-wider flex items-center gap-1.5 flex-wrap">
              <span className="text-green-700">AIS-140 Enterprise Telemetry</span>
              <span className="text-slate-400">•</span>
              <span className="text-slate-600 font-medium">Live GPS Ping (4s Latency)</span>
              <span className="text-slate-400">•</span>
              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-green-100 text-green-800 border border-green-200">
                {current.badgeText}
              </span>
            </div>
            <div className="text-sm font-extrabold text-slate-900 mt-0.5">
              {current.title} — 24×7 Command Center Active Dispatch
            </div>
          </div>
        </div>

        {/* Route Selector Tabs in Light Theme */}
        <div className="flex items-center gap-1.5 p-1 rounded-xl bg-white border border-slate-200 shadow-2xs">
          <button
            onClick={() => {
              setActiveRoute("airport");
              setDutySlipSigned(false);
              setSosActive(false);
              setVehiclePos(38);
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeRoute === "airport"
                ? "bg-green-600 text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
            }`}
          >
            Airport VIP
          </button>
          <button
            onClick={() => {
              setActiveRoute("campus");
              setDutySlipSigned(false);
              setSosActive(false);
              setVehiclePos(42);
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeRoute === "campus"
                ? "bg-green-600 text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
            }`}
          >
            Campus ETS
          </button>
          <button
            onClick={() => {
              setActiveRoute("highway");
              setDutySlipSigned(false);
              setSosActive(false);
              setVehiclePos(35);
            }}
            className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${
              activeRoute === "highway"
                ? "bg-green-600 text-white shadow-xs"
                : "text-slate-600 hover:text-slate-900 hover:bg-slate-50"
            }`}
          >
            Intercity
          </button>
        </div>
      </div>

      {/* Main Grid: Light Vector Map Illustration & Live Telemetry Dials */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border-b border-slate-200">
        {/* Left: Pure Light Vector GPS Navigation Map Display */}
        <div className="lg:col-span-7 p-5 sm:p-6 bg-[#F8FAFC] text-slate-800 border-r border-slate-200/90 relative flex flex-col justify-between min-h-[460px] overflow-hidden">
          {/* Ambient Light Accents */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-green-100/40 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-100/30 rounded-full blur-3xl pointer-events-none" />

          {/* Top Route Address Badges & Live Status */}
          <div className="relative z-10 p-3.5 rounded-2xl bg-white border border-slate-200/90 shadow-xs space-y-2">
            <div className="flex items-center justify-between text-xs border-b border-slate-100 pb-2">
              <span className="font-mono text-[11px] text-slate-600 flex items-center gap-1.5">
                <Satellite className="w-3.5 h-3.5 text-green-600 animate-pulse" />
                <span>GPS Lock: 14 Satellites</span>
                <span className="text-slate-300">•</span>
                <span className="text-green-700 font-bold">{current.gpsCoords}</span>
              </span>
              <span className="text-[10px] font-bold font-mono px-2 py-0.5 rounded border bg-green-50 border-green-200 text-green-800 flex items-center gap-1">
                <ShieldCheck className="w-3 h-3 text-green-600" />
                AIS-140 Governed
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 shrink-0 shadow-[0_0_6px_rgba(16,185,129,0.8)]" />
                <span className="text-[11px] text-slate-500">Pickup:</span>
                <span className="font-bold text-slate-900 truncate text-[11px]">{current.from}</span>
              </div>
              <div className="flex items-center gap-2 sm:border-l sm:border-slate-200 sm:pl-2">
                <span className="w-2.5 h-2.5 rounded-full bg-blue-500 shrink-0 shadow-[0_0_6px_rgba(59,130,246,0.8)]" />
                <span className="text-[11px] text-slate-500">Drop:</span>
                <span className="font-bold text-slate-900 truncate text-[11px]">{current.to}</span>
              </div>
            </div>
          </div>

          {/* LIGHT THEME VECTOR CITY MAP & CURVED ROAD GPS CANVAS */}
          <div className="my-4 relative w-full h-[240px] sm:h-[260px] bg-[#F1F5F9] rounded-2xl border border-slate-200/90 shadow-inner overflow-hidden flex items-center justify-center">
            {/* GIS City Grid Pattern Background */}
            <div
              className="absolute inset-0 opacity-35 pointer-events-none"
              style={{
                backgroundImage: "radial-gradient(#94A3B8 1px, transparent 1px)",
                backgroundSize: "26px 26px",
                backgroundPosition: "0 0, 13px 13px",
              }}
            />

            {/* Subtle Map Coordinates & Scale Overlay */}
            <div className="absolute top-2.5 left-3 text-[10px] font-mono pointer-events-none flex items-center gap-2 z-10 text-slate-500">
              <span className="text-green-700 font-bold">LAT {current.gpsCoords.split(",")[0]}</span>
              <span className="text-slate-300">|</span>
              <span className="text-slate-600 font-medium">CORRIDOR 04</span>
            </div>

            <div className="absolute top-2.5 right-3 text-[10px] font-mono pointer-events-none flex items-center gap-2 z-10 px-2 py-0.5 rounded-md border bg-white/95 border-slate-200 text-slate-700 shadow-2xs">
              <Compass className="w-3.5 h-3.5 text-green-600" />
              <span className="font-semibold">NORTH 042°</span>
              <span className="text-slate-300">•</span>
              <span className="text-slate-500">SCALE 1:25000</span>
            </div>

            {/* Master Vector Navigation Map SVG in Light Theme */}
            <svg
              viewBox="0 0 640 260"
              className="w-full h-full preserve-3d"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                {/* Glowing Green Polyline Gradient */}
                <linearGradient id="routeTrailGradLight" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#16A34A" stopOpacity="0.85" />
                  <stop offset="60%" stopColor="#22C55E" stopOpacity="1" />
                  <stop offset="100%" stopColor="#4ADE80" stopOpacity="1" />
                </linearGradient>

                {/* Headlight Beam Cone Gradient */}
                <linearGradient id="headlightBeamLight" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#FACC15" stopOpacity="0.85" />
                  <stop offset="50%" stopColor="#FEF08A" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#FEF08A" stopOpacity="0" />
                </linearGradient>

                {/* Road Casing Shadow Filter */}
                <filter id="roadGlowLight" x="-10%" y="-10%" width="120%" height="120%">
                  <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#000000" floodOpacity="0.15" />
                </filter>

                {/* Active Vehicle Pulse Glow */}
                <filter id="carGlowLight" x="-30%" y="-30%" width="160%" height="160%">
                  <feDropShadow dx="0" dy="1" stdDeviation="4" floodColor="#15803D" floodOpacity="0.3" />
                </filter>
              </defs>

              {/* City Waterway / Coastal Bay Contour (Soft Pastel Blue) */}
              <path
                d={current.waterbody}
                fill="#E0F2FE"
                fillOpacity="0.85"
                stroke="#BAE6FD"
                strokeWidth="1.5"
                strokeOpacity="0.9"
              />

              {/* City Block Outlines & District Zones */}
              <g
                opacity="0.75"
                stroke="#E2E8F0"
                strokeWidth="1"
                fill="#FFFFFF"
                fillOpacity="0.85"
              >
                <rect x="30" y="25" width="80" height="50" rx="4" />
                <rect x="130" y="20" width="70" height="40" rx="4" />
                <rect x="230" y="15" width="110" height="45" rx="4" />
                <rect x="360" y="20" width="90" height="55" rx="4" />
                <rect x="470" y="25" width="120" height="45" rx="4" />

                <rect x="70" y="195" width="100" height="45" rx="4" />
                <rect x="260" y="195" width="90" height="45" rx="4" />
                <rect x="370" y="195" width="110" height="45" rx="4" />
                <rect x="500" y="170" width="100" height="60" rx="4" />
              </g>

              {/* Green Park / Recreation Zones */}
              <g fill="#DCFCE7" fillOpacity="0.75" stroke="#BBF7D0" strokeWidth="1">
                <rect x="370" y="20" width="90" height="55" rx="4" />
                <rect x="70" y="195" width="100" height="45" rx="4" />
              </g>

              {/* Secondary Cross-City Streets (Light Gray Grid) */}
              <g stroke="#CBD5E1" strokeWidth="2" strokeOpacity="0.6">
                <line x1="0" y1="90" x2="640" y2="90" strokeDasharray="5 5" />
                <line x1="0" y1="165" x2="640" y2="165" strokeDasharray="5 5" />
                <line x1="160" y1="0" x2="160" y2="260" strokeDasharray="5 5" />
                <line x1="320" y1="0" x2="320" y2="260" strokeDasharray="5 5" />
                <line x1="480" y1="0" x2="480" y2="260" strokeDasharray="5 5" />
              </g>

              {/* GEOFENCE SAFETY CORRIDOR BUFFER (Fresh Light Green Ribbon) */}
              <path
                d={current.pathD}
                fill="none"
                stroke="#16A34A"
                strokeWidth="36"
                strokeOpacity="0.14"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d={current.pathD}
                fill="none"
                stroke="#16A34A"
                strokeWidth="1"
                strokeDasharray="4 4"
                strokeOpacity="0.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* MAIN HIGHWAY ASPHALT CASING */}
              <path
                d={current.pathD}
                fill="none"
                stroke="#CBD5E1"
                strokeWidth="18"
                strokeLinecap="round"
                strokeLinejoin="round"
                filter="url(#roadGlowLight)"
              />
              <path
                d={current.pathD}
                fill="none"
                stroke="#334155"
                strokeWidth="14"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Ahead Planned Route Polyline (Dashed Road Surface) */}
              <path
                ref={pathRef}
                d={current.pathD}
                fill="none"
                stroke="#94A3B8"
                strokeWidth="2"
                strokeDasharray="6 6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* LIVE TRAVELED TELEMETRY BREADCRUMB TRAIL (Vibrant Green Trail) */}
              <path
                d={current.pathD}
                fill="none"
                stroke="url(#routeTrailGradLight)"
                strokeWidth="4.5"
                strokeDasharray={`${pathTotalLength} ${pathTotalLength}`}
                strokeDashoffset={traveledOffset}
                strokeLinecap="round"
                strokeLinejoin="round"
                className="transition-all duration-700 ease-out"
              />

              {/* INTERMEDIATE WAYPOINTS & FLYOVERS */}
              {current.waypoints.map((wp, idx) => (
                <g key={idx} transform={`translate(${wp.x}, ${wp.y})`}>
                  <circle r="4" fill="#0284C7" stroke="#FFFFFF" strokeWidth="1.5" />
                  <circle r="8" fill="none" stroke="#0284C7" strokeWidth="1" opacity="0.4" />
                  {/* Waypoint Label Pill */}
                  <g transform="translate(0, -12)">
                    <rect
                      x="-45"
                      y="-12"
                      width="90"
                      height="14"
                      rx="3"
                      fill="#FFFFFF"
                      fillOpacity="0.98"
                      stroke="#CBD5E1"
                      strokeWidth="1"
                      filter="url(#roadGlowLight)"
                    />
                    <text
                      x="0"
                      y="-2"
                      fill="#0F172A"
                      fontSize="7.5"
                      fontFamily="sans-serif"
                      fontWeight="bold"
                      textAnchor="middle"
                    >
                      {wp.label}
                    </text>
                  </g>
                </g>
              ))}

              {/* ORIGIN BEACON (Start Location) */}
              <g transform="translate(48, 195)">
                <circle r="14" fill="#16A34A" fillOpacity="0.2" className="animate-ping" />
                <circle r="7" fill="#16A34A" stroke="#FFFFFF" strokeWidth="2.5" />
                {/* Origin Label Tag */}
                <g transform="translate(0, 20)">
                  <rect
                    x="-45"
                    y="-10"
                    width="90"
                    height="16"
                    rx="4"
                    fill="#FFFFFF"
                    stroke="#16A34A"
                    strokeWidth="1.2"
                    filter="url(#roadGlowLight)"
                  />
                  <text
                    x="0"
                    y="2"
                    fill="#15803D"
                    fontSize="8"
                    fontFamily="sans-serif"
                    fontWeight="bold"
                    textAnchor="middle"
                  >
                    START: {current.originLabel}
                  </text>
                </g>
              </g>

              {/* DESTINATION BEACON (Drop Location) */}
              <g transform="translate(580, 85)">
                <circle r="14" fill="#2563EB" fillOpacity="0.2" className="animate-ping" />
                <circle r="7" fill="#2563EB" stroke="#FFFFFF" strokeWidth="2.5" />
                {/* Destination Label Tag */}
                <g transform="translate(0, 20)">
                  <rect
                    x="-50"
                    y="-10"
                    width="100"
                    height="16"
                    rx="4"
                    fill="#FFFFFF"
                    stroke="#2563EB"
                    strokeWidth="1.2"
                    filter="url(#roadGlowLight)"
                  />
                  <text
                    x="0"
                    y="2"
                    fill="#1D4ED8"
                    fontSize="8"
                    fontFamily="sans-serif"
                    fontWeight="bold"
                    textAnchor="middle"
                  >
                    DROP: {current.dropLabel}
                  </text>
                </g>
              </g>

              {/* DYNAMIC MOVING VEHICLE MARKER ALONG CURVED PATH */}
              <g
                transform={`translate(${carCoord.x}, ${carCoord.y})`}
                className="transition-transform duration-700 ease-out"
              >
                {/* SOS Emergency Alarm Radar Waves */}
                {sosActive && (
                  <g>
                    <circle r="28" fill="#EF4444" fillOpacity="0.3" className="animate-ping" />
                    <circle
                      r="44"
                      fill="#DC2626"
                      fillOpacity="0.2"
                      className="animate-ping"
                      style={{ animationDuration: "1.2s" }}
                    />
                  </g>
                )}

                {/* Normal Telemetry Pulse Radar */}
                {!sosActive && (
                  <circle
                    r="16"
                    fill="#16A34A"
                    fillOpacity="0.25"
                    className="animate-ping"
                    style={{ animationDuration: "2s" }}
                  />
                )}

                {/* Vehicle Orientation Group (Rotated along tangent angle) */}
                <g transform={`rotate(${carCoord.angle})`}>
                  {/* Projected Headlight Beams */}
                  <polygon points="12,-4 42,-14 42,14 12,4" fill="url(#headlightBeamLight)" />

                  {/* Vehicle Body Representation (Chassis & Cabin) */}
                  <rect
                    x="-12"
                    y="-7"
                    width="24"
                    height="14"
                    rx="4"
                    fill={sosActive ? "#DC2626" : "#16A34A"}
                    stroke="#FFFFFF"
                    strokeWidth="1.8"
                    filter="url(#carGlowLight)"
                  />
                  {/* Windshield & Rear Glass */}
                  <rect x="-4" y="-5" width="8" height="10" rx="2" fill="#0F172A" opacity="0.85" />
                  <rect x="7" y="-4" width="2" height="8" rx="1" fill="#FEF08A" />
                  {/* Tail Lights */}
                  <rect x="-12" y="-5" width="1.5" height="3" fill="#EF4444" />
                  <rect x="-12" y="2" width="1.5" height="3" fill="#EF4444" />
                </g>

                {/* Floating Live Telemetry Speed & Status HUD Tag */}
                <g transform="translate(0, -22)" className="pointer-events-none">
                  <rect
                    x="-34"
                    y="-13"
                    width="68"
                    height="17"
                    rx="4"
                    fill={sosActive ? "#DC2626" : "#FFFFFF"}
                    stroke={sosActive ? "#B91C1C" : "#16A34A"}
                    strokeWidth="1.5"
                    filter="url(#carGlowLight)"
                  />
                  <text
                    x="0"
                    y="-1"
                    fill={sosActive ? "#FFFFFF" : "#0F172A"}
                    fontSize="9"
                    fontFamily="monospace"
                    fontWeight="bold"
                    textAnchor="middle"
                  >
                    🚗 {speed} km/h
                  </text>
                  {/* Downward pointer triangle */}
                  <polygon
                    points="-3,4 3,4 0,7"
                    fill={sosActive ? "#DC2626" : "#16A34A"}
                  />
                </g>
              </g>
            </svg>

            {/* Bottom In-Map Status Bar Overlay */}
            <div className="absolute bottom-2 inset-x-3 flex items-center justify-between pointer-events-none z-10 text-[10px] font-mono">
              <div className="bg-white/95 backdrop-blur-md px-2.5 py-1 rounded-md border border-slate-200 text-slate-700 flex items-center gap-1.5 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-bold text-slate-900">{current.highwayName}</span>
                <span className="text-slate-300">•</span>
                <span className="text-slate-500">Limit: {current.speedLimit}</span>
              </div>

              <div className="bg-green-50/95 backdrop-blur-md px-2.5 py-1 rounded-md border border-green-200 text-green-800 font-bold flex items-center gap-1 shadow-2xs">
                <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                <span>Geofence Corridor Active (0m Deviation)</span>
              </div>
            </div>
          </div>

          {/* SOS Alert Notification Banner when Triggered */}
          {sosActive && (
            <div className="mb-3 p-3 rounded-xl bg-red-100 border border-red-300 text-red-900 text-xs flex items-center justify-between gap-2 animate-pulse shadow-sm">
              <div className="flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-red-600 shrink-0" />
                <span className="font-bold">
                  EMERGENCY SOS BROADCAST: Central Command Center Alerted. Police &amp; Standby Buffer Dispatched!
                </span>
              </div>
              <span className="text-[10px] font-mono bg-red-700 px-2 py-0.5 rounded text-white font-bold">
                PRIORITY 1
              </span>
            </div>
          )}

          {/* Action Simulation Buttons */}
          <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-slate-200 z-10">
            <div className="flex items-center gap-2">
              <button
                onClick={() => setSosActive(!sosActive)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs ${
                  sosActive
                    ? "bg-red-600 text-white shadow-md animate-pulse"
                    : "bg-white hover:bg-red-50 text-slate-700 border border-slate-200 hover:border-red-300"
                }`}
              >
                <AlertTriangle className="w-3.5 h-3.5 text-red-500" />
                {sosActive ? "SOS Active! Command Tracking" : "Test SOS Alarm"}
              </button>

              <button
                onClick={() => setDutySlipSigned(!dutySlipSigned)}
                className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs ${
                  dutySlipSigned
                    ? "bg-green-600 text-white shadow-sm"
                    : "bg-white hover:bg-green-50 text-slate-700 border border-slate-200 hover:border-green-300"
                }`}
              >
                <FileCheck className="w-3.5 h-3.5 text-green-600" />
                {dutySlipSigned ? "Duty Slip Signed (OTP #8492) ✓" : "Digital Sign Duty Slip"}
              </button>
            </div>

            <span className="text-[11px] font-mono font-semibold text-slate-500">
              Trip ID: <strong className="text-slate-900">SPW-2026-9810</strong>
            </span>
          </div>
        </div>

        {/* Right: Driver Profile, Telemetry Dials & Digital Badges */}
        <div className="lg:col-span-5 p-6 bg-white flex flex-col justify-between space-y-6">
          {/* Driver Card */}
          <div className="p-4 rounded-2xl bg-[#F0FDF4] border border-[#DCFCE7] flex items-center justify-between shadow-2xs">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-600 text-white font-bold text-lg flex items-center justify-center shadow-xs">
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
              className="p-2.5 rounded-xl bg-white border border-green-200 text-green-700 hover:bg-green-100 transition-colors shadow-2xs"
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
              <span className="text-[10px] text-emerald-600 font-semibold">Speed Governor OK</span>
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
          <div className="pt-2 border-t border-slate-100 space-y-2 text-xs text-slate-600">
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
                Pre-Trip Sanitation &amp; Vacuum
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
