import { FC, InputHTMLAttributes, ReactElement, memo } from 'react';
import clsx from 'clsx';

import { TextAlign } from '@/types/style';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  endDecorator?: ReactElement;
  className?: string;
  align?: TextAlign;
}

const Input: FC<InputProps> = ({
  label = '',
  endDecorator = null,
  className = '',
  align = 'left',
  ...props
}) => {
  return (
    <>
      {label && (
        <label className='block w-full text-md font-bold text-primary leading-7 mb-1'>
          {label}
        </label>
      )}
      <div className={clsx('flex px-4 py-2 w-full bg-primary', className)}>
        <input
          className={clsx([
            'block w-full border-none focus:outline-none',
            align && `text-${align}`,
          ])}
          {...props}
        />
        {endDecorator && (
          <div className='flex items-center w-6 bg-primary'>{endDecorator}</div>
        )}
      </div>
    </>
  );
};

export type { InputProps };

export default memo(Input);
