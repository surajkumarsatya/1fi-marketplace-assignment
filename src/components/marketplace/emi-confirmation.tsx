"use client";

import { ArrowRight, Check, X } from "lucide-react";

import type {
  Product,
  ProductVariant,
  EMIPlan,
} from "@/src/services/marketplace/marketplace.types";

import { formatCurrency } from "@/src/lib/emi";
import Image from "next/image";

interface EMIConfirmationProps {
  product: Product;
  variant: ProductVariant;
  plan: EMIPlan;
  onClose: () => void;
  onConfirm: () => void;
}

export function EMIConfirmation({
  product,
  variant,
  plan,
  onClose,
  onConfirm,
}: EMIConfirmationProps) {
  return (
    <div className="fixed inset-0 z-100 flex items-end justify-center bg-black/40 px-0 sm:items-center sm:px-4">
      <div className="w-full max-w-120 overflow-hidden rounded-t-[28px] bg-white shadow-2xl sm:rounded-[28px]">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#eeeeef] px-5 py-4">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-wide text-[#7c5bb1]">
              1Fi Marketplace
            </p>

            <h2 className="mt-1 text-lg font-bold text-[#171717]">
              Confirm your plan
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full bg-[#f4f4f6] hover:cursor-pointer"
            aria-label="Close confirmation"
          >
            <X size={17} className="text-[#555b68]" />
          </button>
        </div>

        {/* Content */}
        <div className="max-h-[70vh] overflow-y-auto px-5 py-5">
          {/* Product */}
          <div className="flex gap-3 rounded-2xl bg-[#f8f8f9] p-3">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl bg-white">
              <Image
                src={product.thumbnail}
                alt={product.title}
                className="h-full w-full object-contain p-2"
                width={80}
                height={80}
              />
            </div>

            <div className="min-w-0">
              <p className="line-clamp-2 text-sm font-semibold leading-5 text-[#202124]">
                {product.title}
              </p>

              <p className="mt-1 text-[11px] text-[#7c8290]">
                Variant: {variant.name}
              </p>

              <p className="mt-2 text-sm font-bold text-[#171717]">
                {formatCurrency(variant.price)}
              </p>
            </div>
          </div>

          {/* EMI Summary */}
          <div className="mt-4 rounded-2xl border border-[#e9e2f5] bg-[#faf7ff] p-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-[11px] text-[#7d8290]">
                  Selected EMI
                </p>

                <p className="mt-1 text-base font-bold text-[#202124]">
                  {plan.duration} Months
                </p>
              </div>

              <div className="text-right">
                <p className="text-lg font-bold text-[#6d28d9]">
                  {formatCurrency(plan.monthlyAmount)}
                  <span className="text-[10px] font-medium text-[#8064ae]">
                    /month
                  </span>
                </p>

                <p className="mt-1 text-[10px] font-medium text-[#6d28d9]">
                  0% interest
                </p>
              </div>
            </div>
          </div>

          {/* Breakdown */}
          <div className="mt-4 space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="text-[#7c8290]">
                Product price
              </span>

              <span className="font-medium text-[#202124]">
                {formatCurrency(variant.price)}
              </span>
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="text-[#7c8290]">
                Interest
              </span>

              <span className="font-medium text-[#6d28d9]">
                ₹0
              </span>
            </div>

            <div className="border-t border-[#eeeeef] pt-3">
              <div className="flex items-center justify-between">
                <span className="text-sm font-semibold text-[#202124]">
                  Total payable
                </span>

                <span className="text-base font-bold text-[#171717]">
                  {formatCurrency(plan.totalAmount)}
                </span>
              </div>
            </div>
          </div>

          {/* Info */}
          <div className="mt-4 flex gap-2 rounded-xl bg-[#f5f5f7] p-3">
            <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#e9ddff]">
              <Check
                size={12}
                className="text-[#6d28d9]"
              />
            </div>

            <p className="text-[10px] leading-4 text-[#737987]">
              This is a no-cost EMI plan. No additional
              interest is included in the displayed
              payable amount.
            </p>
          </div>
        </div>

        {/* Actions */}
        <div className="border-t border-[#eeeeef] bg-white px-5 pb-6 pt-4">
          <button
            type="button"
            onClick={onConfirm}
            className="w-full flex items-center justify-center rounded-full bg-[#6d28d9] gap-3 py-4 text-sm font-semibold text-white shadow-[0_6px_18px_rgba(109,40,217,0.25)] transition hover:bg-[#5b21b6] hover:cursor-pointer"
          >
            <span>Confirm & Continue</span>
            <span><ArrowRight size={18} strokeWidth={2.5} /></span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="mt-3 w-full py-2 text-xs font-semibold text-[#777d8b] hover:cursor-pointer"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}