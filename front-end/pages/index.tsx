import React, { ReactElement, ReactNode } from 'react';
import type { NextPage } from 'next';
import { AppProps } from 'next/app';
import Layout from '../components/templates/Layout';

const Home: NextPage = () => (
  <div className="a-button">Hello World</div>
);
Home.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  );
};
export default Home;
