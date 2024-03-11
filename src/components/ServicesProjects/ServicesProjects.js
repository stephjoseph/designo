import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import {
  servicesProjects,
  servicesProjectsProject,
  servicesProjectsProjectImage,
  servicesProjectsProjectContent,
} from './ServicesProjects.module.css';

const ServicesProjects = ({ data }) => {
  return (
    <section className={servicesProjects}>
      {data.projects.map((project, i) => {
        const image = getImage(project.image);
        return (
          <div key={project.title + i} className={servicesProjectsProject}>
            <div>
              <GatsbyImage
                image={image}
                alt={project.title}
                className={servicesProjectsProjectImage}
              />
            </div>
            <div className={servicesProjectsProjectContent}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default ServicesProjects;
