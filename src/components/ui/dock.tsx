import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

export interface DockProps {
  className?: string;
  magnification?: number;
  distance?: number;
  direction?: "top" | "middle" | "bottom";
  children: React.ReactNode;
}

const DEFAULT_MAGNIFICATION = 58;
const DEFAULT_DISTANCE = 130;

export function Dock({
  className,
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  direction = "middle",
  children,
  ...props
}: DockProps) {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "w-max inline-flex h-16 items-center justify-center gap-3.5 rounded-full bg-zinc-900/90 px-4 py-2 backdrop-blur-xl border border-zinc-800 shadow-[0_20px_50px_rgba(0,0,0,0.6)] select-none",
        {
          "items-start": direction === "top",
          "items-center": direction === "middle",
          "items-end": direction === "bottom",
        },
        className
      )}
      {...props}
    >
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child, {
            mouseX,
            magnification,
            distance,
          } as any);
        }
        return child;
      })}
    </motion.div>
  );
}

export interface DockIconProps {
  size?: number;
  magnification?: number;
  distance?: number;
  mouseX?: any;
  className?: string;
  children?: React.ReactNode;
  label?: string;
  href?: string;
  onClick?: () => void;
  [key: string]: any;
}

export function DockIcon({
  size = 40,
  magnification = DEFAULT_MAGNIFICATION,
  distance = DEFAULT_DISTANCE,
  mouseX,
  className,
  children,
  label,
  href,
  onClick,
  ...props
}: DockIconProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = React.useState(false);

  const distanceCalc = useTransform(mouseX || useMotionValue(Infinity), (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const widthSync = useTransform(
    distanceCalc,
    [-distance, 0, distance],
    [size, magnification, size]
  );

  const width = useSpring(widthSync, {
    mass: 0.1,
    stiffness: 220,
    damping: 15,
  });

  const content = (
    <motion.div
      ref={ref}
      style={{ width, height: width }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={cn(
        "relative flex aspect-square cursor-pointer items-center justify-center rounded-full bg-zinc-800/90 text-zinc-300 hover:text-white hover:bg-zinc-700/90 border border-zinc-700/70 shadow-md transition-colors",
        className
      )}
      {...props}
    >
      {/* Floating Tooltip */}
      {label && isHovered && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: -30 }}
          exit={{ opacity: 0, y: 5 }}
          className="absolute -top-1 px-2.5 py-1 rounded-md bg-zinc-950 text-white text-[10px] font-mono-tech font-bold uppercase tracking-wider shadow-lg border border-zinc-800 whitespace-nowrap pointer-events-none z-50"
        >
          {label}
        </motion.div>
      )}
      {children}
    </motion.div>
  );

  if (href) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="flex items-center justify-center"
      >
        {content}
      </a>
    );
  }

  return content;
}
