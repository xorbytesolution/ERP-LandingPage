import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export interface AccordionItem {
  id: string;
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  image: string;
  badge?: string;
  description?: string;
}

interface ExpandableImageAccordionProps {
  items: AccordionItem[];
  defaultActiveId?: string;
  className?: string;
}

export function ExpandableImageAccordion({
  items,
  defaultActiveId,
  className,
}: ExpandableImageAccordionProps) {
  const [activeId, setActiveId] = useState<string>(
    defaultActiveId || items[0]?.id || ""
  );

  return (
    <div
      className={cn(
        "flex flex-col md:flex-row gap-3 w-full h-[480px] sm:h-[520px] select-none",
        className
      )}
    >
      {items.map((item) => {
        const isActive = activeId === item.id;

        return (
          <motion.div
            key={item.id}
            layout
            onClick={() => setActiveId(item.id)}
            onMouseEnter={() => setActiveId(item.id)}
            className={cn(
              "relative rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-out",
              isActive
                ? "md:flex-[4] flex-[3] shadow-2xl ring-2 ring-blue-500/30"
                : "md:flex-[1] flex-[1] opacity-75 hover:opacity-100"
            )}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          >
            {/* Background Image */}
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            />

            {/* Gradient Overlays */}
            <div
              className={cn(
                "absolute inset-0 transition-opacity duration-300 pointer-events-none",
                isActive
                  ? "bg-gradient-to-t from-black/85 via-black/20 to-transparent"
                  : "bg-black/40 hover:bg-black/25"
              )}
            />

            {/* Inactive State: Bottom Round Icon Pin */}
            {!isActive && (
              <div className="absolute inset-x-0 bottom-6 flex justify-center items-center pointer-events-none">
                <div className="w-11 h-11 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center shadow-lg">
                  {item.icon || "✨"}
                </div>
              </div>
            )}

            {/* Active Expanded Details */}
            {isActive && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: 0.1 }}
                className="absolute inset-x-0 bottom-0 p-6 sm:p-8 text-white space-y-2 pointer-events-none"
              >
                {/* Badge & Icon */}
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-blue-600/90 backdrop-blur-md text-white flex items-center justify-center shadow-md">
                    {item.icon || "✨"}
                  </div>
                  {item.badge && (
                    <span className="text-[10px] font-mono-tech font-bold uppercase tracking-wider bg-white/20 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                      {item.badge}
                    </span>
                  )}
                </div>

                {/* Title & Subtitle */}
                <div>
                  <h4 className="text-xl sm:text-2xl font-display font-black text-white tracking-tight">
                    {item.title}
                  </h4>
                  {item.subtitle && (
                    <p className="text-xs sm:text-sm text-slate-300 font-sans font-medium">
                      {item.subtitle}
                    </p>
                  )}
                </div>

                {/* Description */}
                {item.description && (
                  <p className="text-xs text-slate-400 font-sans font-medium line-clamp-2 max-w-md pt-1">
                    {item.description}
                  </p>
                )}
              </motion.div>
            )}
          </motion.div>
        );
      })}
    </div>
  );
}
