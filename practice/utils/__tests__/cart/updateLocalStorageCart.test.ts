import { updateLocalStorageCart } from '@/utils/cart/updateLocalStorageCart';
import { LocalStorage } from '@/utils/storage';
import { STORAGE_KEYS } from '@/constants/storage';
import { CART_ITEMS, CART_STORAGES } from '@/__mocks__/cart';

jest.mock('@/utils/storage', () => ({
  LocalStorage: {
    save: jest.fn(),
  },
}));

describe('updateLocalStorageCart', () => {
  it('should update local storage cart with the provided cart data', () => {
    updateLocalStorageCart(CART_ITEMS);

    expect(LocalStorage.save).toHaveBeenCalledWith(
      STORAGE_KEYS.CART,
      CART_STORAGES,
    );
  });

  it('should call LocalStorage.save with the correct storage key', () => {
    updateLocalStorageCart(CART_ITEMS);

    expect(LocalStorage.save).toHaveBeenCalledWith(
      STORAGE_KEYS.CART,
      expect.any(Array),
    );
  });
});
