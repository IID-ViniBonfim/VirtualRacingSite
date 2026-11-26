import { createFileRoute } from "@tanstack/react-router";
import { CategoryPage } from "@/components/store/CategoryPage";
import { seo } from "@/lib/seo";
import pc from "@/assets/pc-gear.jpg";

export const Route = createFileRoute("/pc-gamer")({
  head: () => seo("PC Gamer", "Estações de PC gamer de entrada a alto desempenho, com monitores, teclados, mouses e headsets profissionais."),
  component: () => (
    <CategoryPage category="pc" image={pc} eyebrow="Alto desempenho" title="PC Gamer" groupLabel="Tipo de estação"
      intro="Estações de PC gamer prontas para você sentar e jogar, do e-sports em Full HD ao 4K com streaming." />
  ),
});
