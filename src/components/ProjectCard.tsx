import React from 'react';

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
    <div className="w-full bg-white shadow-lg rounded-xl p-4">
      <img src={image} alt={title} className="w-full object-cover" />
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <h4 className="text-lg font-semibold">{title}</h4>
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Live Project"
            className="text-blue-600 hover:text-blue-800"
          >
            🔗
          </a>
        </div>
        <div className="flex flex-wrap gap-2 text-sm">
          {techStack.map((tech, index) => (
            <span
              key={index}
              className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
        <p className="text-sm text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
