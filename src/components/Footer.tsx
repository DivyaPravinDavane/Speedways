"use client";

import React from "react";
import Link from "next/link";
import {
  PhoneCall,
  Mail,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function Footer() {
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    const targetId = hash.replace("#", "").replace("/#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      e.preventDefault();
      const headerOffset = 76;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      window.history.pushState(null, "", `#${targetId}`);
    }
  };

  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-600">
      {/* Pre-footer Callout Bar Highlighting Speedways Tagline */}
      <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-slate-950 text-white py-10 px-4 sm:px-6 lg:px-8 border-b border-slate-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/30 text-green-400 text-xs font-black uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-green-400" />
              <span>Speedways Corporate Tagline</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
              &ldquo;YOUR JOURNEY STARTS HERE…&rdquo;
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm max-w-2xl leading-relaxed">
              Consolidate single-city or multi-city corporate accounts with 1,200+ verified fleet vehicles, enterprise cloud technology, and 100% compliance across 185+ cities.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <a
              href="tel:9820630817"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm transition-all"
            >
              <PhoneCall className="w-4 h-4 text-green-400" />
              <span>24×7 Hotline: 9820630817</span>
            </a>
            <Link
              href="/#enquiry"
              onClick={(e) => handleNavClick(e, "#enquiry")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold text-sm shadow-md transition-all group"
            >
              <span>Submit Corporate Enquiry</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Company Column (Span 2) */}
          <div className="lg:col-span-2 space-y-4">
            <Link
              href="/#hero"
              onClick={(e) => handleNavClick(e, "#hero")}
              className="flex flex-col items-start gap-1.5 group"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/speedways-wordmark.png"
                alt="SPEEDWAYS Fleet & Travel Management"
                className="h-6 sm:h-7 w-auto object-contain transition-transform duration-300 group-hover:scale-102"
              />
              <span className="text-[10px] tracking-wider font-semibold uppercase text-slate-500 block">
                Fleet & Travel Management Pvt. Ltd.
              </span>
            </Link>

            <div className="text-sm text-slate-600 max-w-sm leading-relaxed space-y-1.5">
              <p className="font-bold text-slate-900">
                Speedways. Advancing Enterprise Mobility.
              </p>
              <p className="text-xs text-green-700 font-extrabold uppercase tracking-wide">
                &ldquo;YOUR JOURNEY STARTS HERE…&rdquo;
              </p>
              <p className="text-xs text-slate-600 pt-1">
                India&apos;s leading corporate mobility platform combining fleet scale, 185+ city coverage, enterprise technology platform, and centralised 24×7 command centre governance.
              </p>
            </div>

            <div className="pt-2 space-y-2 text-xs text-slate-500">
              <div className="flex items-center gap-2 font-medium">
                <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                <span>Established 2012 • Trusted by 185+ Corporates Pan India</span>
              </div>
              <div className="flex items-center gap-2 font-medium">
                <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                <span>5% GST Corporate Billing Model with Full Audit Trail</span>
              </div>
              <div className="flex items-center gap-2 font-medium">
                <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                <span>ISO 9001, ISO 27001 &amp; ISO 45001 Aligned Governance</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap items-center gap-3">
              <a
                href="tel:9820630817"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-50 text-green-800 text-xs font-semibold border border-green-200/60"
              >
                <PhoneCall className="w-3.5 h-3.5 text-green-600" />
                <span>24×7 Operations: 9820630817</span>
              </a>
              <span className="text-slate-300 hidden sm:inline" aria-hidden="true">|</span>
              <a
                href="mailto:info@speedwaysftm.com"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                <span>info@speedwaysftm.com</span>
              </a>
            </div>
          </div>

          {/* Col 1: Mobility Solutions */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Mobility Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/#services"
                  onClick={(e) => handleNavClick(e, "#services")}
                  className="hover:text-green-600 transition-colors"
                >
                  Corporate Car Rental
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  onClick={(e) => handleNavClick(e, "#services")}
                  className="hover:text-green-600 transition-colors"
                >
                  Airport Transfers
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  onClick={(e) => handleNavClick(e, "#services")}
                  className="hover:text-green-600 transition-colors"
                >
                  Employee Transport (ETS)
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  onClick={(e) => handleNavClick(e, "#services")}
                  className="hover:text-green-600 transition-colors"
                >
                  Monthly &amp; Long-Term Leasing
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  onClick={(e) => handleNavClick(e, "#services")}
                  className="hover:text-green-600 transition-colors"
                >
                  VIP &amp; CXO Movement
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  onClick={(e) => handleNavClick(e, "#services")}
                  className="hover:text-green-600 transition-colors"
                >
                  MICE &amp; Event Transportation
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  onClick={(e) => handleNavClick(e, "#services")}
                  className="hover:text-green-600 transition-colors"
                >
                  Intercity &amp; Outstation
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  onClick={(e) => handleNavClick(e, "#services")}
                  className="hover:text-green-600 transition-colors"
                >
                  EV Mobility Solutions
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Vehicle Segments */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Vehicle Segments
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/#fleet"
                  onClick={(e) => handleNavClick(e, "#fleet")}
                  className="hover:text-green-600 transition-colors"
                >
                  Cars &amp; SUVs (Economy to Luxury)
                </Link>
              </li>
              <li>
                <Link
                  href="/#fleet"
                  onClick={(e) => handleNavClick(e, "#fleet")}
                  className="hover:text-green-600 transition-colors"
                >
                  Group (Tempo &amp; Mini Buses)
                </Link>
              </li>
              <li>
                <Link
                  href="/#fleet"
                  onClick={(e) => handleNavClick(e, "#fleet")}
                  className="hover:text-green-600 transition-colors"
                >
                  Luxury 40+ Seater Coaches
                </Link>
              </li>
              <li>
                <Link
                  href="/#fleet"
                  onClick={(e) => handleNavClick(e, "#fleet")}
                  className="hover:text-green-600 transition-colors"
                >
                  Electric Fleet (Tigor, Nexon EV)
                </Link>
              </li>
              <li>
                <Link
                  href="/#technology"
                  onClick={(e) => handleNavClick(e, "#technology")}
                  className="hover:text-green-600 transition-colors"
                >
                  Enterprise Platform Integration
                </Link>
              </li>
              <li>
                <Link
                  href="/#technology"
                  onClick={(e) => handleNavClick(e, "#technology")}
                  className="hover:text-green-600 transition-colors"
                >
                  Digital GPS Duty Slips (e-DDS)
                </Link>
              </li>
              <li>
                <Link
                  href="/#safety"
                  onClick={(e) => handleNavClick(e, "#safety")}
                  className="hover:text-green-600 transition-colors"
                >
                  Lady Traveller SLA Protocol
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Corporate Office & Direct Branches */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Corporate Office &amp; Hubs
            </h4>
            <div className="text-xs space-y-2 text-slate-600">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-green-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900 block">Head Office:</strong>
                  Wing D 301, Neelkanth Business Park, Nathani Road, Vidyavihar West, Mumbai 400 086
                </div>
              </div>

              <div className="pt-1.5">
                <strong className="text-slate-900 block text-xs">Bengaluru Branch:</strong>
                <p className="text-slate-500 mt-0.5">
                  Serenity, 1176/A, HBR 1st Stage, 4th Block, Bengaluru - 560043
                </p>
              </div>

              <div className="pt-1.5">
                <strong className="text-slate-900 block text-xs">6 Direct Metro Branches:</strong>
                <p className="text-slate-500 mt-0.5">
                  Mumbai (HO) • Bengaluru • Hyderabad • Chennai • Delhi NCR • Pune
                </p>
              </div>

              <div className="pt-1.5">
                <strong className="text-slate-900 block text-xs">Tier-2/3 Network:</strong>
                <p className="text-slate-500">185+ Managed Partner Cities Pan-India</p>
              </div>

              <div className="pt-3">
                <Link
                  href="/#enquiry"
                  onClick={(e) => handleNavClick(e, "#enquiry")}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-600 hover:text-green-700 hover:underline"
                >
                  Submit Fast-Track Enquiry <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Speedways Fleet &amp; Travel Management Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-slate-400">Corporate Billing with Applicable Statutory GST Treatment &amp; Invoicing</span>
            <Link
              href="/#about"
              onClick={(e) => handleNavClick(e, "#about")}
              className="hover:text-green-600 transition-colors"
            >
              Vision &amp; Mission
            </Link>
            <Link
              href="/#safety"
              onClick={(e) => handleNavClick(e, "#safety")}
              className="hover:text-green-600 transition-colors"
            >
              100% Compliance
            </Link>
            <Link
              href="/#enquiry"
              onClick={(e) => handleNavClick(e, "#enquiry")}
              className="hover:text-green-600 transition-colors"
            >
              Enquiry Desk
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
