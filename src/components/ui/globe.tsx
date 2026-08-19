import createGlobe, { COBEOptions } from "cobe";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const GLOBE_CONFIG: COBEOptions = {
  width: 800,
  height: 800,
  devicePixelRatio: 2,
  phi: 0,
  theta: 0.25,
  dark: 0,
  diffuse: 1.8,
  mapSamples: 24000,
  mapBrightness: 8,
  baseColor: [0.88, 0.92, 0.98], // Soft visible sphere shading on white bg
  markerColor: [251 / 255, 100 / 255, 21 / 255], // Vibrant amber beacons
  glowColor: [0.92, 0.95, 1],
  markers: [],
};

export function Globe({
  className,
  config = GLOBE_CONFIG,
}: {
  className?: string;
  config?: COBEOptions;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const pointerInteracting = useRef<number | null>(null);
  const pointerInteractionMovement = useRef(0);
  const r = useRef(0);

  const updatePointerInteraction = (value: number | null) => {
    pointerInteracting.current = value;
    if (canvasRef.current) {
      canvasRef.current.style.cursor = value ? "grabbing" : "grab";
    }
  };

  const updateMovement = (clientX: number) => {
    if (pointerInteracting.current !== null) {
      const delta = clientX - pointerInteracting.current;
      pointerInteractionMovement.current = delta;
      r.current = delta / 200;
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    let width = canvas.offsetWidth || 400;
    const onResize = () => {
      if (canvas) {
        width = canvas.offsetWidth || 400;
      }
    };

    window.addEventListener("resize", onResize);

    let phi = 0;
    let animationFrameId: number;
    let globe: ReturnType<typeof createGlobe> | null = null;

    try {
      globe = createGlobe(canvas, {
        ...config,
        width: width * 2,
        height: width * 2,
      });

      const animate = () => {
        if (!pointerInteracting.current) {
          phi += 0.006;
        }
        if (globe) {
          globe.update({
            phi: phi + r.current,
            width: width * 2,
            height: width * 2,
          });
        }
        animationFrameId = requestAnimationFrame(animate);
      };

      animate();

      setTimeout(() => {
        if (canvas) canvas.style.opacity = "1";
      }, 50);
    } catch (err) {
      console.warn("Globe initialization fallback:", err);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener("resize", onResize);
      try {
        if (globe && typeof globe.destroy === "function") {
          globe.destroy();
        }
      } catch (err) {
        // Safe unmount
      }
    };
  }, [config]);

  return (
    <div
      className={cn(
        "relative flex items-center justify-center aspect-square w-full h-full",
        className
      )}
    >
      <canvas
        className="size-full opacity-0 transition-opacity duration-500 [contain:layout_paint_size]"
        ref={canvasRef}
        onPointerDown={(e) =>
          updatePointerInteraction(
            e.clientX - pointerInteractionMovement.current
          )
        }
        onPointerUp={() => updatePointerInteraction(null)}
        onPointerOut={() => updatePointerInteraction(null)}
        onMouseMove={(e) => updateMovement(e.clientX)}
        onTouchMove={(e) =>
          e.touches[0] && updateMovement(e.touches[0].clientX)
        }
      />
    </div>
  );
}
