import * as React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import HomeHero from '../components/HomeHero';
import HomeServices from '../components/HomeServices';

const Home = () => {
  return (
    <Layout>
      <main>
        <HomeHero />
        <HomeServices />
      </main>
    </Layout>
  );
};

export const Head = () => <Seo title='Home' />;

export default Home;
