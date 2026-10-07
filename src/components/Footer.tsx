import React from "react";
import Link from "next/link";
import {
  PhoneCall,
  Mail,
  MapPin,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-50 border-t border-slate-200 text-slate-600">
      {/* Pre-footer Callout Bar */}
      <div className="bg-green-600 text-white py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-500/60 text-xs font-semibold uppercase tracking-wider mb-2">
              Pan-India Enterprise Vendor Empanelment
            </span>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
              Ready to Upgrade Your Corporate Mobility Operations?
            </h3>
            <p className="text-green-100 text-sm mt-1 max-w-2xl">
              Consolidate single-city or multi-city accounts with 1,200+ fleet access, our technology platform integration, and SLA-governed dispatch.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href="tel:9820630817"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold text-sm transition-all"
            >
              <PhoneCall className="w-4 h-4 text-green-300" />
              Call 9820630817
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-green-700 font-bold text-sm shadow-md transition-all group"
            >
              <span>Request Vendor Empanelment</span>
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
            <Link href="/" className="flex flex-col items-start gap-1.5 group">
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
              <p className="text-xs text-slate-500 italic">
                Purpose in Every Promise. Excellence in Every Experience. Inspired by Commitment. Delivered with Excellence. Committed to Excellence. Defined by Trust.
              </p>
              <p className="text-xs text-slate-600 pt-1">
                India&apos;s leading corporate mobility platform combining fleet scale, 185+ city coverage, our technology platform, and centralised 24×7 governance.
              </p>
            </div>

            <div className="pt-2 space-y-2 text-xs text-slate-500">
              <div className="flex items-center gap-2 font-medium">
                <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                <span>Established 2012 • 156+ Fortune & Enterprise Clients</span>
              </div>
              <div className="flex items-center gap-2 font-medium">
                <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                <span>5% GST Billing Model with Complete Tax Credit Traceability</span>
              </div>
              <div className="flex items-center gap-2 font-medium">
                <CheckCircle2 className="w-4 h-4 text-green-600 shrink-0" />
                <span>ISO 9001, ISO 27001, ISO 45001 Aligned Governance</span>
              </div>
            </div>

            <div className="pt-4 flex items-center gap-3">
              <a
                href="tel:9820630817"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-green-50 text-green-800 text-xs font-semibold border border-green-200/60"
              >
                <PhoneCall className="w-3.5 h-3.5 text-green-600" />
                24×7 Desk: 9820630817
              </a>
              <a
                href="mailto:info@speedwaysftm.com"
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-slate-500" />
                info@speedwaysftm.com
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
                  href="/services/chauffeur-drive"
                  className="hover:text-green-600 transition-colors"
                >
                  Corporate Car Rental
                </Link>
              </li>
              <li>
                <Link
                  href="/services/chauffeur-drive"
                  className="hover:text-green-600 transition-colors"
                >
                  Airport Transfers
                </Link>
              </li>
              <li>
                <Link
                  href="/services/chauffeur-drive"
                  className="hover:text-green-600 transition-colors"
                >
                  Local 4h & 8h Rentals
                </Link>
              </li>
              <li>
                <Link
                  href="/services/chauffeur-drive"
                  className="hover:text-green-600 transition-colors"
                >
                  Intercity & Outstation
                </Link>
              </li>
              <li>
                <Link
                  href="/services/employee-transport"
                  className="hover:text-green-600 transition-colors"
                >
                  Employee Transport (ETS)
                </Link>
              </li>
              <li>
                <Link
                  href="/services/vip-luxury-events"
                  className="hover:text-green-600 transition-colors"
                >
                  VIP & CXO Movement
                </Link>
              </li>
              <li>
                <Link
                  href="/services/vip-luxury-events"
                  className="hover:text-green-600 transition-colors"
                >
                  MICE & Bulk Events
                </Link>
              </li>
              <li>
                <Link
                  href="/sustainability"
                  className="hover:text-green-600 transition-colors"
                >
                  EV Mobility Roadmap
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 2: Fleet & Platform */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Fleet & Platform
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/fleet" className="hover:text-green-600 transition-colors">
                  Economy Sedan (Dzire, Aura)
                </Link>
              </li>
              <li>
                <Link href="/fleet" className="hover:text-green-600 transition-colors">
                  Executive Sedan (Ciaz, City)
                </Link>
              </li>
              <li>
                <Link href="/fleet" className="hover:text-green-600 transition-colors">
                  MUV (Ertiga, Carens)
                </Link>
              </li>
              <li>
                <Link href="/fleet" className="hover:text-green-600 transition-colors">
                  Premium MUV (Innova Crysta/Hycross)
                </Link>
              </li>
              <li>
                <Link href="/fleet" className="hover:text-green-600 transition-colors">
                  Luxury SUV (Fortuner, Mercedes, BMW)
                </Link>
              </li>
              <li>
                <Link href="/fleet" className="hover:text-green-600 transition-colors">
                  Electric Fleet (Tigor, Nexon EV)
                </Link>
              </li>
              <li>
                <Link href="/technology" className="hover:text-green-600 transition-colors">
                  Our Technology Platform Integration
                </Link>
              </li>
              <li>
                <Link href="/technology" className="hover:text-green-600 transition-colors">
                  5-Stage Trip Lifecycle
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Corporate Office & Direct Branches */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900">
              Corporate Office & Hubs
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
                <strong className="text-slate-900 block text-xs">Bangalore Branch:</strong>
                <p className="text-slate-500 mt-0.5">
                  Serenity, 1176/A, HBR 1st Stage, 4th Block, Bangalore- 560043
                </p>
              </div>

              <div className="pt-1.5">
                <strong className="text-slate-900 block text-xs">6 Direct Metro Branches:</strong>
                <p className="text-slate-500 mt-0.5">
                  Mumbai (HO) • Bangalore • Hyderabad • Chennai • Delhi NCR • Pune
                </p>
              </div>

              <div className="pt-1.5">
                <strong className="text-slate-900 block text-xs">Tier-2/3 Network:</strong>
                <p className="text-slate-500">185+ Managed Partner Cities Pan-India</p>
              </div>

              <div className="pt-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-green-600 hover:text-green-700 hover:underline"
                >
                  Contact Branch Directory <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-6 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {new Date().getFullYear()} Speedways Fleet & Travel Management Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="text-slate-400">GST Registration: 5% Corporate Billing Model</span>
            <Link href="/about-us#governance" className="hover:text-green-600 transition-colors">
              SLA Governance
            </Link>
            <Link href="/network-safety#iso" className="hover:text-green-600 transition-colors">
              ISO Compliance
            </Link>
            <Link href="/contact" className="hover:text-green-600 transition-colors">
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
