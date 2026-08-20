import React, { useState, useEffect } from "react";
import { ArrowRight, Menu, X, Globe, Zap } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function Navbar({ onOpenTenantModal, onOpenDemoModal, onOpenSimulator, onBackToHome, currentView = "home" }) {
  const [scrolled, setScrolled] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState(null);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(currentScrollY > 20);

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setScrollDirection("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDirection("up");
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Features", href: "#features", action: "scroll" },
    { name: "Live Simulator", href: "#simulator", action: "simulator", highlight: true },
    { name: "Why Switch", href: "#comparison", action: "scroll" },
    { name: "Pricing", href: "#pricing", action: "scroll" },
    { name: "FAQ", href: "#faq", action: "scroll" },
  ];

  const handleLinkClick = (e, link) => {
    if (link.action === "simulator") {
      e.preventDefault();
      if (onOpenSimulator) onOpenSimulator();
    } else if (link.action === "scroll") {
      if (currentView === "simulator") {
        // If we are currently on simulator page and click a section link, return home first
        if (onBackToHome) onBackToHome();
      }
      const targetId = link.href.replace("#", "");
      const elem = document.getElementById(targetId);
      if (elem) {
        e.preventDefault();
        elem.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-3 sm:px-6 pt-2.5 sm:pt-4 pointer-events-none ${
      scrollDirection === "down" && scrolled ? "-translate-y-24 opacity-0 sm:translate-y-0 sm:opacity-100" : "translate-y-0 opacity-100"
    }`}>
      <div
        className={`max-w-6xl mx-auto rounded-full transition-all duration-300 pointer-events-auto flex items-center justify-between px-3.5 sm:px-6 py-2 sm:py-2.5 relative overflow-hidden bg-white/50 backdrop-blur-3xl backdrop-saturate-200 border border-white/80 shadow-[0_20px_50px_-10px_rgba(15,23,42,0.12),inset_0_1.5px_2px_rgba(255,255,255,1),inset_0_-1px_2px_rgba(0,0,0,0.04)] ring-1 ring-black/5`}
      >
        {/* iOS Liquid Glass Specular Surface Reflection */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/10 to-transparent pointer-events-none rounded-full" />

        {/* 1. Brand Logo */}
        <a
          href="#top"
          onClick={(e) => {
            if (currentView === "simulator" && onBackToHome) {
              e.preventDefault();
              onBackToHome();
            }
          }}
          className="flex items-center gap-2 group shrink-0 relative z-10 cursor-pointer"
        >
          <div className="flex items-center py-1 px-1.5 rounded-xl group-hover:opacity-90 transition-opacity">
            <img
              src="/xorbyte.svg"
              alt="Xorbyte ERP Logo"
              className="h-6 sm:h-7 w-auto"
            />
          </div>
        </a>

        {/* 2. Center Nav Links with Magnetic Gliding Hover Pill */}
        <nav
          onMouseLeave={() => setHoveredIdx(null)}
          className="hidden md:flex items-center gap-1 relative z-10 font-sans font-semibold text-xs sm:text-sm text-slate-700"
        >
          {navLinks.map((link, idx) => {
            const isSimulatorActive = currentView === "simulator" && link.action === "simulator";
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link)}
                onMouseEnter={() => setHoveredIdx(idx)}
                className={`relative px-3.5 py-1.5 rounded-full transition-colors duration-200 hover:text-slate-900 flex items-center gap-1.5 cursor-pointer ${
                  isSimulatorActive ? "text-blue-700 font-bold" : ""
                }`}
              >
                {hoveredIdx === idx && (
                  <motion.span
                    layoutId="navbar-hover-pill"
                    transition={{ type: "spring", stiffness: 450, damping: 28 }}
                    className="absolute inset-0 bg-[#efe9dc] border border-[#ded5c4] rounded-full -z-10 shadow-2xs"
                  />
                )}
                <span>{link.name}</span>
              </a>
            );
          })}
        </nav>

        {/* 3. Right Action Area */}
        <div className="hidden md:flex items-center gap-2.5 font-sans shrink-0 relative z-10">
          <button
            onClick={onOpenDemoModal}
            className="px-5 py-2.5 rounded-full btn-primary text-xs font-bold flex items-center gap-1.5 cursor-pointer group shadow-sm shadow-blue-500/20 hover:shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <span>Book Free Demo</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Hamburger Icon */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-1.5 text-slate-700 hover:text-slate-900 rounded-full hover:bg-[#efe9dc] cursor-pointer transition-colors relative z-10"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer (Parchment Paper Layer) */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 p-4 rounded-2xl bg-[#fbf9f4] border border-[#ded7c7] shadow-xl text-slate-800 space-y-3 font-sans relative overflow-hidden pointer-events-auto"
          >
            {/* Fine Paper Texture Overlay */}
            <div
              className="absolute inset-0 pointer-events-none opacity-30 mix-blend-multiply bg-repeat rounded-2xl"
              style={{
                backgroundImage: "url('/crumpled-paper.jpg')",
                backgroundSize: "320px 320px",
              }}
            />

            <div className="flex flex-col space-y-1 text-sm font-semibold relative z-10">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    handleLinkClick(e, link);
                  }}
                  className="px-4 py-2.5 rounded-xl hover:bg-[#efe9dc] transition-colors flex items-center justify-between cursor-pointer active:bg-[#e8dfce]"
                >
                  <span>{link.name}</span>
                  {link.highlight && (
                    <span className="text-[10px] font-mono font-bold bg-blue-100 text-blue-700 px-2 py-0.5 rounded">
                      Live
                    </span>
                  )}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-[#e2dcd0] flex flex-col gap-2.5 relative z-10">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDemoModal();
                }}
                className="w-full py-3 rounded-xl btn-primary text-xs font-bold flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-blue-500/20 active:scale-[0.98] transition-transform"
              >
                <span>Book Free Demo</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
