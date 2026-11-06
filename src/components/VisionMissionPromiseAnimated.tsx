"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface PillarItem {
  id: string;
  tag: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

const PILLARS: PillarItem[] = [
  {
    id: "vision",
    tag: "OUR VISION",
    title: "A Legacy of Excellence in Every Journey.",
    description:
      "To be recognised as a distinguished name in the mobility industry, setting benchmarks in service excellence, trust, and sophistication. We aspire to shape a future where every journey represents the finest standards of comfort, reliability, and seamless mobility.",
    image: "/images/vision.jpg",
    alt: "Speedways Vision - Executive Mercedes sedan cruising modern corporate district",
  },
  {
    id: "mission",
    tag: "OUR MISSION",
    title: "Excellence, Delivered with Purpose.",
    description:
      "To create exceptional mobility experiences through meticulously managed transportation solutions, professional service, and an uncompromising focus on quality. We endeavour to anticipate the needs of our clients, exceed their expectations, and make every journey effortless through precision, care, and consistency.",
    image: "/images/mission.jpg",
    alt: "Speedways Mission - Professional chauffeur in black-tie hospitality welcoming VIP guest",
  },
  {
    id: "promise",
    tag: "OUR PROMISE",
    title: "A Promise of Trust. A Standard of Distinction.",
    description:
      "Our promise is reflected in every detail of the experience we deliver. From the first interaction to the final destination, we are committed to upholding the highest standards of safety, punctuality, comfort, and professionalism. We believe trust is earned through consistency, and excellence is demonstrated through every service, every interaction, and every journey.",
    image: "/images/promise.jpg",
    alt: "Speedways Promise - Dedicated chauffeur opening door for luxury corporate passenger",
  },
];

export default function VisionMissionPromiseAnimated() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  };

  return (
    <div className="w-full">
      {/* 3 Pillars Animated Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
      >
        {PILLARS.map((pillar, idx) => {
          return (
            <motion.div
              key={pillar.id}
              variants={cardVariants}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="relative flex flex-col justify-between rounded-3xl overflow-hidden bg-[#0B1A2C] border border-slate-800 shadow-xl hover:shadow-[0_20px_45px_-12px_rgba(15,23,42,0.45)] hover:border-green-500/50 transition-all duration-300 group"
            >
              {/* Subtle Ambient Hover Glow */}
              <div className="absolute -inset-0.5 bg-gradient-to-b from-green-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none" />

              {/* Upper Portion: Photography with Smooth Parallax Zoom */}
              <div className="relative w-full h-[240px] sm:h-[260px] overflow-hidden bg-slate-900">
                <Image
                  src={pillar.image}
                  alt={pillar.alt}
                  fill
                  className="object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  priority={idx === 0}
                />

                {/* Film grain / subtle gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1A2C] via-transparent to-black/20 pointer-events-none" />
              </div>

              {/* Lower Portion: Dark Navy Typography Card Matching Exact Graphic */}
              <div className="relative p-6 sm:p-7 flex-1 flex flex-col justify-between bg-[#0B1A2C]">
                <div>
                  {/* Category Eyebrow */}
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[11px] sm:text-xs font-bold uppercase tracking-widest text-[#D4AF37] group-hover:text-amber-300 transition-colors">
                      {pillar.tag}
                    </span>
                  </div>

                  {/* Headline */}
                  <h3 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-snug mb-3 group-hover:text-green-50 transition-colors">
                    {pillar.title}
                  </h3>

                  {/* Narrative Copy */}
                  <p className="text-slate-300 text-xs sm:text-sm leading-relaxed font-normal">
                    {pillar.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}

