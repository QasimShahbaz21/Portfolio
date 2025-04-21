import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Experiments from './components/Experiments'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Footer from './components/Footer'
import LocomotiveScroll from 'locomotive-scroll'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AllProducts from './components/AllProducts'

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Projects />
            {/* <Experiments /> */}
            <Skills />
            <Contact />
            <Footer />
          </>
        } />
        <Route path="/projects" element={<AllProducts />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
