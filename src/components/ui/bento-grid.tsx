import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface BentoGridProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export interface BentoCardProps {
  name: string;
  className?: string;
  background?: React.ReactNode;
  Icon: React.ElementType;
  description: string;
  href?: string;
  cta?: string;
  onClick?: () => void;
}

export function BentoGrid({ children, className, ...props }: BentoGridProps) {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function BentoCard({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta = "Learn more",
  onClick,
}: BentoCardProps) {
  return (
    <div
      key={name}
      onClick={onClick}
      className={cn(
        "group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-3xl",
        "bg-white border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-500",
        "dark:bg-slate-900 dark:border-slate-800",
        className
      )}
    >
      {/* Background visual slot */}
      <div className="absolute inset-0 z-0 overflow-hidden">{background}</div>

      {/* Top Header Icon & Content */}
      <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-2">
        <div className="w-12 h-12 rounded-2xl bg-slate-100 dark:bg-slate-800 border border-slate-200/60 dark:border-slate-700/60 flex items-center justify-center text-slate-900 dark:text-white shadow-xs group-hover:scale-110 transition-transform">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-display font-bold text-slate-900 dark:text-white tracking-tight mt-3">
          {name}
        </h3>
        <p className="max-w-lg text-xs sm:text-sm text-slate-600 dark:text-slate-400 font-sans font-medium leading-relaxed">
          {description}
        </p>
      </div>

      {/* Bottom Action CTA that slides up on hover */}
      <div
        className={cn(
          "pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
        )}
      >
        <a
          href={href || "#"}
          className="pointer-events-auto flex items-center gap-1.5 text-xs font-bold text-blue-600 dark:text-blue-400 hover:text-blue-700 transition-colors"
        >
          <span>{cta}</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </a>
      </div>

      {/* Subtle bottom shadow vignette */}
      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.02] dark:group-hover:bg-white/[.02]" />
    </div>
  );
}
