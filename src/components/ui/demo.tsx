import React from "react";
import { LiquidMetalButton } from "@/components/ui/liquid-metal-button";

export default function LiquidMetalButtonDemo({ onOpenDemoModal }: { onOpenDemoModal?: () => void }) {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 py-4">
      <LiquidMetalButton label="Book Live Demo" onClick={onOpenDemoModal} />
      <LiquidMetalButton viewMode="icon" onClick={onOpenDemoModal} />
    </div>
  );
}
