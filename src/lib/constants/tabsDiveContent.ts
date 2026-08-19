export const tabsDiveContent = {
  tabs: [
    {
      id: "structure",
      label: "1. Project Structure",
    },
    {
      id: "state",
      label: "2. State & Data",
    },
    {
      id: "performance",
      label: "3. Performance",
    },
    {
      id: "testing",
      label: "4. Quality",
    },
  ],

  structure: {
    title: "Feature-Oriented Project Structure",

    description:
      "I organize applications around reusable components, domain features, shared utilities, and clear application boundaries. The exact structure adapts to the size and requirements of each project.",

    code: `src/
├── app/ or pages/           # Application routes
├── components/              # Shared and reusable UI
│   ├── ui/                  # Reusable interface primitives
│   ├── layout/              # Navigation and layout components
│   └── shared/              # Cross-feature components
├── features/                # Domain and business features
├── hooks/                   # Reusable React hooks
├── services/                # API and external service layer
├── lib/                     # Shared configuration and utilities
├── providers/               # Application providers
├── types/                   # Shared TypeScript types
├── utils/                   # General utility functions
└── styles/                  # Global styling and design tokens`,
  },

  state: {
    title: "State Management & Data Strategy",

    cards: [
      {
        title: "Server State — TanStack Query",
        color: "blue",

        description:
          "API-driven data is managed with TanStack Query for fetching, caching, mutations, loading states, error handling, and query invalidation.",
      },

      {
        title: "Local UI State",
        color: "emerald",

        description:
          "Transient interface state stays close to the components that own it. Shared state is introduced only when multiple parts of the application genuinely depend on it.",
      },

      {
        title: "Forms & Validation",
        color: "amber",

        description:
          "Business forms use tools such as React Hook Form or Formik with schema validation through Zod or Yup depending on the project requirements.",
      },

      {
        title: "API Abstraction",
        color: "blue",

        description:
          "Axios-based API clients and service abstractions help keep networking logic separate from presentation components and make API integration easier to maintain.",
      },
    ],
  },

  performance: {
    title: "Practical Performance Principles",

    rules: [
      {
        title: "Component Boundaries",
        description:
          "Keep components focused and avoid unnecessary application-wide re-renders by placing state close to where it is actually needed.",
      },

      {
        title: "Code Splitting & Lazy Loading",
        description:
          "Load heavier pages and features only when necessary to reduce initial JavaScript and improve perceived loading performance.",
      },

      {
        title: "Optimized Rendering",
        description:
          "Use appropriate rendering strategies, memoization where justified, efficient data fetching, and optimized assets to maintain responsive interfaces.",
      },

      {
        title: "Responsive Performance",
        description:
          "Design interfaces with mobile-first principles while ensuring dashboards and complex business applications remain efficient across larger screens.",
      },
    ],
  },

  testing: {
    title: "Quality & Engineering Discipline",

    cards: [
      {
        title: "Type Safety",
        color: "blue",

        description:
          "TypeScript is used to improve contracts between components, API models, forms, and reusable application utilities.",
      },

      {
        title: "Code Review",
        color: "emerald",

        description:
          "In team environments, I participate in code reviews and merge request reviews to maintain consistency and catch implementation issues early.",
      },

      {
        title: "API Testing",
        color: "amber",

        description:
          "Tools such as Postman and Apidog are used to inspect API behavior, validate requests, and support frontend-backend integration.",
      },
    ],
  },
} as const;