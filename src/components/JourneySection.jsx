import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";

gsap.registerPlugin(ScrollTrigger, MotionPathPlugin);

const SCENES = [
  {
    id: "scene-bill",
    icon: "⚡",
    title: "Instant POS Billing",
    subtitle: "Scan → Bill → Print in 3 Seconds",
    desc: "Your cashier taps an item. Xorbyte ERP instantly calculates GST, auto-fills HSN codes, generates a digital receipt and prints it — all in under 3 seconds.",
    color: "#2b5cfd",
    glow: "rgba(43,92,253,0.35)",
    tag: "SCENE 01",
    bg: "from-[#dce8ff] to-[#f0f4ff]",
    dot: "#2b5cfd",
    pills: ["₹0 setup fee", "Offline mode ON", "Auto GST split"],
  },
  {
    id: "scene-inventory",
    icon: "📦",
    title: "Real-Time Stock Alerts",
    subtitle: "Low Stock → Auto Purchase Order",
    desc: "When Cadbury Silk drops below 5 units, Xorbyte ERP sends an instant alert to your WhatsApp and auto-generates a purchase order to your distributor.",
    color: "#10b981",
    glow: "rgba(16,185,129,0.35)",
    tag: "SCENE 02",
    bg: "from-[#d1fae5] to-[#f0fdf4]",
    dot: "#10b981",
    pills: ["12,000+ SKUs", "Multi-branch sync", "Auto PO trigger"],
  },
  {
    id: "scene-whatsapp",
    icon: "💬",
    title: "1-Click WhatsApp Udhaar",
    subtitle: "Send Payment Link in 1 Tap",
    desc: "Nawas owes ₹4,000? One click sends him a WhatsApp message with his bill PDF and a live UPI payment link. Money credited, ledger auto-updated.",
    color: "#f59e0b",
    glow: "rgba(245,158,11,0.35)",
    tag: "SCENE 03",
    bg: "from-[#fef3c7] to-[#fffbeb]",
    dot: "#f59e0b",
    pills: ["₹4,000 collected", "WhatsApp sent ✓", "Ledger updated"],
  },
  {
    id: "scene-gst",
    icon: "🧾",
    title: "1-Click GSTR-1 Filing",
    subtitle: "Audit-Ready Reports Instantly",
    desc: "Month-end GST filing used to take 3 days. With Xorbyte, click one button and your GSTR-1 is ready — accurate, validated, and portal-ready in seconds.",
    color: "#8b5cf6",
    glow: "rgba(139,92,246,0.35)",
    tag: "SCENE 04",
    bg: "from-[#f3e8ff] to-[#faf5ff]",
    dot: "#8b5cf6",
    pills: ["100% tax accurate", "GSTR-1 & 3B", "Zero penalty risk"],
  },
  {
    id: "scene-demo",
    icon: "🚀",
    title: "Your Store. Live in 24 Hours.",
    subtitle: "Book Your Free Demo Right Now",
    desc: "Join 500+ retailers already running on Xorbyte ERP. Get your private store portal, free onboarding, and 30-day money-back guarantee.",
    color: "#000049",
    glow: "rgba(43,92,253,0.5)",
    tag: "FINAL SCENE",
    bg: "from-[#000049] to-[#2b5cfd]",
    dot: "#ffffff",
    pills: ["Free onboarding", "30-day guarantee", "500+ stores live"],
    isCta: true,
  },
];

