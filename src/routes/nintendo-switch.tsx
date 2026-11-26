import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/store/CategoryPage";
import { seo } from "@/lib/seo";
import consoles from "@/assets/consoles.jpg";

export const Route = createFileRoute("/nintendo-switch")({
  head: () => seo("Nintendo Switch", "Jogue no Nintendo Switch, OLED e Lite, com jogos e controles disponíveis na casa."),
  component: () => (
    <CategoryPage category="switch" image={consoles} eyebrow="Diversão em qualquer lugar" title="Nintendo Switch" groupLabel="Disponíveis"
      intro="Consoles, jogos e controles para jogar na TV ou no modo portátil, sozinho ou com a galera." />
  ),
});
