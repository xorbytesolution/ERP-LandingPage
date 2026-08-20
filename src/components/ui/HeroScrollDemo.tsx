import React, { useState } from "react";
import { ContainerScroll } from "@/components/ui/container-scroll-animation";
import {
  Zap,
  TrendingUp,
  ShoppingCart,
  QrCode,
  CreditCard,
  Banknote,
  CheckCircle2,
  Barcode,
  Sparkles,
} from "lucide-react";

export function HeroScrollDemo({ onOpenDemoModal }: { onOpenDemoModal?: () => void }) {
  const [activePayment, setActivePayment] = useState<"upi" | "cash" | "card">("upi");

  return (
    <section className="flex flex-col overflow-hidden bg-transparent py-12 md:py-18 text-slate-900 border-t border-[#e5ded0]/60 relative select-none">
      
      {/* Soft background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-400/8 rounded-full blur-3xl pointer-events-none" />
      
      <ContainerScroll
        titleComponent={
          <div className="space-y-2.5 text-center">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black tracking-tight text-slate-900 leading-tight">
              Enterprise Store Intelligence <br className="hidden sm:inline" />
              <span className="text-blue-600">On One Unified Terminal</span>
            </h2>

            <p className="text-slate-600 text-sm sm:text-base font-sans max-w-xl mx-auto font-medium leading-relaxed">
              Sub-300ms POS counter billing, multi-depot stock sync, and audit-grade GST ledger in one real-time cockpit.
            </p>
          </div>
        }
      >
        {/* Clean, Single-Layer Terminal Screen (Zero Nested Borders) */}
        <div className="w-full bg-[#fbf9f5] text-slate-900 flex flex-col font-sans select-none">
          
          {/* ─── 1. Clean Window Title Bar (No Apple Dots) ─── */}
          <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-[#f5efe4] border-b border-[#e2dcd0]">
            <div className="flex items-center gap-2">
              <span className="text-xs font-bold text-slate-800 font-sans">
                Xorbyte Retail POS Terminal · Bandra Outlet #01
              </span>
            </div>

            <div className="flex items-center gap-2 text-xs font-semibold">
              <span className="inline-flex items-center gap-1.5 text-emerald-700 bg-emerald-100/70 px-2.5 py-0.5 rounded-full text-[11px] font-bold">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                Live Cloud Sync (0ms)
              </span>
              <span className="hidden md:inline text-slate-500 text-[11px]">IndexedDB Offline Ready</span>
            </div>
          </div>

          {/* ─── 2. Clean Split Workspace ─── */}
          <div className="p-4 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-5 text-left bg-white">
            
            {/* Left Column (7 cols): Clean Active POS Billing Counter */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center font-bold">
                    <ShoppingCart className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-900">Current Customer Cart</div>
                    <div className="text-[10px] text-slate-500">Invoice #INV-9842 · Cashier Terminal 01</div>
                  </div>
                </div>

                <div className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-lg">
                  <Barcode className="w-3.5 h-3.5" />
                  <span>Laser Scan Active</span>
                </div>
              </div>

              {/* Product Lines List */}
              <div className="space-y-2 border border-slate-100 rounded-2xl p-2 bg-slate-50/50">
                {[
                  { name: "Amul Taaza T-Special Milk 500ml", qty: "2x", rate: "₹28", total: "₹56", hsn: "040120" },
                  { name: "Aashirvaad Shudh Chakki Atta 5kg", qty: "1x", rate: "₹235", total: "₹235", hsn: "110100" },
                  { name: "Nestle KitKat Share Bag 4-Finger", qty: "1x", rate: "₹49", total: "₹49", hsn: "180690" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-100 shadow-2xs text-xs font-medium"
                  >
                    <div>
                      <div className="font-bold text-slate-900">{item.name}</div>
                      <div className="text-[10px] text-slate-400 font-mono">HSN: {item.hsn} · {item.qty} @ {item.rate}</div>
                    </div>
                    <div className="text-right font-bold text-slate-900 text-sm">{item.total}</div>
                  </div>
                ))}
              </div>

              {/* Payment Mode Selector & Instant Checkout */}
              <div className="flex items-center justify-between pt-1 gap-2">
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={() => setActivePayment("upi")}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
                      activePayment === "upi" ? "bg-blue-600 text-white shadow-sm" : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <QrCode className="w-3 h-3" /> UPI QR
                  </button>
                  <button
                    onClick={() => setActivePayment("cash")}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
                      activePayment === "cash" ? "bg-blue-600 text-white shadow-sm" : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <Banknote className="w-3 h-3" /> Cash
                  </button>
                  <button
                    onClick={() => setActivePayment("card")}
                    className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1 cursor-pointer ${
                      activePayment === "card" ? "bg-blue-600 text-white shadow-sm" : "bg-slate-100 text-slate-600"
                    }`}
                  >
                    <CreditCard className="w-3 h-3" /> Card
                  </button>
                </div>

                <div className="text-right">
                  <span className="text-[10px] text-slate-500 block leading-none">Total Bill</span>
                  <span className="text-xl font-display font-black text-blue-600">₹340.00</span>
                </div>
              </div>
            </div>

            {/* Right Column (5 cols): Clean Live Store Metrics */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-3 bg-[#fbf9f5] p-4 rounded-2xl border border-[#ded7c7]/80">
              <div className="space-y-3">
                <div className="text-xs font-bold text-slate-700 uppercase tracking-wider">
                  Store Performance Live
                </div>

                {/* Metric 1 */}
                <div className="p-3 rounded-xl bg-white border border-slate-100 shadow-2xs space-y-0.5">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
                    <span>Today&apos;s Store Revenue</span>
                    <span className="text-emerald-600 font-bold flex items-center gap-0.5 text-[11px]">
                      <TrendingUp className="w-3 h-3" /> +34.2%
                    </span>
                  </div>
                  <div className="text-2xl font-display font-black text-slate-900">₹4,82,450</div>
                  <div className="text-[10px] text-slate-400">1,420 Receipts · 3 Counters Live</div>
                </div>

                {/* Metric 2 */}
                <div className="p-3 rounded-xl bg-white border border-slate-100 shadow-2xs space-y-0.5">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
                    <span>Barcode Scan Latency</span>
                    <span className="text-blue-600 font-bold text-[11px]">&lt; 300ms</span>
                  </div>
                  <div className="text-xl font-display font-bold text-blue-600">0.18s / Item Scan</div>
                  <div className="text-[10px] text-slate-400">Zero queue freeze under heavy rush</div>
                </div>

                {/* Metric 3 */}
                <div className="p-3 rounded-xl bg-white border border-slate-100 shadow-2xs space-y-0.5">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-semibold">
                    <span>GST Audit Status</span>
                    <span className="text-emerald-600 font-bold text-[11px]">100% OK</span>
                  </div>
                  <div className="text-lg font-display font-bold text-slate-900">GSTR-1 CA Ready</div>
                  <div className="text-[10px] text-slate-400">Auto HSN Slabs &amp; E-Way Integration</div>
                </div>
              </div>

              {/* Instant Book Demo Action */}
              <button
                onClick={onOpenDemoModal}
                className="w-full py-2.5 rounded-xl btn-primary text-xs font-bold flex items-center justify-center gap-1.5 cursor-pointer shadow-md group hover:scale-[1.02] active:scale-[0.98] transition-all"
              >
                <Zap className="w-3.5 h-3.5 fill-white" />
                <span>Test Live Billing Simulator</span>
              </button>
            </div>

          </div>

        </div>
      </ContainerScroll>
    </section>
  );
}
