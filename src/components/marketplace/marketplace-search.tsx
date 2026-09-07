"use client";

import { Search, X } from "lucide-react";

interface MarketplaceSearchProps {
  value: string;
  onChange: (value: string) => void;
}

export function MarketplaceSearch({
  value,
  onChange,
}: MarketplaceSearchProps) {
  return (
    <div className="relative">
      <Search
        size={17}
        strokeWidth={1.8}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9aa1b1]"
      />

      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search products..."
        className="h-12 w-full rounded-full border border-[#ededf0] bg-white pl-11 pr-10 text-sm text-[#202124] outline-none transition placeholder:text-[#9aa1b1] focus:border-[#8b5cf6]"
      />

      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          className="absolute right-3 top-1/2 flex h-7 w-7 -translate-y-1/2 items-center justify-center rounded-full bg-[#f1f1f4]"
          aria-label="Clear search"
        >
          <X size={14} className="text-[#6f7480]" />
        </button>
      )}
    </div>
  );
}