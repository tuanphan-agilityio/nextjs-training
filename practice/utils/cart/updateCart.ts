import { CartStorage } from '@/types/cart';

const updateCart = (
  cart: CartStorage[],
  productId: number,
  quantity: number,
): CartStorage[] => {
  const existingProductIndex = cart.findIndex(
    (cartProduct) => cartProduct.productId === productId,
  );

  if (existingProductIndex !== -1) {
    cart[existingProductIndex].quantity += quantity;
  } else {
    cart.push({
      productId: productId,
      quantity: quantity,
    });
  }

  return cart;
};

export { updateCart };
