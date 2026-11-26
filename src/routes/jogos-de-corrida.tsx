import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/store/CategoryPage";
import { seo } from "@/lib/seo";
import racing from "@/assets/racing.jpg";

export const Route = createFileRoute("/jogos-de-corrida")({
  head: () => seo("Jogos de Corrida", "Jogue Fórmula 1, simuladores, corridas de rua, drift, rally, arcade e automobilismo no PC, PS5 e Switch."),
  component: () => (
    <CategoryPage category="corrida" image={racing} eyebrow="Velocidade em todas as plataformas" title="Jogos de Corrida" groupLabel="Estilo de jogo"
      intro="Fórmula 1, simuladores, rua, drift, rally e arcade. Escolha seu estilo e acelere — tudo incluso na hora de jogo." />
  ),
});
