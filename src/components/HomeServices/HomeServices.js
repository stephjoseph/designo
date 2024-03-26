import React, { useState, useEffect } from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { homeServices, homeServicesService } from './HomeServices.module.css';

const HomeServices = () => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

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

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <section className={homeServices} id='services'>
      {data.allServicesJson.edges.map((item) => {
        const service = item.node;
        let backgroundImageURL = service.image.mobile.publicURL;

        if (windowWidth >= 768 && windowWidth < 1280) {
          backgroundImageURL = service.image.tablet.publicURL;
        } else if (windowWidth >= 1280) {
          backgroundImageURL = service.image.desktop.publicURL;
        }

        return (
          <div
            key={service.id}
            style={{
              backgroundImage: `url(${backgroundImageURL})`,
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
