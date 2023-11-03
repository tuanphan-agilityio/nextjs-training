import { CartProductItem } from '@/types/cart';
import { Product } from '@/types/product';

const transformData = (
  data: Product[],
  quantities: number[],
): CartProductItem[] => {
  const transformedCart: CartProductItem[] = data.map(
    ({ id, name, price, stock, thumbnail }, index) => {
      const quantity = quantities[index] ?? 0;
      return {
        productId: id,
        name,
        price,
        stock,
        thumbnail,
        quantity,
      };
    },
  );

  return transformedCart;
};

export { transformData };
