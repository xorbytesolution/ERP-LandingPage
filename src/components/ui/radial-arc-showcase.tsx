import React, { useState, useRef } from "react";
import {
  ReceiptText,
  Boxes,
  MessageSquare,
  FileCheck2,
  ScanLine,
  ShieldAlert,
  ShoppingBag,
  HeartHandshake,
  RefreshCw,
} from "lucide-react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import { cn } from "@/lib/utils";

export interface RadialArcItem {
  id: string;
  number: string;
  shortLabel: string;
  fullTitle: string;
  icon: React.ElementType;
  points: string[];
}

export const XORBYTE_ERP_ITEMS: RadialArcItem[] = [
  {
    id: "billing",
    number: "01",
    shortLabel: "Sub-300ms POS Billing",
    fullTitle: "Sub-300ms Counter POS Billing",
    icon: ReceiptText,
    points: [
      "Accelerates billing with sub-300ms barcode scanning & instant thermal printing.",
      "Customer-facing screen with Dynamic UPI QR for rapid GPay / PhonePe payments.",
      "100% Offline active mode — billing never stops when internet cuts out.",
      "Zero counter bottlenecks during peak retail & supermarket rush hours.",
    ],
  },
  {
    id: "stock",
    number: "02",
    shortLabel: "Real-Time Stock Mesh",
    fullTitle: "Real-Time Multi-Outlet Stock Mesh",
    icon: Boxes,
    points: [
      "Live inventory deduction across all counter terminals and central godowns.",
      "Automated low-stock alerts and batch expiry warnings prevent dead stock.",
      "1-Click inter-branch stock transfers with digital delivery challans.",
      "Central master catalog supporting 50,000+ SKUs with barcode generation.",
    ],
  },
  {
    id: "whatsapp",
    number: "03",
    shortLabel: "WhatsApp Udhaar Khata",
    fullTitle: "WhatsApp Invoices & Udhaar Recovery",
    icon: MessageSquare,
    points: [
      "Auto-dispatches PDF tax invoice directly to customer's WhatsApp upon checkout.",
      "1-Click dynamic UPI payment links allow customers to tap & pay instantly.",
      "Recovers pending store credit (Udhaar) 3x faster without awkward calling.",
      "Customer ledger auto-reconciles double-entry balance upon online payment.",
    ],
  },
  {
    id: "gst",
    number: "04",
    shortLabel: "Dynamic GST Automation",
    fullTitle: "Dynamic GST Slabs & 1-Click CA Filing",
    icon: FileCheck2,
    points: [
      "Automates dynamic apparel GST slabs (5% below ₹1,000, 12% above ₹1,000).",
      "Generates 1-click audit-ready GSTR-1 and GSTR-3B JSON files for your CA.",
      "Auto-splits CGST, SGST, IGST with verified Indian HSN code mapping.",
      "Instant government IRN cryptographic tokens and e-Way bill creation.",
    ],
  },
  {
    id: "ocr",
    number: "05",
    shortLabel: "Supplier Bill AI Scanner",
    fullTitle: "Distributor Purchase Bill AI OCR",
    icon: ScanLine,
    points: [
      "Photo & PDF OCR reads 50+ line distributor purchase bills in 1.2 seconds.",
      "Auto-extracts vendor GSTIN, items, quantities, and rates straight to inventory.",
      "Zero manual data entry mistakes into the purchase accounting register.",
      "Automatically verifies supplier rate discrepancies before payment approval.",
    ],
  },
  {
    id: "theft",
    number: "06",
    shortLabel: "Theft & Fraud AI Alert",
    fullTitle: "Smart Theft & Cashier Leakage AI",
    icon: ShieldAlert,
    points: [
      "Flags abnormal bill cancellations, line deletions, and unauthorized discounts.",
      "Real-time mobile alerts to store owner on late-night cash drawer opens.",
      "Strict cashier role permissions with full cryptographic audit trails.",
      "Eliminates counter register shrinkage and manual price overrides.",
    ],
  },
  {
    id: "online",
    number: "07",
    shortLabel: "Online Store & Delivery",
    fullTitle: "Online Store & Local Delivery Management",
    icon: ShoppingBag,
    points: [
      "Launch a custom online Kirana / Supermarket web catalog in under 10 minutes.",
      "Synchronizes live inventory between physical counter and online store.",
      "Manages WhatsApp orders, home delivery dispatch, and store pickups.",
      "Unified single-screen view of counter sales and online deliveries.",
    ],
  },
  {
    id: "loyalty",
    number: "08",
    shortLabel: "Customer Loyalty & Khata",
    fullTitle: "Customer Loyalty & Retention Engine",
    icon: HeartHandshake,
    points: [
      "Maintains customer purchase history, preferences, and digital khata.",
      "Customer segmentation for targeted WhatsApp festive offers and discounts.",
      "Implements point-based loyalty programs, cashback, and membership tiers.",
      "Easy creation of customized vouchers, promotional coupons, and SMS alerts.",
    ],
  },
  {
    id: "migration",
    number: "09",
    shortLabel: "5-Min Switch from Tally",
    fullTitle: "1-Click Switch from Tally & Vyapar",
    icon: RefreshCw,
    points: [
      "Seamlessly import Excel, CSV, or Tally XML backup data in under 5 minutes.",
      "Preserves all existing customer ledgers, supplier balances, and opening stock.",
      "Zero store downtime — complete migration smoothly over lunch break.",
      "Free 1-on-1 guided onboarding and cashier training by ERP engineers.",
    ],
  },
];

