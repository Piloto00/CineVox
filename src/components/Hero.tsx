import React from "react";
import { Mail } from "lucide-react";
import { PRODUCT_INFO } from "../data/content";

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative overflow-hidden pt-8 pb-14 md:pt-16 md:pb-20 border-b border-slate-800/60">
      {/* Background ambient lighting effects */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[350px] w-[500px] rounded-full bg-red-600/10 blur-[130px]" />
        <div className="h-[250px] w-[400px] rounded-full bg-blue-600/10 blur-[140px] translate-x-20" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Main Hero Card matching user specification */}
        <div className="w-full max-w-md rounded-2xl sm:rounded-3xl border border-slate-800/80 bg-[#0B111E] p-6 sm:p-8 text-center shadow-2xl backdrop-blur-md">
          {/* Brand Wordmark Tag */}
          <div className="inline-flex items-center gap-2 rounded-full border border-red-800/60 bg-red-950/40 px-3.5 py-1 text-xs font-extrabold tracking-wider uppercase text-red-400 mb-3">
            <span>CINEVOX</span>
          </div>

          {/* Main Title */}
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
            Tenha acesso a um mundo de entretenimento!
          </h1>

          {/* Red Highlight Callout */}
          <p className="mt-3 text-base sm:text-lg font-bold text-red-500 leading-snug">
            {PRODUCT_INFO.heroHighlight}
          </p>

          {/* Price Presentation */}
          <div className="mt-6 flex flex-col items-center justify-center pt-5 border-t border-slate-800/80">
            <span className="text-4xl sm:text-5xl font-black text-white tracking-tight">
              {PRODUCT_INFO.priceDisplay}
            </span>
            <span className="mt-2 text-sm font-bold text-emerald-400">
              Pagamento único. Sem mensalidade recorrente.
            </span>
            <span className="mt-1 text-xs text-slate-400">
              Acesso conforme as condições da licença vitalícia.
            </span>
          </div>

          {/* Call to Action Button */}
          <button
            onClick={onCtaClick}
            className="w-full mt-6 py-4 px-6 rounded-xl bg-[#E50914] hover:bg-red-600 active:scale-[0.98] text-white font-extrabold text-base sm:text-lg tracking-wide uppercase shadow-lg shadow-red-950/50 transition-all cursor-pointer whitespace-nowrap"
          >
            {PRODUCT_INFO.heroCta}
          </button>

          {/* Email Fast Delivery Notice */}
          <div className="mt-4 flex items-center justify-center gap-2 rounded-xl border border-emerald-800/50 bg-emerald-950/30 px-3.5 py-2.5 text-xs sm:text-sm text-emerald-400 font-medium">
            <Mail className="h-4 w-4 shrink-0 text-emerald-400" />
            <span>{PRODUCT_INFO.fastDeliveryText}</span>
          </div>
        </div>
      </div>
    </section>
  );
};
