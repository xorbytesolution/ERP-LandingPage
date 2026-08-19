import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Globe } from "@/components/ui/globe";

export default function Preloader({ onLoaded }) {
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // Display duration for preloader before sliding up (2.2s)
    const timer = setTimeout(() => {
      setIsDone(true);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onLoaded}>
      {!isDone && (
        <motion.div
          key="clean-paper-preloader"
          initial={{ y: 0 }}
          animate={{ y: 0 }}
          exit={{
            y: "-100%",
            transition: {
              duration: 0.85,
              ease: [0.76, 0, 0.24, 1], // Smooth, luxury curtain slide up
            },
          }}
          className="fixed inset-0 z-[999999] bg-[#f7f5f0] text-slate-900 flex flex-col items-center justify-center select-none overflow-hidden p-6 shadow-2xl pointer-events-auto"
        >
          {/* Authentic Clean Physical Crumpled Paper Texture */}
          <div
            className="absolute inset-0 pointer-events-none opacity-40 mix-blend-multiply bg-repeat"
            style={{
              backgroundImage: "url('/crumpled-paper.jpg')",
              backgroundSize: "800px 800px",
            }}
          />

          {/* Top Receipt Perforated Tear Line */}
          <div className="absolute top-7 left-1/2 -translate-x-1/2 w-64 border-b-2 border-dashed border-[#d5cdbe] flex items-center justify-center pointer-events-none select-none">
            <span className="bg-[#f7f5f0] px-3 -mb-2.5 text-[9px] font-mono-tech uppercase tracking-widest text-[#9d9380] font-semibold pointer-events-none select-none cursor-default">
              OLD PAPER BILLING ➔ CLOUD ERP
            </span>
          </div>

          {/* Center Column: Globe + Xorbyte Stamp Card */}
          <div className="relative z-10 flex flex-col items-center justify-center space-y-6 max-w-sm w-full">
            {/* Top: Compact 3D Globe */}
            <div className="relative flex w-60 h-60 sm:w-72 sm:h-72 items-center justify-center">
              <Globe className="w-full h-full max-w-[280px] sm:max-w-[320px] aspect-square relative inset-auto" />
            </div>

            {/* Below Globe: Clean Floating X Logo (No White Box Background) */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
              className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center relative"
            >
              <img
                src="/Favicon.svg"
                alt="Xorbyte Logo"
                className="w-full h-full object-contain drop-shadow-md"
              />
            </motion.div>
          </div>

          {/* Bottom Edge Paper Shadow / Tear Line */}
          <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-t from-black/10 to-transparent pointer-events-none border-b border-[#d5cdbe]" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
