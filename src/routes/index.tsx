import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Clock, Cpu, Gamepad2, Headphones, LifeBuoy, Users } from "lucide-react";
import { btnClass } from "@/components/store/Button";
import { GtaSection } from "@/components/store/GtaSection";
import { InstagramIcon, WhatsappIcon } from "@/components/store/icons";
import { SectionTitle } from "@/components/store/Section";
import { HOUR_PRICE_LABEL, SITE, instagramUrl, whatsappLink } from "@/config/site";
import { seo } from "@/lib/seo";
import hero from "@/assets/hero-setup.jpg";
import cockpit from "@/assets/cockpit.jpg";
import racing from "@/assets/racing.jpg";
import pc from "@/assets/pc-gear.jpg";
import consoles from "@/assets/consoles.jpg";

export const Route = createFileRoute("/")({
  head: () => seo("Lan House Gamer em Brasília", SITE.description),
  component: Index,
});

const cats = [
  { to: "/cockpit-gamer", label: "Cockpit Gamer", img: cockpit, d: "Simuladores e volantes" },
  { to: "/jogos-de-corrida", label: "Jogos de Corrida", img: racing, d: "F1, rally, drift e mais" },
  { to: "/pc-gamer", label: "PC Gamer", img: pc, d: "Estações de alto desempenho" },
  { to: "/nintendo-switch", label: "Nintendo Switch", img: consoles, d: "Diversão para todos" },
  { to: "/playstation-5", label: "PlayStation 5", img: consoles, d: "A nova geração" },
] as const;

const perks = [
  { icon: Clock, t: "Pague pela hora", d: `${HOUR_PRICE_LABEL} para jogar qualquer jogo disponível na casa.` },
  { icon: Gamepad2, t: "Variedade gamer", d: "Consoles, jogos, PCs e simuladores em um só lugar." },
  { icon: Cpu, t: "Equipamentos de ponta", d: "Hardware e periféricos de alto desempenho." },
  { icon: WhatsappIcon, t: "Reserva fácil", d: "Garanta seu horário direto pelo WhatsApp." },
  { icon: Users, t: "Jogue com amigos", d: "Reserve várias estações e monte seu time." },
  { icon: LifeBuoy, t: "Suporte no local", d: "Nossa equipe ajuda você a configurar e começar a jogar." },
];

