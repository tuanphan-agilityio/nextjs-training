import { render, screen, fireEvent } from '@testing-library/react';
import CartPage from '@/pages/cart/index';
import { act } from 'react-dom/test-utils';
import { MOCK_PRODUCT } from '@/__mocks__/product';
import { CART_STORAGES } from '@/__mocks__/cart';

jest.mock('@/services/product', () => ({
  getProduct: jest.fn().mockImplementation((productId: string) => ({
    ...MOCK_PRODUCT,
    id: productId,
  })),
}));

describe('CartPage', () => {
  afterAll(() => {
    window.localStorage.clear();
  });

  it('Cart Page render correctly products', async () => {
    window.localStorage.setItem('shop_cart', JSON.stringify(CART_STORAGES));
    const { container } = render(<CartPage />);

    expect(await screen.findAllByText(/\$ 120 usd/i)).toBeInTheDocument;

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should delete a product from the cart', async () => {
    window.localStorage.setItem('shop_cart', JSON.stringify(CART_STORAGES));

    render(<CartPage />);

    await screen.findAllByText('Cart Product');

    expect(screen.getAllByText('Smart T-shirt')[0]).toBeInTheDocument();

    const deleteButton = screen.getAllByTestId('delete-button')[0];
    act(() => {
      fireEvent.click(deleteButton);
    });

    await screen.findByText('Are you sure you want to delete this product?');

    const confirmDeleteButton = screen.getByText('Confirm');
    act(() => {
      fireEvent.click(confirmDeleteButton);
    });

    expect(await screen.findAllByText('Smart T-shirt')).toHaveLength(
      CART_STORAGES.length - 1,
    );
  });
});
