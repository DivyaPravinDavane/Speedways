"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  PhoneCall,
  Mail,
  Menu,
  X,
  ArrowRight,
  MapPin,
  Sparkles,
} from "lucide-react";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("");
  const pathname = usePathname();

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    setIsMobileMenuOpen(false);
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section on scroll according to the exact company flow
  useEffect(() => {
    if (pathname !== "/") return;
    const sectionIds = [
      "about",
      "services",
      "fleet",
      "technology",
      "safety",
      "leadership",
      "testimonials",
      "why-us",
      "enquiry",
    ];
    const handleScrollSection = () => {
      const scrollPosition = window.scrollY + 140;
      if (window.scrollY < 200) {
        setActiveSection("about");
        return;
      }
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const id = sectionIds[i];
        const el = document.getElementById(id);
        if (el && scrollPosition >= el.offsetTop) {
          setActiveSection((prev) => (prev !== id ? id : prev));
          return;
        }
      }
      setActiveSection("about");
    };
    handleScrollSection();
    window.addEventListener("scroll", handleScrollSection, { passive: true });
    return () => window.removeEventListener("scroll", handleScrollSection);
  }, [pathname]);

  // Handle hash on initial load or route transition
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          const headerOffset = 76;
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
          setActiveSection(id === "hero" ? "about" : id);
        }, 150);
      }
    }
  }, [pathname]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    setIsMobileMenuOpen(false);
    const targetId = hash.replace("#", "");
    if (pathname === "/") {
      e.preventDefault();
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const headerOffset = 76;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
        window.history.pushState(null, "", hash);
        setActiveSection(targetId === "hero" ? "about" : targetId);
      }
    }
  };

  const navLinks = [
    { label: "About", hash: "#about", id: "about" },
    { label: "Services", hash: "#services", id: "services" },
    { label: "Vehicle Segments", hash: "#fleet", id: "fleet" },
    { label: "Technology", hash: "#technology", id: "technology" },
    { label: "Safety", hash: "#safety", id: "safety" },
    { label: "Leadership", hash: "#leadership", id: "leadership" },
    { label: "Testimonials", hash: "#testimonials", id: "testimonials" },
    { label: "Why Speedways", hash: "#why-us", id: "why-us" },
    { label: "Enquiry", hash: "#enquiry", id: "enquiry" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
        scrolled
          ? "shadow-[0_10px_30px_-10px_rgba(15,23,42,0.12)] border-b border-slate-200"
          : "border-b border-slate-200/80"
      }`}
    >
      {/* Top Corporate Utility Bar */}
      <div className="bg-slate-900 text-slate-300 text-[11.5px] py-1.5 px-4 sm:px-6 lg:px-4 xl:px-8 border-b border-slate-800 hidden md:block">
        <div className="w-full max-w-[1536px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4 text-slate-300 font-medium">
            <a href="tel:9820630817" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <PhoneCall className="w-3 h-3 text-[#48B83D]" />
              <span>24×7 Central Support: <strong className="text-white">+91 98206 30817</strong></span>
            </a>
            <span className="text-slate-700">|</span>
            <a href="mailto:info@speedwaysftm.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3 h-3 text-[#48B83D]" />
              <span>Corporate RFPs: <strong className="text-white">info@speedwaysftm.com</strong></span>
            </a>
            <span className="text-slate-700">|</span>
            <Link
              href="/#about"
              onClick={(e) => handleNavClick(e, "#about")}
              className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
            >
              <MapPin className="w-3 h-3 text-[#48B83D]" />
              <span>185+ Cities Pan-India Coverage</span>
            </Link>
          </div>

        </div>
      </div>

      {/* 1. MAIN NAVBAR */}
      <div className="w-full max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-4 xl:px-8">
        <div className="flex items-center justify-between gap-2 lg:gap-3 xl:gap-6 h-[74px]">
          {/* Brand Logo (Official SPEEDWAYS Logo) */}
          <Link
            href="/#about"
            onClick={(e) => handleNavClick(e, "#about")}
            className="flex items-center group shrink-0"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/speedways-wordmark.png"
              alt="SPEEDWAYS Fleet & Travel Management"
              className="h-5 xl:h-6 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </Link>

          {/* Desktop Navigation Links: In-Page Section Anchors Following Requested Flow */}
          <nav className="hidden lg:flex items-center space-x-0.5 xl:space-x-1 2xl:space-x-2.5 text-[11.5px] xl:text-[12.5px] 2xl:text-[13.5px] font-semibold text-slate-800">
            {navLinks.map((item) => {
              const isActive = pathname === "/" && activeSection === item.id;

              return (
                <Link
                  key={item.id}
                  href={`/${item.hash}`}
                  onClick={(e) => handleNavClick(e, item.hash)}
                  className={`transition-colors py-6 px-1 xl:px-1.5 2xl:px-2 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? "text-[#48B83D] font-bold border-b-2 border-[#48B83D]"
                      : "text-slate-800 hover:text-[#48B83D]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Element: Attach Your Fleet Button */}
          <div className="hidden lg:flex items-center shrink-0">
            <Link
              href="/#enquiry"
              onClick={(e) => handleNavClick(e, "#enquiry")}
              className="inline-flex items-center justify-center px-4 xl:px-5 py-2.5 rounded-xl bg-green-600 hover:bg-green-700 active:scale-98 text-white font-bold text-xs xl:text-sm whitespace-nowrap transition-all duration-200 cursor-pointer shadow-sm hover:shadow-md"
            >
              Attach Your Fleet
            </Link>
          </div>

          {/* Mobile Hamburger Toggle (Visible on < lg) */}
          <div className="flex lg:hidden items-center gap-2">
            <Link
              href="/#enquiry"
              onClick={(e) => handleNavClick(e, "#enquiry")}
              className="px-4 py-2 rounded-xl bg-green-600 text-white text-xs font-bold"
            >
              Enquiry
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>


      {/* 3. MOBILE RESPONSIVE DRAWER */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-5 pt-3 pb-6 space-y-3 max-h-[85vh] overflow-y-auto animate-in slide-in-from-top-4">
          <div className="p-3 rounded-2xl bg-green-50 border border-green-200 text-center mb-2">
            <span className="text-[11px] font-black uppercase tracking-wider text-green-800 block">
              &ldquo;YOUR JOURNEY STARTS HERE…&rdquo;
            </span>
            <span className="text-[10px] text-slate-600">
              India&apos;s Premier B2B Fleet &amp; Travel Partner
            </span>
          </div>

          <div className="space-y-1">
            <Link
              href="/#about"
              onClick={(e) => handleNavClick(e, "#about")}
              className={`block px-3.5 py-2.5 rounded-xl text-sm font-bold ${
                pathname === "/" && activeSection === "about"
                  ? "bg-green-50 text-green-700"
                  : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              About Speedways &amp; USP
            </Link>

            <Link
              href="/#services"
              onClick={(e) => handleNavClick(e, "#services")}
              className={`block px-3.5 py-2.5 rounded-xl text-sm font-bold ${
                pathname === "/" && activeSection === "services"
                  ? "bg-green-50 text-green-700"
                  : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              Mobility Services
            </Link>

            <Link
              href="/#fleet"
              onClick={(e) => handleNavClick(e, "#fleet")}
              className={`block px-3.5 py-2.5 rounded-xl text-sm font-bold ${
                pathname === "/" && activeSection === "fleet"
                  ? "bg-green-50 text-green-700"
                  : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              Vehicle Segments (Moving)
            </Link>

            <Link
              href="/#technology"
              onClick={(e) => handleNavClick(e, "#technology")}
              className={`block px-3.5 py-2.5 rounded-xl text-sm font-bold ${
                pathname === "/" && activeSection === "technology"
                  ? "bg-green-50 text-green-700"
                  : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              Technology Platform
            </Link>

            <Link
              href="/#safety"
              onClick={(e) => handleNavClick(e, "#safety")}
              className={`block px-3.5 py-2.5 rounded-xl text-sm font-bold ${
                pathname === "/" && activeSection === "safety"
                  ? "bg-green-50 text-green-700"
                  : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              Safety &amp; Compliance
            </Link>

            <Link
              href="/#leadership"
              onClick={(e) => handleNavClick(e, "#leadership")}
              className={`block px-3.5 py-2.5 rounded-xl text-sm font-bold ${
                pathname === "/" && activeSection === "leadership"
                  ? "bg-green-50 text-green-700"
                  : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              Leadership Team
            </Link>

            <Link
              href="/#testimonials"
              onClick={(e) => handleNavClick(e, "#testimonials")}
              className={`block px-3.5 py-2.5 rounded-xl text-sm font-bold ${
                pathname === "/" && activeSection === "testimonials"
                  ? "bg-green-50 text-green-700"
                  : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              Client Testimonials
            </Link>

            <Link
              href="/#why-us"
              onClick={(e) => handleNavClick(e, "#why-us")}
              className={`block px-3.5 py-2.5 rounded-xl text-sm font-bold ${
                pathname === "/" && activeSection === "why-us"
                  ? "bg-green-50 text-green-700"
                  : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              Why Speedways
            </Link>

            <Link
              href="/#enquiry"
              onClick={(e) => handleNavClick(e, "#enquiry")}
              className={`block px-3.5 py-2.5 rounded-xl text-sm font-bold ${
                pathname === "/" && activeSection === "enquiry"
                  ? "bg-green-50 text-green-700"
                  : "text-slate-800 hover:bg-slate-50"
              }`}
            >
              Enquiry &amp; RFP Desk
            </Link>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-2.5">
            <Link
              href="/#enquiry"
              onClick={(e) => handleNavClick(e, "#enquiry")}
              className="flex items-center justify-center gap-2 py-3 rounded-full bg-[#48B83D] text-white text-sm font-bold shadow-md shadow-green-500/20"
            >
              <span>Submit Corporate Enquiry</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <a
              href="tel:9820630817"
              className="flex items-center justify-center gap-2 py-2.5 rounded-full bg-slate-50 text-slate-800 text-xs font-bold border border-slate-200"
            >
              <PhoneCall className="w-3.5 h-3.5 text-green-600" />
              <span>24×7 Operations: 9820630817</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
