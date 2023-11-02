import AxiosMockAdapter from 'axios-mock-adapter';

import { ENDPOINTS } from '@/constants/endpoints';

import axiosApp from '../axiosApp';

import { getProducts, getProduct, getProductsByIds } from '../product';
import { MOCK_PRODUCT, MOCK_PRODUCTS } from '@/__mocks__/product';

describe('Product Service', () => {
  let axiosMock: AxiosMockAdapter;

  beforeEach(() => {
    axiosMock = new AxiosMockAdapter(axiosApp);
  });

  afterEach(() => {
    axiosMock.reset();
  });

  it('should fetch products correctly', async () => {
    axiosMock.onGet(ENDPOINTS.PRODUCTS).reply(200, MOCK_PRODUCTS);

    const products = await getProducts();

    expect(products).toEqual(MOCK_PRODUCTS);
  });

  it('should fetch a product by ID correctly', async () => {
    const productId = '1';

    axiosMock
      .onGet(`${ENDPOINTS.PRODUCTS}/${productId}`)
      .reply(200, MOCK_PRODUCT);

    const product = await getProduct(productId);

    expect(product).toEqual(MOCK_PRODUCT);
  });

  it('should fetch products by IDs correctly', async () => {
    const productIds = ['1', '2', '3'];

    productIds.forEach((productId, index) => {
      axiosMock
        .onGet(`${ENDPOINTS.PRODUCTS}/${productId}`)
        .reply(200, MOCK_PRODUCTS[index]);
    });

    const products = await getProductsByIds(productIds);

    expect(products).toEqual(MOCK_PRODUCTS);
  });

  it('should handle errors when fetching products', async () => {
    axiosMock.onGet(ENDPOINTS.PRODUCTS).reply(500, 'Server Error');

    try {
      await getProducts();
    } catch (error) {
      expect(error).toBe('Server Error');
    }
  });
});
