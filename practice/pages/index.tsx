import { FC } from 'react';

import SubHeader from '@/components/SubHeader';

import SidebarFilter from '@/components/SidebarFilter';
import ProductCard from '@/components/ProductCard';
import Button from '@/components/Button';

const Home: FC = () => {
  return (
    <main>
      <SubHeader
        title='Cart'
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'Products', href: '/products' },
          { label: 'Category 1' },
        ]}
      />
      <section className='container py-20'>
        <h2 className='mb-6 text-3xl font-secondary-bold leading-6'>
          T - Shirt
        </h2>
        <div className='flex gap-12'>
          <SidebarFilter />
          <div className='text-center'>
            <article className='flex flex-wrap gap-10 pb-10'>
              {Array(6)
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
            <Button className='text-center'>Load More</Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
