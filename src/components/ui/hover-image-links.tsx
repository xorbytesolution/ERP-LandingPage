import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export interface HoverLinkItem {
  id?: string;
  heading: string;
  subheading: string;
  imgSrc: string;
  href?: string;
  onClick?: () => void;
}

interface HoverImageLinksProps {
  links?: HoverLinkItem[];
  className?: string;
}

const DEFAULT_LINKS: HoverLinkItem[] = [
  {
    heading: "About",
    subheading: "Learn what we do here",
    imgSrc: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=600&q=80",
    href: "#",
  },
  {
    heading: "Clients",
    subheading: "We work with great people",
    imgSrc: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80",
    href: "#",
  },
  {
    heading: "Portfolio",
    subheading: "Our work speaks for itself",
    imgSrc: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&q=80",
    href: "#",
  },
  {
    heading: "Careers",
    subheading: "We want cool people",
    imgSrc: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=600&q=80",
    href: "#",
  },
];

export function HoverImageLinks({
  links = DEFAULT_LINKS,
  className,
}: HoverImageLinksProps) {
  return (
    <div className={cn("w-full bg-slate-950 px-4 py-12 text-white sm:px-8 md:px-12", className)}>
      <div className="mx-auto max-w-5xl divide-y divide-slate-800">
        {links.map((link, idx) => (
          <LinkRow key={link.id || idx} {...link} />
        ))}
      </div>
    </div>
  );
}

function LinkRow({
  heading,
  subheading,
  imgSrc,
  href = "#",
  onClick,
}: HoverLinkItem) {
  const ref = useRef<HTMLAnchorElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 220, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 220, damping: 20 });

  const rotate = useTransform(mouseXSpring, [-150, 150], [-12, 12]);
  const rotateSpring = useSpring(rotate, { stiffness: 200, damping: 18 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = (mouseX / width - 0.5) * 300;
    const yPct = (mouseY / height - 0.5) * 100;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.a
      href={href}
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      onClick={onClick}
      className="group relative flex items-center justify-between py-6 sm:py-9 transition-colors md:py-12 cursor-pointer select-none"
    >
      <div className="space-y-1 sm:space-y-2">
        <motion.span
          className="block text-3xl sm:text-5xl md:text-6xl font-display font-black text-slate-400 group-hover:text-white transition-colors duration-300"
        >
          {heading}
        </motion.span>
        <span className="block text-xs sm:text-sm font-sans font-medium text-slate-500 group-hover:text-slate-300 transition-colors duration-300">
          {subheading}
        </span>
      </div>

      {/* Floating Cursor-Tracking Image */}
      <motion.div
        style={{
          top: "50%",
          left: "50%",
          translateX: mouseXSpring,
          translateY: mouseYSpring,
          rotate: rotateSpring,
        }}
        initial={{ scale: 0, opacity: 0 }}
        animate={{
          scale: isHovered ? 1 : 0,
          opacity: isHovered ? 1 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 22 }}
        className="pointer-events-none absolute z-30 h-44 w-60 sm:h-56 sm:w-80 rounded-2xl overflow-hidden border-2 border-slate-700 bg-slate-900 shadow-2xl"
      >
        <img
          src={imgSrc}
          alt={heading}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
      </motion.div>

      {/* Trailing Action Arrow */}
      <motion.div
        animate={{
          x: isHovered ? 6 : 0,
          opacity: isHovered ? 1 : 0.6,
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        className="text-slate-400 group-hover:text-white"
      >
        <ArrowRight className="w-6 h-6 sm:w-8 sm:h-8" />
      </motion.div>
    </motion.a>
  );
}
