import { CartProductItem } from '@/types/cart';
import { Product } from '@/types/product';
import { MOCK_PRODUCTS } from '@/__mocks__/product';
import { transformData } from '@/utils/cart/transformData';

describe('transformData function', () => {
  it('should transform data correctly', () => {
    const data: Product[] = MOCK_PRODUCTS;
    const quantities: number[] = [3, 5, 7];

    const transformedCart: CartProductItem[] = transformData(data, quantities);

    expect(transformedCart).toHaveLength(data.length);
    expect(transformedCart[0].productId).toBe(data[0].id);
    expect(transformedCart[0].name).toBe(data[0].name);
    expect(transformedCart[0].price).toBe(data[0].price);
    expect(transformedCart[0].stock).toBe(data[0].stock);
    expect(transformedCart[0].thumbnail).toBe(data[0].thumbnail);
    expect(transformedCart[0].quantity).toBe(quantities[0]);
  });

  it('should handle empty data correctly', () => {
    const data: Product[] = [];
    const quantities: number[] = [];

    const transformedCart: CartProductItem[] = transformData(data, quantities);

    expect(transformedCart).toHaveLength(0);
  });

  it('should handle missing quantities correctly', () => {
    const data: Product[] = MOCK_PRODUCTS;
    const quantities: number[] = [];

    const transformedCart: CartProductItem[] = transformData(data, quantities);

    expect(transformedCart).toHaveLength(data.length);
    expect(transformedCart[0].quantity).toBe(0);
  });
});
