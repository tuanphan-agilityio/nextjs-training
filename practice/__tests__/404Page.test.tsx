import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from '@/pages/404';

describe('NotFound Page', () => {
  it('404 Page matches DOM Snapshot', () => {
    const { container } = render(<NotFound />);

    expect(container).toMatchSnapshot();
  });

  it('should have a link to the home page', () => {
    render(<NotFound />);

    const linkElement = screen.getByText('Go to Home Page');
    const href = linkElement.getAttribute('href');
    expect(href).toBe('/');
  });
});