// ═══════════════════════════════════════════════════════════════
// DEEP DRAMATIC MATHEMATICAL BEZIER CURVE COORDINATES
// Curve: M 70 70 C 120 560, 880 560, 930 70
// ViewBox: 1000 x 540
// ═══════════════════════════════════════════════════════════════
const NINE_DEEP_BEZIER_NODES = [
  { xPct: 7.0, yPct: 12.96, labelSide: "left", labelWidth: 165 },   // 01: Top-Left
  { xPct: 11.9, yPct: 42.78, labelSide: "left", labelWidth: 170 },  // 02: Upper-Left
  { xPct: 21.8, yPct: 64.07, labelSide: "left", labelWidth: 175 },  // 03: Mid-Left
  { xPct: 35.1, yPct: 76.85, labelSide: "left", labelWidth: 195 },  // 04: Lower-Left
  { xPct: 50.0, yPct: 81.11, labelSide: "bottom", labelWidth: 230 },// 05: Apex Center Bottom!
  { xPct: 64.9, yPct: 76.85, labelSide: "right", labelWidth: 195 }, // 06: Lower-Right
  { xPct: 78.2, yPct: 64.07, labelSide: "right", labelWidth: 180 }, // 07: Mid-Right
  { xPct: 88.1, yPct: 42.78, labelSide: "right", labelWidth: 165 }, // 08: Upper-Right
  { xPct: 93.0, yPct: 12.96, labelSide: "right", labelWidth: 165 }, // 09: Top-Right
];

