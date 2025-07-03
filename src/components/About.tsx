import React from "react";
import ramprosadImg from "../assets/Ramprosad.jpg";
import resumePDF from "../assets/Resume_Ramprosad_Gharami.pdf";
import { RiHtml5Fill } from "react-icons/ri";
import { FaDatabase } from "react-icons/fa6";
import { FaHeadSideVirus } from "react-icons/fa";
import { FaBrain } from "react-icons/fa";

const interests = [
  { icon: <RiHtml5Fill size={30} />, label: "Web Development" },
  { icon: <FaHeadSideVirus size={30} />, label: "Frontend Development" },
  { icon: <FaDatabase size={30} />, label: "Backend Development" },
  { icon: <FaHeadSideVirus size={30} />, label: "Machine Learning" },
  { icon: <FaHeadSideVirus size={30} />, label: "Data Science" },
  { icon: <FaHeadSideVirus size={30} />, label: "Web Hosting" },
  { icon: <FaBrain size={30} />, label: "Problem Solving" },
  { icon: <FaHeadSideVirus size={30} />, label: "Programming" },
];

const About: React.FC = () => {
  return (
    <div className="w-full py-2 flex justify-center items-center">
      <div className="w-full flex flex-col items-center">
        <h3 className="text-3xl font-semibold text-center mt-3">About</h3>

        {/* Profile Image & Download */}
        <div className="flex flex-col items-center mt-6 space-y-4">
          <img
            src={ramprosadImg}
            alt="Ramprosad Gharami"
            className="w-40 h-40 rounded-full object-cover shadow-lg"
          />
          <a
            href={resumePDF}
            download="Resume_Ramprosad_Gharami.pdf"
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Download Resume
          </a>
        </div>

        {/* About Info */}
        <div className="mt-10 text-justify w-full">
          <p className="text-base w-full leading-relaxed text-gray-800">
            I'm <strong>Ramprosad Gharami</strong>, a Software Engineer and
            Competitive Programmer with a B.Sc. in Computer Science from
            Gopalganj Science and Technology University. I specialize in
            building full-stack web applications using modern technologies like{" "}
            <strong>Node.js, Express.js, React, Next.js, and MongoDB</strong>.
            <br />
            <br />
            With a strong foundation in problem-solving and real-world
            development, I've worked on projects ranging from real-time apps
            with WebSockets to secure payment integrations (Paddle, UddoktaPay).
            I'm passionate about clean, scalable code and continuous learning.
            <br />
            <br />
            Beyond coding, I enjoy competitive programming, fast typing, and
            engaging with tech communities. I'm always eager to collaborate on
            impactful, challenging projects.
          </p>
        </div>

        {/* Interests Section */}
        <h3 className="text-2xl font-semibold text-center mt-12 mb-6 text-blue-700">
          Interests
        </h3>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
          {interests.map(({ icon, label }, index) => (
            <div
              key={index}
              className="flex items-center space-x-3 bg-white shadow px-4 py-3 rounded-lg transition hover:shadow-md"
            >
              <div className="text-blue-600">{icon}</div>
              <h4 className="text-base font-medium">{label}</h4>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
