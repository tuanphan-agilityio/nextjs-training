import { render, screen, fireEvent } from '@testing-library/react';

import CounterInput, { CounterInputProps } from '..';

describe('CounterInput Component', () => {
  const mockProps: Required<CounterInputProps> = {
    initialValue: 3,
    onValueChange: jest.fn(),
    minValue: 0,
    maxValue: 10,
  };

  it('renders the initial value correctly', () => {
    render(<CounterInput {...mockProps} />);
    const input = screen.getByRole('textbox');

    expect(input).toHaveValue(mockProps.initialValue.toString());
  });

  it('increments the value when the "+" button is clicked', () => {
    render(<CounterInput {...mockProps} />);
    const incrementButton = screen.getByText('+');
    fireEvent.click(incrementButton);

    expect(mockProps.onValueChange).toHaveBeenCalledWith(
      mockProps.initialValue + 1,
    );
  });

  it('decrements the value when the "-" button is clicked', () => {
    render(<CounterInput {...mockProps} />);
    const decrementButton = screen.getByText('-');
    fireEvent.click(decrementButton);

    expect(mockProps.onValueChange).toHaveBeenCalledWith(
      mockProps.initialValue - 1,
    );
  });

  it('resets to 0 when the input is cleared', () => {
    render(<CounterInput {...mockProps} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '' } });

    expect(mockProps.onValueChange).toHaveBeenCalledWith(0);
  });

  it('changes the value when a valid input is entered', () => {
    render(<CounterInput {...mockProps} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: '5' } });

    expect(mockProps.onValueChange).toHaveBeenCalledWith(5);
  });

  it('matches the snapshot', () => {
    const { container } = render(<CounterInput {...mockProps} />);
    expect(container).toMatchSnapshot();
  });
});
