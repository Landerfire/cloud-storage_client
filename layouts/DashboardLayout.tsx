import React, { FC, PropsWithChildren } from 'react';
import styles from '@/styles/Home.module.scss';
import Sidebar from '@/components/dashboard/Sidebar';

type DashboardLayoutProps = {};

const DashboardLayout: FC<PropsWithChildren<DashboardLayoutProps>> = ({ children }) => {
  return (
    <main className={styles.dashboardContainer}>
      <Sidebar />

      {children}
    </main>
  );
};

export default DashboardLayout;
