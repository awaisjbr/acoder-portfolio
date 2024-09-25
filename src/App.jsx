import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Skills from "./pages/Skills";


const App = () => {
  return (
    <div className="relative bg-[rgb(108,78,232)] min-h-screen flex items-center justify-center py-1">
      <div className="bg-white h-[700px] w-[90%] rounded-3xl p-3 my-3 overflow-hidden">
        <Navbar />
        {/* <Intro /> */}
        <div className="overflow-y-auto h-full">
          <Routes>
            <Route path="/" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/portfolio" element={<Portfolio />}/>
            <Route path="/skills" element={<Skills />}/>
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
