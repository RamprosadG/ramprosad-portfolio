import React from "react";
import type { IconType } from "react-icons";
import { MdArrowRight } from "react-icons/md";

interface TechStack {
  name: string;
  icon: IconType;
}
interface ProjectCardProps {
  title: string;
  image: string;
  liveLink: string;
  techStack: TechStack[];
  description: string[];
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  image,
  liveLink,
  techStack,
  description,
}) => {
  return (
    <div className="w-full bg-gray-800 shadow-md rounded-xl p-4 hover:shadow-lg transition">
      <img
        src={image}
        alt={title}
        className="w-full object-cover rounded-md mb-4"
      />

      <div className="space-y-4">
        <div className="flex justify-between items-center">
          <h4 className="text-lg font-semibold text-white">{title}</h4>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Live Project"
          >
            <button className="hover:bg-gray-600 cursor-pointer text-amber-300 px-3 py-1 border border-amber-300 text-sm rounded-md transition">
              Live Project
            </button>
          </a>
        </div>
        <ul className="list-disc list-inside text-sm text-gray-300 space-y-1">
          {description?.map((item, i) => (
            <li key={i} className="flex items-start">
              <MdArrowRight className="text-inherit text-lg shrink-0 p-0 m-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="pt-2 flex flex-wrap items-center gap-2 text-sm">
          <span className="text-base font-semibold text-gray-200">
            Tech Stack:
          </span>
          {techStack.map((tech, index) => {
            const Icon = tech.icon;
            return (
              <span
                key={index}
                className="flex items-center gap-1 bg-gray-700 text-gray-200 px-2 py-1 rounded-lg"
              >
                <Icon className="text-base" />
                {tech.name}
              </span>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
