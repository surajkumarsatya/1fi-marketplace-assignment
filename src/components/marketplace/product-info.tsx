import { Check, Star } from "lucide-react";

import type { Product } from "@/src/services/marketplace/marketplace.types";
import { formatCurrency } from "@/src/lib/emi";

interface ProductInfoProps {
  product: Product;
  selectedPrice: number;
}

export function ProductInfo({
  product,
  selectedPrice,
}: ProductInfoProps) {
  return (
    <section className="mt-4 px-4">
      <div className="rounded-2xl border border-[#eeeeef] bg-white p-5 shadow-sm">
        {/* Brand */}
        {product.brand && (
          <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[#8064ae]">
            {product.brand}
          </p>
        )}

        {/* Product name */}
        <h2 className="mt-1 text-xl font-bold leading-7 tracking-[-0.3px] text-[#171717]">
          {product.title}
        </h2>

        {/* Rating + stock */}
        <div className="mt-3 flex items-center gap-2">
          <div className="flex items-center gap-1 rounded-md bg-[#fbf3dc] px-2 py-1">
            <Star
              size={12}
              fill="currentColor"
              strokeWidth={1.5}
              className="text-[#d19a25]"
            />

            <span className="text-[10px] font-semibold text-[#795b19]">
              {product.rating.toFixed(1)}
            </span>
          </div>

          <span className="text-[11px] text-[#8b91a0]">
            {product.stock} available
          </span>
        </div>

        {/* Price */}
        <div className="mt-5">
          <p className="text-2xl font-bold tracking-[-0.5px] text-[#171717]">
            {formatCurrency(selectedPrice)}
          </p>

          <div className="mt-1 flex items-center gap-1.5">
            <Check
              size={13}
              strokeWidth={2.5}
              className="text-[#6d28d9]"
            />

            <p className="text-[11px] font-medium text-[#6d28d9]">
              No-cost EMI available
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}