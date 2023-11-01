import { FC, memo, useCallback } from 'react';
import Image from 'next/image';

import Button from '@/components/Button';
import CounterInput from '@/components/CounterInput';

import TrashBinIcon from '../../public/icons/trash-bin.svg';

interface CartItemProps {
  productId: number;
  name: string;
  price: number;
  stock: number;
  quantity: number;
  onQuantityChange: (value: number, productId: number) => void;
  onDeleteCartItem: (productId: number) => void;
}

const CartItem: FC<CartItemProps> = ({
  productId,
  name,
  price,
  stock,
  quantity,
  onQuantityChange,
  onDeleteCartItem,
}) => {
  const handleQuantityChange = useCallback(
    (value: number) => {
      onQuantityChange(value, productId);
    },
    [onQuantityChange, productId],
  );

  const handleDeleteCartItem = useCallback(() => {
    onDeleteCartItem(productId);
  }, [onDeleteCartItem, productId]);

  return (
    <div className='flex justify-between p-10 bg-quinary'>
      <div className='w-20 h-20'>
        <Image
          width={80}
          height={80}
          src='/images/product-1.jpg'
          alt='Product'
        />
      </div>
      <hgroup className='w-[220px]'>
        <h3 className='mb-2 truncate'>{name}</h3>
        <p className='font-secondary-regular text-tertiary text-md'>
          Color : White
        </p>
      </hgroup>
      <div className='w-[152px]'>
        <p className='truncate mb-2'>$ {price} USD</p>
        <p className='font-secondary-regular text-tertiary text-md'>Price</p>
      </div>
      <div className='w-[142px]'>
        <div className='flex justify-between'>
          <div>
            <p className='truncate mb-2'>{stock}</p>
            <p className='font-secondary-regular text-tertiary text-md whitespace-nowrap'>
              In Stock
            </p>
          </div>

          <Button
            variant='tertiary'
            className='w-fit'
            onClick={handleDeleteCartItem}
            data-testid='delete-button'
          >
            <TrashBinIcon />
          </Button>
        </div>

        <div className='mt-11 text-md'>
          <CounterInput
            initialValue={quantity}
            onValueChange={handleQuantityChange}
          />
        </div>
      </div>
    </div>
  );
};

export type { CartItemProps };

export default memo(CartItem);
