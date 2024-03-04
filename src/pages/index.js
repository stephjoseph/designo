import * as React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';

const Home = () => {
  return (
    <Layout>
      <main>
        <h1>Home</h1>
      </main>
    </Layout>
  );
};

export const Head = () => <Seo title='Home' />;

export default Home;
