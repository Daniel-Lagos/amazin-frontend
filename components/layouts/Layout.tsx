import Head from 'next/head';
import { FC } from 'react';

interface LayoutProps {
  title: string;
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>{children}</title>
      </Head>
      <main>
        {children}
      </main>
    </>
  );
};
