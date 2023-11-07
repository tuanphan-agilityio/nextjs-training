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
});
