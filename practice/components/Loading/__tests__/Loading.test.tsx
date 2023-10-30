import { render } from '@testing-library/react';

import Loading from '..';

describe('Loading Component', () => {
  it('should match the snapshot', () => {
    const { container } = render(<Loading />);
    expect(container).toMatchSnapshot();
  });

  it('should have the correct class name', () => {
    const { container } = render(<Loading />);
    const loadingElement = container.querySelector('.bg-tertiary');
    expect(loadingElement).toBeInTheDocument();
  });

  it('should have the spinning animation', () => {
    const { container } = render(<Loading />);
    const spinnerElement = container.querySelector('.animate-spin');
    expect(spinnerElement).toBeInTheDocument();
  });
});
