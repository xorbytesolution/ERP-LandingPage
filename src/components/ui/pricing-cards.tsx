import React from "react";
import { Check, Sparkles, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  period?: string;
  description?: string;
  isPopular?: boolean;
  features: string[];
  ctaText: string;
  onCtaClick?: () => void;
}

interface PricingCardsProps {
  headline?: string;
  subheadline?: string;
  plans?: PricingPlan[];
  className?: string;
}

const DEFAULT_PLANS: PricingPlan[] = [
  {
    id: "free",
    name: "Free Starter",
    price: "₹0",
    period: "forever free",
    description: "For single counter stores & local retail shops getting started.",
    features: [
      "1 POS Billing Counter",
      "Unlimited Barcode Scanning",
      "100% Offline Capability",
      "Thermal Receipt Printing",
      "Basic Sales Ledger",
    ],
    ctaText: "Get Started Free",
  },
  {
    id: "pro",
    name: "Pro Supporter",
    price: "₹1,499",
    period: "per month",
    description: "For growing supermarkets, apparel stores, and multi-counter chains.",
    isPopular: true,
    features: [
      "Unlimited Billing Counters",
      "Multi-Branch Live Stock Sync",
      "Automated WhatsApp Udhaar Khata",
      "GSTR-1, 3B & E-Way Bill Auto Filing",
      "AI Fast Reorder & Inventory Forecasting",
      "Priority 24/7 Phone & WhatsApp Support",
      "Free 1-on-1 Guided Data Migration",
    ],
    ctaText: "Upgrade to Pro",
  },
];

export function PricingCards({
  headline = "Unlock access to everything and scale your retail empire.",
  subheadline = "Transparent pricing with zero hidden commission fees.",
  plans = DEFAULT_PLANS,
  className,
}: PricingCardsProps) {
  return (
    <section className={cn("w-full bg-slate-50 py-16 md:py-24 px-4 sm:px-6 lg:px-8", className)}>
      <div className="max-w-5xl mx-auto space-y-12 text-center">
        
        {/* Header */}
        <div className="space-y-3 max-w-2xl mx-auto">
          <h2 className="text-2xl sm:text-4xl font-display font-black text-slate-900 tracking-tight leading-tight">
            {headline}
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 font-sans font-medium">
            {subheadline}
          </p>
        </div>

        {/* Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-4xl mx-auto items-stretch">
          {plans.map((plan) => {
            const isPopular = plan.isPopular;
            return (
              <div
                key={plan.id}
                className={cn(
                  "relative rounded-3xl p-7 sm:p-9 flex flex-col justify-between transition-all bg-white",
                  isPopular
                    ? "border-2 border-emerald-600 shadow-[0_20px_50px_-10px_rgba(16,185,129,0.18)] ring-1 ring-emerald-500/30"
                    : "border-2 border-slate-200/90 shadow-lg"
                )}
              >
                {isPopular && (
                  <div className="absolute -top-3.5 right-8 inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-600 text-white text-[11px] font-mono-tech font-bold uppercase tracking-wider shadow-md">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Most Popular</span>
                  </div>
                )}

                <div className="space-y-6">
                  {/* Plan Name & Price */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-display font-black text-slate-900">
                      {plan.name}
                    </h3>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-4xl sm:text-5xl font-mono-tech font-black text-slate-900 tracking-tight">
                        {plan.price}
                      </span>
                      {plan.period && (
                        <span className="text-xs font-mono-tech text-slate-500 font-semibold">
                          / {plan.period}
                        </span>
                      )}
                    </div>
                    {plan.description && (
                      <p className="text-xs text-slate-600 font-sans leading-relaxed pt-1">
                        {plan.description}
                      </p>
                    )}
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={plan.onCtaClick}
                    className={cn(
                      "w-full py-3.5 rounded-2xl font-display font-bold text-xs sm:text-sm tracking-wide cursor-pointer transition-all flex items-center justify-center gap-2 shadow-md active:scale-98",
                      isPopular
                        ? "bg-emerald-600 hover:bg-emerald-500 text-white shadow-emerald-500/25"
                        : "bg-slate-900 hover:bg-slate-800 text-white"
                    )}
                  >
                    <span>{plan.ctaText}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  {/* Feature Checklist */}
                  <div className="space-y-3 pt-4 border-t border-slate-100">
                    <div className="text-[11px] font-mono-tech font-bold uppercase tracking-wider text-slate-400">
                      Everything Included:
                    </div>
                    <ul className="space-y-2.5">
                      {plan.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2.5 text-xs text-slate-700 font-medium font-sans"
                        >
                          <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
