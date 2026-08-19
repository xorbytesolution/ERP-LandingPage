import React, { useEffect, useRef } from "react";
import { liquidMetalFragmentShader, ShaderMount } from "@paper-design/shaders";
import { BorderBeam } from "./border-beam";
import { cn } from "@/lib/utils";

interface LiquidGlassCardProps {
  children: React.ReactNode;
  className?: string;
  innerClassName?: string;
}

export function LiquidGlassCard({ children, className, innerClassName }: LiquidGlassCardProps) {
  const shaderRef = useRef<HTMLDivElement>(null);
  // biome-ignore lint/suspicious/noExplicitAny: External library without types
  const shaderMount = useRef<any>(null);

  useEffect(() => {
    const styleId = "liquid-glass-card-style";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.textContent = `
        .liquid-card-shader canvas {
          width: 100% !important;
          height: 100% !important;
          display: block !important;
          position: absolute !important;
          top: 0 !important;
          left: 0 !important;
          border-radius: inherit !important;
          object-fit: cover !important;
        }
      `;
      document.head.appendChild(style);
    }

    const loadShader = async () => {
      try {
        if (shaderRef.current) {
          if (shaderMount.current?.destroy) {
            shaderMount.current.destroy();
          }

          shaderMount.current = new ShaderMount(
            shaderRef.current,
            liquidMetalFragmentShader,
            {
              u_repetition: 2.0,
              u_softness: 0.9,
              u_shiftRed: 0.2,
              u_shiftBlue: 0.95,
              u_distortion: 0.2,
              u_contour: 0.1,
              u_angle: 45,
              u_scale: 5,
              u_shape: 0.9,
              u_offsetX: 0.0,
              u_offsetY: 0.0,
            },
            undefined,
            0.4
          );
        }
      } catch (error) {
        console.error("Failed to load liquid glass card shader:", error);
      }
    };

    loadShader();

    return () => {
      if (shaderMount.current?.destroy) {
        shaderMount.current.destroy();
        shaderMount.current = null;
      }
    };
  }, []);

  return (
    <div
      className={cn(
        "relative rounded-[32px] sm:rounded-[40px] p-8 sm:p-12 md:p-14 overflow-hidden border border-white/20 backdrop-blur-3xl backdrop-saturate-150 transition-all duration-500 group",
        className
      )}
      style={{
        background:
          "linear-gradient(135deg, rgba(15, 23, 42, 0.78) 0%, rgba(10, 15, 30, 0.88) 50%, rgba(2, 6, 23, 0.95) 100%)",
        boxShadow:
          "inset 0 1.5px 1px 0 rgba(255, 255, 255, 0.35), inset 0 -1px 2px 0 rgba(0, 0, 0, 0.6), 0 30px 70px -15px rgba(0, 0, 0, 0.55), 0 0 40px -10px rgba(59, 130, 246, 0.2)",
      }}
    >
      {/* 1. Luminous Ambient Chromatic Backlight Flares */}
      <div className="absolute -top-24 -left-24 w-80 h-80 bg-blue-500/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-indigo-500/25 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-48 bg-cyan-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* 2. Real WebGL Liquid Metal / Liquid Glass Shader Canvas */}
      <div
        ref={shaderRef}
        className="liquid-card-shader absolute inset-0 pointer-events-none opacity-30 mix-blend-screen"
        style={{
          borderRadius: "inherit",
          overflow: "hidden",
        }}
      />

      {/* 3. High-Precision Prismatic Frosted Glass Overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(120deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 40%, rgba(0, 0, 0, 0.2) 100%)",
          borderRadius: "inherit",
        }}
      />

      {/* 4. Magic UI Animated Laser Border Beam */}
      <BorderBeam size={350} duration={10} borderWidth={1.5} colorFrom="#38bdf8" colorTo="#818cf8" />

      {/* 5. Foreground Content */}
      <div
        className={cn(
          "relative z-10 w-full flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 text-left",
          innerClassName
        )}
      >
        {children}
      </div>
    </div>
  );
}
