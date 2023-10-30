import { FC, useCallback } from 'react';

import Breadcrumb from '@/components/Breadcrumb';
import ProductInfo from '@/components/ProductInfo';
import Tabs from '@/components/Tabs';
import ProductCard from '@/components/ProductCard';

const ProductDetail: FC = () => {
  const handleQuantityChange = useCallback((quantity: number) => {
    //TODO: Handle quantity change
  }, []);

  return (
    <main>
      <div className='container py-10'>
        <Breadcrumb
          className='text-secondary'
          items={[
            { label: 'Home', href: '/' },
            { label: 'Products', href: '/products' },
            { label: 'Category 1' },
          ]}
        />
      </div>
      <ProductInfo
        name='T-Shirt'
        description='Lorem Lorem'
        price={40}
        imageHrefs={[
          '/images/product-1.jpg',
          '/images/product-2.jpg',
          '/images/product-3.jpg',
        ]}
        onQuantityChange={handleQuantityChange}
      />

      <div className='my-20 py-10 bg-quinary'>
        <div className='container'>
          <Tabs
            items={[
              {
                id: '1',
                label: 'Description',
                content: (
                  <div className='text-md'>
                    <p className='text-secondary font-primary-bold'>
                      Detail Product
                    </p>
                    <ul className='mt-5 ml-6 list-disc'>
                      {Array(3)
                        .fill(
                          'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
                        )
                        .map((item, index) => (
                          <li key={index} className='text-tertiary'>
                            {item}
                          </li>
                        ))}
                    </ul>
                  </div>
                ),
              },
              { id: '2', label: 'Review (5)', content: 'Review' },
            ]}
          />
        </div>
      </div>

      <div className='container'>
        <h2 className='mb-10 font-secondary-bold text-center text-3xl leading-8'>
          Same Product
        </h2>

        <article className='flex flex-wrap gap-10 pb-10'>
          {Array(8)
            .fill(null)
            .map((_, index) => (
              <ProductCard
                key={index}
                id={index}
                imgHref='/images/product-1.jpg'
                name='Smart T-Shirt'
                status='Best quality'
                price='40'
              />
            ))}
        </article>
      </div>
    </main>
  );
};

export default ProductDetail;
