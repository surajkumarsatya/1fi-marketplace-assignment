"use client";

import { AlertCircle, RefreshCw } from "lucide-react";

interface MarketplaceErrorProps {
  onRetry: () => void;
}

export function MarketplaceError({
  onRetry,
}: MarketplaceErrorProps) {
  return (
    <section className="px-4 pb-8">
      <div className="rounded-2xl border border-[#ece7f5] bg-white px-5 py-10 text-center shadow-sm">
        <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#f4edff]">
          <AlertCircle
            size={22}
            className="text-[#6d28d9]"
          />
        </div>

        <h2 className="mt-4 text-base font-semibold text-[#202124]">
          Unable to load marketplace
        </h2>

        <p className="mx-auto mt-2 max-w-65 text-xs leading-5 text-[#7b8190]">
          We couldn&apos;t load the products right now.
          Please check your connection and try again.
        </p>

        <button
          type="button"
          onClick={onRetry}
          className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#6d28d9] px-5 py-3 text-xs font-semibold text-white transition hover:bg-[#5b21b6]"
        >
          <RefreshCw size={14} />
          Try again
        </button>
      </div>
    </section>
  );
}