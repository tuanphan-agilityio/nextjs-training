import { FC, memo } from 'react';

import Input from '@/components/Input';
import Button from '@/components/Button';

interface CheckoutCartProps {
  cartLength: number;
  totalPrice: number;
}

const CheckoutCart: FC<CheckoutCartProps> = ({ cartLength, totalPrice }) => {
  return (
    <div className='py-10 px-6 w-1/3 bg-quinary text-md lg:w-full'>
      <p className='mb-2 font-secondary-bold'>Coupon Code</p>
      <Input placeholder='Enter your coupon code' />

      <div className='text-right sm:text-center'>
        <Button className='mt-4'>Check</Button>
      </div>

      <div className='mt-9 pb-6 flex justify-between border-b-2 border-dashed border-tertiary'>
        <div>
          <p className='mb-2 font-secondary-bold'>Subtotal</p>
          <p className='text-tertiary'>{cartLength} Product</p>
        </div>
        <p className='font-secondary-regular'>$ {totalPrice} USD</p>
      </div>

      <div className='my-6 flex justify-between'>
        <p className='mb-2 font-secondary-bold'>Total</p>
        <p className='font-secondary-regular'>$ {totalPrice} USD</p>
      </div>

      <div className='text-right sm:text-center'>
        <Button>Checkout</Button>
      </div>
    </div>
  );
};

export default memo(CheckoutCart);
