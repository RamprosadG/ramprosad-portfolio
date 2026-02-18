import React from "react";

interface Experience {
  company: string;
  role: string;
  duration: string;
  current?: boolean;
  experiences: string[];
}

const experiences: Experience[] = [
  {
    company: "Krishibid Group",
    role: "Software Engineer",
    duration: "Dec 2025 – Present",
    current: true,
    experiences: [
      "Developing a large-scale custom ERP system using the MERN stack with TypeScript and PostgreSQL as the primary database.",
      "Designed and implemented RESTful APIs for ERP modules including user management, operations, and reporting.",
      "Built scalable and responsive user interfaces using React.js, Next.js, Redux, and Tailwind CSS for internal business users.",
      "Designed and optimized PostgreSQL schemas, indexes, and queries to ensure data consistency and high performance.",
      "Implemented secure JWT-based authentication and role-based access control (RBAC) to protect sensitive ERP data.",
      "Containerized backend services using Docker and managed deployments through Dockploy, improving deployment reliability and consistency.",
      "Collaborated closely with product and business teams to convert ERP requirements into scalable technical solutions.",
    ],
  },
  {
    company: "IT Scholar",
    role: "Software Engineer",
    duration: "Jun 2024 – Nov 2025",
    experiences: [
      "Worked on multiple ERP solutions using Odoo, customizing modules, workflows, and business logic based on client requirements.",
      "Developed and maintained full-stack applications including ERP systems, e-commerce platforms, and MERN stack projects.",
      "Built backend services using Node.js, Express.js, and Laravel, supporting MongoDB, PostgreSQL, and MySQL databases.",
      "Designed RESTful APIs and bulk data processing endpoints handling 100K+ records, reducing processing time by over 60%.",
      "Optimized MongoDB performance through indexing strategies and schema improvements, achieving up to 3× faster queries.",
      "Implemented real-time features using Socket.io, enabling live updates, notifications, and interactive user experiences.",
      "Integrated secure payment gateways such as Paddle and UddoktaPay for reliable and compliant online transactions.",
    ],
  },
];

import { MdArrowRight } from "react-icons/md";
import SectionTitle from "./SectionTitle";

const Experiences: React.FC = () => {
  return (
    <div className="w-full text-white">
      <SectionTitle title="Working Experiences" />

      <div className="flex flex-col gap-8">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className={`relative bg-gray-800 shadow-sm rounded-lg p-6 border-l-4 ${
              exp.current ? "border-amber-300" : "border-gray-300"
            } hover:shadow-md transition`}
          >
            <div className="absolute top-5 left-[-10px] w-4 h-4 bg-cyan-700 rounded-full border-2 border-gray-900 shadow" />
            <div className="mb-2">
              <span className="text-sm text-amber-300 border border-amber-300 p-1 rounded">
                {exp.duration}
              </span>
            </div>
            <div className="text-lg font-semibold text-gray-200">
              {exp.role}
            </div>
            <div className="text-base font-normal text-gray-300 mb-4">
              {exp.company}
            </div>
            <ul className="space-y-2 text-gray-200 text-sm">
              {exp.experiences?.map((item, i) => (
                <li key={i} className="flex items-start">
                  <MdArrowRight className="text-inherit text-lg shrink-0 p-0 m-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
