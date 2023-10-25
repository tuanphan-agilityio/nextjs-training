import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import NavItem from '..';

describe('NavItem Component', () => {
  const mockProps = {
    href: '/mock-link',
    title: 'Mock Link',
  };

  it('renders correctly with mockProps and is not active', () => {
    const { container } = render(<NavItem {...mockProps} isActive={false} />);
    expect(container).toMatchSnapshot();
  });

  it('renders correctly when active', () => {
    const { container } = render(<NavItem isActive={true} {...mockProps} />);
    expect(container).toMatchSnapshot();
  });

  it('displays the correct title', () => {
    render(<NavItem {...mockProps} isActive={false} />);
    const link = screen.getByText('Mock Link');
    expect(link).toBeInTheDocument();
  });

  it('contains the correct href link', () => {
    render(<NavItem {...mockProps} isActive={false} />);
    const link = screen.getByRole('link', { name: /Mock Link/i });
    expect(link).toHaveAttribute('href', '/mock-link');
  });

  it('applies active class when active', () => {
    render(<NavItem isActive={true} {...mockProps} />);
    const link = screen.getByText('Mock Link');
    expect(link).toHaveClass('after:bg-quaternary');
  });

  it('applies hover class when not active', () => {
    render(<NavItem isActive={false} {...mockProps} />);
    const link = screen.getByText('Mock Link');
    userEvent.hover(link);
    expect(link).toHaveClass('hover:text-quaternary');
  });
});
