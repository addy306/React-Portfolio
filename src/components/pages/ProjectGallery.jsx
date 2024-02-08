// ProjectGallery.js
import React from 'react';
import Project from './Projects';
import projectsData from './ProjectData.json';

const ProjectGallery = () => {
  return (
    <div>
      <h1>Project Gallery</h1>
      {projectsData.map((project) => (
        
        <Project key={project.id} project={project}  className="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal"/>
        
      ))}
    </div>
  );
};

export default ProjectGallery;
