import { useMemo, useState } from "react";
import { CATEGORIES, type CategoryId, type Product } from "@/data/products";
import { ProductCard } from "./ProductCard";

const selectCls = "h-10 rounded-md border border-input bg-card px-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring";

export function ProductShowcase({ products, showCategoryFilter = true, groupLabel }: { products: Product[]; showCategoryFilter?: boolean; groupLabel?: string }) {
  const [cat, setCat] = useState<CategoryId | "all">("all");
  const [platform, setPlatform] = useState("all");
  const [group, setGroup] = useState("all");

  const platforms = useMemo(() => [...new Set(products.map((p) => p.platform))].sort(), [products]);
  const groups = useMemo(() => [...new Set(products.map((p) => p.group))], [products]);
  const cats = useMemo(() => [...new Set(products.map((p) => p.category))], [products]);

  const list = [...products]
    .filter((p) => (cat === "all" || p.category === cat) && (platform === "all" || p.platform === platform) && (group === "all" || p.group === group))
    .sort((a, b) => Number(!!b.featured) - Number(!!a.featured));

  return (
    <div>
      {groupLabel && (
        <div className="mb-5 flex flex-wrap gap-2" role="group" aria-label={groupLabel}>
          {["all", ...groups].map((g) => (
            <button key={g} onClick={() => setGroup(g)} aria-pressed={group === g}
              className={`rounded-full border px-4 py-1.5 font-display text-xs uppercase tracking-wide transition-colors ${group === g ? "border-primary bg-primary text-primary-foreground" : "border-border text-muted-foreground hover:border-primary hover:text-primary"}`}>
              {g === "all" ? "Todos" : g}
            </button>
          ))}
        </div>
      )}
      <div className="mb-8 flex flex-wrap items-end gap-3">
        {showCategoryFilter && cats.length > 1 && (
          <label className="flex flex-col gap-1 text-xs uppercase tracking-wide text-muted-foreground">Categoria
            <select className={selectCls} value={cat} onChange={(e) => setCat(e.target.value as CategoryId | "all")}>
              <option value="all">Todas</option>
              {cats.map((c) => <option key={c} value={c}>{CATEGORIES[c].label}</option>)}
            </select>
          </label>
        )}
        <label className="flex flex-col gap-1 text-xs uppercase tracking-wide text-muted-foreground">Plataforma
          <select className={selectCls} value={platform} onChange={(e) => setPlatform(e.target.value)}>
            <option value="all">Todas</option>
            {platforms.map((p) => <option key={p} value={p}>{p}</option>)}
          </select>
        </label>
        <p className="ml-auto text-sm text-muted-foreground">{list.length} item(ns)</p>
      </div>
      {list.length ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {list.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      ) : (
        <p className="py-16 text-center text-muted-foreground">Nenhum item encontrado com esses filtros.</p>
      )}
    </div>
  );
}
