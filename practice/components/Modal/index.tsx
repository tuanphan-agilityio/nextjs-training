import { FC, ReactNode, useEffect } from 'react';
import { createPortal } from 'react-dom';
import clsx from 'clsx';

import useEscapeKey from '@/hooks/useEscapeKey';

import Button from '@/components/Button';

interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onCancel: () => void;
  onOk: () => void;
  className?: string;
  isConfirmModal?: boolean;
}

const Modal: FC<ModalProps> = ({
  children,
  isOpen,
  onCancel,
  onOk,
  className,
  isConfirmModal = false,
}) => {
  useEscapeKey(onCancel);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onCancel]);

  if (!isOpen) {
    return null;
  }

  return createPortal(
    <div className='fixed inset-0 flex items-center justify-center z-50'>
      <div
        className='absolute inset-0 bg-black opacity-50'
        data-testid='modal-background'
        onClick={onCancel}
      />
      <div
        className={clsx(
          'relative bg-primary p-6 w-fit rounded-lg sm:p-2',
          className,
        )}
      >
        {children}
        {isConfirmModal && (
          <div className='flex justify-end mt-4'>
            <Button
              variant='tertiary'
              onClick={onCancel}
              className='ml-2 px-2 w-fit'
            >
              Cancel
            </Button>
            <Button onClick={onOk} className='ml-2 px-2 w-fit'>
              Confirm
            </Button>
          </div>
        )}
      </div>
    </div>,
    document.getElementById('modal-root') as HTMLElement,
  );
};

export type { ModalProps };

export default Modal;
