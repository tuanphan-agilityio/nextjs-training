import { LocalStorage } from '@/utils/storage';

import { CART_STORAGES } from '@/__mocks__/cart';

describe('LocalStorage', () => {
  const KEY = 'testKey';

  beforeEach(() => {
    localStorage.clear();
  });

  it('should save and load data from Local Storage', () => {
    LocalStorage.save(KEY, CART_STORAGES);

    const loadedData = LocalStorage.load(KEY);

    expect(loadedData).toEqual(CART_STORAGES);
  });

  it('should return null if the key does not exist', () => {
    const loadedData = LocalStorage.load(KEY);

    expect(loadedData).toBeNull();
  });

  it('should remove data from Local Storage', () => {
    LocalStorage.save(KEY, CART_STORAGES);

    LocalStorage.remove(KEY);

    const loadedData = LocalStorage.load(KEY);

    expect(loadedData).toBeNull();
  });
});
