import { FC } from 'react';

import Tabs from '@/components/Tabs';

import { TAB_ITEMS } from './contants';

const ProductTab: FC = () => {
  return (
    <div className='container'>
      <Tabs items={TAB_ITEMS} />
    </div>
  );
};

export default ProductTab;
