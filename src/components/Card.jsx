import { link } from 'framer-motion/client'
import React from 'react'

const Card = ({name,description,click,link}) => {
  return (
    <div className='border-[0.5px] border-solid border-[#D3D3D3] sm:w-[30%] p-6 rounded-lg hover:scale-105 ease-in duration-300'>
    <div>
      <h2 className='text-[#D3D3D3] mb-4'>{name}</h2>
    </div>
    <div className='p-2'>
    <p className='text-[#D3D3D3]'>
     {description}
    </p>
    </div>
    <div 
    className='flex items-center justify-center mt-10 border-2 rounded-full p-2 bg-[#FF6F61] border-[#FF6F61] hover:opacity-50'>
      <a href={link}>
      <button 
    onClick={click}
    className='text-black font-bold'>Press Me</button>
      </a>
    </div>
    </div>
  )
}

export default Card