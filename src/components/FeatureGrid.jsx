import React, { useState } from "react";
import { RadialArcShowcase, XORBYTE_ERP_ITEMS } from "@/components/ui/radial-arc-showcase";
import { ArrowRight, Zap } from "lucide-react";

export default function FeatureGrid({ onOpenDemoModal }) {
  // Pure click-driven state: stays on 01 permanently until user clicks!
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section
      id="features"
      className="pt-10 md:pt-14 pb-14 md:pb-20 relative bg-transparent border-t border-[#e5ded0]/60 select-none overflow-hidden"
    >
      {/* Soft Ambient Radiance Orbs */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-blue-400/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-indigo-400/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 relative z-10">
        
        {/* ─── SECTION HEADER ─── */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-slate-900 tracking-tight leading-[1.18]">
            Top Benefits of Implementing <br className="hidden sm:inline" />
            <span className="text-blue-600">Xorbyte Retail &amp; Supermarket ERP</span>
          </h2>

          <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed font-medium max-w-2xl mx-auto">
            <span className="font-serif-accent italic text-slate-800 text-base sm:text-lg">Engineered for </span>
            sub-300ms counter billing, live multi-branch inventory mesh &amp; automated WhatsApp Khata recovery.
          </p>
        </div>

        {/* ─── GRAND INTERACTIVE RADIAL ARC SHOWCASE (PURE CLICK-DRIVEN) ─── */}
        <div className="w-full flex items-center justify-center">
          <RadialArcShowcase
            activeIdx={activeIdx}
            onSelectIdx={setActiveIdx}
            onOpenDemoModal={onOpenDemoModal}
          />
        </div>

        {/* ─── BOTTOM CTA BUTTON ─── */}
        <div className="flex items-center justify-center pt-2">
          <button
            onClick={onOpenDemoModal}
            className="px-8 py-3.5 rounded-2xl btn-primary text-sm font-bold flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-blue-500/25 group hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>Experience {XORBYTE_ERP_ITEMS[activeIdx]?.shortLabel} in Live Demo</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
}
