import React, { useState } from "react";
import { Search, Sparkles, Command } from "lucide-react";
import { cn } from "@/lib/utils";

interface GlowInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: React.ReactNode;
  shortcut?: string;
  className?: string;
  wrapperClassName?: string;
}

export function GlowInput({
  placeholder = "Search anything with AI...",
  icon = <Search className="w-4 h-4 text-blue-500" />,
  shortcut = "⌘K",
  className,
  wrapperClassName,
  ...props
}: GlowInputProps) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className={cn("relative w-full max-w-md group", wrapperClassName)}>
      {/* Dynamic Animated Ambient Neon Glow */}
      <div
        className={cn(
          "absolute -inset-0.5 rounded-2xl bg-gradient-to-r from-blue-500 via-indigo-500 to-cyan-400 opacity-0 blur-md transition-opacity duration-300 pointer-events-none",
          isFocused && "opacity-75"
        )}
      />

      {/* Input Container */}
      <div className="relative flex items-center w-full rounded-2xl bg-white border border-slate-200/90 shadow-sm transition-colors group-hover:border-slate-300">
        <div className="pl-4 pointer-events-none flex items-center justify-center">
          {icon}
        </div>

        <input
          type="text"
          placeholder={placeholder}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={cn(
            "w-full px-3 py-3.5 bg-transparent text-xs sm:text-sm font-sans font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none",
            className
          )}
          {...props}
        />

        {shortcut && (
          <div className="pr-3 flex items-center pointer-events-none">
            <kbd className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-slate-100 px-2 py-0.5 text-[10px] font-mono-tech font-bold text-slate-500">
              <span>{shortcut}</span>
            </kbd>
          </div>
        )}
      </div>
    </div>
  );
}
