"use client";

import React, { useEffect, useRef, useState } from "react";
import {
  Car,
  MapPin,
  Building2,
  CalendarCheck,
  Radio,
  Network,
  Receipt,
  Leaf,
  type LucideIcon,
} from "lucide-react";

type PrimaryMetric = {
  icon: LucideIcon;
  target: number;
  from?: number;
  suffix?: string;
  format?: boolean;
  label: string;
  desc: string;
  progress: number; // 0-100, drives the animated bar
  tag: string;
};

const PRIMARY: PrimaryMetric[] = [
  {
    icon: Car,
    target: 1200,
    suffix: "+",
    format: true,
    label: "Verified Vehicles",
    desc: "Sedans, MPVs, buses, tempo travellers and coaches",
    progress: 92,
    tag: "Fleet",
  },
  {
    icon: MapPin,
    target: 185,
    suffix: "+",
    label: "Cities Covered",
    desc: "Tier-1, Tier-2 & Tier-3 reach",
    progress: 84,
    tag: "Reach",
  },
  {
    icon: Building2,
    target: 156,
    suffix: "+",
    label: "Enterprise Accounts",
    desc: "Fortune 500 & MNCs empanelled",
    progress: 88,
    tag: "Clients",
  },
  {
    icon: CalendarCheck,
    target: 2012,
    label: "Established",
    desc: "Over a decade of enterprise mobility trust",
    progress: 100,
    tag: "Legacy",
  },
];

type SecondaryMetric = {
  icon: LucideIcon;
  value: string;
  num?: number;
  suffix?: string;
  label: string;
  sub?: string;
  live?: boolean;
};

const SECONDARY: SecondaryMetric[] = [
  { icon: Network, value: "6", num: 6, label: "Direct Metro Hubs", sub: "Mumbai, Bengaluru, Hyderabad, Chennai, Delhi NCR, Pune" },
  { icon: Radio, value: "24×7", label: "Command Centre", live: true },
  { icon: Receipt, value: "5%", num: 5, suffix: "%", label: "Statutory 5% GST Billing" },
  { icon: Leaf, value: "EV Ready", label: "Green Fleet Transition" },
];

/** Fires once when the element scrolls into view. */
function useInView<T extends Element>(threshold = 0.25) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

/** Animates a number from `from` to `to` with ease-out once `start` is true. Defaults to `to` for SSR/crawlers. */
function useCountUp(to: number, start: boolean, from = 0, duration = 1800) {
  const [value, setValue] = useState(to);

  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(from + (to - from) * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [to, from, start, duration]);

  return value;
}

