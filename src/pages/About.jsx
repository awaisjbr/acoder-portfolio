import React from 'react';
import { FaRegSquareCheck } from "react-icons/fa6";




const About = () => {
  return (
    <div className='w-[90%] mx-auto home pt-16 md:pt-28'>
      <h1 className='text-center text-white text-xl font-semibold md:text-4xl md:font-bold underline underline-offset-4 decoration-white'>About</h1>
      <div>
        <div>
          <h3 className='text-md text-center text-white mt-3 md:text-xl font-semibold lg:text-justify lg:w-[70%] lg:mx-auto'>I'm a Front-end-focused MERN Stack Developer with a passion for building dynamic and responsive web applications. With expertise in MongoDB, Express.js, React.js, and Node.js, I craft efficient, scalable, and user-friendly solutions.
          <span className='hidden lg:block text-justify'>I enjoy turning complex problems into intuitive, user-friendly experiences. Whether it's developing a full-stack web app, optimizing performance, or integrating third-party services, I thrive on solving challenges with code.</span></h3>
        </div>
        <div className='mt-5 lg:w-[70%] lg:mx-auto'>
            <div className='flex flex-col gap-1'>
              <h1 className='text-white text-xl font-semibold my-2 lg:text-2xl'>What I Do</h1>
              <div className='flex items-start sm:items-center justify-start gap-2'><FaRegSquareCheck className='text-white' /><h3 className='text-white font-semibold'>Front-end Development - <span className='text-sm font-normal'> Creating interactive, responsive UIs</span></h3></div>
              <div className='flex items-start sm:items-center justify-start gap-2'><FaRegSquareCheck className='text-white' /><h3 className='text-white font-semibold'>Back-end Development - <span className='text-sm font-normal'> API & database management</span></h3></div>
              <div className='flex items-start sm:items-center justify-start gap-2'><FaRegSquareCheck className='text-white' /><h3 className='text-white font-semibold'>Performance Optimization  - <span className='text-sm font-normal'> Enhancing speed, SEO & UX</span></h3></div>
              <div className='flex items-start sm:items-center justify-start gap-2'><FaRegSquareCheck className='text-white' /><h3 className='text-white font-semibold'>Freelancer - <span className='text-sm font-normal'> Availabale for freelancing</span></h3></div>
            </div>
            <div className='mt-5'>
              <h1 className='text-white text-xl font-semibold my-2 lg:text-2xl'>Tech Stack</h1>
              <div className='flex items-center gap-2'><FaRegSquareCheck className='text-white' /><h3 className='text-white font-semibold'>Front-end - <span className='text-sm font-normal'>React.js, Next.js, Tailwind CSS</span></h3></div>
              <div className='flex items-center gap-2'><FaRegSquareCheck className='text-white' /><h3 className='text-white font-semibold'>Back-end - <span className='text-sm font-normal'>Node.js, Express.js</span></h3></div>
              <div className='flex items-center gap-2'><FaRegSquareCheck className='text-white' /><h3 className='text-white font-semibold'>Database - <span className='text-sm font-normal'>MongoDB, Firebase</span></h3></div>
              <div className='flex items-center gap-2'><FaRegSquareCheck className='text-white' /><h3 className='text-white font-semibold'>Tools - <span className='text-sm font-normal'>Git, Visual Studio Code, Postman</span></h3></div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default About
