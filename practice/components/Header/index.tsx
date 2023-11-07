import { FC, memo, useMemo } from 'react';

import Logo from '../Logo';
import NavItem from '../NavItem';

import BarIcon from '../../public/icons/bar.svg';

import { getNavItems, getControlItems } from './constants';

const Header: FC = () => {
  const [navItems, controlItems] = useMemo(
    () => [getNavItems(), getControlItems()],
    [],
  );

  return (
    <header className='h-20 shadow-lg text-secondary sm:h-14'>
      <div className='container flex justify-between items-center h-full'>
        <Logo />

        <div className='flex gap-10 sm:gap-4'>
          <nav className='md:hidden' aria-label='header-navigation'>
            <ul className='flex items-center gap-10 h-full font-secondary-regular text-md'>
              {navItems.map(({ title, href }, index) => (
                <NavItem
                  key={index}
                  title={title}
                  href={href}
                  isActive={href === '/'}
                />
              ))}
            </ul>
          </nav>
          <ul className='flex items-center gap-6 sm:flex-row-reverse sm:gap-1'>
            {controlItems.map((Icon, index) => (
              <li className='hover:cursor-pointer' key={index}>
                {Icon}
              </li>
            ))}
          </ul>

          <div className='hidden md:flex md:items-center'>
            <BarIcon />
          </div>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
