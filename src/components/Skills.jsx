import React, { useState } from "react";

const Skills = () => {
  const [btnState, setBtn] = useState(true);

  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.2"
      className="w-full md:max-w-[1300px] md:py-20 pt-32 mx-auto"
      id="skills"
    >
      <h1 className="pop md:text-6xl text-3xl font-semibold md:leading-[70px] md:tracking-tight md:text-left text-center mb-14 md:mt-28">
        Skills
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center mx-auto gap-10 px-5">
        {/* Text Section */}
        <div className="w-full md:w-[50%] text-center md:text-left">
          <h2 className="text-2xl font-semibold mb-4">
            Skills I Bring to the Table?
          </h2>
          <p className="text-gray-400 robo font-normal text-base">
            I specialize in building dynamic and user-friendly web applications
            with a strong focus on front-end development. My skill set includes
            proficiency in HTML, CSS, JavaScript, and popular frameworks such as
            React and Vue.js. I am also experienced in responsive design,
            version control with Git, and utilizing modern development tools and
            techniques to deliver high-quality, performant web solutions. I
            continuously strive to enhance my skills and stay up-to-date with
            the latest industry trends to create seamless and intuitive user
            experiences.
          </p>
          <div className="flex md:justify-start md:items-start justify-center items-center md:mt-5 mt-5 mx-auto md:mx-0 bg-[#E74C3C] w-[200px] rounded-full py-2 px-1">
            <button
              className={`w-1/2 py-2 text-white rounded-full transition-all duration-300 ${
                btnState ? "bg-[#C0392B]" : "bg-transparent"
              }`}
              onClick={() => setBtn(true)}
            >
              Skills
            </button>
            <button
              className={`w-1/2 py-2 text-white rounded-full transition-all duration-300 ${
                !btnState ? "bg-[#C0392B]" : "bg-transparent"
              }`}
              onClick={() => setBtn(false)}
            >
              Tools
            </button>
          </div>
        </div>

        {/* Skills Images */}
        <div
          className={`w-full md:w-[50%] flex flex-wrap items-center justify-center md:justify-start gap-6 ${
            btnState ? "flex" : "hidden"
          }`}
        >
          {[
            { id: 1, name: "TailwindCss", image: "/tail.png" },
            { id: 2, name: "HTML", image: "/html.png" },
            { id: 3, name: "CSS", image: "/css.png" },
            { id: 4, name: "PHP", image: "/php.png" },
            { id: 5, name: "React js", image: "/react.png" },
            { id: 6, name: "Codeigniter", image: "/codeigniter.png" },
            { id: 7, name: "Mysql", image: "/mysql.png" },
            { id: 8, name: "TailwindCss", image: "/tail.png" },
          ].map((skill) => (
            <div key={skill.id} className="relative group">
              <img
                className="w-[110px] h-[100px] md:w-[100px] md:h-[100px] rounded-full object-cover"
                src={skill.image}
                alt={`Skill ${skill.name}`}
              />
              <p className="absolute -top-6 left-7 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-gray-400">
                {skill.name}
              </p>
            </div>
          ))}
        </div>

        {/* Tools Images */}
        <div
          className={`w-full md:w-[50%] flex flex-wrap items-center justify-center md:justify-start gap-6 ${
            !btnState ? "flex" : "hidden"
          }`}
        >
          {[
            { id: 1, name: "Vs Code", image: "/vs.png" },
            { id: 2, name: "Npm", image: "/npm.png" },
            { id: 3, name: "Slack", image: "/slack.png" },
            { id: 4, name: "Bun", image: "/bun.png" },
            { id: 5, name: "Git Hub", image: "/git.png" },
            { id: 6, name: "Figma", image: "/figma.png" },
            { id: 7, name: "Vite", image: "/vite.svg" },
          ].map((skill) => (
            <div key={skill.id} className="relative group">
              <img
                className="w-[110px] h-[100px] md:w-[100px] md:h-[100px] rounded-full object-cover"
                src={skill.image}
                alt={`Skill ${skill.name}`}
              />
              <p className="absolute -top-6 left-7 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center text-gray-400">
                {skill.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
