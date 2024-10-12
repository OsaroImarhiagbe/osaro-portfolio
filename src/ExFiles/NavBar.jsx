import React, { useState } from 'react';
import logo from '../assets/logo.png';
import { FaBars, FaGithub, FaMailBulk, FaTimes } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { BsFillPeopleFill } from "react-icons/bs";
import { easeIn, easeOut, motion } from "framer-motion";
import links from '../Link/Link_list'
import NavLinks from './NavLinks';
import IconLinks from './IconLinks';
import icon from '../Link/SocialIcon_list';


const NavBar = () => {
  const [linkColor, setLinkColor] = useState("#1f2937");
  const [nav, setNav] = useState(false);

  // Define the animation variants
  const variants = {
    open: {
      x: 0,
      opacity: 1,
      transition: { 
        duration:1,
        type:'spring',
        stiffness: 400
    }
    },
    closed: {
      x: "-100%",
      opacity: 1,
      transition: { 
        duration:1.5,
        type:'spring',
        stiffness: 400,
        damping:40}
    }
  };
  const itemVariants = {
    open: {
      y: 0,
      opacity: 1
    },
    closed: {
      y: 50,
      opacity: 0
    }
  };

  const NavHandler = () => {
    setNav(!nav);
  };

  return (
    <motion.div 
    className='fixed top-0 left-0 w-full z-[100]' 
    animate={nav ? "open":"closed"}>
      {/* Container */}
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16 '>
        {/* Logo */}
        <div>
          <img src={logo} alt='logo' style={{ width: '120px' }} />
        </div>
        {/* Menu */}
        <div className=' flex items-center p-2' >
        {icon.map((icons)=> {
            return <IconLinks key={icons.id} name={icons.name} url_link={icons.icon_url} />

        })}
        </div>
        
        <motion.div
         animate={nav ? "open" : "closed"} // Toggle between open and closed based on nav state
        variants={variants}
          onClick={NavHandler}
          className="md:hidden z-40 cursor-pointer shadow-xl p-4"
        >
          <FaBars style={{ color: "#5651e5" }} />
        </motion.div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/90" : ""}></div>

      {/* Mobile Menu */}
      <motion.div
        animate={nav ? "open" : "closed"} // Toggle between open and closed based on nav state
        variants={variants}
        className={nav ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 rounded-xl" : "fixed left-[-100%] top-0 p-10"}
      >
        {/* Icon to close the nav */}
        <motion.div 
        animate={nav ? "open":"closed"}
        variants={variants}
        className="flex w-full items-center justify-between">
          <motion.div
          animate={nav ? "open" : "closed"}
          variants={variants}
            onClick={NavHandler}
            className="p-3 cursor-pointer mb-10"
          >
            <FaTimes style={{ color: "#5651e5" }} />
          </motion.div>
        </motion.div>

        <motion.div 
        variants={variants}
        className="text-md border-b border-gray-400 my-4">
          <p className="w-[85%] md:w-[90%] py-4">
            Let's build something
          </p>
        </motion.div>

        {/* Mobile Nav Links */}
        <motion.div
        animate={nav ? "open":"closed"}
        variants={itemVariants}>
        <ul className="flex flex-col pt-12 uppercase">
        {links.map((link) =>{
                return <NavLinks key={link.id} name={link.name} url_link={link.url}/>

            })}
        </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default NavBar;
