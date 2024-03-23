import React from 'react';
import { servicesHero, servicesHeroBgPattern } from './ServicesHero.module.css';

const ServicesHero = ({ data }) => {
  return (
    <section className={servicesHero}>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      <div className={servicesHeroBgPattern}></div>
    </section>
  );
};

export default ServicesHero;
