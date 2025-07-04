import React from "react";

interface SkillCategory {
  category: string;
  items: string[];
}

const skillsData: SkillCategory[] = [
  {
    category: "Programming Languages",
    items: ["JavaScript", "TypeScript", "HTML5", "CSS", "Python", "PHP", "C++"],
  },
  {
    category: "Libraries & Frameworks",
    items: [
      "Node.js",
      "Express.js",
      "React.js",
      "Next.js",
      "Laravel",
      "Redux",
      "Tailwind CSS",
      "jQuery",
    ],
  },
  {
    category: "Databases & ORMs",
    items: ["MongoDB", "MySQL", "PostgreSQL", "Prisma", "Mongoose"],
  },
  {
    category: "Tools & Platforms",
    items: [
      "Git",
      "GitHub",
      "Postman",
      "VS Code",
      "PgAdmin",
      "MongoDB Compass",
      "XAMPP",
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
        <div className="text-xl md:text-2xl font-semibold text-center text-white mb-8">
          Skills
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillsData.map((section, idx) => (
            <div
              key={idx}
              className="bg-gray-800 rounded-lg shadow-sm p-6 hover:shadow-md transition"
            >
              <h3 className="text-lg font-medium text-white mb-4">
                {section.category}
              </h3>
              <ul className="flex flex-wrap gap-2 w-full">
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
