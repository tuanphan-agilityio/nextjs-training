import { render, screen, fireEvent } from '@testing-library/react';
import Input, { InputProps } from '..';

describe('Input Component', () => {
  const mockProps: InputProps = {
    label: 'Name',
    placeholder: 'Enter your name',
    endDecorator: <div>End</div>,
  };

  it('renders correctly with a label and end decorator', () => {
    const { container } = render(<Input {...mockProps} />);
    expect(container).toMatchSnapshot();
  });

  it('renders correctly without a label and end decorator', () => {
    const { container } = render(<Input placeholder='Placeholder Text' />);
    expect(container).toMatchSnapshot();
  });

  it('renders the label', () => {
    render(<Input {...mockProps} />);
    const labelElement = screen.getByText('Name');
    expect(labelElement).toBeInTheDocument();
  });

  it('renders the end decorator', () => {
    render(
      <Input
        placeholder='Enter your text'
        endDecorator={<div>@gmail.com</div>}
      />,
    );
    const endDecoratorElement = screen.getByText('@gmail.com');
    expect(endDecoratorElement).toBeInTheDocument();
  });

  it('handles input and extracts input data', () => {
    const { container } = render(<Input {...mockProps} />);

    const inputElement = screen.getByPlaceholderText(
      'Enter your name',
    ) as HTMLInputElement;
    fireEvent.change(inputElement, { target: { value: 'NextJs Practice' } });

    const inputValue = inputElement.value;
    expect(inputValue).toBe('NextJs Practice');
    expect(container).toMatchSnapshot();
  });
});
