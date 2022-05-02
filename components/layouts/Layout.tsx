import Head from 'next/head';
import { FC } from 'react';
import { Navbar } from '../ui';

interface LayoutProps {
  title: string;
  children: JSX.Element[] | JSX.Element
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Head>
        <title>{children}</title>
      </Head>
      <div
        style={{
          objectFit: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundImage: 'url(https://images.unsplash.com/photo-1622730000579-e6bde344d6a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80)',
          backgroundPosition: 'right'
        }}>
        <Navbar/>
        <main
          style={{
            width: '1440px',
            padding: '10px 24px',
            margin: '0 auto',
            height: '90vh',

          }}>
          {children}
        </main>
      </div>
    </>
  );
};
