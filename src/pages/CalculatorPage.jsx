import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Sparkles, ShieldCheck, ArrowRight } from "lucide-react";
import RoiCalculator from "@/components/RoiCalculator";
import CtaSection from "@/components/CtaSection";

export default function CalculatorPage({ onOpenTenantModal, onOpenDemoModal }) {
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
      </div>

      {/* Main ROI Calculator Component */}
      <RoiCalculator onOpenDemoModal={onOpenDemoModal} />

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
