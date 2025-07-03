import React from "react";

interface SkillCategory {
  category: string;
  items: string[];
}

const skillsData: SkillCategory[] = [
  {
    category: "Programming Languages",
    items: [
      "C",
      "C++",
      "C#",
      "JavaScript",
      "TypeScript",
      "Python",
      "PHP",
      "Kotlin",
    ],
  },
  {
    category: "Frameworks & Libraries",
    items: [
      "Node.js",
      "Express.js",
      "React.js",
      "Next.js",
      "Redux",
      "Laravel",
      "Odoo",
    ],
  },
  {
    category: "Databases & ORMs",
    items: ["MySQL", "PostgreSQL", "MongoDB", "Prisma", "Mongoose"],
  },
  {
    category: "Web Development",
    items: ["HTML", "CSS", "jQuery", "Bootstrap", "Tailwind CSS"],
  },
  {
    category: "Tools & Platforms",
    items: ["Git", "GitHub", "Postman", "Socket.io"],
  },
  {
    category: "Development Skills",
    items: [
      "OOP",
      "RESTful API Design",
      "WebSocket Communication",
      "Problem Solving",
      "Competitive Programming",
    ],
  },
  {
    category: "Soft Skills",
    items: [
      "Effective Communication",
      "Team Collaboration",
      "Adaptability",
      "Critical Thinking",
      "Time Management",
    ],
  },
  {
    category: "Languages",
    items: ["English", "Bengali"],
  },
];

const Skills: React.FC = () => {
  return (
    <div className="py-12">
      <div className="mx-auto w-full">
        <h2 className="text-3xl md:text-4xl font-semibold text-center text-white mb-10">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((section, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-lg shadow-sm p-6 hover:shadow-md transition"
            >
              <h3 className="text-xl font-medium text-gray-100 mb-4">
                {section.category}
              </h3>
              <ul className="flex flex-wrap gap-2">
                {section.items.map((item, index) => (
                  <li
                    key={index}
                    className="bg-gray-700 text-gray-200 text-sm px-3 py-1 rounded-full"
                  >
                    {item}
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

export default Skills;
