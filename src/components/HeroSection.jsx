import React, { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Globe,
  ShieldCheck,
  Smartphone,
  Store,
  Layers,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Highlighter } from "@/components/ui/highlighter";
import { FlickeringGrid } from "@/components/ui/flickering-grid";

export default function HeroSection({ onOpenTenantModal, onOpenDemoModal, onOpenSimulator }) {
  // Rotating Business Segment Scrambler
  const rotatingWords = [
    { text: "Supermarket Chains", icon: "🛒", gradient: "from-blue-600 to-cyan-600" },
    { text: "Apparel & Garment Stores", icon: "👕", gradient: "from-indigo-600 to-purple-600" },
    { text: "Wholesale & FMCG Hubs", icon: "📦", gradient: "from-blue-600 to-indigo-600" },
    { text: "Pharmacy & Medical Retail", icon: "💊", gradient: "from-cyan-600 to-blue-600" },
    { text: "Multi-Store Retail Brands", icon: "🏬", gradient: "from-emerald-600 to-teal-600" },
  ];

  const [wordIndex, setWordIndex] = useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [rotatingWords.length]);

  return (
    <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden text-center select-none">
      
      {/* ═══════════════════════════════════════════════════
          DYNAMIC ARCHITECTURAL BACKGROUND
          ═══════════════════════════════════════════════════ */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Interactive Subtle Micro-Grid */}
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_75%_65%_at_50%_40%,#000_35%,transparent_100%)] opacity-60">
          <FlickeringGrid
            squareSize={3}
            gridGap={10}
            color="rgb(37, 99, 235)"
            maxOpacity={0.2}
            flickerChance={0.15}
            className="w-full h-full"
          />
        </div>

        {/* Dynamic Concentric Orbit Rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] h-[540px] rounded-full border border-blue-400/10 animate-spin-slow [animation-duration:100s]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-dashed border-indigo-400/10 animate-spin-slow [animation-duration:160s] [animation-direction:reverse]" />

        {/* Ambient Floating Aurora Mesh */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[320px] bg-gradient-to-tr from-blue-600/15 via-indigo-500/10 to-cyan-400/12 rounded-full blur-[100px] animate-float-gentle" />
        <div className="absolute top-1/3 left-1/4 w-[450px] h-[240px] bg-gradient-to-br from-cyan-400/10 via-emerald-400/8 to-blue-500/10 rounded-full blur-[90px] animate-float-subtle" />

        {/* Tactile Crumpled Paper Layer */}
        <div
          className="absolute inset-0 opacity-15 mix-blend-multiply bg-repeat pointer-events-none"
          style={{
            backgroundImage: "url('/crumpled-paper.jpg')",
            backgroundSize: "750px 750px",
          }}
        />
      </div>

      <div className="space-y-6 sm:space-y-8 max-w-5xl mx-auto relative z-10">
        
        {/* High-Converting Pre-Header Capsule */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/90 border border-slate-200/90 shadow-xs text-xs font-semibold text-slate-800 backdrop-blur-sm"
        >
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse-live" />
          <span className="text-slate-600">Built for Indian &amp; Global Retail</span>
          <span className="text-slate-300">|</span>
          <span className="text-blue-600 font-bold">100% Offline-First Cloud ERP</span>
        </motion.div>

        {/* Main High-Impact Unified Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-3"
        >
          <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-black text-slate-900 tracking-tight leading-[1.12]">
            <span>The Operating System for</span>{" "}
            <br className="hidden sm:inline" />
            <span className="relative inline-flex items-center justify-center max-w-full min-h-[56px] sm:min-h-[74px] md:min-h-[84px] overflow-hidden align-middle my-2 px-4 sm:px-7 py-1.5 sm:py-2 rounded-2xl sm:rounded-3xl bg-[#fcfaf6]/95 border border-[#ded7c7] shadow-[0_12px_35px_-8px_rgba(43,92,253,0.12),inset_0_1.5px_1px_rgba(255,255,255,0.95)] ring-1 ring-blue-50/50 transition-all duration-500">
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotatingWords[wordIndex].text}
                  initial={{ y: 22, opacity: 0, filter: "blur(4px)" }}
                  animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: -22, opacity: 0, filter: "blur(4px)" }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-flex items-center gap-2 sm:gap-3 font-display font-black tracking-tight whitespace-nowrap select-none text-2xl sm:text-3xl md:text-5xl lg:text-6xl"
                >
                  <span className="text-2xl sm:text-4xl md:text-5xl drop-shadow-xs shrink-0">
                    {rotatingWords[wordIndex].icon}
                  </span>
                  <span className={`bg-gradient-to-r ${rotatingWords[wordIndex].gradient} bg-clip-text text-transparent`}>
                    {rotatingWords[wordIndex].text}
                  </span>
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg font-sans font-medium text-slate-700 max-w-3xl mx-auto leading-relaxed pt-2">
            Accelerate counter billing, eliminate stock discrepancies, and automate GST tax filing across all your store branches in real time.
          </p>
        </motion.div>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2 w-full max-w-2xl mx-auto"
        >
          <button
            onClick={onOpenDemoModal}
            className="w-full sm:w-auto px-7 py-3.5 rounded-2xl btn-primary font-sans text-sm sm:text-base font-bold flex items-center justify-center gap-2.5 whitespace-nowrap cursor-pointer shadow-lg shadow-blue-500/25 hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all group shrink-0"
          >
            <span>Book Free 1-on-1 Demo</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform shrink-0" />
          </button>

          <button
            onClick={onOpenSimulator}
            className="w-full sm:w-auto px-6 py-3.5 rounded-2xl btn-secondary font-sans text-sm sm:text-base font-bold flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer transition-all hover:scale-[1.02] active:scale-[0.98] shrink-0"
          >
            <span>Interactive Simulator</span>
          </button>
        </motion.div>

        {/* Trust Badges Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs text-slate-600 pt-3"
        >
          <div className="flex items-center gap-1.5 bg-white/90 px-3.5 py-1.5 rounded-full border border-slate-200 shadow-xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span className="font-semibold text-slate-800">100% Offline Active Billing</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white/90 px-3.5 py-1.5 rounded-full border border-slate-200 shadow-xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span className="font-semibold text-slate-800">Real-Time Multi-Store Sync</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white/90 px-3.5 py-1.5 rounded-full border border-slate-200 shadow-xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span className="font-semibold text-slate-800">1-Click GSTR-1 &amp; 3B JSON</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white/90 px-3.5 py-1.5 rounded-full border border-slate-200 shadow-xs">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
            <span className="font-semibold text-slate-800">Automated WhatsApp Udhaar</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
