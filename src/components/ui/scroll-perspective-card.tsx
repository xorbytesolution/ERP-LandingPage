import React, { useRef } from "react";
import { useScroll, useTransform, useSpring, motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollPerspectiveCardProps {
  children: React.ReactNode;
  className?: string;
  cardClassName?: string;
  initialRotateX?: number;
  initialScale?: number;
}

export function ScrollPerspectiveCard({
  children,
  className,
  cardClassName,
  initialRotateX = 12,
  initialScale = 0.96,
}: ScrollPerspectiveCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Bidirectional 3D tilt & scale (Smoothly reverses when scrolling UP from footer to top)
  const rawRotate = useTransform(
    scrollYProgress,
    [0, 0.35, 0.65, 1],
    [initialRotateX, 0, 0, -initialRotateX * 0.65]
  );
  const rawScale = useTransform(
    scrollYProgress,
    [0, 0.35, 0.65, 1],
    [initialScale, 1, 1, initialScale * 0.99]
  );
  const rawOpacity = useTransform(
    scrollYProgress,
    [0, 0.25, 0.75, 1],
    [0.85, 1, 1, 0.85]
  );

  // Ultra-creamy spring physics
  const rotateX = useSpring(rawRotate, { stiffness: 95, damping: 22, mass: 0.5, restDelta: 0.001 });
  const scale = useSpring(rawScale, { stiffness: 95, damping: 22, mass: 0.5, restDelta: 0.001 });
  const opacity = useSpring(rawOpacity, { stiffness: 95, damping: 22, mass: 0.5, restDelta: 0.001 });

  return (
    <div
      ref={containerRef}
      className={cn("w-full relative", className)}
      style={{
        perspective: "1200px",
      }}
    >
      <motion.div
        style={{
          rotateX,
          scale,
          opacity,
          transformStyle: "preserve-3d",
          willChange: "transform",
        }}
        className={cn(
          "w-full transition-shadow duration-500",
          cardClassName
        )}
      >
        {children}
      </motion.div>
    </div>
  );
}
