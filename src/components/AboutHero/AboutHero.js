import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import {
  aboutHero,
  aboutHeroImage,
  aboutHeroContent,
} from './AboutHero.module.css';

const AboutHero = ({ data }) => {
  const imageMobile = getImage(data.image.mobile);
  return (
    <section className={aboutHero}>
      <GatsbyImage
        image={imageMobile}
        alt='people working together with their laptops on a table'
        className={aboutHeroImage}
      />

      <div className={aboutHeroContent}>
        <h1>{data.title}</h1>
        <p>{data.description}</p>
      </div>
    </section>
  );
};

export default AboutHero;
