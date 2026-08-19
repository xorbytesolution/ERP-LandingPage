import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface PixelImageProps {
  src: string;
  alt?: string;
  grid?: "4x4" | "6x6" | "8x8" | "12x12" | "16x16";
  className?: string;
}

export function PixelImage({
  src,
  alt = "Pixel Image",
  grid = "8x8",
  className,
}: PixelImageProps) {
  const [isRevealed, setIsRevealed] = useState(false);

  const [colsStr, rowsStr] = grid.split("x");
  const cols = parseInt(colsStr, 10) || 8;
  const rows = parseInt(rowsStr, 10) || 8;
  const totalPixels = cols * rows;

  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl cursor-pointer group select-none",
        className
      )}
      onMouseEnter={() => setIsRevealed(true)}
      onMouseLeave={() => setIsRevealed(false)}
    >
      {/* Base Image */}
      <img
        src={src}
        alt={alt}
        className={cn(
          "w-full h-full object-cover transition-all duration-700",
          isRevealed ? "scale-105 filter-none" : "filter grayscale brightness-95"
        )}
      />

      {/* Pixelated Grid Overlay */}
      <div
        className="absolute inset-0 grid pointer-events-none"
        style={{
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
          gridTemplateRows: `repeat(${rows}, minmax(0, 1fr))`,
        }}
      >
        {Array.from({ length: totalPixels }).map((_, i) => {
          const delay = Math.random() * 0.4;
          return (
            <motion.div
              key={i}
              initial={false}
              animate={{
                opacity: isRevealed ? 0 : 0.75,
                scale: isRevealed ? 0 : 1,
              }}
              transition={{
                duration: 0.35,
                delay: isRevealed ? delay : 0,
                ease: "easeOut",
              }}
              className="bg-slate-900/60 backdrop-blur-[1px] border border-white/5"
            />
          );
        })}
      </div>
    </div>
  );
}
