import { FC, ReactNode } from 'react';

import Header from '@/components/Header';
import Footer from '@/components/Footer';

interface MainLayoutProps {
  children: ReactNode;
}

const Layout: FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export type { MainLayoutProps };

export default Layout;
