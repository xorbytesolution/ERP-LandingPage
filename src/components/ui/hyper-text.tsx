import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface HyperTextProps {
  text: string;
  duration?: number;
  className?: string;
  animateOnHover?: boolean;
  characterSet?: string[];
  highlightColor?: string;
}

const CLEAN_ALPHABETS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".split("");

export function HyperText({
  text = "Hyper Text",
  duration = 950,
  className,
  animateOnHover = true,
  characterSet = CLEAN_ALPHABETS,
  highlightColor = "opacity-60",
}: HyperTextProps) {
  const [displayText, setDisplayText] = useState<string[]>(text.split(""));
  const [solvedMask, setSolvedMask] = useState<boolean[]>(new Array(text.length).fill(false));
  const [isScrambling, setIsScrambling] = useState(false);
  const animRef = useRef<number | null>(null);

  const startSmoothScramble = () => {
    if (isScrambling) return;
    setIsScrambling(true);

    const chars = text.split("");
    const len = chars.length;
    const startTime = performance.now();

    // Staggered per-character solve milestones
    const charMilestones = chars.map((_, i) => {
      const t = i / Math.max(1, len - 1);
      return (0.2 + t * 0.8) * duration;
    });

    let lastFlipTime = 0;
    const flipInterval = 55; // 55ms gentle flip

    const tick = (now: number) => {
      const elapsed = now - startTime;

      const newSolvedMask = chars.map((_, i) => elapsed >= charMilestones[i]);
      setSolvedMask(newSolvedMask);

      const shouldFlip = now - lastFlipTime >= flipInterval;
      if (shouldFlip) {
        lastFlipTime = now;
        setDisplayText(
          chars.map((targetChar, i) => {
            if (targetChar === " ") return " ";
            if (newSolvedMask[i]) return targetChar;
            return characterSet[Math.floor(Math.random() * characterSet.length)];
          })
        );
      }

      if (elapsed < duration) {
        animRef.current = requestAnimationFrame(tick);
      } else {
        setDisplayText(chars);
        setSolvedMask(new Array(len).fill(true));
        setIsScrambling(false);
      }
    };

    animRef.current = requestAnimationFrame(tick);
  };

  useEffect(() => {
    startSmoothScramble();
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
    };
  }, [text]);

  return (
    <span
      onMouseEnter={() => {
        if (animateOnHover) startSmoothScramble();
      }}
      className={cn(
        "inline-flex items-center cursor-pointer select-none font-display font-black tracking-tight align-middle",
        className
      )}
    >
      {displayText.map((char, idx) => {
        const isSolved = solvedMask[idx] ?? false;

        return (
          <span
            key={idx}
            className={cn(
              "inline-block transition-opacity duration-150 px-[0.5px]",
              isSolved ? "opacity-100" : highlightColor
            )}
            style={{
              minWidth: char === " " ? "0.35em" : "auto",
            }}
          >
            {char === " " ? "\u00A0" : char}
          </span>
        );
      })}
    </span>
  );
}
