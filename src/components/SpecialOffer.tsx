import React from "react";
import { ArrowRight, Check, ShieldCheck, Zap, Lock, CreditCard } from "lucide-react";
import { PRODUCT_INFO } from "../data/content";

interface SpecialOfferProps {
  onCtaClick: () => void;
}

export const SpecialOffer: React.FC<SpecialOfferProps> = ({ onCtaClick }) => {
  return (
    <section id="oferta" className="py-20 bg-gradient-to-b from-[#07090E] via-[#0D1220] to-[#07090E] border-t border-slate-800/80 relative">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Highlight Card */}
        <div className="relative rounded-3xl border border-red-900/60 bg-[#0A0E1A] p-6 sm:p-10 lg:p-12 shadow-2xl overflow-hidden">
          {/* Ambient Corner Glow */}
          <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-red-600/20 blur-[90px]" />
          <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-blue-600/15 blur-[90px]" />

          <div className="relative text-center">
            {/* Header Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-red-800/80 bg-red-950/40 px-3.5 py-1 text-xs font-semibold text-red-400 mb-4">
              <Zap className="h-3.5 w-3.5 text-red-400" />
              <span>Oferta Direta e Transparente</span>
            </div>

            {/* Required Headline */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {PRODUCT_INFO.specialOfferHeadline}
            </h2>

            <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-xl mx-auto">
              {PRODUCT_INFO.specialOfferSubtitle}
            </p>

            {/* Price Box */}
            <div className="mt-8 rounded-2xl border border-slate-800 bg-[#07090E]/90 p-6 sm:p-8 max-w-lg mx-auto">
              <div className="flex items-center justify-center gap-2">
                <span className="text-xs font-mono uppercase tracking-widest text-slate-400">
                  Preço Regular:
                </span>
                <span className="text-base font-bold text-rose-400 line-through">
                  {PRODUCT_INFO.originalPriceDisplay}
                </span>
              </div>

              <div className="mt-2 flex items-baseline justify-center gap-2">
                <span className="text-xs text-slate-400">Por apenas</span>
                <span className="text-4xl sm:text-5xl font-black tracking-tight text-white">
                  {PRODUCT_INFO.priceDisplay}
                </span>
              </div>

              <div className="mt-2 inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 border border-emerald-800/60 text-xs font-bold text-emerald-300">
                <ShieldCheck className="h-4 w-4 text-emerald-400" />
                <span>PAGAMENTO ÚNICO · ECONOMIA DE R$ 120,01</span>
              </div>

              <div className="mt-1 text-xs font-semibold text-emerald-400">
                Total apresentado no checkout: R$ 46,99
              </div>

              {/* Inclusions checklist */}
              <div className="mt-6 pt-6 border-t border-slate-800/80 text-left space-y-3">
                <div className="flex items-start gap-3 text-sm text-slate-200">
                  <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-red-950 text-red-400 border border-red-800/60">
                    <Check className="h-2.5 w-2.5" />
                  </div>
                  <span>Acesso vitalício e sem mensalidades ao catálogo e recursos do CineVox</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-200">
                  <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-red-950 text-red-400 border border-red-800/60">
                    <Check className="h-2.5 w-2.5" />
                  </div>
                  <span>Fichas técnicas completas com sinopses e trailers públicos oficiais</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-200">
                  <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-red-950 text-red-400 border border-red-800/60">
                    <Check className="h-2.5 w-2.5" />
                  </div>
                  <span>Compatível com Celulares, Computadores, Tablets e Smart TVs</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-200">
                  <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800/60">
                    <Check className="h-2.5 w-2.5" />
                  </div>
                  <span>Receba as instruções de acesso por e-mail após a confirmação do pagamento</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-200">
                  <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-emerald-950 text-emerald-400 border border-emerald-800/60">
                    <Check className="h-2.5 w-2.5" />
                  </div>
                  <span>Garantia de 7 dias com devolução de 100% do valor caso solicite</span>
                </div>
                <div className="flex items-start gap-3 text-sm text-slate-200">
                  <div className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-red-950 text-red-400 border border-red-800/60">
                    <Check className="h-2.5 w-2.5" />
                  </div>
                  <span>Suporte humanizado por WhatsApp e e-mail em horário comercial</span>
                </div>
              </div>

              {/* Purchase Button */}
              <div className="mt-8">
                <button
                  onClick={onCtaClick}
                  className="w-full group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 px-6 py-4 text-base sm:text-lg font-bold text-white shadow-xl shadow-red-950/60 transition-all duration-200 hover:from-red-500 hover:to-rose-500 active:scale-[0.98] cursor-pointer whitespace-nowrap"
                >
                  <Lock className="h-5 w-5 text-white/90" />
                  <span>{PRODUCT_INFO.heroCta}</span>
                  <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>

              {/* Payment methods badges */}
              <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-xs text-slate-400">
                <div className="flex items-center gap-1.5">
                  <CreditCard className="h-3.5 w-3.5 text-slate-400" />
                  <span>Cartão até 12x</span>
                </div>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span className="text-emerald-400 font-medium">PIX Imediato</span>
                <span aria-hidden="true" className="text-slate-600">·</span>
                <span>Boleto Bancário</span>
              </div>

              {/* Fast email delivery notice */}
              <div className="mt-4 pt-3 border-t border-slate-800/60 flex items-center justify-center gap-2 text-xs text-emerald-400 font-medium">
                <Zap className="h-3.5 w-3.5 text-emerald-400 shrink-0" />
                <span>{PRODUCT_INFO.fastDeliveryText}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
