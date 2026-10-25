import React from "react";
import { Film, ShieldCheck, Mail, MessageSquare } from "lucide-react";
import { PRODUCT_INFO } from "../data/content";
import { ModalType } from "./LegalModals";

interface FooterProps {
  onOpenModal: (type: ModalType) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenModal }) => {
  return (
    <footer className="border-t border-slate-800 bg-[#05070A] py-12 text-slate-400 text-xs">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-slate-800/80">
          {/* Brand & Mission */}
          <div className="md:col-span-5 space-y-3">
            <div className="flex items-center gap-2 text-lg font-bold text-white">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-red-600 text-white">
                <Film className="h-3.5 w-3.5" />
              </div>
              <span>
                Cine<span className="text-red-500">Vox</span>
              </span>
            </div>
            <p className="text-xs text-slate-400 max-w-sm leading-relaxed">
              Plataforma digital de entretenimento criada para organizar, catalogar e facilitar a busca pelo seu próximo filme ou série favorita de forma simples e descomplicada.
            </p>
            <div className="text-[11px] text-slate-400 space-y-1 pt-1">
              <p className="text-white font-medium">{PRODUCT_INFO.companyName}</p>
              <p className="text-slate-400">Atendimento ao cliente de {PRODUCT_INFO.businessHours}.</p>
            </div>
          </div>

          {/* Legal Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Informações Legais & Políticas
            </span>
            <ul className="space-y-2">
              <li>
                <button
                  type="button"
                  onClick={() => onOpenModal("terms")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Termos de Uso do Serviço
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenModal("privacy")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Política de Privacidade (LGPD)
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onOpenModal("refund")}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Política de Cancelamento e Reembolso
                </button>
              </li>
            </ul>
          </div>

          {/* Support Channels */}
          <div className="md:col-span-3 space-y-3">
            <span className="text-xs font-semibold uppercase tracking-wider text-slate-300">
              Canais de Atendimento
            </span>
            <div className="space-y-2">
              <a
                href={`mailto:${PRODUCT_INFO.supportEmail}`}
                className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors"
              >
                <Mail className="h-3.5 w-3.5 text-red-400" />
                <span className="font-mono text-xs">{PRODUCT_INFO.supportEmail}</span>
              </a>
              <div className="flex items-center gap-2 text-slate-300">
                <MessageSquare className="h-3.5 w-3.5 text-emerald-400" />
                <span className="font-mono text-xs">{PRODUCT_INFO.supportWhatsapp}</span>
              </div>
              <button
                type="button"
                onClick={() => onOpenModal("support")}
                className="inline-flex items-center gap-1.5 text-xs text-red-400 hover:text-red-300 transition-colors pt-1 cursor-pointer font-medium"
              >
                <span>Ver detalhes de atendimento</span>
                <span aria-hidden="true">&rarr;</span>
              </button>
            </div>
          </div>
        </div>

        {/* Disclaimer & Copyright */}
        <div className="pt-8 space-y-4 text-center md:text-left md:flex md:items-center md:justify-between">
          <p className="text-[11px] text-slate-500 max-w-2xl leading-relaxed">
            Aviso Legal: O CineVox é um guia e catálogo interativo de organização de entretenimento. Não incentivamos a pirataria. Todas as informações, sinopses e fichas técnicas são de caráter informativo e os materiais audiovisuais exibidos respeitam os direitos de distribuição dos respectivos detentores de direitos autorais.
          </p>
          <div className="flex items-center justify-center md:justify-end gap-2 text-[11px] text-slate-500 shrink-0">
            <ShieldCheck className="h-4 w-4 text-emerald-500" />
            <span>© {new Date().getFullYear()} CineVox. Todos os direitos reservados.</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
