import React, { useState } from "react";
import { X, Sparkles, CheckCircle2, ArrowRight, Phone, Building, User, MapPin, ShieldCheck, Clock, Zap, Store } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Highlighter } from "@/components/ui/highlighter";
import confetti from "canvas-confetti";

const businessTypes = [
  { id: "supermarket", label: "Supermarket / Mart", icon: "🛒", tag: "Fast Billing" },
  { id: "retail", label: "Retail & General Store", icon: "🏬", tag: "POS Ready" },
  { id: "wholesale", label: "Wholesale & FMCG", icon: "📦", tag: "Udhaar Ledger" },
  { id: "apparel", label: "Garment & Textile", icon: "👕", tag: "Barcode/Size" },
  { id: "pharmacy", label: "Pharmacy & Medical", icon: "💊", tag: "Batch / Exp" },
  { id: "chain", label: "Multi-Branch Chain", icon: "⚡", tag: "Cloud Sync" },
];

export default function DemoRequestModal({ isOpen, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    storeName: "",
    phone: "",
    city: "",
    storeType: "Supermarket / Mart",
  });

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    
    // Confetti burst
    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.55 },
      colors: ["#2563eb", "#06b6d4", "#10b981", "#6366f1"],
    });

    console.log("New ERP Lead Submitted:", formData);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-xl animate-in fade-in duration-300">
      <motion.div
        initial={{ opacity: 0, scale: 0.93, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.93, y: 15 }}
        transition={{ type: "spring", stiffness: 350, damping: 28 }}
        className="relative bg-white border-2 border-slate-200/90 rounded-[32px] sm:rounded-[40px] p-6 sm:p-9 max-w-xl w-full shadow-[0_30px_90px_-15px_rgba(37,99,235,0.35)] text-left overflow-hidden space-y-6"
      >
        {/* Ambient Radial Mesh Background */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={() => {
            setSubmitted(false);
            onClose();
          }}
          className="absolute top-6 right-6 text-slate-400 hover:text-slate-800 p-2.5 rounded-full bg-slate-100/80 hover:bg-slate-200 transition-all cursor-pointer z-20 hover:rotate-90 duration-200"
        >
          <X className="w-4 h-4" />
        </button>

        {!submitted ? (
          <>
            {/* Header */}
            <div className="space-y-2 relative z-10">

              <h3 className="text-2xl sm:text-3xl font-display font-black text-slate-900 tracking-tight leading-[1.2]">
                Book Your 1-on-1{" "}
                <Highlighter action="highlight" color="#dbeafe" className="text-blue-900">
                  ERP Live Demo
                </Highlighter>
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 font-sans font-medium leading-relaxed">
                Experience sub-300ms offline POS billing, automatic WhatsApp Udhaar ledger, and audit-grade GST filing tailored for your store.
              </p>
            </div>

            {/* Modern Interactive Form */}
            <form onSubmit={handleSubmit} className="space-y-4 relative z-10 font-sans">
              <div className="space-y-3.5">
                
                {/* Full Name & WhatsApp Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-mono-tech font-bold uppercase tracking-wider text-slate-700">
                      Your Full Name *
                    </label>
                    <div className="relative flex items-center">
                      <User className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                      <input
                        type="text"
                        required
                        placeholder="e.g. Mohammad Mastur"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-slate-50/90 hover:bg-slate-50 focus:bg-white border border-slate-200 rounded-2xl text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/25 focus:border-blue-600 transition-all placeholder:text-slate-400 shadow-xs"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-mono-tech font-bold uppercase tracking-wider text-slate-700">
                      WhatsApp Phone *
                    </label>
                    <div className="relative flex items-center">
                      <Phone className="w-4 h-4 text-emerald-500 absolute left-3.5 pointer-events-none" />
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-slate-50/90 hover:bg-slate-50 focus:bg-white border border-slate-200 rounded-2xl text-xs sm:text-sm font-mono-tech font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/25 focus:border-blue-600 transition-all placeholder:text-slate-400 shadow-xs"
                      />
                    </div>
                  </div>
                </div>

                {/* Store Name & City */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-mono-tech font-bold uppercase tracking-wider text-slate-700">
                      Store / Business Name
                    </label>
                    <div className="relative flex items-center">
                      <Building className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                      <input
                        type="text"
                        placeholder="e.g. Nawas Hypermarket"
                        value={formData.storeName}
                        onChange={(e) => setFormData({ ...formData, storeName: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-slate-50/90 hover:bg-slate-50 focus:bg-white border border-slate-200 rounded-2xl text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/25 focus:border-blue-600 transition-all placeholder:text-slate-400 shadow-xs"
                      />
                    </div>
                  </div>

                  <div className="space-y-1.5">
                    <label className="block text-[11px] font-mono-tech font-bold uppercase tracking-wider text-slate-700">
                      City / Location
                    </label>
                    <div className="relative flex items-center">
                      <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 pointer-events-none" />
                      <input
                        type="text"
                        placeholder="e.g. Mumbai / Delhi / Surat"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full pl-10 pr-4 py-3 bg-slate-50/90 hover:bg-slate-50 focus:bg-white border border-slate-200 rounded-2xl text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/25 focus:border-blue-600 transition-all placeholder:text-slate-400 shadow-xs"
                      />
                    </div>
                  </div>
                </div>

                {/* Interactive Category Chips with Tags */}
                <div className="space-y-2 pt-1">
                  <div className="flex items-center justify-between">
                    <label className="block text-[11px] font-mono-tech font-bold uppercase tracking-wider text-slate-700">
                      Select Your Business Category
                    </label>
                    <span className="text-[10px] font-mono-tech text-blue-600 font-bold">
                      Customized UI Modules
                    </span>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {businessTypes.map((type) => {
                      const isSelected = formData.storeType === type.label;
                      return (
                        <button
                          key={type.id}
                          type="button"
                          onClick={() => setFormData({ ...formData, storeType: type.label })}
                          className={`group px-3 py-2.5 rounded-2xl text-xs font-semibold flex items-center justify-between gap-2 cursor-pointer transition-all duration-200 w-full ${
                            isSelected
                              ? "bg-blue-600 text-white shadow-md shadow-blue-500/25 font-bold ring-2 ring-blue-400"
                              : "bg-slate-50 hover:bg-slate-100 text-slate-700 border border-slate-200"
                          }`}
                        >
                          <div className="flex items-center gap-2 truncate">
                            <span className="text-sm shrink-0">{type.icon}</span>
                            <span className="truncate font-sans">{type.label}</span>
                          </div>
                          <span
                            className={`text-[9px] px-1.5 py-0.5 rounded-md font-mono-tech shrink-0 ${
                              isSelected
                                ? "bg-white/20 text-white"
                                : "bg-slate-200 text-slate-600"
                            }`}
                          >
                            {type.tag}
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>

              {/* High-Converting Action Button with Spring & Glow */}
              <button
                type="submit"
                className="w-full py-4 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-500 hover:to-indigo-500 text-white font-display font-bold text-sm tracking-wide shadow-xl shadow-blue-500/30 flex items-center justify-center gap-2.5 cursor-pointer transition-all hover:scale-[1.01] active:scale-[0.98] mt-4"
              >
                <span>Request Free 1-on-1 Walkthrough</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              {/* Trust Badges */}
              <div className="pt-2 flex items-center justify-center gap-4 text-[11px] font-mono-tech text-slate-500">
                <div className="flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5 text-blue-500" />
                  <span>15-Min Callback</span>
                </div>
                <div className="flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Zero Spam Guarantee</span>
                </div>
                <div className="flex items-center gap-1">
                  <Zap className="w-3.5 h-3.5 text-amber-500" />
                  <span>Free Data Migration</span>
                </div>
              </div>
            </form>
          </>
        ) : (
          /* Confirmation Screen */
          <div className="py-8 text-center space-y-5 relative z-10">
            <div className="w-16 h-16 rounded-full bg-emerald-50 border-2 border-emerald-200 text-emerald-600 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/15">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-display font-black text-slate-900 tracking-tight">
                Demo Request Confirmed!
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 font-sans font-medium leading-relaxed max-w-sm mx-auto">
                Thank you <strong className="text-blue-600">{formData.name}</strong>! Our senior retail ERP specialist will connect with you on <strong className="font-mono text-slate-900">{formData.phone}</strong> within 15 minutes.
              </p>
            </div>
            <button
              onClick={() => {
                setSubmitted(false);
                onClose();
              }}
              className="px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white rounded-full text-xs sm:text-sm font-bold transition-all shadow-md cursor-pointer hover:scale-105 active:scale-95"
            >
              Back to Website
            </button>
          </div>
        )}
      </motion.div>
    </div>
  );
}
