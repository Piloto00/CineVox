import React from "react";
import {
  LayoutDashboard,
  Film,
  Smartphone,
  Search,
  CheckCircle2,
  Tv,
  Laptop,
  Compass,
} from "lucide-react";
import { BENEFITS } from "../data/content";

export const Benefits: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "LayoutDashboard":
        return <LayoutDashboard className="h-6 w-6 text-red-500" />;
      case "Film":
        return <Film className="h-6 w-6 text-red-500" />;
      case "Smartphone":
        return <Smartphone className="h-6 w-6 text-red-500" />;
      case "Search":
        return <Search className="h-6 w-6 text-red-500" />;
      case "CheckCircle2":
        return <CheckCircle2 className="h-6 w-6 text-red-500" />;
      default:
        return <Compass className="h-6 w-6 text-red-500" />;
    }
  };

  return (
    <section id="beneficios" className="py-20 bg-[#07090E] relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto">
          <div className="text-xs font-semibold tracking-wider text-red-400 uppercase">
            Apresentação do Produto
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            O que você realmente recebe ao adquirir o CineVox
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed">
            Sem promessas irreais ou enrolação. Veja exatamente os benefícios práticos e comprovados que você terá em suas mãos assim que seu acesso for liberado.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS.map((item, idx) => (
            <div
              key={item.id}
              className={`rounded-2xl border border-slate-800/90 bg-[#0B0F19] p-6 transition-all duration-200 hover:border-slate-700 hover:bg-[#0D1322] flex flex-col justify-between ${
                idx === 0 ? "lg:col-span-2" : ""
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-950/40 border border-red-900/40 text-red-500">
                    {getIcon(item.iconName)}
                  </div>
                  <span className="text-xs font-mono text-slate-500 uppercase tracking-wider">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 leading-snug">
                  {item.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {idx === 0 && (
                <div className="mt-6 pt-4 border-t border-slate-800/80 flex flex-wrap items-center gap-4 text-xs text-slate-400">
                  <span className="font-semibold text-slate-300">Compatibilidade testada em:</span>
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <Smartphone className="h-3.5 w-3.5 text-slate-400" />
                    <span>Android & iOS</span>
                  </div>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <Laptop className="h-3.5 w-3.5 text-slate-400" />
                    <span>PC & Mac</span>
                  </div>
                  <span aria-hidden="true" className="text-slate-600">·</span>
                  <div className="flex items-center gap-1.5 text-slate-300">
                    <Tv className="h-3.5 w-3.5 text-slate-400" />
                    <span>Smart TVs</span>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Device compatibility banner */}
        <div className="mt-10 rounded-2xl border border-slate-800 bg-gradient-to-r from-slate-900/80 via-[#0B0F19] to-slate-900/80 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-lg font-bold text-white">
              Tudo pronto para você usar em minutos
            </h4>
            <p className="text-sm text-slate-300">
              Não precisa de instalações complexas. Funciona diretamente nos navegadores modernos que você já utiliza diariamente.
            </p>
          </div>
          <div className="flex items-center gap-6 shrink-0 text-xs text-slate-400">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>Sem downloads pesados</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 text-emerald-400" />
              <span>Carregamento instantâneo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
