import React from 'react'

const Card = ({name,description,click}) => {
  return (
    <div className='border-2 border-[#D3D3D3] sm:w-[30%] p-10 rounded-lg hover:scale-105 ease-in duration-300'>
    <div>
      <h2 className='text-[#D3D3D3] mb-4'>{name}</h2>
    </div>
    <p className='text-[#D3D3D3]'>
     {description}
    </p>
    <div 
    className='flex items-center justify-center mt-10 border-2 rounded-full p-2 bg-[#FF6F61] border-[#FF6F61] hover:opacity-50'>
    <button 
    onClick={click}
    className='text-black font-bold'>Press Me</button>
    </div>
    </div>
  )
}

export default Card