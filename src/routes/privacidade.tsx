import { createFileRoute } from "@tanstack/react-router";
import { SITE } from "@/config/site";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/privacidade")({
  head: () => seo("Política de Privacidade", "Como tratamos seus dados ao navegar e falar conosco."),
  component: () => (
    <article className="mx-auto max-w-3xl space-y-4 px-4 py-16 text-muted-foreground">
      <h1 className="text-3xl font-bold uppercase text-foreground">Política de privacidade</h1>
      <p>A {SITE.name} respeita sua privacidade. Este site não possui cadastro nem coleta dados pessoais por formulários.</p>
      <p>Ao clicar em botões de WhatsApp ou Instagram, você é direcionado a essas plataformas, que possuem políticas próprias. As informações que você enviar por lá são usadas apenas para atendimento e solicitações de horários de jogo.</p>
      <p>Seus dados não são vendidos a terceiros. Para dúvidas ou solicitações conforme a LGPD, entre em contato pelo nosso WhatsApp.</p>
    </article>
  ),
});
