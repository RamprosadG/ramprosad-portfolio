import React, { useEffect, useState } from "react";
import resume from "../assets/Resume_Ramprosad_Gharami.pdf";
import ProfileImage from "../assets/Ramprosad.jpg";
import SocialLinks from "./SocialLinks";
import { MdFileDownload } from "react-icons/md";
import { FaPaperPlane } from "react-icons/fa";

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
          <img
            src={ProfileImage}
            alt="Profile"
            className="w-full object-cover rounded"
          />
        <h2 className="text-xl font-bold mt-4">Ramprosad Gharami</h2>
        <p className="text-yellow-500 text-lg font-semibold h-6">
          {displayDesignation}
          <span className="animate-blink">|</span>
        </p>

        {/* Social Icons */}
        <div className="mt-4">
          <SocialLinks />
        </div>
      </div>
      <div className="w-full mt-6">
        <div className="flex md:flex-col lg:flex-row gap-2 md:gap:4 w-full">
          <a
            href={resume}
            download
            className="group w-full text-center text-sm bg-cyan-600 hover:bg-cyan-700 text-white py-2 rounded-lg transition flex items-center justify-center gap-1 md:gap-2"
          >
            <span>Download Resume</span>
            <MdFileDownload className="group-hover:animate-bounce h-4 w-4" />
          </a>
          <a
            href="#contact"
            className="group w-full text-center text-sm bg-cyan-600 hover:bg-cyan-700 text-white py-2 rounded-lg transition flex items-center justify-center gap-1 md:gap-2"
          >
            <span>Contact Me</span>
            <FaPaperPlane className="group-hover:translate-x-1 transition-transform duration-300" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Profile;
