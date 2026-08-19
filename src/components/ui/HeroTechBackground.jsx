import React, { useEffect, useRef } from "react";

export function HeroTechBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = canvas.parentElement.clientWidth);
    let height = (canvas.height = canvas.parentElement.clientHeight);

    // Particle nodes definition
    const particleCount = Math.min(Math.floor((width * height) / 14000), 75);
    const particles = [];
    const colors = ["#2563eb", "#06b6d4", "#6366f1", "#0284c7", "#3b82f6"];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        radius: Math.random() * 2 + 1.2,
        color: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.5 + 0.3,
        pulseSpeed: Math.random() * 0.02 + 0.01,
        pulseVal: Math.random() * Math.PI,
      });
    }

    // Mouse tracking
    let mouse = { x: null, y: null, maxDist: 170 };

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
      const maxConnectDist = 130;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < maxConnectDist) {
            const alpha = (1 - dist / maxConnectDist) * 0.18;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(37, 99, 235, ${alpha})`;
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }
      }

      // Draw mouse connections & update particles
      particles.forEach((p) => {
        p.pulseVal += p.pulseSpeed;
        const currentAlpha = p.alpha + Math.sin(p.pulseVal) * 0.15;

        // Mouse Proximity Link & Gentle Repulsion
        if (mouse.x !== null && mouse.y !== null) {
          const mdx = mouse.x - p.x;
          const mdy = mouse.y - p.y;
          const mDist = Math.sqrt(mdx * mdx + mdy * mdy);

          if (mDist < mouse.maxDist) {
            const mAlpha = (1 - mDist / mouse.maxDist) * 0.45;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(6, 182, 212, ${mAlpha})`;
            ctx.lineWidth = 1;
            ctx.stroke();

            // Subtle push
            const force = (1 - mDist / mouse.maxDist) * 0.3;
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
        ctx.arc(p.x, p.y, p.radius * 2.2, 0, Math.PI * 2);
        ctx.fillStyle = p.color === "#06b6d4" ? "rgba(6, 182, 212, 0.12)" : "rgba(37, 99, 235, 0.12)";
        ctx.fill();

        // Draw particle dot core
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0.1, currentAlpha);
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
    <div className="absolute inset-0 pointer-events-none overflow-hidden -z-10 bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#f8fafc]">
      
      {/* 1. Luminous Cyber Grid Pattern with Radial Vignette */}
      <div
        className="absolute inset-0 opacity-55 [mask-image:radial-gradient(ellipse_80%_65%_at_50%_35%,#000_30%,transparent_100%)]"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(37, 99, 235, 0.09) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(37, 99, 235, 0.09) 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* 2. Interactive Constellation Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      {/* 3. Concentric Orbital Resonance Waves (Center Horizon) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[520px] rounded-full border border-blue-500/15 animate-spin-slow [animation-duration:80s]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[780px] h-[780px] rounded-full border border-dashed border-indigo-400/20 animate-spin-slow [animation-duration:120s] [animation-direction:reverse]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1100px] h-[1100px] rounded-full border border-cyan-400/10" />

      {/* 4. Multi-Color Radiant Aurora Glowing Nebulas */}
      {/* Top Center Core Electric Blue & Cyan Super-Beam */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[750px] sm:w-[900px] h-[380px] bg-gradient-to-tr from-blue-600/20 via-cyan-400/25 to-indigo-500/20 rounded-full blur-[110px] animate-float-gentle" />
      
      {/* Left Wing Indigo-Cyan Glow */}
      <div className="absolute top-1/4 -left-20 w-[500px] h-[350px] bg-gradient-to-r from-blue-500/18 via-cyan-400/15 to-transparent rounded-full blur-[100px] animate-float-subtle" />

      {/* Right Wing Emerald-Purple Core Glow */}
      <div className="absolute top-1/3 -right-20 w-[520px] h-[360px] bg-gradient-to-l from-indigo-500/15 via-emerald-400/12 to-blue-400/15 rounded-full blur-[100px] animate-float-gentle" />

      {/* 5. Sleek Telemetry Corner Crosshairs */}
      <div className="hidden xl:flex absolute top-10 left-10 items-center gap-2 text-blue-600/60 font-mono-tech text-xs tracking-widest uppercase">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
        <span>+ 01.NODE // CLOUD_TERMINAL_ONLINE</span>
      </div>
      <div className="hidden xl:block absolute top-10 right-10 text-blue-600/60 font-mono-tech text-xs tracking-widest uppercase">
        <span>LATENCY: &lt;38MS // MESH_ACTIVE +</span>
      </div>
      <div className="hidden xl:block absolute bottom-8 left-10 text-slate-400/60 font-mono-tech text-xs tracking-widest uppercase">
        <span>[256_BIT_AES_ENCLAVE]</span>
      </div>
      <div className="hidden xl:block absolute bottom-8 right-10 text-slate-400/60 font-mono-tech text-xs tracking-widest uppercase">
        <span>[AUTO_GSTR_1_AUDIT_READY]</span>
      </div>

      {/* 6. Bottom Transition Gradient into Next Section */}
      <div className="absolute bottom-0 inset-x-0 h-16 bg-gradient-to-b from-transparent to-[#f7f5f0]/80 pointer-events-none" />
    </div>
  );
}
