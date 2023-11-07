import { FC, memo } from 'react';
import Link from 'next/link';
import clsx from 'clsx';

import Button from '@/components/Button';
import PreviewImages from '@/components/PreviewImages';
import CounterInput from '@/components/CounterInput';

import { SIZES } from '@/constants/product';
import { ROUTES } from '@/constants/routes';

import { Product } from '@/types/product';

import RateIcon from '../../public/icons/rate.svg';
import TrolleyIcon from '../../public/icons/trolley.svg';
import CartIcon from '../../public/icons/light-cart.svg';

interface ProductInfoProps {
  product: Omit<Product, 'id' | 'status'>;
  onQuantityChange: (quantity: number) => void;
  onAddToCard: () => void;
}

const ProductInfo: FC<ProductInfoProps> = ({
  product: { name, imgHrefs, thumbnail, description, price, stock },
  onQuantityChange,
  onAddToCard,
}) => {
  return (
    <div className='container flex gap-10 sm:flex-col sm:gap-4'>
      <div className='w-1/2 sm:w-full'>
        <PreviewImages imageHrefs={[thumbnail, ...imgHrefs]} />
      </div>
      <div className='flex flex-col justify-between py-6 w-1/2 sm:w-full sm:py-0'>
        <div>
          <h1 className='mb-4 font-secondary-bold text-2xl'>{name}</h1>
          <p className='text-md leading-6'>{description}</p>

          <div className='flex gap-4 items-center mt-6'>
            <RateIcon />
            <span className='font-secondary-regular text-sm text-tertiary'>
              (2k)
            </span>
          </div>

          <div className='mt-7 flex justify-between'>
            <div>
              <p className='product-attribute-text'>Size</p>
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
              <p className='product-attribute-text'>Stock</p>

              <div className='flex items-center mt-4 text-md text-tertiary leading-6'>
                ( {stock} ) <TrolleyIcon className='ml-2' />
              </div>
            </div>
          </div>
        </div>

        <div className='w-full'>
          <p className='mt-4 product-attribute-text'>Quantity</p>

          <div className='flex justify-between items-center mt-8'>
            <CounterInput
              initialValue={1}
              minValue={1}
              maxValue={stock}
              onValueChange={onQuantityChange}
            />
            <p className='font-secondary-bold text-xl'>${price} USD</p>
          </div>

          <div className='flex gap-4 mt-10'>
            <Button className='w-full'>
              <Link href={ROUTES.CART}>
                <a>Checkout</a>
              </Link>
            </Button>

            <Button
              className='h-[48px] shadow-lg'
              onClick={onAddToCard}
              aria-label='add to cart'
            >
              <CartIcon />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ProductInfo);
