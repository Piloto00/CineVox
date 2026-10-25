import React from "react";
import { MousePointerClick, CreditCard, MailCheck } from "lucide-react";
import { HOW_IT_WORKS_STEPS } from "../data/content";

export const HowItWorks: React.FC = () => {
  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <MousePointerClick className="h-6 w-6 text-red-500" />;
      case 1:
        return <CreditCard className="h-6 w-6 text-red-500" />;
      case 2:
        return <MailCheck className="h-6 w-6 text-red-500" />;
      default:
        return <MousePointerClick className="h-6 w-6 text-red-500" />;
    }
  };

  return (
    <section id="como-funciona" className="py-20 bg-[#07090E] relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs font-semibold tracking-wider text-red-400 uppercase">
            Passo a Passo Transparente
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Como funciona para ter o seu acesso
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Em menos de 3 minutos você já estará pronto para começar a explorar. Sem burocracia ou processos complicados.
          </p>
        </div>

        {/* 3 Steps Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6">
          {HOW_IT_WORKS_STEPS.map((step, idx) => (
            <div
              key={step.step}
              className="relative rounded-2xl border border-slate-800 bg-[#0B0F19] p-6 sm:p-7 flex flex-col justify-between transition-all duration-200 hover:border-slate-700"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 border border-slate-800">
                    {getStepIcon(idx)}
                  </div>
                  <span className="font-mono text-2xl font-black text-slate-500">
                    {step.step}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-4">
                  {step.description}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80 text-xs text-slate-400 font-medium">
                {step.detail}
              </div>
            </div>
          ))}
        </div>

        {/* Explicit clarity callout regarding payment model */}
        <div className="mt-10 rounded-xl border border-emerald-900/50 bg-emerald-950/20 p-5 text-center max-w-3xl mx-auto">
          <p className="text-sm text-emerald-200">
            <span className="font-bold text-emerald-300">Atenção sobre a modalidade de pagamento:</span> O valor promocional de <span className="line-through text-slate-400">R$ 167,00</span> por <span className="font-extrabold text-white">R$ 47,00</span> refere-se a um <span className="font-bold underline decoration-emerald-500 underline-offset-2">pagamento único</span>. Não se trata de uma assinatura mensal. Você paga apenas uma vez pelo acesso aos recursos incluídos nesta oferta.
          </p>
        </div>
      </div>
    </section>
  );
};
