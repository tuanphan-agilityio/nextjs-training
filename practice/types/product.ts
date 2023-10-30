interface Product {
  id: number;
  price: number;
  name: string;
  thumbnail: string;
  status: string;
  imgHrefs: string[];
  description: string;
  stock: number;
}

export type { Product };
