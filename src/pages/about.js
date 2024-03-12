import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import AboutHero from '../components/AboutHero';

const About = () => {
  return (
    <Layout>
      <main>
        <AboutHero />
      </main>
    </Layout>
  );
};

export const Head = () => <Seo title='About' />;
export default About;
