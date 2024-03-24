import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';
import {
  locationsCta,
  locationsCtaCountry,
  locationsCtaCountryContent,
  locationsCtaBgPattern,
} from './LocationsCta.module.css';

const LocationsCta = () => {
  const data = useStaticQuery(graphql`
    query {
      allLocationsJson {
        nodes {
          illustration {
            publicURL
          }
          country
          id
        }
      }
    }
  `);

  return (
    <section className={locationsCta}>
      {data.allLocationsJson.nodes.map((item) => (
        <div key={item.id} className={locationsCtaCountry}>
          <div>
            <img
              src={item.illustration.publicURL}
              alt={`${data.country} illustration`}
            />
          </div>
          <div className={locationsCtaCountryContent}>
            <h2>{item.country}</h2>
            <Link to={`/locations/#${item.country}`}>See Location</Link>
          </div>
        </div>
      ))}
      <div className={locationsCtaBgPattern}></div>
    </section>
  );
};

export default LocationsCta;
