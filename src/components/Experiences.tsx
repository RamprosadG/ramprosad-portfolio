import React from "react";

interface Experience {
  company: string;
  role: string;
  duration: string;
  current?: boolean;
  responsibilities: string[];
  experiences: string[];
}

const experiences: Experience[] = [
  {
    company: "IT Scholar",
    role: "Software Engineer",
    duration: "Feb 2025 – Present",
    current: true,
    responsibilities: [
      "Developed and maintained scalable full-stack web applications using React, Node.js, and MongoDB.",
      "Integrated secure third-party payment systems like Paddle and UddoktaPay.",
      "Collaborated in Agile sprints, performed code reviews, and managed Git workflows.",
    ],
    experiences: [
      "Resolved production issues under pressure using effective debugging and rollback strategies.",
      "Maintained composure in critical situations, prioritized tasks, and communicated progress clearly with the team.",
      "Improved deployment reliability and minimized downtime during urgent hotfix releases.",
    ],
  },
  {
    company: "Vida Technology",
    role: "Software Engineer",
    duration: "Jun 2024 – Dec 2024",
    responsibilities: [
      "Built responsive frontend features using Next.js and Tailwind CSS.",
      "Developed and optimized RESTful APIs for performance.",
      "Contributed to CI/CD automation using GitHub Actions.",
    ],
    experiences: [
      "Collaborated cross-functionally with UI/UX and backend teams for feature delivery.",
      "Handled Git merge conflicts, release versioning, and environment sync efficiently.",
      "Learned to adapt to changing priorities in a fast-paced development cycle.",
    ],
  },
];

import { MdArrowRight } from "react-icons/md";

const Experiences: React.FC = () => {
  return (
    <div className="py-12">
      <div className="w-full mx-auto">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-white mb-12">
          Experience
        </h2>

        <div className="flex flex-col gap-8">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className={`relative bg-gray-800 shadow-sm rounded-lg p-6 border-l-4 ${
                exp.current ? 'border-blue-500' : 'border-gray-700'
              } hover:shadow-md transition`}
            >
              <div className="absolute top-5 left-[-10px] w-4 h-4 bg-blue-500 rounded-full border-2 border-gray-900 shadow" />

              <h3 className="text-xl font-semibold text-gray-100">{exp.role}</h3>
              <p className="text-gray-300 font-medium">{exp.company}</p>
              <p className="text-sm text-gray-400 italic mb-4">{exp.duration}</p>

              <h4 className="font-semibold text-gray-100 mt-2">Responsibilities:</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                {exp.responsibilities.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <MdArrowRight className="text-inherit text-lg shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <h4 className="font-semibold text-gray-100 mt-4">Working Experience:</h4>
              <ul className="space-y-2 text-gray-300 text-sm">
                {exp.experiences.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <MdArrowRight className="text-inherit text-lg shrink-0" />
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
