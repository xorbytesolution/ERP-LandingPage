import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
  Home,
  LayoutGrid,
  Laptop,
  Scale,
  Calculator,
  CreditCard,
  Building2,
  Sparkles,
} from "lucide-react";

export default function NavigationDock({ onOpenTenantModal, onOpenDemoModal }) {
  const dockItems = [
    {
      title: "Top",
      icon: <Home className="w-full h-full" />,
      href: "#top",
    },
    {
      title: "ERP Features",
      icon: <LayoutGrid className="w-full h-full" />,
      href: "#features",
    },
    {
      title: "Live Simulator",
      icon: <Laptop className="w-full h-full" />,
      href: "#demo-interactive",
      badge: "Interactive",
    },
    {
      title: "Why Switch",
      icon: <Scale className="w-full h-full" />,
      href: "#comparison",
    },
    {
      title: "ROI Calculator",
      icon: <Calculator className="w-full h-full" />,
      href: "#calculator",
      badge: "Save ₹1.8L+",
    },
    {
      title: "Pricing Plans",
      icon: <CreditCard className="w-full h-full" />,
      href: "#pricing",
    },
    {
      title: "Client Portal",
      icon: <Building2 className="w-full h-full" />,
      onClick: onOpenTenantModal,
    },
    {
      title: "Book 1-on-1 Demo",
      icon: <Sparkles className="w-full h-full text-amber-400" />,
      onClick: onOpenDemoModal,
      badge: "Free",
    },
  ];

  return (
    <div className="fixed bottom-6 right-6 md:right-auto md:left-1/2 md:-translate-x-1/2 z-40">
      <FloatingDock items={dockItems} />
    </div>
  );
}
