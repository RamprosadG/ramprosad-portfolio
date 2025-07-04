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
    company: "IT Scholar",
    role: "Software Engineer",
    duration: "Feb 2025 – Present",
    current: true,
    experiences: [
      "Developed full-stack web applications using MERN stack, Redux, and Tailwind CSS.",
      "Designed RESTful APIs and efficient bulk-insert endpoints (100K+ records) using Node.js and MongoDB.",
      "Handled 5M+ database records by optimizing schemas, queries, and indexing strategies for high performance.",
      "Integrated WebSocket (Socket.io) to enable real-time data updates and interactive features.",
      "Implemented secure JWT-based authentication with role-based access control.",
      "Resolved critical production issues via debugging and performance profiling, improving system uptime.",
      "Created accessible, responsive UI components in React.js with Tailwind CSS, following WCAG standards.",
      "Managed complex application state using Redux for scalable and maintainable frontend architecture.",
      "Integrated payment gateways (Paddle, UddoktaPay) for secure and seamless transactions.",
    ],
  },
  {
    company: "Vida Technology",
    role: "Software Engineer",
    duration: "Jun 2024 – Dec 2024",
    experiences: [
      "Delivered scalable full-stack applications using Node.js, Next.js, Express.js, Tailwind CSS, and MySQL.",
      "Built modular REST APIs with Express.js and relational models to support core business features.",
      "Implemented JWT-based authentication and access control for secure session management.",
      "Optimized SQL queries and schema design to reduce latency and improve database performance.",
      "Debugged and resolved high-impact frontend and backend issues, increasing system reliability.",
      "Developed responsive, accessible UIs in Next.js and Tailwind CSS for consistent cross-device experiences.",
    ],
  },
];

import { MdArrowRight } from "react-icons/md";

const Experiences: React.FC = () => {
  return (
    <div className="py-12">
      <div className="w-full mx-auto">
        <div className="text-xl md:text-2xl font-semibold text-center text-white mb-8">
          Working Experience
        </div>

        <div className="flex flex-col gap-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`relative bg-gray-800 shadow-sm rounded-lg p-6 border-l-4 ${
                exp.current ? "border-blue-500" : "border-gray-700"
              } hover:shadow-md transition`}
            >
              <div className="absolute top-5 left-[-10px] w-4 h-4 bg-blue-500 rounded-full border-2 border-gray-900 shadow" />
              <div className="mb-2">
                <span className="text-sm text-yellow-200 border border-yellow-200 p-1 rounded">
                  {exp.duration}
                </span>
              </div>
              <div className="text-base font-semibold text-white">
                {exp.role}
              </div>
              <div className="text-base font-normal text-white mb-4">
                {exp.company}
              </div>
              <ul className="space-y-2 text-white text-sm">
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
    </div>
  );
};

export default Experiences;
