import React from 'react'
import { FaLinkedin,FaGithub } from "react-icons/fa6";
import { BsFillPeopleFill } from "react-icons/bs";
import { IoMailSharp } from "react-icons/io5";
const IconLinks = ({url_link,name}) => {

    const getIcon = () => {
        switch(name){
            case 'FaLinkedin':
                return <FaLinkedin style={{ color: "00FFFF" }} size={25}/>
            case 'FaGithub':
                return <FaGithub style={{ color: "#FF6F61" }} size={25}/>
            case 'IoMailSharp':
                return <IoMailSharp style={{ color: "#5651e5" }} size={25}/>
            default:
                return null;
        }
            

    }
    return (
        <div
        className='hidden md:block cursor-pointer hover:scale-110 transition-transform duration-200'
         >
               <ul
        >
          <li>
            <a 
              
              
              href={url_link}
            >
              {getIcon()}
            </a>
          </li>
        </ul>
        </div>
     
    )
}

export default IconLinks