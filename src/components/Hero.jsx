import React from 'react'
import portrait from '../assets/portrait.png'
import { animate,motion } from 'framer-motion'


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
            staggerChildern:0.1,
        }
    },
    scrollButton:{
        opacity:0,
        y:10,
        transition:{
            duration:2,
            repeat:Infinity
        }
    }
}

const sliderVariants = {
    initial:{
        x:0,
        
    },
    animate:{
        x:"-220%",
        transition:{
            duration:40,
            repeat:Infinity,
            repeatType:"loop"
        }
    },

}

  
const handleClick = () => {
    console.log('button clicked')
}
const Hero = () => { 
  return (
    <div className=' z-[100] h-screen w-full pt-60 overflow-hidden relative p-6 md:h-screen bg-gradient-to-b from-[#111132] to-[#0c0c1d]'>
        <div className='max-w-[1366px] h-[100%] mx-auto z-10'>
            <motion.div 
            variants={textVariants} 
            initial="initial" 
            animate="animate" 
            className='flex flex-col gap-6 justify-center text-[#D3D3D3] font-bold text-lg'>
            Hi, I'm <span className="text-[#5651e5] font-bold text-4xl sm:text-7xl mb-4"><motion.h2 variants={textVariants}>Emmanuel</motion.h2></span>
            <motion.h1 variants={textVariants} className='text-[#D3D3D3] text-4xl sm:text-7xl mb-4'>A Full Stack Developer</motion.h1>
            <motion.p variants={textVariants} className='break-all text-sm sm:text-lg mb-8 text-[#D3D3D3]'>I'm a front-end web developer specialzing in building exceptional
            digital experience.<br/>Currently I'm focused on building responsive
            front-end web applications while learning back-end technologies.</motion.p>
            <motion.div
            variants={sliderVariants}
            initial="initial"
            animate="animate"
            className='absolute bottom-[-170px] w-[200%] font-bold text-7xl whitespace-nowrap text-gray-300 opacity-10 z-5 sm:bottom-[-200px] lg:bottom-[-300px]'>
                <p className='text-[50vh]'>Developer. Innovator. Problem Solver. Creator.</p>
        </motion.div>
            </motion.div>
        </div>
       
            {/*Image Container */}
        <img  className='hidden md:block right-0 top-40 absolute h-[100%] z-0 object-cover'src={portrait} alt='portrait'/>
    
        
    </div>
  )
}

export default Hero