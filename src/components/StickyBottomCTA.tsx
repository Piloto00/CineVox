import React, { useEffect, useState } from "react";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { PRODUCT_INFO } from "../data/content";

interface StickyBottomCTAProps {
  onCtaClick: () => void;
}

export const StickyBottomCTA: React.FC<StickyBottomCTAProps> = ({ onCtaClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 400px
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-30 border-t border-slate-800 bg-[#07090E]/98 backdrop-blur-md transition-all duration-300 sm:hidden shadow-2xl pb-[env(safe-area-inset-bottom,0px)]">
      {/* Top micro-banner with explicit delivery reassurance */}
      <div className="bg-emerald-950/70 border-b border-emerald-900/40 px-3 py-1 flex items-center justify-center gap-1.5 text-center">
        <CheckCircle2 className="h-3 w-3 text-emerald-400 shrink-0" />
        <span className="text-[10px] font-medium text-emerald-300 leading-tight">
          Receba as instruções de acesso por e-mail após a confirmação do pagamento
        </span>
      </div>

      {/* Main Bar: Single-line price + CTA button with clear separation */}
      <div className="flex items-center justify-between gap-3 px-3 py-2.5 max-w-md mx-auto">
        {/* Price column guaranteed on single lines */}
        <div className="flex flex-col shrink-0 justify-center">
          <div className="text-base sm:text-lg font-black text-white tracking-tight whitespace-nowrap leading-none">
            {PRODUCT_INFO.priceDisplay}
          </div>
          <div className="text-[10px] font-semibold text-emerald-400 whitespace-nowrap leading-tight mt-1">
            Pagamento único · Sem mensalidade
          </div>
        </div>

        {/* Action Button - Never overlapping, explicit target */}
        <button
          onClick={onCtaClick}
          className="flex items-center justify-center gap-1.5 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 hover:from-red-500 hover:to-rose-500 px-3.5 py-2.5 text-xs font-black text-white shadow-lg shadow-red-950/60 active:scale-95 cursor-pointer whitespace-nowrap shrink-0 transition-all ml-auto"
        >
          <span>{PRODUCT_INFO.heroCta}</span>
          <ArrowRight className="h-3.5 w-3.5 shrink-0" />
        </button>
      </div>
    </div>
  );
};
