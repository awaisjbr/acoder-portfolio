import React from 'react';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFirebase } from "react-icons/io5";



const Skills = () => {
  return (
    <div className='flex flex-col gap-3 items-center mt-5 home w-[100%]'>
      <div className='my-2 text-2xl font-semibold underline underline-offset-8 decoration-red-600'>
        <p>My Skills</p>
      </div>
      <p className='text-md text-center text-[rgb(58,57,93)] md:text-xl lg:text-2xl font-semibold'>As of now i can perform in the following tools & frame-works.</p>

      <div className='w-[90%] flex flex-col gap-10 md:w-[50%] mt-5'>

        <div>
          <div className='flex items-center justify-between w-[80%]'>
            <p className='flex items-center gap-2'><FaHtml5 />HTML5</p>
            <p>80%</p>
          </div>
          <div className='bg-slate-800 w-full h-2 rounded-md'>
            <div className='bar max-w-[80%] bg-orange-400 h-full rounded-sm'></div>
          </div>
        </div>

        <div>
          <div className='flex items-center justify-between w-[70%]'>
            <p className='flex items-center gap-2'><FaCss3Alt />CSS3</p>
            <p>70%</p>
          </div>
          <div className='bg-slate-800 w-full h-2 rounded-md'>
            <div className='bar max-w-[70%] bg-orange-400 h-full rounded-sm'></div>
          </div>
        </div>

        <div>
          <div className='flex items-center justify-between w-[60%]'>
            <p className='flex items-center gap-2'><IoLogoJavascript />Javascript</p>
            <p>60%</p>
          </div>
          <div className='bg-slate-800 w-full h-2 rounded-md'>
            <div className='bar max-w-[60%] bg-orange-400 h-full rounded-sm'></div>
          </div>
        </div>

        <div>
          <div className='flex items-center justify-between w-[70%]'>
            <p className='flex items-center gap-2'><FaReact />REACT JS</p>
            <p>70%</p>
          </div>
          <div className='bg-slate-800 w-full h-2 rounded-md'>
            <div className='bar max-w-[70%] bg-orange-400 h-full rounded-sm'></div>
          </div>
        </div>

        <div>
          <div className='flex items-center justify-between w-[80%]'>
            <p className='flex items-center gap-2'><RiTailwindCssFill />TAILWIND CSS</p>
            <p>80%</p>
          </div>
          <div className='bg-slate-800 w-full h-2 rounded-md'>
            <div className='bar max-w-[80%] bg-orange-400 h-full rounded-sm'></div>
          </div>
        </div>

        <div>
          <div className='flex items-center justify-between w-[70%]'>
            <p className='flex items-center gap-2'><IoLogoFirebase />FIREBASE 9</p>
            <p>70%</p>
          </div>
          <div className='bg-slate-800 w-full h-2 rounded-md'>
            <div className='bar max-w-[70%] bg-orange-400 h-full rounded-sm'></div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Skills
