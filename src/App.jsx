import React, { lazy, Suspense } from "react";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import Portfolio from "./pages/Portfolio";
// import Skills from "./pages/Skills";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Skills = lazy(() => import("./pages/Skills"));
const Portfolio = lazy(() => import("./pages/Portfolio"));

const App = () => {
  return (
    <>
      <Navbar />
      <Suspense fallback={"Loading..."}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/skills" element={<Skills />} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
