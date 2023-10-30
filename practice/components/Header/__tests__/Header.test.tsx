import { render } from '@testing-library/react';

import Header from '..';

describe('Header Component', () => {
  it('renders correctly', () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });
});
