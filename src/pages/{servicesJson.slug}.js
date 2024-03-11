import React from 'react';
import { graphql } from 'gatsby';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import ServicesHero from '../components/ServicesHero';

const Service = ({ data }) => {
  return (
    <Layout>
      <main>
        <ServicesHero data={data.servicesJson} />
      </main>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    servicesJson(id: { eq: $id }) {
      title
      description
      projects {
        image {
          childImageSharp {
            gatsbyImageData
          }
        }
        title
        description
      }
    }
  }
`;

export const Head = ({ data }) => <Seo title={data.servicesJson.title} />;

export default Service;
