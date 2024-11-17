import React, { useRef } from 'react';
import mountains from '../assets/mountains.png';
import planets from '../assets/planets.png';
import stars from '../assets/stars.png';
import alien from '../assets/alien.png'
import astro from '../assets/astronaut.png'
import { motion, useScroll, useTransform } from 'framer-motion';

const Parallax = () => {
    const ref = useRef();

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ['start start', 'end start'],
    });

    const ybg = useTransform(scrollYProgress, [0, 1], ['0%', '100%']); // Changed to control vertical movement
    const ytext = useTransform(scrollYProgress, [0, 1], ['0%', '500%']);

    return (
        <div
        ref={ref}
            style={{ background: 'linear-gradient(180deg,#0c0c1d,#111132)' }}
            className='w-full h-screen relative flex items-center justify-center overflow-hidden'
        >
            <motion.div
                style={{
                    backgroundImage: `url(${mountains})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 3,
                    // Apply ybg for vertical movement
                }}
            />
            <motion.div
                style={{
                    backgroundImage: `url(${planets})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 2,
                     y:ybg// Apply ybg for vertical movement
                }}
            />
            <motion.div
                style={{
                    backgroundImage: `url(${stars})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    zIndex: 1,
                    x:ybg// Apply ybg for vertical movement
                }}
            />
            <motion.div style={{y:ytext}} className='text-[#D3D3D3] text-9xl font-bold flex'> 
                <motion.img
                 animate={{
                    scale:[1,0.5,1]
                 }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                  }}
                src={alien} alt='alien'/>
                <motion.img
                animate={{
                    scale:[1,0.5,1]
                }}
                  transition={{
                    duration: 2,
                    ease: "easeInOut",
                    times: [0, 0.2, 0.5, 0.8, 1],
                    repeat: Infinity,
                  }}
                src={astro} alt='alien'/>
            </motion.div>
        </div>
    );
};

export default Parallax;

