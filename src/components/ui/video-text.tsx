import React from "react";
import { cn } from "@/lib/utils";

interface VideoTextProps {
  src: string;
  children: string;
  className?: string;
  fontSize?: string | number;
  fontWeight?: string | number;
}

export function VideoText({
  src,
  children,
  className,
  fontSize = "120",
  fontWeight = "900",
}: VideoTextProps) {
  return (
    <div className={cn("relative w-full overflow-hidden flex items-center justify-center select-none", className)}>
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        src={src}
      />

      {/* SVG Mask Container */}
      <svg
        className="relative z-10 w-full h-full"
        viewBox="0 0 1000 300"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <mask id="video-text-mask">
            <rect width="100%" height="100%" fill="white" />
            <text
              x="50%"
              y="55%"
              textAnchor="middle"
              dominantBaseline="middle"
              fill="black"
              fontSize={fontSize}
              fontWeight={fontWeight}
              fontFamily="var(--font-display)"
              letterSpacing="-0.03em"
            >
              {children}
            </text>
          </mask>
        </defs>
        {/* Knockout background overlay */}
        <rect
          width="100%"
          height="100%"
          fill="#020617"
          mask="url(#video-text-mask)"
        />
      </svg>
    </div>
  );
}
