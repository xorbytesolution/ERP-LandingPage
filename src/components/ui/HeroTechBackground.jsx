import React, { useEffect, useRef } from "react";

export function HeroTechBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement ? canvas.parentElement.clientWidth : window.innerWidth);
    let height = (canvas.height = canvas.parentElement ? canvas.parentElement.clientHeight : window.innerHeight);

    // Particle nodes definition
    const particleCount = Math.min(Math.max(Math.floor((width * height) / 12000), 45), 90);
    const particles = [];
    const colors = ["#2563eb", "#06b6d4", "#6366f1", "#0284c7", "#3b82f6"];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        radius: Math.random() * 2.2 + 1.5,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.4,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulseVal: Math.random() * Math.PI,
      });
    }

    // Mouse tracking
    let mouse = { x: null, y: null, maxDist: 180 };

    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener("resize", handleResize);

    // Animation Loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw particle connections
      const maxConnectDist = 140;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectDist) {
            const alpha = (1 - dist / maxConnectDist) * 0.35;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(37, 99, 235, ${alpha})`;
            ctx.lineWidth = 0.9;
            ctx.stroke();
          }
        }
      }

      // Draw mouse connections & update particles
      particles.forEach((p) => {
        p.pulseVal += p.pulseSpeed;
        const currentAlpha = p.alpha + Math.sin(p.pulseVal) * 0.2;

        // Mouse Proximity Link & Gentle Repulsion
        if (mouse.x !== null && mouse.y !== null) {
          const mdx = mouse.x - p.x;
          const mdy = mouse.y - p.y;
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy);

          if (mDist < mouse.maxDist) {
            const mAlpha = (1 - mDist / mouse.maxDist) * 0.65;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(6, 182, 212, ${mAlpha})`;
            ctx.lineWidth = 1.2;
            ctx.stroke();

            // Subtle push
            const force = (1 - mDist / mouse.maxDist) * 0.35;
            p.x -= (mdx / mDist) * force;
            p.y -= (mdy / mDist) * force;
          }
        }

        // Move particle
        p.x += p.vx;
        p.y += p.vy;

        // Bounce off walls
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;

        // Draw particle glow halo
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 2.8, 0, Math.PI * 2);
        ctx.fillStyle = p.color === "#06b6d4" ? "rgba(6, 182, 212, 0.25)" : "rgba(37, 99, 235, 0.22)";
        ctx.fill();

        // Draw particle dot core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.min(1, Math.max(0.2, currentAlpha));
        ctx.fill();
        ctx.globalAlpha = 1.0;
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0 bg-[#f8fafc]">
      
      {/* 1. Luminous Cyber Grid Pattern with Radial Spotlight */}
      <div
        className="absolute inset-0 opacity-70 [mask-image:radial-gradient(ellipse_85%_75%_at_50%_35%,#000_40%,transparent_100%)]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(37, 99, 235, 0.12) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(37, 99, 235, 0.12) 1px, transparent 1px)
          `,
          backgroundSize: "36px 36px",
        }}
      />

      {/* 2. Interactive Constellation Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none z-1"
      />

      {/* 3. Concentric Orbital Resonance Waves (Center Horizon) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] h-[540px] rounded-full border border-blue-500/25 animate-spin-slow [animation-duration:80s]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[820px] h-[820px] rounded-full border border-dashed border-indigo-400/30 animate-spin-slow [animation-duration:120s] [animation-direction:reverse]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1140px] h-[1140px] rounded-full border border-cyan-400/20" />

      {/* 4. Multi-Color Radiant Aurora Glowing Nebulas */}
      {/* Top Center Core Electric Blue & Cyan Super-Beam */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[800px] sm:w-[950px] h-[420px] bg-gradient-to-tr from-blue-600/30 via-cyan-400/35 to-indigo-600/30 rounded-full blur-[105px] animate-float-gentle" />
      
      {/* Left Wing Indigo-Cyan Glow */}
      <div className="absolute top-1/4 -left-10 w-[550px] h-[380px] bg-gradient-to-r from-blue-500/25 via-cyan-400/20 to-transparent rounded-full blur-[95px] animate-float-subtle" />

      {/* Right Wing Emerald-Purple Core Glow */}
      <div className="absolute top-1/3 -right-10 w-[560px] h-[400px] bg-gradient-to-l from-indigo-500/22 via-emerald-400/18 to-blue-400/20 rounded-full blur-[95px] animate-float-gentle" />

      {/* 5. Sleek Telemetry Corner Crosshairs */}
      <div className="hidden xl:flex absolute top-10 left-10 items-center gap-2 text-blue-600/70 font-mono-tech text-xs tracking-widest uppercase">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse-live" />
        <span>+ 01.NODE // CLOUD_TERMINAL_ONLINE</span>
      </div>
      <div className="hidden xl:block absolute top-10 right-10 text-blue-600/70 font-mono-tech text-xs tracking-widest uppercase">
        <span>LATENCY: &lt;38MS // MESH_ACTIVE +</span>
      </div>
      <div className="hidden xl:block absolute bottom-8 left-10 text-slate-500/70 font-mono-tech text-xs tracking-widest uppercase">
        <span>[256_BIT_AES_ENCLAVE]</span>
      </div>
      <div className="hidden xl:block absolute bottom-8 right-10 text-slate-500/70 font-mono-tech text-xs tracking-widest uppercase">
        <span>[AUTO_GSTR_1_AUDIT_READY]</span>
      </div>

      {/* 6. Bottom Transition Gradient into Next Section */}
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-b from-transparent to-[#f7f5f0]/80 pointer-events-none" />
    </div>
  );
}
