import React from 'react';
import ProjectSwiper from './ProjectSwiper';

const ProjectItem = ({ project }) => {
  return (
    <div className='project-area'>
      <div className='project-image-info'>
        <ProjectSwiper slides={project.images} />
      </div>
      <div className='project-info'>
        <h3>{project.title}</h3>
        <div className='projects-tags'>
          {project.tags.map((tag, index) => (
            <p key={index}>{tag}</p>
          ))}
        </div>
        <div className='project-content'>
          <p>{project.description}</p>
        </div>
        <div>
          <p className='project-stack-title'>Ferramentas</p>
          <div className='project-stack'>
            {project.tools.map((tool, index) => (
              <p key={index}>{tool}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;