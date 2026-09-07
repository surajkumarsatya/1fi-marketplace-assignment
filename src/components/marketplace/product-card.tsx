import Link from "next/link";

import type { Product } from "@/src/services/marketplace/marketplace.types";
import {
  calculateEMIPlans,
  formatCurrency,
} from "@/src/lib/emi";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({
  product,
}: ProductCardProps) {
  const emiPlans = calculateEMIPlans(product.price);

  const lowestEMI = emiPlans[emiPlans.length - 1];

  return (
    <Link
      href={`/shop/products/${product.id}`}
      className="group overflow-hidden rounded-2xl border border-[#ececf0] bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)] transition-transform duration-200 hover:-translate-y-0.5"
    >
      {/* Image */}
      <div className="relative flex h-40 items-center justify-center bg-[#f7f7f8] p-4">
        <Image
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-full object-contain mix-blend-multiply"
          width={300}
          height={300}
        />

        {product.discountPercentage > 0 && (
          <span className="absolute left-2 top-2 rounded-full bg-[#f1eaff] px-2 py-1 text-[9px] font-semibold text-[#6d28d9]">
            {Math.round(product.discountPercentage)}% OFF
          </span>
        )}
      </div>

      {/* Details */}
      <div className="p-3">
        <p className="line-clamp-2 min-h-9 text-[12px] font-semibold leading-4.5 text-[#202124]">
          {product.title}
        </p>

        <p className="mt-2 text-base font-bold text-[#171717]">
          {formatCurrency(product.price)}
        </p>

        <div className="mt-2 rounded-lg bg-[#f7f3ff] px-2 py-1.5">
          <p className="text-[9px] font-medium text-[#8064ae]">
            No-cost EMI from
          </p>

          <p className="mt-0.5 text-[11px] font-bold text-[#6d28d9]">
            {formatCurrency(lowestEMI.monthlyAmount)}
            <span className="font-medium text-[#8064ae]">
              /mo
            </span>
          </p>
        </div>
      </div>
    </Link>
  );
}