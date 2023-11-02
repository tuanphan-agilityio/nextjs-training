import { CartProductItem, CartStorage } from '@/types/cart';

const CART_STORAGES: CartStorage[] = [
  { productId: 1, quantity: 2 },
  { productId: 2, quantity: 2 },
  { productId: 3, quantity: 2 },
];

const CART_ITEMS: CartProductItem[] = CART_STORAGES.map(
  ({ productId, quantity }, index) => ({
    productId,
    quantity,
    name: `Product ${index}`,
    thumbnail: `Thumbnail ${index}`,
    price: 30,
    stock: 1305,
  }),
);

export { CART_STORAGES, CART_ITEMS };
