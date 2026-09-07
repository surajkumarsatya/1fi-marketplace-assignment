import { Suspense } from "react";
import { HeroBanner } from "@/src/components/shop/hero-banner";
import { ShopTabs } from "@/src/components/shop/shop-tabs";
import { BottomNavigation } from "@/src/components/shop/bottom-navigation";
import { Marketplace } from "@/src/components/marketplace/marketplace";

interface ShopPageProps {
  searchParams: Promise<{
    tab?: string;
  }>;
}

export default async function ShopPage({
  searchParams,
}: ShopPageProps) {
  const params = await searchParams;

  const currentTab = params.tab ?? "brands";

  return (
    <main className="min-h-screen bg-[#f6f6f7]">
      <div className="relative mx-auto min-h-screen w-full max-w-125 overflow-hidden bg-[#f8f8f9] pb-24">
        <HeroBanner />

        <Suspense fallback={null}>
          <ShopTabs />
        </Suspense>

        <div className="pt-6">
          {currentTab === "brands" && (
            <BrandsPlaceholder />
          )}

          {currentTab === "nearby" && (
            <NearbyPlaceholder />
          )}

          {currentTab === "marketplace" && (
            <Marketplace />
          )}
        </div>

        <BottomNavigation />
      </div>
    </main>
  );
}

function BrandsPlaceholder() {
  return (
    <section className="px-4">
      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-[#171717]">
          Top Brands
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Top Brands section.
        </p>
      </div>
    </section>
  );
}

function NearbyPlaceholder() {
  return (
    <section className="px-4">
      <div className="rounded-2xl bg-white p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-[#171717]">
          Nearby Stores
        </h2>

        <p className="mt-2 text-sm text-gray-500">
          Nearby Stores section.
        </p>
      </div>
    </section>
  );
}