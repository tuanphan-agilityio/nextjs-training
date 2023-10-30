import { ChangeEvent, FC, memo, useCallback, useState } from 'react';
import clsx from 'clsx';

import Button from '@/components/Button';
import Input from '@/components/Input';

interface CounterInputProps {
  initialValue?: number;
  onValueChange?: (newValue: number) => void;
  minValue?: number;
  maxValue?: number;
}

const CounterInput: FC<CounterInputProps> = ({
  initialValue = 0,
  onValueChange = () => {},
  maxValue = Number.MAX_VALUE,
  minValue = 0,
}) => {
  const [count, setCount] = useState(initialValue);

  const handleIncrement = useCallback(() => {
    const newCount = count + 1;
    if (newCount <= maxValue) {
      setCount(newCount);
      onValueChange(newCount);
    }
  }, [count, onValueChange, maxValue]);

  const handleDecrement = useCallback(() => {
    const newCount = count - 1;
    if (newCount >= minValue) {
      setCount(newCount);
      onValueChange(newCount);
    }
  }, [count, onValueChange, minValue]);

  const handleInputChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const inputValue = event.target.value;

      if (inputValue === '') {
        setCount(minValue);
        onValueChange(minValue);
      } else {
        const newValue = parseInt(inputValue, 10);
        if (!isNaN(newValue) && newValue >= minValue && newValue <= maxValue) {
          setCount(newValue);
          onValueChange(newValue);
        }
      }
    },
    [onValueChange, minValue, maxValue],
  );

  const buttonStyles = clsx(
    'bg-none text-secondary font-primary-bold hover:bg-quinary',
  );
  const isMinValue = count === minValue;
  const isMaxValue = count === maxValue;

  return (
    <div className='flex items-center p-1 w-[142px] font-secondary-bold border border-secondary'>
      <Button
        onClick={handleDecrement}
        className={clsx(buttonStyles, isMinValue && 'hover:cursor-no-drop')}
      >
        -
      </Button>
      <Input value={count} onChange={handleInputChange} />
      <Button
        onClick={handleIncrement}
        className={clsx(buttonStyles, isMaxValue && 'hover:cursor-no-drop')}
      >
        +
      </Button>
    </div>
  );
};

export type { CounterInputProps };

export default memo(CounterInput);