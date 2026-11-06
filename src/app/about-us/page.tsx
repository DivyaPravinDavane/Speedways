"use client";

import React from "react";
import Image from "next/image";
import Breadcrumbs from "@/components/Breadcrumbs";

export default function AboutUsPage() {
  return (
    <div className="bg-[#F4FAF6] min-h-screen">
      {/* Breadcrumb Bar */}
      <div className="bg-slate-50 border-b border-slate-200/80">
        <Breadcrumbs
          items={[
            { label: "Company", href: "/" },
            { label: "About Speedways" },
          ]}
        />
      </div>

      {/* Primary About Speedways Hero Section */}
      <section className="py-14 sm:py-20 bg-white border-b border-green-100/70">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            {/* Left Showcase Image Card */}
            <div className="lg:col-span-5 relative group">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-950">
                <Image
                  src="/images/about-speedways.jpg"
                  alt="About Speedways - Your Journey Starts Here"
                  width={900}
                  height={600}
                  className="w-full h-auto object-cover group-hover:scale-102 transition-transform duration-500"
                  priority
                />
              </div>
            </div>

            {/* Right Content Column */}
            <div className="lg:col-span-7 space-y-4">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
                Your Journey Starts Here.
              </h1>

              <p className="text-base sm:text-lg text-slate-800 font-semibold leading-relaxed">
                At Speedways, we believe that exceptional mobility is defined not merely by the destination, but by the experience that unfolds along the way.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                We are a dedicated mobility solutions provider, bringing together premium car rental services and corporate employee transportation through a distinctive approach to comfort, reliability, and service excellence.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Guided by an unwavering commitment to quality and professionalism, we strive to deliver thoughtfully managed transportation experiences that reflect the expectations of modern individuals and businesses. Every aspect of our service is shaped by attention to detail, operational precision, and a genuine understanding of what matters most to our clients.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                From personalised travel and executive mobility to comprehensive corporate transportation and employee commute solutions, we bring together dependable vehicles, professional chauffeurs, and seamless coordination to make every journey effortless.
              </p>

              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                More than a transportation provider, we aspire to be a trusted mobility partner — one that values relationships, honours commitments, and consistently upholds the highest standards of service.
              </p>

              <div className="p-5 rounded-2xl bg-[#F4FAF6] border border-green-200/80">
                <p className="text-base sm:text-lg text-slate-900 font-bold leading-relaxed">
                  At Speedways, we don&apos;t simply take you places. We elevate the experience of getting there.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
