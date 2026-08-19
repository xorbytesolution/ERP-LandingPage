import React, { useRef } from "react";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "motion/react";
import { cn } from "@/lib/utils";

interface Parallax3DGalleryProps {
  images?: string[];
  className?: string;
}

const DEFAULT_IMAGES = [
  "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80",
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=600&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&q=80",
  "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=600&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=600&q=80",
  "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=600&q=80",
  "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=600&q=80",
  "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=600&q=80",
  "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=600&q=80",
  "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80",
];

export function Parallax3DGallery({
  images = DEFAULT_IMAGES,
  className,
}: Parallax3DGalleryProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateXSpring = useSpring(useTransform(mouseY, [-300, 300], [24, 12]), {
    stiffness: 120,
    damping: 20,
  });

  const rotateYSpring = useSpring(useTransform(mouseX, [-300, 300], [-18, -6]), {
    stiffness: 120,
    damping: 20,
  });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - (rect.left + rect.width / 2));
    mouseY.set(e.clientY - (rect.top + rect.height / 2));
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Divide images into 4 columns
  const col1 = images.slice(0, 3);
  const col2 = images.slice(3, 6);
  const col3 = images.slice(6, 9);
  const col4 = images.slice(9, 12);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={cn(
        "relative w-full h-[520px] sm:h-[620px] rounded-[36px] overflow-hidden bg-slate-950 p-6 sm:p-10 border border-slate-800 shadow-2xl flex items-center justify-center [perspective:1200px] select-none",
        className
      )}
    >
      {/* Ambient background radiance */}
      <div className="absolute inset-0 bg-radial from-blue-600/20 via-transparent to-transparent blur-3xl pointer-events-none" />

      {/* 3D Tilted Perspective Canvas */}
      <motion.div
        style={{
          rotateX: rotateXSpring,
          rotateY: rotateYSpring,
          rotateZ: 6,
        }}
        className="relative grid grid-cols-3 sm:grid-cols-4 gap-4 sm:gap-6 w-[120%] h-[140%] -translate-x-[10%] -translate-y-[10%] [transform-style:preserve-3d]"
      >
        {/* Column 1 - Downward Offset */}
        <motion.div
          animate={{ y: [0, -35, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col gap-4 sm:gap-6"
        >
          {col1.map((img, i) => (
            <div
              key={i}
              className="relative aspect-[3/4] w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl group transition-transform duration-300 hover:scale-105"
            >
              <img
                src={img}
                alt="Gallery Item"
                className="w-full h-full object-cover grayscale-30 group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          ))}
        </motion.div>

        {/* Column 2 - Upward Offset */}
        <motion.div
          animate={{ y: [-30, 15, -30] }}
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col gap-4 sm:gap-6 -mt-12"
        >
          {col2.map((img, i) => (
            <div
              key={i}
              className="relative aspect-[3/4] w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl group transition-transform duration-300 hover:scale-105"
            >
              <img
                src={img}
                alt="Gallery Item"
                className="w-full h-full object-cover grayscale-30 group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          ))}
        </motion.div>

        {/* Column 3 - Center Downward Offset */}
        <motion.div
          animate={{ y: [10, -40, 10] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col gap-4 sm:gap-6 mt-6"
        >
          {col3.map((img, i) => (
            <div
              key={i}
              className="relative aspect-[3/4] w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl group transition-transform duration-300 hover:scale-105"
            >
              <img
                src={img}
                alt="Gallery Item"
                className="w-full h-full object-cover grayscale-30 group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          ))}
        </motion.div>

        {/* Column 4 - Upward Offset */}
        <motion.div
          animate={{ y: [-20, 25, -20] }}
          transition={{ duration: 13, repeat: Infinity, ease: "easeInOut" }}
          className="hidden sm:flex flex-col gap-4 sm:gap-6 -mt-6"
        >
          {col4.map((img, i) => (
            <div
              key={i}
              className="relative aspect-[3/4] w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 shadow-2xl group transition-transform duration-300 hover:scale-105"
            >
              <img
                src={img}
                alt="Gallery Item"
                className="w-full h-full object-cover grayscale-30 group-hover:grayscale-0 transition-all duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Frame Vignette Mask */}
      <div className="pointer-events-none absolute inset-0 rounded-[36px] ring-1 ring-white/10 bg-radial from-transparent via-transparent to-slate-950/80" />
    </div>
  );
}
