import type { Article } from "@/types/blog";

export const ARTICLES: Article[] = [
  {
    id: "react-19-compiler-deep-dive",

    title:
      "Mastering React 19: Compiler, Server Actions & Zero-Memoization Paradigm",

    slug: "react-19-compiler-deep-dive",

    excerpt:
      "An in-depth analysis of how the React 19 compiler eliminates manual useMemo and useCallback boilerplate while maintaining sub-30ms INP in production.",

    readTime: "7 min read",

    publishedAt: "July 2026",

    category: "Architecture",

    tags: ["React 19", "Performance", "Compiler", "TypeScript"],

    featured: true,

    content: `
# Mastering React 19: Compiler, Server Actions & Zero-Memoization Paradigm

For years, React developers spent countless hours wrapping inline handlers in \`useCallback\` and memoizing derived state with \`useMemo\`. While these hooks were necessary to prevent child component re-renders, they added cognitive overhead and subtle dependency-array bug vectors.

With **React 19**, the paradigm shifts dramatically.

## 1. How the React 19 Auto-Compiler Operates

The React 19 Compiler performs static analysis on JavaScript code at compile-time, automatically inserting fine-grained memoization boundaries where needed.

\`\`\`tsx
// Before React 19 (Manual Overhead)
const SortedList = ({ items, filter }: ListProps) => {
  const filtered = useMemo(() => {
    return items.filter(item => item.name.includes(filter));
  }, [items, filter]);

  const handleSelect = useCallback((id: string) => {
    trackEvent(id);
  }, []);

  return <List items={filtered} onSelect={handleSelect} />;
};

// React 19 (Clean Declarative Code)
const SortedList = ({ items, filter }: ListProps) => {
  const filtered = items.filter(item => item.name.includes(filter));
  const handleSelect = (id: string) => trackEvent(id);

  return <List items={filtered} onSelect={handleSelect} />;
};
\`\`\`

## 2. Interaction to Next Paint (INP) Benchmark Results

In testing with our real-time trading application **Nexus FinTech**, removing manual memoization wrappers in favor of React 19 compiler optimizations yielded:

- **18% drop in JavaScript bundle memory overhead**.
- **INP response latency improved from 64ms to 28ms**.
- **Eliminated 100% of stale closure bugs** caused by missing dependency array items.

## 3. Server Actions & Optimistic UI Mutators

React 19 introduces \`useActionState\` and \`useOptimistic\` for clean, boilerplate-free data mutations without external state libraries.

\`\`\`tsx
const [optimisticLikes, addOptimisticLike] = useOptimistic(
  currentLikes,
  (state, newAmount: number) => state + newAmount
);
\`\`\`

## Conclusion

React 19 isn't just an incremental update—it transforms React into a truly compiler-driven, zero-overhead rendering engine.
`,
  },

  {
    id: "inp-optimization-realtime-dashboards",

    title:
      "Optimizing INP (< 40ms) for Data-Dense Streaming Dashboards",

    slug: "inp-optimization-realtime-dashboards",

    excerpt:
      "How we achieved sub-40ms Interaction to Next Paint on screens receiving 10,000 WebSocket updates per second without sacrificing visual richness.",

    readTime: "9 min read",

    publishedAt: "June 2026",

    category: "Performance",

    tags: ["INP", "Web Workers", "WebSockets", "Canvas2D"],

    featured: true,

    content: `
# Optimizing INP (< 40ms) for Data-Dense Streaming Dashboards

Interaction to Next Paint (INP) is Google's Core Web Vital metric measuring overall page responsiveness. For real-time applications receiving high-frequency WebSocket streams, maintaining an INP under 50ms is notoriously difficult.

## The Problem: Main Thread Saturation

When WebSockets deliver thousands of ticker updates per second, traditional React applications freeze because:

1. JSON parsing blocks the JavaScript main thread.
2. React state updates trigger expensive DOM diffing on every tick.
3. Garbage collection spikes cause micro-stutters.

## The Strategy: 3 Pillars of Sub-40ms INP

### Pillar 1: Worker Thread Isolation

By moving WebSocket parsing and data aggregation to a Web Worker, the main thread remains completely unblocked for user interactions.

### Pillar 2: Micro-Task Batching

Instead of calling \`setState\` on every tick, we queue updates into a 16ms ring buffer and flush them in sync with \`requestAnimationFrame\`.

### Pillar 3: Offscreen Canvas Rendering

For charts and order book depth graphs, rendering on a Canvas2D surface avoids DOM node inflation.

\`\`\`typescript
class TickBatcher {
  private queue: Tick[] = [];

  public push(tick: Tick) {
    this.queue.push(tick);

    if (this.queue.length >= 100) {
      this.flush();
    }
  }

  private flush() {
    requestAnimationFrame(() => {
      processTicks(this.queue);
      this.queue = [];
    });
  }
}
\`\`\`

## Results

- **INP dropped from 140ms to 32ms**.
- **Zero dropped frames during high volatility periods**.
`,
  },

  {
    id: "accessible-design-systems-scale",

    title:
      "Designing Accessible & Themeable Component Systems at Scale",

    slug: "accessible-design-systems-scale",

    excerpt:
      "Architectural rules for building WCAG 2.1 AA compliant design systems using headless primitives, CSS variables, and automated axe-core regression suites.",

    readTime: "6 min read",

    publishedAt: "May 2026",

    category: "Design Systems",

    tags: ["Accessibility", "WCAG", "Design Tokens", "Tailwind v4"],

    featured: false,

    content: `
# Designing Accessible & Themeable Component Systems at Scale

Accessibility is often treated as an afterthought or a final QA checklist item. In modern engineering organizations, accessibility must be baked directly into component design tokens and headless primitives.

## Key Principles

1. **Headless Separation**: Never couple keyboard focus management with CSS classes. Use Radix UI or React Aria primitives.

2. **Dual Focus Outline Halos**: Provide high contrast visual outlines that remain visible on both light and dark backgrounds.

3. **Automated CI Auditing**: Run axe-core tests on every Storybook component variant.
`,
  },
];

export const BLOG_CATEGORIES = [
  "All",
  ...Array.from(
    new Set(ARTICLES.map((article) => article.category)),
  ),
];