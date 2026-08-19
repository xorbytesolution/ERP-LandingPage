import React, { useState } from "react";
import { Search, Building2, ExternalLink, ArrowRight, ShieldCheck, Check, Store, Globe } from "lucide-react";
import { motion } from "motion/react";

export default function StoreRosterSection({ onOpenTenantModal }) {
  const [searchTerm, setSearchTerm] = useState("");

  const sampleStores = [
    {
      id: "bikanerwala",
      name: "Bikanerwala Sweets & Foods",
      category: "Food Retail Chain · 8 Outlets",
      location: "New Delhi & NCR",
      domain: "bikanerwala.xorbyte.com",
      status: "Active · POS Counters 1-8 Online",
    },
    {
      id: "nawas-store",
      name: "Nawas Commercial Mart",
      category: "Wholesale Supermarket · 3 Branches",
      location: "Mumbai, Maharashtra",
      domain: "nawas.xorbyte.com",
      status: "Active · Offline Sync Ready",
    },
    {
      id: "aman-supermarket",
      name: "Aman Hypermarket",
      category: "Grocery & Departmental Chain",
      location: "Jaipur, Rajasthan",
      domain: "aman.xorbyte.com",
      status: "Active · AI Scanner Enabled",
    },
    {
      id: "jaipur-handloom",
      name: "Jaipur Handloom & Textiles",
      category: "Garment & Textile Retailer",
      location: "Jaipur & Udaipur",
      domain: "jaipurhandloom.xorbyte.com",
      status: "Active · Multi-Counter",
    },
  ];

  const filteredStores = sampleStores.filter(
    (s) =>
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.domain.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section id="solutions" className="py-16 md:py-20 relative bg-paper-warm border-t border-[#e2dcd0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
        
        {/* Header */}
        <div className="space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 badge-blue px-3.5 py-1 text-[11px] font-mono-tech font-bold uppercase tracking-wider">
            Client Portal Lookup
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-black text-slate-900 tracking-tight leading-[1.2]">
            Find Your Store's <br className="hidden sm:inline" />
            <span className="font-serif-accent text-blue-600 font-normal italic text-3xl sm:text-5xl md:text-6xl inline-block px-1">
              Dedicated ERP Terminal
            </span>
          </h2>
          <p className="text-slate-600 font-sans text-xs sm:text-base leading-relaxed font-medium">
            Every business gets a private, encrypted store URL. Type your business name below to launch your login terminal.
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-xl mx-auto">
          <div className="bg-white p-2 rounded-2xl border border-slate-300 shadow-lg flex items-center gap-3 focus-within:border-blue-500 transition-all">
            <Search className="w-5 h-5 text-blue-600 ml-3 shrink-0" />
            <input
              type="text"
              placeholder="Search store name, ID, or city (e.g. Bikanerwala, Nawas, Jaipur)..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent border-none text-slate-900 placeholder:text-slate-400 font-semibold text-sm outline-none"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="text-xs font-bold text-slate-400 hover:text-slate-600 px-2 cursor-pointer"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Store Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {filteredStores.map((store) => (
            <motion.div
              key={store.id}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="glass-card p-6 flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-blue-600" />
                    <span className="font-display font-bold text-slate-900 text-base">{store.name}</span>
                  </div>
                  <span className="text-[10px] font-mono-tech font-bold bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded-full border border-emerald-200">
                    Live
                  </span>
                </div>

                <div className="text-xs text-slate-500 space-y-1 font-sans">
                  <div>📍 {store.location} · {store.category}</div>
                  <div className="font-mono-tech text-blue-600 font-bold">{store.domain}</div>
                </div>
              </div>

              <button
                onClick={onOpenTenantModal}
                className="w-full py-2.5 btn-secondary font-sans text-xs font-bold flex items-center justify-center gap-2"
              >
                <span>Open Store Terminal</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
