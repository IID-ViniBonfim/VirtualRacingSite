import { createFileRoute } from "@tanstack/react-router";
import { MapPin } from "lucide-react";
import { btnClass } from "@/components/store/Button";
import { InstagramIcon, WhatsappIcon } from "@/components/store/icons";
import { PageBanner } from "@/components/store/Section";
import { SITE, instagramUrl, whatsappLink } from "@/config/site";
import { seo } from "@/lib/seo";
import hero from "@/assets/hero-setup.jpg";

export const Route = createFileRoute("/contato")({
  head: () => seo("Contato", "Fale com a Brasília Virtual Racing pelo WhatsApp ou Instagram."),
  component: Page,
});

function Page() {
  const ig = instagramUrl();
  return (
    <>
      <PageBanner image={hero} eyebrow="Atendimento" title="Contato">Tire dúvidas e reserve seu horário direto com nosso time.</PageBanner>
      <section className="mx-auto grid max-w-7xl gap-6 px-4 py-14 md:grid-cols-3">
        <div className="rounded-xl border border-border bg-card p-8">
          <WhatsappIcon className="h-9 w-9 text-primary" />
          <h2 className="mt-4 text-xl font-bold uppercase">WhatsApp</h2>
          <p className="mt-1 text-muted-foreground">{SITE.whatsappDisplay}</p>
          <a href={whatsappLink()} target="_blank" rel="noopener noreferrer" className={btnClass({ className: "mt-6 w-full" })}>Iniciar conversa</a>
        </div>
        {ig && (
          <div className="rounded-xl border border-border bg-card p-8">
            <InstagramIcon className="h-9 w-9 text-primary" />
            <h2 className="mt-4 text-xl font-bold uppercase">Instagram</h2>
            <p className="mt-1 text-muted-foreground">@{SITE.instagramHandle}</p>
            <a href={ig} target="_blank" rel="noopener noreferrer" className={btnClass({ variant: "outline", className: "mt-6 w-full" })}>Seguir no Instagram</a>
          </div>
        )}
        <div className="rounded-xl border border-border bg-card p-8">
          <MapPin className="h-9 w-9 text-primary" />
          <h2 className="mt-4 text-xl font-bold uppercase">Localização</h2>
          <p className="mt-1 text-muted-foreground">{SITE.city}</p>
          <p className="mt-4 text-sm text-muted-foreground">Consulte endereço e horários pelo WhatsApp.</p>
        </div>
      </section>
    </>
  );
}
