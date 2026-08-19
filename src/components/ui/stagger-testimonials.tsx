import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";
import { cn } from "@/lib/utils";

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
  avatar: string;
  storeType?: string;
}

interface StaggerTestimonialsProps {
  testimonials?: TestimonialItem[];
  className?: string;
  activeCardColor?: string;
}

const DEFAULT_TESTIMONIALS: TestimonialItem[] = [
  {
    id: "1",
    quote: "If I could give 11 stars, I would! 100% offline POS saved our festival rush when our internet fiber got severed.",
    author: "Andre Fernandes",
    role: "Director, Mumbai Mart Chain",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&q=80",
    storeType: "Supermarket",
  },
  {
    id: "2",
    quote: "SO SO HAPPY WE FOUND XORBYTE! I'd bet you saved me 100+ hours every month on GST filing and supplier credit ledger.",
    author: "Jeremy Roy",
    role: "Founder, Roy Wholesale FMCG",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80",
    storeType: "Wholesale Depot",
  },
  {
    id: "3",
    quote: "Took some convincing, but now that we're on Xorbyte ERP, we're NEVER going back. Our counter billing takes sub-300ms.",
    author: "Pamela Sharma",
    role: "Operations Head, Nexus Hypermarket",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80",
    storeType: "Multi-Store Retail",
  },
  {
    id: "4",
    quote: "I would be lost without Xorbyte's multi-branch live stock sync. The inventory shrinkage ROI is easily 100X for us.",
    author: "Daniel Mehta",
    role: "Managing Director, Mehta Garments",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80",
    storeType: "Apparel Chain",
  },
  {
    id: "5",
    quote: "It's just the best. Period. Laser barcode scan to dynamic UPI QR receipt in under 4 seconds flat.",
    author: "Fernando Dias",
    role: "Owner, Goan Fresh Retail",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80",
    storeType: "Retail Mart",
  },
  {
    id: "6",
    quote: "I switched 2 years ago and never looked back. The automated WhatsApp ledger collection is pure magic.",
    author: "Andy Kapoor",
    role: "CEO, Kapoor Provisions",
    avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&q=80",
    storeType: "Kirana Superstore",
  },
];

const CARD_ROTATIONS = [-4, 3, -2, 4, -3, 2];

export function StaggerTestimonials({
  testimonials = DEFAULT_TESTIMONIALS,
  className,
  activeCardColor = "bg-blue-600 text-white border-2 border-blue-700 shadow-2xl",
}: StaggerTestimonialsProps) {
  const [activeIndex, setActiveIndex] = useState(2); // Center card default

  const handlePrev = () => {
    setActiveIndex((prev) => (prev > 0 ? prev - 1 : testimonials.length - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev < testimonials.length - 1 ? prev + 1 : 0));
  };

  return (
    <section className={cn("w-full bg-slate-100 py-16 md:py-24 overflow-hidden relative select-none", className)}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Staggered Cards Stage */}
        <div className="relative min-h-[360px] sm:min-h-[420px] flex items-center justify-center">
          <div className="flex items-center justify-center gap-2 sm:gap-4 w-full">
            {testimonials.map((item, idx) => {
              const isActive = idx === activeIndex;
              const distance = idx - activeIndex;
              const rotation = CARD_ROTATIONS[idx % CARD_ROTATIONS.length];

              // Only show nearby 5 cards for clean perspective
              if (Math.abs(distance) > 2) return null;

              return (
                <motion.div
                  key={item.id}
                  layout
                  onClick={() => setActiveIndex(idx)}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: isActive ? 1 : 0.75,
                    scale: isActive ? 1.06 : 0.88,
                    rotate: isActive ? 0 : rotation,
                    zIndex: isActive ? 30 : 20 - Math.abs(distance),
                    x: distance * 15,
                  }}
                  transition={{ type: "spring", stiffness: 320, damping: 26 }}
                  className={cn(
                    "w-72 sm:w-80 md:w-96 min-h-[300px] sm:min-h-[340px] p-6 sm:p-7 rounded-3xl cursor-pointer flex flex-col justify-between transition-shadow",
                    isActive
                      ? activeCardColor
                      : "bg-white text-slate-800 border-2 border-slate-300/90 shadow-lg hover:border-slate-500"
                  )}
                  style={{
                    clipPath: isActive
                      ? "polygon(0 0, calc(100% - 24px) 0, 100% 24px, 100% 100%, 0 100%)"
                      : "none",
                  }}
                >
                  {/* Top Avatar Row */}
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-xl overflow-hidden border-2 border-current shadow-sm">
                      <img
                        src={item.avatar}
                        alt={item.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {item.storeType && (
                      <span className={cn(
                        "text-[10px] font-mono-tech font-bold uppercase px-2.5 py-1 rounded-full border",
                        isActive ? "bg-white/20 border-white/30 text-white" : "bg-slate-100 border-slate-200 text-slate-600"
                      )}>
                        {item.storeType}
                      </span>
                    )}
                  </div>

                  {/* Quote Text */}
                  <div className="space-y-2 py-4">
                    <p className="text-sm sm:text-base font-sans font-medium leading-relaxed">
                      "{item.quote}"
                    </p>
                  </div>

                  {/* Author Footer */}
                  <div className="pt-2 border-t border-current/20 flex items-center justify-between text-xs font-sans">
                    <div>
                      <div className="font-bold font-display">{item.author}</div>
                      <div className="text-[11px] opacity-80">{item.role}</div>
                    </div>
                    <Quote className="w-5 h-5 opacity-40" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={handlePrev}
            className="w-12 h-12 rounded-full bg-white border-2 border-slate-300 hover:border-slate-800 text-slate-800 flex items-center justify-center shadow-md hover:shadow-lg transition-all cursor-pointer active:scale-95"
            aria-label="Previous Testimonial"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button
            onClick={handleNext}
            className="w-12 h-12 rounded-full bg-white border-2 border-slate-300 hover:border-slate-800 text-slate-800 flex items-center justify-center shadow-md hover:shadow-lg transition-all cursor-pointer active:scale-95"
            aria-label="Next Testimonial"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
