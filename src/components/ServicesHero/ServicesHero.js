import React from 'react';
import { servicesHero } from './ServicesHero.module.css';

const ServicesHero = ({ data }) => {
  return (
    <section className={servicesHero}>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
    </section>
  );
};

export default ServicesHero;
