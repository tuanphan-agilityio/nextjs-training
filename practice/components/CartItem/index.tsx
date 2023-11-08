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
  imgHref: string;
  onQuantityChange: (value: number, productId: number) => void;
  onDeleteCartItem: (productId: number) => void;
}

const CartItem: FC<CartItemProps> = ({
  productId,
  name,
  price,
  stock,
  quantity,
  imgHref,
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
    <ul className='flex gap-4 p-10 bg-quinary xl:p-4 sm:flex-wrap sm:justify-center sm:p-2'>
      <li className='w-1/5'>
        <Image
          width={80}
          height={80}
          src={imgHref || '/images/product-1.jpg'}
          alt='Product'
        />
      </li>
      <li className='w-2/5'>
        <h3 className='mb-2 truncate'>{name}</h3>
        <p className='cart-item-subtext'>Color : White</p>
      </li>
      <li className='w-1/5'>
        <p className='truncate mb-2'>$ {price} USD</p>
        <p className='cart-item-subtext'>Price</p>
      </li>
      <li className='w-1/5 min-w-[142px]'>
        <div className='flex justify-between'>
          <div>
            <p className='truncate mb-2'>{stock}</p>
            <p className='cart-item-subtext whitespace-nowrap'>In Stock</p>
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

        <div className='mt-11 text-md md:mt-6 sm:mt-2 sm:text-sm'>
          <CounterInput
            minValue={1}
            initialValue={quantity}
            onValueChange={handleQuantityChange}
          />
        </div>
      </li>
    </ul>
  );
};

export type { CartItemProps };

export default memo(CartItem);
