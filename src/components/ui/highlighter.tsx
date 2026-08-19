import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface HighlighterProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  color?: string;
  action?: "highlight" | "underline" | "circle" | "box";
  strokeWidth?: number;
  delay?: number;
  duration?: number;
  className?: string;
}

export function Highlighter({
  children,
  color,
  action = "highlight",
  strokeWidth = 2.2,
  delay = 1.3,
  duration = 0.7,
  className,
  ...props
}: HighlighterProps) {
  const highlightColor =
    color || (action === "highlight" ? "#BAE6FD" : action === "underline" ? "#2563EB" : "#FEF08A");

  return (
    <span
      className={cn("relative inline-block whitespace-nowrap z-0 select-none", className)}
      {...props}
    >
      <span className="relative z-10">{children}</span>

      {/* 1. Realistic Highlighter Marker Stroke (Runs once and sticks) */}
      {action === "highlight" && (
        <motion.span
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.75 }}
          transition={{
            duration,
            delay,
            ease: [0.25, 1, 0.5, 1],
          }}
          className="absolute inset-x-[-4px] bottom-[15%] h-[55%] origin-left -z-10 rounded-sm pointer-events-none"
          style={{
            backgroundColor: highlightColor,
            transform: "rotate(-0.8deg)",
            borderRadius: "4px 8px 3px 6px",
          }}
        />
      )}

      {/* 2. Hand-Drawn Organic Curved Underline (Runs once and sticks) */}
      {action === "underline" && (
        <svg
          className="absolute left-[-2px] -bottom-1.5 w-[calc(100%+4px)] h-3 -z-10 overflow-visible pointer-events-none"
          viewBox="0 0 100 20"
          preserveAspectRatio="none"
          fill="none"
        >
          <motion.path
            d="M 2 14 Q 50 3 98 12"
            stroke={highlightColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: duration + 0.1,
              delay,
              ease: [0.25, 1, 0.5, 1],
            }}
          />
        </svg>
      )}

      {/* 3. Hand-Drawn Sketch Loop Circle (Runs once and sticks) */}
      {action === "circle" && (
        <svg
          className="absolute -inset-x-2.5 -inset-y-2 w-[calc(100%+20px)] h-[calc(100%+16px)] -z-10 overflow-visible pointer-events-none"
          viewBox="0 0 100 50"
          preserveAspectRatio="none"
          fill="none"
        >
          <motion.path
            d="M 8 26 C 6 8, 94 6, 92 25 C 90 44, 8 46, 6 28"
            stroke={highlightColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: duration + 0.15,
              delay,
              ease: [0.25, 1, 0.5, 1],
            }}
          />
        </svg>
      )}

      {/* 4. Hand-Drawn Sketch Box (Perfect generous padding, runs once and sticks) */}
      {action === "box" && (
        <svg
          className="absolute -inset-x-2 -inset-y-1 w-[calc(100%+16px)] h-[calc(100%+8px)] -z-10 overflow-visible pointer-events-none"
          viewBox="0 0 100 40"
          preserveAspectRatio="none"
          fill="none"
        >
          <motion.path
            d="M 3 6 Q 50 3 97 5 Q 98 20 96 35 Q 50 37 4 34 Q 2 20 3 6"
            stroke={highlightColor}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.95 }}
            transition={{
              duration,
              delay,
              ease: [0.25, 1, 0.5, 1],
            }}
          />
        </svg>
      )}
    </span>
  );
}
