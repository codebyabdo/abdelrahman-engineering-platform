// ArchitectureSection.tsx

import { FolderTree, GitBranch, Layers, Package } from "lucide-react";

export const architecturePrinciples = [
  {
    icon:  FolderTree,
    title: 'Scalable Project Structure',
    description:
      'I organize applications using scalable feature-driven structures that improve maintainability and team collaboration.',
    details: [
      'Feature-based folder organization',
      'Reusable shared UI and utility layers',
      'Clear separation between business logic and presentation',
    ],
  },
  {
    icon: Layers,
    title: 'Reusable Component Systems',
    description:
      'Building reusable and consistent UI systems helps accelerate development and maintain design consistency across projects.',
    details: [
      'Reusable component libraries',
      'Consistent design patterns',
      'Responsive and accessible interfaces',
    ],
  },
  {
    icon: GitBranch,
    title: 'Collaborative Workflow',
    description:
      'I use Git-based workflows and clean version control practices to support scalable collaboration and stable deployments.',
    details: [
      'Structured Git and GitHub workflow',
      'Feature branch development',
      'CI/CD integration with Vercel deployments',
    ],
  },
  {
    icon: Package,
    title: 'Performance-Oriented Development',
    description:
      'Applications should remain fast and optimized as they scale, so performance is considered from the beginning.',
    details: [
      'Code splitting and lazy loading',
      'Optimized bundle sizes',
      'Efficient API and caching strategies',
    ],
  },
]