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
      "Built and deployed scalable full-stack web applications using the MERN stack, Redux, and Tailwind CSS, enabling users to interact seamlessly across devices and platforms.",
      "Designed and developed RESTful APIs and optimized bulk-insert endpoints capable of handling 100K+ records, reducing data processing time by over 60%.",
      "Managed over 5 million database records by optimizing MongoDB schemas, query performance, and indexing strategies, resulting in a 3x increase in query speed and smoother user experiences.",
      "Integrated real-time features using Socket.io, enabling live data updates, notifications, and interactive collaboration — improving user engagement by 40%.",
      "Implemented secure JWT-based authentication with role-based access control, significantly enhancing application security and protecting sensitive data.",
      "Resolved critical production issues through in-depth debugging and profiling, reducing downtime and improving system uptime to 90%.",
      "Developed responsive, accessible UI components in React.js and Tailwind CSS, ensuring compliance with WCAG accessibility standards, and increasing usability for a broader audience.",
      "Managed complex application state using Redux, improving maintainability and reducing bugs in large-scale frontend applications.",
      "Integrated payment gateways such as Paddle and UddoktaPay, ensuring secure, smooth, and compliant transactions that increased conversion rates and reduced payment failures.",
    ],
  },
  {
    company: "Vida Technology",
    role: "Software Engineer",
    duration: "Jun 2024 – Dec 2024",
    experiences: [
      "Delivered scalable full-stack apps using Node.js, Next.js, Express.js, Tailwind CSS, and MySQL, supporting 10K+ active users with responsive performance.",
      "Built modular REST APIs with Express.js and relational models, enabling 100% coverage of key business operations and reducing dev time by 30%.",
      "Implemented JWT-based authentication with access control, improving session security and reducing unauthorized access attempts by 90%.",
      "Optimized SQL queries and schema design, cutting database response time by 60% and improving API speed under load.",
      "Debugged and resolved high-impact frontend/backend issues, boosting system reliability and uptime to 80%.",
      "Developed responsive, WCAG-compliant UIs in Next.js and Tailwind CSS, improving mobile accessibility scores by 40% and enhancing UX across devices.",
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
