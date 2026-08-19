import React from "react";
import {
  Globe as GlobeIcon,
  Twitter,
  Linkedin,
  Github,
  Mail,
  MessageCircle,
} from "lucide-react";
import { Dock, DockIcon } from "@/components/ui/dock";
import { LensZoomNav } from "@/components/ui/lens-zoom-nav";

export default function Footer({ onOpenDemoModal }) {
  const navItems = [
    { label: "Features", href: "#features" },
    { label: "Live Simulator", href: "#demo-interactive" },
    { label: "Why Switch", href: "#comparison" },
    { label: "ROI Calculator", href: "#calculator" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
    { label: "Book Free Demo", onClick: onOpenDemoModal, highlight: true },
  ];
  return (
    <footer className="w-full bg-black text-zinc-400 text-xs relative overflow-hidden pt-20 pb-8 border-t border-zinc-900">
      
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[300px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16 relative z-10 overflow-hidden">
        
        {/* Minimalist Centered Brand Header */}
        <div className="text-center space-y-6 max-w-4xl mx-auto">
          
          <div className="space-y-3 max-w-xl mx-auto">
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-tight">
              Xorbyte ERP
            </h2>
            <p className="text-zinc-400 font-sans text-xs sm:text-sm leading-relaxed font-medium">
              AI-powered offline-first ERP operating system for modern retail & wholesale enterprises.
              Built for lightning-speed billing and audit-grade tax filing.
            </p>
          </div>

          {/* Interactive macOS Proximity Magnification Dock */}
          <div className="pt-2 flex items-center justify-center">
            <Dock className="bg-zinc-900/90 border-zinc-800/90 shadow-2xl">
              <DockIcon
                label="Twitter / X"
                href="https://twitter.com"
                className="text-zinc-400 hover:text-white hover:bg-zinc-700/80 hover:border-slate-500"
              >
                <Twitter className="w-4 h-4 sm:w-5 sm:h-5" />
              </DockIcon>
              <DockIcon
                label="LinkedIn"
                href="https://linkedin.com"
                className="text-zinc-400 hover:text-blue-400 hover:bg-blue-950/60 hover:border-blue-700/60"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </DockIcon>
              <DockIcon
                label="GitHub"
                href="https://github.com"
                className="text-zinc-400 hover:text-white hover:bg-zinc-700/80 hover:border-slate-500"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              </DockIcon>
              <DockIcon
                label="Email Us"
                href="mailto:contact@xorbyte.com"
                className="text-zinc-400 hover:text-amber-400 hover:bg-amber-950/60 hover:border-amber-700/60"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </DockIcon>
              <DockIcon
                label="WhatsApp Direct"
                href="https://wa.me/919999999999"
                className="text-zinc-400 hover:text-emerald-400 hover:bg-emerald-950/60 hover:border-emerald-700/60"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
              </DockIcon>
            </Dock>
          </div>

          {/* Dynamic Lens Zoom / Optical Magnification Navigation Menu */}
          <LensZoomNav items={navItems} className="pt-2" />
        </div>

        {/* Massive Luminous Brand Watermark Typography (Guaranteed Zero Overflow) */}
        <div className="relative w-full max-w-full flex items-center justify-center select-none pointer-events-none -my-6 sm:-my-10 overflow-hidden text-center">
          <span className="font-display font-black text-[11.5vw] tracking-tight leading-none whitespace-nowrap bg-gradient-to-b from-white/35 via-zinc-400/20 to-transparent bg-clip-text text-transparent opacity-95 drop-shadow-[0_10px_35px_rgba(255,255,255,0.08)] block w-full text-center">
            XORBYTE
          </span>
        </div>

        {/* Clean Legal & Copyright Bottom Bar */}
        <div className="pt-6 border-t border-zinc-900/90 flex flex-col sm:flex-row items-center justify-between gap-4 text-zinc-500 font-sans text-xs">
          <div>
            © {new Date().getFullYear()} Xorbyte Solutions Pvt. Ltd. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" className="hover:text-zinc-300 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-zinc-300 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-zinc-300 transition-colors">
              GST Compliance
            </a>
            <a href="#" className="hover:text-zinc-300 transition-colors">
              Security
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
}
