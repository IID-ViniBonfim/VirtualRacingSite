import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Clock, MessageCircle } from "lucide-react";
import { btnClass } from "@/components/store/Button";
import { WhatsappIcon } from "@/components/store/icons";
import { ProductCard } from "@/components/store/ProductCard";
import { HOUR_PRICE_LABEL, gameWhatsappMessage, whatsappLink } from "@/config/site";
import { CATEGORIES, PRODUCTS, getProduct } from "@/data/products";
import { seo } from "@/lib/seo";

export const Route = createFileRoute("/produto/$id")({
  loader: ({ params }) => {
    const product = getProduct(params.id);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) =>
    loaderData ? seo(loaderData.product.name, loaderData.product.description) : { meta: [{ title: "Item indisponível" }, { name: "robots", content: "noindex" }] },
  component: Page,
});

function Page() {
  const { product } = Route.useLoaderData();
  const cat = CATEGORIES[product.category];
  const related = PRODUCTS.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);
  return (
    <div className="mx-auto max-w-7xl px-4 py-10">
      <Link to={cat.path} className="mb-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"><ArrowLeft className="h-4 w-4" /> {cat.label}</Link>
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-xl border border-border">
          <img src={product.image} alt={product.name} width={1600} height={1024} className="aspect-[4/3] w-full object-cover" />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-primary">{cat.label} · {product.platform} · {product.group}</p>
          <h1 className="mt-3 text-3xl font-bold uppercase md:text-4xl">{product.name}</h1>
          <p className="mt-4 text-muted-foreground">{product.description}</p>
          {product.specs && (
            <div className="mt-6">
              <h2 className="mb-3 text-sm font-semibold uppercase tracking-widest">Detalhes</h2>
              <ul className="divide-y divide-border rounded-lg border border-border">
                {product.specs.map((s) => <li key={s} className="px-4 py-2 text-sm">{s}</li>)}
              </ul>
            </div>
          )}
          <div className="mt-8 rounded-lg border border-primary/30 bg-accent/40 p-5">
            <p className="flex items-center gap-2 font-display text-2xl font-bold"><Clock className="h-6 w-6 text-primary" /> {HOUR_PRICE_LABEL}</p>
            <p className="mt-2 text-sm text-muted-foreground">Jogue este e qualquer outro título do catálogo pagando apenas pela hora.</p>
            {product.demo && <p className="mt-2 text-sm text-muted-foreground">Item demonstrativo. Confirme a disponibilidade pelo WhatsApp.</p>}
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={whatsappLink(gameWhatsappMessage(product.name))} target="_blank" rel="noopener noreferrer" className={btnClass({ size: "lg" })}><WhatsappIcon /> Reservar pelo WhatsApp</a>
            <a href={whatsappLink(`Olá! Gostaria de consultar a disponibilidade de ${product.name} para jogar no local.`)} target="_blank" rel="noopener noreferrer" className={btnClass({ variant: "outline", size: "lg" })}><MessageCircle className="h-5 w-5" /> Consultar</a>
          </div>
        </div>
      </div>
      {related.length > 0 && (
        <section className="mt-20">
          <h2 className="mb-8 text-2xl font-bold uppercase">Você também pode jogar</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">{related.map((p) => <ProductCard key={p.id} product={p} />)}</div>
        </section>
      )}
    </div>
  );
}
