import React, { useState } from "react";
import { Clock, ShieldCheck, TrendingUp, ArrowRight, Zap, Store, Building2, Shirt, Pill, CheckCircle2, ChevronRight, Sparkles } from "lucide-react";
import { ComicText } from "@/components/ui/comic-text";
import { ScrollPerspectiveCard } from "@/components/ui/scroll-perspective-card";

export default function RoiCalculator({ onOpenDemoModal }) {
  const [industry, setIndustry] = useState("supermarket");
  const [billsPerMonth, setBillsPerMonth] = useState(6000);
  const [branchesCount, setBranchesCount] = useState(2);
  const [staffPerBranch, setStaffPerBranch] = useState(2);

  // Industry Preset Benchmarks
  const industryPresets = [
    { id: "supermarket", name: "Supermarket & Grocery", icon: Store, defaultBills: 8000, defaultBranches: 2, defaultStaff: 3 },
    { id: "wholesale", name: "Wholesale & FMCG Depot", icon: Building2, defaultBills: 4000, defaultBranches: 1, defaultStaff: 4 },
    { id: "apparel", name: "Apparel & Garments", icon: Shirt, defaultBills: 3500, defaultBranches: 2, defaultStaff: 2 },
    { id: "pharmacy", name: "Pharmacy & Retail", icon: Pill, defaultBills: 5000, defaultBranches: 1, defaultStaff: 2 },
  ];

  const handleSelectIndustry = (preset) => {
    setIndustry(preset.id);
    setBillsPerMonth(preset.defaultBills);
    setBranchesCount(preset.defaultBranches);
    setStaffPerBranch(preset.defaultStaff);
  };

  // Calculations
  const totalStaff = branchesCount * staffPerBranch;
  const hoursSavedPerMonth = Math.round((billsPerMonth / 100) * 1.5 * branchesCount + totalStaff * 12);
  const laborCostSavingsPerYear = Math.round(hoursSavedPerMonth * 160 * 12);
  const taxAccountantSavingsPerYear = branchesCount * 24000;
  const shrinkageSavingsPerYear = Math.round(billsPerMonth * 12 * 1.5 * branchesCount);
  const totalAnnualSavings = laborCostSavingsPerYear + taxAccountantSavingsPerYear + shrinkageSavingsPerYear;

  return (
    <section
      id="calculator"
      className="py-16 md:py-20 relative bg-paper-canvas border-t border-[#e5ded0] overflow-hidden"
    >
      {/* Soft Ambient Radiance Orbs */}
      <div className="absolute top-1/3 -right-20 w-[450px] h-[450px] bg-emerald-400/8 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/3 -left-20 w-[450px] h-[450px] bg-blue-400/8 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10 relative z-10">
        
        {/* Header */}
        <div className="space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 badge-emerald px-3.5 py-1 text-[11px] font-mono-tech font-bold uppercase tracking-wider">
            Business Savings Calculator
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-black text-slate-900 tracking-tight leading-[1.2]">
            Calculate Your Store's <br className="hidden sm:inline" />
            <span className="font-serif-accent text-blue-600 font-normal italic text-3xl sm:text-5xl md:text-6xl inline-block px-1">
              ROI & Annual Time Saved
            </span>
          </h2>
          <p className="text-slate-600 font-sans text-xs sm:text-base leading-relaxed font-medium">
            Select your retail segment and drag the sliders to project annual cost savings on cashier hours, inventory shrinkage, and CA compilation fees.
          </p>
        </div>

        {/* Outer 3D Perspective Calculator Frame */}
        <ScrollPerspectiveCard initialRotateX={14} initialScale={0.95}>
          <div className="relative glass-card p-4 sm:p-7 md:p-8 text-left shadow-2xl border border-slate-200/90 space-y-8 bg-white rounded-3xl">
            {/* Handwritten Annotation Callout */}
            <div className="hidden sm:flex absolute -top-4 right-8 items-center gap-1.5 font-handwriting text-base sm:text-lg font-bold text-amber-700 bg-amber-50 px-3 py-1 rounded-full border border-amber-200 shadow-xs rotate-1">
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
              <span>✨ Live Projected Annual Savings</span>
            </div>
            
            {/* Top Industry Selector Pills */}
            <div className="space-y-2.5">
              <div className="text-[11px] font-mono font-bold text-slate-500 uppercase tracking-wider">
                Step 1: Select Your Business Segment
              </div>
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5">
                {industryPresets.map((preset) => {
                  const IconComp = preset.icon;
                  const isSelected = industry === preset.id;
                  return (
                    <button
                      key={preset.id}
                      onClick={() => handleSelectIndustry(preset)}
                      className={`p-3 rounded-xl border text-xs font-bold flex items-center gap-2.5 transition-all cursor-pointer ${
                        isSelected
                          ? "bg-slate-900 text-white border-slate-900 shadow-sm ring-2 ring-blue-500/20"
                          : "bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100"
                      }`}
                    >
                      <IconComp className={`w-4 h-4 ${isSelected ? "text-blue-400" : "text-slate-500"}`} />
                      <span className="truncate">{preset.name}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2-Column Responsive Body */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Left Column: Interactive Parametric Sliders */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Slider 1: Bills per Month */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <label className="font-bold text-slate-800 uppercase tracking-wider font-mono-tech">
                      Monthly Invoices / Bills:
                    </label>
                    <span className="font-mono-tech font-bold text-sm text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-lg border border-blue-200">
                      {billsPerMonth.toLocaleString("en-IN")} bills
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1000"
                    max="25000"
                    step="500"
                    value={billsPerMonth}
                    onChange={(e) => setBillsPerMonth(Number(e.target.value))}
                    className="w-full accent-blue-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
                  />
                  <div className="flex justify-between text-[10px] text-slate-600 font-mono font-medium">
                    <span>1,000</span>
                    <span>10,000</span>
                    <span>25,000+</span>
                  </div>
                </div>

                {/* Slider 2: Branch Count */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <label className="font-bold text-slate-800 uppercase tracking-wider font-mono-tech">
                      Active Store Branches / Outlets:
                    </label>
                    <span className="font-mono-tech font-bold text-sm text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-lg border border-purple-200">
                      {branchesCount} {branchesCount === 1 ? "Store" : "Stores"}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="10"
                    step="1"
                    value={branchesCount}
                    onChange={(e) => setBranchesCount(Number(e.target.value))}
                    className="w-full accent-purple-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
                  />
                  <div className="flex justify-between text-[10px] text-slate-600 font-mono font-medium">
                    <span>1 Single Store</span>
                    <span>5 Stores</span>
                    <span>10+ Enterprise Chain</span>
                  </div>
                </div>

                {/* Slider 3: Cashiers & Staff per branch */}
                <div className="space-y-2">
                  <div className="flex justify-between items-center text-xs">
                    <label className="font-bold text-slate-800 uppercase tracking-wider font-mono-tech">
                      Cashier & Inventory Staff / Store:
                    </label>
                    <span className="font-mono-tech font-bold text-sm text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-lg border border-emerald-200">
                      {staffPerBranch} {staffPerBranch === 1 ? "Staff Member" : "Staff Members"}
                    </span>
                  </div>
                  <input
                    type="range"
                    min="1"
                    max="6"
                    step="1"
                    value={staffPerBranch}
                    onChange={(e) => setStaffPerBranch(Number(e.target.value))}
                    className="w-full accent-emerald-600 cursor-pointer h-2 bg-slate-200 rounded-lg"
                  />
                  <div className="flex justify-between text-[10px] text-slate-600 font-mono font-medium">
                    <span>1 Person</span>
                    <span>3 People</span>
                    <span>6 People</span>
                  </div>
                </div>

                {/* Performance Comparison Bar */}
                <div className="p-3.5 bg-blue-50/70 border border-blue-200/80 rounded-xl space-y-2 text-xs">
                  <div className="flex justify-between items-center font-bold text-slate-900 font-sans">
                    <span>Counter Speed Benchmark:</span>
                    <span className="text-blue-700 font-mono-tech font-bold">15x Faster Checkout</span>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-[11px] font-mono-tech pt-1">
                    <div className="p-2 bg-white rounded-lg border border-slate-200">
                      <div className="text-slate-400 text-[10px]">LEGACY SOFTWARE</div>
                      <div className="font-bold text-rose-600">35-50 sec / bill</div>
                    </div>
                    <div className="p-2 bg-white rounded-lg border border-blue-300">
                      <div className="text-blue-600 text-[10px]">XORBYTE POS</div>
                      <div className="font-bold text-emerald-600">2-3 sec / bill ✓</div>
                    </div>
                  </div>
                </div>

              </div>

              {/* Right Column: Dynamic Executive Financial Breakdown */}
              <div className="lg:col-span-5 p-6 sm:p-7 rounded-2xl bg-gradient-to-b from-slate-900 to-slate-950 text-white space-y-6 shadow-2xl border border-slate-800 relative overflow-hidden">
                
                {/* Magic UI Comic Text Punchy Callout */}
                <div className="absolute top-4 right-4 hidden sm:block pointer-events-none">
                  <ComicText fontSize={1.3} className="px-2 py-0.5 animate-bounce-subtle">
                    BOOM!
                  </ComicText>
                </div>

                {/* Top Projected Annual Total */}
                <div className="space-y-1.5 relative z-10">
                  <div className="text-xs font-mono-tech font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-1.5">
                    <TrendingUp className="w-4 h-4" />
                    <span>Projected Annual Net Savings</span>
                  </div>
                  <div className="text-3xl sm:text-4xl font-black text-white font-mono-tech tracking-tight text-shimmer-aurora">
                    ₹{totalAnnualSavings.toLocaleString("en-IN")}
                    <span className="text-xs font-normal text-slate-400 font-sans ml-1.5">/ year</span>
                  </div>
                  <div className="text-[11px] text-slate-400 font-medium font-sans">
                    Direct operational ROI realized within the first 30 days.
                  </div>
                </div>

                <hr className="border-slate-800" />

                {/* 3 Detailed Breakdown Items */}
                <div className="space-y-3.5 text-xs">
                  
                  <div className="flex justify-between items-start text-slate-300 pb-2 border-b border-slate-800/80">
                    <div className="space-y-0.5">
                      <div className="font-bold text-white flex items-center gap-1.5 font-sans">
                        <Clock className="w-3.5 h-3.5 text-blue-400" /> Staff Operational Time
                      </div>
                      <div className="text-[10px] text-slate-400 font-mono-tech">~{hoursSavedPerMonth} hours/month saved</div>
                    </div>
                    <span className="font-mono-tech font-bold text-emerald-400">
                      +₹{laborCostSavingsPerYear.toLocaleString("en-IN")}
                    </span>
                  </div>

                  <div className="flex justify-between items-start text-slate-300 pb-2 border-b border-slate-800/80">
                    <div className="space-y-0.5">
                      <div className="font-bold text-white flex items-center gap-1.5 font-sans">
                        <ShieldCheck className="w-3.5 h-3.5 text-purple-400" /> Automated GST & CA Filing
                      </div>
                      <div className="text-[10px] text-slate-400 font-mono-tech">100% GSTR-1 JSON compilation</div>
                    </div>
                    <span className="font-mono-tech font-bold text-emerald-400">
                      +₹{taxAccountantSavingsPerYear.toLocaleString("en-IN")}
                    </span>
                  </div>

                  <div className="flex justify-between items-start text-slate-300">
                    <div className="space-y-0.5">
                      <div className="font-bold text-white flex items-center gap-1.5 font-sans">
                        <Zap className="w-3.5 h-3.5 text-amber-400" /> Stock Leakage & Pilferage
                      </div>
                      <div className="text-[10px] text-slate-400 font-mono-tech">Zero inventory mismatch guarantee</div>
                    </div>
                    <span className="font-mono-tech font-bold text-emerald-400">
                      +₹{shrinkageSavingsPerYear.toLocaleString("en-IN")}
                    </span>
                  </div>

                </div>

                {/* Action Button */}
                <button
                  onClick={onOpenDemoModal}
                  className="w-full py-3.5 btn-primary font-sans text-xs font-bold flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-blue-500/25"
                >
                  <span>Unlock These Savings in 1-on-1 Demo</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <div className="text-center font-handwriting text-amber-300 text-sm font-bold pt-1">
                  💡 94% of retail stores recover full ERP cost within 14 days!
                </div>
              </div>

            </div>

          </div>
        </ScrollPerspectiveCard>

      </div>
    </section>
  );
}
