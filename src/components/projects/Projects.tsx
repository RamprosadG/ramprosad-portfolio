import React from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

// SpendSmart Images
import ssHome from "../../assets/images/projects/spend-smart/home.png";
import ssDashboard from "../../assets/images/projects/spend-smart/dashboard.png";
import ssLogin from "../../assets/images/projects/spend-smart/login.png";
import ssRegister from "../../assets/images/projects/spend-smart/register.png";
import ssAdminRegister from "../../assets/images/projects/spend-smart/admin-register.png";
import ssExpense from "../../assets/images/projects/spend-smart/expense.png";
import ssExpenseDetails from "../../assets/images/projects/spend-smart/expense-details.png";
import ssIncome from "../../assets/images/projects/spend-smart/income.png";
import ssIncomeDetails from "../../assets/images/projects/spend-smart/income-details.png";
import ssCategory from "../../assets/images/projects/spend-smart/category.png";
import ssCreateCategory from "../../assets/images/projects/spend-smart/create-category.png";
import ssTransaction from "../../assets/images/projects/spend-smart/transaction.png";
import ssTransactionDetails from "../../assets/images/projects/spend-smart/transaction-details.png";
import ssCreateTransaction from "../../assets/images/projects/spend-smart/create-transaction.png";
import ssCreateExpense from "../../assets/images/projects/spend-smart/create-expense.png";
import ssCreateIncome from "../../assets/images/projects/spend-smart/create-income.png";
import ssCreateUser from "../../assets/images/projects/spend-smart/create-user.png";
import ssCompany from "../../assets/images/projects/spend-smart/company.png";
import ssCreateCompany from "../../assets/images/projects/spend-smart/create-company.png";
import ssStatistics from "../../assets/images/projects/spend-smart/statistics.png";
import ssProfile from "../../assets/images/projects/spend-smart/profile.png";
import ssUser from "../../assets/images/projects/spend-smart/user.png";
// Dynamic Blog Images
import dbHome from "../../assets/images/projects/dynamic-blog/home.png";
import dbHomeLoggedin from "../../assets/images/projects/dynamic-blog/home-loggedin.png";
import dbLogin from "../../assets/images/projects/dynamic-blog/login.png";
import dbRegister from "../../assets/images/projects/dynamic-blog/register.png";
import dbBlogDetails from "../../assets/images/projects/dynamic-blog/blog-details.png";
import dbAdminDashboard from "../../assets/images/projects/dynamic-blog/admin-dashboard.png";
import dbAdminBlog from "../../assets/images/projects/dynamic-blog/admin-blog.png";
import dbCreateBlog from "../../assets/images/projects/dynamic-blog/create-blog.png";
import dbAdminCategory from "../../assets/images/projects/dynamic-blog/admin-category.png";
import dbCreateCategory from "../../assets/images/projects/dynamic-blog/create-category.png";
import dbAdminUser from "../../assets/images/projects/dynamic-blog/admin-user.png";
import dbCreateUser from "../../assets/images/projects/dynamic-blog/create-user.png";
import dbAdminCompany from "../../assets/images/projects/dynamic-blog/admin-company.png";
import dbCreateCompany from "../../assets/images/projects/dynamic-blog/create-company.png";
import dbAdminRegister from "../../assets/images/projects/dynamic-blog/admin-register.png";
import dbProfile from "../../assets/images/projects/dynamic-blog/profile.png";
// Grocery Website Images
import gwGrocery from "../../assets/images/projects/gorcery-website/grocery.png";
import gwSpendSmart from "../../assets/images/projects/gorcery-website/spend-smart.png";
import gwDynamicBlog from "../../assets/images/projects/gorcery-website/dynamic-blog.png";
import gwPortfolio from "../../assets/images/projects/gorcery-website/portfolio.png";
// Portfolio Images
import pfAbout from "../../assets/images/projects/portfolio/about.png";
import pfContact from "../../assets/images/projects/portfolio/contact.png";
import pfContest from "../../assets/images/projects/portfolio/contest.png";
import pfExperience from "../../assets/images/projects/portfolio/experience.png";
import pfInterest from "../../assets/images/projects/portfolio/interest.png";
import pfProblemSolving from "../../assets/images/projects/portfolio/problem-solving.png";
import pfProject from "../../assets/images/projects/portfolio/project.png";
import pfService from "../../assets/images/projects/portfolio/service.png";
import pfSkill from "../../assets/images/projects/portfolio/skill.png";

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
  SiNestjs,
  SiDocker,
} from "react-icons/si";

const spendSmartImages = [
  ssHome,
  ssRegister,
  ssAdminRegister,
  ssLogin,
  ssProfile,
  ssDashboard,
  ssCategory,
  ssCreateCategory,
  ssIncome,
  ssCreateIncome,
  ssIncomeDetails,
  ssExpense,
  ssCreateExpense,
  ssExpenseDetails,
  ssTransaction,
  ssCreateTransaction,
  ssTransactionDetails,
  ssStatistics,
  ssUser,
  ssCreateUser,
  ssCompany,
  ssCreateCompany,
];
const dynamicBlogImages = [
  dbHome,
  dbRegister,
  dbAdminRegister,
  dbLogin,
  dbHomeLoggedin,
  dbProfile,
  dbBlogDetails,
  dbAdminDashboard,
  dbAdminCategory,
  dbCreateCategory,
  dbAdminBlog,
  dbCreateBlog,
  dbAdminUser,
  dbCreateUser,
  dbAdminCompany,
  dbCreateCompany,
];
const groceryImages = [gwGrocery, gwSpendSmart, gwDynamicBlog, gwPortfolio];
const portfolioImages = [
  pfAbout,
  pfService,
  pfInterest,
  pfSkill,
  pfExperience,
  pfProject,
  pfProblemSolving,
  pfContest,
  pfContact,
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
  title: "ERP with E-Commerce",
  images: groceryImages,
  liveLink: "https://grocery-client-five.vercel.app",
  techStack: [
    { name: "NestJS", icon: SiNestjs },
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "Prisma", icon: SiPrisma },
    { name: "Next.js", icon: SiNextdotjs },
    { name: "TypeScript", icon: SiTypescript },
    { name: "Tailwind CSS", icon: SiTailwindcss },
    { name: "Redux Toolkit", icon: SiRedux },
    { name: "Docker", icon: SiDocker },
  ],
  description: [
    "Developed a full-stack ERP system with integrated e-Commerce functionality using NestJS, Next.js, PostgreSQL, and TypeScript.",
    "Built a modular ERP platform including Accounting, Purchase, Sales, Inventory, Customer, Supplier, and User Management modules.",
    "Implemented secure JWT authentication with role-based access control (RBAC) for fine-grained user permissions.",
    "Designed a scalable REST API architecture with NestJS and Prisma ORM for efficient data access and maintainability.",
    "Developed a responsive Next.js frontend with Tailwind CSS and Redux Toolkit for efficient state management and seamless user experience.",
    "Integrated the ERP with an e-Commerce platform to synchronize products, inventory, customers, and sales orders.",
    "Containerized both frontend and backend applications using Docker to ensure consistent development and deployment environments.",
    "Built the entire application with TypeScript across the frontend and backend for improved type safety, maintainability, and developer productivity.",
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
    images: portfolioImages,
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
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <ProjectCard {...project} />
          </motion.div>
        ))}

      </div>
    </div>
  );
};

export default Projects;
