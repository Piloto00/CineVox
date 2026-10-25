import React from "react";
import {
  Zap,
  Ban,
  Lock,
  ShieldCheck,
  CheckCircle,
  Headphones,
} from "lucide-react";
import { TRUST_PILLARS, PRODUCT_INFO } from "../data/content";

export const AntiScamTrust: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Zap":
        return <Zap className="h-5 w-5 text-amber-400" />;
      case "Ban":
        return <Ban className="h-5 w-5 text-red-400" />;
      case "Lock":
        return <Lock className="h-5 w-5 text-blue-400" />;
      case "ShieldCheck":
        return <ShieldCheck className="h-5 w-5 text-emerald-400" />;
      case "CheckCircle":
        return <CheckCircle className="h-5 w-5 text-purple-400" />;
      case "Headphones":
        return <Headphones className="h-5 w-5 text-amber-400" />;
      default:
        return <ShieldCheck className="h-5 w-5 text-emerald-400" />;
    }
  };

  return (
    <section id="seguranca-anti-golpe" className="py-20 bg-[#07090E] border-t border-slate-800/70 relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-800/80 bg-emerald-950/40 px-3.5 py-1 text-xs font-semibold text-emerald-400 mb-3">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
            <span>Transparência Total & Compra Segura</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Sua compra é protegida do início ao fim
          </h2>

          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Aqui você tem total clareza sobre o que está adquirindo: pagamento único, liberação imediata das credenciais e garantia incondicional de devolução.
          </p>
        </div>

        {/* 6 Trust Pillars Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TRUST_PILLARS.map((pillar) => (
            <div
              key={pillar.id}
              className="rounded-2xl border border-slate-800 bg-[#0B0F19] p-6 flex flex-col justify-between transition-all duration-200 hover:border-slate-700 hover:bg-[#0E1424]"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-900 border border-slate-800">
                    {getIcon(pillar.iconName)}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400 uppercase tracking-wider bg-slate-900 px-2.5 py-0.5 rounded border border-slate-800">
                    {pillar.badge}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-white mb-1">
                  {pillar.title}
                </h3>
                <p className="text-xs font-semibold text-slate-400 mb-3">
                  {pillar.subtitle}
                </p>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
