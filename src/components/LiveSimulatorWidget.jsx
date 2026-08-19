import React, { useState } from "react";
import {
  Zap,
  Layers,
  MessageSquare,
  ScanLine,
  Search,
  ShoppingCart,
  QrCode,
  CheckCircle2,
  Trash2,
  Plus,
  Minus,
  Sparkles,
  ArrowRight,
  Store,
  RefreshCw,
  Clock,
  Printer,
  ShieldCheck,
  Send,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { ScrollPerspectiveCard } from "@/components/ui/scroll-perspective-card";

export default function LiveSimulatorWidget({ onOpenDemoModal }) {
  const [activeTab, setActiveTab] = useState("pos"); // pos | inventory | whatsapp | ai
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Simulated POS Cart
  const [cart, setCart] = useState([
    { id: "p1", name: "Amul Taaza Milk 500ml", price: 28, qty: 2, gst: 5, hsn: "040120" },
    { id: "p2", name: "Aashirvaad Shudh Chakki Atta 5kg", price: 235, qty: 1, gst: 5, hsn: "110100" },
  ]);

  const [checkoutSuccess, setCheckoutSuccess] = useState(false);

  // Sample Product Catalog
  const catalog = [
    { id: "p1", name: "Amul Taaza Milk 500ml", price: 28, gst: 5, hsn: "040120", category: "Dairy & FMCG" },
    { id: "p2", name: "Aashirvaad Atta 5kg", price: 235, gst: 5, hsn: "110100", category: "Dairy & FMCG" },
    { id: "p3", name: "Tata Salt Vacuum 1kg", price: 28, gst: 0, hsn: "250100", category: "Dairy & FMCG" },
    { id: "p4", name: "Surf Excel Easy Wash 1kg", price: 145, gst: 18, hsn: "340220", category: "Dairy & FMCG" },
    { id: "p5", name: "Red Bull Energy Drink 250ml", price: 125, gst: 28, hsn: "220299", category: "Beverages" },
    { id: "p6", name: "Haldiram Bhujia Sev 400g", price: 95, gst: 12, hsn: "210690", category: "Snacks" },
  ];

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
  const totalGst = Math.round(cart.reduce((acc, item) => acc + (item.price * item.qty * item.gst) / 100, 0));
  const grandTotal = subtotal + totalGst;

  const handleCheckout = () => {
    setCheckoutSuccess(true);
    setTimeout(() => {
      setCheckoutSuccess(false);
      setCart([
        { id: "p1", name: "Amul Taaza Milk 500ml", price: 28, qty: 1, gst: 5, hsn: "040120" },
      ]);
    }, 2800);
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
    }, 1200);
  };

  const filteredCatalog = catalog.filter((prod) => {
    const matchesCat = selectedCategory === "All" || prod.category === selectedCategory;
    const matchesSearch =
      prod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.hsn.includes(searchQuery);
    return matchesCat && matchesSearch;
  });

  return (
    <div className="w-full">
      <ScrollPerspectiveCard initialRotateX={8} initialScale={0.98}>
        {/* Outer Glassmorphic Frame */}
        <div className="glass-card p-4 sm:p-7 md:p-8 shadow-2xl border-2 border-slate-200/90 bg-white rounded-3xl space-y-6">
          
          {/* Top Workspace Header Bar */}
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 pb-5 border-b border-slate-200">
            <div>
              <div className="text-[10px] sm:text-[11px] font-mono font-bold text-slate-400 uppercase tracking-wider">
                LIVE ERP COCKPIT SIMULATOR
              </div>
              <div className="text-sm sm:text-base font-extrabold text-slate-900 flex flex-wrap items-center gap-2">
                <span>Store Counter #01 · Bandra Supermarket</span>
                <span className="text-[10px] font-mono font-bold bg-emerald-50 text-emerald-700 px-2.5 py-0.5 rounded-full border border-emerald-200">
                  Live Cloud Sync Ready
                </span>
              </div>
            </div>

            {/* Simulation Mode Tabs */}
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

          {/* Dynamic Interactive Body */}
          <div className="pt-2">
            <AnimatePresence mode="wait">
              
              {/* TAB 1: POS BILLING TERMINAL */}
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
                          placeholder="Search item name, SKU or HSN barcode (e.g. Amul, 040120)..."
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
                          className="p-3 bg-slate-50 hover:bg-blue-50/60 border border-slate-200 hover:border-blue-300 rounded-xl transition-all cursor-pointer flex flex-col justify-between space-y-2 group shadow-xs hover:shadow-sm"
                        >
                          <div>
                            <div className="font-bold text-xs text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-1">
                              {prod.name}
                            </div>
                            <div className="text-[10px] font-mono text-slate-500">
                              HSN: {prod.hsn} · GST {prod.gst}%
                            </div>
                          </div>
                          <div className="flex items-center justify-between pt-1">
                            <span className="font-bold text-xs text-slate-900">₹{prod.price}</span>
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
                        <span className="text-[10px] font-mono bg-blue-900/60 text-cyan-300 px-2 py-0.5 rounded border border-blue-700/50">
                          {cart.length} Items
                        </span>
                      </div>

                      <div className="space-y-2 max-h-[160px] overflow-y-auto pr-1">
                        {cart.length === 0 ? (
                          <div className="text-center py-8 text-xs text-slate-500 font-mono">
                            Cart is empty. Click items to bill.
                          </div>
                        ) : (
                          cart.map((item) => (
                            <div
                              key={item.id}
                              className="flex items-center justify-between p-2 rounded-lg bg-slate-800/80 border border-slate-700/60 text-xs"
                            >
                              <div className="flex-1 pr-2">
                                <div className="font-semibold text-slate-200 line-clamp-1">{item.name}</div>
                                <div className="text-[10px] font-mono text-slate-400">
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
                                <span className="font-mono font-bold w-4 text-center">{item.qty}</span>
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
                      <div className="space-y-1 text-xs font-mono">
                        <div className="flex justify-between text-slate-400">
                          <span>Subtotal</span>
                          <span>₹{subtotal}</span>
                        </div>
                        <div className="flex justify-between text-slate-400">
                          <span>GST Tax Total</span>
                          <span>₹{totalGst}</span>
                        </div>
                        <div className="flex justify-between text-base font-bold text-emerald-400 pt-1 border-t border-slate-800">
                          <span>Total Amount</span>
                          <span>₹{grandTotal}</span>
                        </div>
                      </div>

                      {checkoutSuccess ? (
                        <div className="p-3 bg-emerald-500/20 border border-emerald-500/50 rounded-xl text-emerald-300 text-xs font-bold flex items-center justify-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                          <span>Bill Printed &amp; UPI Reconciled!</span>
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

              {/* TAB 2: MULTI-WAREHOUSE STOCK SYNC */}
              {activeTab === "inventory" && (
                <motion.div
                  key="inventory"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="space-y-4 text-left"
                >
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                    <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                      <span className="text-blue-600 flex items-center gap-1.5">
                        <Store className="w-4 h-4" /> REAL-TIME MULTI-OUTLET INVENTORY MESH
                      </span>
                      <span className="text-emerald-700 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded text-[10px] font-mono">
                        SSE Realtime Online
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs font-mono">
                      <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs space-y-1">
                        <div className="text-slate-500 font-bold">Central Depot (Mumbai)</div>
                        <div className="text-lg font-bold text-slate-900">18,450 Pcs</div>
                        <div className="text-[10px] text-emerald-600 font-bold">● Safe Stock Level</div>
                      </div>

                      <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs space-y-1">
                        <div className="text-slate-500 font-bold">Outlet #1 (Bandra Mart)</div>
                        <div className="text-lg font-bold text-blue-600">3,120 Pcs</div>
                        <div className="text-[10px] text-blue-600 font-bold">● Transfer In Transit</div>
                      </div>

                      <div className="p-3 rounded-xl bg-white border border-slate-200 shadow-xs space-y-1">
                        <div className="text-slate-500 font-bold">Outlet #2 (Andheri Hub)</div>
                        <div className="text-lg font-bold text-amber-600">420 Pcs</div>
                        <div className="text-[10px] text-amber-600 font-bold">▲ Low Stock Warning</div>
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
                  <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200/80 space-y-4">
                    <div className="flex items-center gap-2 text-emerald-800 font-bold text-sm">
                      <MessageSquare className="w-4 h-4 text-emerald-600" />
                      <span>Automated WhatsApp Udhaar Collection Link</span>
                    </div>

                    <div className="space-y-3 text-xs">
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">Customer Phone</label>
                        <input
                          type="text"
                          value={waPhone}
                          onChange={(e) => setWaPhone(e.target.value)}
                          className="w-full p-2.5 bg-white border border-slate-200 rounded-xl font-mono text-slate-900"
                        />
                      </div>
                      <div>
                        <label className="block font-bold text-slate-700 mb-1">Pending Balance</label>
                        <input
                          type="text"
                          value={waAmount}
                          onChange={(e) => setWaAmount(e.target.value)}
                          className="w-full p-2.5 bg-white border border-slate-200 rounded-xl font-mono font-bold text-slate-900"
                        />
                      </div>

                      {waSent ? (
                        <div className="p-3 bg-emerald-600 text-white rounded-xl font-bold flex items-center justify-center gap-2">
                          <CheckCircle2 className="w-4 h-4" />
                          <span>WhatsApp PDF Bill &amp; UPI QR Dispatched!</span>
                        </div>
                      ) : (
                        <button
                          onClick={handleSendWa}
                          className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 cursor-pointer shadow-md"
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
                  <div className="p-5 rounded-2xl bg-blue-50/50 border border-blue-200/80 space-y-4">
                    <div className="flex items-center gap-2 text-blue-900 font-bold text-sm">
                      <ScanLine className="w-4 h-4 text-blue-600" />
                      <span>Supplier Invoice PDF / Photo OCR Scanner</span>
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
                      <div className="p-3 bg-white border border-emerald-200 rounded-xl space-y-2 text-xs font-mono">
                        <div className="text-emerald-700 font-bold flex items-center gap-1.5">
                          <CheckCircle2 className="w-4 h-4" /> 18 Items Extracted with 100% Tax Accuracy
                        </div>
                        <div className="text-[10px] text-slate-500">
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
    </div>
  );
}
