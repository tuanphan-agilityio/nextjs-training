import { render } from '@testing-library/react';

import SubHeader, { SubHeaderProps } from '..';

describe('SubHeader Component', () => {
  const mockProps: SubHeaderProps = {
    breadcrumbItems: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
    ],
    title: 'Product Page',
    description: 'Browse our products',
  };

  it('renders correctly with mockProps', () => {
    const { container } = render(<SubHeader {...mockProps} />);
    expect(container).toMatchSnapshot();
  });

  it('displays the breadcrumb', () => {
    const { getByText } = render(<SubHeader {...mockProps} />);
    mockProps.breadcrumbItems.forEach((item) => {
      const breadcrumbText = getByText(item.label);
      expect(breadcrumbText).toBeInTheDocument();
    });
  });

  it('does not display description when not provided', () => {
    const { queryByText } = render(
      <SubHeader
        breadcrumbItems={mockProps.breadcrumbItems}
        title={mockProps.title}
      />,
    );
    const descriptionText = queryByText(mockProps.description as string);
    expect(descriptionText).toBeNull();
  });
});
