import type { ReactNode } from "react";
import { PRODUCTS, type CategoryId } from "@/data/products";
import { DemoNotice, PageBanner } from "./Section";
import { ProductShowcase } from "./ProductShowcase";

export function CategoryPage({ category, image, eyebrow, title, intro, groupLabel, children }: { category: CategoryId; image: string; eyebrow: string; title: string; intro: string; groupLabel: string; children?: ReactNode }) {
  return (
    <>
      <PageBanner image={image} eyebrow={eyebrow} title={title}>{intro}</PageBanner>
      {children}
      <section className="mx-auto max-w-7xl px-4 py-14">
        <DemoNotice />
        <ProductShowcase products={PRODUCTS.filter((p) => p.category === category)} showCategoryFilter={false} groupLabel={groupLabel} />
      </section>
    </>
  );
}