export default function JourneySection({ onOpenDemoModal }) {
  const containerRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const scenes = gsap.utils.toArray(".journey-scene");

      // Master scroll-driven timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${scenes.length * 900}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Animate each scene in/out
      scenes.forEach((scene, i) => {
        // Set initial state
        gsap.set(scene, { opacity: 0, y: 80, scale: 0.9, rotateX: 15 });

        if (i === 0) {
          // First scene enters immediately
          tl.to(scene, { opacity: 1, y: 0, scale: 1, rotateX: 0, duration: 1 }, 0);
        } else {
          // Fade out previous scene
          tl.to(scenes[i - 1], { opacity: 0, y: -60, scale: 0.92, duration: 0.8 }, `scene${i - 1}_exit`);
          // Enter new scene
          tl.to(scene, { opacity: 1, y: 0, scale: 1, rotateX: 0, duration: 1 }, `scene${i - 1}_exit+=0.3`);
        }

        // Label for each scene
        tl.addLabel(`scene${i}_exit`, `+=${i === 0 ? 1.5 : 2}`);
      });

      // Animate path dots along journey
      gsap.utils.toArray(".journey-dot").forEach((dot, i) => {
        tl.to(
          dot,
          {
            backgroundColor: "#ffffff",
            scale: 1.4,
            boxShadow: "0 0 20px rgba(43,92,253,0.9)",
            duration: 0.4,
          },
          i * 2
        );
      });

      // Scene-specific micro-animations
      scenes.forEach((scene, i) => {
        const pills = scene.querySelectorAll(".scene-pill");
        const icon = scene.querySelector(".scene-icon");
        const sceneStart = i === 0 ? 0 : i * 2 - 0.5;

        tl.fromTo(
          icon,
          { scale: 0.5, rotate: -20 },
          { scale: 1, rotate: 0, duration: 0.6, ease: "back.out(2)" },
          sceneStart + 0.3
        );

        pills.forEach((pill, pi) => {
          tl.fromTo(
            pill,
            { opacity: 0, x: -30 },
            { opacity: 1, x: 0, duration: 0.4 },
            sceneStart + 0.5 + pi * 0.15
          );
        });
      });

      // Final CTA scene special animation
      const ctaScene = scenes[scenes.length - 1];
      const ctaBtn = ctaScene?.querySelector(".cta-book-demo");
      if (ctaBtn) {
        tl.fromTo(
          ctaBtn,
          { scale: 0.7, opacity: 0 },
          {
            scale: 1,
            opacity: 1,
            duration: 0.8,
            ease: "elastic.out(1, 0.5)",
          },
          `scene${scenes.length - 1}_exit-=1`
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full overflow-hidden"
      style={{ height: "100vh" }}
      aria-label="Product Journey Animation"
    >
      {/* Fixed background gradient that shifts between scenes */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-blue-50/60 -z-10" />

      {/* Cinematic Title Header */}
      <div className="absolute top-8 left-0 right-0 z-30 text-center px-4">
        <div className="inline-flex items-center gap-2.5 clay-badge-sky px-5 py-2 font-black text-xs uppercase tracking-widest font-mono shadow-lg">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          CINEMATIC PRODUCT JOURNEY
          <span className="text-blue-700">· Scroll to Watch</span>
        </div>
        <h2 className="mt-3 text-2xl sm:text-4xl font-black text-slate-900 font-display">
          From First Bill to <span className="gradient-text-clay">Business Freedom</span>
        </h2>
      </div>



      {/* Scenes Container */}
      <div className="absolute inset-0 flex items-center justify-center pt-28 pb-8 px-4">
        {SCENES.map((scene, i) => (
          <div
            key={scene.id}
            className="journey-scene absolute w-full max-w-4xl mx-auto px-4"
            style={{ perspective: "1200px" }}
          >
            {/* 3D Clay Scene Card */}
            <div
              className={`clay-card overflow-hidden shadow-2xl ${
                scene.isCta ? "text-white" : ""
              }`}
              style={
                scene.isCta
                  ? {
                      background: `linear-gradient(145deg, #000049 0%, #2b5cfd 100%)`,
                      border: "1px solid rgba(88,155,255,0.3)",
                    }
                  : {}
              }
            >
              {/* Top color bar */}
              <div
                className="h-2 w-full"
                style={{
                  background: `linear-gradient(90deg, ${scene.color}, ${scene.dot})`,
                  boxShadow: `0 0 20px ${scene.glow}`,
                }}
              />

              <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left: Text Content */}
                <div className="space-y-5 text-left">
                  <div className="flex items-center gap-3">
                    <span
                      className="text-[10px] font-mono font-black px-3 py-1.5 rounded-full uppercase tracking-widest"
                      style={{
                        background: scene.isCta
                          ? "rgba(255,255,255,0.15)"
                          : `${scene.color}20`,
                        color: scene.isCta ? "#93c5fd" : scene.color,
                        border: `1px solid ${scene.isCta ? "rgba(255,255,255,0.2)" : scene.color + "40"}`,
                      }}
                    >
                      {scene.tag}
                    </span>
                  </div>

                  <h3
                    className={`text-3xl md:text-4xl font-black font-display leading-tight ${
                      scene.isCta ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {scene.title}
                  </h3>

                  <p
                    className={`text-base font-bold ${
                      scene.isCta ? "text-blue-200" : "text-slate-600"
                    }`}
                    style={{ color: scene.isCta ? "#93c5fd" : scene.color }}
                  >
                    {scene.subtitle}
                  </p>

                  <p
                    className={`text-sm leading-relaxed font-medium ${
                      scene.isCta ? "text-blue-100/90" : "text-slate-600"
                    }`}
                  >
                    {scene.desc}
                  </p>

                  {/* Pill Tags */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {scene.pills.map((pill) => (
                      <span
                        key={pill}
                        className="scene-pill text-[11px] font-mono font-black px-3.5 py-1.5 rounded-full"
                        style={{
                          background: scene.isCta
                            ? "rgba(255,255,255,0.12)"
                            : `${scene.color}15`,
                          color: scene.isCta ? "#bfdbfe" : scene.color,
                          border: `1px solid ${scene.isCta ? "rgba(255,255,255,0.25)" : scene.color + "30"}`,
                        }}
                      >
                        ✓ {pill}
                      </span>
                    ))}
                  </div>

                  {/* CTA Scene Book Demo Button */}
                  {scene.isCta && (
                    <button
                      onClick={onOpenDemoModal}
                      className="cta-book-demo mt-4 px-8 py-4 rounded-2xl font-black text-base cursor-pointer w-full sm:w-auto flex items-center justify-center gap-3 transition-all hover:scale-105 active:scale-95"
                      style={{
                        background: "linear-gradient(135deg, #ffffff 0%, #dce8ff 100%)",
                        color: "#000049",
                        boxShadow:
                          "0 0 40px rgba(88,155,255,0.6), inset 0 3px 6px rgba(255,255,255,0.9), 0 20px 40px -10px rgba(0,0,73,0.4)",
                      }}
                    >
                      <span className="text-xl">🚀</span>
                      <span>Book My Free Demo Now</span>
                      <span className="animate-bounce">→</span>
                    </button>
                  )}
                </div>

                {/* Right: Scene Visual */}
                <div className="flex items-center justify-center">
                  <div
                    className="scene-icon relative w-48 h-48 md:w-56 md:h-56 rounded-[40px] flex flex-col items-center justify-center gap-3 shadow-2xl"
                    style={{
                      background: scene.isCta
                        ? "rgba(255,255,255,0.1)"
                        : `linear-gradient(145deg, ${scene.color}18, ${scene.color}08)`,
                      border: `2px solid ${scene.isCta ? "rgba(255,255,255,0.2)" : scene.color + "30"}`,
                      boxShadow: `0 0 60px ${scene.glow}, inset 0 4px 8px rgba(255,255,255,0.6)`,
                    }}
                  >
                    <span className="text-7xl select-none">{scene.icon}</span>
                    <div
                      className="text-xs font-mono font-black uppercase tracking-widest"
                      style={{ color: scene.isCta ? "#93c5fd" : scene.color }}
                    >
                      Xorbyte ERP
                    </div>

                    {/* Orbiting dot animation */}
                    {!scene.isCta && (
                      <>
                        <div
                          className="absolute w-4 h-4 rounded-full animate-ping"
                          style={{
                            top: "12px",
                            right: "12px",
                            background: scene.color,
                            opacity: 0.6,
                          }}
                        />
                        <div
                          className="absolute w-3 h-3 rounded-full"
                          style={{
                            bottom: "16px",
                            left: "16px",
                            background: scene.color,
                            boxShadow: `0 0 12px ${scene.glow}`,
                          }}
                        />
                      </>
                    )}

                    {scene.isCta && (
                      <>
                        <div className="absolute inset-0 rounded-[40px] animate-pulse opacity-30"
                          style={{ background: "radial-gradient(circle, #589bff40, transparent 70%)" }}
                        />
                      </>
                    )}
                  </div>
                </div>
              </div>

              {/* Scene number indicator at bottom */}
              <div
                className={`px-8 py-3 border-t flex items-center justify-between text-[11px] font-mono font-bold ${
                  scene.isCta
                    ? "border-white/10 text-blue-300/70"
                    : "border-slate-100 text-slate-400"
                }`}
              >
                <span>Xorbyte ERP 3D Suite</span>
                <span style={{ color: scene.isCta ? "#93c5fd" : scene.color }}>
                  {i + 1} / {SCENES.length}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom scroll hint */}
      <div className="absolute bottom-5 left-0 right-0 flex justify-center z-30">
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-400 animate-bounce">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
          <span>Scroll to experience the journey</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