export function RadialArcShowcase({
  items = XORBYTE_ERP_ITEMS,
  activeIdx: controlledIdx,
  onSelectIdx,
  onOpenDemoModal,
  className,
}: {
  items?: RadialArcItem[];
  activeIdx?: number;
  onSelectIdx?: (idx: number) => void;
  onOpenDemoModal?: () => void;
  className?: string;
}) {
  const [internalIdx, setInternalIdx] = useState<number>(0);
  const activeIdx = controlledIdx !== undefined ? controlledIdx : internalIdx;

  const handleSelect = (idx: number) => {
    if (onSelectIdx) {
      onSelectIdx(idx);
    } else {
      setInternalIdx(idx);
    }
  };

  const activeItem = items[activeIdx] || items[0];
  const ActiveIcon = activeItem.icon;

  return (
    <div
      className={cn("w-full relative select-none flex flex-col items-center", className)}
    >
      {/* ════════════════════════════════════════════════════════
          DESKTOP & TABLET: BIGGER & MORE CURVED 9-NODE ARC
      ════════════════════════════════════════════════════════ */}
      <div className="hidden md:block relative w-full max-w-[1240px] h-[540px] shrink-0 mx-auto">
        
        {/* SVG Deep Curved Dashed Path */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none z-0"
          viewBox="0 0 1000 540"
          preserveAspectRatio="none"
          fill="none"
        >
          {/* Deep Dramatic Symmetrical U-Curve Line */}
          <path
            d="M 70 70 C 120 560, 880 560, 930 70"
            stroke="#94a3b8"
            strokeWidth="2.4"
            strokeDasharray="6 8"
            strokeLinecap="round"
            className="opacity-80"
          />
        </svg>

        {/* ─── 9 NUMBERED NODES & LABELS (PERFECTLY ANCHORED) ─── */}
        {items.map((item, idx) => {
          const node = NINE_DEEP_BEZIER_NODES[idx] || { xPct: 50, yPct: 50, labelSide: "left", labelWidth: 160 };
          const isSelected = activeIdx === idx;

          return (
            <div
              key={item.id}
              style={{
                left: `${node.xPct}%`,
                top: `${node.yPct}%`,
              }}
              onClick={() => handleSelect(idx)}
              className="absolute -translate-x-1/2 -translate-y-1/2 z-20 cursor-pointer group flex items-center justify-center"
            >
              {/* Number Circle Bubble (Clean Bold Display Numerals, Round Zero) */}
              <button
                type="button"
                onClick={() => handleSelect(idx)}
                className={cn(
                  "w-13 h-13 md:w-14 md:h-14 rounded-full transition-all duration-200 flex items-center justify-center cursor-pointer border-2 relative z-10 active:scale-95 shadow-sm",
                  isSelected
                    ? "bg-blue-600 text-white border-blue-600 scale-120 shadow-md"
                    : "bg-white text-slate-900 border-slate-300 group-hover:border-blue-500 group-hover:text-blue-600 group-hover:scale-110"
                )}
                aria-label={item.shortLabel}
              >
                <span className="font-display font-black text-base md:text-lg leading-none tracking-tight">
                  {item.number}
                </span>
              </button>

              {/* Node Label Text (Generous 28px Breathing Buffer, Zero Collision) */}
              <div
                onClick={() => handleSelect(idx)}
                style={{ width: `${node.labelWidth}px` }}
                className={cn(
                  "absolute transition-all duration-150 cursor-pointer select-none",
                  node.labelSide === "left" && "right-full mr-6 sm:mr-7 top-1/2 -translate-y-1/2 text-right pr-1",
                  node.labelSide === "bottom" && "top-full mt-5 left-1/2 -translate-x-1/2 text-center",
                  node.labelSide === "right" && "left-full ml-6 sm:ml-7 top-1/2 -translate-y-1/2 text-left pl-1"
                )}
              >
                <span
                  className={cn(
                    "block leading-snug font-sans transition-colors duration-150",
                    isSelected
                      ? "text-blue-600 font-extrabold text-sm"
                      : "text-slate-700 group-hover:text-blue-600 font-semibold text-[13px]"
                  )}
                >
                  {item.shortLabel}
                </span>
              </div>
            </div>
          );
        })}

        {/* ─── CENTER DISPLAY (PREMIUM BRAND BLUE THEME) ─── */}
        <div className="absolute top-[0px] left-1/2 -translate-x-1/2 w-[520px] max-w-[90%] z-10 pointer-events-auto text-center flex flex-col items-center space-y-3">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem.id}
              initial={{ opacity: 0, y: 6, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.98 }}
              transition={{ duration: 0.16, ease: "easeOut" }}
              className="flex flex-col items-center space-y-2.5 w-full text-center"
            >
              {/* Premium Solid Royal Blue Icon Badge (Matching Banner Style) */}
              <div className="pt-1 flex items-center justify-center">
                <div className="w-16 h-16 sm:w-18 sm:h-18 rounded-2xl bg-blue-600 border border-blue-500 text-white flex items-center justify-center shadow-lg shadow-blue-600/30">
                  <ActiveIcon className="w-8 h-8 text-white stroke-[2.2]" />
                </div>
              </div>

              {/* Title (Brand Blue / Deep Slate) */}
              <h3 className="text-2xl sm:text-3xl font-display font-extrabold text-blue-600 tracking-tight leading-tight">
                {activeItem.fullTitle}
              </h3>

              {/* Clean Bullet Points */}
              <ul className="space-y-2 text-left max-w-md mx-auto font-sans text-xs sm:text-sm text-slate-700 font-medium pt-0.5">
                {activeItem.points.map((pt, pIdx) => (
                  <li key={pIdx} className="flex items-start gap-2.5 leading-relaxed">
                    <span className="text-blue-600 font-bold text-sm leading-none shrink-0 mt-0.5">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>

      {/* ════════════════════════════════════════════════════════
          MOBILE VIEW: 3D TOUCH COVERFLOW CAROUSEL (SWIPABLE)
      ════════════════════════════════════════════════════════ */}
      <div className="md:hidden w-full overflow-hidden select-none py-2 px-1">
        
        {/* 3D Stage Container */}
        <div
          className="relative w-full h-[430px] flex items-center justify-center"
          style={{ perspective: "1000px" }}
        >
          {items.map((item, idx) => {
            const offset = idx - activeIdx;
            const isCenter = offset === 0;
            const isVisible = Math.abs(offset) <= 1;

            if (!isVisible) return null;

            const ItemIcon = item.icon;

            return (
              <motion.div
                key={item.id}
                initial={false}
                animate={{
                  x: `${offset * 75}%`,
                  scale: isCenter ? 1 : 0.82,
                  rotateY: offset * -28,
                  zIndex: isCenter ? 20 : 10,
                  opacity: isCenter ? 1 : 0.45,
                }}
                transition={{ type: "spring", stiffness: 300, damping: 28 }}
                onClick={() => handleSelect(idx)}
                drag={isCenter ? "x" : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.2}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -40 && activeIdx < items.length - 1) {
                    handleSelect(activeIdx + 1);
                  } else if (info.offset.x > 40 && activeIdx > 0) {
                    handleSelect(activeIdx - 1);
                  }
                }}
                className={cn(
                  "absolute w-[290px] xs:w-[315px] h-[390px] rounded-3xl p-5 flex flex-col justify-between cursor-pointer transition-shadow",
                  isCenter
                    ? "bg-white border-2 border-blue-500/80 shadow-[0_20px_45px_-10px_rgba(37,99,235,0.22)] ring-1 ring-blue-100"
                    : "bg-[#faf8f4] border border-[#ded7c7] shadow-md pointer-events-auto"
                )}
              >
                {/* Top Number & Icon */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-blue-600 border border-blue-500 text-white flex items-center justify-center shadow-md shadow-blue-500/25">
                    <ItemIcon className="w-6 h-6 text-white stroke-[2.2]" />
                  </div>
                  <span className="font-display font-black text-2xl text-blue-600/80">
                    {item.number}
                  </span>
                </div>

                {/* Card Title */}
                <div className="space-y-1 text-left pt-1">
                  <div className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">
                    ERP Superpower
                  </div>
                  <h3 className="text-base sm:text-lg font-display font-extrabold text-slate-900 leading-snug">
                    {item.fullTitle}
                  </h3>
                </div>

                {/* Bullet Points */}
                <ul className="space-y-1.5 text-left text-xs text-slate-700 font-sans font-medium">
                  {item.points.slice(0, 3).map((pt, pIdx) => (
                    <li key={pIdx} className="flex items-start gap-1.5 leading-snug">
                      <span className="text-blue-600 font-bold text-xs shrink-0 mt-0.5">•</span>
                      <span className="line-clamp-2">{pt}</span>
                    </li>
                  ))}
                </ul>

                {/* Bottom Active Status / Swipe Cue */}
                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold">
                  <span className={isCenter ? "text-blue-600" : "text-slate-400"}>
                    {isCenter ? "● Active Module" : "Tap to View"}
                  </span>
                  <span className="text-slate-400 text-[10px] font-mono">
                    {activeIdx + 1} / {items.length}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Pagination Bubble Bar */}
        <div className="flex items-center justify-center gap-1.5 pt-2">
          {items.map((item, idx) => (
            <button
              key={item.id}
              onClick={() => handleSelect(idx)}
              className={cn(
                "transition-all duration-200 cursor-pointer",
                activeIdx === idx
                  ? "w-7 h-2.5 rounded-full bg-blue-600 shadow-xs"
                  : "w-2.5 h-2.5 rounded-full bg-slate-300 hover:bg-slate-400"
              )}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>

    </div>
  );
}
