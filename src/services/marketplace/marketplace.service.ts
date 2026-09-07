import type {
  Product,
  ProductsResponse,
  ProductVariant,
} from "./marketplace.types";

const PRODUCTS_API =
  "https://dummyjson.com/products";

function generateVariants(
  product: Product
): ProductVariant[] {
  const category = product.category.toLowerCase();

  if (
    category.includes("smartphone") ||
    category.includes("laptop") ||
    category.includes("tablet")
  ) {
    return [
      {
        id: `${product.id}-128`,
        name: "128 GB",
        price: product.price,
      },
      {
        id: `${product.id}-256`,
        name: "256 GB",
        price: product.price * 1.12,
      },
      {
        id: `${product.id}-512`,
        name: "512 GB",
        price: product.price * 1.25,
      },
    ];
  }

  if (
    category.includes("shoes") ||
    category.includes("shirts") ||
    category.includes("tops") ||
    category.includes("dresses")
  ) {
    return [
      {
        id: `${product.id}-small`,
        name: "Small",
        price: product.price,
      },
      {
        id: `${product.id}-medium`,
        name: "Medium",
        price: product.price,
      },
      {
        id: `${product.id}-large`,
        name: "Large",
        price: product.price,
      },
    ];
  }

  return [
    {
      id: `${product.id}-standard`,
      name: "Standard",
      price: product.price,
    },
  ];
}

export async function getProducts(): Promise<Product[]> {
  const response = await fetch(PRODUCTS_API, {
    next: {
      revalidate: 300,
    },
  });

  if (!response.ok) {
    throw new Error(
      `Failed to fetch products: ${response.status}`
    );
  }

  const data: ProductsResponse =
    await response.json();

  return data.products.map((product) => ({
    ...product,
    variants: generateVariants(product),
  }));
}

export async function getProductById(
  id: string
): Promise<Product> {
  const response = await fetch(
    `${PRODUCTS_API}/${id}`,
    {
      next: {
        revalidate: 300,
      },
    }
  );

  if (!response.ok) {
    throw new Error(
      `Failed to fetch product: ${response.status}`
    );
  }

  const product: Product = await response.json();

  return {
    ...product,
    variants: generateVariants(product),
  };
}