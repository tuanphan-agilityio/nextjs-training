import { render, screen } from '@testing-library/react';

import PreviewImages, { PreviewImagesProps } from '..';

describe('PreviewImages Component', () => {
  const mockProps: PreviewImagesProps = {
    imageHrefs: [
      '/images/product-1.webp',
      '/images/product-2.webp',
      '/images/product-3.webp',
    ],
  };

  it('renders the first image as the initial main image', () => {
    render(<PreviewImages {...mockProps} />);
    const mainImage = screen.getByTestId(/main-image-\d/);
    expect(mainImage).toHaveAttribute('data-testid', 'main-image-0');
  });

  it('renders all thumbnails', () => {
    render(<PreviewImages {...mockProps} />);
    const thumbnails = screen.getAllByTestId(/image-\d/);
    expect(thumbnails).toHaveLength(mockProps.imageHrefs.length + 1);
  });

  it('matches the snapshot', () => {
    const { container } = render(<PreviewImages {...mockProps} />);
    expect(container).toMatchSnapshot();
  });
});
