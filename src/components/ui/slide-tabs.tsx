import React, { useRef, useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

interface TabItem {
  id: string;
  label: string;
}

interface SlideTabsProps {
  tabs?: TabItem[];
  defaultTab?: string;
  onChange?: (id: string) => void;
  className?: string;
  tabClassName?: string;
  cursorClassName?: string;
}

const DEFAULT_TABS: TabItem[] = [
  { id: "home", label: "HOME" },
  { id: "pricing", label: "PRICING" },
  { id: "features", label: "FEATURES" },
  { id: "docs", label: "DOCS" },
  { id: "blog", label: "BLOG" },
];

export function SlideTabs({
  tabs = DEFAULT_TABS,
  defaultTab,
  onChange,
  className,
  tabClassName,
  cursorClassName,
}: SlideTabsProps) {
  const [selected, setSelected] = useState<string>(defaultTab || tabs[0]?.id || "");
  const [position, setPosition] = useState<{
    left: number;
    width: number;
    opacity: number;
  }>({
    left: 0,
    width: 0,
    opacity: 0,
  });

  return (
    <ul
      onMouseLeave={() => {
        setPosition((prev) => ({
          ...prev,
          opacity: 0,
        }));
      }}
      className={cn(
        "relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1.5 shadow-sm select-none",
        className
      )}
    >
      {tabs.map((tab) => (
        <Tab
          key={tab.id}
          id={tab.id}
          label={tab.label}
          isSelected={selected === tab.id}
          setPosition={setPosition}
          onClick={() => {
            setSelected(tab.id);
            if (onChange) onChange(tab.id);
          }}
          className={tabClassName}
        />
      ))}

      {/* Floating magnetic sliding cursor */}
      <Cursor position={position} className={cursorClassName} />
    </ul>
  );
}

const Tab = ({
  id,
  label,
  isSelected,
  setPosition,
  onClick,
  className,
}: {
  id: string;
  label: string;
  isSelected: boolean;
  setPosition: React.Dispatch<
    React.SetStateAction<{
      left: number;
      width: number;
      opacity: number;
    }>
  >;
  onClick: () => void;
  className?: string;
}) => {
  const ref = useRef<HTMLLIElement>(null);

  return (
    <li
      ref={ref}
      onMouseEnter={() => {
        if (!ref?.current) return;
        const { width } = ref.current.getBoundingClientRect();
        setPosition({
          left: ref.current.offsetLeft,
          width,
          opacity: 1,
        });
      }}
      onClick={onClick}
      className={cn(
        "relative z-10 block cursor-pointer px-4 py-2 text-xs font-mono-tech font-bold uppercase transition-colors md:px-5 md:py-2.5",
        isSelected ? "text-white" : "text-slate-700 hover:text-black",
        className
      )}
    >
      {label}
      {isSelected && (
        <motion.span
          layoutId="slide-tabs-active-pill"
          className="absolute inset-0 -z-10 rounded-full bg-black shadow-md"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </li>
  );
};

const Cursor = ({
  position,
  className,
}: {
  position: {
    left: number;
    width: number;
    opacity: number;
  };
  className?: string;
}) => {
  return (
    <motion.li
      animate={{
        ...position,
      }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 32,
      }}
      className={cn(
        "absolute z-0 h-9 rounded-full bg-black/10 md:h-10 pointer-events-none",
        className
      )}
    />
  );
};
