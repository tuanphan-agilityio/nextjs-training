import { FC, memo } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

import Button from '@/components/Button';
import PreviewImages from '@/components/PreviewImages';
import CounterInput from '@/components/CounterInput';

import { SIZES } from '@/constants/product';

import RateIcon from '../../public/icons/rate.svg';
import TrolleyIcon from '../../public/icons/trolley.svg';
import CartIcon from '../../public/icons/light-cart.svg';
import { ROUTES } from '@/constants/routes';

interface ProductInfoProps {
  name: string;
  description: string;
  price: number;
  imageHrefs: string[];
  onQuantityChange: (quantity: number) => void;
}

const ProductInfo: FC<ProductInfoProps> = ({
  name,
  description,
  price,
  imageHrefs,
  onQuantityChange,
}) => {
  return (
    <div className='container flex gap-10'>
      <div className='w-1/2'>
        <PreviewImages imageHrefs={imageHrefs} />
      </div>
      <div className='flex flex-col justify-between py-6 w-1/2'>
        <div>
          <h1 className='mb-4 font-secondary-bold text-3xl leading-8'>
            {name}
          </h1>
          <p className='text-md leading-6'>{description}</p>

          <div className='flex gap-4 items-center mt-6'>
            <RateIcon />
            <span className='font-secondary-regular text-sm text-tertiary'>
              (2k)
            </span>
          </div>

          <div className='mt-7 flex justify-between'>
            <div>
              <p className='font-primary-bold text-md'>Size</p>
              <ul className='flex gap-3 mt-4'>
                {SIZES.map((size, index) => (
                  <li
                    key={size}
                    className={clsx([
                      'flex justify-center items-center w-6 h-6 rounded-full',
                      index === 0
                        ? 'bg-quaternary font-sm font-primary-bold text-primary hover:cursor-pointer'
                        : 'bg-quinary hover:cursor-pointer',
                    ])}
                  >
                    {size}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className='font-primary-bold text-md'>Stock</p>

              <div className='flex items-center mt-4 text-md text-tertiary leading-6'>
                ( 1234 ) <TrolleyIcon className='ml-2' />
              </div>
            </div>
          </div>
        </div>

        <div className='w-full'>
          <p className='font-primary-bold text-md'>Quantity</p>

          <div className='flex justify-between items-center mt-8'>
            <CounterInput
              initialValue={0}
              minValue={0}
              maxValue={1000}
              onValueChange={onQuantityChange}
            />
            <p className='font-secondary-bold text-3xl leading-8 '>
              ${price} USD
            </p>
          </div>

          <div className='flex gap-4 mt-10'>
            <Button className='w-full'>
              <Link href={ROUTES.CART}>
                <a>Checkout</a>
              </Link>
            </Button>

            <Button className='h-[48px] shadow-lg'>
              <Link href={'#'}>
                <a>
                  <CartIcon />
                </a>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ProductInfo);
