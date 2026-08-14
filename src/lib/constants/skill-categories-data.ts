import { TechStackCategory } from "@/types/tech-stack";

export const TECH_STACK_CATEGORIES: TechStackCategory[] = [
  {
    category: "Frontend Development",
    description:
      "Modern frontend development focused on scalable React applications and maintainable user interfaces.",
    skills: [
      {
        name: "React.js",
        level: "Advanced",
        experienceYears: 3,
        icon: "Code2",
        highlight:
          "Reusable components, hooks, responsive interfaces, application architecture",
      },
      {
        name: "Next.js",
        level: "Advanced",
        experienceYears: 2,
        icon: "Globe",
        highlight:
          "App Router, layouts, dynamic routes, server/client components, SEO",
      },
      {
        name: "TypeScript",
        level: "Advanced",
        experienceYears: 2,
        icon: "FileCode",
        highlight:
          "Typed components, interfaces, API models, reusable utility types",
      },
      {
        name: "JavaScript",
        level: "Advanced",
        experienceYears: 3,
        icon: "Braces",
        highlight:
          "ES6+, asynchronous programming, DOM APIs, modules, modern browser APIs",
      },
    ],
  },

  {
    category: "UI & Styling",
    description:
      "Building responsive, accessible, and consistent interfaces with modern styling systems.",
    skills: [
      {
        name: "Tailwind CSS",
        level: "Advanced",
        experienceYears: 3,
        icon: "Palette",
        highlight:
          "Responsive layouts, design tokens, reusable utility patterns, dark interfaces",
      },
      {
        name: "shadcn/ui",
        level: "Proficient",
        experienceYears: 1,
        icon: "Box",
        highlight:
          "Reusable UI primitives, accessible components, dialogs, forms and dashboards",
      },
      {
        name: "Framer Motion",
        level: "Proficient",
        experienceYears: 1,
        icon: "Activity",
        highlight:
          "Page transitions, entrance animations, micro-interactions and motion UI",
      },
      {
        name: "Responsive Design",
        level: "Advanced",
        experienceYears: 3,
        icon: "MonitorSmartphone",
        highlight:
          "Mobile-first layouts, cross-device interfaces and adaptive UI systems",
      },
    ],
  },

  {
    category: "Data & Application State",
    description:
      "Managing server state, API communication, forms, validation, and application workflows.",
    skills: [
      {
        name: "TanStack Query",
        level: "Advanced",
        experienceYears: 2,
        icon: "Database",
        highlight:
          "Server-state management, caching, mutations, invalidation and asynchronous workflows",
      },
      {
        name: "Axios",
        level: "Advanced",
        experienceYears: 2,
        icon: "ArrowLeftRight",
        highlight:
          "API clients, request configuration, interceptors and REST API integration",
      },
      {
        name: "React Hook Form",
        level: "Proficient",
        experienceYears: 1,
        icon: "ClipboardCheck",
        highlight:
          "Form state, controlled inputs, validation and reusable form components",
      },
      {
        name: "Formik & Yup",
        level: "Proficient",
        experienceYears: 1,
        icon: "FileCheck",
        highlight:
          "Structured forms, schema validation and business-data workflows",
      },
    ],
  },

  {
    category: "Backend & Data Knowledge",
    description:
      "Practical backend knowledge that supports effective frontend and full-stack collaboration.",
    skills: [
      {
        name: "REST APIs",
        level: "Advanced",
        experienceYears: 2,
        icon: "Globe2",
        highlight:
          "API integration, authentication flows, CRUD operations and error handling",
      },
      {
        name: "Node.js",
        level: "Proficient",
        experienceYears: 1,
        icon: "Server",
        highlight:
          "Backend fundamentals, API development and frontend/backend integration",
      },
      {
        name: "Express.js",
        level: "Proficient",
        experienceYears: 1,
        icon: "ServerCog",
        highlight:
          "REST endpoints, middleware and backend integration",
      },
      {
        name: "PostgreSQL & MongoDB",
        level: "Proficient",
        experienceYears: 1,
        icon: "Database",
        highlight:
          "Data modeling concepts, queries and frontend application integration",
      },
    ],
  },

  {
    category: "Development Tools",
    description:
      "Tools and workflows used for development, collaboration, testing, and deployment.",
    skills: [
      {
        name: "Git & GitHub",
        level: "Advanced",
        experienceYears: 3,
        icon: "GitBranch",
        highlight:
          "Version control, branching, pull requests and collaborative workflows",
      },
      {
        name: "Vite",
        level: "Advanced",
        experienceYears: 2,
        icon: "Zap",
        highlight:
          "Fast development environments, React applications and production builds",
      },
      {
        name: "Postman & Apidog",
        level: "Proficient",
        experienceYears: 2,
        icon: "Send",
        highlight:
          "API testing, request inspection and backend integration workflows",
      },
      {
        name: "Vercel",
        level: "Proficient",
        experienceYears: 2,
        icon: "Cloud",
        highlight:
          "Frontend deployment, previews and production hosting",
      },
    ],
  },

  {
    category: "Engineering Practices",
    description:
      "Engineering practices that support maintainable, scalable, and production-ready frontend applications.",
    skills: [
      {
        name: "Frontend Architecture",
        level: "Advanced",
        experienceYears: 2,
        icon: "Layers",
        highlight:
          "Feature organization, reusable components and scalable project structure",
      },
      {
        name: "Performance Optimization",
        level: "Proficient",
        experienceYears: 2,
        icon: "Gauge",
        highlight:
          "Rendering optimization, bundle awareness, loading performance and UI responsiveness",
      },
      {
        name: "Authentication & Authorization",
        level: "Proficient",
        experienceYears: 1,
        icon: "ShieldCheck",
        highlight:
          "Authentication flows, protected routes and role-based application access",
      },
      {
        name: "Technical Planning",
        level: "Advanced",
        experienceYears: 1,
        icon: "Workflow",
        highlight:
          "Feature planning, estimation, technical decisions and team coordination",
      },
    ],
  },
];