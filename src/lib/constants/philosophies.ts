export const ENGINEERING_VALUES: EngineeringValue[] = [
  {
    title: "Engineering as Product Craft",
    iconName: "Sparkles",
    description: "Code quality is invalid if the end product feels sluggish or ambiguous. I bridge the gap between Figma mockups and production architecture.",
    example: "Achieved 100/100 Lighthouse ratings while preserving smooth 60fps micro-animations."
  },
  {
    title: "Zero-Latency Performance Mindset",
    iconName: "Zap",
    description: "Every millisecond of latency is a friction point. I optimize for low INP, small bundle footprints, and off-main-thread processing.",
    example: "Offloaded high-throughput WebSocket processing to Web Workers in Nexus FinTech."
  },
  {
    title: "Universal Accessibility (WCAG AA)",
    iconName: "Eye",
    description: "Software must be inclusive by default. Focus states, screen reader semantics, and keyboard navigation are non-negotiable standards.",
    example: "Tested with NVDA, VoiceOver, and automated axe-core pipelines on every commit."
  },
  {
    title: "Resilient & Maintainable Architecture",
    iconName: "Layers",
    description: "Clear folder boundaries, strict TypeScript contracts, and modular composition prevent spaghetti code as teams scale.",
    example: "Designed self-documenting token hierarchies in the Aura Component Studio."
  }
];

export interface EngineeringValue {
  title: string;
  iconName: string;
  description: string;
  example: string;
}