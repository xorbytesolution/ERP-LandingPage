import React from "react";
import { Marquee } from "./marquee";
import { cn } from "@/lib/utils";

export interface FaqItem {
  q: string;
  a: string;
  category?: string;
}

interface FaqMarqueeProps {
  faqs: FaqItem[];
  className?: string;
}

export function FaqCard({ q, a, category }: FaqItem) {
  return (
    <div className="group/card w-[300px] sm:w-[360px] md:w-[400px] shrink-0 p-5 sm:p-6 rounded-3xl bg-[#fcfaf6]/95 backdrop-blur-xl border border-[#ded7c7] hover:border-blue-400/90 shadow-[0_4px_20px_rgba(44,39,32,0.05),inset_0_1.5px_1px_rgba(255,255,255,0.95)] hover:shadow-[0_12px_30px_rgba(37,99,235,0.12)] hover:-translate-y-1 transition-all duration-300 select-none text-left flex flex-col justify-between space-y-3 cursor-pointer">
      <div className="space-y-2">
        {category && (
          <span className="text-[10px] font-mono-tech font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200/60 inline-block">
            {category}
          </span>
        )}
        <h4 className="text-sm sm:text-base font-display font-bold text-slate-900 group-hover/card:text-blue-600 transition-colors leading-snug">
          {q}
        </h4>
      </div>
      <p className="text-xs sm:text-sm text-slate-600 font-sans font-medium leading-relaxed">
        {a}
      </p>
    </div>
  );
}

export function FaqMarquee({ faqs, className }: FaqMarqueeProps) {
  // Split FAQs into 3 rows
  const row1 = faqs.slice(0, Math.ceil(faqs.length / 3));
  const row2 = faqs.slice(Math.ceil(faqs.length / 3), Math.ceil((faqs.length * 2) / 3));
  const row3 = faqs.slice(Math.ceil((faqs.length * 2) / 3));

  return (
    <div
      className={cn(
        "relative flex w-full flex-col items-center justify-center overflow-hidden gap-4 py-6 select-none",
        className
      )}
    >
      {/* Left & Right Gradient Blur Fade Masks Matching Paper Canvas */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-44 bg-gradient-to-r from-[#f5f2ea] via-[#f5f2ea]/80 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-44 bg-gradient-to-l from-[#f5f2ea] via-[#f5f2ea]/80 to-transparent z-10" />

      {/* Row 1: Forward Marquee (Leftwards) */}
      <Marquee pauseOnHover className="[--duration:45s] [--gap:1.25rem]">
        {row1.map((faq, i) => (
          <FaqCard key={i} {...faq} />
        ))}
      </Marquee>

      {/* Row 2: Reverse Marquee (Rightwards) */}
      <Marquee reverse pauseOnHover className="[--duration:50s] [--gap:1.25rem]">
        {row2.map((faq, i) => (
          <FaqCard key={i} {...faq} />
        ))}
      </Marquee>

      {/* Row 3: Forward Marquee (Leftwards) */}
      {row3.length > 0 && (
        <Marquee pauseOnHover className="[--duration:42s] [--gap:1.25rem]">
          {row3.map((faq, i) => (
            <FaqCard key={i} {...faq} />
          ))}
        </Marquee>
      )}
    </div>
  );
}
