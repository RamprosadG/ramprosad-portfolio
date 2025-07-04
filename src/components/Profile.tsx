import React from "react";
import resume from "../assets/Resume_Ramprosad_Gharami.pdf";
import { FaLinkedin, FaGithub, FaWhatsapp, FaFacebook } from "react-icons/fa";
import ProfileImage from "../assets/Ramprosad.jpg";

const Profile: React.FC = () => {
  return (
    <div className="text-white w-full">
      {/* Profile Header */}
      <div className="flex flex-col items-center">
        <img
          src={ProfileImage}
          alt="Profile"
          className="w-full object-cover rounded-t-md"
        />
        <h2 className="text-xl font-bold mt-4">Ramprosad Gharami</h2>
        <p className="text-gray-400">Software Engineer</p>

        {/* Social Icons */}
        <div className="w-full justify-center flex items-center gap-4 mt-4 text-2xl text-gray-300">
          <a
            href="https://linkedin.com/in/ramprosad-gharami"
            target="_blank"
            className="hover:text-cyan-400"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/RamprosadG"
            target="_blank"
            className="hover:text-cyan-400"
          >
            <FaGithub />
          </a>
          <a
            href="https://wa.me/8801323410373"
            target="_blank"
            className="hover:text-cyan-400"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://www.facebook.com/ramprosad.gharami.568"
            target="_blank"
            className="hover:text-cyan-400"
          >
            <FaFacebook />
          </a>
        </div>
      </div>
      <div className="w-full mt-6">
        <div className="flex md:flex-col lg:flex-row gap-4 w-full">
          <a
            href={resume}
            download
            className="w-full text-center text-sm bg-cyan-600 hover:bg-cyan-700 text-white py-2 rounded-lg transition"
          >
            Download Resume
          </a>
          <a
            href="#contact"
            className="w-full text-center text-sm bg-cyan-600 hover:bg-cyan-700 text-white py-2 rounded-lg transition"
          >
            Contact Me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
