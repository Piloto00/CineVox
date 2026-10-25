import React from "react";
import { ShieldCheck, Lock, Headphones, RefreshCw } from "lucide-react";
import { PRODUCT_INFO } from "../data/content";

export const SecurityGuarantee: React.FC = () => {
  return (
    <section id="garantia" className="py-16 bg-[#07090E] border-t border-slate-800/60">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Item 1: Garantia */}
          <div className="rounded-2xl border border-slate-800 bg-[#0B0F19] p-6 flex flex-col justify-between">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 mb-4 text-emerald-400">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Garantia Incondicional
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Você tem 7 dias corridos para experimentar o CineVox. Se entender que não é o que esperava, devolvemos 100% do seu dinheiro conforme previsto em lei.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-800/80 text-[11px] font-mono text-emerald-400">
              Art. 49 do CDC Garantido
            </div>
          </div>

          {/* Item 2: Pagamento Seguro */}
          <div className="rounded-2xl border border-slate-800 bg-[#0B0F19] p-6 flex flex-col justify-between">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 mb-4 text-blue-400">
                <Lock className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Pagamento Criptografado
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Seus dados financeiros não ficam salvos conosco. As transações são processadas por gateways de pagamento homologados com criptografia SSL 256 bits.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-400">
              PIX · Cartão · Boleto
            </div>
          </div>

          {/* Item 3: Suporte Humano */}
          <div className="rounded-2xl border border-slate-800 bg-[#0B0F19] p-6 flex flex-col justify-between">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 mb-4 text-amber-400">
                <Headphones className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Suporte Oficial
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Equipe pronta para atender você via e-mail e WhatsApp em caso de qualquer dúvida de acesso, reenvio de senha ou instruções técnicas.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-400">
              {PRODUCT_INFO.supportEmail}
            </div>
          </div>

          {/* Item 4: Liberação Instantânea */}
          <div className="rounded-2xl border border-slate-800 bg-[#0B0F19] p-6 flex flex-col justify-between">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 border border-slate-800 mb-4 text-red-400">
                <RefreshCw className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">
                Liberação Automática
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Não precisa esperar dias para acessar. Pagou via PIX ou cartão, o sistema dispara seu link de acesso diretamente na sua caixa postal em instantes.
              </p>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-800/80 text-[11px] font-mono text-slate-400">
              Envio em até 2 minutos
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
