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
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { motion } from "motion/react";

export default function HeroSection({ onOpenTenantModal, onOpenDemoModal, onOpenSimulator }) {
  const retailSegments = [
    { label: "Supermarkets & Groceries", count: "300+ stores" },
    { label: "Apparel & Garment Chains", count: "120+ outlets" },
    { label: "FMCG Wholesale & Depots", count: "80+ warehouses" },
    { label: "Pharmacy & Retail Chains", count: "95+ stores" },
  ];

  return (
    <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden text-center select-none">
      
      {/* ═══════════════════════════════════════════════════
          HUMAN-CRAFTED ARCHITECTURAL BACKGROUND (CLEAN & SUBTLE)
          ═══════════════════════════════════════════════════ */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Subtle Precision Grid Background */}
        <div 
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: `linear-gradient(#0f172a 1px, transparent 1px), linear-gradient(to right, #0f172a 1px, transparent 1px)`,
            backgroundSize: '48px 48px'
          }}
        />
        
        {/* Soft Radial Ambient Glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-b from-blue-500/10 via-indigo-500/5 to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/3 -right-20 w-[400px] h-[400px] bg-sky-400/5 rounded-full blur-3xl" />
      </div>

      <div className="space-y-6 sm:space-y-8 max-w-5xl mx-auto relative z-10">
        
        {/* Enterprise Status Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/80 border border-blue-200/80 text-xs font-semibold text-blue-900 shadow-2xs backdrop-blur-sm"
        >
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse-live" />
          <span>Next-Generation Retail Cloud ERP</span>
          <span className="text-blue-300">·</span>
          <span className="text-blue-700 font-bold">100% Offline-Active POS</span>
        </motion.div>

        {/* Main High-Impact Enterprise Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="space-y-4"
        >
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-display font-extrabold text-slate-900 tracking-tight leading-[1.08]">
            The Operating System for <br className="hidden sm:inline" />
            <span className="text-blue-600">
              Modern Supermarkets &amp; Retail Chains
            </span>
          </h1>

          <p className="text-base sm:text-lg md:text-xl font-sans font-normal text-slate-600 max-w-3xl mx-auto leading-relaxed pt-1">
            Accelerate counter billing under 300ms, eliminate inventory discrepancies across depots, and automate GSTR-1 tax compliance with zero offline downtime.
          </p>
        </motion.div>

        {/* Action CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 pt-2 w-full max-w-xl mx-auto"
        >
          <button
            onClick={onOpenDemoModal}
            className="w-full sm:w-auto px-8 py-3.5 rounded-xl btn-primary font-sans text-sm sm:text-base font-bold flex items-center justify-center gap-2.5 whitespace-nowrap cursor-pointer shadow-md shadow-blue-500/20 hover:shadow-lg hover:scale-[1.01] active:scale-[0.99] transition-all group shrink-0"
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

        {/* Supported Retail Verticals Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="pt-4"
        >
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {retailSegments.map((seg, idx) => (
              <div 
                key={idx}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-slate-200/80 text-xs text-slate-700 shadow-2xs"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span className="font-semibold text-slate-800">{seg.label}</span>
                <span className="text-[10px] text-slate-500 font-medium font-mono">({seg.count})</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Trust Badges Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.35 }}
          className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs text-slate-600 pt-2"
        >
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="font-medium text-slate-700">Sub-300ms Barcode Checkout</span>
          </div>
          <span className="text-slate-300 hidden sm:inline">·</span>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="font-medium text-slate-700">100% Offline-Active Mode</span>
          </div>
          <span className="text-slate-300 hidden sm:inline">·</span>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="font-medium text-slate-700">Multi-Depot Real-Time Sync</span>
          </div>
          <span className="text-slate-300 hidden sm:inline">·</span>
          <div className="flex items-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
            <span className="font-medium text-slate-700">Govt GSTR-1 JSON Ready</span>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
