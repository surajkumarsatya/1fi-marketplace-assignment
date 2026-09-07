export interface ProductVariant {
  id: string;
  name: string;
  price: number;
}

export interface Product {
  id: number;
  title: string;
  description: string;
  category: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand?: string;
  thumbnail: string;
  images: string[];

  variants?: ProductVariant[];
}

export interface ProductsResponse {
  products: Product[];
  total: number;
  skip: number;
  limit: number;
}

export interface EMIPlan {
  id: string;
  duration: number;
  monthlyAmount: number;
  totalAmount: number;
  interestRate: number;
}