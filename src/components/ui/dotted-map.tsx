import React, { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { Zap, Wifi, ShieldCheck } from "lucide-react";

interface StoreHub {
  id: string;
  city: string;
  state: string;
  counters: number;
  revenue: string;
  x: number; // percentage 0-100
  y: number; // percentage 0-100
  type: "primary" | "regional";
}

const retailHubs: StoreHub[] = [
  { id: "delhi", city: "New Delhi", state: "NCR & North", counters: 340, revenue: "₹1.4Cr/mo", x: 42, y: 24, type: "regional" },
  { id: "jaipur", city: "Jaipur", state: "Rajasthan", counters: 190, revenue: "₹68L/mo", x: 34, y: 36, type: "regional" },
  { id: "ahmedabad", city: "Ahmedabad & Surat", state: "Gujarat Hub", counters: 280, revenue: "₹1.1Cr/mo", x: 28, y: 48, type: "regional" },
  { id: "mumbai", city: "Mumbai & Pune", state: "Central Cloud HQ", counters: 460, revenue: "₹2.2Cr/mo", x: 32, y: 64, type: "primary" },
  { id: "hyderabad", city: "Hyderabad", state: "Telangana & AP", counters: 210, revenue: "₹82L/mo", x: 50, y: 62, type: "regional" },
  { id: "bengaluru", city: "Bengaluru", state: "Karnataka Tech Core", counters: 390, revenue: "₹1.7Cr/mo", x: 44, y: 80, type: "regional" },
  { id: "chennai", city: "Chennai", state: "Tamil Nadu", counters: 180, revenue: "₹74L/mo", x: 54, y: 84, type: "regional" },
  { id: "kolkata", city: "Kolkata", state: "East & Bengal", counters: 160, revenue: "₹58L/mo", x: 76, y: 44, type: "regional" },
];

// Curved network connections from Mumbai (Primary HQ)
const connections = [
  { from: { x: 32, y: 64 }, to: { x: 42, y: 24 } }, // Mumbai -> Delhi
  { from: { x: 32, y: 64 }, to: { x: 28, y: 48 } }, // Mumbai -> Ahmedabad
  { from: { x: 32, y: 64 }, to: { x: 44, y: 80 } }, // Mumbai -> Bengaluru
  { from: { x: 32, y: 64 }, to: { x: 50, y: 62 } }, // Mumbai -> Hyderabad
  { from: { x: 42, y: 24 }, to: { x: 76, y: 44 } }, // Delhi -> Kolkata
  { from: { x: 44, y: 80 }, to: { x: 54, y: 84 } }, // Bengaluru -> Chennai
  { from: { x: 42, y: 24 }, to: { x: 34, y: 36 } }, // Delhi -> Jaipur
];

export function DottedMap({ className }: { className?: string }) {
  const [activeHub, setActiveHub] = useState<StoreHub>(retailHubs[3]); // Default Mumbai

  return (
    <div
      className={cn(
        "relative w-full rounded-3xl bg-slate-950 border border-slate-800 p-6 sm:p-8 overflow-hidden text-white shadow-2xl transition-all duration-500",
        className
      )}
    >
      {/* Ambient glowing atmospheric lighting */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[350px] bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[300px] bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header Info Bar */}
      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-slate-800/90 relative z-10">
        <div className="space-y-1">
          <div className="text-[10px] sm:text-xs font-mono-tech uppercase font-bold text-cyan-400 tracking-wider flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-live" />
            <span>LIVE MULTI-TENANT ENTERPRISE TOPOLOGY · INDIA</span>
          </div>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-display font-black text-white tracking-tight">
            1,450+ Cloud Retail Counters Synchronized
          </h3>
        </div>

        {/* Selected Hub Live Detailed Capsule */}
        {activeHub && (
          <div className="flex items-center gap-3 bg-slate-900/90 border border-cyan-500/30 px-4 py-2 rounded-2xl text-xs font-mono-tech shadow-lg shadow-cyan-500/5">
            <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
            <div>
              <div className="text-white font-bold text-xs sm:text-sm">
                {activeHub.city} <span className="text-slate-400 text-[10px]">({activeHub.state})</span>
              </div>
              <div className="text-cyan-400 text-[11px] font-bold">
                {activeHub.counters} POS Counters Online · {activeHub.revenue}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Dotted Map Canvas Area */}
      <div className="relative w-full h-80 sm:h-[420px] my-6 flex items-center justify-center overflow-hidden rounded-2xl bg-slate-950/60 border border-slate-900">
        
        {/* Dot Matrix Pattern */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: "radial-gradient(rgba(148, 163, 184, 0.5) 1.5px, transparent 1.5px)",
            backgroundSize: "20px 20px",
          }}
        />

        {/* Glowing Radar Sweep Line */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent h-1/2 w-full animate-pulse-gentle pointer-events-none" />

        {/* SVG Network Curved Bezier Connections */}
        <svg
          className="absolute inset-0 w-full h-full pointer-events-none"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="network-line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.2" />
            </linearGradient>
          </defs>

          {/* India Boundary Abstract Contour */}
          <path
            d="M 38 12 C 48 10, 54 18, 52 24 C 58 26, 68 32, 78 40 C 82 46, 75 52, 68 54 C 62 60, 56 74, 52 88 C 48 92, 44 88, 40 76 C 32 68, 26 56, 26 44 C 26 34, 32 20, 38 12 Z"
            fill="none"
            stroke="rgba(59, 130, 246, 0.25)"
            strokeWidth="0.8"
            strokeDasharray="2 3"
          />

          {/* Curved Data Sync Arcs */}
          {connections.map((conn, idx) => {
            const midX = (conn.from.x + conn.to.x) / 2 - (conn.from.y - conn.to.y) * 0.15;
            const midY = (conn.from.y + conn.to.y) / 2;
            const pathD = `M ${conn.from.x} ${conn.from.y} Q ${midX} ${midY} ${conn.to.x} ${conn.to.y}`;
            return (
              <g key={idx}>
                <path
                  d={pathD}
                  fill="none"
                  stroke="url(#network-line-grad)"
                  strokeWidth="0.9"
                  strokeDasharray="3 3"
                  className="opacity-75"
                />
              </g>
            );
          })}
        </svg>

        {/* Pulsing City Beacon Pins */}
        {retailHubs.map((hub) => {
          const isSelected = activeHub?.id === hub.id;
          const isHQ = hub.type === "primary";

          return (
            <div
              key={hub.id}
              style={{ left: `${hub.x}%`, top: `${hub.y}%` }}
              className="absolute -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-20"
              onMouseEnter={() => setActiveHub(hub)}
              onClick={() => setActiveHub(hub)}
            >
              {/* Outer Ripple */}
              <div
                className={cn(
                  "absolute -inset-3 rounded-full transition-all duration-300 pointer-events-none",
                  isSelected
                    ? "bg-cyan-500/40 animate-ping"
                    : isHQ
                    ? "bg-blue-500/30 animate-pulse-gentle"
                    : "group-hover:bg-blue-500/20"
                )}
              />

              {/* Beacon Core */}
              <div
                className={cn(
                  "relative rounded-full border-2 transition-transform duration-200 flex items-center justify-center",
                  isHQ ? "w-5 h-5 sm:w-6 sm:h-6" : "w-4 h-4 sm:w-4.5 sm:h-4.5",
                  isSelected
                    ? "bg-cyan-400 border-white scale-125 shadow-[0_0_20px_rgba(6,182,212,1)]"
                    : isHQ
                    ? "bg-blue-500 border-white shadow-[0_0_12px_rgba(59,130,246,0.8)]"
                    : "bg-blue-600 border-slate-900 group-hover:scale-115"
                )}
              >
                <div className="w-1.5 h-1.5 bg-white rounded-full" />
              </div>

              {/* City Name Label Pill */}
              <div
                className={cn(
                  "absolute left-6 top-1/2 -translate-y-1/2 whitespace-nowrap text-[11px] sm:text-xs font-mono-tech px-2.5 py-1 rounded-lg transition-all pointer-events-none",
                  isSelected
                    ? "bg-white text-slate-950 font-bold opacity-100 shadow-xl scale-105 border border-cyan-400"
                    : "bg-slate-900/90 text-slate-300 opacity-80 group-hover:opacity-100 group-hover:scale-105 border border-slate-800"
                )}
              >
                <span>{hub.city}</span>
                {isSelected && <span className="ml-1.5 text-cyan-700 font-bold font-mono">({hub.counters})</span>}
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Real-Time Telemetry Bar */}
      <div className="pt-4 border-t border-slate-800/90 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs font-mono-tech text-slate-400">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-amber-400 shrink-0" />
          <span>Sync Latency: <strong className="text-emerald-400">&lt; 38ms</strong> (Sub-second SSE)</span>
        </div>
        <div className="flex items-center gap-2">
          <Wifi className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>Cluster Availability: <strong className="text-white">99.99% Cloud SLA</strong></span>
        </div>
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-purple-400 shrink-0" />
          <span>Redundant Zones: <strong className="text-blue-400">ap-south-1 / ap-south-2</strong></span>
        </div>
      </div>
    </div>
  );
}
