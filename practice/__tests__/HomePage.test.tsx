import { render } from '@testing-library/react';

import Home, { HomeProps, getStaticProps } from '@/pages/index';

import { MOCK_DEFAULT_PARAMS, MOCK_PRODUCTS } from '@/__mocks__/product';

jest.mock('@/services/product', () => ({
  getProducts: jest.fn(() => {
    return MOCK_PRODUCTS;
  }),
}));

describe('Home Page', () => {
  const props: HomeProps = {
    params: MOCK_DEFAULT_PARAMS,
    products: MOCK_PRODUCTS,
  };
  it('Home Page matches DOM Snapshot', () => {
    const { container } = render(<Home {...props} />);

    expect(container).toMatchSnapshot();
  });

  it('getStaticProps should return props ', async () => {
    const result = await getStaticProps({});

    expect(result).toStrictEqual({
      props: {
        params: MOCK_DEFAULT_PARAMS,
        products: MOCK_PRODUCTS,
      },
    });
  });
});
