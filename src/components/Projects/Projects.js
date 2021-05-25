import React from 'react';
import { Container } from 'reactstrap';

import { projectsData } from '../../public/projectsData';
import ProjectCard from './ProjectCard';

// eslint-disable-next-line arrow-body-style
const Projects = () => {
  return (
    <section id="projects">
      <Container>
        <h3 className="page-title">Projects</h3>
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Container>
    </section>
  );
};

export default Projects;
