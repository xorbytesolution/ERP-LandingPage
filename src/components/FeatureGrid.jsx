import React, { useState } from "react";
import { Zap, Package, FileCheck, MessageSquare, ScanLine, ArrowUpRight, Check, Sparkles, Database, FileSpreadsheet, ArrowRight, ShieldCheck, QrCode } from "lucide-react";
import { motion } from "motion/react";

export default function FeatureGrid({ onOpenDemoModal }) {
  // Mini interactive state for GSTR-1 apparel slab slider
  const [apparelPrice, setApparelPrice] = useState(1450);
  const gstRate = apparelPrice <= 1000 ? 5 : 12;
  const gstAmount = Math.round((apparelPrice * gstRate) / (100 + gstRate));

  return (
    <section
      id="features"
      className="py-16 md:py-24 relative bg-transparent border-t border-[#e5ded0] overflow-hidden"
    >
      {/* Soft Ambient Radiance Orbs */}
      <div className="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-blue-400/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-20 w-[500px] h-[500px] bg-indigo-400/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs font-semibold">
            <span>Core ERP Architecture</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-slate-900 tracking-tight leading-[1.2]">
            Built Specifically For Indian <br className="hidden sm:inline" />
            <span className="text-blue-600">
              Supermarkets &amp; Retail Chains
            </span>
          </h2>
          <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed font-medium">
            Everything your business needs to sell faster, eliminate stock loss, and automate tax compliance in one unified system.
          </p>
        </div>

        {/* ════════════════════════════════════════════════════════
            ENTERPRISE BENTO PRODUCT SHOWCASE
        ════════════════════════════════════════════════════════ */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          
          {/* ─── CARD 1: SUB-SECOND POS CHECKOUT ─── */}
          <div className="lg:col-span-2 p-6 sm:p-8 rounded-3xl border border-[#ded7c7] bg-[#fcfaf6]/95 backdrop-blur-xl shadow-[0_8px_30px_rgba(44,39,32,0.06),inset_0_1.5px_1px_rgba(255,255,255,0.95)] hover:shadow-[0_16px_40px_rgba(37,99,235,0.12)] hover:border-blue-300 transition-all duration-300 flex flex-col justify-between space-y-6 group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-600 shadow-sm group-hover:scale-105 transition-transform">
                  <Zap className="w-6 h-6" />
                </div>
                <div className="flex items-center gap-2">
                  <span className="bg-blue-50 text-blue-700 border border-blue-200 px-3 py-1 text-[11px] font-semibold rounded-full uppercase">POS ENGINE</span>
                  <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                    100% Offline Active
                  </span>
                </div>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900 tracking-tight">
                  Sub-Second Counter Billing &amp; Dynamic UPI QR
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-sans font-medium max-w-xl">
                  Handle massive supermarket queues effortlessly with sub-300ms laser barcode scanning, pole-display dynamic UPI QR generation, multi-tender payments, and 80mm thermal receipt printing.
                </p>
              </div>

              {/* Live Mini POS Widget Visual */}
              <div className="p-4 bg-[#f5efe4]/80 rounded-2xl border border-[#ded5c4] grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 bg-white/90 rounded-xl border border-[#ded5c4] space-y-1 shadow-2xs">
                  <div className="text-slate-400 text-[10px] uppercase font-bold">SCANNER SPEED</div>
                  <div className="font-bold text-emerald-600 text-sm">&lt; 300ms</div>
                  <div className="text-[11px] text-slate-500">USB &amp; Bluetooth Laser</div>
                </div>
                <div className="p-3 bg-white/90 rounded-xl border border-[#ded5c4] space-y-1 shadow-2xs">
                  <div className="text-slate-400 text-[10px] uppercase font-bold">PAYMENT TENDER</div>
                  <div className="font-bold text-slate-900 text-sm">Dynamic UPI QR</div>
                  <div className="text-[11px] text-slate-500">Instant Soundbox Sync</div>
                </div>
                <div className="p-3 bg-white/90 rounded-xl border border-[#ded5c4] space-y-1 shadow-2xs">
                  <div className="text-slate-400 text-[10px] uppercase font-bold">THERMAL RECEIPT</div>
                  <div className="font-bold text-slate-900 text-sm">80mm ESC/POS</div>
                  <div className="text-[11px] text-slate-500">GSTIN &amp; HSN Validated</div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#ded5c4]/60 flex items-center justify-between flex-wrap gap-2">
              <button
                onClick={onOpenDemoModal}
                className="text-xs font-sans font-bold text-blue-600 hover:text-blue-800 flex items-center gap-1.5 cursor-pointer group/btn"
              >
                <span>Test Live POS in Demo</span>
                <ArrowUpRight className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
              </button>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">Zero Billing Lag</span>
              </div>
            </div>
          </div>

          {/* ─── CARD 2: REAL-TIME STOCK SYNC ─── */}
          <div className="p-6 sm:p-8 rounded-3xl border border-[#ded7c7] bg-[#fcfaf6]/95 backdrop-blur-xl shadow-[0_8px_30px_rgba(44,39,32,0.06),inset_0_1.5px_1px_rgba(255,255,255,0.95)] hover:shadow-[0_16px_40px_rgba(16,185,129,0.12)] hover:border-emerald-300 transition-all duration-300 flex flex-col justify-between space-y-6 group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-600 shadow-sm group-hover:scale-105 transition-transform">
                  <Package className="w-6 h-6" />
                </div>
                <span className="bg-emerald-50 text-emerald-700 border border-emerald-200 px-3 py-1 text-[11px] font-semibold rounded-full uppercase">STOCK SYNC</span>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl font-display font-extrabold text-slate-900 tracking-tight">
                  Multi-Store &amp; Depot Stock Sync
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-sans font-medium">
                  Centralized inventory control across all branch outlets and central depots. Stock auto-deducts in real time with batch expiry tracking.
                </p>
              </div>

              {/* Visual Branch List */}
              <div className="space-y-2 text-xs">
                <div className="p-2.5 bg-[#f5efe4]/80 rounded-xl border border-[#ded5c4] flex justify-between items-center">
                  <span className="font-bold text-slate-800">Bandra Store #01</span>
                  <span className="text-emerald-600 font-bold">142 Units (Live)</span>
                </div>
                <div className="p-2.5 bg-[#f5efe4]/80 rounded-xl border border-[#ded5c4] flex justify-between items-center">
                  <span className="font-bold text-slate-800">Andheri Central Depot</span>
                  <span className="text-blue-600 font-bold">850 Units (Bulk)</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#ded5c4]/60 flex items-center justify-between flex-wrap gap-2">
              <button
                onClick={onOpenDemoModal}
                className="text-xs font-sans font-bold text-emerald-600 hover:text-emerald-800 flex items-center gap-1 cursor-pointer"
              >
                <span>Explore Inventory</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">Real-Time Cloud Sync</span>
              </div>
            </div>
          </div>

          {/* ─── CARD 3: WHATSAPP UDHAAR CRM ─── */}
          <div className="p-6 sm:p-8 rounded-3xl border border-[#ded7c7] bg-[#fcfaf6]/95 backdrop-blur-xl shadow-[0_8px_30px_rgba(44,39,32,0.06),inset_0_1.5px_1px_rgba(255,255,255,0.95)] hover:shadow-[0_16px_40px_rgba(245,158,11,0.12)] hover:border-amber-300 transition-all duration-300 flex flex-col justify-between space-y-6 group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-amber-50 border border-amber-100 flex items-center justify-center text-amber-600 shadow-sm group-hover:scale-105 transition-transform">
                  <MessageSquare className="w-6 h-6" />
                </div>
                <span className="bg-amber-50 text-amber-700 border border-amber-200 px-3 py-1 text-[11px] font-semibold rounded-full uppercase">CASH RECOVERY</span>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl font-display font-extrabold text-slate-900 tracking-tight">
                  WhatsApp Udhaar &amp; UPI Links
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-sans font-medium">
                  Turn credit into instant cash. Send automated WhatsApp bills with detailed PDF invoices and direct UPI scan-to-pay QR links.
                </p>
              </div>

              {/* Realistic Mini WhatsApp Preview */}
              <div className="p-3.5 bg-emerald-50/80 rounded-2xl border border-emerald-200/80 space-y-2 text-xs shadow-2xs">
                <div className="font-bold text-slate-900 font-sans">Bandra Supermarket (WhatsApp)</div>
                <div className="text-[11px] text-slate-600 font-sans">Dear Rahul, your bill of ₹3,450 is due. Tap below to pay via UPI:</div>
                <div className="p-2 bg-emerald-600 text-white font-bold rounded-lg text-center text-[11px] font-sans shadow-xs">
                  Pay ₹3,450 via UPI QR →
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#ded5c4]/60 flex items-center justify-between flex-wrap gap-2">
              <button
                onClick={onOpenDemoModal}
                className="text-xs font-sans font-bold text-amber-600 hover:text-amber-800 flex items-center gap-1 cursor-pointer"
              >
                <span>Automated Khata CRM</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">1-Click QR Link</span>
              </div>
            </div>
          </div>

          {/* ─── CARD 4: AUTOMATED GSTR-1 TAX ENGINE ─── */}
          <div className="lg:col-span-2 p-6 sm:p-8 rounded-3xl border border-[#ded7c7] bg-[#fcfaf6]/95 backdrop-blur-xl shadow-[0_8px_30px_rgba(44,39,32,0.06),inset_0_1.5px_1px_rgba(255,255,255,0.95)] hover:shadow-[0_16px_40px_rgba(168,85,247,0.12)] hover:border-purple-300 transition-all duration-300 flex flex-col justify-between space-y-6 group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 border border-purple-100 flex items-center justify-center text-purple-600 shadow-sm group-hover:scale-105 transition-transform">
                  <FileCheck className="w-6 h-6" />
                </div>
                <span className="bg-purple-50 text-purple-700 border border-purple-200 px-3 py-1 text-[11px] font-semibold rounded-full uppercase">100% GST COMPLIANT</span>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900 tracking-tight">
                  Automated GSTR-1 JSON &amp; Dynamic Apparel Slabs
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-sans font-medium max-w-xl">
                  Automates dynamic apparel tax rules (5% below ₹1000, 12% above), automatic HSN validation, CGST/SGST/IGST splits, and 1-click audit-ready JSON upload for the GST Portal.
                </p>
              </div>

              {/* Dynamic Apparel Slab Interactive Slider */}
              <div className="p-4 bg-[#f5efe4]/80 rounded-2xl border border-[#ded5c4] space-y-2.5 shadow-2xs">
                <div className="flex justify-between items-center text-xs font-bold text-slate-900 font-sans">
                  <span>Apparel Sale Item: ₹{apparelPrice}</span>
                  <span className={`px-2.5 py-0.5 rounded text-[11px] font-bold ${gstRate === 5 ? "bg-emerald-100 text-emerald-800" : "bg-purple-100 text-purple-800"}`}>
                    Auto Tax Slab: {gstRate}% GST Applied (Tax: ₹{gstAmount})
                  </span>
                </div>
                <input
                  type="range"
                  min="500"
                  max="2500"
                  step="50"
                  value={apparelPrice}
                  onChange={(e) => setApparelPrice(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-purple-600"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-medium">
                  <span>₹500 (5% GST)</span>
                  <span>₹1,000 Cutoff</span>
                  <span>₹2,500 (12% GST)</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#ded5c4]/60 flex items-center justify-between flex-wrap gap-2">
              <button
                onClick={onOpenDemoModal}
                className="text-xs font-sans font-bold text-purple-600 hover:text-purple-800 flex items-center gap-1.5 cursor-pointer"
              >
                <span>Download GSTR-1 JSON in Demo</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-200">CA Audit Ready</span>
              </div>
            </div>
          </div>

          {/* ─── CARD 5: AI INVOICE OCR SCANNER ─── */}
          <div className="p-6 sm:p-8 rounded-3xl border border-[#ded7c7] bg-[#fcfaf6]/95 backdrop-blur-xl shadow-[0_8px_30px_rgba(44,39,32,0.06),inset_0_1.5px_1px_rgba(255,255,255,0.95)] hover:shadow-[0_16px_40px_rgba(56,189,248,0.12)] hover:border-sky-300 transition-all duration-300 flex flex-col justify-between space-y-6 group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-sky-50 border border-sky-100 flex items-center justify-center text-sky-600 shadow-sm group-hover:scale-105 transition-transform">
                  <ScanLine className="w-6 h-6" />
                </div>
                <span className="bg-sky-50 text-sky-700 border border-sky-200 px-3 py-1 text-[11px] font-semibold rounded-full uppercase">PURCHASE OCR</span>
              </div>

              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl font-display font-extrabold text-slate-900 tracking-tight">
                  Supplier Invoice OCR Scanner
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-sans font-medium">
                  Snap vendor purchase bills or upload distributor PDFs. AI automatically extracts vendor GSTIN, items, and tax rates into your purchase register in 1.2s.
                </p>
              </div>

              <div className="p-3 bg-[#f5efe4]/80 rounded-xl border border-[#ded5c4] text-xs text-slate-700 space-y-1 shadow-2xs">
                <div className="text-[10px] text-emerald-600 font-bold">✓ AUTO-PARSED SUPPLIER BILL</div>
                <div className="truncate font-medium">Nestle India · 4 Line Items</div>
                <div className="font-bold">Total: ₹18,650.00</div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#ded5c4]/60 flex items-center justify-between flex-wrap gap-2">
              <button
                onClick={onOpenDemoModal}
                className="text-xs font-sans font-bold text-sky-600 hover:text-sky-800 flex items-center gap-1 cursor-pointer"
              >
                <span>Try Bill Scanner</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-sky-700 bg-sky-50 px-2.5 py-0.5 rounded-full border border-sky-200">Zero Manual Entry</span>
              </div>
            </div>
          </div>

          {/* ─── CARD 6: 1-CLICK TALLY / VYAPAR MIGRATION ─── */}
          <div className="lg:col-span-2 p-6 sm:p-8 rounded-3xl border border-[#ded7c7] bg-[#fcfaf6]/95 backdrop-blur-xl shadow-[0_8px_30px_rgba(44,39,32,0.06),inset_0_1.5px_1px_rgba(255,255,255,0.95)] hover:shadow-[0_16px_40px_rgba(99,102,241,0.12)] hover:border-indigo-300 transition-all duration-300 flex flex-col justify-between space-y-6 group">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="w-12 h-12 rounded-2xl bg-indigo-50 border border-indigo-100 flex items-center justify-center text-indigo-600 shadow-sm group-hover:scale-105 transition-transform">
                  <FileSpreadsheet className="w-6 h-6" />
                </div>
                <span className="bg-indigo-50 text-indigo-700 border border-indigo-200 px-3 py-1 text-[11px] font-semibold rounded-full uppercase">ZERO DOWNTIME</span>
              </div>

              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-display font-extrabold text-slate-900 tracking-tight">
                  1-Click Tally, Vyapar &amp; Busy Data Migration
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed font-sans font-medium max-w-xl">
                  Switching is effortless. Upload your existing customer ledgers, supplier balances, and inventory spreadsheets. Our import wizard maps barcodes and opening stocks in under 5 minutes.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 text-xs">
                <div className="p-3 bg-[#f5efe4]/80 rounded-xl border border-[#ded5c4] flex items-center gap-2 shadow-2xs">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-semibold text-slate-800">Direct Tally XML &amp; Excel spreadsheet parser</span>
                </div>
                <div className="p-3 bg-[#f5efe4]/80 rounded-xl border border-[#ded5c4] flex items-center gap-2 shadow-2xs">
                  <Check className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span className="font-semibold text-slate-800">Free 1-on-1 migration assistance from our team</span>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-[#ded5c4]/60 flex items-center justify-between flex-wrap gap-2">
              <button
                onClick={onOpenDemoModal}
                className="text-xs font-sans font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1.5 cursor-pointer"
              >
                <span>Schedule Free Data Migration</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <div className="flex items-center gap-2">
                <span className="text-xs font-semibold text-indigo-700 bg-indigo-50 px-2.5 py-0.5 rounded-full border border-indigo-200">100% Free Assisted Setup</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
