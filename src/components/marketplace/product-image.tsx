import Image from "next/image";

import type { Product } from "@/src/services/marketplace/marketplace.types";

interface ProductImageProps {
  product: Product;
}

export function ProductImage({
  product,
}: ProductImageProps) {
  return (
    <section className="mx-4 overflow-hidden rounded-3xl border border-[#eeeeef] bg-white shadow-sm">
      <div className="flex h-70 items-center justify-center bg-[#f8f8f9] p-8">
        <Image
          src={
            product.images?.[0] ??
            product.thumbnail
          }
          alt={product.title}
          className="h-full w-full object-contain"
          width={500}
          height={500}
        />
      </div>
    </section>
  );
}