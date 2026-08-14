export const tabsDiveContent = {
  tabs: [
    {
      id: "structure",
      label: "1. Modular Directory Layout",
    },
    {
      id: "state",
      label: "2. State & Caching Rules",
    },
    {
      id: "performance",
      label: "3. INP & Performance Blueprint",
    },
    {
      id: "testing",
      label: "4. Testing & Quality Discipline",
    },
  ],

  structure: {
    title: "Production-Ready Directory Structure",
    description:
      "Strict feature-folder separation ensuring scalable modularity across large engineering teams.",
    code: `src/
├── app/                      # Next.js 15 App Router pages & server layouts
│   ├── (dashboard)/          # Grouped route layouts for authenticated views
│   ├── api/                  # Express / Edge API proxies (Hides API Secrets)
│   ├── layout.tsx            # Root Server Layout with AuraProvider
│   └── page.tsx              # High-level entry page
├── components/               # Modular UI Component Library
│   ├── ui/                   # Headless Radix / Tailwind v4 primitives (Button, Dialog)
│   ├── charts/               # Canvas2D & Recharts data visualizers
│   └── layout/               # Navbars, Sidebars, Command Palette
├── features/                 # Domain-driven feature modules
│   ├── trading/              # Order book, Web Workers, Tick batchers
│   └── analytics/            # D3.js force graphs & risk calculations
├── lib/                      # Core System Utilities & API clients
│   ├── queryClient.ts        # TanStack Query configuration & hydration
│   └── workerPool.ts         # Dedicated Web Worker thread pool
└── types/                    # Shared strict TypeScript contracts & interfaces`,
  },

  state: {
    title: "State Management & Caching Strategy",
    cards: [
      {
        title: "Server & Async State (TanStack Query)",
        color: "blue",
        description:
          "All server data fetching, mutations, and cache invalidation are delegated to TanStack Query. We enforce strict query keys and optimistic UI mutators for instantaneous user feedback.",
      },
      {
        title: "UI & Local Transient State",
        color: "emerald",
        description:
          "Local component state stays inside primitive hooks. Global transient preferences (theme, command palette visibility) use atomic Context or Zustand stores to avoid top-level app re-render cascades.",
      },
    ],
  },

  performance: {
    title: "Sub-40ms INP Performance Rules",
    rules: [
      {
        title: "Web Worker Offloading",
        description:
          "Never run heavy JSON parsing, sorting, or mathematical calculations on the JavaScript main thread.",
      },
      {
        title: "React 19 Compiler",
        description:
          "Rely on React 19 static compilation for fine-grained re-render boundaries without manual dependency array bugs.",
      },
      {
        title: "Zero CLS Layout Rules",
        description:
          "Reserve explicitly sized layout containers using CSS containment (`contain: layout size`) before async assets stream in.",
      },
    ],
  },

  testing: {
    title: "Testing & Quality Discipline",
    cards: [
      {
        title: "Unit Testing (Vitest)",
        color: "blue",
        description:
          "Verifying utility functions, state mutations, and custom hooks with 90%+ code coverage.",
      },
      {
        title: "E2E Testing (Playwright)",
        color: "emerald",
        description:
          "Automating critical user flows: authentication, trading execution, and form submission.",
      },
      {
        title: "Accessibility (axe-core)",
        color: "amber",
        description:
          "Running automated axe-core audits on every build commit to catch screen reader & focus regressions.",
      },
    ],
  },
} as const;