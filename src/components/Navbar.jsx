import React, { useState } from "react";
import logo from "../assets/logo345.png";
import { FaAlignRight } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import resume from "../assets/resume.pdf"

const Navbar = () => {
  const [mopbileMenu, setMobileMenu] = useState(false);

  const handleMenu = () => {
    setMobileMenu(!mopbileMenu)
  };

  return (
    <nav className="absolute w-full top-0 left-0 right-0 bg-white md:mt-1 md:w-[95%] z-10 md:mx-auto px-2 md:rounded-lg md:px-5 py-3 md:py-1" style={{background: "rgba(255,255,255,0.7)"}}>
      <div className="flex items-center justify-between">
        {/* Logo Icon */}
      <div className="logo flex items-center gap-2">
        <div className="w-10 h-10 bg-[#202A31] flex items-center justify-center rounded-full md:h-16 md:w-16" onClick={() => setMobileMenu(false)}>
          <Link to={"/"}><img className="w-6 md:w-12" src={logo} alt="" /></Link>
        </div>
        <p className="text-[rgb(58,57,93)] font-bold text-md lg:text-xl">
          a<span className="text-[rgb(108,78,232)] font-bold">.</span> Coder
          <span className="text-[rgb(108,78,232)] font-bold">.</span>
        </p>
      </div>

        {/* Desktop Navigation Menu */}
        <div className="hidden md:block">
            <div className="flex items-center gap-8">
            <ul className="flex items-center gap-4 lg:gap-12 text-sm md:text-md lg:text-lg font-semibold">
                <li className="cursor-pointer hover:text-[rgb(108,78,232)] transition-all duration-300 ease-in-out hover:scale-110"><NavLink to={"/"}>Home</NavLink></li>
                <li className="cursor-pointer hover:text-[rgb(108,78,232)] transition-all duration-300 ease-in-out hover:scale-110"><NavLink to={"/about"}>About</NavLink></li>
                <li className="cursor-pointer hover:text-[rgb(108,78,232)] transition-all duration-300 ease-in-out hover:scale-110"><NavLink to={"/skills"}>Skills</NavLink></li>
                <li className="cursor-pointer hover:text-[rgb(108,78,232)] transition-all duration-300 ease-in-out hover:scale-110"><NavLink to={"/portfolio"}>Portfolio</NavLink></li>
                <li className="cursor-pointer hover:text-[rgb(108,78,232)] transition-all duration-300 ease-in-out hover:scale-110"><NavLink to={"/contact"}>Contact</NavLink></li>
            </ul>
            </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className="block md:hidden p-1 cursor-pointer">
          <ul className="flex items-center gap-2 text-sm font-semibold">
            <li className="border p-1 rounded-md"><a className="text-xs" href={resume} download>Download CV</a></li>
            <li className="bg-[rgb(108,78,232)] p-1 text-white rounded-md">
              {mopbileMenu ? <IoClose onClick={handleMenu} /> : <FaAlignRight onClick={handleMenu}/>}
            </li>
          </ul>
          {mopbileMenu ? <div className="absolute top-16 right-2 w-[35%] rounded-md mt-1 bg-white flex items-start justify-center z-10 shadow-md">
              <ul className="flex flex-col gap-5 my-5 text-[rgb(108,78,232)] font- font-bold">
                <li onClick={() => setMobileMenu(false)} className="hover:underline underline-offset-4"><NavLink to={"/"}>Home</NavLink></li>
                <li onClick={() => setMobileMenu(false)} className="hover:underline underline-offset-4"><NavLink to={"/about"}>About</NavLink></li>
                <li onClick={() => setMobileMenu(false)} className="hover:underline underline-offset-4"><NavLink to={"/contact"}>Contact</NavLink></li>
                <li onClick={() => setMobileMenu(false)} className="hover:underline underline-offset-4"><NavLink to={"/skills"}>Skills</NavLink></li>
                <li onClick={() => setMobileMenu(false)} className="hover:underline underline-offset-4"><NavLink to={"/portfolio"}>Portfolio</NavLink></li>
              </ul>
          </div>:<></>}
        </div>

      <button className="hidden md:block bg-[rgb(108,78,232)] text-white py-1 px-2 rounded-lg text-md font-semibold hover:bg-[#152865] transition-all duration-700 ease-in-out hover:border lg:text-lg"><a href={resume} download="resume.pdf">Download CV</a></button>
      </div>
    </nav>
  );
};

export default Navbar;
