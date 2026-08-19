import React, { useState, useEffect } from "react";
import {
  ArrowLeft,
  Sparkles,
  Zap,
  Layers,
  MessageSquare,
  ScanLine,
  Search,
  ShoppingCart,
  QrCode,
  Trash2,
  Plus,
  Store,
  Send,
  CheckCircle2,
  Building2,
  TrendingUp,
  Clock,
  ShieldAlert,
  FileSpreadsheet,
  ArrowRight,
  Globe,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import RoiCalculator from "./RoiCalculator";
import { ScrollPerspectiveCard } from "./ui/scroll-perspective-card";
import { InteractiveBackButton } from "./ui/interactive-back-button";

export default function SimulatorPage({ onBackToHome, onOpenTenantModal, onOpenDemoModal }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });

    const handleKeyDown = (e) => {
      if (e.key === "Escape" && onBackToHome) {
        onBackToHome();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onBackToHome]);

  // ════════════════════════════════════════
  // 1. LIVE ERP SIMULATOR STATE
  // ════════════════════════════════════════
  const [activeTab, setActiveTab] = useState("pos"); // pos | inventory | whatsapp | ai
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Product Catalog
  const catalog = [
    { id: "p1", name: "Amul Butter 500g", price: 275, gst: 12, hsn: "040510", category: "Dairy & FMCG" },
    { id: "p2", name: "Fortune Sunflower Oil 1L", price: 195, gst: 5, hsn: "151219", category: "Dairy & FMCG" },
    { id: "p3", name: "Tata Premium Tea 500g", price: 340, gst: 5, hsn: "090240", category: "Beverages" },
    { id: "p4", name: "Cadbury Celebrations Box", price: 450, gst: 18, hsn: "180690", category: "Snacks" },
    { id: "p5", name: "Basmati Royal Rice 5kg", price: 640, gst: 5, hsn: "100630", category: "Dairy & FMCG" },
    { id: "p6", name: "Organic Wild Honey 250g", price: 220, gst: 5, hsn: "040900", category: "Dairy & FMCG" },
  ];

  // Cart State
  const [cart, setCart] = useState([
    { id: "p1", name: "Amul Butter 500g", price: 275, gst: 12, qty: 2, hsn: "040510" },
    { id: "p2", name: "Fortune Sunflower Oil 1L", price: 195, gst: 5, qty: 1, hsn: "151219" },
  ]);
  const [paymentMode, setPaymentMode] = useState("UPI");
  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      if (existing) {
        return prev.map((item) => (item.id === product.id ? { ...item, qty: item.qty + 1 } : item));
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const updateQty = (id, delta) => {
    setCart((prev) =>
      prev
        .map((item) => (item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item))
        .filter((item) => item.qty > 0)
    );
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cart.reduce((acc, item) => acc + item.price * item.qty, 0);
  const taxTotal = Math.round(cart.reduce((acc, item) => acc + (item.price * item.qty * item.gst) / 100, 0));
  const grandTotal = subtotal + taxTotal;

  const handleCheckout = () => {
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 },
    });
    setCheckoutSuccess(true);
    setTimeout(() => {
      setCheckoutSuccess(false);
      setCart([
        { id: "p1", name: "Amul Butter 500g", price: 275, gst: 12, qty: 1, hsn: "040510" },
      ]);
    }, 2800);
  };

  // Stock Transfer Simulation
  const [bandraStock, setBandraStock] = useState(140);
  const [andheriStock, setAndheriStock] = useState(850);
  const [isSyncing, setIsSyncing] = useState(false);

  const handleTransferStock = () => {
    setIsSyncing(true);
    setTimeout(() => {
      setBandraStock((b) => b + 25);
      setAndheriStock((a) => a - 25);
      setIsSyncing(false);
    }, 600);
  };

  // WhatsApp Tab State
  const [waSent, setWaSent] = useState(false);
  const [waPhone, setWaPhone] = useState("+91 98765 43210");
  const [waAmount, setWaAmount] = useState("₹1,450.00");

  const handleSendWa = () => {
    setWaSent(true);
    setTimeout(() => setWaSent(false), 3000);
  };

  // OCR Tab State
  const [ocrProcessing, setOcrProcessing] = useState(false);
  const [ocrSuccess, setOcrSuccess] = useState(false);

  const handleRunOcr = () => {
    setOcrProcessing(true);
    setTimeout(() => {
      setOcrProcessing(false);
      setOcrSuccess(true);
    }, 1100);
  };

  const filteredCatalog = catalog.filter((prod) => {
    const matchesCat = selectedCategory === "All" || prod.category === selectedCategory;
    const matchesSearch =
      prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.hsn.includes(searchQuery);
    return matchesCat && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-[#f7f5f0] text-slate-900 pt-20 sm:pt-24 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden select-none">
      
      {/* Background Paper Texture */}
      <div
        className="fixed inset-0 pointer-events-none opacity-35 mix-blend-multiply bg-repeat -z-10"
        style={{
          backgroundImage: "url('/crumpled-paper.jpg')",
          backgroundSize: "800px 800px",
        }}
      />

      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* Sleek Breadcrumb & Animated Back Navigation */}
        <div className="flex items-center justify-between gap-4 pt-2">
          <InteractiveBackButton onBack={onBackToHome} />

          <div className="text-xs font-mono-tech text-slate-500 font-semibold hidden sm:flex items-center gap-2">
            <span>HOME</span>
            <span>/</span>
            <span className="text-blue-600 font-bold">LIVE SIMULATOR &amp; CALCULATOR</span>
          </div>
        </div>

        {/* Page Title & Mission */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-5xl font-display font-black tracking-tight text-slate-900">
            Live ERP Cockpit &amp; Savings Calculator
          </h1>
          <p className="text-slate-600 text-xs sm:text-base font-medium leading-relaxed">
            Test counter POS billing speed, real-time multi-depot stock sync, automated WhatsApp Udhaar links, 
            AI invoice OCR, and calculate exact projected financial returns for your stores.
          </p>
        </div>

        {/* ════════════════════════════════════════
            SECTION 1: THE 4-MODULE ERP COCKPIT (3D Scroll Perspective)
        ════════════════════════════════════════ */}
        <ScrollPerspectiveCard initialRotateX={10} initialScale={0.97}>
          <div className="w-full bg-white p-4 sm:p-7 md:p-8 rounded-3xl border-2 border-slate-200 shadow-xl space-y-6">
          {/* Cockpit Header */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-5 border-b border-slate-200">
            <div>
              <div className="text-[10px] sm:text-[11px] font-mono-tech font-bold text-slate-400 uppercase tracking-wider">
                MODULE 1: INTERACTIVE ERP COCKPIT
              </div>
              <div className="text-sm sm:text-base font-extrabold text-slate-900 flex flex-wrap items-center gap-2">
                <span>Store Counter #01 · Bandra Supermarket</span>
                <span className="text-[10px] font-mono-tech font-bold bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  Live Cloud Sync Active
                </span>
              </div>
            </div>

            {/* Mode Switcher Tabs with Handwritten Annotation */}
            <div className="flex flex-col items-end gap-1.5 w-full lg:w-auto">
              <div className="flex items-center gap-2 font-handwriting text-sm sm:text-base font-bold text-blue-600 pr-1">
                <span>✨ Click these 4 live modules to test!</span>
                <svg
                  className="w-6 h-6 text-blue-500 shrink-0 transform -rotate-12 animate-pulse"
                  viewBox="0 0 40 40"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M10 6 C 24 10, 22 22, 22 32" />
                  <path d="M14 26 C 18 30, 22 33, 24 33 C 25 28, 27 22, 28 17" />
                </svg>
              </div>

              <div className="grid grid-cols-2 sm:flex sm:flex-wrap items-center gap-1.5 bg-slate-100 p-1.5 rounded-2xl border border-slate-200 w-full lg:w-auto">
                {[
                  { id: "pos", label: "POS Billing", icon: Zap },
                  { id: "inventory", label: "Stock Sync", icon: Layers },
                  { id: "whatsapp", label: "WhatsApp Udhaar", icon: MessageSquare },
                  { id: "ai", label: "Invoice OCR", icon: ScanLine },
                ].map((tab) => {
                const IconComp = tab.icon;
                const isActive = activeTab === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 whitespace-nowrap cursor-pointer ${
                      isActive
                        ? "btn-primary text-white shadow-sm"
                        : "text-slate-600 hover:text-slate-900 hover:bg-white/80"
                    }`}
                  >
                    <IconComp className="w-3.5 h-3.5 shrink-0" />
                    <span>{tab.label}</span>
                  </button>
                );
              })}
              </div>
            </div>
          </div>

          {/* Module Content */}
          <div className="pt-1">
            <AnimatePresence mode="wait">
              {/* TAB 1: POS BILLING */}
              {activeTab === "pos" && (
                <motion.div
                  key="pos"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start text-left"
                >
                  {/* Left: Product Catalog */}
                  <div className="lg:col-span-7 space-y-4">
                    <div className="space-y-3">
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="Search item name, SKU or HSN barcode (e.g. Amul, 040510)..."
                          value={searchQuery}
                          onChange={(e) => setSearchQuery(e.target.value)}
                          className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:outline-none focus:border-blue-500 focus:bg-white transition-all placeholder:text-slate-400"
                        />
                        <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                      </div>

                      <div className="flex items-center gap-2 overflow-x-auto pb-1 text-xs font-bold">
                        {["All", "Dairy & FMCG", "Beverages", "Snacks"].map((cat) => (
                          <button
                            key={cat}
                            onClick={() => setSelectedCategory(cat)}
                            className={`px-3 py-1.5 rounded-lg whitespace-nowrap transition-colors cursor-pointer ${
                              selectedCategory === cat
                                ? "bg-slate-900 text-white"
                                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                            }`}
                          >
                            {cat}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-[340px] overflow-y-auto pr-1">
                      {filteredCatalog.map((prod) => (
                        <div
                          key={prod.id}
                          onClick={() => addToCart(prod)}
                          className="p-3 bg-slate-50 hover:bg-blue-50/60 border border-slate-200 hover:border-blue-300 rounded-xl transition-all cursor-pointer flex flex-col justify-between space-y-2 group shadow-2xs hover:shadow-xs"
                        >
                          <div>
                            <div className="font-bold text-xs text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                              {prod.name}
                            </div>
                            <div className="text-[10px] font-mono-tech text-slate-500">
                              HSN: {prod.hsn} · GST {prod.gst}%
                            </div>
                          </div>
                          <div className="flex items-center justify-between pt-1">
                            <span className="font-bold text-xs text-slate-900 font-mono-tech">₹{prod.price}</span>
                            <span className="w-5 h-5 rounded-full bg-blue-100 group-hover:bg-blue-600 group-hover:text-white text-blue-600 flex items-center justify-center text-xs font-bold transition-colors">
                              +
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Right: Cart Checkout Screen */}
                  <div className="lg:col-span-5 p-5 bg-slate-900 text-white rounded-2xl space-y-4 shadow-xl flex flex-col justify-between min-h-[380px]">
                    <div className="space-y-3">
                      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                        <div className="flex items-center gap-2">
                          <ShoppingCart className="w-4 h-4 text-cyan-400" />
                          <span className="font-bold text-xs text-white">BILLING RECEIPT #INV-0482</span>
                        </div>
                        <span className="text-[10px] font-mono-tech bg-blue-900/60 text-cyan-300 px-2 py-0.5 rounded border border-blue-700/50">
                          {cart.length} Items
                        </span>
                      </div>

                      <div className="space-y-2 max-h-[160px] overflow-y-auto pr-1">
                        {cart.length === 0 ? (
                          <div className="text-center py-8 text-xs text-slate-500 font-mono-tech">
                            Cart is empty. Click items on the left.
                          </div>
                        ) : (
                          cart.map((item) => (
                            <div
                              key={item.id}
                              className="flex items-center justify-between p-2 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs"
                            >
                              <div className="flex-1 pr-2">
                                <div className="font-semibold text-slate-200 line-clamp-1">{item.name}</div>
                                <div className="text-[10px] font-mono-tech text-slate-400">
                                  ₹{item.price} x {item.qty} (GST {item.gst}%)
                                </div>
                              </div>
                              <div className="flex items-center gap-1.5">
                                <button
                                  onClick={() => updateQty(item.id, -1)}
                                  className="w-5 h-5 rounded bg-slate-700 hover:bg-slate-600 flex items-center justify-center text-slate-300 cursor-pointer"
                                >
                                  -
                                </button>
                                <span className="font-mono-tech font-bold w-4 text-center">{item.qty}</span>
                                <button
                                  onClick={() => updateQty(item.id, 1)}
                                  className="w-5 h-5 rounded bg-slate-700 hover:bg-slate-600 flex items-center justify-center text-slate-300 cursor-pointer"
                                >
                                  +
                                </button>
                                <button
                                  onClick={() => removeFromCart(item.id)}
                                  className="ml-1 text-slate-400 hover:text-rose-400 cursor-pointer"
                                >
                                  <Trash2 className="w-3.5 h-3.5" />
                                </button>
                              </div>
                            </div>
                          ))
                        )}
                      </div>
                    </div>

                    <div className="space-y-3 pt-2 border-t border-slate-800">
                      {/* Payment Mode Selector */}
                      <div className="grid grid-cols-4 gap-1 text-[10px] font-mono-tech">
                        {["UPI", "CASH", "CARD", "KHATA"].map((mode) => (
                          <button
                            key={mode}
                            onClick={() => setPaymentMode(mode)}
                            className={`py-1 rounded border text-center font-bold cursor-pointer transition-colors ${
                              paymentMode === mode
                                ? "bg-blue-600 border-blue-500 text-white"
                                : "bg-slate-800 border-slate-700 text-slate-400 hover:text-white"
                            }`}
                          >
                            {mode}
                          </button>
                        ))}
                      </div>

                      <div className="space-y-1 text-xs font-mono-tech">
                        <div className="flex justify-between text-slate-400">
                          <span>Subtotal</span>
                          <span>₹{subtotal}</span>
                        </div>
                        <div className="flex justify-between text-slate-400">
                          <span>GST Tax Total</span>
                          <span>₹{taxTotal}</span>
                        </div>
                        <div className="flex justify-between text-base font-bold text-emerald-400 pt-1 border-t border-slate-800">
                          <span>Total Amount</span>
                          <span>₹{grandTotal}</span>
                        </div>
                      </div>

                      {checkoutSuccess ? (
                        <div className="p-3 bg-emerald-500/20 border border-emerald-500/50 rounded-xl text-emerald-300 text-xs font-bold flex items-center justify-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          <span>Bill Printed &amp; {paymentMode} Reconciled!</span>
                        </div>
                      ) : (
                        <button
                          disabled={cart.length === 0}
                          onClick={handleCheckout}
                          className="w-full py-3 btn-primary text-xs font-bold flex items-center justify-center gap-2 cursor-pointer shadow-lg active:scale-95 transition-all"
                        >
                          <QrCode className="w-4 h-4" />
                          <span>Pay &amp; Print Bill (Dynamic UPI QR)</span>
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 2: STOCK SYNC */}
              {activeTab === "inventory" && (
                <motion.div
                  key="inventory"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-4 text-left"
                >
                  <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-bold text-slate-800">
                      <span className="text-blue-600 flex items-center gap-1.5">
                        <Store className="w-4 h-4" /> REAL-TIME MULTI-OUTLET INVENTORY MESH
                      </span>
                      <button
                        onClick={handleTransferStock}
                        disabled={isSyncing}
                        className="px-3 py-1.5 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-mono-tech text-xs font-bold flex items-center gap-1.5 cursor-pointer shadow-xs transition-all"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>{isSyncing ? "Syncing Mesh..." : "Transfer 25 Pcs (Andheri ➔ Bandra)"}</span>
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono-tech">
                      <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-1">
                        <div className="text-slate-500 font-bold">Central Depot (Mumbai)</div>
                        <div className="text-xl font-black text-slate-900">18,450 Pcs</div>
                        <div className="text-[10px] text-emerald-600 font-bold">● Safe Stock Level</div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-1">
                        <div className="text-slate-500 font-bold">Outlet #1 (Bandra Mart)</div>
                        <div className="text-xl font-black text-blue-600">{bandraStock} Pcs</div>
                        <div className="text-[10px] text-blue-600 font-bold">● Live Counter Synced</div>
                      </div>

                      <div className="p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs space-y-1">
                        <div className="text-slate-500 font-bold">Outlet #2 (Andheri Hub)</div>
                        <div className="text-xl font-black text-amber-600">{andheriStock} Pcs</div>
                        <div className="text-[10px] text-amber-600 font-bold">● Depot Synced</div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 3: WHATSAPP UDHAAR */}
              {activeTab === "whatsapp" && (
                <motion.div
                  key="whatsapp"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-4 text-left max-w-xl mx-auto"
                >
                  <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200/90 space-y-4">
                    <div className="flex items-center gap-2 text-emerald-900 font-bold text-sm">
                      <MessageSquare className="w-4 h-4 text-emerald-600" />
                      <span>Automated WhatsApp Udhaar Collection Link</span>
                    </div>

                    <div className="space-y-3 text-xs">
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">Customer Phone Number</label>
                        <input
                          type="text"
                          value={waPhone}
                          onChange={(e) => setWaPhone(e.target.value)}
                          className="w-full p-2.5 bg-white border border-slate-200 rounded-xl font-mono-tech text-slate-900"
                        />
                      </div>
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">Pending Udhaar Balance</label>
                        <input
                          type="text"
                          value={waAmount}
                          onChange={(e) => setWaAmount(e.target.value)}
                          className="w-full p-2.5 bg-white border border-slate-200 rounded-xl font-mono-tech font-bold text-slate-900"
                        />
                      </div>

                      {waSent ? (
                        <div className="p-3 bg-emerald-600 text-white rounded-xl font-bold flex items-center justify-center gap-2">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>WhatsApp PDF Bill &amp; Dynamic UPI QR Dispatched!</span>
                        </div>
                      ) : (
                        <button
                          onClick={handleSendWa}
                          className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 cursor-pointer shadow-md transition-all"
                        >
                          <Send className="w-4 h-4" />
                          <span>Send Instant WhatsApp Payment Link</span>
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* TAB 4: INVOICE OCR */}
              {activeTab === "ai" && (
                <motion.div
                  key="ai"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-4 text-left max-w-xl mx-auto"
                >
                  <div className="p-5 rounded-2xl bg-blue-50/60 border border-blue-200/90 space-y-4">
                    <div className="flex items-center gap-2 text-blue-900 font-bold text-sm">
                      <ScanLine className="w-4 h-4 text-blue-600" />
                      <span>Distributor Invoice PDF / Photo OCR Scanner</span>
                    </div>

                    <div className="p-4 bg-white border-2 border-dashed border-blue-300 rounded-xl text-center space-y-2">
                      <div className="text-xs text-slate-600">Upload distributor GST bill PDF or camera snap</div>
                      <button
                        onClick={handleRunOcr}
                        disabled={ocrProcessing}
                        className="px-5 py-2.5 btn-primary text-xs font-bold inline-flex items-center gap-2 cursor-pointer"
                      >
                        <Sparkles className="w-4 h-4" />
                        <span>{ocrProcessing ? "AI Extracting Line Items..." : "Simulate OCR Extraction"}</span>
                      </button>
                    </div>

                    {ocrSuccess && (
                      <div className="p-3.5 bg-white border border-emerald-200 rounded-xl space-y-2 text-xs font-mono-tech">
                        <div className="text-emerald-700 font-bold flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4" /> 18 Line Items Extracted with 100% Tax Accuracy
                        </div>
                        <div className="text-[11px] text-slate-600">
                          Supplier: Nestle India Ltd (GSTIN: 27AABCN8291M1Z4) · Total: ₹48,920.00
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
              </AnimatePresence>
            </div>
          </div>
        </ScrollPerspectiveCard>

        {/* ════════════════════════════════════════
            SECTION 2: ROI & BUSINESS SAVINGS CALCULATOR
        ════════════════════════════════════════ */}
        <div className="pt-6">
          <RoiCalculator onOpenDemoModal={onOpenDemoModal} />
        </div>

      </div>
    </div>
  );
}
