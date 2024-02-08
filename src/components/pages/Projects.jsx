import React from 'react';
import { Link } from 'react-router-dom';

const Project = ({ project }) => {
  if (!project) {
    return <div>Error: Project data not provided</div>;
  }

  const { id, title, deployedLink, githubLink, image } = project;

  return (

    <div className="border-r border-b border-l border-gray-400 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal" >
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

  );
};

export default Project;
