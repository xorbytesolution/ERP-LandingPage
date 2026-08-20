import React, { useState, useEffect } from "react";
import Lenis from "lenis";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import { HeroScrollDemo } from "./components/ui/HeroScrollDemo";
import FeatureGrid from "./components/FeatureGrid";
import ComparisonSection from "./components/ComparisonSection";
import PricingSection from "./components/PricingSection";
import FaqSection from "./components/FaqSection";
import CtaSection from "./components/CtaSection";
import Footer from "./components/Footer";
import SimulatorPage from "./components/SimulatorPage";
import DemoRequestModal from "./components/DemoRequestModal";

export default function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);
  const [currentView, setCurrentView] = useState("home"); // home | simulator

  // Sync with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#simulator") {
        setCurrentView("simulator");
      } else if (currentView === "simulator" && !window.location.hash.startsWith("#simulator")) {
        setCurrentView("home");
      }
    };

    if (window.location.hash === "#simulator") {
      setCurrentView("simulator");
    }

    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, [currentView]);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.25,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.05,
      touchMultiplier: 1.6,
      infinite: false,
    });

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => lenis.destroy();
  }, [currentView]);

  const navigateToSimulator = () => {
    window.location.hash = "simulator";
    setCurrentView("simulator");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navigateToHome = () => {
    window.location.hash = "";
    setCurrentView("home");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div id="top" className="relative min-h-screen w-full max-w-[100vw] overflow-x-hidden font-sans selection:bg-[#2b5cfd] selection:text-white bg-[#f7f5f0] text-slate-900">
      
      {/* Brand Preloader */}
      <Preloader />

      {/* 1. Global Floating Parchment Navbar */}
      <Navbar
        currentView={currentView}
        onOpenDemoModal={() => setIsDemoModalOpen(true)}
        onOpenSimulator={navigateToSimulator}
        onBackToHome={navigateToHome}
      />

      {/* VIEW 1: DEDICATED SIMULATOR & CALCULATOR PAGE */}
      {currentView === "simulator" ? (
        <SimulatorPage
          onBackToHome={navigateToHome}
          onOpenDemoModal={() => setIsDemoModalOpen(true)}
        />
      ) : (
        /* VIEW 2: HIGH-CONVERTING FAST LANDING PAGE */
        <main>
          {/* 2. Hero Section (Clean crisp hero without paper background) */}
          <HeroSection
            onOpenDemoModal={() => setIsDemoModalOpen(true)}
            onOpenSimulator={navigateToSimulator}
          />

          {/* Wrapper for all subsequent sections with clean modern background */}
          <div className="relative">
            <div className="relative z-10">
              {/* 3. Authentic ERP 9-Point Radial Arc Showcase */}
              <FeatureGrid onOpenDemoModal={() => setIsDemoModalOpen(true)} />

              {/* 5. Why Switch: Xorbyte vs Legacy Software (Tally, Vyapar, Busy) */}
              <ComparisonSection onOpenDemoModal={() => setIsDemoModalOpen(true)} />

              {/* 6. Transparent Plans & Pricing */}
              <PricingSection onOpenDemoModal={() => setIsDemoModalOpen(true)} />

              {/* 7. 100% Full-Width FAQ Marquee with Hover Pause & Alternating Flow */}
              <FaqSection />

              {/* 8. Standalone Liquid Glass CTA Callout Section */}
              <CtaSection
                onOpenDemoModal={() => setIsDemoModalOpen(true)}
              />

              {/* Global Brand Footer */}
              <Footer
                onOpenDemoModal={() => setIsDemoModalOpen(true)}
              />
            </div>
          </div>
        </main>
      )}

      {/* Modals */}
      <DemoRequestModal
        isOpen={isDemoModalOpen}
        onClose={() => setIsDemoModalOpen(false)}
      />
    </div>
  );
}
