import { notFound } from "next/navigation";

import { getProductById } from "@/src/services/marketplace/marketplace.service";
import { ProductDetails } from "@/src/components/marketplace/product-details";

interface ProductPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProductPage({
  params,
}: ProductPageProps) {
  const { id } = await params;

  const product = await fetchProduct(id);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f6f6f7]">
      <div className="mx-auto min-h-screen w-full max-w-120 bg-[#f8f8f9]">
        <ProductDetails product={product} />
      </div>
    </main>
  );
}

async function fetchProduct(id: string) {
  try {
    return await getProductById(id);
  } catch {
    return null;
  }
}