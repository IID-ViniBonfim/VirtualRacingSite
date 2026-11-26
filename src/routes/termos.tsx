import { createFileRoute } from "@tanstack/react-router";
import { HOUR_PRICE_LABEL, SITE } from "@/config/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/termos")({
  head: () => seo("Termos de Uso", "Condições de uso do site."),
  component: () => (
    <article className="mx-auto max-w-3xl space-y-4 px-4 py-16 text-muted-foreground">
      <h1 className="text-3xl font-bold uppercase text-foreground">Termos de uso</h1>
      <p>Este site apresenta os jogos e equipamentos da {SITE.name} para uso no local. Itens marcados como “Demo” são exemplos; confirme o acervo disponível pelo WhatsApp.</p>
      <p>A hora de jogo custa {HOUR_PRICE_LABEL} para jogar qualquer jogo disponível na casa. Consulte horários e disponibilidade pelo WhatsApp.</p>
      <p>Marcas e nomes de produtos citados pertencem aos seus respectivos donos. Imagens podem ser ilustrativas.</p>
    </article>
  ),
});
