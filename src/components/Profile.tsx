import React, { useEffect, useState } from "react";
import resume from "../assets/Resume_Ramprosad_Gharami.pdf";
import { FaLinkedin, FaGithub, FaWhatsapp, FaFacebook } from "react-icons/fa";
import ProfileImage from "../assets/Ramprosad.jpg";

const designation = [
  "Software Engineer",
  "Full-Stack Developer",
  "Competitive Programmer",
  "Problem Solver",
];

const Profile: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [displayDesignation, setDisplayDesignation] = useState<String>("");
  const [charIndex, setCharIndex] = useState<number>(0);
  const [isDeleting, setIsDeleting] = useState<boolean>(false);

  useEffect(() => {
    const currentText = designation[index];
    const delay = isDeleting ? 50 : 100;
    const pause = 3000;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < currentText.length) {
        setDisplayDesignation(currentText.substring(0, charIndex + 1));
        setCharIndex((prev: number) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayDesignation(currentText.substring(0, charIndex - 1));
        setCharIndex((prev: number) => prev - 1);
      } else {
        if (!isDeleting) {
          setTimeout(() => setIsDeleting(true), pause);
        } else {
          setIsDeleting(false);
          setIndex((prev) => (prev + 1) % designation.length);
        }
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, index]);

  return (
    <div className="text-white w-full">
      {/* Profile Header */}
      <div className="flex flex-col items-center">
        <img src={ProfileImage} alt="Profile" className="w-full object-cover" />
        <h2 className="text-2xl font-bold mt-4">Ramprosad Gharami</h2>
        <p className="text-yellow-500 text-lg font-semibold h-6">
          {displayDesignation}
          <span className="animate-blink">|</span>
        </p>

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
