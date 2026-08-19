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
    period: "2025 — Present",
    role: "Lead Front-End Engineer",
    company: "BuildFy",
    location: "Egypt",
    type: "Professional",
    highlights: [
      "Led the front-end development of Vorder, a multi-tenant SaaS e-commerce platform.",
      "Designed and implemented the frontend architecture and reusable component system.",
      "Built merchant dashboard interfaces covering products, orders, customers, analytics, and store management.",
      "Developed responsive interfaces for both merchant workflows and storefront experiences.",
      "Integrated REST APIs using TanStack Query and Axios.",
      "Implemented authentication and authorization workflows.",
      "Contributed to technical planning, feature estimation, and frontend engineering decisions.",
      "Collaborated closely with backend engineering to coordinate API contracts and feature delivery.",
    ],
    techStack: [
      "Next.js",
      "React",
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
    period: "2025 — Present",
    role: "Team Lead | Front-End Engineer",
    company: "X Code",
    location: "Egypt",
    type: "Project-Based",
    highlights: [
      "Developed the company's corporate website from scratch as the primary Front-End Developer.",
      "Built reusable components and responsive layouts across the website.",
      "Implemented client-side routing and structured the application using a component-based architecture.",
      "Improved SEO structure, accessibility, and loading performance.",
      "Deployed the website to production using Vercel.",
      "Contributed to the development of an internal accounting and inventory management system.",
      "Led the front-end development team for the accounting system.",
      "Participated in feature planning, code reviews, merge request reviews, and implementation.",
      "Collaborated with the backend engineer to integrate business APIs and workflows.",
    ],
    techStack: [
      "React",
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
      "Built responsive websites, landing pages, dashboards, and business applications for clients.",
      "Developed custom interfaces using React, JavaScript, TypeScript, and modern CSS workflows.",
      "Integrated REST APIs and implemented interactive application features.",
      "Worked on authentication flows, forms, dashboards, and API-driven user interfaces.",
      "Diagnosed frontend issues and improved existing applications.",
      "Worked directly with clients to understand requirements and deliver requested features.",
      "Delivered multiple commercial and client-facing frontend projects.",
    ],
    techStack: [
      "React",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "REST APIs",
      "Git",
      "Vite",
    ],
  },

  {
    period: "Jul 2025 — Aug 2025",
    role: "Web Development Intern",
    company: "Information Technology Institute (ITI)",
    location: "Egypt",
    type: "Internship",
    highlights: [
      "Completed the MEARN Web Development training track.",
      "Strengthened practical skills in modern web application development.",
      "Worked with React and related frontend development technologies.",
      "Practiced application development through structured technical training and projects.",
    ],
    techStack: [
      "React",
      "JavaScript",
      "Node.js",
      "MongoDB",
      "Express.js",
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
      "Developed responsive interfaces using HTML, CSS, and JavaScript.",
      "Strengthened frontend development fundamentals through practical project work.",
    ],
    techStack: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "Responsive Design",
    ],
  },
];