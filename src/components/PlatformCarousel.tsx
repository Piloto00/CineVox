import React, { useState, useEffect, useRef } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Tv,
  Film,
  Sparkles,
  Maximize2,
  X,
  Play,
  CheckCircle2,
} from "lucide-react";
import { trackPixelCustom } from "../utils/pixel";

interface SlideData {
  id: string;
  title: string;
  badge: string;
  description: string;
  image: string;
  tagline: string;
}

const SLIDES: SlideData[] = [
  {
    id: "filmes-series",
    badge: "Filmes & Séries",
    title: "Filmes e Séries em Alta",
    tagline: "Verity, Lupin, Dexter e grandes lançamentos on demand",
    description: "Catálogo completo com produções de cinema e séries consagradas, prontas para assistir quando você quiser.",
    image: "/assets/aistudio/IMG_20261105_105652_f4189ea5.jpg",
  },
  {
    id: "tv-ao-vivo",
    badge: "TV Ao Vivo",
    title: "Canais e Transmissões Ao Vivo",
    tagline: "SBT, canais abertos e fechados em tempo real",
    description: "Acompanhe programação ao vivo diretamente no app, além da lista 'Continue assistindo' para retomar de onde parou.",
    image: "/assets/aistudio/IMG_20261105_105717_c18ccc26.jpg",
  },
  {
    id: "doramas",
    badge: "Doramas",
    title: "Doramas e Séries Asiáticas",
    tagline: "Amor Disfarçado, A Noiva da Presilha Dourada e muito mais",
    description: "Espaço dedicado para os amantes de doramas com episódios completos, legendados e organizados por temporada.",
    image: "/assets/aistudio/IMG_20261105_105745_d5d58177.jpg",
  },
  {
    id: "animes",
    badge: "Animes & Animações",
    title: "Animes e Produções 2026",
    tagline: "Baki-Dou, Star Wars Visions e novidades de animação",
    description: "Seção de animes atualizada com lançamentos recentes para maratonar sem travar no celular ou na TV.",
    image: "/assets/aistudio/IMG_20261105_105732_830820cc.jpg",
  },
];

interface PlatformCarouselProps {
  onCtaClick?: () => void;
}

