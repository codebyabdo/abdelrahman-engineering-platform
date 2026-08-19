import { TechStackCategory } from "@/types/tech-stack";

export const TECH_STACK_CATEGORIES: TechStackCategory[] = [
  {
    category: "Frontend Development",
    description:
      "Building scalable web applications with React, Next.js, TypeScript, and modern frontend development practices.",
    skills: [
      {
        name: "React.js",
        level: "Advanced",
        experienceYears: 3,
        icon: "Code2",
        highlight:
          "Reusable components, hooks, responsive interfaces, dashboards, and application architecture.",
      },
      {
        name: "Next.js",
        level: "Advanced",
        experienceYears: 2,
        icon: "Globe",
        highlight:
          "App Router, layouts, dynamic routes, server and client components, and SEO-focused applications.",
      },
      {
        name: "TypeScript",
        level: "Advanced",
        experienceYears: 2,
        icon: "FileCode",
        highlight:
          "Typed components, interfaces, API contracts, reusable utility types, and maintainable application code.",
      },
      {
        name: "JavaScript",
        level: "Advanced",
        experienceYears: 3,
        icon: "Braces",
        highlight:
          "ES6+, asynchronous programming, modules, browser APIs, DOM manipulation, and modern application development.",
      },
    ],
  },

  {
    category: "UI & Styling",
    description:
      "Creating responsive, reusable, and visually consistent interfaces across SaaS, business, and corporate applications.",
    skills: [
      {
        name: "Tailwind CSS",
        level: "Advanced",
        experienceYears: 3,
        icon: "Palette",
        highlight:
          "Responsive layouts, reusable utility patterns, design systems, dashboards, and modern UI implementation.",
      },
      {
        name: "shadcn/ui",
        level: "Proficient",
        experienceYears: 1,
        icon: "Box",
        highlight:
          "Reusable accessible UI primitives for forms, dialogs, navigation, dashboards, and application interfaces.",
      },
      {
        name: "Framer Motion",
        level: "Proficient",
        experienceYears: 1,
        icon: "Activity",
        highlight:
          "Page transitions, entrance animations, micro-interactions, and modern motion experiences.",
      },
      {
        name: "Responsive Design",
        level: "Advanced",
        experienceYears: 3,
        icon: "MonitorSmartphone",
        highlight:
          "Mobile-first layouts, responsive dashboards, adaptive interfaces, and cross-device experiences.",
      },
    ],
  },

  {
    category: "Data & Application State",
    description:
      "Managing API-driven applications, server state, forms, validation, and business workflows.",
    skills: [
      {
        name: "TanStack Query",
        level: "Advanced",
        experienceYears: 2,
        icon: "Database",
        highlight:
          "Server-state management, caching, mutations, invalidation, loading states, and API-driven workflows.",
      },
      {
        name: "Axios",
        level: "Advanced",
        experienceYears: 2,
        icon: "ArrowLeftRight",
        highlight:
          "API clients, request configuration, interceptors, error handling, and REST API integration.",
      },
      {
        name: "React Hook Form",
        level: "Proficient",
        experienceYears: 1,
        icon: "ClipboardCheck",
        highlight:
          "Form state management, reusable form components, validation, and complex business forms.",
      },
      {
        name: "Formik & Yup",
        level: "Proficient",
        experienceYears: 1,
        icon: "FileCheck",
        highlight:
          "Structured forms, schema validation, and business-data workflows in React applications.",
      },
    ],
  },

  {
    category: "Backend & Data Knowledge",
    description:
      "Practical backend and database knowledge that supports effective frontend architecture and full-stack collaboration.",
    skills: [
      {
        name: "REST APIs",
        level: "Advanced",
        experienceYears: 2,
        icon: "Globe2",
        highlight:
          "API integration, authentication flows, CRUD operations, request handling, and error management.",
      },
      {
        name: "Node.js",
        level: "Proficient",
        experienceYears: 1,
        icon: "Server",
        highlight:
          "Backend fundamentals, API development, and frontend/backend integration.",
      },
      {
        name: "Express.js",
        level: "Proficient",
        experienceYears: 1,
        icon: "ServerCog",
        highlight:
          "REST endpoints, middleware, request handling, and backend integration.",
      },
      {
        name: "NestJS",
        level: "Proficient",
        experienceYears: 1,
        icon: "Server",
        highlight:
          "Structured backend architecture and API integration in modern TypeScript applications.",
      },
      {
        name: "PostgreSQL & MongoDB",
        level: "Proficient",
        experienceYears: 1,
        icon: "Database",
        highlight:
          "Database concepts, data modeling, queries, and integration with web applications.",
      },
    ],
  },

  {
    category: "Development Tools",
    description:
      "Tools used for development, version control, API testing, collaboration, and deployment.",
    skills: [
      {
        name: "Git & GitHub",
        level: "Advanced",
        experienceYears: 3,
        icon: "GitBranch",
        highlight:
          "Version control, branching, pull requests, merge requests, code reviews, and collaborative workflows.",
      },
      {
        name: "Vite",
        level: "Advanced",
        experienceYears: 2,
        icon: "Zap",
        highlight:
          "React development environments, fast builds, and production-ready frontend applications.",
      },
      {
        name: "Postman & Apidog",
        level: "Proficient",
        experienceYears: 2,
        icon: "Send",
        highlight:
          "API testing, request inspection, debugging, and frontend-backend integration workflows.",
      },
      {
        name: "Vercel",
        level: "Proficient",
        experienceYears: 2,
        icon: "Cloud",
        highlight:
          "Frontend deployment, preview environments, and production hosting.",
      },
    ],
  },

  {
    category: "Engineering Practices",
    description:
      "Engineering practices focused on maintainable architecture, reusable systems, and effective team collaboration.",
    skills: [
      {
        name: "Frontend Architecture",
        level: "Advanced",
        experienceYears: 2,
        icon: "Layers",
        highlight:
          "Feature-based organization, reusable components, service layers, shared UI systems, and scalable project structure.",
      },
      {
        name: "Performance Optimization",
        level: "Proficient",
        experienceYears: 2,
        icon: "Gauge",
        highlight:
          "Loading performance, rendering optimization, bundle awareness, responsive interfaces, and Lighthouse improvements.",
      },
      {
        name: "Authentication & Authorization",
        level: "Proficient",
        experienceYears: 1,
        icon: "ShieldCheck",
        highlight:
          "Authentication flows, protected routes, role-based access, and frontend authorization workflows.",
      },
      {
        name: "Technical Planning",
        level: "Advanced",
        experienceYears: 1,
        icon: "Workflow",
        highlight:
          "Feature planning, estimation, technical decisions, code reviews, and team coordination.",
      },
    ],
  },
];