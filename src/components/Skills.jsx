import React from 'react'
import { skills } from "../Skills/Skills";


const Skill = ({ name, img }) => {
  return (
    <div className="grid grid-cols-2 gap-4 justify-center items-center ">
      <div className="m-auto">
        <img src={img} alt="python" style={{ width: "64px", height: "64px" }} />
      </div>
      <div className="flex flex-col first:justify-center items-center">
        <h3 className="font-bold text-lg text-[#D3D3D3]">{name}</h3>
      </div>
    </div>
  );
};

const Skills = () => {
    return (
        <div id="skills" className="bg-[#0c0c1d] w-full pt-20 lg:h-screen p-2">
          <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
            <div className="animate__animated animate__fadeInLeft">
              <p className="text-xl tracking-widest uppercase text-[#5651e5] p-2">
                Skills
              </p>
              <h2 className="text-[#D3D3D3] py-4 text-xl font-bold sm:text-4xl uppercase mb-4">
                What I can do
              </h2>
            </div>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-4 animate__animated animate__fadeInRightBig ">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="p-6  hover:scale-105 ease-in duration-300 "
                >
                  <Skill {...skill} />
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    };
    
    export default Skills;
    