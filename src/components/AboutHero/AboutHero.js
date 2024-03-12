import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import {
  aboutHero,
  aboutHeroImage,
  aboutHeroContent,
} from './AboutHero.module.css';

const AboutHero = () => {
  return (
    <section className={aboutHero}>
      <StaticImage
        src='../../images/about/mobile/image-about-hero.jpg'
        alt='people working together with their laptops on a table'
        className={aboutHeroImage}
      />
      <div className={aboutHeroContent}>
        <h1>About Us</h1>
        <p>
          Founded in 2010, we are a creative agency that produces lasting
          results for our clients. We’ve partnered with many startups,
          corporations, and nonprofits alike to craft designs that make real
          impact. We’re always looking forward to creating brands, products, and
          digital experiences that connect with our clients’ audiences.
        </p>
      </div>
    </section>
  );
};

export default AboutHero;
