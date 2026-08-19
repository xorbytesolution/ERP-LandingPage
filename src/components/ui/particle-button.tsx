import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
}

interface ParticleButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
  particleColor?: string[];
}

const DEFAULT_COLORS = ["#3b82f6", "#60a5fa", "#93c5fd", "#38bdf8", "#818cf8"];

export function ParticleButton({
  children = "Click for Magic",
  className,
  particleColor = DEFAULT_COLORS,
  onClick,
  ...props
}: ParticleButtonProps) {
  const [particles, setParticles] = useState<Particle[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    const newParticles: Particle[] = Array.from({ length: 16 }).map((_, i) => ({
      id: Date.now() + i,
      x: clickX,
      y: clickY,
      size: Math.random() * 5 + 3,
      color: particleColor[Math.floor(Math.random() * particleColor.length)],
    }));

    setParticles((prev) => [...prev, ...newParticles]);

    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => !newParticles.includes(p)));
    }, 700);

    if (onClick) onClick(e);
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "relative inline-flex items-center justify-center gap-2 overflow-visible rounded-2xl bg-slate-900 px-7 py-3.5 text-xs sm:text-sm font-display font-bold text-white shadow-xl hover:bg-slate-800 transition-all cursor-pointer select-none active:scale-95 group",
        className
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        <Sparkles className="w-4 h-4 text-amber-400 transition-transform group-hover:rotate-12" />
        <span>{children}</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
      </span>

      {/* Bursting Micro-Particles */}
      <AnimatePresence>
        {particles.map((p) => {
          const angle = Math.random() * Math.PI * 2;
          const distance = Math.random() * 65 + 30;
          const targetX = Math.cos(angle) * distance;
          const targetY = Math.sin(angle) * distance;

          return (
            <motion.span
              key={p.id}
              initial={{
                x: p.x,
                y: p.y,
                scale: 1,
                opacity: 1,
              }}
              animate={{
                x: p.x + targetX,
                y: p.y + targetY,
                scale: 0,
                opacity: 0,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.65, ease: "easeOut" }}
              style={{
                width: p.size,
                height: p.size,
                backgroundColor: p.color,
              }}
              className="absolute rounded-full pointer-events-none z-50 shadow-sm"
            />
          );
        })}
      </AnimatePresence>
    </button>
  );
}
