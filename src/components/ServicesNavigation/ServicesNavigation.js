import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import {
  servicesNavigation,
  servicesNavigationService,
} from './ServicesNavigation.module.css';

const ServicesNavigation = ({ id }) => {
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
    <section className={servicesNavigation}>
      {data.allServicesJson.edges
        .filter((item) => item.node.id !== id)
        .map((item) => {
          const service = item.node;
          return (
            <div
              key={service.id}
              style={{
                backgroundImage: `url(${service.image.mobile.publicURL})`,
              }}
              className={servicesNavigationService}
            >
              <h2>{service.title}</h2>
              <Link to={`/${service.slug}`}>
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

export default ServicesNavigation;
