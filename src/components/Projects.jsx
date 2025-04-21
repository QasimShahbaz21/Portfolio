import React, { useState } from "react";
import { Power4 } from "gsap/all";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Projects = () => {
  const [hovering, setHovering] = useState([false, false]); // Hover state for both projects

  const projects = [
    {
      id: 1,
      name: "KENFORE",
      image: "/kenfore.webp",
      description: "KENFORE ANALYTIC",
      tech: "Codeigniter , Bootstrap, MySql",
      link: "https://kenforeanalytics.com/",
    },
    {
      id: 2,
      name: "ITC",
      image: "/itc.png",
      description: "ISLAMABAD TEA",
      tech: "Codeigniter, HTML, CSS, MySql",
      link: "https://islamabadtea.com/",
    },
    {
      id: 3,
      name: "OVEXTECH",
      image: "/ovextech.png",
      description: "OVEX TECH",
      tech: "Codeigniter, HTML, CSS, MySql",
      link: "https://ovextech.com/",
    },
    {
      id: 4,
      name: "Tipsy",
      image: "/tipsy.png",
      description: "TIPSY TEA",
      tech: "Codeigniter, HTML, CSS, MySql",
      link: "https://elohimtechnology.com/tipsytcup-redesign/",
    },
    {
      id: 5,
      name: "Lexed",
      image: "/lexed.png",
      description: "Laws Of Pakistan",
      tech: "Codeigniter, HTML, CSS, MySql",
      link: "https://lawsofpakistan.online/",
    },
    {
      id: 6,
      name: "OCHII",
      image: "/1.png",
      tech: "React js, Tailwindcss",
      description: "Ochii",
    },
  ];

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.2"
      className="featured w-full md:max-w-[1300px] md:py-20 pt-32 md:pt-36 mx-auto"
      id="projects"
    >
      <div className="w-full border-b-[1px] border-zinc-700 md:pb-20 pb-10 md:pt-20 pt-[220px]">
        <h1 className="pop md:text-6xl text-3xl font-semibold md:leading-[70px] md:tracking-tight md:text-left text-center">
          Featured Project
        </h1>
      </div>
      <div className="cards w-full flex gap-10 items-center justify-center md:flex-row md:flex-wrap flex-col mt-10 md:px-0 px-5">
        {projects.map((project, index) => (
          <div
            key={project.id}
            onMouseEnter={() =>
              setHovering((prev) => {
                const newHovering = [...prev];
                newHovering[index] = true;
                return newHovering;
              })
            }
            onMouseLeave={() =>
              setHovering((prev) => {
                const newHovering = [...prev];
                newHovering[index] = false;
                return newHovering;
              })
            }
            className="relative flex flex-col md:w-[45%] w-full md:h-[80vh] h-[100vh]"
          >
            <div className="absolute  left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%] z-50">
              <motion.h1
                initial={{ opacity: 0, y: 100 }}
                animate={{
                  opacity: hovering[index] ? 1 : 0,
                  y: hovering[index] ? 0 : 100,
                }}
                transition={{
                  ease: Power4.easeInOut,
                  duration: 1,
                  delay: 0.3,
                }}
                className="leading-none md:text-6xl text-4xl font-bold text-[#E74C3C] tracking-tight"
              >
                {project.name.split("").map((item, charIndex) => (
                  <motion.span
                    key={charIndex}
                    initial={{ opacity: 0, y: 100 }}
                    animate={{
                      opacity: hovering[index] ? 1 : 0,
                      y: hovering[index] ? 0 : 100,
                    }}
                    transition={{
                      ease: Power4.easeInOut,
                      delay: charIndex * 0.1,
                    }}
                  >
                    {item}
                  </motion.span>
                ))}
              </motion.h1>
            </div>
            <ul className="px-7 pb-10 list-disc marker:text-white marker:text-2xl">
              <li className="md:text-3xl text-2xl hover:scale-40 hover:text-[#E74C3C]">
                {" "}
                <a href={project.link}>{project.description}</a>
              </li>
              <li className="text-gray-400 list-none mt-2 md:text-lg">
                {project.tech}
              </li>
            </ul>
            <div className="card rounded-xl overflow-hidden  transition-transform duration-300 hover:scale-90">
              <a href={project.link}>
                <img
                  className="w-full md:h-[60vh] h-[80vh] object-cover"
                  src={project.image}
                  alt={project.name}
                />
              </a>
            </div>
          </div>
        ))}

        <Link to="/projects" className="pb-10">
          <button className="cursor-pointer w-[150px] py-4 bg-[#E74C3C] text-white rounded-full font-medium text-xl leading-none tracking-tight">
            All Projects
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
