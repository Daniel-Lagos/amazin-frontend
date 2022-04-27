import Head from 'next/head';
import { FC } from 'react';
import { Navbar } from '../ui';

interface LayoutProps {
  title: string;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>{children}</title>
      </Head>
      <Navbar/>
      <main
        style={{ width: '1440px', padding: '10px 24px', margin: '0 auto' , height: '90vh'}}>
        {children}
      </main>
    </>
  );
};
