import React from "react";
import ProjectCard from "./ProjectCard";
import dynamicBlogImg from "../assets/dynamic-blog.png";
import portfolioImg from "../assets/portfolio.png";
import groceryImg from "../assets/grocery.png";
import spendSmartImg from "../assets/spend-smart.png";
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
    title: "SpendSmart",
    image: spendSmartImg,
    liveLink: "https://spend-smart-sigma.vercel.app",
    techStack: [
      { name: "Node JS", icon: SiNodedotjs },
      { name: "Express JS", icon: SiExpress },
      { name: "Next JS", icon: SiNextdotjs },
      { name: "Tailwind CSS", icon: SiTailwindcss },
      { name: "PostgreSQL", icon: SiPostgresql },
      { name: "Prisma", icon: SiPrisma },
      { name: "Redux", icon: SiRedux },
    ],
    description: [
      "Developed a personal finance and expense tracking application to manage income and expenses with category-wise classification.",
      "Implemented secure authentication with protected routes and user-specific financial data isolation.",
      "Built a comprehensive analytics dashboard featuring pie charts, category breakdowns, and trend-based financial insights.",
      "Enabled real-time CRUD operations for transactions, allowing users to track, update, and analyze spending patterns efficiently.",
      "Designed financial summaries including total income, expenses, savings, and category-wise distribution.",
      "Used PostgreSQL with Prisma ORM for relational data modeling and optimized query performance.",
      "Managed global application state using Redux for consistent and predictable UI behavior.",
      "Delivered a clean, responsive UI optimized for usability, performance, and accessibility.",
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
      "Developed a full-stack eCommerce platform for grocery products using Next.js, Node.js, Redux, and MySQL.",
      "Implemented JWT-based authentication with user and admin role-based access control for protected routes.",
      "Built an admin dashboard to manage products, categories, offers, and orders with complete CRUD functionality.",
      "Implemented cart and order management workflows with real-time UI updates for a smooth user experience.",
      "Designed promotional offers and product story highlights to improve user engagement and conversion rates.",
      "Used MySQL with Prisma ORM to ensure relational data consistency and performance.",
      "Managed global application state with Redux for scalable front-end data flow.",
      "Delivered a responsive, scalable platform optimized for eCommerce workflows.",
    ],
  },
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
      "Developed a feature-rich blogging platform focused on competitive programming with real-time interactivity.",
      "Implemented JWT-based authentication and role-based access control to secure user accounts and content.",
      "Built a rich-text editor using Quill.js with custom image upload functionality for blog creation.",
      "Designed an admin dashboard to manage blogs, users, categories, and comments with full CRUD operations.",
      "Integrated real-time threaded comments and replies using Socket.io to enhance user engagement.",
      "Used PostgreSQL and Prisma ORM for scalable relational data modeling and optimized database queries.",
      "Managed global application state using Redux for consistent UI behavior across components.",
      "Delivered an admin-friendly CMS optimized for performance, scalability, and real-time collaboration.",
    ],
  },
  {
    title: "Portfolio",
    image: portfolioImg,
    liveLink: "https://ramprosad-portfolio.vercel.app",
    techStack: [
      { name: "React", icon: SiReact },
      { name: "JavaScript", icon: SiJavascript },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Tailwind CSS", icon: SiTailwindcss },
    ],
    description: [
      "Designed and developed a fully responsive personal portfolio website.",
      "Showcases key projects, professional experience, skills, and achievements.",
      "Optimized for SEO and performance to ensure fast load times and better visibility.",
      "Built with mobile-first principles using accessible and semantic HTML.",
      "Integrated a contact form using EmailJS for seamless communication.",
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
