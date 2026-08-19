import React, { useId } from "react";
import { cn } from "@/lib/utils";

interface HexagonPatternProps extends React.SVGProps<SVGSVGElement> {
  width?: number;
  height?: number;
  x?: number;
  y?: number;
  squares?: Array<[x: number, y: number]>;
  strokeDasharray?: string;
  className?: string;
}

export function HexagonPattern({
  width = 50,
  height = 50,
  x = -1,
  y = -1,
  strokeDasharray = "0",
  squares,
  className,
  ...props
}: HexagonPatternProps) {
  const id = useId();

  return (
    <svg
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 h-full w-full fill-slate-400/10 stroke-slate-400/20",
        className
      )}
      {...props}
    >
      <defs>
        <pattern
          id={id}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path
            d={`M ${width / 2} 0 L ${width} ${height / 4} L ${width} ${(3 * height) / 4} L ${width / 2} ${height} L 0 ${(3 * height) / 4} L 0 ${height / 4} Z`}
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeDasharray={strokeDasharray}
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" strokeWidth={0} fill={`url(#${id})`} />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([sqX, sqY], idx) => (
            <path
              key={idx}
              d={`M ${sqX * width + width / 2} ${sqY * height} L ${sqX * width + width} ${sqY * height + height / 4} L ${sqX * width + width} ${sqY * height + (3 * height) / 4} L ${sqX * width + width / 2} ${sqY * height + height} L ${sqX * width} ${sqY * height + (3 * height) / 4} L ${sqX * width} ${sqY * height + height / 4} Z`}
              className="fill-blue-500/15 stroke-blue-500/30"
              strokeWidth="1"
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
