import React from "react";
import { motion } from "motion/react";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface EditorialHeroProps {
  brandName?: string;
  tagline?: string;
  subtext?: string;
  bgImageUrl?: string;
  primaryCtaText?: string;
  onCtaClick?: () => void;
  className?: string;
}

export function EditorialHero({
  brandName = "Menkind",
  tagline = "Modern Healthcare, Done Right.",
  subtext = "Personalized treatments, doctor consultations, and discreet home delivery engineered for modern men.",
  bgImageUrl = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1600&q=80",
  primaryCtaText = "Start Free Consultation",
  onCtaClick,
  className,
}: EditorialHeroProps) {
  return (
    <section
      className={cn(
        "relative min-h-[90vh] w-full flex flex-col justify-between overflow-hidden bg-zinc-950 text-white p-6 sm:p-12 md:p-16 select-none",
        className
      )}
    >
      {/* Background Image with Cinematic Dark Gradient Mask */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgImageUrl}
          alt={brandName}
          className="h-full w-full object-cover opacity-45 filter brightness-75 scale-105 transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
      </div>

      {/* Top Bar Header */}
      <div className="relative z-10 flex items-center justify-between border-b border-white/15 pb-6">
        <div className="text-xl sm:text-2xl font-serif font-black tracking-wider uppercase">
          {brandName}
        </div>
        <div className="flex items-center gap-6 text-xs sm:text-sm font-sans font-medium">
          <span className="hidden sm:inline-block text-zinc-300">
            ★ 4.9/5 by 12,000+ Members
          </span>
          <button
            onClick={onCtaClick}
            className="px-5 py-2.5 rounded-full bg-white text-zinc-950 font-bold hover:bg-zinc-200 transition-colors cursor-pointer text-xs uppercase tracking-wider"
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Main Massive Editorial Typography */}
      <div className="relative z-10 my-auto py-12 max-w-5xl space-y-6">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 border border-white/20 text-white text-[11px] font-mono-tech uppercase tracking-widest backdrop-blur-md">
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>New Standard of Care</span>
        </div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-serif font-black tracking-tight leading-[0.95] text-white"
        >
          {brandName}
        </motion.h1>

        <p className="text-lg sm:text-2xl font-serif italic text-zinc-300 max-w-2xl leading-relaxed">
          {tagline}
        </p>
      </div>

      {/* Bottom Footer Info Row */}
      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6 pt-6 border-t border-white/15">
        <p className="text-xs sm:text-sm text-zinc-400 max-w-md font-sans leading-relaxed">
          {subtext}
        </p>

        <button
          onClick={onCtaClick}
          className="group px-8 py-4 rounded-full bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-sans font-black text-sm tracking-wide flex items-center gap-3 cursor-pointer transition-all shadow-xl shadow-emerald-500/20 active:scale-95"
        >
          <span>{primaryCtaText}</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </button>
      </div>
    </section>
  );
}
