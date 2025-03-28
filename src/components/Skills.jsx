import React, { useState } from "react";

const Skills = () => {
  const [btnState, setBtn] = useState(true);
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full md:max-w-[1300px]   md:py-20 pt-32 mx-auto"
    >
      <h1 className="pop md:text-6xl text-3xl font-semibold md:leading-[70px] md:tracking-tight md:text-left text-center mb-14 md:mt-28">
        Skills
      </h1>
      <div className="flex flex-col md:flex-row items-center justify-center mx-auto gap-10 px-5">
        {/* Text Section */}
        <div className="w-full md:w-[50%] text-center md:text-left">
          <h2 className="text-2xl font-semibold mb-4">Skills I Bring to the Table?</h2>
          <p className="text-gray-400 robo font-normal text-base ">
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
          <div className="flex md:justify-start md:items-start justify-center  items-center md:mt-5 mt-5 mx-auto md:mx-0 bg-[#E74C3C] w-[200px] rounded-full py-2 px-1">
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
          className={`w-full md:w-[50%] flex flex-wrap items-center justify-center gap-6 ${
            btnState ? "flex" : "hidden"
          } `}
        >
          {[
            "tail.png",
            "html.png",
            "css.png",
            "php.png",
            "react.png",
            "codeigniter.png",
            "mysql.png",
            "vite.svg",
          ].map((src, index) => (
            <img
              key={index}
              className="w-[110px] h-[100px] md:w-[100px] md:h-[100px] rounded-full object-cover"
              src={src}
              alt={`Skill ${index + 1}`}
            />
          ))}
        </div>
        <div
          className={` w-full md:w-[50%] flex flex-wrap items-center justify-center gap-6 ${
            !btnState ? "flex" : "hidden"
          }`}
        >
          {[
            "vs.png",
            "npm.png",
            "slack.png",
            "bun.png",
            "git.png",
            "figma.png",
          ].map((src, index) => (
            <img
              key={index}
              className="w-[100px] h-[100px] md:w-[120px] md:h-[120px] rounded-full object-cover"
              src={src}
              alt={`Skill ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
