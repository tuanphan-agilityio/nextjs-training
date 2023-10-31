import { render } from '@testing-library/react';

import ProductCard, { ProductCardProps } from '..';

describe('ProductCard Component', () => {
  const mockProps: ProductCardProps = {
    id: 1,
    name: 'Product Name',
    price: 99.99,
    status: 'In Stock',
    imgHref: '/images/product-1.jpg',
  };

  it('renders correctly with mockProps', () => {
    const { container } = render(<ProductCard {...mockProps} />);
    expect(container).toMatchSnapshot();
  });

  it('displays the product name', () => {
    const { getByText } = render(<ProductCard {...mockProps} />);
    const productName = getByText('Product Name');
    expect(productName).toBeInTheDocument();
  });

  it('displays the product price', () => {
    const { getByText } = render(<ProductCard {...mockProps} />);
    const productPrice = getByText('99.99$');
    expect(productPrice).toBeInTheDocument();
  });

  it('displays the product status', () => {
    const { getByText } = render(<ProductCard {...mockProps} />);
    const productStatus = getByText('In Stock');
    expect(productStatus).toBeInTheDocument();
  });

  it('displays the product image', () => {
    const { getByAltText } = render(<ProductCard {...mockProps} />);
    const productImage = getByAltText('Product Name');
    expect(productImage).toBeInTheDocument();
  });
});
