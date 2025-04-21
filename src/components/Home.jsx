import React, { useEffect } from "react";
import Hero from "./Hero";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "./Contact";
import LocomotiveScroll from "locomotive-scroll";

const Home = () => {
  useEffect(() => {
    const scroll = new LocomotiveScroll();
    return () => scroll.destroy(); // Clean up
  }, []);

  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
};

export default Home;
