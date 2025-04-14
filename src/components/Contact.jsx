import React, { useState } from "react";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaPaperPlane,
  FaLinkedin,
  FaMapMarkerAlt,
  FaDownload,
} from "react-icons/fa";

const Contact = () => {
  const [data, setData] = useState({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;  
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const validateForm = () => {
    let formErrors = {};
    if (!data.name.trim()) formErrors.name = "Name is required";
    if (!data.email.trim()) formErrors.email = "Email is required";
    if (!data.message.trim()) formErrors.message = "Message is required";
    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    setSuccessMessage("");
    
    const formErrors = validateForm();
    if (Object.keys(formErrors).length > 0) {
      setErrors(formErrors);
      return;
    }

    setLoading(true);
    try {
      const response = await fetch(
        "https://portfolio-801e1-default-rtdb.firebaseio.com/contactForm.json",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) throw new Error("Failed to send message");

      setSuccessMessage("Your message has been sent successfully!");
      setTimeout(() => setSuccessMessage(""), 3000);
      setData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      setErrors({ message: error.message || "Network error. Please try again later." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-[1300px] md:py-20 pt-32 w-full mx-auto" id="contact">
      <h1 className="pop md:text-6xl text-3xl font-semibold text-center mb-14 md:mt-5 mt-28">Contact Me</h1>
      <div className="mx-auto flex flex-col md:flex-row bg-white shadow-xl rounded-lg p-10 gap-10">
        <div className="w-full md:w-[55%]">
          <h2 className="robo text-2xl font-semibold mb-6">Get in Touch</h2>
          <form className="robo flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="flex items-center border-b-2 border-gray-300 py-2">
              <FaUser className="text-gray-500 mr-3" />
              <input type="text" name="name" value={data.name} onChange={handleChange} placeholder="Your Name" className="w-full focus:outline-none text-gray-700" />
            </div>
            {errors.name && <p className="text-red-500">{errors.name}</p>}

            <div className="flex items-center border-b-2 border-gray-300 py-2">
              <FaEnvelope className="text-gray-500 mr-3" />
              <input type="email" name="email" value={data.email} onChange={handleChange} placeholder="Your Email" className="w-full focus:outline-none text-gray-700" />
            </div>
            {errors.email && <p className="text-red-500">{errors.email}</p>}

            <div className="flex items-center border-b-2 border-gray-300 py-2">
              <FaPhone className="text-gray-500 mr-3" />
              <input type="tel" name="phone" value={data.phone} onChange={handleChange} placeholder="Your Phone (Optional)" className="w-full focus:outline-none text-gray-700" />
            </div>

            <div className="flex items-start border-b-2 border-gray-300 py-2">
              <textarea name="message" value={data.message} onChange={handleChange} placeholder="Your Message" className="w-full focus:outline-none text-gray-700 h-[120px] resize-none"></textarea>
            </div>
            {errors.message && <p className="text-red-500">{errors.message}</p>}

            <button type="submit" className="robo flex items-center justify-center bg-[#E74C3C] text-white py-3 rounded-lg text-lg font-semibold hover:bg-[#C0392B] transition-all" disabled={loading}>
              {loading ? "Sending..." : <><FaPaperPlane className="mr-2" /> Send Message</>}
            </button>

            {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
          </form>
        </div>

        <div className="w-full md:w-[45%] flex flex-col">
          <h2 className="robo text-2xl font-semibold mb-6">Contact Information</h2>
          <p className="text-gray-500 mb-6">Feel free to reach out to me through any of the following channels.</p>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 text-gray-700">
              <FaEnvelope className="text-xl text-[#E74C3C]" />
              <span>qasimshahbaz21@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4 text-gray-700">
              <FaLinkedin className="text-xl text-blue-600" />
              <a href="https://www.linkedin.com/in/muhammad-qasim-shahbaz-b79866213/" target="_blank" rel="noopener noreferrer" className="hover:underline">Muhammad Qasim Shahbaz</a>
            </div>
            <div className="flex items-center space-x-4 text-gray-700">
              <FaMapMarkerAlt className="text-xl text-green-600" />
              <span>Islamabad, Pakistan</span>
            </div>
            <div className="flex items-center space-x-4 text-gray-700">
              <FaDownload className="text-xl text-blue-400" />
              <a href="/frontendCv.pdf" download="Qasim's_Cv" className="hover:underline">
                <button className="rounded-full font-medium text-xl bg-black text-white py-2 px-2">Download CV</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
