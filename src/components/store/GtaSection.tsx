import { Link } from "@tanstack/react-router";
import { BellRing, Info, Monitor, Newspaper } from "lucide-react";
import { whatsappLink } from "@/config/site";
import city from "@/assets/city-sunset.jpg";
import { btnClass } from "./Button";
import { WhatsappIcon } from "./icons";

/**
 * Informações editáveis. Atualize somente com dados confirmados pela loja.
 * Não preencher preço, data ou pré-venda sem confirmação oficial.
 */
export const GTA_INFO = {
  platforms: ["PlayStation 5", "Xbox Series X|S"],
  platformsNote: "Plataformas anunciadas pela Rockstar Games. Confirme a disponibilidade na casa.",
  news: [] as { title: string; text: string }[],
};

const INTEREST_MSG = "Olá! Tenho interesse em jogar GTA VI na Brasília Virtual Racing. Poderia me avisar quando estiver disponível?";
const ASK_MSG = "Olá! Gostaria de informações sobre o GTA VI.";

export function GtaSection({ full = false }: { full?: boolean }) {
  return (
    <section className="relative isolate overflow-hidden border-y border-border">
      <img src={city} alt="Ilustração de cidade tropical ao pôr do sol (imagem ilustrativa, não oficial)" loading="lazy" width={1920} height={1088} className="absolute inset-0 -z-20 h-full w-full object-cover" />
      <div className="absolute inset-0 -z-10 bg-side" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-fade" />
      <div className="mx-auto max-w-7xl px-4 py-24 md:py-32">
        <p className="mb-3 font-display text-xs font-semibold uppercase tracking-[0.3em] text-primary">Destaque especial</p>
        {full ? (
          <h1 className="max-w-3xl text-4xl font-bold uppercase leading-tight md:text-6xl">GTA VI – A próxima grande experiência.</h1>
        ) : (
          <h2 className="max-w-3xl text-4xl font-bold uppercase leading-tight md:text-6xl">GTA VI – A próxima grande experiência.</h2>
        )}
        <p className="mt-5 max-w-xl text-muted-foreground md:text-lg">Prepare-se para explorar um novo universo e viver uma experiência inesquecível no mundo dos games.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <a href={whatsappLink(INTEREST_MSG)} target="_blank" rel="noopener noreferrer" className={btnClass({ size: "lg" })}><BellRing className="h-5 w-5" /> Tenho interesse</a>
          <a href={whatsappLink(ASK_MSG)} target="_blank" rel="noopener noreferrer" className={btnClass({ variant: "outline", size: "lg" })}><WhatsappIcon /> Consultar pelo WhatsApp</a>
          {!full && <Link to="/gta-vi" className={btnClass({ variant: "ghost", size: "lg" })}>Saiba mais</Link>}
        </div>
        <p className="mt-6 text-xs text-muted-foreground">Imagem meramente ilustrativa, não é material promocional oficial.</p>

        {full && (
          <div className="mt-16 grid gap-5 md:grid-cols-3">
            <div className="rounded-xl border border-border bg-card/80 p-6 backdrop-blur">
              <Info className="mb-3 h-6 w-6 text-primary" />
              <h3 className="font-semibold uppercase">Sobre o jogo</h3>
              <p className="mt-2 text-sm text-muted-foreground">Grand Theft Auto VI é o próximo título da série desenvolvida pela Rockstar Games. A disponibilidade para jogar na casa será divulgada aqui somente após confirmação.</p>
            </div>
            <div className="rounded-xl border border-border bg-card/80 p-6 backdrop-blur">
              <Monitor className="mb-3 h-6 w-6 text-primary" />
              <h3 className="font-semibold uppercase">Plataformas</h3>
              <ul className="mt-2 space-y-1 text-sm">{GTA_INFO.platforms.map((p) => <li key={p}>• {p}</li>)}</ul>
              <p className="mt-2 text-xs text-muted-foreground">{GTA_INFO.platformsNote}</p>
            </div>
            <div className="rounded-xl border border-border bg-card/80 p-6 backdrop-blur">
              <Newspaper className="mb-3 h-6 w-6 text-primary" />
              <h3 className="font-semibold uppercase">Novidades</h3>
              {GTA_INFO.news.length ? (
                <ul className="mt-2 space-y-3 text-sm">{GTA_INFO.news.map((n) => <li key={n.title}><strong>{n.title}</strong><br /><span className="text-muted-foreground">{n.text}</span></li>)}</ul>
              ) : (
                <p className="mt-2 text-sm text-muted-foreground">Em breve. Atualizações serão publicadas assim que confirmadas. Clique em “Tenho interesse” para ser avisado.</p>
              )}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
