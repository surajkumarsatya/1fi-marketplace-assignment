"use client";

import {
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import type { Product } from "@/src/services/marketplace/marketplace.types";
import { getProducts } from "@/src/services/marketplace/marketplace.service";

import { ProductGrid } from "./product-grid";
import { MarketplaceSearch } from "./marketplace-search";
import { CategoryFilter } from "./category-filter";
import { MarketplaceSkeleton } from "./marketplace-skeleton";
import { MarketplaceError } from "./marketplace-error";

export function Marketplace() {
  const [products, setProducts] = useState<Product[]>(
    []
  );

  const [isLoading, setIsLoading] = useState(true);

  const [error, setError] = useState<string | null>(
    null
  );

  const [search, setSearch] = useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("All");

 const fetchMarketplace = useCallback(
  async (showLoading = true) => {
    if (showLoading) {
      setIsLoading(true);
      setError(null);
    }

    try {
      const data = await getProducts();

      setProducts(data);
      setError(null);
    } catch (err) {
      console.error(
        "Marketplace fetch failed:",
        err
      );

      setError(
        "Unable to load marketplace products."
      );
    } finally {
      setIsLoading(false);
    }
  },
  []
);

useEffect(() => {
  let cancelled = false;

  const loadMarketplace = async () => {
    try {
      const data = await getProducts();

      if (cancelled) {
        return;
      }

      setProducts(data);
      setError(null);
    } catch (err) {
      if (cancelled) {
        return;
      }

      console.error(
        "Marketplace fetch failed:",
        err
      );

      setError(
        "Unable to load marketplace products."
      );
    } finally {
      if (!cancelled) {
        setIsLoading(false);
      }
    }
  };

  loadMarketplace();

  return () => {
    cancelled = true;
  };
}, []);

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(
      new Set(
        products.map(
          (product) => product.category
        )
      )
    );

    return [
      "All",
      ...uniqueCategories.slice(0, 7),
    ];
  }, [products]);

  const filteredProducts = useMemo(() => {
    const normalizedSearch = search
      .trim()
      .toLowerCase();

    return products.filter((product) => {
      const matchesSearch =
        normalizedSearch.length === 0 ||
        product.title
          .toLowerCase()
          .includes(normalizedSearch) ||
        product.description
          .toLowerCase()
          .includes(normalizedSearch);

      const matchesCategory =
        selectedCategory === "All" ||
        product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [
    products,
    search,
    selectedCategory,
  ]);

  if (isLoading) {
    return <MarketplaceSkeleton />;
  }

  if (error) {
    return (
      <MarketplaceError
        onRetry={fetchMarketplace}
      />
    );
  }

  return (
    <section className="px-4 pb-8">
      {/* Header */}
      <div className="mb-5">
        <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#7c5bb1]">
          Shop smart
        </p>

        <h1 className="mt-1 text-[25px] font-bold tracking-[-0.6px] text-[#171717]">
          1Fi Marketplace
        </h1>

        <p className="mt-1 text-[13px] leading-5 text-[#74798a]">
          Shop now and pay later with easy EMI plans.
        </p>
      </div>

      {/* Search */}
      <MarketplaceSearch
        value={search}
        onChange={setSearch}
      />

      {/* Categories */}
      <CategoryFilter
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />

      {/* Products */}
      <div className="mt-6">
        <div className="mb-3 flex items-center justify-between">
          <h2 className="text-base font-semibold text-[#202124]">
            Products
          </h2>

          <span className="text-[11px] text-[#8b91a0]">
            {filteredProducts.length} items
          </span>
        </div>

        {filteredProducts.length > 0 ? (
          <ProductGrid
            products={filteredProducts}
          />
        ) : (
          <div className="rounded-2xl bg-white px-5 py-12 text-center shadow-sm">
            <p className="text-sm font-semibold text-[#202124]">
              No products found
            </p>

            <p className="mt-1 text-xs text-[#8b91a0]">
              Try a different search or category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setSelectedCategory("All");
              }}
              className="mt-4 text-xs font-semibold text-[#6d28d9]"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
}