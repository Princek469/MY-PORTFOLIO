import React from 'react';
import ProjectBox from './ProjectBox';

const Projects = () => {
  return (
    <div>
      <h1 className='projectHeading'>My <b>Projects</b></h1>
      <div className='project'>
        {/* Pass project names */}
        <ProjectBox projectName="SuperResolution" />
        <ProjectBox projectName="BudgetFriendly" />
        <ProjectBox projectName="RogFree" />
        <ProjectBox projectName="MemoryGame" />
        <ProjectBox projectName="RockPaperScissors" />
        <ProjectBox projectName="PasswordGenerator" />
      </div>
    </div>
  );
};

export default Projects;
