import React from "react";
import { cn } from "@/lib/utils";

interface SpinningTextProps extends React.HTMLAttributes<HTMLDivElement> {
  children: string;
  duration?: number;
  reverse?: boolean;
  radius?: number;
  className?: string;
  fontSize?: number;
}

export function SpinningText({
  children,
  duration = 10,
  reverse = false,
  radius = 60,
  className,
  fontSize = 12,
  ...props
}: SpinningTextProps) {
  const letters = Array.from(children);
  const totalLetters = letters.length;
  const angleStep = 360 / totalLetters;

  return (
    <div
      className={cn(
        "relative flex items-center justify-center select-none",
        className
      )}
      style={{
        width: `${radius * 2 + 40}px`,
        height: `${radius * 2 + 40}px`,
      }}
      {...props}
    >
      <div
        className={cn("absolute inset-0 animate-spin")}
        style={{
          animationDuration: `${duration}s`,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {letters.map((letter, i) => {
          const angle = i * angleStep;
          return (
            <span
              key={i}
              className="absolute left-1/2 top-1/2 font-mono-tech uppercase font-bold text-slate-700 dark:text-slate-300 origin-bottom"
              style={{
                fontSize: `${fontSize}px`,
                transform: `translate(-50%, -50%) rotate(${angle}deg) translateY(-${radius}px)`,
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </span>
          );
        })}
      </div>
    </div>
  );
}
