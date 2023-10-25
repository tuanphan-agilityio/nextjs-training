import Link from 'next/link';
import { FC, memo } from 'react';

interface NavItemProps {
  isActive: boolean;
  href: string;
  title: string;
}

const NavItem: FC<NavItemProps> = ({ href, title, isActive }) => {
  return (
    <li className='relative'>
      <Link href={href}>
        <a
          className={
            isActive
              ? 'after:content-[""] after:absolute after:bottom-0 after:left-1/2 after:w-1 after:h-1 after:rounded-full after:bg-quaternary after:transform after:-translate-x-1/2 text-quaternary font-secondary-bold'
              : 'hover:text-quaternary'
          }
        >
          {title}
        </a>
      </Link>
    </li>
  );
};

export type { NavItemProps };

export default memo(NavItem);
