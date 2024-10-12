import React from 'react'


const ProjectList = ({
    url
}) => {
    return (
      <img src={url} alt="Project" className="w-full h-full object-cover rounded-lg"/>
    );
  };

export default ProjectList