import { render } from '@testing-library/react';

import Footer from '..';

describe('Footer Component', () => {
  it('renders correctly', () => {
    const { container } = render(<Footer />);
    expect(container).toMatchSnapshot();
  });

  it('displays a "Login Now" button', () => {
    const { getByText } = render(<Footer />);
    const button = getByText('Login Now');
    expect(button).toBeInTheDocument();
  });
});
