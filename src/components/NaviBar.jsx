import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import links from '../Link/Link_list';
import icon from '../Link/SocialIcon_list';
import IconLinks from './IconLinks';
import NavLinks from './NavLinks';

const NaviBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sidebar = {
    open: {
      clipPath: "circle(1200px at 50px 50px)",
      transition: {
        type: "spring",
        stiffness: 20,
        restDelta: 2
      }
    },
    closed: {
      clipPath: "circle(30px at 50px 50px)",
      transition: {
        delay: 0.1,
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    }
  };

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <motion.div>
      {/* Icons (Positioned in Navbar) */}
      <div className='fixed top-0 right-0 w-full flex items-center justify-end p-10 z-[1000]'>
        <div className='flex items-center justify-center w-[300px]'>
          {icon.map((icons) => (
            <IconLinks key={icons.id} name={icons.name} url_link={icons.icon_url}/>
          ))}
        </div>
      </div>
      {/* Sidebar */}
      <motion.div
        initial={false}  // Do not animate on load
        animate={isOpen ? "open" : "closed"}  // Sidebar is hidden initially
        variants={sidebar}
        className="fixed top-0 left-0 bottom-0 w-[300px] z-[1000]"
      >
        <div className="fixed top-0 left-0 bottom-0 w-[200px] bg-white">
          {isOpen ? (
            <motion.button
              onClick={handleClick}
              className='fixed rounded-full top-[25px] left-[25px] h-[40px] w-[40px] flex justify-center items-center text-white cursor-pointer'
            >
              <FaTimes className="absolute" style={{ color: "#5651e5" }} />
            </motion.button>
          ) : (
            <motion.button
              onClick={handleClick}
              className='fixed rounded-full top-[25px] left-[25px] h-[50px] w-[50px] flex justify-center items-center text-white cursor-pointer'
            >
              <FaBars style={{ color: "#5651e5" }} />
            </motion.button>
          )}

          <ul className="absolute top-[100px] w-[230px] p-6">
            {links.map((item) => (
                <NavLinks key={item.id} name={item.name} url_link={item.url}/>
            ))}
          </ul>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default NaviBar;
