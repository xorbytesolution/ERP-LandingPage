import React from "react";
import { cn } from "@/lib/utils";

export interface OrbitingCirclesProps
  extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  delay?: number;
  radius?: number;
  path?: boolean;
  iconSize?: number;
  speed?: number;
}

export function OrbitingCircles({
  className,
  children,
  reverse = false,
  duration = 20,
  delay = 10,
  radius = 160,
  path = true,
  iconSize = 30,
  speed = 1,
  ...props
}: OrbitingCirclesProps) {
  const calculatedDuration = duration / speed;

  return (
    <>
      {path && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
        >
          <circle
            className="stroke-slate-200 stroke-1 dark:stroke-slate-800"
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />
        </svg>
      )}

      <div
        style={
          {
            "--duration": calculatedDuration,
            "--radius": radius,
            "--delay": -delay,
            "--icon-size": `${iconSize}px`,
          } as React.CSSProperties
        }
        className={cn(
          "absolute flex size-[var(--icon-size)] transform-gpu animate-orbit items-center justify-center rounded-full border bg-white/90 dark:bg-slate-900/90 shadow-md",
          { "[animation-direction:reverse]": reverse },
          className
        )}
        {...props}
      >
        {children}
      </div>
    </>
  );
}
