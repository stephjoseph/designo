import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import {
  homeQualities,
  homeQualitiesQuality,
  homeQualitiesQualityContent,
} from './HomeQualities.module.css';

const HomeQualities = () => {
  const data = useStaticQuery(graphql`
    query {
      allQualitiesJson {
        edges {
          node {
            title
            description
            image {
              publicURL
            }
            id
          }
        }
      }
    }
  `);

  return (
    <section className={homeQualities}>
      {data.allQualitiesJson.edges.map((item) => {
        const quality = item.node;
        return (
          <div className={homeQualitiesQuality} key={quality.id}>
            <div>
              <img
                src={quality.image.publicURL}
                alt={`${quality.title} illustration`}
              />
            </div>
            <div className={homeQualitiesQualityContent}>
              <h2>{quality.title}</h2>
              <p>{quality.description}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default HomeQualities;
