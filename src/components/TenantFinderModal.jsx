import React, { useState } from "react";
import { Search, X, Building2, ArrowRight, CheckCircle2, Store, ExternalLink } from "lucide-react";
import { motion } from "motion/react";
import { Highlighter } from "@/components/ui/highlighter";

export default function TenantFinderModal({ isOpen, onClose }) {
  const [query, setQuery] = useState("");
  const [storeSlug, setStoreSlug] = useState("");

  if (!isOpen) return null;

  const handleSearch = (e) => {
    e.preventDefault();
    if (!query.trim()) return;

    // Sanitize input slug
    const sanitized = query.toLowerCase().trim().replace(/[^a-z0-9-]/g, "-");
    setStoreSlug(sanitized);
  };

  const handleRedirect = () => {
    if (!storeSlug) return;
    window.location.href = `http://localhost:5173/?tenant=${storeSlug}`;
  };

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-4 bg-slate-950/75 backdrop-blur-xl animate-in fade-in duration-300">
      <motion.div
        initial={{ opacity: 0, scale: 0.93, y: 15 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.93, y: 15 }}
        transition={{ type: "spring", stiffness: 350, damping: 28 }}
        className="relative bg-white border-2 border-slate-200/90 rounded-[32px] sm:rounded-[40px] p-6 sm:p-9 max-w-lg w-full shadow-[0_30px_90px_-15px_rgba(37,99,235,0.35)] text-left overflow-hidden space-y-6"
      >
        {/* Ambient background light */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-slate-400 hover:text-slate-800 p-2.5 rounded-full bg-slate-100/80 hover:bg-slate-200 transition-all cursor-pointer z-20 hover:rotate-90 duration-200"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Header */}
        <div className="space-y-2 relative z-10">

          <h3 className="text-2xl sm:text-3xl font-display font-black text-slate-900 tracking-tight leading-[1.2]">
            Find Your Store{" "}
            <Highlighter action="underline" color="#3b82f6" className="text-blue-900">
              ERP Terminal
            </Highlighter>
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 font-sans font-medium leading-relaxed">
            Enter your Store Name or Tenant ID to instantly launch your isolated, private cloud terminal.
          </p>
        </div>

        {/* Search Form */}
        <form onSubmit={handleSearch} className="space-y-3.5 relative z-10 font-sans">
          <div className="relative flex items-center">
            <Search className="w-4 h-4 text-blue-600 absolute left-4 pointer-events-none" />
            <input
              type="text"
              placeholder="e.g. bikanerwala, nawas, or aman-mart"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value);
                setStoreSlug("");
              }}
              className="w-full pl-11 pr-4 py-3.5 bg-slate-50/90 hover:bg-slate-50 focus:bg-white border border-slate-200 rounded-2xl text-xs sm:text-sm font-mono-tech font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/25 focus:border-blue-600 transition-all placeholder:text-slate-400 shadow-xs"
              autoFocus
            />
          </div>

          <button
            type="submit"
            className="w-full py-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-display font-bold text-xs sm:text-sm tracking-wide shadow-xl flex items-center justify-center gap-2 cursor-pointer transition-all hover:scale-[1.01] active:scale-[0.98]"
          >
            <span>Search Store Terminal</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </form>

        {/* Result Match Box */}
        {storeSlug && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="p-4 bg-gradient-to-br from-blue-50/90 to-indigo-50/90 border-2 border-blue-200/80 rounded-2xl space-y-3 relative z-10 shadow-sm"
          >
            <div className="flex items-center gap-2 text-xs font-mono-tech font-bold text-blue-700">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>STORE TERMINAL IDENTIFIED!</span>
            </div>

            <div className="p-3 bg-white rounded-xl border border-blue-100 flex items-center justify-between shadow-xs">
              <div className="flex items-center gap-2.5">
                <Store className="w-5 h-5 text-blue-600" />
                <span className="text-xs sm:text-sm font-mono-tech font-bold text-slate-900">
                  {storeSlug}.xorbyte.com
                </span>
              </div>
              <span className="text-[10px] bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded-full font-mono-tech font-bold border border-emerald-200">
                ACTIVE
              </span>
            </div>

            <button
              onClick={handleRedirect}
              className="w-full py-3.5 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white rounded-xl text-xs sm:text-sm font-bold cursor-pointer transition-all shadow-lg shadow-emerald-500/25 flex items-center justify-center gap-2"
            >
              <span>Launch Store ERP Terminal</span>
              <ExternalLink className="w-4 h-4" />
            </button>
          </motion.div>
        )}

        {/* Sample Store Quick Pills */}
        <div className="pt-3 border-t border-slate-100 space-y-2 relative z-10">
          <div className="text-[11px] font-mono-tech font-bold text-slate-500 uppercase tracking-wider">
            Quick Demo Outlets:
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              { slug: "bikanerwala", name: "Bikanerwala Sweets" },
              { slug: "nawas-store", name: "Nawas Commercial" },
              { slug: "aman-supermarket", name: "Aman Hypermarket" },
            ].map((demo) => (
              <button
                key={demo.slug}
                onClick={() => {
                  setQuery(demo.slug);
                  setStoreSlug(demo.slug);
                }}
                className="px-3 py-1.5 bg-slate-100 hover:bg-blue-50 hover:text-blue-700 border border-slate-200 text-slate-700 rounded-xl text-xs font-mono-tech font-bold transition-all cursor-pointer hover:scale-105"
              >
                {demo.name}
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
}
