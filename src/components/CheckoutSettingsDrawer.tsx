import React, { useState } from "react";
import { X, Settings, Link, Check, Globe } from "lucide-react";

interface CheckoutSettingsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  checkoutUrl: string;
  onSaveUrl: (url: string) => void;
  directRedirect: boolean;
  onToggleDirectRedirect: (val: boolean) => void;
}

export const CheckoutSettingsDrawer: React.FC<CheckoutSettingsDrawerProps> = ({
  isOpen,
  onClose,
  checkoutUrl,
  onSaveUrl,
  directRedirect,
  onToggleDirectRedirect,
}) => {
  const [urlInput, setUrlInput] = useState(checkoutUrl);
  const [savedSuccess, setSavedSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onSaveUrl(urlInput.trim());
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md rounded-2xl border border-slate-800 bg-[#0B0F19] p-6 shadow-2xl text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white transition-colors cursor-pointer"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-2 mb-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800 text-red-500">
            <Settings className="h-4 w-4" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-white">Configuração do Checkout</h3>
            <p className="text-xs text-slate-400">Personalize seu link de vendas</p>
          </div>
        </div>

        <form onSubmit={handleSave} className="mt-4 space-y-4">
          <div>
            <label className="text-xs font-semibold text-slate-300 block mb-1">
              Link de Checkout (Kiwify, Hotmart, Eduzz, Greenn, Braip, etc.)
            </label>
            <div className="relative">
              <Link className="absolute left-3 top-2.5 h-4 w-4 text-slate-500" />
              <input
                type="url"
                placeholder="https://pay.kiwify.com.br/seu-link"
                value={urlInput}
                onChange={(e) => setUrlInput(e.target.value)}
                className="w-full rounded-xl border border-slate-700 bg-slate-900 pl-9 pr-3 py-2 text-xs text-white placeholder-slate-500 focus:border-red-500 focus:outline-none"
              />
            </div>
            <span className="text-[11px] text-slate-500 mt-1 block">
              Deixe em branco para usar o simulador demonstrativo interno.
            </span>
          </div>

          <div className="flex items-center justify-between p-3 rounded-xl border border-slate-800 bg-slate-900/60">
            <div>
              <span className="text-xs font-semibold text-slate-200 block">
                Redirecionar diretamente no clique
              </span>
              <span className="text-[11px] text-slate-400">
                Abre o link externo de checkout imediatamente ao clicar nos botões de compra.
              </span>
            </div>
            <input
              type="checkbox"
              checked={directRedirect}
              onChange={(e) => onToggleDirectRedirect(e.target.checked)}
              className="h-4 w-4 rounded border-slate-700 text-red-600 focus:ring-red-500 cursor-pointer"
            />
          </div>

          <div className="p-3 rounded-xl border border-blue-900/50 bg-blue-950/20 text-xs text-blue-300 space-y-1">
            <div className="flex items-center gap-1.5 font-semibold text-blue-200">
              <Globe className="h-3.5 w-3.5" />
              <span>Preparado para Domínio Próprio</span>
            </div>
            <p className="text-[11px] text-blue-300/80">
              O site está 100% pronto para publicação em domínio próprio com carregamento ultra-rápido e compatibilidade total para celulares.
            </p>
          </div>

          <div className="pt-2 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-xs text-slate-300 hover:text-white cursor-pointer"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="flex items-center gap-1.5 rounded-lg bg-red-600 hover:bg-red-500 px-4 py-2 text-xs font-bold text-white transition-colors cursor-pointer"
            >
              {savedSuccess ? (
                <>
                  <Check className="h-3.5 w-3.5" />
                  <span>Salvo!</span>
                </>
              ) : (
                <span>Salvar Configuração</span>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
