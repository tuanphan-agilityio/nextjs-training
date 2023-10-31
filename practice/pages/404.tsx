import Head from 'next/head';
import Link from 'next/link';

import Button from '@/components/Button';

import { ROUTES } from '@/constants/routes';

const NotFound = () => (
  <div className='flex items-center justify-center h-screen'>
    <Head>
      <title>404 - Page not found</title>
    </Head>
    <div className='pb-20 w-full text-center '>
      <h1 className='text-3xl'>Oops!</h1>
      <h2 className='text-secondary text-2xl'>404 - Page not found</h2>
      <p className='mb-5 text-secondary text-sm'>
        The page you are looking for might have been removed had its name
        changed or is temporarily unavailable.
      </p>
      <Button>
        <Link href={ROUTES.HOME}>
          <a>Go to Home Page</a>
        </Link>
      </Button>
    </div>
  </div>
);

export default NotFound;
