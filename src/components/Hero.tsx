import React from "react";
import { ArrowRight, Sparkles } from "lucide-react";
import { PRODUCT_INFO } from "../data/content";

interface HeroProps {
  onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
  return (
    <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 border-b border-slate-800/60">
      {/* Background ambient lighting effects */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="h-[350px] w-[500px] rounded-full bg-red-600/10 blur-[130px]" />
        <div className="h-[250px] w-[400px] rounded-full bg-blue-600/10 blur-[140px] translate-x-20" />
      </div>

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Subtle editorial kicker */}
        <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-wider text-red-400 uppercase">
          <Sparkles className="h-3.5 w-3.5 text-red-500" />
          <span>Plataforma Digital de Entretenimento</span>
          <span aria-hidden="true" className="text-slate-600">·</span>
          <span className="text-slate-400">Guia & Catálogo Inteligente</span>
        </div>

        {/* Main Headline */}
        <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.18] text-balance max-w-3xl">
          {PRODUCT_INFO.heroHeadline}
        </h1>

        {/* Subtitle */}
        <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl text-balance">
          {PRODUCT_INFO.heroSubtitle}
        </p>

        {/* Price badge container with promotional emphasis */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 p-4 sm:p-5 rounded-2xl border border-red-900/40 bg-slate-900/70 backdrop-blur-sm max-w-lg w-full">
          <div className="flex flex-col items-center sm:items-start">
            <div className="flex items-center gap-2">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">
                Promoção Especial
              </span>
              <span className="text-[11px] font-semibold text-rose-400 line-through">
                {PRODUCT_INFO.originalPriceDisplay}
              </span>
            </div>
            <div className="flex items-baseline gap-2 mt-0.5">
              <span className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                {PRODUCT_INFO.priceDisplay}
              </span>
              <span className="text-xs font-semibold text-emerald-400 bg-emerald-950/70 border border-emerald-800/60 px-2 py-0.5 rounded">
                Pagamento Único
              </span>
              <span className="text-[11px] font-bold text-amber-300 bg-amber-950/50 border border-amber-800/50 px-2 py-0.5 rounded">
                {PRODUCT_INFO.discountSavings}
              </span>
            </div>
          </div>
          <div className="h-8 w-px bg-slate-800 hidden sm:block" />
          <div className="text-xs text-slate-400 leading-tight text-center sm:text-left">
            <p className="text-slate-300 font-medium">Sem mensalidades ou assinaturas</p>
            <p>Liberação imediata no seu e-mail</p>
          </div>
        </div>

        {/* Main Primary CTA Button */}
        <div className="mt-8 w-full sm:w-auto">
          <button
            onClick={onCtaClick}
            className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 px-8 py-4 text-base sm:text-lg font-bold text-white shadow-xl shadow-red-950/50 transition-all duration-200 hover:from-red-500 hover:to-rose-500 hover:shadow-red-800/40 active:scale-[0.98] cursor-pointer whitespace-nowrap"
          >
            <span>{PRODUCT_INFO.heroCta}</span>
            <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
          </button>
        </div>

        {/* Microcopy required by brief */}
        <p className="mt-3 text-xs text-slate-400">
          {PRODUCT_INFO.heroMicrocopy}
        </p>
      </div>
    </section>
  );
};
