import React from "react";
import {
  ArrowRight,
  CheckCircle2,
  Zap,
  Globe,
  ShieldCheck,
  Smartphone,
  Store,
  Layers,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { motion } from "motion/react";

export default function HeroSection({ onOpenTenantModal, onOpenDemoModal, onOpenSimulator }) {
  return (
    <section className="relative pt-28 sm:pt-36 pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden text-center select-none">
      
      {/* ═══════════════════════════════════════════════════
          RICH VISIBLE ARCHITECTURAL HERO BACKGROUND
          ═══════════════════════════════════════════════════ */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* 1. Luminous Radial Aurora Mesh Glowing Orbs */}
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[850px] sm:w-[1100px] h-[450px] sm:h-[550px] bg-gradient-to-b from-blue-500/20 via-indigo-500/15 to-transparent rounded-full blur-[90px]" />
        <div className="absolute top-[15%] -left-[10%] w-[500px] h-[400px] bg-gradient-to-tr from-cyan-400/18 to-blue-500/10 rounded-full blur-[85px]" />
        <div className="absolute top-[10%] -right-[10%] w-[500px] h-[400px] bg-gradient-to-tl from-indigo-500/18 to-purple-500/10 rounded-full blur-[85px]" />
        
        {/* 2. Distinct Precision Dot-Grid Canvas Overlay */}
        <div 
          className="absolute inset-0 opacity-[0.45] [mask-image:radial-gradient(ellipse_80%_65%_at_50%_35%,#000_60%,transparent_100%)]"
          style={{
            backgroundImage: `radial-gradient(#2563eb 1.2px, transparent 1.2px)`,
            backgroundSize: '28px 28px'
          }}
        />

        {/* 3. Subtle Structural Concentric Accent Rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[620px] h-[620px] rounded-full border border-blue-500/15 pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[920px] h-[920px] rounded-full border border-dashed border-indigo-400/10 pointer-events-none" />
      </div>

      <div className="space-y-6 sm:space-y-8 max-w-5xl mx-auto relative z-10">
        
        {/* Main High-Impact Enterprise Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.06]">
            The Operating System for <br className="hidden sm:inline" />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 bg-clip-text text-transparent">
              Modern Retail Chains
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl font-sans font-normal text-slate-600 max-w-3xl mx-auto leading-relaxed pt-2">
            Accelerate counter billing under 300ms, eliminate inventory discrepancies across depots, and automate GSTR-1 tax compliance with zero offline downtime.
          </p>
        </motion.div>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2 w-full max-w-xl mx-auto"
        >
          <button
            onClick={onOpenDemoModal}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl btn-primary font-sans text-sm sm:text-base font-bold flex items-center justify-center gap-2.5 whitespace-nowrap cursor-pointer shadow-lg shadow-blue-500/25 hover:shadow-xl hover:scale-[1.01] active:scale-[0.99] transition-all group shrink-0"
          >
            <span>Book Free 1-on-1 Demo</span>
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform shrink-0" />
          </button>

          <button
            onClick={onOpenSimulator}
            className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-white text-slate-800 border border-slate-200 hover:bg-slate-50 hover:border-slate-300 font-sans text-sm sm:text-base font-bold flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer transition-all shadow-xs shrink-0"
          >
            <span>Launch Live Simulator</span>
            <ChevronRight className="w-4 h-4 text-slate-400" />
          </button>
        </motion.div>

        {/* Trust Badges Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs text-slate-600 pt-4"
        >
          <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-xs px-3 py-1.5 rounded-full border border-slate-200/80 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
            <span className="font-semibold text-slate-800">Sub-300ms Barcode Checkout</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-xs px-3 py-1.5 rounded-full border border-slate-200/80 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
            <span className="font-semibold text-slate-800">100% Offline Active Mode</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-xs px-3 py-1.5 rounded-full border border-slate-200/80 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
            <span className="font-semibold text-slate-800">Multi-Depot Real-Time Sync</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white/80 backdrop-blur-xs px-3 py-1.5 rounded-full border border-slate-200/80 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
            <span className="font-semibold text-slate-800">Govt GSTR-1 JSON Ready</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
