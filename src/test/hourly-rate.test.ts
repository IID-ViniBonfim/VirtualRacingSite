import { describe, expect, it } from "vitest";
import { SITE } from "@/config/site";
import { PRODUCTS } from "@/data/products";

describe("Lan house rules", () => {
  it("charges 20 reais per hour", () => {
    expect(SITE.pricePerHour).toBe(20);
  });

  it("uses the hourly rate for all catalog items rather than sale prices", () => {
    expect(PRODUCTS.length).toBeGreaterThan(0);
    for (const item of PRODUCTS) {
      expect(item).not.toHaveProperty("price");
      expect(item).not.toHaveProperty("oldPrice");
      expect(item).not.toHaveProperty("offer");
    }
  });
});