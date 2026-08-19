import React, { useState } from "react";
import { cn } from "@/lib/utils";

interface KineticTextProps extends React.HTMLAttributes<HTMLHeadingElement> {
  text: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
}

export function KineticText({
  text,
  className,
  as: Component = "span",
  ...props
}: KineticTextProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <Component
      className={cn("inline-flex flex-wrap items-center select-none cursor-default", className)}
      onMouseLeave={() => setHoveredIndex(null)}
      {...props}
    >
      {text.split("").map((char, index) => {
        // Calculate distance from hovered character to create a ripple of font-weights
        let weightClass = "font-normal";
        if (hoveredIndex !== null) {
          const distance = Math.abs(hoveredIndex - index);
          if (distance === 0) weightClass = "font-black scale-110 -translate-y-0.5 text-blue-600";
          else if (distance === 1) weightClass = "font-extrabold text-blue-500";
          else if (distance === 2) weightClass = "font-bold text-slate-900";
          else if (distance === 3) weightClass = "font-semibold text-slate-800";
        }

        return (
          <span
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}
            className={cn(
              "inline-block transition-all duration-150 transform will-change-transform",
              weightClass
            )}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        );
      })}
    </Component>
  );
}
