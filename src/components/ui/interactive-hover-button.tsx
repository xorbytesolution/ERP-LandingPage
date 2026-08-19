import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
  className?: string;
}

export function InteractiveHoverButton({
  text = "Button",
  className,
  children,
  onClick,
  ...props
}: InteractiveHoverButtonProps) {
  const content = text || children;

  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative w-auto cursor-pointer overflow-hidden rounded-full border border-slate-200 bg-white p-2 px-6 text-center font-sans text-xs sm:text-sm font-semibold text-slate-800 transition-all duration-300 hover:bg-slate-900 hover:text-white shadow-xs hover:shadow-md active:scale-[0.98]",
        className
      )}
      {...props}
    >
      {/* Default text with blue expanding circle dot */}
      <div className="flex items-center gap-2 transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
        <div className="h-2 w-2 rounded-full bg-blue-600 transition-all duration-300 group-hover:scale-[100]" />
        <span>{content}</span>
      </div>

      {/* Hover reveal text with Arrow slide-in */}
      <div className="absolute inset-0 z-10 flex -translate-x-12 items-center justify-center gap-2 text-white opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
        <span>{content}</span>
        <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
      </div>
    </button>
  );
}
