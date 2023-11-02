import { render, screen, fireEvent } from '@testing-library/react';

import Modal, { ModalProps } from '..';

const mockProps: ModalProps = {
  isOpen: false,
  onCancel: jest.fn(),
  onOk: jest.fn(),
  children: <div>Modal Content</div>,
};

describe('Modal Component', () => {
  it('renders the modal when isOpen is true', () => {
    render(<Modal {...mockProps} isOpen={true} />);

    const modalContent = screen.getByText('Modal Content');
    expect(modalContent).toBeInTheDocument();
  });

  it('does not render the modal when isOpen is false', () => {
    render(<Modal {...mockProps} isOpen={false} />);

    const modalContent = screen.queryByText('Modal Content');
    expect(modalContent).not.toBeInTheDocument();
  });

  it('calls onCancel when clicking the background', () => {
    render(<Modal {...mockProps} isOpen={true} />);

    const background = screen.getByTestId('modal-background');
    fireEvent.click(background);
    expect(mockProps.onCancel).toHaveBeenCalled();
  });

  it('calls onOk when confirming in a confirm modal', () => {
    render(<Modal {...mockProps} isOpen={true} isConfirmModal />);

    const confirmButton = screen.getByText('Confirm');
    fireEvent.click(confirmButton);
    expect(mockProps.onOk).toHaveBeenCalled();
  });

  it('calls onOk when confirming in a confirm modal', () => {
    const { container } = render(
      <Modal {...mockProps} isOpen={true} isConfirmModal />,
    );

    fireEvent.keyDown(container, {
      key: 'Escape',
      code: 'Escape',
      keyCode: 27,
      charCode: 27,
    });

    expect(mockProps.onCancel).toHaveBeenCalled();
  });
});
