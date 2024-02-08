import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({ project }) => {
  if (!project) {
    return <div>Error: Project data not provided</div>;
  }

  const { id, title, deployedLink, githubLink, image } = project;

  return (
<div className="max-w-screen-xl mx-auto p-5 sm:p-10 md:p-16">  
    <div className="grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-10">
    
      <img src={image} alt={`${title} screenshot`}/>
      <div className="p-4 pt-2">
        <div className="font-bold text-xl mb-8">{title}
        <p className="text-gray-700 text-base">
          Deployed Link: <a href={deployedLink} target="_blank" rel="noopener noreferrer">{deployedLink}</a>
        </p>
        <p className="text-gray-700 text-base">
          GitHub Repository: <a href={githubLink} target="_blank" rel="noopener noreferrer">{githubLink}</a>
        </p>
        </div>
      </div>
      
    
</div>
</div> 
  );
};

export default Project;
