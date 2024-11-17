import React from 'react'
import {motion} from 'framer-motion'
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";


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
  
const Contact = () => {
  return (
    <div className="w-full h-screen pt-10 bg-gradient-to-b from-[#111132] to-[#0c0c1d]">
        <div className='max-w-[1240px] m-auto px-2 py-16 w-full  flex items-center justify-between'>
            <motion.div
            initial='initial'
            animate='animate'
            variants={textVariants} className='mt-10'>
            <h2 className="text-3xl font-bold text-[#D3D3D3] mb-4">
                Let's Connect
                </h2>
                <p className="text-lg text-[#D3D3D3]">
                    Got a project or just want to say hi? 
                    Send me a message, and I'll get back to you soon!
                    </p>
                    <div
                    className='mt-20 flex'>
                    </div>
            </motion.div>
            <motion.div
            animate='animate'
            initial='initial'
            variants={imgVariants} className="mt-20 col-span-3 w-[50%] h-auto rounded-xl lg:p-4">
            <div className="p-2">
              <form
                action="https://getform.io/f/bab19575-7084-44e8-b510-5536a0cfc917"
                method="POST"
              >
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  <div className="flex flex-col">
                    <input
                      className="rounded-lg p-2 border-[0.5px] bg-transparent flex border-gray-300 text-white"
                      type="text"
                      placeholder="Name..."
                      name="name"
                    />
                  </div>
                  <div className="flex flex-col">
                    <input
                      className="rounded-lg p-2 border-[0.5px] bg-transparent flex biorder-gray-300 text-white"
                      type="text"
                      placeholder="Phone Number..."
                      name="Phone Number"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <input
                    className="rounded-lg p-2 border-[0.5px] bg-transparent flex border-gray-300 text-white"
                    type="email"
                    placeholder="Email..."
                    name="Email"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <input
                    className="rounded-lg p-2 border-[0.5px] bg-transparent flex border-gray-300 text-white"
                    type="text"
                    placeholder="Subject..."
                    name="Subject"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <textarea
                    className="rounded-lg p-2 border-[0.5px] bg-transparent border-gray-300 text-white"
                    placeholder="Message..."
                    rows={10}
                    name="Message"
                  />
                </div>
                <button className="w-full border-[0.5px] rounded-xl p-4 text-white mt-4 bg-transparent hover:bg-white">
                  <p className='text-white hover:text-black'>Send Message</p>
                </button>
              </form>
            </div>
          </motion.div>
        </div>
        </div>
  )
}

export default Contact