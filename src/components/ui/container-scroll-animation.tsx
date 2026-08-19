import React, { useRef } from "react";
import { useScroll, useTransform, useSpring, motion, MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";

export const ContainerScroll = ({
  titleComponent,
  children,
  className,
  cardClassName,
}: {
  titleComponent: string | React.ReactNode;
  children: React.ReactNode;
  className?: string;
  cardClassName?: string;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "center center"],
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.95, 1] : [0.94, 1];
  };

  // Silky Smooth, Responsive Apple/Linear-grade 3D Unfolding
  // Natural subtle tilt (10deg to 0deg) that responds instantly to user scroll without lag
  const rawRotate = useTransform(scrollYProgress, [0, 0.9], [isMobile ? 8 : 12, 0]);
  const rawScale = useTransform(scrollYProgress, [0, 0.9], scaleDimensions());
  const rawTranslate = useTransform(scrollYProgress, [0, 0.9], [25, 0]);
  const sheenTranslate = useTransform(scrollYProgress, [0, 1], ["-100%", "260%"]);

  // Snappy, organic spring physics (no sluggish lag, locked 60/120fps sync with scroll wheel)
  const rotate = useSpring(rawRotate, { stiffness: 260, damping: 30, mass: 0.2, restDelta: 0.001 });
  const scale = useSpring(rawScale, { stiffness: 260, damping: 30, mass: 0.2, restDelta: 0.001 });
  const translate = useSpring(rawTranslate, { stiffness: 260, damping: 30, mass: 0.2, restDelta: 0.001 });

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center relative px-3 sm:px-6 lg:px-8 py-6 sm:py-12",
        className
      )}
      ref={containerRef}
    >
      <div
        className="w-full relative"
        style={{
          perspective: "1200px",
        }}
      >
        <Header translate={translate} titleComponent={titleComponent} />
        <Card
          rotate={rotate}
          translate={translate}
          scale={scale}
          sheenTranslate={sheenTranslate}
          className={cardClassName}
        >
          {children}
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate, titleComponent }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="max-w-4xl mx-auto text-center relative z-10 mb-5 sm:mb-7"
    >
      {titleComponent}
    </motion.div>
  );
};

export const Card = ({
  rotate,
  scale,
  sheenTranslate,
  children,
  className,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate?: MotionValue<number>;
  sheenTranslate?: MotionValue<string>;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <motion.div
      style={{
        rotateX: rotate,
        scale,
        transformOrigin: "center top",
        transformStyle: "preserve-3d",
        willChange: "transform",
        backfaceVisibility: "hidden",
      }}
      className={cn(
        "max-w-5xl mx-auto w-full border border-[#ded7c7] p-2.5 sm:p-3 bg-[#fcfaf6]/95 rounded-[24px] sm:rounded-[36px] shadow-[0_25px_60px_-15px_rgba(44,39,32,0.12),inset_0_1.5px_1px_rgba(255,255,255,0.95)] backdrop-blur-xl relative overflow-hidden",
        className
      )}
    >
      {/* Dynamic Diagonal Glass Sheen Reflection */}
      {sheenTranslate && (
        <motion.div
          style={{ x: sheenTranslate }}
          className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-[-25deg] pointer-events-none z-30"
        />
      )}

      {/* Inner Screen Bezel */}
      <div className="h-full w-full overflow-hidden rounded-[18px] sm:rounded-[28px] bg-white border border-slate-200 shadow-xs">
        {children}
      </div>
    </motion.div>
  );
};

