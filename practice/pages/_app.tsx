import type { AppProps } from 'next/app';

import '@/styles/global.css';
import Layout from '@/layouts/MainLayout';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
