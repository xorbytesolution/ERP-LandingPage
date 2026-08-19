import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export interface RibbonLogoItem {
  name: string;
  logo?: React.ReactNode;
}

interface RibbonLogosProps {
  headline?: string;
  logosTop?: RibbonLogoItem[];
  logosBottom?: RibbonLogoItem[];
  backgroundColor?: string;
  ribbonColor?: string;
  className?: string;
}

const DEFAULT_LOGOS_1: RibbonLogoItem[] = [
  { name: "IBM" },
  { name: "ABSTRACT" },
  { name: "ADOBE" },
  { name: "BUILDKITE" },
  { name: "COUCHBASE" },
  { name: "DAILY" },
  { name: "GITHUB" },
  { name: "VERCEL" },
];

const DEFAULT_LOGOS_2: RibbonLogoItem[] = [
  { name: "HEROKU" },
  { name: "BMW" },
  { name: "BURTON" },
  { name: "AMAZON" },
  { name: "BOX" },
  { name: "BYTEDANCE" },
  { name: "STRIPE" },
  { name: "SHOPIFY" },
];

export function RibbonLogos({
  headline = "1,450+ Stores & Supermarkets Powered By Xorbyte...",
  logosTop = DEFAULT_LOGOS_1,
  logosBottom = DEFAULT_LOGOS_2,
  backgroundColor = "bg-amber-100",
  ribbonColor = "bg-white text-black border-2 border-black",
  className,
}: RibbonLogosProps) {
  // Triple items for seamless infinite marquee loop
  const list1 = [...logosTop, ...logosTop, ...logosTop];
  const list2 = [...logosBottom, ...logosBottom, ...logosBottom];

  return (
    <section
      className={cn(
        "relative w-full overflow-hidden py-16 md:py-24 select-none",
        backgroundColor,
        className
      )}
    >
      {/* Centered Headline */}
      {headline && (
        <div className="text-center relative z-20 px-4 mb-8 sm:mb-12">
          <h3 className="text-xl sm:text-3xl md:text-4xl font-display font-black text-slate-900 tracking-tight">
            {headline}
          </h3>
        </div>
      )}

      {/* Ribbon Crossing Stage */}
      <div className="relative h-44 sm:h-52 flex items-center justify-center">
        
        {/* Ribbon 1 (Tilted -4 degrees, scrolling left) */}
        <div
          className={cn(
            "absolute w-[120vw] -left-[10vw] py-3 sm:py-4 shadow-xl z-10 flex overflow-hidden -rotate-3 sm:-rotate-4",
            ribbonColor
          )}
        >
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 18, ease: "linear", repeat: Infinity }}
            className="flex items-center gap-8 sm:gap-12 whitespace-nowrap"
          >
            {list1.map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-base sm:text-xl font-display font-black tracking-wider uppercase">
                {item.logo}
                <span>{item.name}</span>
                <span className="text-slate-400 text-xs">✦</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Ribbon 2 (Tilted +4 degrees, scrolling right) */}
        <div
          className={cn(
            "absolute w-[120vw] -left-[10vw] py-3 sm:py-4 shadow-2xl z-20 flex overflow-hidden rotate-3 sm:rotate-4",
            ribbonColor
          )}
        >
          <motion.div
            animate={{ x: ["-50%", "0%"] }}
            transition={{ duration: 20, ease: "linear", repeat: Infinity }}
            className="flex items-center gap-8 sm:gap-12 whitespace-nowrap"
          >
            {list2.map((item, i) => (
              <div key={i} className="flex items-center gap-3 text-base sm:text-xl font-display font-black tracking-wider uppercase">
                {item.logo}
                <span>{item.name}</span>
                <span className="text-slate-400 text-xs">✦</span>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
}
