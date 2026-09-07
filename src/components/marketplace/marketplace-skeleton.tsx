export function MarketplaceSkeleton() {
  return (
    <section className="animate-pulse px-4 pb-8">
      {/* Header */}
      <div className="mb-5">
        <div className="h-3 w-20 rounded bg-[#e5e5e8]" />

        <div className="mt-2 h-7 w-48 rounded bg-[#e5e5e8]" />

        <div className="mt-2 h-4 w-64 rounded bg-[#e5e5e8]" />
      </div>

      {/* Search */}
      <div className="h-12 w-full rounded-full bg-[#e5e5e8]" />

      {/* Categories */}
      <div className="mt-5">
        <div className="mb-3 h-4 w-24 rounded bg-[#e5e5e8]" />

        <div className="flex gap-2 overflow-hidden">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="h-9 w-20 shrink-0 rounded-full bg-[#e5e5e8]"
            />
          ))}
        </div>
      </div>

      {/* Products heading */}
      <div className="mt-6 flex items-center justify-between">
        <div className="h-5 w-20 rounded bg-[#e5e5e8]" />
        <div className="h-3 w-14 rounded bg-[#e5e5e8]" />
      </div>

      {/* Product cards */}
      <div className="mt-3 grid grid-cols-2 gap-3">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            className="overflow-hidden rounded-2xl border border-[#eeeeef] bg-white"
          >
            <div className="h-44 bg-[#e5e5e8]" />

            <div className="space-y-2 p-3">
              <div className="h-4 w-3/4 rounded bg-[#e5e5e8]" />

              <div className="h-4 w-1/2 rounded bg-[#e5e5e8]" />

              <div className="h-3 w-2/3 rounded bg-[#e5e5e8]" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}