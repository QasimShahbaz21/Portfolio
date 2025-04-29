import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // Icons for the hamburger menu
import { Link } from "react-scroll";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="robo w-full md:max-w-[900px] mx-auto px-6 py-4 mt-2 border-2 border-[#d0cccc] rounded-full shadow-md flex items-center justify-between">
      {/* Left - Logo */}
      <div className="font-medium text-xl leading-none tracking-tight pr-4 py-3">
        <img
          className="h-[50px] md:w-[150px] object-cover"
          src="/logo.png"
          alt="Profile"
        />
      </div>

      {/* Middle - Desktop Menu */}
      <div className="hidden md:flex items-center gap-10">
        <Link to="about" smooth={true} duration={2000}>
          <p className="cursor-pointer text-[22px] hover:text-[#E74C3C]">
            About
          </p>
        </Link>
        <Link to="projects" smooth={true} duration={2000}>
          <p className="cursor-pointer text-[22px] hover:text-[#E74C3C]">
            Projects
          </p>
        </Link>
        <Link to="skills" smooth={true} duration={2000}>
          <p className="cursor-pointer text-[22px] hover:text-[#E74C3C]">
            Skills
          </p>
        </Link>
        <Link to="contact" smooth={true} duration={2000}>
          <p className="cursor-pointer text-[22px] hover:text-[#E74C3C]">
            Contact
          </p>
        </Link>
      </div>

      {/* Right - Hire Me */}
      <div className="hidden md:block pl-4 ]">
        <button className="w-[150px] py-3 bg-black text-white rounded-full font-medium text-xl leading-none tracking-tight">
          Hire Me
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <div onClick={() => setIsOpen(!isOpen)} className="text-black">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg md:hidden flex flex-col items-center py-4 border-t-2 z-50">
          <Link to="about" smooth={true} duration={2000}>
            <p className="py-2 cursor-pointer hover:text-[#E74C3C]">About</p>
          </Link>
          <Link to="projects" smooth={true} duration={2000}>
            <p className="py-2 cursor-pointer hover:text-[#E74C3C]">Projects</p>
          </Link>
          <Link to="skills" smooth={true} duration={2000}>
            <p className="py-2 cursor-pointer hover:text-[#E74C3C]">Skills</p>
          </Link>
          <Link to="contact" smooth={true} duration={2000}>
            <p className="py-2 cursor-pointer hover:text-[#E74C3C]">Contact</p>
          </Link>
          <button className="w-[100px] py-2 bg-black text-white font-medium mt-4">
            Hire Me
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
