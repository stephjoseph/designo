import React, { useState, useEffect } from 'react';
import {
  aboutSubhero,
  aboutSubheroImage,
  aboutSubheroContent,
} from './AboutSubhero.module.css';

const AboutSubHero = ({ data, index }) => {
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 0
  );

  const subHeroImage =
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

  const flexDirection =
    windowWidth >= 1280 ? (index % 2 === 0 ? 'row' : 'row-reverse') : '';

  return (
    <section
      className={aboutSubhero}
      style={{
        flexDirection,
      }}
    >
      <img src={subHeroImage} alt='' className={aboutSubheroImage} />
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
