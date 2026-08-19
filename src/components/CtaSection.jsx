import React from "react";
import { Globe, CheckCircle2, ShieldCheck, Zap } from "lucide-react";
import { LiquidMetalButton } from "@/components/ui/liquid-metal-button";
import { LiquidGlassCard } from "@/components/ui/liquid-glass-card";
import { ScrollPerspectiveCard } from "@/components/ui/scroll-perspective-card";

export default function CtaSection({ onOpenTenantModal, onOpenDemoModal }) {
  return (
    <section className="py-16 md:py-24 bg-transparent relative overflow-hidden text-slate-900 border-t border-[#e2dcd0]">
      {/* Ambient background light gradients */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-[400px] h-[300px] bg-indigo-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <ScrollPerspectiveCard initialRotateX={12} initialScale={0.95}>
          <LiquidGlassCard className="flex flex-col lg:flex-row items-center justify-between gap-8 text-left p-8 sm:p-12 md:p-14 shadow-2xl shadow-blue-900/20 border-slate-800">
            
            {/* Left Content Area */}
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/30 border border-blue-400/60 text-cyan-200 text-xs font-mono-tech font-extrabold shadow-sm tracking-wide">
                <span>14-DAY RISK-FREE TRIAL · ZERO SETUP FEES</span>
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-white tracking-tight leading-[1.15] drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]">
                Ready to modernize your <br className="hidden sm:inline" />
                <span className="text-cyan-200 font-black drop-shadow-[0_2px_8px_rgba(0,0,0,0.8)]">
                  retail or wholesale store?
                </span>
              </h2>
              
              <p className="text-sm sm:text-base text-slate-100 font-sans font-semibold leading-relaxed max-w-xl drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
                Join 500+ growing retail chains across India with zero downtime data migration from Tally/Vyapar and instant offline billing.
              </p>

              {/* Trust Badges with Crystal-Clear Contrast */}
              <div className="pt-2 flex flex-wrap items-center gap-2.5 text-xs font-bold text-white">
                <div className="flex items-center gap-1.5 bg-white/10 hover:bg-white/15 px-3 py-1.5 rounded-full border border-white/20 backdrop-blur-md transition-colors shadow-xs">
                  <CheckCircle2 className="w-4 h-4 text-emerald-300 shrink-0" />
                  <span>Free Data Migration</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/10 hover:bg-white/15 px-3 py-1.5 rounded-full border border-white/20 backdrop-blur-md transition-colors shadow-xs">
                  <Zap className="w-4 h-4 text-cyan-300 shrink-0" />
                  <span>100% Offline Active</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/10 hover:bg-white/15 px-3 py-1.5 rounded-full border border-white/20 backdrop-blur-md transition-colors shadow-xs">
                  <ShieldCheck className="w-4 h-4 text-purple-300 shrink-0" />
                  <span>GST Audit Ready</span>
                </div>
              </div>
            </div>

            {/* Right Side Action Button */}
            <div className="flex items-center justify-center shrink-0 font-sans relative z-10 w-full lg:w-auto lg:ml-auto">
              <LiquidMetalButton label="Book 1-on-1 Demo" onClick={onOpenDemoModal} />
            </div>

          </LiquidGlassCard>
        </ScrollPerspectiveCard>
      </div>
    </section>
  );
}