export const PlatformCarousel: React.FC<PlatformCarouselProps> = ({ onCtaClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [fullscreenImage, setFullscreenImage] = useState<string | null>(null);
  const touchStartX = useRef<number | null>(null);

  const currentSlide = SLIDES[currentIndex];

  // Auto-advance slides every 5 seconds unless paused
  useEffect(() => {
    if (isPaused || fullscreenImage) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isPaused, fullscreenImage]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    trackPixelCustom(
      "Carousel_Slide_Changed",
      {
        slide_id: SLIDES[index].id,
        slide_title: SLIDES[index].title,
      },
      2000
    );
  };

  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % SLIDES.length;
    goToSlide(nextIdx);
  };

  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + SLIDES.length) % SLIDES.length;
    goToSlide(prevIdx);
  };

  // Touch swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (diff > 50) {
      handleNext();
    } else if (diff < -50) {
      handlePrev();
    }
    touchStartX.current = null;
  };

  return (
    <section
      id="plataforma-por-dentro"
      className="py-16 md:py-24 bg-[#07090E] border-b border-slate-800/60 relative overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Background ambient lighting */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-40">
        <div className="h-[400px] w-[600px] rounded-full bg-red-600/10 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 rounded-full border border-red-800/60 bg-red-950/40 px-3.5 py-1 text-xs font-semibold text-red-400 mb-3">
            <Sparkles className="h-3.5 w-3.5 text-red-400" />
            <span>Telas Reais do Aplicativo</span>
          </div>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white leading-tight">
            Veja como é a plataforma por dentro
          </h2>

          <p className="mt-3 text-sm sm:text-base text-slate-300 max-w-xl mx-auto leading-relaxed">
            Interface limpa, moderna e 100% em português. Explore o catálogo de filmes, séries, doramas, animes e canais ao vivo.
          </p>
        </div>

        {/* Category Tabs for Fast Switching */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {SLIDES.map((slide, idx) => {
            const isActive = idx === currentIndex;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => goToSlide(idx)}
                className={`px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap ${
                  isActive
                    ? "bg-red-600 text-white shadow-md shadow-red-950/50"
                    : "bg-slate-900/80 text-slate-400 border border-slate-800 hover:text-white hover:border-slate-700"
                }`}
              >
                {slide.badge}
              </button>
            );
          })}
        </div>

        {/* Carousel Showcase Stage */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left/Center: Phone Mockup Frame */}
          <div className="lg:col-span-7 flex justify-center">
            <div
              className="relative w-full max-w-[290px] sm:max-w-[320px] rounded-[2.5rem] p-3 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-950 shadow-2xl border-4 border-slate-800"
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
            >
              {/* Phone Camera Notch Pill */}
              <div className="absolute top-5 left-1/2 -translate-x-1/2 h-3.5 w-20 bg-black rounded-full z-20 pointer-events-none" />

              {/* Screen Glass Frame */}
              <div className="relative aspect-[9/18] w-full overflow-hidden rounded-[2rem] bg-black shadow-inner group">
                <img
                  key={currentSlide.image}
                  src={currentSlide.image}
                  alt={currentSlide.title}
                  className="h-full w-full object-cover transition-all duration-300 select-none"
                  draggable={false}
                />

                {/* Subtle overlay gradient at the bottom */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />

                {/* Click to expand hover overlay */}
                <button
                  type="button"
                  onClick={() => setFullscreenImage(currentSlide.image)}
                  className="absolute bottom-3 right-3 flex items-center gap-1.5 bg-black/80 hover:bg-slate-900 text-white text-[11px] font-semibold px-2.5 py-1.5 rounded-lg border border-slate-700 backdrop-blur-sm transition-all cursor-pointer"
                  title="Ampliar captura"
                >
                  <Maximize2 className="h-3.5 w-3.5" />
                  <span>Ampliar</span>
                </button>
              </div>
            </div>
          </div>

          {/* Right: Slide Info & Highlights */}
          <div className="lg:col-span-5 flex flex-col justify-center text-center lg:text-left space-y-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-red-400 font-bold">
                {currentSlide.badge} · Tela {currentIndex + 1} de {SLIDES.length}
              </span>
              <h3 className="mt-1 text-2xl sm:text-3xl font-extrabold text-white leading-tight">
                {currentSlide.title}
              </h3>
              <p className="mt-2 text-sm sm:text-base font-semibold text-red-400">
                {currentSlide.tagline}
              </p>
              <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
                {currentSlide.description}
              </p>
            </div>

            {/* Feature Highlights */}
            <div className="pt-4 border-t border-slate-800/80 space-y-2 text-xs text-slate-300 text-left">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Aplicativo leve com reprodução rápida em HD</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Menu de busca rápida e listas por gênero</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>Funciona em Celular, Tablet, TV Box e Computador</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span className="text-emerald-300 font-medium">Receba as instruções de acesso por e-mail após a confirmação do pagamento</span>
              </div>
            </div>

            {/* Controls (Prev / Next & Dots) */}
            <div className="pt-4 flex items-center justify-center lg:justify-start gap-4">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Foto anterior"
                className="h-10 w-10 flex items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-1.5">
                {SLIDES.map((_, dotIdx) => (
                  <button
                    key={dotIdx}
                    type="button"
                    onClick={() => goToSlide(dotIdx)}
                    aria-label={`Ir para foto ${dotIdx + 1}`}
                    className={`h-2.5 rounded-full transition-all duration-200 cursor-pointer ${
                      dotIdx === currentIndex
                        ? "w-7 bg-red-600"
                        : "w-2.5 bg-slate-800 hover:bg-slate-700"
                    }`}
                  />
                ))}
              </div>

              <button
                type="button"
                onClick={handleNext}
                aria-label="Próxima foto"
                className="h-10 w-10 flex items-center justify-center rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            {/* Quick CTA inside carousel area */}
            {onCtaClick && (
              <div className="pt-2">
                <button
                  type="button"
                  onClick={onCtaClick}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl bg-red-600 hover:bg-red-500 py-3 px-6 text-xs sm:text-sm font-bold text-white shadow-lg shadow-red-950/40 transition-all cursor-pointer"
                >
                  <Play className="h-3.5 w-3.5 fill-current" />
                  <span>Quero Acessar o Catálogo Completo</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Lightbox / Fullscreen Modal */}
      {fullscreenImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 backdrop-blur-md"
          onClick={() => setFullscreenImage(null)}
        >
          <div className="relative max-w-md w-full max-h-[90vh] flex flex-col items-center">
            <button
              onClick={() => setFullscreenImage(null)}
              className="absolute -top-12 right-0 flex items-center gap-1.5 text-xs text-slate-300 hover:text-white bg-slate-900/90 px-3 py-1.5 rounded-lg border border-slate-700 cursor-pointer"
            >
              <X className="h-4 w-4" />
              <span>Fechar</span>
            </button>
            <img
              src={fullscreenImage}
              alt="Visualização expandida"
              className="max-h-[80vh] w-auto rounded-2xl border border-slate-800 object-contain shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            />
          </div>
        </div>
      )}
    </section>
  );
};
