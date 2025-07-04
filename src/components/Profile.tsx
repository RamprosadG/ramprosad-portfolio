import React from "react";
import resume from "../assets/Resume_Ramprosad_Gharami.pdf";
import {
  FaLinkedin,
  FaGithub,
  FaWhatsapp,
  FaFacebook,
} from "react-icons/fa";
import ProfileImage from "../assets/Ramprosad.jpg";

const Profile: React.FC = () => {
  return (
    <div className="text-white w-full">
      {/* Profile Header */}
      <div className="flex flex-col items-center">
        <img src={ProfileImage} alt="Profile" className="w-full object-cover rounded-t-md" />
        <h2 className="text-xl font-bold mt-4">Ramprosad Gharami</h2>
        <p className="text-gray-400">Software Engineer</p>

        {/* Social Icons */}
        <div className="flex items-center gap-4 mt-4 text-2xl text-gray-300">
          <a href="#" target="_blank" className="hover:text-cyan-400">
            <FaLinkedin />
          </a>
          <a href="#" target="_blank" className="hover:text-cyan-400">
            <FaGithub />
          </a>
          <a href="#" target="_blank" className="hover:text-cyan-400">
            <FaWhatsapp />
          </a>
          <a href="#" target="_blank" className="hover:text-cyan-400">
            <FaFacebook />
          </a>
        </div>
      </div>
      <div className="w-full px-2 mt-6">
        <div className="flex gap-4 w-full">
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
