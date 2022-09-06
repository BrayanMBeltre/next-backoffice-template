import { ColorScheme } from '@mantine/core';
import { getCookie } from 'cookies-next';
import { GetServerSidePropsContext, NextPage } from 'next';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { ReactElement, ReactNode } from 'react';

import '@/styles/globals.css';

import MantineProvider from '@/lib/providers/MantineProvider';
import SpotlightProvider from '@/lib/providers/SpotlightProvider';

import { RouterTransition } from '@/components/common/Layouts/RouterTransition';

export type NextPageWithLayout<P = unknown, IP = P> = NextPage<P, IP> & {
  // eslint-disable-next-line no-unused-vars
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  colorScheme: ColorScheme;
};

const App = (props: AppPropsWithLayout) => {
  const { Component, pageProps, colorScheme } = props;

  const getLayout = Component.getLayout || ((page) => page);

  return (
    <>
      <Head>
        <title>Page title</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>

      <MantineProvider colorScheme={colorScheme}>
        <RouterTransition />
        <SpotlightProvider>
          {getLayout(<Component {...pageProps} />)}
        </SpotlightProvider>
      </MantineProvider>
    </>
  );
};

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => ({
  // get color scheme from cookie
  colorScheme: getCookie('mantine-color-scheme', ctx) || 'light',
});

export default App;
