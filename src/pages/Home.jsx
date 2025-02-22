import React from 'react';
import { FaReact } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import TypeWriterComponent from '../components/TypeWriterComponent';

const Home = () => {
  return (
    <div className="w-[90%] mx-auto md:h-[500px] md:flex items-center home pt-16 md:pt-24 lg:pt-32">

      <div className="flex flex-col md:flex-row items-center gap-3">
        <div className="flex flex-col flex-1 gap-2 lg:gap-5 lg:p-5 self-start p-5">
          <hr className="w-12 lg:w-24 rounded-md border-2 border-white" />
          <h3 className="text-white text-2xl lg:text-3xl font-semibold">Hello,</h3>
          <h3 className="text-white text-2xl lg:text-3xl font-semibold">I'm Awais,</h3>
          <h2 className="flex items-center gap-2 text-2xl lg:text-3xl font-semibold"><span className="text-[rgb(52,168,83)]"><BiLogoMongodb /></span><span className="text-[rgb(251,188,5)]"><SiExpress /></span><span className="text-[rgb(66,133,244)]"><FaReact /></span><span className="text-[rgb(234,67,53)]"><FaNodeJs /></span> </h2>
          <h3 className="text-white text-2xl lg:text-3xl font-semibold">Front-end-focused MERN Stack Developer with a passion for building high-performance web applications. <span className="hidden lg:block text-lg"> With experience in React.js, Next.js, Tailwind CSS and modern UI frameworks. <br/>On the backend, I'm continuously expanding my skills in Node.js, Express.js, and MongoDB to build scalable and efficient APIs.</span></h3>
        </div>

        <div className="flex-1 flex items-center flex-col justify-center lg:gap-5">
          <img src="https://res.cloudinary.com/dofovybxu/image/upload/v1740204682/p4qmdb2t3xmhtd54tq7m.jpg" alt="myImage" width={200} height={200}  className="rounded-full md:rounded-2xl"/>
          <h2 className="text-xl font-semibold"><TypeWriterComponent text={['Web-Developer',"and Freelancer"]} color="white"/></h2>
        </div>
      </div>
      
    </div>
  )
}

export default Home
