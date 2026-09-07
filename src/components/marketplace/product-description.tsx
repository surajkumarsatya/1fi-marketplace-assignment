import type { Product } from "@/src/services/marketplace/marketplace.types";

interface ProductDescriptionProps {
  product: Product;
}

export function ProductDescription({
  product,
}: ProductDescriptionProps) {
  return (
    <section className="mt-4 px-4">
      <div className="rounded-2xl border border-[#eeeeef] bg-white p-5 shadow-sm">
        <h3 className="text-sm font-semibold text-[#202124]">
          Product Details
        </h3>

        <p className="mt-3 text-xs leading-5 text-[#6f7480]">
          {product.description}
        </p>

        {/* Additional Product Information */}

        <div className="mt-4 grid grid-cols-2 gap-2">
          {/* Category */}

          <div className="rounded-xl bg-[#f8f8f9] p-3">
            <p className="text-[9px] text-[#8b91a0]">
              Category
            </p>

            <p className="mt-1 text-[11px] font-semibold capitalize text-[#30333a]">
              {product.category}
            </p>
          </div>

          {/* Availability */}

          <div className="rounded-xl bg-[#f8f8f9] p-3">
            <p className="text-[9px] text-[#8b91a0]">
              Availability
            </p>

            <p className="mt-1 text-[11px] font-semibold text-[#30333a]">
              {product.stock > 0
                ? "In stock"
                : "Out of stock"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}