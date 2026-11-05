import React from "react";
import { X, ShieldCheck, FileText, Lock, Headphones } from "lucide-react";
import { PRODUCT_INFO } from "../data/content";

export type ModalType = "terms" | "privacy" | "refund" | "support" | null;

interface LegalModalsProps {
  activeModal: ModalType;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalsProps> = ({ activeModal, onClose }) => {
  if (!activeModal) return null;

  const renderContent = () => {
    switch (activeModal) {
      case "terms":
        return (
          <>
            <div className="flex items-center gap-2 text-red-500 mb-2">
              <FileText className="h-5 w-5" />
              <h3 className="text-xl font-bold text-white">Termos de Uso</h3>
            </div>
            <div className="space-y-4 text-sm text-slate-300 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              <p>
                <strong>1. Objeto:</strong> O presente instrumento estabelece as regras e condições para uso da plataforma digital CineVox, que atua como guia e agregador informativo de entretenimento audiovisual, catálogo interativo e fichas técnicas para consulta e orientação do usuário.
              </p>
              <p>
                <strong>2. Acesso e Pagamento:</strong> O acesso é concedido mediante pagamento único no valor total apresentado no checkout de R$ 46,99 (quarenta e seis reais e noventa e nove centavos), sem recorrência de mensalidades ou cobranças automáticas adicionais.
              </p>
              <p>
                <strong>3. Conformidade Legal de Conteúdo:</strong> O CineVox respeita integralmente as legislações de propriedade intelectual e direitos autorais. O serviço opera exclusivamente como indexador, guia de sinopses e exibições autorizadas de trailers promocionais públicos. A plataforma não armazena, hospeda nem distribui transmissões piratas de terceiros protegidas por direitos autorais sem a respectiva licença.
              </p>
              <p>
                <strong>4. Responsabilidades do Usuário:</strong> O comprador compromete-se a utilizar suas credenciais de forma pessoal e intransferível, zelando pela confidencialidade dos dados recebidos após a compra.
              </p>
              <p>
                <strong>5. Suporte Técnico:</strong> Dúvidas operacionais podem ser encaminhadas aos canais oficiais de atendimento informados no ato da entrega do produto.
              </p>
            </div>
          </>
        );

      case "privacy":
        return (
          <>
            <div className="flex items-center gap-2 text-blue-400 mb-2">
              <Lock className="h-5 w-5" />
              <h3 className="text-xl font-bold text-white">Política de Privacidade</h3>
            </div>
            <div className="space-y-4 text-sm text-slate-300 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              <p>
                <strong>1. Compromisso com a Privacidade:</strong> O CineVox está comprometido com a segurança e privacidade das informações de seus clientes em conformidade com a Lei Geral de Proteção de Dados (LGPD - Lei nº 13.709/2018).
              </p>
              <p>
                <strong>2. Dados Coletados:</strong> Durante a compra, coletamos apenas os dados essenciais para o processamento do pagamento e envio dos acessos (nome, e-mail e telefone de contato).
              </p>
              <p>
                <strong>3. Não Compartilhamento:</strong> Não vendemos, alugamos ou repassamos seus dados cadastrais para terceiros, exceto os processadores bancários estritamente necessários para efetivar a transação.
              </p>
              <p>
                <strong>4. Segurança:</strong> Todas as informações trafegam sob rígidos protocolos criptografados SSL de 256 bits, garantindo total confidencialidade.
              </p>
            </div>
          </>
        );

      case "refund":
        return (
          <>
            <div className="flex items-center gap-2 text-emerald-400 mb-2">
              <ShieldCheck className="h-5 w-5" />
              <h3 className="text-xl font-bold text-white">Política de Reembolso e Cancelamento</h3>
            </div>
            <div className="space-y-4 text-sm text-slate-300 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              <p>
                <strong>1. Direito de Arrependimento (Garantia Legal):</strong> Em total conformidade com o Artigo 49 do Código de Defesa do Consumidor (CDC), o cliente tem o prazo de 7 (sete) dias corridos, contados a partir da data de confirmação da compra, para solicitar o cancelamento e reembolso integral do valor pago de R$ 46,99.
              </p>
              <p>
                <strong>2. Procedimento Simples:</strong> Para solicitar o reembolso dentro do prazo de 7 dias, basta enviar um e-mail para <span className="text-white font-mono">{PRODUCT_INFO.supportEmail}</span> com o assunto "Solicitação de Reembolso" informando o número do pedido ou o e-mail cadastrado no ato da compra.
              </p>
              <p>
                <strong>3. Restituição de Valores:</strong> O estorno será efetuado pelo mesmo método de pagamento utilizado na aquisição (PIX ou estorno na fatura do cartão de crédito), sem descontos ou taxas adicionais.
              </p>
            </div>
          </>
        );

      case "support":
        return (
          <>
            <div className="flex items-center gap-2 text-amber-400 mb-2">
              <Headphones className="h-5 w-5" />
              <h3 className="text-xl font-bold text-white">Canal de Atendimento ao Cliente</h3>
            </div>
            <div className="space-y-4 text-sm text-slate-300 leading-relaxed max-h-[60vh] overflow-y-auto pr-2">
              <p>
                Nossa equipe de suporte está pronta para ajudar você com qualquer dúvida sobre acesso, login, navegação ou suporte técnico.
              </p>
              <div className="p-4 rounded-xl border border-slate-800 bg-slate-900/60 space-y-3">
                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-wider block">E-mail Oficial</span>
                  <a href={`mailto:${PRODUCT_INFO.supportEmail}`} className="text-white font-mono hover:text-red-400 transition-colors">
                    {PRODUCT_INFO.supportEmail}
                  </a>
                </div>
                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-wider block">WhatsApp de Suporte</span>
                  <span className="text-white font-mono">
                    {PRODUCT_INFO.supportWhatsapp}
                  </span>
                </div>
                <div>
                  <span className="text-xs text-slate-400 uppercase tracking-wider block">Horário de Atendimento</span>
                  <span className="text-slate-300">
                    Segunda a Sexta das 09h às 18h · Sábado das 09h às 13h
                  </span>
                </div>
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-xl rounded-2xl border border-slate-800 bg-[#0B0F19] p-6 sm:p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-slate-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Fechar janela"
        >
          <X className="h-5 w-5" />
        </button>
        {renderContent()}
        <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 rounded-lg cursor-pointer transition-colors"
          >
            Entendido e Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
