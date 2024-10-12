import React, { useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';
import Card from '../components/Card';
import {Projects} from '../Projects/Project';

const Project = () => {

  const handleClick = () => {
    console.log('clicked')
  }

  return (
    <div id="project" className="w-full pt-20 bg-[#0c0c1d]">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
          <p className="text-xl tracking-widest uppercase text-[#5651e5]">Projects</p>
          <h2 className="py-4 text-xl font-bold sm:text-4xl uppercase mb-4 text-[#D3D3D3]">What I've built</h2>
          <div className='flex flex-col md:flex-row tems-cetner justify-center gap-4 overflow-hidden'>
            {Projects.map((project) => {
              return <Card 
              key={project.id} 
              name={project.projectname} 
              description={project.projectdescription} 
              click={handleClick}/>
            })}
      </div>
    </div>
    </div>
  );
};

export default Project;

