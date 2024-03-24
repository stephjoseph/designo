import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import AboutHero from '../components/AboutHero';
import { graphql } from 'gatsby';
import AboutSubHero from '../components/AboutSubHero';
import LocationsCta from '../components/LocationsCta';

const About = ({ data }) => {
  return (
    <Layout>
      <main>
        <AboutHero data={data.aboutJson.hero} />
        {data.aboutJson.subhero.map((item, index) => (
          <React.Fragment key={index}>
            <AboutSubHero data={item} index={index} />
            {index === 0 && <LocationsCta />}
          </React.Fragment>
        ))}
      </main>
    </Layout>
  );
};

export const query = graphql`
  query {
    aboutJson {
      hero {
        title
        description
        image {
          desktop {
            publicURL
          }
          mobile {
            publicURL
          }
          tablet {
            publicURL
          }
        }
      }
      subhero {
        description
        title
        image {
          desktop {
            publicURL
          }
          mobile {
            publicURL
          }
          tablet {
            publicURL
          }
        }
      }
    }
  }
`;

export const Head = () => <Seo title='About' />;

export default About;
