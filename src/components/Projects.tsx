import React from "react";
import ProjectCard from "./ProjectCard";
import dynamicBlogImg from "../assets/dynamic-blog.png";
import portfolioImg from "../assets/portfolio.png";
import groceryImg from "../assets/grocery.png";
import SectionTitle from "./SectionTitle";
import {
  SiNodedotjs,
  SiExpress,
  SiNextdotjs,
  SiTailwindcss,
  SiPostgresql,
  SiPrisma,
  SiMysql,
  SiReact,
  SiJavascript,
  SiTypescript,
  SiRedux,
  SiSocketdotio,
} from "react-icons/si";

const projects = [
  {
    title: "Dynamic Blog",
    image: dynamicBlogImg,
    liveLink: "https://dynamic-blog-client.vercel.app",
    techStack: [
      { name: "Node JS", icon: SiNodedotjs },
      { name: "Express JS", icon: SiExpress },
      { name: "Next JS", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Prisma", icon: SiPrisma },
      { name: "Redux", icon: SiRedux },
      { name: "Socket.io", icon: SiSocketdotio },
    ],
    description: [
      "Developed a feature-rich blogging platform focused on competitive programming, delivering a seamless user experience with real-time interactivity and scalable architecture.",
      "Implemented secure user registration, JWT-based authentication, and role-based access control to protect user data and manage permissions.",
      "Built a dynamic blog editor using Quill.js, enhanced with custom image uploads to cloud storage, enabling rich, Google Docs-like blog creation for admins.",
      "Designed a powerful admin dashboard to manage blogs, users, categories, and content with full CRUD functionality, improving content publishing efficiency.",
      "Integrated a robust comment and threaded reply system with real-time updates via Socket.io, boosting user engagement without requiring page reloads.",
      "Used PostgreSQL with Prisma ORM for scalable, relational data modeling and optimized query performance.",
      "Managed global application state using Redux, ensuring responsive and predictable UI behavior across components.",
      "Resulted in a highly interactive, admin-friendly CMS tailored for tech content, with improved writing experience and real-time collaboration features.",
    ],
  },
  {
    title: "Grocery Website",
    image: groceryImg,
    liveLink: "https://grocery-client-five.vercel.app",
    techStack: [
      { name: "Node JS", icon: SiNodedotjs },
      { name: "Express JS", icon: SiExpress },
      { name: "Next JS", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "MySQL", icon: SiMysql },
      { name: "Prisma", icon: SiPrisma },
      { name: "Redux", icon: SiRedux },
    ],
    description: [
      "Developed a full-featured eCommerce platform for managing grocery products using Next.js, Node.js, Redux, and MySQL.",
      "Implemented secure JWT-based authentication with user and admin roles for protected route access and data control.",
      "Built a dynamic admin dashboard to manage categories, products, offers, and orders with complete CRUD functionality.",
      "Integrated cart and order management features with real-time updates for smooth user experience.",
      "Designed a promotional offer system and product story highlights to increase engagement and conversion rates.",
      "Used MySQL with Prisma ORM for relational data modeling, ensuring performance and data consistency.",
      "Managed global application state using Redux for efficient and scalable front-end data flow.",
      "Delivered a scalable platform with a clean UI and seamless functionality tailored for grocery product workflows.",
    ],
  },
  {
    title: "Portfolio",
    image: portfolioImg,
    liveLink: "https://ramprosad-portfolio.vercel.app",
    techStack: [
      { name: "React", icon: SiReact },
      { name: "JavaScript", icon: SiJavascript },
      { name: "Typescript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    description: [
      "Designed and developed a fully responsive personal portfolio website.",
      "Showcases key projects, professional skills, achievements, and contact information.",
      "Optimized for SEO and performance to ensure fast loading times and improved visibility.",
      "Built with mobile-first principles and accessible, semantic markup.",
      "Implemented contact form functionality using email.js to enable seamless email sending.",
    ],
  },
];

const Projects: React.FC = () => {
  return (
    <div className="w-full text-white">
      <SectionTitle title="Projects" />
      <div className="grid grid-cols-1 gap-8">
        {projects?.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
