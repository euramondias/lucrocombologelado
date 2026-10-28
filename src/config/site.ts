// Edite aqui as informações configuráveis da página de vendas.

/** Endereço do checkout. Substitua pelo link real da sua plataforma de pagamento. */
export const CHECKOUT_URL = "https://seu-checkout.com/lucro-com-bolo-gelado";

export const PRICE = "27,00";

export const CONTACT = {
  email: "contato@seudominio.com.br",
  whatsapp: "", // ex.: "5511999999999" (deixe vazio para ocultar)
};

export const LEGAL_LINKS = {
  privacy: "#", // URL da Política de Privacidade
  terms: "#", // URL dos Termos de Uso
};

/** Mude para true apenas se a garantia de 7 dias estiver realmente disponível. */
export const HAS_7_DAY_GUARANTEE = false;

/**
 * Depoimentos. Substitua pelos depoimentos reais (com autorização).
 * Enquanto `isExample` for true, o card exibe o selo "Exemplo".
 */
export const TESTIMONIALS = [
  { name: "Nome da aluna", location: "Cidade – UF", text: "Espaço reservado para um depoimento real de aluna, inserido após autorização.", rating: 5, photo: "", isExample: true },
  { name: "Nome da aluna", location: "Cidade – UF", text: "Espaço reservado para um depoimento real de aluna, inserido após autorização.", rating: 5, photo: "", isExample: true },
  { name: "Nome da aluna", location: "Cidade – UF", text: "Espaço reservado para um depoimento real de aluna, inserido após autorização.", rating: 5, photo: "", isExample: true },
];
