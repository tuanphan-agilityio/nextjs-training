import { render } from '@testing-library/react';

import SidebarFilter from '..';

describe('SidebarFilter Component', () => {
  it('renders correctly', () => {
    const { container } = render(<SidebarFilter />);
    expect(container).toMatchSnapshot();
  });

  it('displays the "Filter" text', () => {
    const { getByText } = render(<SidebarFilter />);
    const filterText = getByText('Filter');
    expect(filterText).toBeInTheDocument();
  });

  it('displays the "Categories" text', () => {
    const { getByText } = render(<SidebarFilter />);
    const categoriesText = getByText('Categories');
    expect(categoriesText).toBeInTheDocument();
  });
});
