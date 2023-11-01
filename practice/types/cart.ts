import { Product } from './product';

interface CartStorage {
  quantity: number;
  productId: number;
}

interface CartProductItem
  extends CartStorage,
    Pick<Product, 'name' | 'price' | 'thumbnail' | 'stock'> {
  quantity: number;
}

export type { CartStorage, CartProductItem };
