export const systemDiagramContent = {
  title: "High-Level Data Flow & Rendering Pipeline",
  layers: [
    {
      label: "LAYER 1: CLIENT EDGE",
      labelColor: "blue",
      title: "Next.js 15 App Router",
      description:
        "Server Component streaming, automatic layouts, Edge middleware routing & auth check.",
    },
    {
      label: "LAYER 2: STATE & CACHE",
      labelColor: "emerald",
      title: "TanStack Query + CRDT",
      description:
        "Optimistic state updates, stale-while-revalidate caching, IndexedDB offline persistence.",
    },
    {
      label: "LAYER 3: WORKER THREAD",
      labelColor: "amber",
      title: "Web Workers Pipeline",
      description:
        "Off-main-thread WebSocket message parsing, ring buffers, data aggregation for <40ms INP.",
    },
    {
      label: "LAYER 4: RENDER SURFACE",
      labelColor: "purple",
      title: "React 19 + Canvas2D",
      description:
        "Auto-compiled React primitives, Canvas2D high-speed charts, Tailwind v4 design tokens.",
    },
  ],
} as const;