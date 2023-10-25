import { render, screen } from '@testing-library/react';
import Breadcrumb, { BreadcrumbProps } from '..';

describe('Breadcrumb Component', () => {
  const mockProps: BreadcrumbProps = {
    items: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Category 1', href: '/products/category1' },
    ],
  };

  const renderBreadcrumb = () => render(<Breadcrumb {...mockProps} />);

  it('renders Breadcrumb component with items', () => {
    renderBreadcrumb();

    const breadcrumbItems = screen.getAllByRole('listitem');
    expect(breadcrumbItems).toHaveLength(mockProps.items.length);

    const lastBreadcrumbItem = breadcrumbItems[breadcrumbItems.length - 1];
    expect(lastBreadcrumbItem).toHaveClass('font-primary-bold');
  });

  it('matches snapshot', () => {
    const { container } = renderBreadcrumb();
    expect(container).toMatchSnapshot();
  });
});
