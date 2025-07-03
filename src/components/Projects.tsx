import React from "react";
import ProjectCard from "./ProjectCard";
import dynamicBlogImg from "../assets/dynamic-blog.png";
import portfolioImg from "../assets/protfolio.png";
import groceryImg from "../assets/grocery.png";

const projects = [
  {
    title: "Dynamic Blog",
    image: dynamicBlogImg,
    liveLink: "https://dynamic-blog-client.vercel.app",
    techStack: [
      "Node JS",
      "Express JS",
      "Next JS",
      "Tailwind CSS",
      "PostgreSQL",
      "Prisma",
    ],
    description:
      "A blog platform focused on competitive programming. Includes user registration, blog posting, comments, and admin dashboard for managing content and categories.",
  },
  {
    title: "Grocery Website",
    image: groceryImg,
    liveLink: "https://grocery-client-five.vercel.app",
    techStack: [
      "Node JS",
      "Express JS",
      "Next JS",
      "Tailwind CSS",
      "MySQL",
      "Prisma",
    ],
    description:
      "An e-commerce platform for grocery shopping. Features user login, product browsing, order processing, payment integration, and admin panel.",
  },
  {
    title: "Portfolio",
    image: portfolioImg,
    liveLink: "https://ramprosadg.github.io/portfolio",
    techStack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    description:
      "A responsive portfolio showcasing projects, skills, and experience. Designed for recruiters and collaborators to explore professional background.",
  },
];

const Projects: React.FC = () => {
  return (
    <div id="projects" className="section py-16">
      <div className="w-full px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          Projects
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects?.map((project, idx) => (
            <ProjectCard key={idx} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
