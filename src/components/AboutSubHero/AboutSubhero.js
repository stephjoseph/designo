import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import {
  aboutSubhero,
  aboutSubheroImage,
  aboutSubheroContent,
} from './AboutSubhero.module.css';

const AboutSubHero = ({ data }) => {
  const imageMobile = getImage(data.image.mobile);
  return (
    <section className={aboutSubhero}>
      <GatsbyImage
        image={imageMobile}
        alt='people working together with their laptops on a table'
        className={aboutSubheroImage}
      />

      <div className={aboutSubheroContent}>
        <h1>{data.title}</h1>
        <p
          dangerouslySetInnerHTML={{
            __html: data.description.replace(/\n/g, '<br>'),
          }}
        ></p>
      </div>
    </section>
  );
};

export default AboutSubHero;
