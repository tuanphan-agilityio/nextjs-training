import { fireEvent, render, screen } from '@testing-library/react';
import Button, { ButtonProps } from '..';

describe('Button Component', () => {
  const handleClick = jest.fn();

  const mockProps: ButtonProps = {
    children: 'Add To Cart',
    onClick: handleClick,
  };

  it('Should show match Button DOM Snapshot', () => {
    const { container } = render(<Button {...mockProps} />);

    expect(container).toMatchSnapshot();
  });

  it('Should call onClick when the button is clicked', () => {
    render(<Button {...mockProps} />);

    const button = screen.getByRole('button');

    fireEvent.click(button);

    expect(handleClick).toBeCalled();
    expect(handleClick).toBeCalledTimes(1);
  });

  it('Should have the secondary variant class when variant is "secondary"', () => {
    render(<Button {...mockProps} variant='secondary' />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass('text-secondary');
  });
});
