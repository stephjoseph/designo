import React, { useState, useEffect } from 'react';
import {
  aboutHero,
  aboutHeroImage,
  aboutHeroContent,
} from './AboutHero.module.css';

const AboutHero = ({ data }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const heroImage =
    windowWidth >= 1280
      ? data.image.desktop.publicURL
      : windowWidth >= 768
      ? data.image.tablet.publicURL
      : data.image.mobile.publicURL;

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
    <section className={aboutHero}>
      <img
        src={heroImage}
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
