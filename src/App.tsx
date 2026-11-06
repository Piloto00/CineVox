/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { PlatformCarousel } from "./components/PlatformCarousel";
import { Benefits } from "./components/Benefits";
import { AntiScamTrust } from "./components/AntiScamTrust";
import { HowItWorks } from "./components/HowItWorks";
import { SpecialOffer } from "./components/SpecialOffer";
import { SecurityGuarantee } from "./components/SecurityGuarantee";
import { FAQ } from "./components/FAQ";
import { Footer } from "./components/Footer";
import { LegalModals, ModalType } from "./components/LegalModals";
import { StickyBottomCTA } from "./components/StickyBottomCTA";
import { PRODUCT_INFO } from "./data/content";
import { trackPixelEvent, trackPixelCustom } from "./utils/pixel";
import { initTracking, buildKirvanoCheckoutUrl } from "./utils/tracking";

export default function App() {
  const [activeLegalModal, setActiveLegalModal] = useState<ModalType>(null);
  const isNavigatingRef = useRef(false);
  const hasTrackedViewContentRef = useRef(false);

  // Initialize UTM tracking and page engagement on mount
  useEffect(() => {
    // Capture & persist UTM parameters immediately
    initTracking();

    // Automatically decorate any <a> tags pointing to Kirvano
    const updateKirvanoLinks = () => {
      const links = document.querySelectorAll<HTMLAnchorElement>('a[href*="kirvano.com"], a.btn-checkout');
      links.forEach((link) => {
        try {
          link.href = buildKirvanoCheckoutUrl(link.href);
        } catch (e) {
          console.error("[Tracking] Error updating link:", e);
        }
      });
    };
    updateKirvanoLinks();

    // Track initial page engagement & scroll movements (guaranteed once per session)
    if (!hasTrackedViewContentRef.current) {
      hasTrackedViewContentRef.current = true;
      trackPixelEvent("ViewContent", {
        content_name: "CineVox Landing Page",
        content_category: "Entretenimento",
        value: 46.99,
        currency: "BRL",
      }, { oncePerSession: true });
    }

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

  // Primary Action triggered across all CTA buttons: track event and redirect to Kirvano with full UTM parameters
  const handlePrimaryCta = () => {
    // Prevent duplicate events on fast/double clicks
    if (isNavigatingRef.current) return;
    isNavigatingRef.current = true;

    trackPixelEvent("InitiateCheckout", {
      content_name: "CineVox - Acesso Vitalício",
      content_category: "Entretenimento",
      value: 46.99,
      currency: "BRL",
      num_items: 1,
    }, { cooldownMs: 6000 });

    const targetCheckoutUrl = buildKirvanoCheckoutUrl(PRODUCT_INFO.checkoutUrl);
    window.location.href = targetCheckoutUrl;
  };

  return (
    <div className="min-h-screen bg-[#07090E] text-slate-100 flex flex-col font-sans selection:bg-red-600 selection:text-white pb-32 sm:pb-0">
      {/* Top Bar Navigation */}
      <Header onCtaClick={handlePrimaryCta} />

      {/* Main Page Flow */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero onCtaClick={handlePrimaryCta} />

        {/* Real App Interior Carousel (Filmes, Séries, TV Ao Vivo, Doramas, Animes) */}
        <PlatformCarousel onCtaClick={handlePrimaryCta} />

        {/* Benefits & Product Presentation */}
        <Benefits />

        {/* Anti-Scam Trust & Institutional Transparency */}
        <AntiScamTrust />

        {/* 3 Step Process & Clarity on Single Payment */}
        <HowItWorks />

        {/* Special Offer (R$ 46,99) */}
        <SpecialOffer onCtaClick={handlePrimaryCta} />

        {/* Security & 7-Day CDC Guarantee */}
        <SecurityGuarantee />

        {/* Expandable FAQs */}
        <FAQ />
      </main>

      {/* Footer with Legal Info & Support */}
      <Footer onOpenModal={(type) => setActiveLegalModal(type)} />

      {/* Floating Sticky CTA on mobile (< 15% viewport height) */}
      <StickyBottomCTA onCtaClick={handlePrimaryCta} />

      {/* Legal & Policy Modals */}
      <LegalModals
        activeModal={activeLegalModal}
        onClose={() => setActiveLegalModal(null)}
      />
    </div>
  );
}
