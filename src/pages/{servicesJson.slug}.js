import React from 'react';
import { graphql } from 'gatsby';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import ServicesHero from '../components/ServicesHero';
import ServicesProjects from '../components/ServicesProjects';
import ServicesNavigation from '../components/ServicesNavigation';

const Service = ({ data }) => {
  return (
    <Layout>
      <main>
        <ServicesHero data={data.servicesJson} />
        <ServicesProjects data={data.servicesJson} />
        <ServicesNavigation id={data.servicesJson.id} />
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
      id
    }
  }
`;

export const Head = ({ data }) => <Seo title={data.servicesJson.title} />;

export default Service;
