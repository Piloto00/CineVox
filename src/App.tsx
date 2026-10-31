/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Benefits } from "./components/Benefits";
import { AntiScamTrust } from "./components/AntiScamTrust";
import { HowItWorks } from "./components/HowItWorks";
import { SpecialOffer } from "./components/SpecialOffer";
import { SecurityGuarantee } from "./components/SecurityGuarantee";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { CheckoutModal } from "./components/CheckoutModal";
import { CheckoutSettingsDrawer } from "./components/CheckoutSettingsDrawer";
import { LegalModals, ModalType } from "./components/LegalModals";
import { StickyBottomCTA } from "./components/StickyBottomCTA";
import { PRODUCT_INFO } from "./data/content";
import { trackPixelEvent, trackPixelCustom } from "./utils/pixel";

export default function App() {
  const [checkoutModalOpen, setCheckoutModalOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [activeLegalModal, setActiveLegalModal] = useState<ModalType>(null);

  // Stored checkout URL & direct redirect preference in localStorage
  const [checkoutUrl, setCheckoutUrl] = useState<string>(() => {
    return localStorage.getItem("cinevox_checkout_url") || "";
  });
  const [directRedirect, setDirectRedirect] = useState<boolean>(() => {
    return localStorage.getItem("cinevox_direct_redirect") === "true";
  });

  // Track initial page engagement & scroll movements
  useEffect(() => {
    trackPixelEvent("ViewContent", {
      content_name: "CineVox Landing Page",
      content_category: "Entretenimento",
      value: 47.0,
      currency: "BRL",
    });

    const trackedDepths = new Set<number>();
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (scrollHeight <= 0) return;
      const scrollPercent = Math.round((window.scrollY / scrollHeight) * 100);

      const milestones = [25, 50, 75, 90];
      for (const milestone of milestones) {
        if (scrollPercent >= milestone && !trackedDepths.has(milestone)) {
          trackedDepths.add(milestone);
          trackPixelCustom(`ScrollDepth_${milestone}Percent`, {
            percent: milestone,
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSaveCheckoutUrl = (url: string) => {
    setCheckoutUrl(url);
    localStorage.setItem("cinevox_checkout_url", url);
  };

  const handleToggleDirectRedirect = (val: boolean) => {
    setDirectRedirect(val);
    localStorage.setItem("cinevox_direct_redirect", String(val));
  };

  // Primary Action triggered across all CTA buttons
  const handlePrimaryCta = () => {
    trackPixelEvent("InitiateCheckout", {
      content_name: "CineVox - Acesso Vitalício",
      content_category: "Entretenimento",
      value: 47.0,
      currency: "BRL",
      num_items: 1,
    });

    if (checkoutUrl && directRedirect) {
      window.open(checkoutUrl, "_blank", "noopener,noreferrer");
    } else {
      setCheckoutModalOpen(true);
    }
  };

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 flex flex-col font-sans selection:bg-red-600 selection:text-white pb-14 sm:pb-0">
      {/* Top Bar Navigation */}
      <Header onCtaClick={handlePrimaryCta} />

      {/* Main Page Flow */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onCtaClick={handlePrimaryCta} />

        {/* Benefits & Product Presentation */}
        <Benefits />

        {/* Anti-Scam Trust & Institutional Transparency */}
        <AntiScamTrust />

        {/* 3 Step Process & Clarity on Single Payment */}
        <HowItWorks />

        {/* Special Offer (R$ 47,00) */}
        <SpecialOffer
          onCtaClick={handlePrimaryCta}
          checkoutUrl={checkoutUrl}
          onOpenSettings={() => setSettingsOpen(true)}
        />

        {/* Security & 7-Day CDC Guarantee */}
        <SecurityGuarantee />

        {/* Expandable FAQs */}
        <FAQ />
      </main>

      {/* Footer with Legal Info & Support */}
      <Footer onOpenModal={(type) => setActiveLegalModal(type)} />

      {/* Floating Sticky CTA on mobile (< 15% viewport height) */}
      <StickyBottomCTA onCtaClick={handlePrimaryCta} />

      {/* Checkout Processing / Simulator Modal */}
      <CheckoutModal
        isOpen={checkoutModalOpen}
        onClose={() => setCheckoutModalOpen(false)}
        configuredCheckoutUrl={checkoutUrl}
      />

      {/* Checkout Link Settings Drawer */}
      <CheckoutSettingsDrawer
        isOpen={settingsOpen}
        onClose={() => setSettingsOpen(false)}
        checkoutUrl={checkoutUrl}
        onSaveUrl={handleSaveCheckoutUrl}
        directRedirect={directRedirect}
        onToggleDirectRedirect={handleToggleDirectRedirect}
      />

      {/* Legal & Policy Modals */}
      <LegalModals
        activeModal={activeLegalModal}
        onClose={() => setActiveLegalModal(null)}
      />
    </div>
  );
}
