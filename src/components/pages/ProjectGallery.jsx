// ProjectGallery.js
import React from 'react';
import Project from './Projects';
import projectsData from './ProjectData.json';

const ProjectGallery = () => {
  return (
    <div>
      <h1>Project Gallery</h1>
      <a href="https://github.com/addy306">Visit Github Repo for more</a>
      <div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">  
    <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
      {projectsData.map((project) => (
        
        <Project key={project.id} project={project}  />
        
      ))}
      </div>
      </div>
      </div>
    
  );
};

export default ProjectGallery;
