import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ_LIST } from "../data/content";

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>("included");

  const toggle = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-20 bg-[#090C14] border-t border-slate-800/60 relative">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="text-xs font-semibold tracking-wider text-red-400 uppercase">
            Tire Suas Dúvidas
          </div>
          <h2 className="mt-3 text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
            Perguntas Frequentes
          </h2>
          <p className="mt-4 text-base text-slate-300">
            Respostas claras e transparentes para as dúvidas mais comuns sobre o CineVox.
          </p>
        </div>

        {/* Accordion Container */}
        <div className="mt-12 space-y-4">
          {FAQ_LIST.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className="rounded-2xl border border-slate-800 bg-[#0B0F19] overflow-hidden transition-colors duration-150"
              >
                <button
                  type="button"
                  onClick={() => toggle(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer hover:bg-slate-800/40 transition-colors"
                >
                  <span className="text-base sm:text-lg font-bold text-white pr-4">
                    {faq.question}
                  </span>
                  <div
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-slate-900 border border-slate-800 text-slate-300 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-red-400" : ""
                    }`}
                  >
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-sm text-slate-300 leading-relaxed border-t border-slate-800/50 pt-4">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
