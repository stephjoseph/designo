import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { homeServices, homeServicesService } from './HomeServices.module.css';

const HomeServices = () => {
  const data = useStaticQuery(graphql`
    query {
      allServicesJson {
        edges {
          node {
            id
            title
            slug
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
    }
  `);

  return (
    <section className={homeServices}>
      {data.allServicesJson.edges.map((item) => {
        const service = item.node;
        return (
          <div
            key={service.id}
            style={{
              backgroundImage: `url(${service.image.mobile.publicURL})`,
            }}
            className={homeServicesService}
          >
            <h2>{service.title}</h2>
            <Link to={service.slug}>
              View Projects
              <StaticImage
                src='../../images/shared/desktop/icon-right-arrow.svg'
                alt='right arrow icon'
              />
            </Link>
          </div>
        );
      })}
    </section>
  );
};

export default HomeServices;
