export interface ResumeExperience {
  company: string;
  role: string;
  period: string;
  project?: string;
  description: string;
  responsibilities: string[];
  techStack?: string[];
  status?: string;
}

export interface ResumeSkillGroup {
  title: string;
  skills: string[];
}

export interface ResumeEducation {
  degree: string;
  period: string;
  institution: string;
  location: string;
}

export interface ResumeLanguage {
  language: string;
  proficiency: string;
}

export const RESUME = {
  identity: {
    name: "ABD EL-RAHMAN ADEL",
    title: "Front-End Engineer",
    specialization: "React.js • Next.js • TypeScript",
    location: "Egypt",
    availability: "Open to Remote • Hybrid • On-site",

    email: "abdelrahman.adel.js@gmail.com",
    phone: "+20 115 341 4179",

    portfolio: "https://codebyabdo.vercel.app",
    github: "https://github.com/codebyabdo",
    linkedin: "https://linkedin.com/in/codebyabdo",

    resumeUrl: "https://drive.google.com/uc?id=1Of6rshnEM3kXZTrmOXDxLFsrcJ6b3cZZ",
  },

  summary:
    "Front-End Engineer with commercial experience since early 2023, specializing in React.js, Next.js, TypeScript, and scalable front-end architecture. Experienced in building SaaS platforms, enterprise dashboards, and business applications, with hands-on experience in REST API integration, authentication workflows, reusable component systems, and cross-functional collaboration.",

  skills: [
    {
      title: "Frontend",
      skills: [
        "React.js",
        "Next.js",
        "TypeScript",
        "JavaScript ES6+",
        "Tailwind CSS",
      ],
    },

    {
      title: "State & Data",
      skills: [
        "TanStack Query",
        "Redux Toolkit",
        "Axios",
        "REST APIs",
      ],
    },

    {
      title: "Forms & Validation",
      skills: [
        "React Hook Form",
        "Formik",
        "Yup",
      ],
    },

    {
      title: "Backend Knowledge",
      skills: [
        "Node.js",
        "Express.js",
        "JWT Authentication",
      ],
    },

    {
      title: "Databases",
      skills: [
        "PostgreSQL",
        "MongoDB",
      ],
    },

    {
      title: "Engineering",
      skills: [
        "Front-End Architecture",
        "Component Systems",
        "Responsive Design",
        "Performance Optimization",
        "Authentication",
        "RBAC",
        "Code Review",
        "Technical Planning",
      ],
    },

    {
      title: "Tools",
      skills: [
        "Git",
        "GitHub",
        "Vite",
        "Postman",
        "Apidog",
        "Vercel",
        "Neon",
      ],
    },
  ] satisfies ResumeSkillGroup[],

  experience: [
    {
      company: "BuildFy",
      role: "Lead Front-End Engineer",
      period: "Sep 2025 – Present",
      project: "Vorder SaaS Platform",
      status: "Development paused",

      description:
        "Led the end-to-end front-end development of a multi-tenant SaaS e-commerce platform.",

      responsibilities: [
        "Owned front-end architecture, UI/UX implementation, and reusable component systems.",
        "Built merchant dashboards and storefront management interfaces from the ground up.",
        "Integrated REST APIs and implemented authentication and authorization workflows.",
        "Led technical planning, feature estimation, and implementation decisions.",
      ],

      techStack: [
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "TanStack Query",
        "Axios",
        "REST APIs",
        "Vercel",
      ],
    },

    {
      company: "X Code",
      role: "Team Lead — Front-End Engineer",
      period: "Project-based",
      project: "Accounting Management System",
      status: "Production — Internal System",

      description:
        "Led front-end delivery of an enterprise accounting and inventory management system.",

      responsibilities: [
        "Led a two-developer front-end team and owned implementation planning.",
        "Conducted code reviews and coordinated with the backend developer.",
        "Built responsive dashboards for inventory, invoices, reporting, and analytics.",
        "Integrated REST APIs and implemented reusable business modules.",
      ],

      techStack: [
        "React.js",
        "TypeScript",
        "Tailwind CSS",
        "TanStack Query",
        "Axios",
        "Formik",
        "Yup",
      ],
    },

    {
      company: "X Code",
      role: "Front-End Developer",
      period: "Oct 2025",
      project: "Company Portfolio Website",

      description:
        "Developed the official company website from scratch as the sole Front-End Developer.",

      responsibilities: [
        "Built the complete website using reusable and responsive UI components.",
        "Improved SEO structure and loading performance.",
        "Deployed the application to production.",
      ],

      techStack: [
        "React.js",
        "JavaScript",
        "Tailwind CSS",
        "React Router",
        "Vite",
      ],
    },

    {
      company: "Self-Employed",
      role: "Freelance Front-End Developer",
      period: "Early 2023 – Present",

      description:
        "Delivered responsive web applications and custom front-end solutions for clients across multiple industries.",

      responsibilities: [
        "Built responsive landing pages and business websites.",
        "Enhanced existing applications and implemented UI improvements.",
        "Worked directly with clients to understand requirements and deliver features.",
        "Delivered 10+ commercial front-end projects.",
      ],

      techStack: [
        "React.js",
        "JavaScript",
        "TypeScript",
        "Tailwind CSS",
      ],
    },
  ] satisfies ResumeExperience[],

  featuredProject: {
    title: "ADAS Smart Speed Bump Detection System",
    subtitle: "Graduation Project",

    description:
      "AI-powered Advanced Driver Assistance System for real-time speed bump detection and localization.",

    role: "Software Architecture Engineer • Documentation Engineer",

    contributions: [
      "Designed the software architecture for the detection system.",
      "Prepared and documented the complete system architecture.",
      "Collaborated with a multidisciplinary engineering team.",
    ],

    techStack: [
      "Python",
      "YOLOv8",
      "Raspberry Pi",
      "FastAPI",
      "OpenCV",
    ],
  },

  education: {
    degree: "Bachelor of Electrical Engineering",
    period: "2021 – 2026",
    institution: "Future High Institute of Engineering (FIEF)",
    location: "Egypt",
  } satisfies ResumeEducation,

  languages: [
    {
      language: "Arabic",
      proficiency: "Native",
    },
    {
      language: "English",
      proficiency: "Professional Working Proficiency",
    },
  ] satisfies ResumeLanguage[],
} as const;