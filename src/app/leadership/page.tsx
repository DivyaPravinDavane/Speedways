import React from "react";
import Breadcrumbs from "@/components/Breadcrumbs";
import LeadershipSection from "@/components/LeadershipSection";
import Link from "next/link";
import { ArrowRight, ShieldCheck, Award } from "lucide-react";

export const metadata = {
  title: "Executive Leadership Team | Speedways Fleet & Travel Management",
  description:
    "Meet the leadership team at Speedways. Over a century of mobility experience across Avis, Orix, Carzonrent, Emirates, and Premier Logistics.",
};

export default function LeadershipPage() {
  return (
    <div className="bg-[#F4FAF6] min-h-screen">
      <div className="bg-slate-50 border-b border-slate-200/80">
        <Breadcrumbs
          items={[
            { label: "Company", href: "/about-us" },
            { label: "Executive Leadership" },
          ]}
        />
      </div>

      <LeadershipSection />

      {/* Corporate Governance Link */}
      <section className="py-12 bg-white border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-green-100 text-green-700 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-base font-bold text-slate-900">
                Explore About Us & Governance Framework
              </h4>
              <p className="text-xs text-slate-500">
                Discover our multi-tier account escalation matrix, SLA governance, and nationwide footprint.
              </p>
            </div>
          </div>

          <Link
            href="/about-us"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold uppercase tracking-wider transition-all"
          >
            <span>View Full About Us Page</span>
            <ArrowRight className="w-4 h-4 text-green-400" />
          </Link>
        </div>
      </section>
    </div>
  );
}
