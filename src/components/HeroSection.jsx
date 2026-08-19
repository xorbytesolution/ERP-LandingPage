import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Globe,
  Sparkles,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Highlighter } from "@/components/ui/highlighter";

export default function HeroSection({ onOpenTenantModal, onOpenDemoModal, onOpenSimulator }) {
  // Rotating Headline Scrambler Words with Icons
  const rotatingWords = [
    { text: "Enterprise POS Counters", icon: "⚡", gradient: "from-blue-600 to-indigo-600" },
    { text: "Supermarket Chains", icon: "🛒", gradient: "from-blue-600 to-cyan-600" },
    { text: "Apparel & Garment Hubs", icon: "👔", gradient: "from-indigo-600 to-purple-600" },
    { text: "Wholesale & FMCG Depots", icon: "📦", gradient: "from-blue-600 to-indigo-600" },
    { text: "Pharmacy & Retail Chains", icon: "💊", gradient: "from-cyan-600 to-blue-600" },
    { text: "Multi-Store Retailers", icon: "🏬", gradient: "from-emerald-600 to-teal-600" },
  ];

  const [wordIndex, setWordIndex] = useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 3800);
    return () => clearInterval(timer);
  }, [rotatingWords.length]);

  const activeWord = rotatingWords[wordIndex] || rotatingWords[0];

  return (
    <section className="relative w-full pt-24 sm:pt-32 pb-16 sm:pb-24 overflow-hidden text-center select-none z-0">
      
      {/* ═══════════════════════════════════════════════════
          BESPOKE CLEAN ISOMETRIC PAPER BLUEPRINT HERO BACKGROUND
          ═══════════════════════════════════════════════════ */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        {/* 1. Clean Isometric Blueprint Paper Wallpaper */}
        <div
          className="absolute inset-0 opacity-85 bg-cover bg-center pointer-events-none"
          style={{
            backgroundImage: "url('/hero-bg.jpg')",
          }}
        />

        {/* 2. Authentic Tactile Crumpled Paper Texture Overlay (Consistent with Site) */}
        <div
          className="absolute inset-0 opacity-40 mix-blend-multiply bg-repeat pointer-events-none"
          style={{
            backgroundImage: "url('/crumpled-paper.jpg')",
            backgroundSize: "700px 700px",
          }}
        />

        {/* 3. Bottom Fade Transition into Cockpit Section */}
        <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-b from-transparent to-[#f7f5f0] pointer-events-none" />
      </div>

      <div className="space-y-6 sm:space-y-8 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main High-Impact Capsule Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-3"
        >
          <h1 className="text-[34px] sm:text-5xl md:text-6xl lg:text-7xl xl:text-[76px] font-display font-black text-slate-900 tracking-tight leading-[1.12]">
            <span className="inline-block">The All-in-One Operating System for</span>{" "}
            <br className="hidden sm:inline" />
            <span className="relative inline-flex items-center justify-center max-w-full min-h-[58px] sm:min-h-[76px] md:min-h-[88px] overflow-hidden align-middle my-2 px-4 sm:px-8 py-1.5 sm:py-2.5 rounded-2xl sm:rounded-3xl bg-[#fcfaf6]/95 border border-[#ded7c7] shadow-[0_12px_35px_-8px_rgba(43,92,253,0.14),inset_0_1.5px_1px_rgba(255,255,255,0.95)] ring-1 ring-blue-50/50 transition-all duration-500">
              <AnimatePresence mode="wait">
                <motion.span
                  key={activeWord.text}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -20, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="inline-flex items-center gap-2 sm:gap-3.5 font-display font-black tracking-tight whitespace-nowrap select-none text-2xl sm:text-3xl md:text-5xl lg:text-6xl"
                >
                  <span className="text-2xl sm:text-4xl md:text-5xl drop-shadow-xs shrink-0">
                    {activeWord.icon}
                  </span>
                  <span className={`bg-gradient-to-r ${activeWord.gradient} bg-clip-text text-transparent`}>
                    {activeWord.text}
                  </span>
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg font-sans font-medium text-slate-700 max-w-3xl mx-auto leading-relaxed pt-2">
            <span className="font-serif-accent italic text-slate-800 font-normal text-base sm:text-lg md:text-xl">
              Engineered for{" "}
            </span>
            <Highlighter action="highlight" color="#BAE6FD" delay={1.2} className="px-1.5 py-0.5">
              lightning-speed billing
            </Highlighter>
            ,{" "}
            <Highlighter action="underline" color="#2563EB" delay={1.35}>
              zero inventory leakages
            </Highlighter>{" "}
            &amp;{" "}
            <Highlighter action="highlight" color="#FEF08A" delay={1.6} className="px-1.5 py-0.5">
              audit-grade tax filing
            </Highlighter>
            .
          </p>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xs sm:text-sm md:text-base text-slate-600 max-w-3xl mx-auto leading-relaxed font-sans font-medium px-2"
        >
          Sub-300ms POS Counter Billing, Real-Time Multi-Warehouse Stock Sync, Automated GSTR-1 &amp; 3B Tax Filing, 
          1-Click WhatsApp Udhaar Recovery &amp; AI Purchase OCR.
        </motion.p>

        {/* Action CTAs with Authentic Handwritten Doodle Annotations */}
        <div className="relative inline-block mx-auto pt-4">
          {/* Left Handwritten Doodle Note & Curved Arrow */}
          <div className="hidden md:flex absolute -top-6 -left-48 lg:-left-56 items-center gap-1 font-handwriting text-base lg:text-lg font-bold text-blue-600 pointer-events-none select-none -rotate-6">
            <span>100% Offline Capable</span>
            <svg
              className="w-10 h-10 text-blue-500 shrink-0 transform translate-y-3.5"
              viewBox="0 0 60 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Smooth organic curve swooshing down-right directly to button corner */}
              <path d="M 6 8 Q 32 4 48 26" />
              <path d="M 35 24 Q 45 27 50 28 Q 48 19 46 13" />
            </svg>
          </div>

          {/* Right Handwritten Doodle Note & Curved Arrow */}
          <div className="hidden md:flex absolute -top-6 -right-44 lg:-right-52 items-center gap-1 font-handwriting text-base lg:text-lg font-bold text-emerald-600 pointer-events-none select-none rotate-3">
            <svg
              className="w-10 h-10 text-emerald-500 shrink-0 transform translate-y-3.5"
              viewBox="0 0 60 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Smooth organic curve swooshing down-left directly to button corner */}
              <path d="M 54 8 Q 28 4 12 26" />
              <path d="M 25 24 Q 15 27 10 28 Q 12 19 14 13" />
            </svg>
            <span>In Real Time ⚡</span>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col gap-2.5 justify-center items-center"
          >
            <button
              onClick={onOpenDemoModal}
              className="w-full sm:w-auto px-8 py-4 btn-primary font-sans text-sm sm:text-base flex items-center justify-center gap-2.5 cursor-pointer shadow-lg shadow-blue-500/25 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all group"
            >
              <span>Book Free 1-on-1 Demo</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            {/* Handwritten Sub-note under Button */}
            <div className="font-handwriting text-xs sm:text-sm text-slate-500 font-bold flex items-center justify-center">
              <span>14-Day Free Access · Zero Setup Fees</span>
            </div>
          </motion.div>
        </div>

        {/* Trust Badges with Tech Mono Telemetry */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="grid grid-cols-2 gap-2 max-w-sm mx-auto sm:max-w-none sm:flex sm:flex-wrap sm:items-center sm:justify-center sm:gap-3 text-[11px] sm:text-xs text-slate-600 pt-2"
        >
          <div className="flex items-center justify-center gap-1.5 bg-white/95 px-3 py-1.5 rounded-full border border-slate-200 shadow-xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span className="font-mono-tech font-bold text-emerald-700">0ms</span>
            <span className="font-sans font-semibold text-slate-700">Multi-Counter Sync</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 bg-white/95 px-3 py-1.5 rounded-full border border-slate-200 shadow-xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span className="font-mono-tech font-bold text-emerald-700">100%</span>
            <span className="font-sans font-semibold text-slate-700">Offline Resilience</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 bg-white/95 px-3 py-1.5 rounded-full border border-slate-200 shadow-xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span className="font-mono-tech font-bold text-blue-700">&lt; 300ms</span>
            <span className="font-sans font-semibold text-slate-700">Barcode Speed</span>
          </div>
          <div className="flex items-center justify-center gap-1.5 bg-white/95 px-3 py-1.5 rounded-full border border-slate-200 shadow-xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span className="font-sans font-semibold text-slate-700">Govt GST Ready</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
