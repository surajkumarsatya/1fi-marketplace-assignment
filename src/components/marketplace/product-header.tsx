import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export function ProductHeader() {
  return (
    <header className="flex items-center gap-3 px-4 py-4">
      <Link
        href="/shop?tab=marketplace"
        className="flex items-center justify-center"
        aria-label="Back to marketplace"
      >
        <ChevronLeft
          size={20}
          strokeWidth={1.8}
          className="mt-0.75 text-[#30333a]"
        />
      </Link>

      <h1 className="ml-1 text-base font-semibold leading-none text-[#202124]">
        Product Details
      </h1>
    </header>
  );
}