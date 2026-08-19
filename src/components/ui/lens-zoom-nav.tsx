import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

interface LensZoomNavProps {
  items: {
    label: string;
    href?: string;
    onClick?: () => void;
    highlight?: boolean;
  }[];
  className?: string;
}

export function LensZoomNav({ items, className }: LensZoomNavProps) {
  const mouseX = useMotionValue(Infinity);

  return (
    <motion.nav
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        "flex flex-wrap items-center justify-center gap-x-5 sm:gap-x-7 gap-y-3 py-3 select-none",
        className
      )}
    >
      {items.map((item) => (
        <LensZoomItem key={item.label} mouseX={mouseX} item={item} />
      ))}
    </motion.nav>
  );
}

function LensZoomItem({
  mouseX,
  item,
}: {
  mouseX: any;
  item: {
    label: string;
    href?: string;
    onClick?: () => void;
    highlight?: boolean;
  };
}) {
  const ref = useRef<HTMLDivElement>(null);

  const distance = 140; // Proximity threshold in pixels

  const distanceCalc = useTransform(mouseX, (val: number) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - (bounds.x + bounds.width / 2);
  });

  // Calculate dynamic scale, y-elevation, and glow
  const rawScale = useTransform(distanceCalc, [-distance, 0, distance], [1, 1.35, 1]);
  const rawY = useTransform(distanceCalc, [-distance, 0, distance], [0, -5, 0]);
  const rawOpacity = useTransform(distanceCalc, [-distance, 0, distance], [0.65, 1, 0.65]);

  const scale = useSpring(rawScale, { mass: 0.1, stiffness: 260, damping: 16 });
  const y = useSpring(rawY, { mass: 0.1, stiffness: 260, damping: 16 });
  const opacity = useSpring(rawOpacity, { mass: 0.1, stiffness: 260, damping: 16 });

  return (
    <motion.div
      ref={ref}
      style={{ scale, y, opacity }}
      className="inline-block origin-bottom transition-colors will-change-transform"
    >
      {item.href ? (
        <a
          href={item.href}
          className={cn(
            "text-xs sm:text-sm font-sans font-semibold tracking-tight transition-colors duration-150 inline-block px-1.5 py-0.5",
            item.highlight
              ? "text-cyan-400 hover:text-cyan-200 drop-shadow-[0_0_12px_rgba(34,211,238,0.6)]"
              : "text-zinc-400 hover:text-white"
          )}
        >
          {item.label}
        </a>
      ) : (
        <button
          onClick={item.onClick}
          className={cn(
            "text-xs sm:text-sm font-sans font-bold tracking-tight transition-colors duration-150 cursor-pointer inline-block px-2 py-0.5 rounded-full",
            item.highlight
              ? "text-cyan-400 hover:text-cyan-200 drop-shadow-[0_0_14px_rgba(34,211,238,0.7)]"
              : "text-blue-400 hover:text-white"
          )}
        >
          {item.label}
        </button>
      )}
    </motion.div>
  );
}
