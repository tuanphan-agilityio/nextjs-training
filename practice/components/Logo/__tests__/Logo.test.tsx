import { render } from '@testing-library/react';

import Logo from '..';

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
