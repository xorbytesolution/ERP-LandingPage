import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface MorphingTextProps {
  texts: string[];
  className?: string;
  morphTime?: number;
  cooldownTime?: number;
}

export function MorphingText({
  texts,
  className,
  morphTime = 1.2,
  cooldownTime = 0.6,
}: MorphingTextProps) {
  const textIndexRef = useRef(0);
  const morphRef = useRef(0);
  const cooldownRef = useRef(0);
  const timeRef = useRef(new Date());

  const [text1, setText1] = useState(texts[0] || "");
  const [text2, setText2] = useState(texts[1] || "");
  const [fraction, setFraction] = useState(0);

  useEffect(() => {
    let animationFrameId: number;

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const newTime = new Date();
      const shouldIncrement = cooldownRef.current > 0;
      const dt = (newTime.getTime() - timeRef.current.getTime()) / 1000;
      timeRef.current = newTime;

      cooldownRef.current -= dt;

      if (cooldownRef.current <= 0) {
        if (shouldIncrement) {
          textIndexRef.current = (textIndexRef.current + 1) % texts.length;
          setText1(texts[textIndexRef.current]);
          setText2(texts[(textIndexRef.current + 1) % texts.length]);
        }
        doMorph();
      } else {
        doCooldown();
      }
    };

    const doMorph = () => {
      morphRef.current -= cooldownRef.current;
      cooldownRef.current = 0;

      let frac = morphRef.current / morphTime;

      if (frac > 1) {
        cooldownRef.current = cooldownTime;
        frac = 1;
      }

      setFraction(frac);
    };

    const doCooldown = () => {
      morphRef.current = 0;
      setFraction(1);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [texts, morphTime, cooldownTime]);

  const blur1 = Math.min(8 / (1 - fraction + 0.001) - 8, 100);
  const blur2 = Math.min(8 / (fraction + 0.001) - 8, 100);
  const opacity1 = Math.pow(1 - fraction, 0.4) * 100;
  const opacity2 = Math.pow(fraction, 0.4) * 100;

  return (
    <div className={cn("relative mx-auto h-16 sm:h-20 w-full text-center flex items-center justify-center font-display font-black", className)}>
      <svg className="absolute h-0 w-0" aria-hidden="true" focusable="false">
        <defs>
          <filter id="morph-threshold">
            <feColorMatrix
              in="SourceGraphic"
              type="matrix"
              values="1 0 0 0 0
                      0 1 0 0 0
                      0 0 1 0 0
                      0 0 0 255 -140"
            />
          </filter>
        </defs>
      </svg>

      <div
        className="w-full flex items-center justify-center select-none"
        style={{ filter: "url(#morph-threshold)" }}
      >
        <span
          className="absolute inset-x-0 inline-block text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight"
          style={{
            filter: `blur(${blur1}px)`,
            opacity: `${opacity1}%`,
          }}
        >
          {text1}
        </span>
        <span
          className="absolute inset-x-0 inline-block text-3xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight"
          style={{
            filter: `blur(${blur2}px)`,
            opacity: `${opacity2}%`,
          }}
        >
          {text2}
        </span>
      </div>
    </div>
  );
}
