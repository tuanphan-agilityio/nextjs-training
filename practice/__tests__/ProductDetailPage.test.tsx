import { render } from '@testing-library/react';

import ProductDetail, {
  ProductDetailProps,
  getStaticProps,
  getStaticPaths,
} from '@/pages/[productId]';

import { MOCK_PRODUCT, MOCK_PRODUCTS } from '@/__mocks__/product';

jest.mock('@/services/product', () => ({
  getProducts: jest.fn(() => {
    return MOCK_PRODUCTS;
  }),

  getProduct: jest.fn(() => {
    return MOCK_PRODUCT;
  }),
}));

describe('Product detail page', () => {
  const props: ProductDetailProps = {
    product: MOCK_PRODUCT,
  };
  it('Product detail page matches DOM Snapshot', () => {
    const { container } = render(<ProductDetail {...props} />);

    expect(container).toMatchSnapshot();
  });

  it('getStaticPaths should return paths ', async () => {
    const mockPaths = MOCK_PRODUCTS.map((product) => ({
      params: { productId: String(product.id) },
    }));

    const result = await getStaticPaths({});

    expect(result).toStrictEqual({
      paths: mockPaths,
      fallback: true,
    });
  });

  it('getStaticProps should return props when productId existing in params', async () => {
    const result = await getStaticProps({
      params: {
        productId: '1',
      },
    });

    expect(result).toStrictEqual({
      props: {
        product: MOCK_PRODUCT,
      },
      revalidate: 60,
    });
  });

  it('getStaticProps should return notFound when productId not existing in params', async () => {
    const result = await getStaticProps({});

    expect(result).toStrictEqual({
      notFound: true,
    });
  });
});
