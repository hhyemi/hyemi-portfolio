import React from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';

import { projectsData } from '../../../public/data/projectsData';
import ProjectCard from './ProjectCard';

// eslint-disable-next-line arrow-body-style
const Projects = ({ prefix }) => {
  return (
    <section id="projects">
      <Container>
        <h3 className="page-title">Projects</h3>
        {projectsData.map((project) => (
          <ProjectCard key={project.id} project={project} prefix={prefix} />
        ))}
      </Container>
    </section>
  );
};

Projects.propTypes = {
  prefix: PropTypes.string.isRequired
};

export default Projects;
