import { createFileRoute } from "@tanstack/react-router";
import { Clock, Gamepad2, MonitorPlay, Users } from "lucide-react";
import { btnClass } from "@/components/store/Button";
import { WhatsappIcon } from "@/components/store/icons";
import { PageBanner } from "@/components/store/Section";
import { HOUR_PRICE_LABEL, whatsappLink } from "@/config/site";
import { seo } from "@/lib/seo";
import hero from "@/assets/hero-setup.jpg";

export const Route = createFileRoute("/precos")({
  head: () => seo("Preços", `Hora de jogo a ${HOUR_PRICE_LABEL}: jogue qualquer título do catálogo em PC, PS5, Switch ou simulador de corrida.`),
  component: Page,
});

const includes = [
  { icon: Gamepad2, t: "Todos os jogos", d: "Qualquer jogo disponível na casa pelo mesmo valor por hora." },
  { icon: MonitorPlay, t: "Todas as plataformas", d: "PC gamer, PlayStation 5, Nintendo Switch e simuladores de corrida." },
  { icon: Users, t: "Venha com amigos", d: "Reserve várias estações e jogue em grupo." },
];

function Page() {
  return (
    <>
      <PageBanner image={hero} eyebrow="Simples assim" title="Preços">Um único valor, acesso a tudo. Você paga pela hora e joga o que quiser.</PageBanner>
      <section className="mx-auto max-w-7xl px-4 py-14">
        <div className="mx-auto max-w-xl rounded-2xl border border-primary/40 bg-card p-10 text-center glow">
          <Clock className="mx-auto h-10 w-10 text-primary" />
          <p className="mt-4 font-display text-xs font-semibold uppercase tracking-[0.3em] text-primary">Hora de jogo</p>
          <p className="mt-2 font-display text-4xl font-bold sm:text-6xl">{HOUR_PRICE_LABEL}</p>
          <p className="mt-4 text-muted-foreground">Jogue qualquer jogo disponível na casa. Você paga pela hora de jogo.</p>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className={btnClass({ size: "lg", className: "mt-8 w-full" })}><WhatsappIcon /> Reservar horário</a>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {includes.map(({ icon: I, t, d }) => (
            <div key={t} className="rounded-xl border border-border bg-card p-6">
              <I className="h-8 w-8 text-primary" />
              <h2 className="mt-4 font-semibold uppercase">{t}</h2>
              <p className="mt-2 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-sm text-muted-foreground">Consulte os horários e jogos disponíveis pelo WhatsApp.</p>
      </section>
    </>
  );
}
