import React, { useEffect, useRef, useState } from "react";
import '../index.css';
import { motion } from "framer-motion";
import * as THREE from "three";
// import BIRDS from "vanta/dist/vanta.birds.min";

const Hero = () => {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect && window.VANTA && window.VANTA.BIRDS) {
      setVantaEffect(
        window.VANTA.BIRDS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 1000.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 1.0,
          backgroundColor: 0xf2f2f0,
          color1: 0xE74C3C,
          birdSize: 0.5,
          separation: 21.0,
          quantity: 3
        })
      );
    }

    return () => {
      if (vantaEffect) {
        vantaEffect.destroy();
        setVantaEffect(null);
      }
    };
  }, [vantaEffect]);



  return (
    <div
      ref={vantaRef}
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full  md:pt-2 mt-7
       md:mb-0 mb-10 md:px-0 px-5"
      id="about"
    >
      <div className="md:max-w-[1300px] flex items-center md:flex-row flex-col justify-between mx-auto md:gap-[70px] gap-10">
        {/* Animate the left section (text area) */}
        <motion.div
          className="md:max-w-[800px]"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <h1 className="pop md:text-6xl text-3xl text-[#000] font-semibold md:leading-[70px] md:tracking-tight">
            Transforming Ideas into Exceptional{" "}
            <span className="text-[#E74C3C]">Designs</span>
          </h1>
          <p className="robo md:mt-10 mt-5 font-normal text-base text-gray-400">
            Hello, I'm Muhammad Qasim, a passionate Frontend Developer with over
            1.5 years of experience in creating visually appealing and
            user-friendly websites. Over the course of my career, I’ve had the
            opportunity to work with various clients, bringing their ideas to
            life through clean, responsive, and interactive web designs. My
            expertise lies in crafting seamless front-end experiences using
            HTML, CSS, JavaScript, and modern frameworks like React and Vue.js.
            I’m always eager to learn and stay updated with the latest industry
            trends to deliver exceptional digital experiences. Whether it's a
            small project or a complex web application, I pride myself on
            turning concepts into stunning, functional websites that make an
            impact.
          </p>
          <div className="robo flex items-center flex-wrap justify-between md:mt-10 mt-5 md:gap-2 gap-10 ">
            <div className="flex flex-col md:gap-6 gap-5">
              <p className="font-semibold md:text-[36px] text-[26px] md:leading-5 md:tracking-tight">
                1.5 years
              </p>
              <p className="font-normal text-[18px] leading-5 tracking-tight text-gray-400">
                Experience{" "}
              </p>
            </div>
            <div className="flex flex-col md:gap-6 gap-5">
              <p className="font-semibold md:text-[36px] text-[26px] md:leading-5 md:tracking-tight">
                5+
              </p>
              <p className="font-normal text-[18px] leading-5 tracking-tight text-gray-400">
                Clients{" "}
              </p>
            </div>
            <div className="flex flex-col md:gap-6 gap-5">
              <p className="font-semibold md:text-[36px] text-[26px] md:leading-5 md:tracking-tight">
                98%
              </p>
              <p className="font-normal text-[18px] leading-5 tracking-tight text-gray-400">
                Satisfaction{" "}
              </p>
            </div>
            <div className="flex flex-col md:gap-6 gap-5">
              <p className="font-semibold md:text-[36px] text-[26px] md:leading-5 md:tracking-tight">
                10+
              </p>
              <p className="font-normal text-[18px] leading-5 tracking-tight text-gray-400">
                Projects Done
              </p>
            </div>
          </div>
        </motion.div>

        {/* Animate the right section (image area) */}
        <motion.div
          className="md:max-w-[420px] py-2 w-full bg-white rounded-xl shadow-lg relative md:mt-0 mt-10"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 2, ease: "easeOut" }}
        >
          <div className="md:w-[400px] w-full bg-secondary rounded-xl mx-auto">
            <img
              className="object-cover w-full h-[370px]"
              src="/view-3d-confident-businessman-Photoroom.png"
              alt="Profile"
            />
          </div>

          <div className="absolute top-5 -left-2 bg-[#E74C3C] text-white shadow-md px-3 py-2 rounded-lg flex items-center gap-2">
            <span className="text-sm font-semibold">📌 UI/UX Design</span>
          </div>

          <div className="absolute bottom-5 left-2 bg-[#E74C3C] text-white shadow-md px-3 py-2 rounded-lg flex items-center gap-2">
            <span className="text-sm font-semibold">💻 Web Development</span>
          </div>

          <div className="absolute top-10 right-2 bg-[#E74C3C] text-white shadow-md px-3 py-2 rounded-lg flex items-center gap-2">
            <span className="text-sm font-semibold">🧑‍💼 Web Consulting</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
