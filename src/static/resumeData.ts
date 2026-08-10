export interface ResumeData {
  name: string;

  summary: string;

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

  summary:
    "Software Engineer with 2+ years of experience building ERP, e-commerce, and business applications using Node.js, TypeScript, React, Next.js, PostgreSQL, and MongoDB. Experienced in RESTful APIs, database optimization, JWT authentication, RBAC, real-time systems, and Docker deployment. Strong problem-solving background with 3000+ competitive programming problems solved.",

  contact: {
    location: "Madaripur, Bangladesh",
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
      items: "JavaScript, TypeScript, Python, PHP, C++",
    },
    {
      category: "Frontend",
      items:
        "React.js, Next.js, Redux, Tailwind CSS, HTML5, CSS3, jQuery",
    },
    {
      category: "Backend",
      items:
        "Node.js, Express.js, Nest.js, Laravel",
    },
    {
      category: "Databases & ORM",
      items:
        "PostgreSQL, MySQL, MongoDB, Prisma, Mongoose",
    },
    {
      category: "ERP & DevOps",
      items:
        "ERP Systems, Odoo, Docker, Dokploy",
    },
    {
      category: "Tools & Concepts",
      items:
        "Git, GitHub, Postman, REST APIs, JWT, OAuth, RBAC, E-commerce, Performance Optimization",
    },
  ],

  experiences: [
    {
      title: "Software Engineer",
      company: "Krishibid Group",
      duration: "Dec 2025 – Present",

      bullets: [
        "Develop and maintain a large-scale custom ERP using Node.js, TypeScript, React, Next.js, Redux, and PostgreSQL.",

        "Design RESTful APIs and business workflows for ERP modules, including user management, reporting, and role-based operations.",

        "Optimize PostgreSQL schemas and queries to improve data consistency, reporting performance, and transactional workflows.",

        "Implement JWT authentication and role-based access control (RBAC) to secure sensitive ERP data.",

        "Build responsive interfaces using React, Next.js, Redux, and Tailwind CSS for internal business users.",

        "Containerize services using Docker and manage deployments through Dokploy.",
      ],
    },

    {
      title: "Software Engineer",
      company: "IT Scholar",
      duration: "Jun 2024 – Nov 2025",

      bullets: [
        "Customized Odoo ERP modules and workflows based on business requirements across backend and frontend systems.",

        "Developed e-commerce and ERP features across backend and frontend applications.",

        "Built RESTful APIs and bulk data-processing endpoints handling 100K+ records, reducing processing time by 60%.",

        "Optimized MongoDB indexing and schema design, achieving 3× faster query performance.",

        "Implemented real-time features using Socket.io, increasing user engagement by 40%.",

        "Integrated Paddle and UddoktaPay payment gateways for secure online payments.",
      ],
    },
  ],

  projects: [
    {
      name: "ERP & E-Commerce Platform",

      link: "",

      bullets: [
        "Built a full-stack ERP with integrated e-commerce for inventory, sales, purchases, accounting, and online orders.",

        "Implemented JWT authentication, RBAC, real-time inventory synchronization, order processing, and accounting workflows.",
      ],

      tech:
        "Node.js, Nest.js, Next.js, Redux, TanStack Query, Tailwind CSS, PostgreSQL, Prisma",
    },

    {
      name: "SpendSmart — Personal Finance & Expense Tracker",

      link: "https://spend-smart-sigma.vercel.app",

      bullets: [
        "Built a secure finance application for managing income, expenses, categorized transactions, and financial summaries.",

        "Implemented authentication, protected routes, user data isolation, filtering, and pagination.",
      ],

      tech:
        "Node.js, Express.js, Next.js, Redux, Tailwind CSS, PostgreSQL, Prisma",
    },

    {
      name: "Dynamic Blog — Blog Website",

      link: "https://dynamic-blog-client.vercel.app",

      bullets: [
        "Developed a blogging platform with JWT authentication, RBAC, rich-text editing, image uploads, and admin moderation.",

        "Implemented threaded real-time comments using Socket.io with Prisma and PostgreSQL.",
      ],

      tech:
        "Node.js, Express.js, Next.js, Redux, Tailwind CSS, PostgreSQL, Prisma, Socket.io",
    },
  ],

  achievements: [
    "1st place at UGV ICT Carnival 2019 and 4th place at City University Programming Contest 2017.",

    "Ranked 25th in MIST NCPC Onsite Contest 2020 and participated in national ACM ICPC/NCPC contests.",

    "Solved 3000+ programming problems across Codeforces, AtCoder, LeetCode, LightOJ, UVA, and other online judges.",

    "Mentored university programming club members in algorithms, data structures, and problem-solving.",

    "Organized programming contests and authored problems for online judges.",
  ],

  education: {
    degree:
      "B.Sc. Engineering in Computer Science and Engineering",

    university:
      "Gopalganj Science and Technology University, Gopalganj, Bangladesh",

    duration:
      "Jan 2015 – Dec 2021",
  },
};