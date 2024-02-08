import React from 'react'
// Project.js
import React from 'react';
import { Link } from 'react-router-dom';

const Projects = ({ project }) => {
  const { id, title, deployedLink, githubLink, image } = project;

  return (
    <div>
      <h2>{title}</h2>
      <p>
        Deployed Link: <a href={deployedLink} target="_blank" rel="noopener noreferrer">{deployedLink}</a>
      </p>
      <p>
        GitHub Repository: <a href={githubLink} target="_blank" rel="noopener noreferrer">{githubLink}</a>
      </p>
      <img src={image} alt={`${title} screenshot`} />
      <Link to={`/projects/${id}`}>Details</Link>
    </div>
  );
};


export default Projects