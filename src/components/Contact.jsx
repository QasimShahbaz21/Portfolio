import React from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaPaperPlane,
  FaLinkedin,
  FaTwitter,
  FaMapMarkerAlt,
  FaDownload,
} from "react-icons/fa";

const Contact = () => {
  return (
    <div className=" max-w-[1300px] md:py-20 pt-32 w-full mx-auto">
      <h1 className="pop md:text-6xl text-3xl font-semibold md:leading-[70px] md:tracking-tight md:text-left text-center mb-14 md:mt-28 mt-28">
        Contact Me
      </h1>
      <div className=" mx-auto flex flex-col md:flex-row bg-white shadow-xl rounded-lg p-10 gap-10">
        {/* Left Side - Contact Form */}
        <div className="w-full md:w-[55%]">
          <h2 className="robo text-2xl font-semibold mb-6">Get in Touch</h2>
          <form className="robo flex flex-col gap-5">
            {/* Name */}
            <div className="flex items-center border-b-2 border-gray-300 py-2">
              <FaUser className="text-gray-500 mr-3" />
              <input
                type="text"
                placeholder="Your Name"
                className="w-full focus:outline-none text-gray-700"
              />
            </div>

            {/* Email */}
            <div className="flex items-center border-b-2 border-gray-300 py-2">
              <FaEnvelope className="text-gray-500 mr-3" />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full focus:outline-none text-gray-700"
              />
            </div>

            {/* Phone */}
            <div className="flex items-center border-b-2 border-gray-300 py-2">
              <FaPhone className="text-gray-500 mr-3" />
              <input
                type="tel"
                placeholder="Your Phone (Optional)"
                className="w-full focus:outline-none text-gray-700"
              />
            </div>

            {/* Message */}
            <div className="flex items-start border-b-2 border-gray-300 py-2">
              <textarea
                placeholder="Your Message"
                className="w-full focus:outline-none text-gray-700 h-[120px] resize-none"
              />
            </div>

            {/* Submit Button */}
            <button className="robo flex items-center justify-center bg-[#E74C3C] text-white py-3 rounded-lg text-lg font-semibold hover:bg-[#C0392B] transition-all">
              <FaPaperPlane className="mr-2" /> Send Message
            </button>
          </form>
        </div>

        {/* Right Side - Contact Information */}
        <div className="w-full md:w-[45%] flex flex-col justify-start">
          <h2 className="robo text-2xl font-semibold mb-6">
            Contact Information
          </h2>
          <p className="text-gray-500 mb-6 robo">
            Feel free to reach out to me through any of the following channels.
          </p>

          <div className="space-y-4 robo">
            <div className="flex items-center space-x-4 text-gray-700">
              <FaEnvelope className="text-xl text-[#E74C3C]" />
              <span>qasimshahbaz21@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4 text-gray-700">
              <FaLinkedin className="text-xl text-blue-600" />
              <a
                href="https://www.linkedin.com/in/muhammad-qasim-shahbaz-b79866213/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Muhammad Qasim Shahbaz
              </a>
            </div>
            <div className="flex items-center space-x-4 text-gray-700">
              <FaMapMarkerAlt className="text-xl text-green-600" />
              <span>Islamabad, Pakistan</span>
            </div>
            <div className="flex items-center space-x-4 text-gray-700">
              <FaDownload  className="text-xl text-blue-400" />
              <a
                href="/frontendCv.pdf"
                download="Qasim's_Cv"
                rel="noopener noreferrer"
                className="hover:underline "
              >
                <button className="rounded-full font-medium text-xl leading-none tracking-tight bg-black text-white md:py-2 py-2 md:px-0 px-2">
                Download Cv
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
