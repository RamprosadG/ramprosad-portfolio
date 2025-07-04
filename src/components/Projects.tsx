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
    description: [
      "Developed a full-stack blogging platform centered around competitive programming topics.",
      "Enabled secure user registration, authentication, and role-based access.",
      "Implemented dynamic blog creation with Markdown support and comment functionality.",
      "Built an admin dashboard for managing users, posts, and categories.",
      "Used PostgreSQL and Prisma ORM for relational data modeling and querying.",
    ],
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
    description: [
      "Created an e-commerce platform for online grocery shopping with real-time order processing.",
      "Integrated secure user authentication and customer profiles.",
      "Implemented a dynamic product catalog with filtering, search, and category-based browsing.",
      "Added payment gateway integration and order confirmation workflows.",
      "Built admin dashboard to manage products, categories, and order fulfillment.",
    ],
  },
  {
    title: "Portfolio",
    image: portfolioImg,
    liveLink: "https://ramprosadg.github.io/portfolio",
    techStack: ["HTML", "CSS", "JavaScript", "Bootstrap"],
    description: [
      "Designed and developed a fully responsive personal portfolio site.",
      "Showcases key projects, professional skills, achievements, and contact details.",
      "Optimized for SEO and performance to ensure fast loading and visibility.",
      "Built with mobile-first principles and accessible markup.",
    ],
  },
];

const Projects: React.FC = () => {
  return (
    <div className="w-full text-white">
      <h2 className="text-xl md:text-2xl font-bold text-center mb-12">
        Projects
      </h2>
      <div className="grid grid-cols-1 gap-8">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
