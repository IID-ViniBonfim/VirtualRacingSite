/**
 * Configuração central da casa. Altere aqui nome, logo, WhatsApp e Instagram.
 */
import logoUrl from "@/assets/virtual-racing-logo.png";

export const SITE = {
  name: "Brasília Virtual Racing",
  shortName: "Virtual Racing",
  description:
    "Lan house gamer em Brasília: cockpits e simuladores de corrida, PC gamer, PlayStation 5 e Nintendo Switch. Pague por hora e jogue o que quiser.",
  logoUrl,
  /** Número oficial no formato internacional, apenas dígitos. */
  whatsappNumber: "5561984041221",
  whatsappDisplay: "+55 (61) 98404-1221",
  /** @ do Instagram sem "@". Deixe vazio até o perfil oficial ser confirmado. */
  instagramHandle: "bsb.virtualracing",
  city: "Brasília – DF",
  /** Valor da hora de jogo, em reais. */
  pricePerHour: 20,
};

export const HOUR_PRICE_LABEL = `R$ ${SITE.pricePerHour}/hora`;

export const WHATSAPP_GENERAL_MESSAGE =
  "Olá! Acessei o site da Brasília Virtual Racing e gostaria de reservar um horário para jogar.";

export function whatsappLink(message: string = WHATSAPP_GENERAL_MESSAGE) {
  return `https://wa.me/${SITE.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function gameWhatsappMessage(itemName: string) {
  return `Olá! Quero reservar um horário para jogar ${itemName} na Brasília Virtual Racing. Poderia me passar a disponibilidade?`;
}

export function instagramUrl() {
  return SITE.instagramHandle ? `https://instagram.com/${SITE.instagramHandle}` : null;
}

export const NAV = [
  { to: "/", label: "Início" },
  { to: "/cockpit-gamer", label: "Cockpit Gamer" },
  { to: "/jogos-de-corrida", label: "Jogos de Corrida" },
  { to: "/pc-gamer", label: "PC Gamer" },
  { to: "/nintendo-switch", label: "Nintendo Switch" },
  { to: "/playstation-5", label: "PlayStation 5" },
  { to: "/gta-vi", label: "GTA VI" },
  { to: "/precos", label: "Preços" },
  { to: "/contato", label: "Contato" },
] as const;
