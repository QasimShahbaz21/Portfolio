import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experiments from './components/Experiments'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll';
const App = () => {
  const locomotiveScroll = new LocomotiveScroll();
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Projects/>
      {/* <Experiments/> */}
      <Skills/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
