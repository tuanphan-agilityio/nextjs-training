import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { injectStyle } from 'react-toastify/dist/inject-style';

import '@/styles/global.css';

import Layout from '@/layouts/MainLayout';
import Loading from '@/components/Loading';

if (typeof window !== 'undefined') {
  injectStyle();
}

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
