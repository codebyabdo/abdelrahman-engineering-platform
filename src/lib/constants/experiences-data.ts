export interface CareerMilestone {
  period: string;
  role: string;
  company: string;
  location: string;
  type: string;
  highlights: string[];
  techStack: string[];
}

export const CAREER_TIMELINE: CareerMilestone[] = [
  {
    period: "Sep 2025 — Present",
    role: "Lead Front-End Engineer",
    company: "BuildFy",
    location: "Egypt",
    type: "Professional",
    highlights: [
      "Led the front-end development of Vorder, a multi-tenant SaaS e-commerce platform.",
      "Owned the front-end architecture, UI/UX implementation, and reusable component system.",
      "Built merchant dashboards and storefront management interfaces from the ground up.",
      "Integrated REST APIs and implemented authentication and authorization workflows.",
      "Led technical planning, feature estimation, and front-end engineering decisions.",
      "Coordinated development priorities with stakeholders and collaborated closely with the backend engineer.",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Axios",
      "REST APIs",
      "Git",
      "Vercel",
    ],
  },

  {
    period: "Oct 2025 — Present",
    role: "Front-End Developer",
    company: "X Code",
    location: "Egypt",
    type: "Project-Based",
    highlights: [
      "Developed the company's official website from scratch as the sole Front-End Developer.",
      "Built reusable UI components and responsive layouts across devices.",
      "Improved the website's SEO structure and loading performance.",
      "Deployed the application to production.",
      "Contributed to the development of an internal accounting and inventory management system.",
      "Led a two-developer front-end team on the accounting system, including feature planning, code reviews, and implementation.",
    ],
    techStack: [
      "React.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "TanStack Query",
      "Axios",
      "Formik",
      "Yup",
      "React Router",
      "Vite",
      "Express.js",
    ],
  },

  {
    period: "Early 2023 — Present",
    role: "Front-End Developer",
    company: "Self-Employed / Freelance",
    location: "Egypt",
    type: "Freelance",
    highlights: [
      "Delivered responsive web applications, landing pages, and business websites for clients across different industries.",
      "Built and enhanced custom front-end interfaces using modern React and JavaScript workflows.",
      "Integrated APIs and implemented interactive UI features based on project requirements.",
      "Diagnosed and resolved front-end issues and improved existing applications.",
      "Worked directly with clients to understand requirements and deliver requested features.",
      "Delivered 10+ commercial front-end projects.",
    ],
    techStack: [
      "React.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "REST APIs",
      "Git",
      "Vite",
    ],
  },

  {
    period: "Jul 2024 — Oct 2024",
    role: "Web Development Intern",
    company: "Code Alpha",
    location: "Remote",
    type: "Internship",
    highlights: [
      "Completed a three-month remote Web Development Internship.",
      "Built JavaScript applications including a Book Library, Music Player, and Age Calculator.",
      "Developed responsive interfaces using modern HTML, CSS, and JavaScript practices.",
      "Strengthened front-end development fundamentals in a distributed development environment.",
    ],
    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Design",
    ],
  },
];