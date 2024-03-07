import { Link } from 'gatsby';
import React from 'react';
import {
  homeHero,
  homeHeroContainer,
  homeHeroContent,
  homeHeroPhoneImg,
} from './HomeHero.module.css';
import { StaticImage } from 'gatsby-plugin-image';

const HomeHero = () => {
  return (
    <section className={homeHero}>
      <div className={homeHeroContainer}>
        <div className={homeHeroContent}>
          <h1>Award-winning custom designs and digital branding solutions</h1>
          <p>
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </p>
        </div>
        <Link to='/about'>Learn More</Link>
        <StaticImage
          src='../../images/home/desktop/image-hero-phone.png'
          alt='phone'
          className={homeHeroPhoneImg}
          objectFit='contain'
        />
      </div>
    </section>
  );
};

export default HomeHero;
