"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Phone, ChevronDown, Menu, X, ArrowUpRight, MessageCircle } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { servicesData } from "@/data/services";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services", hasDropdown: true },
    { name: "Partners", href: "/hospital-diagnostic-partners" },
    { name: "About Us", href: "/about-us" },
    { name: "FAQs", href: "/faqs" },
    { name: "Contact", href: "/contact-us" },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-200/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-lg bg-care-navy flex items-center justify-center text-brand-300 font-bold text-xl shadow-sm border border-brand-900 group-hover:bg-brand-900 transition-colors">
                <span className="text-brand-400 font-serif">✚</span>
              </div>
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5">
                  <span className="font-bold text-care-dark tracking-tight text-lg sm:text-xl font-sans group-hover:text-brand-900 transition-colors">
                    FIRST HEALTH CARE
                  </span>
                </div>
                <span className="text-[11px] font-medium tracking-wide text-slate-500 uppercase">
                  Islamabad &amp; Rawalpindi
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => {
                const isActive =
                  pathname === link.href ||
                  (link.href !== "/" && pathname.startsWith(link.href));

                if (link.hasDropdown) {
                  return (
                    <div
                      key={link.name}
                      className="relative"
                      onMouseEnter={() => setServicesDropdownOpen(true)}
                      onMouseLeave={() => setServicesDropdownOpen(false)}
                    >
                      <Link
                        href={link.href}
                        className={`inline-flex items-center gap-1.5 px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                          isActive
                            ? "text-brand-900 bg-brand-50 font-semibold"
                            : "text-slate-700 hover:text-brand-900 hover:bg-slate-50"
                        }`}
                      >
                        {link.name}
                        <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
                      </Link>

                      {/* Dropdown Menu */}
                      {servicesDropdownOpen && (
                        <div className="absolute top-full left-0 w-80 bg-white border border-slate-200 rounded-xl shadow-xl p-2.5 z-50 animate-in fade-in slide-in-from-top-1 duration-150">
                          <div className="text-[11px] font-mono uppercase text-slate-400 px-3 py-1.5 tracking-wider border-b border-slate-100">
                            Coordinated Care Routes
                          </div>
                          <div className="mt-1.5 space-y-0.5">
                            {servicesData.map((service) => (
                              <Link
                                key={service.id}
                                href={`/${service.slug}`}
                                className="group/item flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-slate-700 hover:text-brand-900 hover:bg-brand-50/60 transition-colors"
                              >
                                <div className="flex items-center gap-2.5">
                                  <span className="font-mono text-[11px] text-slate-400 group-hover/item:text-brand-700">
                                    {service.number}
                                  </span>
                                  <span>{service.title}</span>
                                </div>
                                <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 opacity-0 group-hover/item:opacity-100 transition-opacity" />
                              </Link>
                            ))}
                          </div>
                          <div className="mt-2 pt-2 border-t border-slate-100 px-2">
                            <Link
                              href="/services"
                              className="text-xs text-brand-800 font-semibold hover:underline flex items-center justify-between p-1"
                            >
                              <span>View all care routes &amp; arrangements</span>
                              <span>→</span>
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                      isActive
                        ? "text-brand-900 bg-brand-50 font-semibold"
                        : "text-slate-700 hover:text-brand-900 hover:bg-slate-50"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
            </nav>

            {/* Desktop Actions */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={siteConfig.phoneTel}
                className="inline-flex items-center gap-2 px-3 py-2 text-sm font-semibold text-care-navy hover:text-brand-900 transition-colors"
              >
                <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-care-slate">
                  <Phone className="w-4 h-4 text-brand-800" />
                </div>
                <div className="flex flex-col text-left">
                  <span className="text-[10px] uppercase font-mono tracking-wider text-slate-500">Care Desk</span>
                  <span className="text-xs font-bold leading-tight">{siteConfig.phone}</span>
                </div>
              </a>

              <Link
                href="#enquiry-section"
                className="inline-flex items-center justify-center px-4 py-2.5 text-sm font-semibold text-white bg-care-navy hover:bg-brand-900 rounded-lg shadow-sm transition-all duration-200 hover:shadow-md"
              >
                Request a Call
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="flex lg:hidden items-center gap-2">
              <a
                href={siteConfig.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Care Desk"
                className="p-2 text-emerald-600 bg-emerald-50 rounded-lg border border-emerald-200"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-700 hover:text-care-navy hover:bg-slate-100 rounded-lg transition-colors"
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Slide-over Mobile Navigation */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
      />
    </>
  );
}
