import { FC, memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';

import { ROUTES } from '@/constants/routes';

import RateIcon from '../../public/icons/rate.svg';

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  status: string;
  imgHref: string;
}

const ProductCard: FC<ProductCardProps> = ({
  id,
  name,
  price,
  status,
  imgHref,
}) => {
  return (
    <Link
      href={{
        pathname: ROUTES.PRODUCT,
        query: { productId: id },
      }}
    >
      <a className='block w-product-card sm:w-full'>
        <section className='bg-primary text-secondary shadow text-sm hover:shadow-xl hover:cursor-pointer'>
          <Image
            src={imgHref || '/images/default.png'}
            alt={name}
            width={'265px'}
            height={'248px'}
            priority
          />
          <div className='px-4 pt-4 pb-6 '>
            <div className='flex justify-between items-center mb-2 font-primary-bold xl:flex-wrap'>
              <h3>{name}</h3>
              <span>{price}$</span>
            </div>
            <p className='mb-3 text-tertiary text-start'>{status}</p>
            <div className='flex items-center gap-2'>
              <RateIcon />
              <span className='text-tertiary font-tertiary-regular'>(1k)</span>
            </div>
          </div>
        </section>
      </a>
    </Link>
  );
};

export type { ProductCardProps };

export default memo(ProductCard);
