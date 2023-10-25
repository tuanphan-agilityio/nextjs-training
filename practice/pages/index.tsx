import Breadcrumb from '@/components/Breadcrumb';
import { FC } from 'react';

const Home: FC = () => {
  return (
    <main>
      <Breadcrumb
        items={[
          { label: 'Home', href: '/' },
          { label: 'Products', href: '/products' },
          { label: 'Category 1' },
        ]}
        className='bg-secondary'
      />
      <h1 className='text-3xl font-bold underline font-primary-bold'>
        Hello World 1
      </h1>
    </main>
  );
};

export default Home;
