import React from 'react';
import { render } from '@testing-library/react';

import Logo from '..';
import { ROUTES } from '@/constants/routes';

describe('Logo Component', () => {
  it('renders correctly', () => {
    const { container } = render(<Logo />);
    expect(container).toMatchSnapshot();
  });

  it('displays the correct text', () => {
    const { getByText } = render(<Logo />);
    const textElement = getByText('mangcoding Store');
    expect(textElement).toBeInTheDocument();
  });

  it('contains the correct link', () => {
    const { getByRole } = render(<Logo />);
    const linkElement = getByRole('link', { name: /mangcoding Store/i });
    expect(linkElement).toHaveAttribute('href', ROUTES.HOME);
  });
});
