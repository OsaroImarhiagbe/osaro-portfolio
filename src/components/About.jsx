import about from "../assets/about.jpg";
import {motion} from 'framer-motion';



const textVariants = {
  initial:{
      x:-500,
      opacity:0
  },
  animate:{
      x:0,
      opacity:1,
      transition:{
          duration:1,
          staggerChildren:0.1,
      }
  },
}

const imgVariants = {
  initial:{
      x:500,
      opacity:0
  },
  animate:{
      x:0,
      opacity:1,
      transition:{
          duration:0.5,
      }
  },
}

const About = () => {
  return (
    <div
      id="about"
      // style={{background:"lineargradient(180,#0c0c1d,#111132)"}}
      className="w-full pt-20 md:h-screen p-2 flex items-center py-16 bg-gradient-to-b from-[#111132] to-[#0c0c1d]"
    >
      <div className="max-w-[1240px] mx-auto md:grid grid-cols-3 gap-8">
        <motion.div
        animate='animate'
        initial='initial'
        variants={textVariants}
         className="col-span-2">
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
          I'm a Full-Stack Developer based in Austin, TX. I previously worked at General Motors with over <span className="text-lg">3+ years</span> of hands-on experience. 
          My journey in tech is driven by a love for 
          innovation and building impactful solutions. 
          At GM, I've had the opportunity to contribute to major projects, 
          including the SAS platform and, more recently, Onstar Merkle as an Data Engineer.
          </p>
          <p className="py-2 text-[#D3D3D3] md:text-lg">
          Alongside my work, I pursue Front-End development with a deep passion for 
          creating seamless digital experiences. With <span className="text-lg"> 2+ years</span> of Front-End expertise,
           my portfolio showcases the blend of creativity, technical ability, 
           and the relentless drive I bring to every project.
          </p>
        </motion.div>

        <div >
          <div 
          animate='animate'
          initial='initial'
          variants={imgVariants}
          className="w-full h-auto m-auto shadow-gray-600 rounded-xl flex items-center justify-center p-4">
            <motion.img
            animate='animate'
            initial='initial'
            whileHover={{scale:1.1}}
            variants={imgVariants} className="rounded-xl" src={about} alt="laptop" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;