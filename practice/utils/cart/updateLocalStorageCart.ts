import { CartProductItem, CartStorage } from '@/types/cart';
import { STORAGE_KEYS } from '@/constants/storage';
import { LocalStorage } from '@/utils/storage';

const updateLocalStorageCart = (cart: CartProductItem[]) => {
  const updatedCartStorages: CartStorage[] = cart.map(
    ({ productId, quantity }) => ({
      productId,
      quantity,
    }),
  );

  LocalStorage.save(STORAGE_KEYS.CART, updatedCartStorages);
};

export { updateLocalStorageCart };
