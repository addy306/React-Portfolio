// ProjectGallery.js
import React from 'react';
import Project from './Projects';
import projectsData from '../ProjectData.json';

const ProjectGallery = () => {
  return (
    <div>
      <h1>Project Gallery</h1>
      {projectsData.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
};

export default ProjectGallery;
