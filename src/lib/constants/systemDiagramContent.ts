export const systemDiagramContent = {
  title: "High-Level Frontend Architecture",

  layers: [
    {
      label: "LAYER 1: APPLICATION",
      labelColor: "blue",
      title: "Next.js / React Application",

      description:
        "Route-based application structure with reusable layouts, pages, components, and clear separation between client and server responsibilities.",
    },

    {
      label: "LAYER 2: DATA & STATE",
      labelColor: "emerald",
      title: "TanStack Query + Application State",

      description:
        "Server-state fetching, caching, mutations, invalidation, and predictable client-side state management for API-driven applications.",
    },

    {
      label: "LAYER 3: API & SERVICES",
      labelColor: "amber",
      title: "REST APIs + Service Layer",

      description:
        "Centralized API communication using Axios and service abstractions for authentication, CRUD operations, error handling, and backend integration.",
    },

    {
      label: "LAYER 4: UI SYSTEM",
      labelColor: "purple",
      title: "Reusable Components + Tailwind CSS",

      description:
        "Reusable UI primitives, responsive layouts, consistent design patterns, accessible interactions, and maintainable styling conventions.",
    },
  ],
} as const;