import { render, screen, fireEvent } from '@testing-library/react';

import CartItem, { CartItemProps } from '..';

const mockCartItem: CartItemProps = {
  productId: 1,
  name: 'Sample Product',
  price: 99.99,
  stock: 10,
  quantity: 2,
  onQuantityChange: jest.fn(),
  onDeleteCartItem: jest.fn(),
};

describe('CartItem component', () => {
  beforeEach(() => {
    render(<CartItem {...mockCartItem} />);
  });

  it('renders product name', () => {
    const productName = screen.getByText('Sample Product');
    expect(productName).toBeInTheDocument();
  });

  it('renders product price', () => {
    const productPrice = screen.getByText('$ 99.99 USD');
    expect(productPrice).toBeInTheDocument();
  });

  it('renders product stock', () => {
    const productStock = screen.getByText('10');
    expect(productStock).toBeInTheDocument();
  });

  it('calls onDeleteCartItem when the delete button is clicked', () => {
    const deleteButton = screen.getByTestId('delete-button');
    fireEvent.click(deleteButton);

    expect(mockCartItem.onDeleteCartItem).toHaveBeenCalledWith(1);
  });
});
