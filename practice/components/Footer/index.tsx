import { FC, memo } from 'react';
import clsx from 'clsx';

import Button from '../Button';
import Logo from '../Logo';

import { FOOTER_CATEGORIES } from './constants';

const Footer: FC = () => {
  return (
    <footer className='bg-footer-bg text-sm'>
      <div className='container flex gap-x-32 pt-20 pb-[92px] text-primary h-full xl:py-12 xl:gap-x-20 sm:flex-col sm:py-6'>
        <div className='w-1/3 sm:w-full sm:flex sm:flex-col sm:items-center'>
          <Logo />
          <p className='mt-6 leading-6 font-primary-regular sm:text-center'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam mollis,
            justo nec porttitor auctor, erat sapien faucibus lectus, vel tempor
            dolor augue et lectus.
          </p>

          <div className='mt-10 bg-primary w-fit'>
            <Button variant='tertiary' className='bg-primary sm:w-[140px]'>
              Login Now
            </Button>
          </div>
        </div>
        <div className='w-2/3 flex gap-x-20 lg:gap-x-16 lg:flex-wrap lg:gap-y-10 sm:mt-6 sm:w-full sm:gap-y-4 sm:justify-center'>
          {FOOTER_CATEGORIES.map(
            ({ items, title, isContact = false, email = '' }) => (
              <div key={title}>
                <p className='mb-6 text-md font-primary-bold sm:text-center'>
                  {title}
                </p>
                {email && <address className='mb-4 text-sm'>{email}</address>}
                <ul
                  className={clsx([
                    'flex',
                    isContact ? 'gap-4' : 'flex-col gap-3',
                  ])}
                >
                  {items.map((Icon, index) => (
                    <li
                      key={index}
                      className={clsx([
                        'hover:cursor-pointer sm:text-center',
                        isContact
                          ? 'flex justify-center items-center w-8 h-8 border border-primary'
                          : 'text-sm',
                      ])}
                    >
                      {Icon}
                    </li>
                  ))}
                </ul>
              </div>
            ),
          )}
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);
