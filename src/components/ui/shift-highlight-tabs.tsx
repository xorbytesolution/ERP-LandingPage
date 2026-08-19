import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface TabItem {
  id: string;
  label: string;
  count?: number | string;
}

interface ShiftHighlightTabsProps {
  tabs?: TabItem[];
  defaultTab?: string;
  onChange?: (id: string) => void;
  className?: string;
  tabClassName?: string;
}

const DEFAULT_TABS: TabItem[] = [
  { id: "issues", label: "Issues" },
  { id: "kanban", label: "Kanban" },
  { id: "gantt", label: "Gantt" },
  { id: "docs", label: "Documentation" },
];

export function ShiftHighlightTabs({
  tabs = DEFAULT_TABS,
  defaultTab,
  onChange,
  className,
  tabClassName,
}: ShiftHighlightTabsProps) {
  const [selected, setSelected] = useState<string>(defaultTab || tabs[0]?.id || "");

  const handleSelect = (id: string) => {
    setSelected(id);
    if (onChange) onChange(id);
  };

  return (
    <div className={cn("flex flex-wrap items-center gap-3 select-none", className)}>
      {tabs.map((tab) => {
        const isSelected = selected === tab.id;
        return (
          <button
            key={tab.id}
            onClick={() => handleSelect(tab.id)}
            className={cn(
              "relative px-5 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer font-sans duration-200",
              isSelected
                ? "bg-white text-blue-600 font-bold border-2 border-blue-600 shadow-[0_4px_0_0_#2563eb] -translate-y-0.5"
                : "bg-white text-slate-800 border-2 border-slate-300 hover:border-slate-800 shadow-[0_2px_0_0_#cbd5e1] hover:shadow-[0_3px_0_0_#1e293b] active:translate-y-0.5 active:shadow-none",
              tabClassName
            )}
          >
            <span className="relative z-10 flex items-center gap-2">
              <span>{tab.label}</span>
              {tab.count !== undefined && (
                <span
                  className={cn(
                    "text-[10px] px-1.5 py-0.5 rounded-md font-mono-tech font-bold",
                    isSelected ? "bg-blue-100 text-blue-700" : "bg-slate-100 text-slate-600"
                  )}
                >
                  {tab.count}
                </span>
              )}
            </span>
          </button>
        );
      })}
    </div>
  );
}
