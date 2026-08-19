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
      icon: Smartphone,
      feature: "Multi-Device Cloud Access",
      legacy: "Single PC Only (Locked to Desktop)",
      xorbyte: "Anywhere · Multi-Device Live Sync",
      badge: "LIVE CLOUD",
    },
    {
      icon: WifiOff,
      feature: "0ms Offline POS Resilience",
      legacy: "Crashes without local database",
      xorbyte: "100% Offline PWA + Auto Cloud Sync",
      badge: "ZERO CRASH",
    },
    {
      icon: ScanLine,
      feature: "Supplier Invoice OCR Scanner",
      legacy: "Manual Typing & Line-by-Line Entry",
      xorbyte: "Instant Photo & PDF Auto-Extraction",
      badge: "3s AI OCR",
    },
    {
      icon: MessageSquare,
      feature: "1-Click WhatsApp Udhaar Links",
      legacy: "Manual Calls & Paid 3rd-Party Addons",
      xorbyte: "Automated Instant UPI Payment Links",
      badge: "AUTO UPI",
    },
    {
      icon: Layers,
      feature: "Multi-Warehouse Stock Mesh",
      legacy: "Manual Excel Export / Import Files",
      xorbyte: "Real-Time Server-Sent Events (SSE)",
      badge: "REAL-TIME",
    },
    {
      icon: FileSpreadsheet,
      feature: "Govt GSTR-1 & 3B Tax JSON Filing",
      legacy: "Manual CA Excel Compilation",
      xorbyte: "1-Click Audit-Ready JSON Download",
      badge: "1-CLICK GST",
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
        
        {/* Section Header (Clean & Punchy) */}
        <div className="space-y-3 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-black text-slate-900 tracking-tight leading-[1.15]">
            Why Modern Retailers <br className="hidden sm:inline" />
            <span className="font-serif-accent text-blue-600 font-normal italic text-3xl sm:text-5xl md:text-6xl inline-block px-1">
              Switch to Xorbyte Cloud.
            </span>
          </h2>

          <p className="text-slate-600 font-sans text-xs sm:text-sm font-medium">
            Next-gen cloud architecture compared directly against legacy desktop tools (Tally, Vyapar, Busy).
          </p>
        </div>

        {/* ════════════════════════════════════════════════════════
            RICH ANIMATED COMPARISON MATRIX (CLEAN, PUNCHY, HIGH-TECH)
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
