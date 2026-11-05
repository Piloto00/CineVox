import React, { useState } from "react";
import { Film, Menu, X, ArrowRight } from "lucide-react";

interface HeaderProps {
  onCtaClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onCtaClick }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-[#07090E]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Brand Wordmark (Single text element with icon mark) */}
        <a
          href="#"
          className="flex items-center gap-2 text-xl font-extrabold tracking-tight text-white whitespace-nowrap shrink-0 transition-opacity hover:opacity-90"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-red-600 to-rose-700 text-white shadow-sm">
            <Film className="h-4 w-4" />
          </div>
          <span>
            Cine<span className="text-red-500">Vox</span>
          </span>
        </a>

        {/* Zone 2: 4-5 Clean single-line text links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <button
            onClick={() => scrollTo("plataforma-por-dentro")}
            className="hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            Por Dentro
          </button>
          <button
            onClick={() => scrollTo("beneficios")}
            className="hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            Recursos
          </button>
          <button
            onClick={() => scrollTo("seguranca-anti-golpe")}
            className="hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0 flex items-center gap-1.5 text-emerald-400 font-semibold"
          >
            <span>Segurança</span>
          </button>
          <button
            onClick={() => scrollTo("como-funciona")}
            className="hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            Como Funciona
          </button>
          <button
            onClick={() => scrollTo("oferta")}
            className="hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            Oferta
          </button>
          <button
            onClick={() => scrollTo("faq")}
            className="hover:text-white transition-colors cursor-pointer whitespace-nowrap shrink-0"
          >
            Dúvidas
          </button>
        </nav>

        {/* Zone 3: 1 Primary Action */}
        <div className="flex items-center gap-3 shrink-0">
          <button
            onClick={onCtaClick}
            className="hidden sm:inline-flex items-center justify-center gap-2 rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white shadow-md transition-all hover:bg-red-500 hover:shadow-red-900/40 cursor-pointer whitespace-nowrap shrink-0 active:scale-95"
          >
            <span>Acessar Agora</span>
            <ArrowRight className="h-4 w-4" />
          </button>

          {/* Mobile hamburger toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden flex h-10 w-10 items-center justify-center rounded-lg border border-slate-800 text-slate-300 hover:bg-slate-800/60 transition-colors"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-800 bg-[#0B0F19] px-4 py-4 space-y-3">
          <button
            onClick={() => scrollTo("plataforma-por-dentro")}
            className="block w-full text-left py-2 text-sm font-medium text-slate-300 hover:text-white"
          >
            Por Dentro da Plataforma
          </button>
          <button
            onClick={() => scrollTo("beneficios")}
            className="block w-full text-left py-2 text-sm font-medium text-slate-300 hover:text-white"
          >
            Recursos e Benefícios
          </button>
          <button
            onClick={() => scrollTo("seguranca-anti-golpe")}
            className="block w-full text-left py-2 text-sm font-medium text-emerald-400 hover:text-emerald-300 font-semibold"
          >
            Segurança & Transparência
          </button>
          <button
            onClick={() => scrollTo("como-funciona")}
            className="block w-full text-left py-2 text-sm font-medium text-slate-300 hover:text-white"
          >
            Como Funciona
          </button>
          <button
            onClick={() => scrollTo("oferta")}
            className="block w-full text-left py-2 text-sm font-medium text-slate-300 hover:text-white"
          >
            Oferta Especial (R$ 46,99)
          </button>
          <button
            onClick={() => scrollTo("faq")}
            className="block w-full text-left py-2 text-sm font-medium text-slate-300 hover:text-white"
          >
            Dúvidas Frequentes
          </button>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onCtaClick();
              }}
              className="w-full flex items-center justify-center gap-2 rounded-lg bg-red-600 py-3 text-sm font-bold text-white shadow-lg active:scale-95"
            >
              <span>QUERO ACESSAR AGORA</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
