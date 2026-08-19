import React from "react";
import { cn } from "@/lib/utils";

interface WarpBackgroundProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
  perspective?: number;
  beamsPerSide?: number;
  beamSize?: number;
  beamDuration?: number;
  gridColor?: string;
  className?: string;
}

export function WarpBackground({
  children,
  perspective = 100,
  beamsPerSide = 3,
  beamSize = 5,
  beamDuration = 3,
  gridColor = "rgba(59, 130, 246, 0.15)",
  className,
  ...props
}: WarpBackgroundProps) {
  return (
    <div
      className={cn(
        "relative w-full rounded-3xl overflow-hidden p-8 sm:p-12 flex items-center justify-center [perspective:300px]",
        className
      )}
      {...props}
    >
      {/* 3D Warp Grid Walls */}
      <div
        className="pointer-events-none absolute inset-0 opacity-40 [transform:rotateX(45deg)_scale(2)]"
        style={{
          backgroundImage: `linear-gradient(to right, ${gridColor} 1px, transparent 1px), linear-gradient(to bottom, ${gridColor} 1px, transparent 1px)`,
          backgroundSize: "30px 30px",
        }}
      />

      {/* Radiant Glow Burst */}
      <div className="pointer-events-none absolute inset-0 bg-radial from-blue-500/10 via-transparent to-transparent blur-2xl" />

      {/* Centered Content Box */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
