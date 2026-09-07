"use client";

import { useRouter, useSearchParams } from "next/navigation";

type ShopTab = "brands" | "nearby" | "marketplace";

const tabs: {
  id: ShopTab;
  label: string;
}[] = [
  {
    id: "brands",
    label: "Top Brands",
  },
  {
    id: "nearby",
    label: "Nearby Stores",
  },
  {
    id: "marketplace",
    label: "Marketplace",
  },
];

export function ShopTabs() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const tab = searchParams.get("tab");

  const currentTab: ShopTab =
    tab === "nearby" || tab === "marketplace"
      ? tab
      : "brands";

  const handleTabChange = (selectedTab: ShopTab) => {
    router.push(`/shop?tab=${selectedTab}`);
  };

  return (
    <div className="relative z-20 -mt-5 px-4">
      <div className="flex w-full gap-1 rounded-full bg-[#f3effb] p-1.5 shadow-sm">
        {tabs.map((tabItem) => {
          const isActive = currentTab === tabItem.id;

          return (
            <button
              key={tabItem.id}
              type="button"
              onClick={() => handleTabChange(tabItem.id)}
              className={[
                "flex-1 rounded-full px-2 py-3",
                "text-[11px] font-medium",
                "transition-all duration-200",
                isActive
                  ? "bg-white text-[#6d28d9] shadow-[0_1px_4px_rgba(0,0,0,0.10)]"
                  : "text-[#566074]",
              ].join(" ")}
            >
              {tabItem.label}

              {isActive && (
                <span className="mx-auto mt-1 block h-0.5 w-4 rounded-full bg-[#6d28d9]" />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
}