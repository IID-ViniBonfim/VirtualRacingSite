import type { ReactNode } from "react";

export function SectionTitle({ eyebrow, title, children }: { eyebrow?: string; title: string; children?: ReactNode }) {
  return (
    <div className="mb-10 max-w-3xl">
      {eyebrow && (
        <p className="mb-3 flex items-center gap-3 font-display text-xs font-semibold uppercase tracking-[0.3em] text-primary">
          <span className="h-px w-8 bg-primary" />{eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold uppercase md:text-4xl">{title}</h2>
      {children && <p className="mt-4 text-muted-foreground">{children}</p>}
    </div>
  );
}

export function PageBanner({ image, eyebrow, title, children }: { image: string; eyebrow: string; title: string; children?: ReactNode }) {
  return (
    <section className="relative isolate overflow-hidden border-b border-border">
      <img src={image} alt="" className="absolute inset-0 -z-20 h-full w-full object-cover" width={1600} height={1024} />
      <div className="absolute inset-0 -z-10 bg-side" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-24 bg-fade" />
      <div className="mx-auto max-w-7xl px-4 py-20 md:py-28">
        <p className="mb-3 font-display text-xs font-semibold uppercase tracking-[0.3em] text-primary">{eyebrow}</p>
        <h1 className="max-w-2xl text-4xl font-bold uppercase leading-tight md:text-6xl">{title}</h1>
        {children && <div className="mt-5 max-w-xl text-muted-foreground md:text-lg">{children}</div>}
      </div>
    </section>
  );
}

export function DemoNotice() {
  return (
    <p className="mb-6 rounded-md border border-primary/30 bg-accent/40 px-4 py-3 text-sm text-accent-foreground">
      Conteúdo demonstrativo: os jogos e equipamentos abaixo são exemplos do catálogo. Confirme a disponibilidade pelo WhatsApp.
    </p>
  );
}
