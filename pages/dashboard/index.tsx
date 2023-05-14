import { GetServerSidePropsContext } from 'next';
import Link from 'next/link';

const DashboardPage = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 auto',
        flexDirection: 'column',
      }}
    >
      <p>Вы не должны были попасть на данную страницу.</p>
      <p>Советую вам скорее ее</p>
      <Link href={'/dashboard/files'}>
        <span style={{ color: 'blue', fontSize: 24 }}>Покинуть</span>
      </Link>
    </div>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  return {
    redirect: {
      permanent: true,
      destination: '/dashboard/files',
    },
    props: {},
  };
};

export default DashboardPage;
