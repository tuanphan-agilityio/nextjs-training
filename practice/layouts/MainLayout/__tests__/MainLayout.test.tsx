import { render, screen } from '@testing-library/react';
import MainLayout, { MainLayoutProps } from '..';

describe('Main Layout', () => {
  const mockProps: MainLayoutProps = {
    children: 'Page content MainLayout',
  };

  it('displays the correct content', () => {
    render(<MainLayout {...mockProps} />);
    const pageContent = screen.getByText('Page content MainLayout');

    expect(pageContent).toBeInTheDocument();
  });

  it('renders correctly', () => {
    const { container } = render(<MainLayout {...mockProps} />);
    expect(container).toMatchSnapshot();
  });
});
