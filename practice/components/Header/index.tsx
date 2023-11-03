import { FC, memo, useMemo } from 'react';

import Logo from '../Logo';
import NavItem from '../NavItem';

import { getNavItems, getControlItems } from './constants';

const Header: FC = () => {
  const [navItems, controlItems] = useMemo(
    () => [getNavItems(), getControlItems()],
    [],
  );

  return (
    <header className='h-20 shadow-lg text-secondary'>
      <div className='container flex justify-between items-center h-full'>
        <Logo />

        <div className='flex gap-10'>
          <nav aria-label='header-navigation'>
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

          <ul className='flex items-center gap-6'>
            {controlItems.map((Icon, index) => (
              <li className='hover:cursor-pointer' key={index}>
                {Icon}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default memo(Header);
