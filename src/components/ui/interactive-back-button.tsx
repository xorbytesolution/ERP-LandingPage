import React, { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
}

interface InteractiveBackButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  onBack?: () => void;
  className?: string;
}

const PARTICLE_COLORS = ["#3b82f6", "#60a5fa", "#93c5fd", "#38bdf8", "#fbbf24"];

export function InteractiveBackButton({
  onBack,
  className,
  ...props
}: InteractiveBackButtonProps) {
  const [particles, setParticles] = useState<Particle[]>([]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    const newParticles: Particle[] = Array.from({ length: 12 }).map((_, i) => ({
      id: Date.now() + i,
      x: clickX,
      y: clickY,
      size: Math.random() * 3.5 + 2,
      color: PARTICLE_COLORS[Math.floor(Math.random() * PARTICLE_COLORS.length)],
    }));

    setParticles((prev) => [...prev, ...newParticles]);

    setTimeout(() => {
      setParticles((prev) => prev.filter((p) => !newParticles.includes(p)));
    }, 550);

    if (onBack) onBack();
  };

  return (
    <button
      onClick={handleClick}
      className={cn(
        "group relative inline-flex items-center gap-2.5 cursor-pointer rounded-full border border-[#ded7c7] bg-white/90 px-4 py-2 text-xs font-bold text-slate-800 transition-all duration-200 shadow-[0_2px_8px_rgba(44,39,32,0.06),inset_0_1.5px_1px_rgba(255,255,255,0.95)] hover:bg-white hover:border-blue-400 hover:shadow-[0_6px_20px_rgba(37,99,235,0.14)] hover:scale-[1.02] active:scale-[0.97] select-none",
        className
      )}
      {...props}
    >
      {/* Sleek Arrow Icon Circle */}
      <span className="w-5 h-5 rounded-full bg-slate-100 group-hover:bg-blue-600 text-slate-600 group-hover:text-white flex items-center justify-center text-xs shrink-0 transition-all duration-200 shadow-2xs">
        <ArrowLeft className="w-3 h-3 transition-transform duration-200 group-hover:-translate-x-0.5" />
      </span>

      {/* Button Label */}
      <span className="font-sans font-bold text-slate-800 group-hover:text-blue-600 tracking-tight transition-colors duration-200">
        Back to Home
      </span>

      {/* Minimalist Keyboard Hint */}
      <span className="text-[9px] font-mono-tech uppercase font-bold text-slate-400 bg-slate-100 group-hover:bg-blue-50 group-hover:text-blue-500 px-1.5 py-0.5 rounded border border-slate-200 group-hover:border-blue-200 transition-colors duration-200">
        ESC
      </span>

      {/* Particle Burst Spawner on Click */}
      <AnimatePresence>
        {particles.map((p) => {
          const angle = Math.random() * Math.PI * 2;
          const distance = Math.random() * 45 + 20;
          const targetX = Math.cos(angle) * distance;
          const targetY = Math.sin(angle) * distance;

          return (
            <motion.span
              key={p.id}
              initial={{ x: p.x, y: p.y, scale: 1, opacity: 1 }}
              animate={{
                x: p.x + targetX,
                y: p.y + targetY,
                scale: 0,
                opacity: 0,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
              style={{
                width: p.size,
                height: p.size,
                backgroundColor: p.color,
              }}
              className="absolute rounded-full pointer-events-none z-50"
            />
          );
        })}
      </AnimatePresence>
    </button>
  );
}
