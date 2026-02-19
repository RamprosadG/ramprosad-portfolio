export interface ResumeData {
  name: string;
  contact: {
    location: string;
    phone: string;
    email: string;
  };
  links: {
    label: string;
    url: string;
  }[];
  skills: {
    category: string;
    items: string;
  }[];
  experiences: {
    title: string;
    company: string;
    duration: string;
    bullets: string[];
  }[];
  projects: {
    name: string;
    link: string;
    bullets: string[];
    tech: string;
  }[];
  achievements: string[];
  education: {
    degree: string;
    university: string;
    duration: string;
  };
}

export const resumeData: ResumeData = {
  name: "RAMPROSAD GHARAMI",
  contact: {
    location: "Madaripur, Dhaka, Bangladesh",
    phone: "+8801768157889",
    email: "ram.bsmrstu@gmail.com",
  },
  links: [
    {
      label: "linkedin.com/in/ramprosad-gharami",
      url: "https://linkedin.com/in/ramprosad-gharami",
    },
    {
      label: "github.com/RamprosadG",
      url: "https://github.com/RamprosadG",
    },
    {
      label: "ramprosad-portfolio.vercel.app",
      url: "https://ramprosad-portfolio.vercel.app",
    },
  ],
  skills: [
    {
      category: "Languages",
      items: "JavaScript, TypeScript, HTML5, CSS, Python, PHP, C++",
    },
    {
      category: "Libraries & Frameworks",
      items:
        "Node.js, Express.js, React.js, Next.js, Laravel, Redux, Tailwind CSS, jQuery",
    },
    {
      category: "Databases & ORMs",
      items: "MySQL, PostgreSQL, MongoDB, Mongoose, Prisma",
    },
    {
      category: "ERP & DevOps",
      items: "Odoo, Docker, Dockploy",
    },
    {
      category: "Tools & Platforms",
      items: "Git, GitHub, Postman, VS Code, PgAdmin, MongoDB Compass, XAMPP",
    },
    {
      category: "Concepts",
      items:
        "ERP Systems, JWT Authentication & OAuth, RBAC, E-commerce, Performance Optimization",
    },
  ],
  experiences: [
    {
      title: "Software Engineer",
      company: "Krishibid Group",
      duration: "Dec 2025 – Present",
      bullets: [
        "Working as a **Full Stack Developer** on a large-scale **custom ERP system** using **MERN stack with TypeScript**.",
        "Designed and implemented **RESTful APIs** for ERP modules including user management and reporting.",
        "Built responsive and scalable UI using **React, Next.js, Redux, and Tailwind CSS** for internal business users.",
        "Designed and optimized **PostgreSQL schemas and queries**, improving consistency and system performance.",
        "Implemented **JWT-based authentication and role-based access control (RBAC)** to secure sensitive ERP data.",
        "Containerized services using **Docker** and managed deployments via **Dockploy**, improving deployment reliability.",
      ],
    },
    {
      title: "Software Engineer",
      company: "IT Scholar",
      duration: "Jun 2024 – Nov 2025",
      bullets: [
        "Worked on **ERP solutions using Odoo**, customizing modules and workflows based on business requirements.",
        "Developed and maintained **E-commerce and ERP features** across backend and frontend systems.",
        "Built RESTful APIs and **bulk data processing endpoints (100K+ records)**, reducing processing time by 60%.",
        "Optimized **MongoDB databases** using indexing and schema improvements, achieving 3× faster queries.",
        "Implemented **real-time features with Socket.io**, increasing user engagement by 40%.",
        "Integrated **Paddle and UddoktaPay** for secure online payment processing.",
      ],
    },
  ],
  projects: [
    {
      name: "SpendSmart — Personal Finance & Expense Tracker",
      link: "https://spend-smart-sigma.vercel.app",
      bullets: [
        "Fully functional web application for tracking **income, expenses, and savings**.",
        "Secure authentication, protected routes, and user-specific financial data isolation.",
        "Real-time CRUD operations for categorized transactions with financial summaries and trends.",
      ],
      tech: "Node.js, Express.js, Postgres, Prisma | Next.js, Redux, Tailwind CSS",
    },
    {
      name: "Grocery — E-Commerce Website",
      link: "https://grocery-client-five.vercel.app",
      bullets: [
        "Full-stack ecommerce platform with product listing, cart, and order management.",
        "Implemented **JWT authentication** with user and admin role-based access.",
        "Real-time cart updates and order workflows.",
      ],
      tech: "Node.js, Express.js, Next.js, Redux, Tailwind CSS, MySQL, Prisma",
    },
    {
      name: "Dynamic Blog — Blog Website",
      link: "https://dynamic-blog-client.vercel.app",
      bullets: [
        "Blogging platform with **JWT authentication and role-based authorization**.",
        "Rich-text editor using Quill.js with image uploads.",
        "Real-time threaded comments using Socket.io; backend optimized with Prisma and PostgreSQL.",
        "Added **admin moderation features** to manage posts, comments, and user roles efficiently.",
      ],
      tech: "Node.js, Express.js, Next.js, Redux, Tailwind CSS, Postgres, Prisma",
    },
  ],
  achievements: [
    "Secured 1st place at UGV ICT Carnival 2019 and 4th at City University Programming Contest 2017.",
    "Ranked 25th in MIST NCPC Onsite Contest 2020 and participated in national ACM ICPC/NCPC contests.",
    "Solved 3000+ problems across Codeforces, AtCoder, LeetCode, LightOJ, UVA, and other online judges.",
    "Mentored university programming club members in algorithms, data structures, and problem-solving.",
    "Organized both online and onsite programming contests, and authored problems for online judges.",
  ],
  education: {
    degree: "B.Sc. Engineering in Computer Science and Engineering",
    university:
      "Gopalganj Science and Technology University, Gopalganj, Bangladesh",
    duration: "Jan 2015 – Dec 2021",
  },
};
