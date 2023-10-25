import { FC, memo } from 'react';
import Link from 'next/link';

import { ROUTES } from '@/constants/routes';

import LogoIcon from '../../public/icons/logo.svg';

const Logo: FC = () => {
  return (
    <Link href={ROUTES.HOME}>
      <a className='flex items-center text-sm font-quaternary-bold'>
        <LogoIcon className='mr-1' /> mangcoding Store
      </a>
    </Link>
  );
};

export default memo(Logo);
