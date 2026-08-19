import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles, Zap, ShieldCheck } from "lucide-react";
import LiveSimulatorWidget from "@/components/LiveSimulatorWidget";
import CtaSection from "@/components/CtaSection";

export default function SimulatorPage({ onOpenTenantModal, onOpenDemoModal }) {
  return (
    <div className="min-h-screen bg-paper-canvas text-slate-900 pt-24 sm:pt-28 pb-16">
      {/* Top Breadcrumb & Page Banner */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-blue-600 hover:text-blue-700 font-sans transition-colors mb-4 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>

        <div className="space-y-2 text-center max-w-2xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full badge-blue text-[11px] font-mono-tech font-bold uppercase tracking-wider shadow-xs">
            <Zap className="w-3.5 h-3.5 text-blue-600 animate-pulse" />
            <span>Interactive Sandbox Environment</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-slate-900 tracking-tight">
            Live ERP Billing &amp; Sync <br />
            <span className="font-serif-accent italic text-blue-600 font-normal">
              Interactive Simulator
            </span>
          </h1>

          <p className="text-slate-600 text-xs sm:text-sm font-sans font-medium">
            Test real-time barcode checkout, multi-branch depot synchronization, automated WhatsApp Udhaar collection, and OCR AI extraction live in your browser.
          </p>
        </div>

        {/* Simulator Cockpit */}
        <LiveSimulatorWidget onOpenDemoModal={onOpenDemoModal} />
      </div>

      {/* Bottom CTA Callout */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <CtaSection
          onOpenTenantModal={onOpenTenantModal}
          onOpenDemoModal={onOpenDemoModal}
        />
      </div>
    </div>
  );
}
