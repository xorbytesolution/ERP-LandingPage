import React, { useState } from "react";
import { Check, Sparkles, Zap, Crown, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

export default function PricingSection({ onOpenDemoModal }) {
  const [billingCycle, setBillingCycle] = useState("annual"); // annual | monthly

  const plans = [
    {
      name: "Single Store Starter",
      icon: Zap,
      tagline: "For stand-alone retail shops, pharmacies, and mini-marts.",
      priceMonthly: "₹1,499",
      priceAnnual: "₹1,199",
      badge: "STARTER",
      highlight: false,
      features: [
        "1 Branch Outlet + 2 Billing Counters",
        "Sub-Second Barcode POS Checkout",
        "100% Offline Mode (IndexedDB)",
        "Dynamic UPI QR Customer Screen",
        "Thermal Receipt Printing (USB/LAN)",
        "Basic GST Invoicing (B2C & B2B)",
        "Standard Email & WhatsApp Support",
      ],
      cta: "Start 14-Day Free Trial",
      ctaStyle: "btn-secondary",
    },
    {
      name: "Multi-Store Pro",
      icon: Sparkles,
      tagline: "For growing retail chains, supermarkets, and fashion stores.",
      priceMonthly: "₹3,499",
      priceAnnual: "₹2,799",
      badge: "MOST POPULAR",
      highlight: true,
      features: [
        "Up to 5 Branch Outlets + Unlimited Counters",
        "Real-Time Multi-Warehouse Stock Sync",
        "Automated GSTR-1 & GSTR-3B JSON",
        "1-Click WhatsApp Udhaar Payment Links",
        "Apparel Dynamic 5% vs 12% GST Slabs",
        "Supplier Purchase Bill OCR Scanner",
        "Free Tally & Vyapar Data Migration",
        "Priority 24/7 Phone & Remote Support",
      ],
      cta: "Schedule 1-on-1 Pro Demo",
      ctaStyle: "btn-primary",
    },
    {
      name: "Enterprise Fleet",
      icon: Crown,
      tagline: "For large retail chains, wholesale FMCG depots, and franchises.",
      priceMonthly: "₹7,999",
      priceAnnual: "₹6,399",
      badge: "ENTERPRISE",
      highlight: false,
      features: [
        "Unlimited Stores, Counters & Depots",
        "Dedicated Private Database Instance",
        "Custom ERP Integrations & REST API",
        "Automated e-Way Bill & e-Invoicing (IRN)",
        "Inter-Store Stock Transfer Matrix",
        "Staff Role Permissions & Audit Logs",
        "Dedicated Account Manager + On-site Training",
        "99.99% SLA Uptime Guarantee",
      ],
      cta: "Talk to Enterprise Team",
      ctaStyle: "btn-secondary",
    },
  ];

  return (
    <section id="pricing" className="py-16 md:py-20 relative bg-transparent border-t border-[#e5ded0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-slate-900 tracking-tight leading-[1.2]">
            Predictable Enterprise Plans <br className="hidden sm:inline" />
            <span className="text-blue-600">
              That Scale With Your Growth
            </span>
          </h2>
          <p className="text-slate-600 font-sans text-sm sm:text-base leading-relaxed font-medium">
            No hidden fees. Every plan includes full access to POS Billing, Multi-Warehouse Inventory, and Automated GST Accounting.
          </p>

          {/* Billing Cycle Switcher */}
          <div className="pt-4 flex flex-col items-center justify-center gap-2">
            <div className="bg-[#f4efe4] p-1.5 rounded-2xl border border-[#ded5c4] inline-flex items-center font-sans shadow-2xs">
              <button
                onClick={() => setBillingCycle("monthly")}
                className={`px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer ${
                  billingCycle === "monthly"
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                Monthly Billing
              </button>
              <button
                onClick={() => setBillingCycle("annual")}
                className={`px-5 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                  billingCycle === "annual"
                    ? "btn-primary text-white shadow-sm"
                    : "text-slate-600 hover:text-slate-900"
                }`}
              >
                <span>Annual Billing</span>
                <span className="bg-emerald-400 text-slate-950 px-1.5 py-0.5 rounded text-[10px] font-bold">
                  SAVE 20%
                </span>
              </button>
            </div>
            <div className="text-[11px] sm:text-xs font-semibold text-emerald-800 bg-emerald-50 px-4 py-1.5 rounded-full border border-emerald-200 text-center max-w-md mx-auto leading-normal">
              Includes 2 Months Free &amp; Free Tally Data Migration with Annual Plans
            </div>
          </div>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 text-left items-stretch pt-6 sm:pt-8">
          {plans.map((plan, idx) => {
            const IconComp = plan.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className={`p-6 sm:p-8 flex flex-col justify-between space-y-6 sm:space-y-8 relative rounded-3xl border border-[#ded7c7] bg-[#fcfaf6]/95 backdrop-blur-xl shadow-[0_12px_35px_rgba(44,39,32,0.06),inset_0_1.5px_1px_rgba(255,255,255,0.95)] transition-all duration-300 ${
                  plan.highlight
                    ? "border-2 border-blue-600 shadow-2xl shadow-blue-500/15 ring-4 ring-blue-500/10 lg:-translate-y-5 lg:scale-[1.03] z-10 mt-3 lg:mt-0"
                    : "hover:border-blue-300 hover:shadow-xl lg:translate-y-0"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-[10px] sm:text-[11px] font-bold px-4 py-1 rounded-full shadow-md whitespace-nowrap tracking-wider flex items-center justify-center z-20">
                    <span>{plan.badge}</span>
                  </div>
                )}

                <div className="space-y-6">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div className="font-display font-extrabold text-slate-900 text-xl tracking-tight">
                        {plan.name}
                      </div>
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${plan.highlight ? "bg-blue-50 text-blue-600" : "bg-slate-100 text-slate-600"}`}>
                        <IconComp className="w-4 h-4" />
                      </div>
                    </div>
                    {plan.highlight && (
                      <div className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-md border border-blue-200 inline-block">
                        Recommended for retail chains &amp; supermarkets
                      </div>
                    )}
                    <p className="text-xs text-slate-600 leading-relaxed font-sans font-medium">
                      {plan.tagline}
                    </p>
                  </div>

                  <div className="pt-2">
                    <div className="flex items-baseline gap-1">
                      <span className="text-4xl font-black text-slate-900 font-mono-tech">
                        {billingCycle === "annual" ? plan.priceAnnual : plan.priceMonthly}
                      </span>
                      <span className="text-xs text-slate-500 font-sans font-medium">/month</span>
                    </div>
                    {billingCycle === "annual" && (
                      <div className="text-[11px] text-emerald-600 font-sans font-bold mt-1">
                        Billed annually (2 Months Free Included)
                      </div>
                    )}
                  </div>

                  <hr className="border-slate-100" />

                  <div className="space-y-3">
                    <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 font-mono-tech">
                      What's Included:
                    </div>
                    <ul className="space-y-2.5">
                      {plan.features.map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700 font-sans font-medium">
                          <Check className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  onClick={onOpenDemoModal}
                  className={`w-full py-3.5 text-xs font-sans font-bold flex items-center justify-center gap-2 cursor-pointer ${plan.ctaStyle}`}
                >
                  <span>{plan.cta}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
