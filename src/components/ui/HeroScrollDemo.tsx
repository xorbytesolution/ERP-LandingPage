import React, { useState } from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import {
  Sparkles,
  Zap,
  ShieldCheck,
  ShoppingCart,
  ArrowRight,
  Activity,
  Receipt,
  Store,
  Layers,
  BarChart3,
  TrendingUp,
  CreditCard,
  QrCode,
  CheckCircle2,
  Cpu,
  Radio,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function HeroScrollDemo({ onOpenDemoModal }: { onOpenDemoModal?: () => void }) {
  const [activeTab, setActiveTab] = useState<"pos" | "stock" | "gst">("pos");

  return (
    <section className="flex flex-col overflow-hidden bg-transparent py-14 md:py-22 text-slate-900 border-t border-[#e5ded0] relative select-none">
      
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-blue-400/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-[450px] h-[250px] bg-indigo-400/8 rounded-full blur-3xl pointer-events-none" />
      
      <ContainerScroll
        titleComponent={
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-slate-900 leading-tight">
              Enterprise Store Intelligence <br className="hidden sm:inline" />
              <span className="font-serif-accent italic text-blue-600 font-normal text-3xl sm:text-5xl md:text-6xl inline-block px-1">
                On One Unified Glass Terminal
              </span>
            </h2>

            <p className="text-slate-600 text-xs sm:text-sm font-sans max-w-xl mx-auto font-medium leading-relaxed">
              Sub-300ms POS counter billing, multi-depot stock sync, and audit-grade GST ledger in one unified cockpit.
            </p>
          </div>
        }
      >
        {/* Inside 3D Display Frame: Pure Luxury Light Glass Terminal */}
        <div className="w-full bg-[#fcfaf6]/95 text-slate-900 p-4 sm:p-7 flex flex-col justify-between overflow-hidden relative font-sans space-y-5 select-none">
          
          {/* Top Enterprise Cockpit Header (No Generic macOS Dots) */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-[#ded5c4] pb-4 gap-3 bg-[#f5efe4]/85 -mx-4 -mt-4 sm:-mx-7 sm:-mt-7 px-4 sm:px-7 pt-4 sm:pt-5">
            {/* Store Terminal Identification */}
            <div className="flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse-live shrink-0" />
              <div>
                <div className="text-[10px] font-mono-tech font-bold text-slate-400 uppercase tracking-widest leading-none">
                  TERMINAL #01 · BANDRA SUPERMARKET
                </div>
                <div className="text-xs font-black text-slate-900 flex items-center gap-1.5 mt-0.5">
                  <span>XORBYTE CLOUD ERP</span>
                  <span className="text-[9px] font-mono-tech text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded font-bold border border-emerald-200">
                    LIVE MESH 0ms
                  </span>
                </div>
              </div>
            </div>

            {/* Middle Module Switcher Pills with Handwritten Callout */}
            <div className="flex flex-col items-end gap-1">
              <div className="hidden sm:flex items-center gap-1.5 font-handwriting text-xs sm:text-sm font-bold text-blue-600 pr-1">
                <span>✨ Click these 3 live modules to test!</span>
                <svg
                  className="w-5 h-5 text-blue-500 shrink-0 transform -rotate-12 animate-pulse"
                  viewBox="0 0 40 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M10 6 C 24 10, 22 22, 22 32" />
                  <path d="M14 26 C 18 30, 22 33, 24 33 C 25 28, 27 22, 28 17" />
                </svg>
              </div>
              <div className="flex items-center gap-1 bg-[#ede6d8] p-1 rounded-xl border border-[#ded5c4]">
              {[
                { id: "pos", label: "POS Billing", icon: ShoppingCart },
                { id: "stock", label: "Stock Mesh", icon: Layers },
                { id: "gst", label: "GST Ledger", icon: BarChart3 },
              ].map((tab) => {
                const IconComp = tab.icon;
                const isSelected = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id as any)}
                    className={`px-3 py-1.5 text-xs font-bold rounded-lg transition-all flex items-center gap-1.5 cursor-pointer ${
                      isSelected
                        ? "bg-white text-blue-600 shadow-sm border border-[#ded5c4]"
                        : "text-slate-600 hover:text-slate-900"
                    }`}
                  >
                    <IconComp className="w-3.5 h-3.5" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
              </div>
            </div>

            {/* Offline PWA Status Tag */}
            <div className="hidden lg:flex items-center gap-2 font-mono-tech text-xs">
              <span className="text-[10px] font-bold text-slate-600 bg-white/90 px-2.5 py-1 rounded-full border border-[#ded5c4] shadow-2xs">
                INDEXEDDB OFFLINE: READY
              </span>
            </div>
          </div>

          {/* Dynamic Tab Body */}
          <AnimatePresence mode="wait">
            {activeTab === "pos" && (
              <motion.div
                key="pos"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="space-y-4 pt-1 text-left"
              >
                {/* 3 Metric Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5">
                  <div className="p-4 rounded-2xl bg-[#f5efe4]/80 border border-[#ded5c4] shadow-2xs space-y-1.5">
                    <div className="flex items-center justify-between text-[11px] font-mono-tech text-slate-500">
                      <span>TODAY&apos;S REVENUE</span>
                      <span className="text-emerald-600 flex items-center gap-0.5 font-bold">
                        <TrendingUp className="w-3 h-3" /> +34.2%
                      </span>
                    </div>
                    <div className="text-2xl font-mono-tech font-black text-slate-900 tracking-tight">₹4,82,450.00</div>
                    <div className="text-[10px] text-slate-500 font-mono-tech">1,420 Receipts · 3 Counters Live</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-blue-50/60 border border-blue-200/80 shadow-2xs space-y-1.5">
                    <div className="flex items-center justify-between text-[11px] font-mono-tech text-blue-700">
                      <span>BARCODE SCAN SPEED</span>
                      <span className="text-blue-600 font-bold">&lt; 300ms</span>
                    </div>
                    <div className="text-2xl font-mono-tech font-black text-blue-700 tracking-tight">0.18s / Scan</div>
                    <div className="text-[10px] text-blue-600/80 font-mono-tech">Laser Barcode + 80mm ESC/POS</div>
                  </div>

                  <div className="p-4 rounded-2xl bg-indigo-50/60 border border-indigo-200/80 shadow-2xs space-y-1.5">
                    <div className="flex items-center justify-between text-[11px] font-mono-tech text-indigo-700">
                      <span>GST AUDIT STATUS</span>
                      <span className="text-indigo-600 font-bold">100% OK</span>
                    </div>
                    <div className="text-2xl font-mono-tech font-black text-indigo-700 tracking-tight">GSTR-1 Ready</div>
                    <div className="text-[10px] text-indigo-600/80 font-mono-tech">Auto HSN Slabs &amp; E-Invoice IRN</div>
                  </div>
                </div>

                {/* Live Real-Time Transaction Receipts Flow */}
                <div className="p-4 rounded-2xl bg-[#f5efe4]/75 border border-[#ded5c4] space-y-2.5">
                  <div className="flex items-center justify-between text-xs font-mono-tech text-slate-600">
                    <span className="flex items-center gap-1.5 font-bold text-blue-600">
                      <Receipt className="w-3.5 h-3.5" /> LIVE STORE TRANSACTIONS (STREAMING)
                    </span>
                    <span className="text-[10px] text-emerald-600 font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                      Live Feed
                    </span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs font-mono-tech">
                    <div className="p-3 rounded-xl bg-white/95 border border-[#ded5c4] shadow-2xs flex items-center justify-between hover:border-blue-300 transition-colors">
                      <div>
                        <div className="font-bold text-slate-900">#INV-9812</div>
                        <div className="text-[10px] text-slate-500">Nestle KitKat (x4)</div>
                      </div>
                      <div className="text-right">
                        <div className="text-emerald-600 font-bold">₹240</div>
                        <div className="text-[9px] text-blue-600 font-bold">UPI QR</div>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-white/95 border border-[#ded5c4] shadow-2xs flex items-center justify-between hover:border-blue-300 transition-colors">
                      <div>
                        <div className="font-bold text-slate-900">#INV-9813</div>
                        <div className="text-[10px] text-slate-500">Amul Butter (x2)</div>
                      </div>
                      <div className="text-right">
                        <div className="text-emerald-600 font-bold">₹550</div>
                        <div className="text-[9px] text-slate-500 font-bold">CASH</div>
                      </div>
                    </div>

                    <div className="p-3 rounded-xl bg-white/95 border border-[#ded5c4] shadow-2xs flex items-center justify-between hover:border-blue-300 transition-colors">
                      <div>
                        <div className="font-bold text-slate-900">#INV-9814</div>
                        <div className="text-[10px] text-slate-500">Sunflower Oil (x1)</div>
                      </div>
                      <div className="text-right">
                        <div className="text-emerald-600 font-bold">₹195</div>
                        <div className="text-[9px] text-emerald-600 font-bold">WHATSAPP</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "stock" && (
              <motion.div
                key="stock"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="space-y-4 pt-1 text-left"
              >
                <div className="p-4 rounded-2xl bg-[#f5efe4]/80 border border-[#ded5c4] space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono-tech text-slate-700">
                    <span className="font-bold text-blue-600 flex items-center gap-1.5">
                      <Store className="w-4 h-4" /> MULTI-BRANCH INVENTORY MATRIX
                    </span>
                    <span className="text-emerald-600 text-[10px] font-bold">SSE Protocol Active</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono-tech">
                    <div className="p-3.5 rounded-xl bg-white/95 border border-[#ded5c4] shadow-2xs space-y-1">
                      <div className="text-slate-500 font-bold">Central Depot (Mumbai)</div>
                      <div className="text-xl font-black text-slate-900">18,450 Units</div>
                      <div className="text-[10px] text-emerald-600 font-bold">● Safe Stock Level</div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/95 border border-[#ded5c4] shadow-2xs space-y-1">
                      <div className="text-slate-500 font-bold">Outlet #1 (Bandra Mart)</div>
                      <div className="text-xl font-black text-blue-600">2,410 Units</div>
                      <div className="text-[10px] text-blue-600 font-bold">● Live Counter Synced</div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white/95 border border-[#ded5c4] shadow-2xs space-y-1">
                      <div className="text-slate-500 font-bold">Outlet #2 (Andheri Hub)</div>
                      <div className="text-xl font-black text-amber-600">850 Units</div>
                      <div className="text-[10px] text-amber-600 font-bold">● Reorder Triggered</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "gst" && (
              <motion.div
                key="gst"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="space-y-4 pt-1 text-left"
              >
                <div className="p-4 rounded-2xl bg-slate-50/90 border border-slate-200 space-y-3">
                  <div className="flex items-center justify-between text-xs font-mono-tech text-slate-700">
                    <span className="font-bold text-indigo-600 flex items-center gap-1.5">
                      <ShieldCheck className="w-4 h-4" /> 1-CLICK GST COMPLIANCE &amp; IRN ENGINE
                    </span>
                    <span className="text-emerald-600 text-[10px] font-bold">Govt GST Portal JSON Ready</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs font-mono-tech">
                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-1">
                      <div className="text-slate-500 font-bold">GSTR-1 Audit Output</div>
                      <div className="text-xl font-black text-slate-900">₹48,920 Tax Compiled</div>
                      <div className="text-[10px] text-indigo-600 font-bold">0 Mismatches · 100% Tax Compliant</div>
                    </div>

                    <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-1">
                      <div className="text-slate-500 font-bold">Instant e-Invoice IRN Token</div>
                      <div className="text-xl font-black text-emerald-600">IRN: 8943...92a1</div>
                      <div className="text-[10px] text-slate-500 font-bold">256-Bit Cryptographic Signature</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Bottom Floating Command & Conversion Bar */}
          <div className="p-3.5 rounded-2xl bg-gradient-to-r from-blue-50 via-indigo-50/80 to-blue-50 border border-blue-200/90 flex flex-col sm:flex-row items-center justify-between gap-3 text-left">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-xs shrink-0">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-900">Deploy zero-crash POS counters for your retail stores</div>
                <div className="text-[10px] text-slate-600 font-medium font-sans">Zero setup fees · Guided 1-on-1 inventory &amp; billing migration</div>
              </div>
            </div>
            <button
              onClick={onOpenDemoModal}
              className="w-full sm:w-auto px-4.5 py-2 rounded-xl btn-primary text-xs font-bold transition-all flex items-center justify-center gap-1.5 cursor-pointer shadow-md shrink-0 group"
            >
              <span>Schedule 1-on-1 Demo</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

        </div>
      </ContainerScroll>
    </section>
  );
}
