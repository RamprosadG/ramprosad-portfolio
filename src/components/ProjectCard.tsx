import React from "react";

interface ProjectCardProps {
  title: string;
  image: string;
  liveLink: string;
  techStack: string[];
  description: string;
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
        className="w-full h-48 object-cover rounded-md mb-4"
      />
      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <h4 className="text-lg font-semibold text-white">{title}</h4>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Live Project"
            className="text-blue-400 hover:text-blue-300 text-xl"
          >
            🔗
          </a>
        </div>
        <div className="flex flex-wrap gap-2 text-sm">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-700 text-gray-200 px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="text-sm text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
