import { GetServerSidePropsContext } from 'next';
import React from 'react';

import { IFileItem } from '@/api/dto/files.dto';
import DashboardLayout from '@/layouts/DashboardLayout';
import Layout from '@/layouts/Layout';
import { Files } from '@/modules/Files';
import { checkAuth } from '@/utils/checkAuth';
import { NextPageWithLayout } from '../_app';

import * as Api from '@/api';

type PageProps = {
  items: IFileItem[];
};

const DashboardFilesPage: NextPageWithLayout<PageProps> = ({ items }) => {
  return (
    <DashboardLayout>
      <Files items={items} withActions />
    </DashboardLayout>
  );
};

DashboardFilesPage.getLayout = (page: React.ReactNode) => {
  return <Layout title="Файлы | Dashboard">{page}</Layout>;
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const authProps = await checkAuth(ctx);

  if ('redirect' in authProps) {
    return authProps;
  }

  try {
    const items = await Api.files.getAllFiles();

    return {
      props: {
        items,
      },
    };
  } catch (err) {
    console.log(err);
    return {
      props: { items: [] },
    };
  }
};

export default DashboardFilesPage;
