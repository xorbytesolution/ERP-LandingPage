import React from "react";
import { FaqMarquee } from "@/components/ui/faq-marquee";

const allFaqs = [
  {
    category: "POS & Offline",
    q: "Does Xorbyte ERP work 100% offline if store internet cuts out?",
    a: "Yes, 100%! With local IndexedDB caching, cashiers can continue barcode scanning, bill printing, and UPI cash billing without internet. All receipts auto-sync to cloud when online.",
  },
  {
    category: "GST & Tax Filing",
    q: "Is Xorbyte ERP compliant with Indian GST & e-Invoicing laws?",
    a: "Yes! Automatic SGST, CGST, and IGST splits, dynamic apparel tax thresholds (5% vs 12%), HSN validation, and 1-click GSTR-1 / GSTR-3B JSON exports for government portal.",
  },
  {
    category: "Data Migration",
    q: "Can I import customer, supplier & stock data from Tally or Vyapar?",
    a: "Yes! Our built-in Data Import Wizard imports Excel / CSV spreadsheets of your entire item catalog, customer ledgers, and opening stock balances in under 5 minutes.",
  },
  {
    category: "WhatsApp Udhaar",
    q: "How does the WhatsApp Udhaar Payment Link feature work?",
    a: "With 1 click, Xorbyte ERP dispatches a WhatsApp message with PDF bill & UPI scan-to-pay QR link. Once customer pays, your double-entry ledger auto-reconciles instantly.",
  },
  {
    category: "Security & Cloud",
    q: "Is our store business and financial data secure?",
    a: "100% isolated database tenants with 256-bit SSL encryption and automated daily cloud backups. Your profit margins and customer phone numbers remain strictly private.",
  },
  {
    category: "Multi-Store Sync",
    q: "Can I monitor live sales across 5+ branch stores from my phone?",
    a: "Yes! The Xorbyte Mobile Owner Dashboard gives you real-time live revenue counters, depot stock transfer approvals, and cashier fraud alerts on your smartphone 24/7.",
  },
  {
    category: "Hardware",
    q: "Which thermal receipt printers & barcode scanners are supported?",
    a: "Compatible with all 2-inch and 3-inch ESC/POS thermal printers (USB, Bluetooth, Wi-Fi), USB laser barcode guns, 2D QR scanners, and electronic weighing scales.",
  },
  {
    category: "Smart Theft AI",
    q: "How does AI Theft & Cashier Leakage Detection work?",
    a: "Xorbyte AI flags suspicious patterns like excessive bill cancellations, abnormal item line deletions, and late-night cash drawer openings with instant owner notifications.",
  },
  {
    category: "Setup & Support",
    q: "How long does onboarding take and is customer support included?",
    a: "Most stores go live in under 20 minutes. You get dedicated 24/7 WhatsApp & remote phone support from our senior ERP engineering specialists with free staff training.",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="py-16 md:py-24 bg-transparent border-t border-[#e2dcd0] overflow-hidden relative w-full select-none">
      
      {/* 1. Header (Centered Boxed) */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3 mb-10 sm:mb-14 relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-slate-900 tracking-tight leading-[1.2]">
          Got Questions? <br className="hidden sm:inline" />
          <span className="text-blue-600">
            We've Got Clear Answers
          </span>
        </h2>
        <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed font-medium">
          Hover over any card to pause and explore how Xorbyte ERP powers modern retail and wholesale businesses.
        </p>
      </div>

      {/* 2. Full-Width Edge-to-Edge FAQ Marquee Showcase */}
      <div className="w-full relative z-10">
        <FaqMarquee faqs={allFaqs} />
      </div>

      {/* 3. Bottom Help Contact Link */}
      <div className="max-w-3xl mx-auto px-4 text-center pt-8 text-xs sm:text-sm font-sans font-medium text-slate-500 relative z-10">
        Still have a unique question?{" "}
        <a
          href="https://wa.me/919999999999"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:text-blue-700 font-bold underline underline-offset-4 decoration-blue-300"
        >
          Chat directly with our ERP Architects on WhatsApp →
        </a>
      </div>

    </section>
  );
}
