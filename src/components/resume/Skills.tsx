import React from "react";
import { motion } from "framer-motion";
import SectionTitle from "../shared/SectionTitle";

import {
  FaCode,
  FaTools,
  FaDatabase,
  FaProjectDiagram,
  FaLanguage,
  FaPython,
  FaPhp,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaGithub,
  FaReact,
  FaLaravel,
  FaNodeJs,
  FaAdjust,
} from "react-icons/fa";
import {
  SiTypescript,
  SiExpress,
  SiNextdotjs,
  SiRedux,
  SiTailwindcss,
  SiJquery,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiPrisma,
  SiMongoose,
  SiPostman,
  SiXampp,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { PiFileCppBold } from "react-icons/pi";
import { GiSkills, GiThink, GiClockwork } from "react-icons/gi";
import { RiUserCommunityFill, RiTeamFill } from "react-icons/ri";
import { type IconType } from "react-icons";

interface SkillItem {
  name: string;
  icon: IconType;
}

interface SkillCategory {
  category: string;
  icon: IconType;
  items: SkillItem[];
}

const skillsData: SkillCategory[] = [
  {
    category: "Programming Languages",
    icon: FaCode,
    items: [
      { name: "JavaScript", icon: FaJs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "HTML5", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
      { name: "Python", icon: FaPython },
      { name: "PHP", icon: FaPhp },
      { name: "C++", icon: PiFileCppBold },
    ],
  },
  {
    category: "Libraries & Frameworks",
    icon: FaProjectDiagram,
    items: [
      { name: "Node", icon: FaNodeJs },
      { name: "Express", icon: SiExpress },
      { name: "React", icon: FaReact },
      { name: "Next", icon: SiNextdotjs },
      { name: "Laravel", icon: FaLaravel },
      { name: "Redux", icon: SiRedux },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "jQuery", icon: SiJquery },
    ],
  },
  {
    category: "Databases & ORMs",
    icon: FaDatabase,
    items: [
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Prisma", icon: SiPrisma },
      { name: "Mongoose", icon: SiMongoose },
    ],
  },
  {
    category: "Tools & Platforms",
    icon: FaTools,
    items: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Postman", icon: SiPostman },
      { name: "VS Code", icon: VscVscode },
      { name: "PgAdmin", icon: SiPostgresql },
      { name: "MongoDB Compass", icon: SiMongodb },
      { name: "XAMPP", icon: SiXampp },
    ],
  },
  {
    category: "Soft Skills",
    icon: GiSkills,
    items: [
      { name: "Effective Communication", icon: RiUserCommunityFill },
      { name: "Team Collaboration", icon: RiTeamFill },
      { name: "Adaptability", icon: FaAdjust },
      { name: "Critical Thinking", icon: GiThink },
      { name: "Time Management", icon: GiClockwork },
    ],
  },
  {
    category: "Languages",
    icon: FaLanguage,
    items: [
      { name: "English", icon: FaLanguage },
      { name: "Bengali", icon: FaLanguage },
    ],
  },
];

const Skills: React.FC = () => {
  return (
    <div className="text-white w-full">
      <SectionTitle title="Skills" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillsData.map((section, idx) => {
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}

              className="bg-gray-800 rounded-lg shadow-sm p-6 hover:shadow-md border border-white/10 hover:border-amber-400/50 transition-colors"
            >
              {/* Category Header */}
              <div className="flex items-center justify-center text-amber-300 gap-2 mb-6">
                <h4 className="text-lg md:text-xl font-medium">
                  {section.category}
                </h4>
              </div>

              {/* Skill Items Grid */}
              <ul className="grid grid-cols-3 gap-2">
                {section.items.map((item, index) => {
                  const SkillIcon = item.icon;
                  return (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, scale: 0.5 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.8,
                        delay: idx * 0.1 + index * 0.05,
                      }}
                      className="bg-gray-700 text-gray-200 text-sm py-3 rounded-lg flex flex-col items-center justify-center gap-2 hover:bg-gray-600 border border-white/10 hover:border-amber-400/50 transition-colors"
                    >
                      <SkillIcon className="text-4xl text-amber-300" />
                      <span className="text-xs text-center px-2">
                        {item.name}
                      </span>
                    </motion.li>
                  );
                })}
              </ul>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;
