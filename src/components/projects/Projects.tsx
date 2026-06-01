import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

import dynamicBlogImg from "../../assets/images/projects/dynamic-blog.png";
import portfolioImg from "../../assets/images/projects/portfolio.png";
import groceryImg from "../../assets/images/projects/grocery.png";
// SpendSmart Images
import ssHome from "../../assets/images/projects/spend-smart/home.png";
import ssDashboard from "../../assets/images/projects/spend-smart/dashboard.png";
import ssLogin from "../../assets/images/projects/spend-smart/login.png";
import ssRegister from "../../assets/images/projects/spend-smart/register.png";
import ssExpense from "../../assets/images/projects/spend-smart/expense.png";
import ssIncome from "../../assets/images/projects/spend-smart/income.png";
import ssCategory from "../../assets/images/projects/spend-smart/category.png";
import ssTransaction from "../../assets/images/projects/spend-smart/transaction.png";
import ssStatistics from "../../assets/images/projects/spend-smart/statistics.png";
import ssUser from "../../assets/images/projects/spend-smart/user.png";
// Dynamic Blog Images
import dbAdminBlog from "../../assets/images/projects/dynamic-blog/admin_blog.png";
import dbBlog from "../../assets/images/projects/dynamic-blog/blog.png";
import dbBlogCreate from "../../assets/images/projects/dynamic-blog/blog_create.png";
import dbCategory from "../../assets/images/projects/dynamic-blog/category.png";
import dbCategoryCreate from "../../assets/images/projects/dynamic-blog/category_create.png";
import dbDashboard from "../../assets/images/projects/dynamic-blog/dashboard.png";
import dbHome from "../../assets/images/projects/dynamic-blog/home.png";
import dbLogin from "../../assets/images/projects/dynamic-blog/login.png";
import dbRegister from "../../assets/images/projects/dynamic-blog/register.png";
import dbUser from "../../assets/images/projects/dynamic-blog/user.png";

import SectionTitle from "../shared/SectionTitle";
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

const projectImages = [groceryImg, dynamicBlogImg, portfolioImg];
const spendSmartImages = [
  ssHome,
  ssRegister,
  ssLogin,
  ssDashboard,
  ssCategory,
  ssIncome,
  ssExpense,
  ssTransaction,
  ssStatistics,
  ssUser,
];
const dynamicBlogImages = [
  dbHome,
  dbBlog,
  dbRegister,
  dbLogin,
  dbDashboard,
  dbCategory,
  dbCategoryCreate,
  dbAdminBlog,
  dbBlogCreate,
  dbUser,
];


const projects = [
  {
    title: "SpendSmart",
    images: spendSmartImages,
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
    images: projectImages,
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
    images: dynamicBlogImages,

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
    images: projectImages,
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
      <SectionTitle title="Projects" direction="left" />
      <div className="grid grid-cols-1 gap-8">
        {projects?.map((project, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: idx * 0.1, ease: "easeOut" }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}

      </div>
    </div>
  );
};

export default Projects;
