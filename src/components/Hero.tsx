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
          {/* Main Title */}
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
            {PRODUCT_INFO.heroHeadline}
          </h1>

          {/* Red Highlight Callout */}
          <p className="mt-3 text-lg sm:text-xl font-bold text-red-500 leading-snug">
            {PRODUCT_INFO.heroHighlight}
          </p>

          {/* Description */}
          <p className="mt-3 text-sm sm:text-base text-slate-300 leading-relaxed max-w-sm mx-auto">
            {PRODUCT_INFO.heroSubtitle}
          </p>

          {/* Price */}
          <div className="mt-6 flex flex-col items-center justify-center">
            <span className="text-3xl sm:text-4xl font-black text-white tracking-tight">
              {PRODUCT_INFO.priceDisplay}
            </span>
            <span className="mt-1 text-xs font-bold uppercase tracking-widest text-slate-300">
              {PRODUCT_INFO.lifetimeAccess}
            </span>
            <span className="mt-1.5 text-xs text-emerald-400 font-semibold">
              Total no checkout: R$ 46,99 em pagamento único
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
