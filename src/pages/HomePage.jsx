import React from "react";
import HeroSection from "@/components/HeroSection";
import { HeroScrollDemo } from "@/components/ui/HeroScrollDemo";
import FeatureGrid from "@/components/FeatureGrid";
import ComparisonSection from "@/components/ComparisonSection";
import PricingSection from "@/components/PricingSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";

export default function HomePage({ onOpenTenantModal, onOpenDemoModal }) {
  return (
    <main>
      {/* 1. Hero Section */}
      <HeroSection
        onOpenTenantModal={onOpenTenantModal}
        onOpenDemoModal={onOpenDemoModal}
      />

      {/* 2. 3D Scroll Perspective Showcase */}
      <HeroScrollDemo onOpenDemoModal={onOpenDemoModal} />

      {/* 3. Authentic ERP Super-Modules Bento Grid */}
      <FeatureGrid onOpenDemoModal={onOpenDemoModal} />

      {/* 4. Why Switch: Xorbyte vs Legacy Software */}
      <ComparisonSection onOpenDemoModal={onOpenDemoModal} />

      {/* 5. Transparent Plans & Pricing */}
      <PricingSection onOpenDemoModal={onOpenDemoModal} />

      {/* 6. Frequently Asked Questions Marquee */}
      <FaqSection />

      {/* 7. Standalone Luxury Glass CTA Callout */}
      <CtaSection
        onOpenTenantModal={onOpenTenantModal}
        onOpenDemoModal={onOpenDemoModal}
      />
    </main>
  );
}
