import { createFileRoute } from "@tanstack/react-router";
import { Armchair, Gauge, Settings2, Wrench } from "lucide-react";
import { CategoryPage } from "@/components/store/CategoryPage";
import { seo } from "@/lib/seo";
import cockpit from "@/assets/cockpit.jpg";

export const Route = createFileRoute("/cockpit-gamer")({
  head: () => seo("Cockpit Gamer e Simuladores de Corrida", "Jogue em cockpits profissionais com volantes, pedais, câmbios e bancos esportivos de simulação de corrida."),
  component: Page,
});

const items = [
  { icon: Gauge, t: "Volantes e bases", d: "Force feedback e direct drive" },
  { icon: Settings2, t: "Pedais e câmbios", d: "Load cell, H e sequencial" },
  { icon: Armchair, t: "Bancos esportivos", d: "Conforto de competição" },
  { icon: Wrench, t: "Estruturas", d: "Cockpits em alumínio e suportes" },
];

function Page() {
  return (
    <CategoryPage category="cockpit" image={cockpit} eyebrow="Simulação profissional" title="Cockpit Gamer" groupLabel="Tipo de equipamento"
      intro="Sente no cockpit e sinta cada curva como na pista: volantes direct drive, pedais load cell e estruturas profissionais.">
      <section className="mx-auto grid max-w-7xl gap-4 px-4 pt-14 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: I, t, d }) => (
          <div key={t} className="clip-angle flex items-center gap-4 border border-border bg-card p-5">
            <I className="h-8 w-8 shrink-0 text-primary" />
            <div><p className="font-display font-semibold uppercase">{t}</p><p className="text-sm text-muted-foreground">{d}</p></div>
          </div>
        ))}
      </section>
    </CategoryPage>
  );
}
