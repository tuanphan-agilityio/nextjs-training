import { CartStorage } from '@/types/cart';
import { updateCart } from '@/utils/cart/updateCart';

describe('updateCart function', () => {
  it('should add a new product to an empty cart', () => {
    const cart: CartStorage[] = [];
    const productId = 1;
    const quantity = 2;

    const updatedCart = updateCart(cart, productId, quantity);

    expect(updatedCart).toHaveLength(1);
    expect(updatedCart[0].productId).toBe(productId);
    expect(updatedCart[0].quantity).toBe(quantity);
  });

  it('should update the quantity of an existing product in the cart', () => {
    const cart: CartStorage[] = [{ productId: 1, quantity: 2 }];
    const productId = 1;
    const quantity = 3;

    const updatedCart = updateCart(cart, productId, quantity);

    expect(updatedCart).toHaveLength(1);
    expect(updatedCart[0].productId).toBe(productId);
    expect(updatedCart[0].quantity).toBe(5); // 2 (initial) + 3 (new quantity) = 5
  });

  it('should handle non-existing products in the cart', () => {
    const cart: CartStorage[] = [{ productId: 2, quantity: 1 }];
    const productId = 1;
    const quantity = 2;

    const updatedCart = updateCart(cart, productId, quantity);

    expect(updatedCart).toHaveLength(2);
    expect(updatedCart[0].productId).toBe(2);
    expect(updatedCart[1].productId).toBe(productId);
    expect(updatedCart[1].quantity).toBe(quantity);
  });
});
