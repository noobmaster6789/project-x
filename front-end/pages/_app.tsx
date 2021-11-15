import React, { Component, ReactElement, ReactNode } from 'react';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { NextPage } from 'next';
import rootReducer from '../reducers';
import Layout from '../components/templates/Layout';

type NextPageWithLayout = NextPage & {
    getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
    Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const store = configureStore({
    reducer: rootReducer,
  });
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <Provider store={store}>
      {getLayout(<Component {...pageProps} />)}
      {/* <Layout> */}
      {/*  <Component {...pageProps} /> */}
      {/* </Layout> */}
    </Provider>
  );
}
export default MyApp;
