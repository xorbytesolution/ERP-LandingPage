import React from "react";
import { cn } from "@/lib/utils";

interface ComicTextProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
  fontSize?: number | string;
  style?: React.CSSProperties;
  className?: string;
}

export function ComicText({
  children,
  fontSize = 3,
  style,
  className,
  ...props
}: ComicTextProps) {
  return (
    <span
      className={cn(
        "inline-block font-black italic tracking-wider select-none transform -rotate-3 hover:rotate-0 hover:scale-105 transition-transform duration-200 cursor-default",
        className
      )}
      style={{
        fontSize: typeof fontSize === "number" ? `${fontSize}rem` : fontSize,
        color: "#FACC15", // Vibrant comic gold/yellow
        WebkitTextStroke: "2px #000000",
        textShadow:
          "3px 3px 0px #000000, 5px 5px 0px rgba(0,0,0,0.85), 7px 7px 0px #2563EB",
        fontFamily: "'Outfit', 'Impact', sans-serif",
        ...style,
      }}
      {...props}
    >
      {children}
    </span>
  );
}
