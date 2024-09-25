import React from "react";
import my_Image from "../../assets/Awais.png";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { RiTailwindCssFill } from "react-icons/ri";
import Typewriter from 'typewriter-effect';
import { NavLink } from "react-router-dom";



const Intro = () => {
  return (
    <div className="mt-8 lg:mt-14 flex flex-col items-center gap-3 relative">
        <div className="flex flex-col items-center gap-4 md:flex-row w-[95%]">
      <div className="flex flex-col gap-3 md:flex-1">
        <div className="flex flex-col gap-2 lg:gap-2 p-1 lg:p-5">
            <hr className="w-12 lg:w-24 rounded-md border-2 border-[rgb(108,78,232)]" />
            <h3 className="text-[rgb(58,57,93)] text-2xl lg:text-3xl font-semibold">Hello,</h3>
            <h3 className="text-[rgb(58,57,93)] text-2xl lg:text-3xl font-semibold">I'm M. Awais,</h3>
            <h3 className="text-[rgb(58,57,93)] text-2xl lg:text-3xl font-semibold flex items-center gap-2 text"><FaReact /> React-based</h3>
            <h3 className="flex gap-1 items-center text-lg lg:text-2xl font-bold  text-[rgb(58,57,93)]"> <span className="text-[rgb(108,78,232)]"><Typewriter options={{
    strings: ['Front-end Web-Developer',"and Freelancer"],
    autoStart: true,
    loop: true,
  }}/></span></h3>
        </div>
        <div>
            <p className="text-slate-500 text-sm p-2 lg:text-lg lg:p-3">Entry level react-based web developer focused on building the Frontend of websites and web applications that leads to the success of the overall product. </p>
        </div>
        <div className="flex items-center gap-5 justify-center md:hidden">
            <button className="bg-[rgb(108,78,232)] py-2 px-2 text-sm text-white rounded-lg text-center"><NavLink to={"/skills"}>Skills</NavLink></button>
            <button className="bg-[rgb(108,78,232)] py-2 px-2 text-sm text-white rounded-lg text-center"><NavLink to={"about"}>About</NavLink></button>
            <button className="bg-[rgb(108,78,232)] py-2 px-2 text-sm text-white rounded-lg text-center"><NavLink to={"portfolio"}>Portfolio</NavLink></button>
        </div>
      </div>

      <div className='md:flex-1 w-[230px] h-[230px] bg-transparent border rounded-full flex items-center justify-center md:h-[280px] md:w-[280px] md:border-0'>
        <div className='w-48 h-48 md:h-[200px] md:w-[200px] lg:w-[320px] lg:h-[320px] z-0 bg-[rgb(112,80,239)] rounded-full flex items-center justify-center'>
            <img className='w-44 md:w-[180px] lg:w-[300px]  rounded-full' src={my_Image} alt="" />
        </div>
      </div>
      </div>

    <div className="self-start hidden md:block mt-10">
        <div className="mb-3 ml-11 text-[rgb(58,57,93)] font-semibold underline underline-offset-2 select-none">Usefull Links:</div>
        <div className="flex ml-10 gap-5">
                <a target="_blank" href="https://www.w3schools.com/html/" className="flex items-center gap-3 text-sm lg:text-xl p-2 bg-[rgb(108,78,232)] text-white rounded-lg cursor-pointer">HTML: <FaHtml5 /></a>
                <a target="_blank" href="https://www.w3schools.com/css/default.asp" className="flex items-center gap-3 text-sm lg:text-xl p-2 bg-[rgb(108,78,232)] text-white rounded-lg cursor-pointer">CSS: <FaCss3Alt /></a>
                <a target="_blank" href="https://www.w3schools.com/js/" className="flex items-center gap-3 text-sm lg:text-xl p-2 bg-[rgb(108,78,232)] text-white rounded-lg cursor-pointer">JavaScript: <IoLogoJavascript /></a>
                <a target="_blank" href="https://tailwindcss.com/" className="flex items-center gap-3 text-sm lg:text-xl p-2 bg-[rgb(108,78,232)] text-white rounded-lg cursor-pointer">Tailwind CSS: <RiTailwindCssFill /></a>
                <a target="_blank" href="https://react.dev/" className="flex items-center gap-3 text-sm lg:text-xl p-2 bg-[rgb(108,78,232)] text-white rounded-lg cursor-pointer">React JS: <FaReact /></a> 
                <a href=""></a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
