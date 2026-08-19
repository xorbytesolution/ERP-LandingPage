import React, { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface IconCloudProps {
  iconSlugs?: string[];
  imageUrls?: string[];
  icons?: React.ReactNode[];
  className?: string;
}

export function IconCloud({
  iconSlugs = [
    "typescript",
    "javascript",
    "react",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "testinglibrary",
    "jest",
    "cypress",
    "docker",
    "git",
    "jira",
    "github",
    "gitlab",
    "visualstudiocode",
    "androidstudio",
  ],
  imageUrls,
  icons,
  className,
}: IconCloudProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const isDragging = useRef(false);
  const lastMousePos = useRef({ x: 0, y: 0 });

  const items = imageUrls || iconSlugs.map((slug) => `https://cdn.simpleicons.org/${slug}/${slug}`);

  useEffect(() => {
    let animationFrameId: number;

    const autoRotate = () => {
      if (!isDragging.current) {
        setRotation((prev) => ({
          x: prev.x + 0.002,
          y: prev.y + 0.003,
        }));
      }
      animationFrameId = requestAnimationFrame(autoRotate);
    };

    animationFrameId = requestAnimationFrame(autoRotate);
    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    lastMousePos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const deltaX = e.clientX - lastMousePos.current.x;
    const deltaY = e.clientY - lastMousePos.current.y;
    lastMousePos.current = { x: e.clientX, y: e.clientY };

    setRotation((prev) => ({
      x: prev.x - deltaY * 0.005,
      y: prev.y + deltaX * 0.005,
    }));
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  // Spherical coordinate math for items
  const radius = 130;
  const count = items.length;

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className={cn(
        "relative w-72 h-72 sm:w-80 sm:h-80 mx-auto flex items-center justify-center cursor-grab active:cursor-grabbing select-none [perspective:1000px]",
        className
      )}
    >
      <div
        className="relative w-full h-full [transform-style:preserve-3d]"
        style={{
          transform: `rotateX(${rotation.x}rad) rotateY(${rotation.y}rad)`,
        }}
      >
        {items.map((item, index) => {
          const phi = Math.acos(-1 + (2 * index) / count);
          const theta = Math.sqrt(count * Math.PI) * phi;

          const x = radius * Math.cos(theta) * Math.sin(phi);
          const y = radius * Math.sin(theta) * Math.sin(phi);
          const z = radius * Math.cos(phi);

          return (
            <div
              key={index}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-white/90 dark:bg-slate-800/90 shadow-md border border-slate-200 dark:border-slate-700 p-2 flex items-center justify-center transition-transform hover:scale-125 hover:z-50"
              style={{
                transform: `translate3d(${x}px, ${y}px, ${z}px) rotateY(${-rotation.y}rad) rotateX(${-rotation.x}rad)`,
              }}
            >
              <img
                src={item}
                alt="Technology Icon"
                className="w-full h-full object-contain pointer-events-none"
                loading="lazy"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
