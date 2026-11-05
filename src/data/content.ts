export interface BenefitItem {
  id: string;
  title: string;
  description: string;
  badge: string;
  iconName: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

export interface StepItem {
  step: string;
  title: string;
  description: string;
  detail: string;
}

export const PRODUCT_INFO = {
  name: "CineVox",
  originalPriceDisplay: "R$ 167,00",
  priceDisplay: "R$ 46,99",
  checkoutPriceNotice: "Total apresentado no checkout: R$ 46,99",
  discountSavings: "Economia de R$ 120,01",
  paymentModel: "Pagamento Único",
  heroHeadline: "Seu entretenimento em um só lugar!",
  heroHighlight: "Filmes, séries, animes, doramas e TV ao vivo.",
  heroSubtitle: "Tenha acesso ao CineVox com pagamento único e sem mensalidade.",
  heroCta: "QUERO MEU ACESSO AGORA",
  lifetimeAccess: "ACESSO VITALÍCIO",
  fastDeliveryText: "Receba as instruções de acesso por e-mail após a confirmação do pagamento",
  heroMicrocopy: "Acesse os recursos e conteúdos incluídos na oferta.",
  specialOfferHeadline: "Em promoção especial: de R$ 167,00 por apenas R$ 46,99",
  specialOfferSubtitle: "Aproveite esta condição promocional exclusiva para ter acesso completo ao CineVox por uma fração do valor regular (total de R$ 46,99 no checkout, em pagamento único).",
  supportEmail: "suporte@cinevox.digital",
  supportWhatsapp: "+55 (11) 98765-4321",
  companyName: "CineVox Digital",
  businessHours: "Segunda a Sexta, das 09h às 18h | Sábado, das 09h às 13h",
  checkoutUrl: "https://pay.kirvano.com/6594e3c5-a26e-4ee9-b1fc-49dc8128acbd",
};

export interface TrustPillar {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
  iconName: string;
}

export const TRUST_PILLARS: TrustPillar[] = [
  {
    id: "auto-delivery",
    title: "Instruções por E-mail",
    subtitle: "Acesso direto pós-confirmação",
    description: "Receba as instruções de acesso por e-mail após a confirmação do pagamento, com dados de login e suporte imediato.",
    badge: "Envio Automático",
    iconName: "Zap",
  },
  {
    id: "no-rebill",
    title: "Zero Cobranças Futuras",
    subtitle: "Pagamento único garantido",
    description: "Você paga exatamente R$ 46,99 no checkout uma única vez. Não existe assinatura mensal, anuidade oculta nem surpresas na sua fatura.",
    badge: "100% Transparente",
    iconName: "Ban",
  },
  {
    id: "secure-payment",
    title: "Pagamento Criptografado",
    subtitle: "Ambiente protegido SSL 256 bits",
    description: "Seus dados financeiros não ficam expostos nem armazenados. As transações são processadas pelos principais gateways de pagamento do país.",
    badge: "Segurança Total",
    iconName: "Lock",
  },
  {
    id: "cdc-guarantee",
    title: "Garantia de 7 Dias",
    subtitle: "Satisfação garantida ou seu dinheiro de volta",
    description: "Você tem 7 dias corridos para experimentar o CineVox. Se entender que não é o que esperava, basta enviar um e-mail solicitando o reembolso total.",
    badge: "Risco Zero",
    iconName: "ShieldCheck",
  },
  {
    id: "legal-content",
    title: "Acesso Estável e Vitalício",
    subtitle: "Sem links instáveis ou complicados",
    description: "O CineVox é uma plataforma de organização e curadoria de entretenimento para ajudar você e sua família a escolherem o que assistir de forma simples.",
    badge: "Estabilidade",
    iconName: "CheckCircle",
  },
  {
    id: "human-support",
    title: "Suporte Dedicado ao Cliente",
    subtitle: "Atendimento via WhatsApp e e-mail",
    description: "Equipe de prontidão para tirar dúvidas de acesso, navegação ou configurações de uso sempre que você precisar.",
    badge: "Suporte Rápido",
    iconName: "Headphones",
  },
];

export const BENEFITS: BenefitItem[] = [
  {
    id: "intuitive-ui",
    title: "Interface intuitiva e fácil de navegar",
    description: "Layout limpo, direto ao ponto e sem poluição visual. Encontre menus claros e seções desenhadas para você não perder tempo procurando.",
    badge: "Navegação Fluida",
    iconName: "LayoutDashboard",
  },
  {
    id: "organized-catalog",
    title: "Catálogo organizado de filmes e séries",
    description: "Títulos categorizados por gênero, lançamentos, produções mais aclamadas e coleções temáticas para facilitar sua escolha em qualquer momento.",
    badge: "Curadoria Prática",
    iconName: "Film",
  },
  {
    id: "compatible-devices",
    title: "Experiência adaptada para dispositivos compatíveis",
    description: "Acesse confortavelmente no seu smartphone, tablet, computador ou navegadores de Smart TV compatíveis sem travamentos ou complicações.",
    badge: "Multiplataforma",
    iconName: "Smartphone",
  },
  {
    id: "smart-search",
    title: "Facilidade para encontrar opções de entretenimento",
    description: "Ferramenta de busca ágil e filtros por gênero e ano que ajudam você e sua família a decidirem rapidamente o que assistir hoje à noite.",
    badge: "Agilidade",
    iconName: "Search",
  },
  {
    id: "simple-instructions",
    title: "Instruções simples para começar a usar",
    description: "Ao concluir o pedido, você recebe um guia ilustrado passo a passo com orientações claras para navegar e aproveitar todos os recursos.",
    badge: "Acesso Imediato",
    iconName: "CheckCircle2",
  },
];


export const HOW_IT_WORKS_STEPS: StepItem[] = [
  {
    step: "01",
    title: "Clique no botão de compra",
    description: "Selecione o botão 'QUERO ACESSAR AGORA' nesta página e seja direcionado para a página de pagamento criptografada e segura.",
    detail: "Ambiente protegido por certificado SSL de 256 bits.",
  },
  {
    step: "02",
    title: "Conclua o pagamento seguro",
    description: "Escolha entre PIX (com liberação imediata), Cartão de Crédito (com parcelamento em até 12x) ou Boleto Bancário.",
    detail: "Valor promocional: total de R$ 46,99 no checkout (de R$ 167,00), sem mensalidades.",
  },
  {
    step: "03",
    title: "Instruções no seu e-mail",
    description: "Receba as instruções de acesso por e-mail após a confirmação do pagamento, com credenciais e guia rápido para começar a assistir.",
    detail: "Envio automático e imediato após a confirmação do pagamento.",
  },
];

export const FAQ_LIST: FAQItem[] = [
  {
    id: "anti-scam-proof",
    question: "Como sei que este site é seguro e confiável?",
    answer: "Entendemos perfeitamente a sua cautela ao comprar na internet. O CineVox opera com total transparência: o seu pagamento é processado por plataformas seguras com criptografia de ponta a ponta (SSL 256 bits). Além disso, você conta com garantia incondicional de 7 dias com devolução total do seu dinheiro caso não fique satisfeito, e nossa equipe de suporte atende você diretamente pelo WhatsApp.",
  },
  {
    id: "recurring-charges",
    question: "Vou ser cobrado todo mês ou existe alguma taxa oculta?",
    answer: "Não! O valor de R$ 46,99 apresentado no checkout é estritamente em PAGAMENTO ÚNICO. Não se trata de uma assinatura, não há anuidade, nem renovação oculta posterior. Uma vez pago, você nunca mais receberá nenhuma cobrança referente a esta oferta.",
  },
  {
    id: "delivery-speed",
    question: "Como e quando recebo o meu acesso após o pagamento?",
    answer: "O envio é 100% automático. Imediatamente após a compensação do seu pagamento (que no PIX ou Cartão de Crédito acontece em até 90 segundos), nosso sistema envia seus dados de acesso exclusivos e as instruções passo a passo para o endereço de e-mail informado na compra.",
  },
  {
    id: "piracy-legality",
    question: "O CineVox é pirataria ou lista de IPTV que vai parar de funcionar amanhã?",
    answer: "Não! O CineVox não vende listas clandestinas de IPTV ou transmissões ilegais que são derrubadas a qualquer momento por decisões judiciais. O CineVox é uma plataforma de organização e curadoria cinematográfica definitiva: reúne fichas técnicas completas, sinopses detalhadas, trailers oficiais públicos e ferramentas ágeis para você e sua família encontrarem o que assistir sem estresse.",
  },
  {
    id: "mobile-compatibility",
    question: "Posso utilizar no celular, computador e Smart TV?",
    answer: "Sim! A plataforma foi desenvolvida com tecnologia web moderna e responsiva. Você pode acessar com total fluidez em qualquer smartphone (Android ou iPhone), tablet, computador ou navegadores de Smart TVs compatíveis.",
  },
  {
    id: "refund-process",
    question: "Se eu me arrepender, como funciona o estorno do dinheiro?",
    answer: "O processo é simples e transparente: basta enviar um e-mail para suporte@cinevox.digital ou acionar o nosso WhatsApp dentro do prazo legal de 7 dias solicitando o cancelamento. Seu reembolso será solicitado imediatamente junto ao intermediador financeiro e devolvido integralmente sem perguntas desconfortáveis.",
  },
  {
    id: "human-support-contact",
    question: "Existe suporte de verdade para me ajudar com dúvidas?",
    answer: "Sim! Disponibilizamos atendimento humanizado por e-mail e WhatsApp em horário comercial brasileiro. Nossa equipe está sempre à disposição para auxiliar com dúvidas de acesso, login ou navegação.",
  },
];
