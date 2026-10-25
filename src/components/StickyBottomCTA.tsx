import React, { useEffect, useState } from "react";
import { ArrowRight, ShieldCheck } from "lucide-react";
import { PRODUCT_INFO } from "../data/content";

interface StickyBottomCTAProps {
  onCtaClick: () => void;
}

export const StickyBottomCTA: React.FC<StickyBottomCTAProps> = ({ onCtaClick }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past 500px
      if (window.scrollY > 500) {
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
    <div className="fixed bottom-0 left-0 right-0 z-30 border-t border-slate-800 bg-[#07090E]/95 backdrop-blur-md px-3 py-2.5 transition-all duration-300 sm:hidden shadow-2xl">
      <div className="flex items-center justify-between gap-3">
        <div className="flex flex-col">
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] text-slate-400 line-through">
              {PRODUCT_INFO.originalPriceDisplay}
            </span>
            <span className="text-[10px] text-emerald-400 font-bold bg-emerald-950/70 px-1 rounded">
              -R$ 120
            </span>
          </div>
          <span className="text-xs font-black text-white">
            Por {PRODUCT_INFO.priceDisplay}
          </span>
        </div>

        <button
          onClick={onCtaClick}
          className="flex-1 flex items-center justify-center gap-1.5 rounded-lg bg-red-600 px-3 py-2.5 text-xs font-bold text-white shadow-md active:scale-95 cursor-pointer whitespace-nowrap"
        >
          <span>QUERO ACESSAR AGORA</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
};
