import { GetServerSidePropsContext } from 'next';

import { IUser } from '@/api/dto/auth.dto';
import Profile from '@/components/dashboard/Profile';
import Layout from '@/layouts/Layout';
import { NextPageWithLayout } from '@/pages/_app';
import { checkAuth } from '@/utils/checkAuth';

import * as Api from '@/api';

type PageProps = {
  userData: IUser;
};

const DashboardProfilePage: NextPageWithLayout<PageProps> = ({ userData }) => {
  const onClickLogout = () => {
    if (window.confirm('Вы действительно хотите выйти?')) {
      Api.auth.logout();
      location.href = '/';
    }
  };

  return <Profile userData={userData} onClick={onClickLogout} />;
};

DashboardProfilePage.getLayout = (page: React.ReactNode) => {
  return <Layout title="Профиль | Dashboard"> {page}</Layout>;
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const authProps = await checkAuth(ctx);

  if ('redirect' in authProps) {
    return authProps;
  }

  const userData = await Api.auth.getMe();

  return {
    props: {
      userData,
    },
  };
};

export default DashboardProfilePage;
