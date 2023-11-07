import { ButtonHTMLAttributes, FC, ReactElement, memo } from 'react';
import clsx from 'clsx';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'tertiary';
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  className?: string;
}

const buttonVariants = {
  primary:
    'bg-gradient-to-b from-primary-gradient-start to-primary-gradient-end text-primary',
  secondary: 'text-secondary',
  tertiary:
    'text-transparent font-primary-bold bg-clip-text bg-gradient-to-b from-primary-gradient-start to-primary-gradient-end text-primary',
};

const Button: FC<ButtonProps> = ({
  variant = 'primary',
  children = '',
  className = '',
  startIcon = null,
  endIcon = null,
  ...props
}) => {
  const buttonClasses = clsx(
    'inline-flex justify-center items-center w-[180px] h-12 bg-primary font-primary-regular text-md hover:opacity-80',
    buttonVariants[variant],
    className,
  );

  return (
    <button className={buttonClasses} {...props}>
      {startIcon && <span className='inline-block mr-5'>{startIcon}</span>}
      {children}
      {endIcon && <span className='inline-block ml-5'>{endIcon}</span>}
    </button>
  );
};

export type { ButtonProps };

export default memo(Button);
