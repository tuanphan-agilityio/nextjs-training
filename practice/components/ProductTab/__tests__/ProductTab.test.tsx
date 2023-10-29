import { render } from '@testing-library/react';

import ProductTab from '..';

describe('ProductTab Component', () => {
  it('should match the snapshot', () => {
    const { container } = render(<ProductTab />);
    expect(container).toMatchSnapshot();
  });
});
