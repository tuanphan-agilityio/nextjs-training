import { FC, memo } from 'react';
import clsx from 'clsx';

import FilterIcon from '../../public/icons/filter.svg';

import { FILTER_CATEGORIES } from './constants';

const SidebarFilter: FC = () => {
  return (
    <div>
      <div className='flex items-center text-xl'>
        <p className='font-primary-regular leading-4'>Filter</p>
        <FilterIcon className='ml-2' />
      </div>
      <div className='mt-10 text-md'>
        <p className='mb-3'>Categories</p>
        <ul className='flex gap-6 pb-6 border-b-2 border-solid border-tertiary'>
          {FILTER_CATEGORIES.map((category, index) => (
            <li
              key={category}
              className={clsx([
                'px-2 py-1',
                index === 0
                  ? 'bg-quaternary font-primary-bold text-primary border'
                  : 'text-secondary border border-tertiary hover:cursor-pointer',
              ])}
            >
              {category}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default memo(SidebarFilter);
