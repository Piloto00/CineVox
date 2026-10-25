import React, { useState } from "react";
import {
  X,
  Lock,
  ShieldCheck,
  CheckCircle2,
  ExternalLink,
  QrCode,
  CreditCard,
  FileText,
  Copy,
  Check,
} from "lucide-react";
import { PRODUCT_INFO } from "../data/content";

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  configuredCheckoutUrl: string;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  configuredCheckoutUrl,
}) => {
  const [paymentMethod, setPaymentMethod] = useState<"pix" | "card" | "boleto">("pix");
  const [customerName, setCustomerName] = useState("");
  const [customerEmail, setCustomerEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderCompleted, setOrderCompleted] = useState(false);
  const [copiedPix, setCopiedPix] = useState(false);

  if (!isOpen) return null;

  const mockPixCode = "00020126580014br.gov.bcb.pix0136cinevox-47-reais-pix-key-digital520400005303986540547.005802BR5925CineVox Entretenimento6009Sao Paulo62070503***6304E8A2";

  const handleCopyPix = () => {
    navigator.clipboard.writeText(mockPixCode);
    setCopiedPix(true);
    setTimeout(() => setCopiedPix(false), 2500);
  };

  const handleSimulateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!customerEmail) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setOrderCompleted(true);
    }, 1000);
  };

  const handleGoToExternalCheckout = () => {
    if (configuredCheckoutUrl) {
      window.open(configuredCheckoutUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-lg rounded-2xl border border-slate-800 bg-[#0B0F19] p-6 sm:p-8 shadow-2xl my-8 text-left"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Fechar"
        >
          <X className="h-5 w-5" />
        </button>

        {!orderCompleted ? (
          <div>
            {/* Header */}
            <div className="flex items-center gap-2 mb-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-600 text-white font-bold text-xs">
                CV
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Finalizar Pedido Seguro</h3>
                <p className="text-xs text-slate-400">Ambiente criptografado 256 bits</p>
              </div>
            </div>

            {/* External Checkout Direct Option */}
            {configuredCheckoutUrl && (
              <div className="mt-4 p-3 rounded-xl border border-slate-700 bg-slate-900/80 flex items-center justify-between text-xs">
                <span className="text-slate-300">Prefere pagar via gateway externo?</span>
                <button
                  type="button"
                  onClick={handleGoToExternalCheckout}
                  className="flex items-center gap-1.5 font-bold text-red-400 hover:text-red-300 cursor-pointer"
                >
                  <span>Abrir Checkout</span>
                  <ExternalLink className="h-3.5 w-3.5" />
                </button>
              </div>
            )}

            {/* Order Summary Pill */}
            <div className="mt-4 rounded-xl border border-slate-800 bg-[#07090E] p-4 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-white text-sm">Acesso CineVox</h4>
                <div className="flex items-center gap-1.5 text-xs text-slate-400">
                  <span>De</span>
                  <span className="line-through text-rose-400">{PRODUCT_INFO.originalPriceDisplay}</span>
                  <span>por apenas</span>
                </div>
              </div>
              <div className="text-right">
                <span className="text-xl font-black text-white">{PRODUCT_INFO.priceDisplay}</span>
                <span className="block text-[10px] text-emerald-400 font-semibold bg-emerald-950/70 px-1.5 py-0.5 rounded border border-emerald-900/50">
                  Desconto de R$ 120,00 aplicado
                </span>
              </div>
            </div>

            {/* Payment Method Selector */}
            <div className="mt-5">
              <label className="text-xs font-semibold text-slate-300 uppercase tracking-wider block mb-2">
                Escolha a forma de pagamento:
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setPaymentMethod("pix")}
                  className={`p-3 rounded-xl border text-xs font-semibold flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                    paymentMethod === "pix"
                      ? "border-emerald-500 bg-emerald-950/40 text-emerald-300"
                      : "border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white"
                  }`}
                >
                  <QrCode className="h-4 w-4" />
                  <span>PIX (Instantâneo)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod("card")}
                  className={`p-3 rounded-xl border text-xs font-semibold flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                    paymentMethod === "card"
                      ? "border-red-500 bg-red-950/40 text-red-300"
                      : "border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white"
                  }`}
                >
                  <CreditCard className="h-4 w-4" />
                  <span>Cartão (Até 12x)</span>
                </button>

                <button
                  type="button"
                  onClick={() => setPaymentMethod("boleto")}
                  className={`p-3 rounded-xl border text-xs font-semibold flex flex-col items-center gap-1.5 transition-all cursor-pointer ${
                    paymentMethod === "boleto"
                      ? "border-blue-500 bg-blue-950/40 text-blue-300"
                      : "border-slate-800 bg-slate-900/60 text-slate-400 hover:text-white"
                  }`}
                >
                  <FileText className="h-4 w-4" />
                  <span>Boleto Bancário</span>
                </button>
              </div>
            </div>

            {/* Simulated Checkout Form */}
            <form onSubmit={handleSimulateSubmit} className="mt-5 space-y-3">
              <div>
                <label className="text-xs font-medium text-slate-300 block mb-1">
                  Seu Nome Completo
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ex: João da Silva"
                  value={customerName}
                  onChange={(e) => setCustomerName(e.target.value)}
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-red-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="text-xs font-medium text-slate-300 block mb-1">
                  E-mail para Recebimento do Acesso
                </label>
                <input
                  type="email"
                  required
                  placeholder="seuemail@exemplo.com"
                  value={customerEmail}
                  onChange={(e) => setCustomerEmail(e.target.value)}
                  className="w-full rounded-xl border border-slate-700 bg-slate-900 px-3.5 py-2.5 text-sm text-white placeholder-slate-500 focus:border-red-500 focus:outline-none"
                />
              </div>

              {/* PIX specific code copy */}
              {paymentMethod === "pix" && (
                <div className="p-3 rounded-xl border border-emerald-900/50 bg-emerald-950/20 text-xs space-y-2">
                  <div className="flex items-center justify-between text-emerald-400 font-semibold">
                    <span>Chave PIX Copia e Cola:</span>
                    <button
                      type="button"
                      onClick={handleCopyPix}
                      className="flex items-center gap-1 text-[11px] bg-emerald-900/60 hover:bg-emerald-800 text-white px-2 py-1 rounded cursor-pointer transition-colors"
                    >
                      {copiedPix ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
                      <span>{copiedPix ? "Copiado!" : "Copiar Código"}</span>
                    </button>
                  </div>
                  <p className="font-mono text-[10px] text-slate-400 break-all select-all bg-slate-950 p-2 rounded border border-slate-800">
                    {mockPixCode}
                  </p>
                </div>
              )}

              {/* Action Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 py-3.5 text-base font-bold text-white shadow-lg shadow-red-950/50 hover:from-red-500 hover:to-rose-500 transition-all cursor-pointer disabled:opacity-50"
                >
                  <Lock className="h-4 w-4" />
                  <span>
                    {isSubmitting
                      ? "Processando Pedido..."
                      : `CONFIRMAR ACESSO POR ${PRODUCT_INFO.priceDisplay}`}
                  </span>
                </button>
              </div>

              {/* Security trust badge */}
              <div className="rounded-xl border border-slate-800 bg-slate-900/60 p-2.5 text-[11px] text-slate-300 space-y-1">
                <div className="flex items-center justify-center gap-1.5 text-emerald-400 font-semibold">
                  <ShieldCheck className="h-3.5 w-3.5" />
                  <span>Compra 100% Protegida & Sem Riscos</span>
                </div>
                <p className="text-[10px] text-slate-400 text-center">
                  Garantia incondicional de 7 dias · Pagamento criptografado SSL 256 bits · Zero cobranças futuras
                </p>
              </div>
            </form>
          </div>
        ) : (
          /* Order confirmation state */
          <div className="text-center py-6 space-y-4">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-emerald-950/60 border border-emerald-800 text-emerald-400">
              <CheckCircle2 className="h-8 w-8" />
            </div>

            <h3 className="text-2xl font-extrabold text-white">
              Pedido Confirmado com Sucesso!
            </h3>

            <p className="text-sm text-slate-300 max-w-sm mx-auto leading-relaxed">
              Enviamos os dados de acesso exclusivos e o link de login para{" "}
              <span className="text-white font-semibold font-mono">{customerEmail}</span>.
            </p>

            <div className="rounded-xl border border-slate-800 bg-[#07090E] p-4 text-xs text-slate-400 text-left space-y-1.5">
              <p>
                <strong className="text-white">Produto:</strong> CineVox (Acesso Vitalício)
              </p>
              <p>
                <strong className="text-white">Valor:</strong> R$ 47,00 (Pagamento Único Promocional)
              </p>
              <p>
                <strong className="text-white">Suporte Oficial:</strong> {PRODUCT_INFO.supportEmail} · WhatsApp: {PRODUCT_INFO.supportWhatsapp}
              </p>
            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={onClose}
                className="w-full rounded-xl bg-slate-800 hover:bg-slate-700 py-3 text-sm font-semibold text-white transition-colors cursor-pointer"
              >
                Concluir e Fechar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
