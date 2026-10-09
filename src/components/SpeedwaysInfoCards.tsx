"use client";

import React from "react";
import { InfoCard } from "@/components/ui/info-card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function SpeedwaysInfoCards() {
  const cards = [
    {
      image:
        "/images/airport-chauffeur.jpg",
      title: "Airport Transfer across India",
      description:
        "Automated flight-tracked arrivals, dedicated terminal curbside paging, sanitized Toyota Innova Hycross, and zero wait-time penalties.",
      borderColor: "#22C55E", // Parrot Green
      borderBgColor: "#f1f5f9",
      cardBgColor: "#ffffff",
      textColor: "#0f172a",
      hoverTextColor: "#ffffff",
      effectBgColor: "#16A34A",
      shadowColor: "#e2e8f0",
    },
    {
      image:
        "/images/vip-fleet-lineup.jpg",
      title: "C-Suite Board Summits",
      description:
        "Flagship Mercedes-Benz E-Class, BMW 5 Series & Audi fleet for visiting board directors, international delegations, and MICE summits.",
      borderColor: "#16A34A", // Deep Parrot Accent
      borderBgColor: "#f1f5f9",
      cardBgColor: "#ffffff",
      textColor: "#0f172a",
      hoverTextColor: "#ffffff",
      effectBgColor: "#22C55E",
      shadowColor: "#e2e8f0",
    },
    {
      image:
        "/images/ev-fleet.jpg",
      title: "Campus EV Green Fleet",
      description:
        "Zero-emission electric mobility with Tata Tigor and Nexon EV fleet deployments, fast-charging integration, and auditable ESG CO2 reports.",
      borderColor: "#22C55E", // Parrot Green
      borderBgColor: "#f1f5f9",
      cardBgColor: "#ffffff",
      textColor: "#0f172a",
      hoverTextColor: "#ffffff",
      effectBgColor: "#15803d",
      shadowColor: "#e2e8f0",
    },
  ];

  return (
    <section className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-wider text-green-700 bg-green-100 px-3 py-1 rounded-full">
            Dynamic Interactive Spotlights
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mt-3 tracking-tight">
            Flagship Enterprise Mobility Highlights
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2">
            Hover over the interactive cards below to experience the rotating gradient borders, dynamic cursor tracking, and instant service deep-dives.
          </p>
        </div>

        {/* InfoCard Interactive Showcase Grid */}
        <div className="flex flex-wrap items-center justify-center gap-8">
          {cards.map((card, idx) => (
            <div key={idx} className="transition-transform duration-300 hover:scale-102">
              <InfoCard
                image={card.image}
                title={card.title}
                description={card.description}
                borderColor={card.borderColor}
                borderBgColor={card.borderBgColor}
                cardBgColor={card.cardBgColor}
                textColor={card.textColor}
                hoverTextColor={card.hoverTextColor}
                effectBgColor={card.effectBgColor}
                shadowColor={card.shadowColor}
                width={360}
                height={370}
                contentPadding="12px 16px"
              />
            </div>
          ))}
        </div>

        <div className="mt-10 text-center flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-500 hover:bg-green-600 text-white font-bold text-xs uppercase tracking-wider shadow-sm transition-all"
          >
            <span>Explore All Mobility Verticals</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
