import type { Product } from "@/src/services/marketplace/marketplace.types";

type ProductVariant = NonNullable<Product["variants"]>[number];

interface VariantSelectorProps {
  variants: ProductVariant[];
  selectedVariantId?: string;
  selectedVariant?: ProductVariant;
  onVariantChange: (variantId: string) => void;
}

export function VariantSelector({
  variants,
  selectedVariantId,
  selectedVariant,
  onVariantChange,
}: VariantSelectorProps) {
  if (variants.length === 0) {
    return null;
  }

  return (
    <section className="mt-4 px-4">
      <div className="rounded-2xl border border-[#eeeeef] bg-white p-5 shadow-sm">
        {/* Header */}

        <div className="flex items-center justify-between">
          <h3 className="text-sm font-semibold text-[#202124]">
            Select Variant
          </h3>

          <span className="text-[10px] text-[#8b91a0]">
            {variants.length} option
            {variants.length !== 1 ? "s" : ""}
          </span>
        </div>

        {/* Variant Options */}

        <div className="mt-3 flex flex-wrap gap-2">
          {variants.map((variant) => {
            const isSelected =
              variant.id === selectedVariantId;

            return (
              <button
                key={variant.id}
                type="button"
                onClick={() =>
                  onVariantChange(variant.id)
                }
                className={[
                  "rounded-xl border px-4 py-2.5",
                  "text-[11px] font-medium",
                  "transition-all duration-200",
                  isSelected
                    ? "border-[#6d28d9] bg-[#f3edff] text-[#6d28d9]"
                    : "border-[#e5e5e9] bg-white text-[#626878] hover:border-[#cfc5e3]",
                ].join(" ")}
              >
                {variant.name}
              </button>
            );
          })}
        </div>

        {/* Selected Variant */}

        {selectedVariant && (
          <div className="mt-3 flex items-center justify-between rounded-xl bg-[#f8f8f9] px-3 py-2.5">
            <span className="text-[10px] text-[#858b98]">
              Selected
            </span>

            <span className="text-[11px] font-semibold text-[#202124]">
              {selectedVariant.name}
            </span>
          </div>
        )}
      </div>
    </section>
  );
}