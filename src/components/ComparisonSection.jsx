  import React, { useState } from "react";
import {
  Check,
  X,
  ArrowRight,
  Sparkles,
  Zap,
  ShieldCheck,
  Smartphone,
  WifiOff,
  ScanLine,
  MessageSquare,
  Layers,
  FileSpreadsheet,
  RefreshCw,
} from "lucide-react";
import { motion } from "motion/react";
import { ScrollPerspectiveCard } from "@/components/ui/scroll-perspective-card";
import { BorderBeam } from "@/components/ui/border-beam";
import { Highlighter } from "@/components/ui/highlighter";

export default function ComparisonSection({ onOpenDemoModal }) {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const comparisonRows = [
    {
      icon: Zap,
      feature: "Counter Billing & Barcode Speed",
      legacy: "Slow 35-50 sec queue lag (Heavy desktop freezes)",
      xorbyte: "Sub-300ms laser scan with instant dynamic QR",
      badge: "<300ms SPEED",
    },
    {
      icon: WifiOff,
      feature: "0ms Offline POS Resilience",
      legacy: "Desktop app breaks/locks without active license check",
      xorbyte: "100% Offline PWA + Auto Cloud Sync (IndexedDB)",
      badge: "ZERO CRASH",
    },
    {
      icon: Smartphone,
      feature: "Multi-Store Cloud Mesh & Mobile Owner App",
      legacy: "Single PC lock-in; manual pen-drive file copying",
      xorbyte: "Live phone dashboard for sales, stock & fraud alerts",
      badge: "ANY DEVICE",
    },
    {
      icon: Layers,
      feature: "Multi-Branch & Central Depot Stock Sync",
      legacy: "Day-end sync batches with recurring stock mismatches",
      xorbyte: "Real-time SSE inventory deduction across all outlets",
      badge: "0ms LATENCY",
    },
    {
      icon: MessageSquare,
      feature: "WhatsApp Udhaar CRM & UPI QR Links",
      legacy: "Manual phone calls & expensive 3rd-party SMS plugins",
      xorbyte: "Automated WhatsApp bills with 1-click UPI scan QR",
      badge: "5X RECOVERY",
    },
    {
      icon: FileSpreadsheet,
      feature: "Automated GSTR-1 & Dynamic Apparel Slabs",
      legacy: "Manual CA Excel reconciliation & static tax rates",
      xorbyte: "Auto 5%/12% apparel rule split + 1-click JSON download",
      badge: "CA AUDIT READY",
    },
    {
      icon: ScanLine,
      feature: "Distributor Purchase Bill OCR Scanner",
      legacy: "Manual line-by-line typing of 50+ item supplier bills",
      xorbyte: "Snap photo or upload PDF; auto-extracted in 1.2s",
      badge: "ZERO TYPING",
    },
    {
      icon: RefreshCw,
      feature: "1-Click Tally / Vyapar / Busy Data Import",
      legacy: "Complex database migrations costing ₹15,000+ in fees",
      xorbyte: "Free assisted 5-minute Excel & XML import wizard",
      badge: "FREE SETUP",
    },
  ];

  return (
    <section
      id="comparison"
      className="py-16 md:py-24 relative bg-transparent border-t border-[#e2dcd0] overflow-hidden select-none"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 -left-20 w-[450px] h-[450px] bg-blue-400/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-[450px] h-[450px] bg-indigo-400/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10 text-center">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-slate-900 tracking-tight leading-[1.15]">
            Why Modern Retailers <br className="hidden sm:inline" />
            <span className="text-blue-600">
              Switch to Xorbyte Cloud
            </span>
          </h2>

          <p className="text-slate-600 font-sans text-sm sm:text-base font-medium">
            Next-gen cloud architecture compared directly against legacy desktop tools like Tally, Vyapar, and Busy.
          </p>
        </div>

        {/* ════════════════════════════════════════════════════════
            RICH ANIMATED COMPARISON MATRIX (CLEAN & DIRECT)
        ════════════════════════════════════════════════════════ */}
        <ScrollPerspectiveCard initialRotateX={10} initialScale={0.97}>
          <div className="relative w-full rounded-3xl bg-[#fcfaf6]/95 backdrop-blur-xl border border-[#ded7c7] shadow-[0_20px_50px_-15px_rgba(44,39,32,0.12),inset_0_1.5px_1px_rgba(255,255,255,0.95)] overflow-hidden text-left">
            
            {/* Matrix Column Headers (Desktop Only) */}
            <div className="hidden sm:grid sm:grid-cols-12 items-center p-4 sm:p-5 bg-[#f5efe4]/85 border-b border-[#ded5c4] gap-2">
              <div className="sm:col-span-4 text-xs font-mono-tech font-bold text-slate-500 uppercase tracking-wider">
                CORE CAPABILITY
              </div>
              <div className="sm:col-span-4 text-left">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-rose-50 border border-rose-200 text-rose-700 text-xs font-bold font-sans shadow-2xs">
                  <span className="w-1.5 h-1.5 rounded-full bg-rose-500" />
                  <span>Legacy (Tally / Busy / Vyapar)</span>
                </span>
              </div>
              <div className="sm:col-span-4 text-right">
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-600 text-white text-xs font-bold font-sans shadow-xs">
                  <Zap className="w-3.5 h-3.5 text-cyan-300" />
                  <span>Xorbyte Cloud ERP</span>
                </span>
              </div>
            </div>

            {/* Matrix Item Rows */}
            <div className="divide-y divide-[#ded5c4]/60">
              {comparisonRows.map((row, idx) => {
                const IconComponent = row.icon;
                const isHovered = hoveredIndex === idx;

                return (
                  <div
                    key={row.feature}
                    onMouseEnter={() => setHoveredIndex(idx)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    className={`p-3.5 sm:p-4.5 transition-all duration-200 ${
                      isHovered ? "bg-blue-50/70" : "bg-transparent hover:bg-[#f5efe4]/50"
                    }`}
                  >
                    {/* Desktop Layout (12-Column Grid) */}
                    <div className="hidden sm:grid sm:grid-cols-12 items-center gap-3">
                      {/* Column 1: Feature Title & Icon */}
                      <div className="sm:col-span-4 flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-xl bg-blue-50 border border-blue-200/80 text-blue-600 flex items-center justify-center shrink-0 shadow-2xs">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <span className="text-xs sm:text-sm font-extrabold text-slate-900 font-sans">
                          {row.feature}
                        </span>
                      </div>

                      {/* Column 2: Legacy Deficit */}
                      <div className="sm:col-span-4">
                        <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-rose-50/80 border border-rose-200/60 text-xs font-semibold text-rose-900">
                          <X className="w-3.5 h-3.5 text-rose-500 shrink-0" />
                          <span>{row.legacy}</span>
                        </div>
                      </div>

                      {/* Column 3: Xorbyte Modern Advantage */}
                      <div className="sm:col-span-4">
                        <div
                          className={`flex items-center justify-between gap-2 px-3 py-2 rounded-xl border transition-all ${
                            isHovered
                              ? "bg-blue-50 border-blue-300 shadow-xs"
                              : "bg-emerald-50/80 border-emerald-200/60"
                          }`}
                        >
                          <div className="flex items-center gap-2 text-xs font-bold text-slate-900 font-sans">
                            <Check className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                            <span className={isHovered ? "text-blue-700" : "text-emerald-950"}>
                              {row.xorbyte}
                            </span>
                          </div>
                          <span className="hidden lg:inline-block text-[9px] font-mono-tech font-bold text-blue-600 bg-blue-100/80 px-2 py-0.5 rounded-full border border-blue-200 shrink-0">
                            {row.badge}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Mobile Layout (Side-by-Side Split Tile) */}
                    <div className="sm:hidden space-y-2">
                      {/* Mobile Row Header */}
                      <div className="flex items-center justify-between gap-2">
                        <div className="flex items-center gap-2">
                          <div className="w-7 h-7 rounded-xl bg-blue-50 border border-blue-200/80 text-blue-600 flex items-center justify-center shrink-0 shadow-2xs">
                            <IconComponent className="w-3.5 h-3.5" />
                          </div>
                          <span className="text-xs font-extrabold text-slate-900 font-sans">
                            {row.feature}
                          </span>
                        </div>
                        <span className="text-[9px] font-mono-tech font-bold text-blue-600 bg-blue-100/80 px-2 py-0.5 rounded-full border border-blue-200 shrink-0">
                          {row.badge}
                        </span>
                      </div>

                      {/* Side-by-Side 2-Column Versus Box */}
                      <div className="grid grid-cols-2 gap-2 pt-0.5">
                        {/* Left: Legacy */}
                        <div className="p-2.5 rounded-xl bg-rose-50/70 border border-rose-200/60 flex flex-col justify-between space-y-1">
                          <div className="flex items-center gap-1 text-[9px] font-mono-tech font-bold text-rose-700 uppercase">
                            <X className="w-3 h-3 text-rose-500 shrink-0" />
                            <span>Legacy Tools</span>
                          </div>
                          <div className="text-[11px] font-medium text-rose-900 leading-snug">
                            {row.legacy}
                          </div>
                        </div>

                        {/* Right: Xorbyte */}
                        <div className="p-2.5 rounded-xl bg-emerald-50/80 border border-emerald-200/80 flex flex-col justify-between space-y-1 shadow-2xs">
                          <div className="flex items-center gap-1 text-[9px] font-mono-tech font-bold text-emerald-800 uppercase">
                            <Check className="w-3 h-3 text-emerald-600 shrink-0" />
                            <span>Xorbyte Cloud</span>
                          </div>
                          <div className="text-[11px] font-bold text-emerald-950 leading-snug">
                            {row.xorbyte}
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>
        </ScrollPerspectiveCard>

      </div>
    </section>
  );
}
