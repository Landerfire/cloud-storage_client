import Header from '@/components/Header';
import styles from '@/styles/Home.module.scss';
import Head from 'next/head';
import React from 'react';

interface LayoutProps {
  title: string;
}

const Layout: React.FC<React.PropsWithChildren<LayoutProps>> = ({ title, children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main>
        <Header />
        <div className={styles.main}>
          <div className={styles.layout}>{children}</div>
        </div>
      </main>
    </>
  );
};

export default Layout;
