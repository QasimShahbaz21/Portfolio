import React from "react";
import "./Projects.css";

const projectData = [
  {
    id: 1,
    title: "Magic Card",
    image: "/p1.png",
    link: "https://mythrillfiction.com/",
  },
  {
    id: 2,
    title: "Magic Card",
    image: "/p1.png",
    link: "https://mythrillfiction.com/",
  },
  {
    id: 3,
    title: "Magic Card",
    image: "/p1.png",
    link: "https://mythrillfiction.com/",
  },
  {
    id: 4,
    title: "Magic Card",
    image: "/p1.png",
    link: "https://mythrillfiction.com/",
  },
  {
    id: 5,
    title: "Magic Card",
    image: "/p1.png",
    link: "https://mythrillfiction.com/",
  },
  {
    id: 6,
    title: "Magic Card",
    image: "/p1.png",
    link: "https://mythrillfiction.com/",
  },
];

const Projects = () => {
  return (
    <div className="w-full  mx-auto md:px-0 px-5 mt-[100px]">
      <h1 className="text-6xl font-bold pop text-center mb-14">Experiments</h1>
      <div className="container">
        {projectData.map((project) => (
          <a
            key={project.id}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <div
              className="card"
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="overlay">{project.title}</div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
