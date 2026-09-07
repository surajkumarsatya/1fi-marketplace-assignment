"use client";

interface CategoryFilterProps {
  categories: string[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

export function CategoryFilter({
  categories,
  selectedCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <section className="mt-5">
      <div className="mb-3 flex items-center justify-between">
        <h2 className="text-sm font-semibold text-[#202124]">
          Categories
        </h2>
      </div>

      <div className="scrollbar-none flex gap-2 overflow-x-auto pb-1">
        {categories.map((category) => {
          const isActive =
            category === selectedCategory;

          return (
            <button
              key={category}
              type="button"
              onClick={() => onCategoryChange(category)}
              className={[
                "shrink-0 rounded-full px-4 py-2",
                "text-[11px] font-medium",
                "transition-all duration-200 hover:cursor-pointer uppercase",
                isActive
                  ? "bg-[#6d28d9] text-white"
                  : "border border-[#e8e6ed] bg-white text-[#636979]",
              ].join(" ")}
            >
              {category}
            </button>
          );
        })}
      </div>
    </section>
  );
}