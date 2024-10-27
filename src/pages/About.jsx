import React from 'react';
import awaisImg from "../assets/Awais.png";
import { FaPlus } from "react-icons/fa";
import Typewriter from 'typewriter-effect';



const About = () => {
  return (
    <div className='flex flex-col items-center gap-2 mt-2 md:w-[90%] md:mx-auto home'>
      <h1 className='text-center text-xl font-semibold md:text-4xl md:font-bold underline underline-offset-4 decoration-red-600'>About</h1>
      <p className='text-md text-center text-[rgb(58,57,93)] md:text-xl lg:text-2xl font-semibold'>Allow me to introduce myself</p>
      <p className='text-sm text-center text-[rgb(58,57,93)] md:text-xl lg:text-xl font-semibold'>I'm obsessed with making things better. I love building web applications that are user-friendly, simple & delightfull.</p>

      <div className='flex flex-col items-center gap-10 md:flex-row w-full'>
        <div className='flex flex-col items-center gap-1 md:flex-1'>
          <img className='w-52 p-2 border' src={awaisImg} alt="" />
          <h3 className='text-md md:text-xl text-center font-semibold'><Typewriter options={{strings: ["Hello! i m Awais"], autoStart: true, loop: true, }}/></h3>
          <div>
            <p></p>
          </div>
        </div>

        <div className='flex flex-col gap-2 md:flex-1'>
          <p className='font-semibold md:text-2xl lg:mt-7'>Proficient In</p>
          <ul className='flex flex-col gap-2'>
            <li className='flex items-center gap-2 text-sm lg:text-lg'><span className='text-xs text-green-600'><FaPlus /></span>React-based Frontend Developer</li>
            <li className='flex items-center gap-2 text-sm lg:text-lg'><span className='text-xs text-green-600'><FaPlus /></span>Web & Application Developer</li>
            <li className='flex items-center gap-2 text-sm lg:text-lg'><span className='text-xs text-green-600'><FaPlus /></span>Available for Freelancing</li>
            <li className='flex items-center gap-2 text-sm lg:text-lg'><span className='text-xs text-green-600'><FaPlus /></span>UI/UX Developer</li>
            <li className='flex items-center gap-2 text-sm lg:text-lg'><span className='text-xs text-green-600'><FaPlus /></span>E-Commerce Developer</li>
            <li className='flex items-center gap-2 text-sm lg:text-lg'><span className='text-xs text-green-600'><FaPlus /></span>Mobile Responsivness</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default About
