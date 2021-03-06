import Head from 'next/head';
import { FC } from 'react';
import { Navbar } from '../ui';

interface LayoutProps {
  title: string;
  withBackground?: boolean;
  withMenu?: boolean;
  children: JSX.Element[] | JSX.Element;
}

export const Layout: FC<LayoutProps> = ({
  children, withBackground = true, title, withMenu = true
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div
        style={{
          objectFit: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundImage: withBackground
                           ? 'url(https://images.unsplash.com/photo-1622730000579-e6bde344d6a4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80)'
                           : '',
          backgroundPosition: 'right'
        }}>
        {
          withMenu && (<Navbar/>)
        }
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
