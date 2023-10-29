import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import '@/styles/global.css';
import Layout from '@/layouts/MainLayout';
import Loading from '@/components/Loading';

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  if (router.isFallback) {
    return <Loading />;
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
