import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface Text3DFlipProps {
  children: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  staggerDuration?: number;
  trigger?: "hover" | "inView";
}

export function Text3DFlip({
  children,
  className,
  as: Component = "span",
  staggerDuration = 0.03,
  trigger = "hover",
}: Text3DFlipProps) {
  const letters = children.split("");

  return (
    <Component
      className={cn(
        "inline-flex flex-wrap items-center [perspective:1000px] cursor-default group select-none",
        className
      )}
    >
      {letters.map((char, index) => (
        <motion.span
          key={index}
          className="inline-block [transform-style:preserve-3d] transition-transform duration-500 group-hover:[transform:rotateX(360deg)]"
          style={{
            transitionDelay: `${index * staggerDuration}s`,
          }}
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </Component>
  );
}