function Index() {
  const ig = instagramUrl();
  return (
    <>
      {/* Hero */}
      <section className="relative isolate overflow-hidden">
        <img src={hero} alt="Espaço gamer com PC, monitor e simulador de corrida" width={1920} height={1088} className="absolute inset-0 -z-20 h-full w-full object-cover" />
        <div className="absolute inset-0 -z-10 bg-side" />
        <div className="absolute inset-0 -z-10 grid-lines opacity-60" />
        <div className="absolute inset-x-0 bottom-0 -z-10 h-32 bg-fade" />
        <div className="mx-auto flex min-h-[80vh] max-w-7xl flex-col justify-center px-4 py-24">
          <p className="animate-rise mb-4 flex items-center gap-3 font-display text-xs font-semibold uppercase tracking-[0.35em] text-primary"><span className="h-px w-10 bg-primary" />{SITE.name}</p>
          <h1 className="animate-rise max-w-3xl text-5xl font-bold uppercase leading-[1.02] md:text-7xl">
            Sua próxima partida <span className="text-primary text-glow">começa aqui.</span>
          </h1>
          <p className="animate-rise mt-6 max-w-xl text-lg text-muted-foreground">Lan house gamer em Brasília: pague por hora e jogue qualquer jogo disponível na casa em PC, PS5, Switch ou simulador de corrida.</p>
          <div className="animate-rise mt-10 flex flex-wrap gap-3">
            <a href="#estacoes" className={btnClass({ size: "lg" })}>Conhecer as estações <ArrowRight className="h-5 w-5" /></a>
            <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className={btnClass({ variant: "outline", size: "lg" })}><WhatsappIcon /> Reservar horário</a>
          </div>
          <div className="relative mt-16 h-px w-full max-w-md overflow-hidden bg-border">
            <span className="absolute inset-y-0 w-1/3 animate-scan bg-primary" />
          </div>
        </div>
      </section>

      {/* Preço por hora */}
      <section className="border-b border-border bg-card/50">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 py-12 md:flex-row">
          <div className="flex items-center gap-5">
            <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-accent text-primary glow"><Clock className="h-8 w-8" /></div>
            <div>
              <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-primary">Um único valor</p>
              <p className="font-display text-4xl font-bold md:text-5xl">{HOUR_PRICE_LABEL}</p>
            </div>
          </div>
          <p className="max-w-md text-center text-muted-foreground md:text-left">Jogue qualquer jogo disponível na casa, em qualquer plataforma. Você paga apenas pelo tempo de jogo.</p>
          <Link to="/precos" className={btnClass({ variant: "outline", size: "lg" })}>Ver detalhes <ArrowRight className="h-5 w-5" /></Link>
        </div>
      </section>

      {/* Categorias */}
      <section id="estacoes" className="mx-auto max-w-7xl scroll-mt-24 px-4 py-20">
        <SectionTitle eyebrow="Estações" title="Escolha onde jogar" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {cats.map((c, i) => (
            <Link key={c.to} to={c.to} className={`group relative isolate flex min-h-64 flex-col justify-end overflow-hidden rounded-xl border border-border p-5 transition-all hover:border-primary/70 hover:glow ${i === 0 ? "sm:col-span-2 lg:col-span-1" : ""}`}>
              <img src={c.img} alt="" loading="lazy" width={1600} height={1024} className="absolute inset-0 -z-20 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              <div className="absolute inset-0 -z-10 bg-fade" />
              <h3 className="text-lg font-bold uppercase">{c.label}</h3>
              <p className="text-sm text-muted-foreground">{c.d}</p>
              <ArrowRight className="mt-3 h-5 w-5 text-primary transition-transform group-hover:translate-x-1" />
            </Link>
          ))}
        </div>
      </section>

      {/* Cockpit destaque */}
      <section className="mx-auto max-w-7xl px-4 pb-20">
        <div className="relative isolate overflow-hidden rounded-2xl border border-primary/30">
          <img src={cockpit} alt="Cockpit profissional de simulação com três monitores" loading="lazy" width={1600} height={1024} className="absolute inset-0 -z-20 h-full w-full object-cover" />
          <div className="absolute inset-0 -z-10 bg-side" />
          <div className="max-w-xl p-8 md:p-14">
            <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-primary">Cockpit Gamer</p>
            <h2 className="mt-3 text-3xl font-bold uppercase md:text-5xl">Sinta a pista de verdade</h2>
            <p className="mt-4 text-muted-foreground">Cockpits profissionais, volantes direct drive, pedais load cell, câmbios e bancos esportivos esperando por você.</p>
            <Link to="/cockpit-gamer" className={btnClass({ size: "lg", className: "mt-8" })}>Ver simuladores <ArrowRight className="h-5 w-5" /></Link>
          </div>
        </div>
      </section>

      <GtaSection />

      {/* Diferenciais */}
      <section className="border-y border-border bg-card/50">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <SectionTitle eyebrow="Por que nós" title="Nossos diferenciais" />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {perks.map(({ icon: I, t, d }) => (
              <div key={t} className="group rounded-xl border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:border-primary/60">
                <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-accent text-primary transition-shadow group-hover:glow"><I className="h-6 w-6" /></div>
                <h3 className="font-semibold uppercase">{t}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre */}
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 lg:grid-cols-2">
        <div className="relative">
          <div className="absolute -inset-3 -z-10 rounded-2xl border border-primary/30" />
          <img src={pc} alt="Periféricos gamer iluminados em verde" loading="lazy" width={1600} height={1024} className="rounded-xl" />
        </div>
        <div>
          <p className="font-display text-xs font-semibold uppercase tracking-[0.3em] text-primary">Sobre a casa</p>
          <h2 className="mt-3 text-3xl font-bold uppercase md:text-4xl">Mais que uma lan house, uma experiência gamer.</h2>
          <p className="mt-5 text-muted-foreground">Somos um espaço dedicado ao universo dos jogos, tecnologia e entretenimento digital. Nosso objetivo é conectar jogadores aos melhores equipamentos, consoles e jogos, oferecendo uma experiência moderna, prática e diferenciada — você paga pela hora e joga o que quiser.</p>
          <p className="mt-6 flex items-center gap-2 text-sm"><Headphones className="h-5 w-5 text-primary" /> Atendimento direto e transparente</p>
        </div>
      </section>

      {/* Instagram */}
      {ig && (
        <section className="mx-auto max-w-7xl px-4">
          <div className="rounded-2xl border border-border bg-card p-8 md:p-12">
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div className="flex items-center gap-4">
                <InstagramIcon className="h-12 w-12 text-primary" />
                <div>
                  <h2 className="text-2xl font-bold uppercase">Siga no Instagram</h2>
                  <p className="text-muted-foreground">@{SITE.instagramHandle} · novidades, eventos e campeonatos</p>
                </div>
              </div>
              <a href={ig} target="_blank" rel="noopener noreferrer" className={btnClass({ size: "lg" })}><InstagramIcon /> Seguir no Instagram</a>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
              {[hero, cockpit, racing, consoles].map((img, i) => (
                <a key={i} href={ig} target="_blank" rel="noopener noreferrer" aria-label="Ver publicações no Instagram" className="group relative aspect-square overflow-hidden rounded-lg">
                  <img src={img} alt="" loading="lazy" width={1600} height={1024} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <span className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 transition-opacity group-hover:opacity-100"><InstagramIcon className="h-8 w-8 text-primary" /></span>
                </a>
              ))}
            </div>
            <p className="mt-4 text-xs text-muted-foreground">Espaço reservado para publicações da casa. Imagens ilustrativas.</p>
          </div>
        </section>
      )}
    </>
  );
}
