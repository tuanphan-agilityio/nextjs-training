import { fireEvent, render, screen } from '@testing-library/react';

import Button, { ButtonProps } from '..';

describe('Button Component', () => {
  const handleClick = jest.fn();

  const mockProps: ButtonProps = {
    children: 'Add To Cart',
    onClick: handleClick,
    startIcon: <span>startIcon</span>,
    endIcon: <span>endIcon</span>,
    className: 'button-class',
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

  it('Should have the tertiary variant class when variant is "tertiary"', () => {
    render(<Button {...mockProps} variant='tertiary' />);
    const button = screen.getByRole('button');
    expect(button).toHaveClass(
      'text-transparent font-primary-bold bg-clip-text bg-gradient-to-b from-primary-gradient-start to-primary-gradient-end text-primary',
    );
  });

  // it('Should have the startIcon', () => {
  //   render(<Button {...mockProps} startIcon={<div>startIcon</div>} />);
  //   expect(screen.getByText('startIcon')).toBeInTheDocument();
  // });

  // it('Should have the endIcon', () => {
  //   render(<Button {...mockProps} startIcon={<div>endIcon</div>} />);
  //   expect(screen.getByText('endIcon')).toBeInTheDocument();
  // });

  // it('Should have the className', () => {
  //   render(<Button {...mockProps} className='button-class' />);
  //   const button = screen.getByRole('button');
  //   expect(button).toHaveClass('button-class');
  // });
});
