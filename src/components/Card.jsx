import { link } from 'framer-motion/client'
import React from 'react'
import { FaCircleArrowDown } from "react-icons/fa6";

const Card = ({name,description,click,link,button}) => {
  return (
    <div className='border-[0.5px] border-solid border-[#D3D3D3] sm:w-[30%] p-6 rounded-lg hover:scale-105 ease-in duration-300'>
    <div className='p-2'>
      <h2 className='text-[#D3D3D3] mb-4 text-center'>{name}</h2>
    </div>
    <div className='p-2'>
    </div>
    <div
    className='flex items-center justify-center mt-10  rounded-full p-2 border-[#FF6F61] hover:opacity-50'>
      <a href={link}>
      <button
    onClick={click}
    className='text-black font-bold'>
      <FaCircleArrowDown size={70} style={{ color: "#FF6F61" }}/></button>
      </a>
    </div>
    </div>
  )
}

export default Card