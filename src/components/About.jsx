import about from "../assets/about.jpg";
import {motion} from 'framer-motion';

const About = () => {
  return (
    <div
      id="about"
      style={{backgroundColor:"#0c0c1d"}}
      className="w-full pt-20 md:h-screen p-2 flex items-center py-16"
    >
      <div className="max-w-[1240px] mx-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4 text-xl font-bold sm:text-4xl uppercase text-[#D3D3D3]">
            Who I am
          </h2>
          <p className="py-2 text-[#D3D3D3]">
            // I am not your normal developer.
          </p>
          <p className="py-2 text-[#D3D3D3] md:text-lg">
          I'm a Full-Stack Developer based in Austin, TX, currently honing my skills as a software developer 
          at General Motors with over <span className="text-lg">2+ years</span> of hands-on experience. 
          My journey in tech is driven by a love for 
          innovation and building impactful solutions. 
          At GM, I've had the opportunity to contribute to major projects, 
          including the SAS DMP initiative and, more recently, the DMP Merkle project.
          </p>
          <p className="py-2 text-[#D3D3D3] md:text-lg">
          Alongside my work, I pursue Front-End development with a deep passion for 
          creating seamless digital experiences. With <span className="text-lg"> 2+ years</span>of Front-End expertise,
           my portfolio showcases the blend of creativity, technical ability, 
           and the relentless drive I bring to every project.
          </p>
          <p className="py-2 text-[#D3D3D3] underline cursor-pointer">
            <a href="/project"> Check out some of my latest work</a>
          </p>
        </div>

        <div >
          <motion.div 
          whileHover={{scale:1.1}}
          className="w-full h-auto m-auto shadow-xl shadow-gray-900 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
            <img className="rounded-xl" src={about} alt="laptop" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;