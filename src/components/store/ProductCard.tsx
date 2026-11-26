import { Link } from "@tanstack/react-router";
import { gameWhatsappMessage, whatsappLink } from "@/config/site";
import { CATEGORIES, type Product } from "@/data/products";
import { btnClass } from "./Button";
import { WhatsappIcon } from "./icons";

export function ProductCard({ product }: { product: Product }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/60 hover:glow">
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={product.image} alt={product.name} loading="lazy" width={1600} height={1024} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        <div className="absolute left-3 top-3 flex gap-2">
          {product.featured && <span className="rounded bg-primary px-2 py-1 font-display text-[11px] font-bold uppercase text-primary-foreground">Destaque</span>}
          {product.demo && <span className="rounded bg-background/80 px-2 py-1 text-[11px] uppercase text-muted-foreground backdrop-blur">Demo</span>}
        </div>
      </div>
      <div className="flex flex-1 flex-col p-5">
        <p className="text-[11px] font-semibold uppercase tracking-widest text-primary">{CATEGORIES[product.category].label} · {product.platform}</p>
        <h3 className="mt-2 text-lg font-semibold leading-snug">{product.name}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-muted-foreground">{product.description}</p>
        {product.specs && (
          <ul className="mt-3 flex flex-wrap gap-1.5">
            {product.specs.slice(0, 3).map((s) => <li key={s} className="rounded border border-border px-2 py-0.5 text-[11px] text-muted-foreground">{s}</li>)}
          </ul>
        )}
        <div className="mt-auto pt-5">
          <p className="text-sm text-muted-foreground">Para jogar no local · consulte disponibilidade</p>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <Link to="/produto/$id" params={{ id: product.id }} className={btnClass({ variant: "outline", size: "sm" })}>Ver detalhes</Link>
            <a href={whatsappLink(gameWhatsappMessage(product.name))} target="_blank" rel="noopener noreferrer" className={btnClass({ size: "sm" })} aria-label={`Reservar horário para jogar ${product.name} pelo WhatsApp`}>
              <WhatsappIcon className="h-4 w-4" /> Reservar
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
