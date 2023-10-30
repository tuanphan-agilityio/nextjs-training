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

  const renderStartIcon = startIcon && (
    <span className='inline-block mr-5'>{startIcon}</span>
  );

  const renderEndIcon = endIcon && (
    <span className='inline-block ml-5'>{endIcon}</span>
  );

  return (
    <button className={buttonClasses} {...props}>
      {renderStartIcon}
      {children}
      {renderEndIcon}
    </button>
  );
};

export type { ButtonProps };

export default memo(Button);
