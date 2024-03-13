import React from 'react';
import Layout from '../components/Layout';
import Seo from '../components/Seo';
import AboutHero from '../components/AboutHero';
import { graphql } from 'gatsby';

const About = ({ data }) => {
  return (
    <Layout>
      <main>
        <AboutHero data={data.aboutJson.hero} />
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
            childImageSharp {
              gatsbyImageData
            }
          }
          mobile {
            childImageSharp {
              gatsbyImageData
            }
          }
          tablet {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
      subhero {
        description
        title
        image {
          desktop {
            childImageSharp {
              gatsbyImageData
            }
          }
          mobile {
            childImageSharp {
              gatsbyImageData
            }
          }
          tablet {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`;

export const Head = () => <Seo title='About' />;

export default About;
