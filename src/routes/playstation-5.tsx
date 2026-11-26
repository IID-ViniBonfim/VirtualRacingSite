import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/store/CategoryPage";
import { seo } from "@/lib/seo";
import consoles from "@/assets/consoles.jpg";

export const Route = createFileRoute("/playstation-5")({
  head: () => seo("PlayStation 5", "Jogue no PlayStation 5 e PS5 Slim, com controles DualSense, jogos e headsets disponíveis na casa."),
  component: () => (
    <CategoryPage category="ps5" image={consoles} eyebrow="Nova geração" title="PlayStation 5" groupLabel="Disponíveis"
      intro="Consoles, controles DualSense, jogos e headsets do universo PlayStation prontos para a sua partida." />
  ),
});