function PrimaryCard({ metric, index, inView }: { metric: PrimaryMetric; index: number; inView: boolean }) {
  const Icon = metric.icon;
  const count = useCountUp(metric.target, inView, metric.from ?? 0, 1600 + index * 150);
  const display = metric.format ? count.toLocaleString("en-IN") : String(count);

  return (
    // Outer wrapper handles the staggered entrance; inner card handles hover lift
    <div
      className="transition-all duration-700 ease-out"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(24px)",
        transitionDelay: `${index * 110}ms`,
      }}
    >
      <div className="group relative h-full overflow-hidden rounded-3xl bg-white p-6 border border-green-200/80 hover-border-flow card-premium-shadow">
        {/* Oversized faded icon for depth */}
        <Icon
          className="pointer-events-none absolute -right-5 -bottom-5 h-28 w-28 text-green-500/[0.06] transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6"
          strokeWidth={1.5}
        />

        <div className="relative flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#48B83D] to-green-600 text-white shadow-lg shadow-green-500/25 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3">
            <Icon className="h-6 w-6" />
          </div>
          <span className="rounded-full border border-green-200 bg-green-50 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-green-700">
            {metric.tag}
          </span>
        </div>

        <div className="relative mt-6">
          <div className="flex items-baseline gap-0.5 text-4xl lg:text-[44px] font-black tracking-tight text-slate-900 tabular-nums leading-none">
            <span>{display}</span>
            {metric.suffix && <span className="text-[#48B83D]">{metric.suffix}</span>}
          </div>
          <div className="mt-2 text-sm font-bold text-slate-900">{metric.label}</div>
          <div className="mt-0.5 text-xs text-slate-500">{metric.desc}</div>
        </div>

        {/* Animated progress bar */}
        <div className="relative mt-5">
          <div className="h-1.5 w-full overflow-hidden rounded-full bg-green-100">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[#48B83D] via-green-400 to-emerald-500 transition-[width] duration-[1600ms] ease-out"
              style={{
                width: inView ? `${metric.progress}%` : "0%",
                transitionDelay: `${300 + index * 120}ms`,
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

function SecondaryItem({ s, inView }: { s: SecondaryMetric; inView: boolean }) {
  const Icon = s.icon;
  const count = useCountUp(s.num ?? 0, inView && s.num !== undefined, 0, 1400);

  return (
    <div className="group flex items-center gap-3.5 px-5 py-4 transition-colors duration-300 hover:bg-green-50/70">
      <div className="relative flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-green-100 text-green-700 transition-all duration-300 group-hover:bg-[#48B83D] group-hover:text-white group-hover:scale-110">
        <Icon className="h-5 w-5" />
        {s.live && (
          <span className="absolute -top-0.5 -right-0.5 flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full border-2 border-white bg-green-500" />
          </span>
        )}
      </div>
      <div className="min-w-0">
        <div className="text-lg font-black text-slate-900 leading-tight">
          {s.num !== undefined ? `${count}${s.suffix ?? ""}` : s.value}
        </div>
        <div className="text-[11px] font-semibold uppercase tracking-wide text-slate-500 truncate">
          {s.label}
        </div>
      </div>
    </div>
  );
}

export default function AnimatedStatsGrid() {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <section className="py-16 sm:py-20 bg-[#F4FAF6]">
      <div ref={ref} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-green-200/70 bg-gradient-to-br from-white via-[#F7FCF8] to-[#ECFDF3] p-6 sm:p-10 lg:p-12 card-premium-shadow">
          {/* Decorative background: dot grid + soft glow */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage: "radial-gradient(rgba(72,184,61,0.25) 1px, transparent 1px)",
              backgroundSize: "22px 22px",
              maskImage: "linear-gradient(to bottom, black, transparent 70%)",
              WebkitMaskImage: "linear-gradient(to bottom, black, transparent 70%)",
            }}
          />
          <div className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full bg-green-300/20 blur-3xl" />

          {/* Header */}
          <div className="relative flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-3 py-1 text-xs font-bold uppercase tracking-wider text-green-700 shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
                </span>
                Speedways At A Glance
              </span>
              <h2 className="mt-4 text-3xl sm:text-4xl font-black tracking-tight text-slate-900">
                Enterprise-Grade Mobility Solutions Built for{" "}
                <span className="bg-gradient-to-r from-[#48B83D] to-emerald-600 bg-clip-text text-transparent">
                  Every Industry
                </span>
              </h2>
            </div>
            <p className="max-w-md text-sm text-slate-600 leading-relaxed lg:text-right">
              One unified contract covers your entire footprint, from headquarters to regional manufacturing clusters.
            </p>
          </div>

          {/* Primary metrics */}
          <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
            {PRIMARY.map((m, i) => (
              <PrimaryCard key={m.label} metric={m} index={i} inView={inView} />
            ))}
          </div>

          {/* Secondary metrics strip */}
          <div
            className="relative mt-6 grid grid-cols-2 lg:grid-cols-4 overflow-hidden rounded-2xl border border-green-200/80 bg-white/90 backdrop-blur-sm divide-x divide-y lg:divide-y-0 divide-green-100 transition-all duration-700 ease-out"
            style={{
              opacity: inView ? 1 : 0,
              transform: inView ? "translateY(0)" : "translateY(16px)",
              transitionDelay: "550ms",
            }}
          >
            {SECONDARY.map((s) => (
              <SecondaryItem key={s.label} s={s} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
