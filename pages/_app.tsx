import '@/styles/globals.scss';
import { NextPage } from 'next';
import { AppProps } from 'next/app';



export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page: React.ReactNode) => page);

  return getLayout(<Component {...pageProps} />);
}
