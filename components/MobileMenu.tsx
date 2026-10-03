"use client";

import React from "react";
import Link from "next/link";
import { X, Phone, MessageCircle, ArrowRight, MapPin, Shield } from "lucide-react";
import { siteConfig } from "@/data/siteConfig";
import { servicesData } from "@/data/services";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 max-w-sm w-full bg-white shadow-2xl z-50 flex flex-col overflow-y-auto animate-in slide-in-from-right duration-200">
        {/* Drawer Header */}
        <div className="p-4 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-care-navy flex items-center justify-center text-brand-300 font-bold text-sm">
              ✚
            </div>
            <div>
              <span className="font-bold text-sm text-care-dark block leading-none">
                First Health Care
              </span>
              <span className="text-[10px] text-slate-500 font-mono uppercase">
                Care Desk
              </span>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-slate-500 hover:text-slate-900 rounded-lg hover:bg-slate-200/60"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Call Desk CTAs */}
        <div className="p-4 bg-brand-50/50 border-b border-brand-100/60 flex flex-col gap-2">
          <a
            href={siteConfig.phoneTel}
            className="flex items-center justify-between w-full px-3.5 py-2.5 bg-care-navy text-white rounded-lg text-xs font-semibold shadow-sm"
          >
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4 text-brand-300" />
              <span>Call Care Desk: {siteConfig.phone}</span>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
          </a>

          <a
            href={siteConfig.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-between w-full px-3.5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-xs font-semibold shadow-sm"
          >
            <div className="flex items-center gap-2">
              <MessageCircle className="w-4 h-4 text-emerald-200" />
              <span>Talk on WhatsApp</span>
            </div>
            <ArrowRight className="w-3.5 h-3.5 text-emerald-200" />
          </a>
        </div>

        {/* Primary Links */}
        <div className="px-4 py-3 border-b border-slate-100">
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
            Main Navigation
          </span>
          <nav className="flex flex-col space-y-1">
            <Link
              href="/"
              onClick={onClose}
              className="px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100 rounded-md"
            >
              Home
            </Link>
            <Link
              href="/services"
              onClick={onClose}
              className="px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100 rounded-md"
            >
              Services Overview
            </Link>
            <Link
              href="/hospital-diagnostic-partners"
              onClick={onClose}
              className="px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100 rounded-md"
            >
              Diagnostic &amp; Hospital Partners
            </Link>
            <Link
              href="/about-us"
              onClick={onClose}
              className="px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100 rounded-md"
            >
              About Us
            </Link>
            <Link
              href="/faqs"
              onClick={onClose}
              className="px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100 rounded-md"
            >
              Frequently Asked Questions
            </Link>
            <Link
              href="/contact-us"
              onClick={onClose}
              className="px-3 py-2 text-sm font-medium text-slate-800 hover:bg-slate-100 rounded-md"
            >
              Contact Care Desk
            </Link>
          </nav>
        </div>

        {/* Care Routes Section */}
        <div className="px-4 py-3 flex-1">
          <span className="text-[10px] font-mono uppercase tracking-wider text-slate-400 block mb-2">
            8 Coordinated Care Routes
          </span>
          <div className="space-y-1">
            {servicesData.map((s) => (
              <Link
                key={s.id}
                href={`/${s.slug}`}
                onClick={onClose}
                className="flex items-center justify-between px-3 py-2 text-xs font-medium text-slate-700 hover:text-brand-900 hover:bg-brand-50/50 rounded-lg group"
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono text-slate-400 text-[11px] group-hover:text-brand-700">
                    {s.number}
                  </span>
                  <span>{s.title}</span>
                </div>
                <ArrowRight className="w-3 h-3 text-slate-400 group-hover:text-brand-700" />
              </Link>
            ))}
          </div>
        </div>

        {/* Coverage Info */}
        <div className="p-4 bg-slate-50 border-t border-slate-200 text-xs text-slate-600">
          <div className="flex items-center gap-1.5 font-semibold text-slate-800 mb-1">
            <MapPin className="w-3.5 h-3.5 text-brand-700" />
            <span>Service Coverage</span>
          </div>
          <p className="text-[11px] text-slate-500 mb-2">
            Islamabad · Rawalpindi · DHA Phase 1 &amp; 2 · Bahria Town
          </p>
          <div className="flex items-center gap-1.5 text-[11px] text-slate-500">
            <Shield className="w-3 h-3 text-slate-400" />
            <span>Human care. Scope &amp; charges confirmed before service.</span>
          </div>
        </div>
      </div>
    </div>
  );
}
