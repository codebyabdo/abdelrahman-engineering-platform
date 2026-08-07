export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  publishedAt: string;
  readingTime: string;
  featured: boolean;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "building-scalable-saas-frontends",
    title: "Building Scalable SaaS Frontends with React",
    excerpt:
      "Lessons learned from building production-grade SaaS applications using React, feature-based architecture, and scalable frontend patterns.",
    content: `
# Building Scalable SaaS Frontends with React

Building SaaS applications is very different from building landing pages or small websites. As applications grow, maintainability, scalability, and performance become critical.

## Feature-Based Architecture

One of the most important decisions I made while working on projects like VORDER was organizing the application by features instead of file types.

\`\`\`
src/
  features/
    products/
    orders/
    auth/
    dashboard/
\`\`\`

This structure improves scalability and makes collaboration easier when projects grow.

## Reusable UI Systems

Creating reusable components accelerated development speed significantly across projects.

Some examples:
- Shared form components
- Reusable modals and tables
- Generic dashboard layouts
- Shared API utilities

## API Layer Structure

Using React Query and Axios together helped reduce redundant requests and simplified server state management.

Key benefits:
- Smart caching
- Better loading states
- Optimistic UI updates
- Cleaner business logic

## Conclusion

Scalable frontend architecture is not about complexity. It's about creating systems that remain maintainable as features, users, and teams grow.
    `,
    category: "Architecture",
    tags: ["React", "SaaS", "Architecture", "Frontend"],
    publishedAt: "2025-02-14",
    readingTime: "8 min",
    featured: true,
  },

  {
    slug: "frontend-performance-optimization",
    title: "Frontend Performance Optimization Techniques",
    excerpt:
      "Practical frontend optimization techniques using lazy loading, code splitting, caching, and rendering improvements.",
    content: `
# Frontend Performance Optimization Techniques

Performance directly affects user experience and business success. During multiple projects, performance optimization became a core part of my frontend workflow.

## Code Splitting

Large bundles slow down applications. Dynamic imports help reduce initial load times significantly.

\`\`\`tsx
const Dashboard = dynamic(() => import('./Dashboard'))
\`\`\`

## Lazy Loading

Lazy loading below-the-fold sections improves perceived performance and reduces unnecessary rendering.

## React Query Caching

Using TanStack Query reduced repeated API calls and improved data-heavy dashboards.

Benefits:
- Faster navigation
- Reduced server load
- Better user experience

## Image Optimization

Optimized assets and CDN delivery improved loading speed dramatically in media-heavy projects.

## Conclusion

Frontend performance should be considered from the beginning of development, not after deployment.
    `,
    category: "Performance",
    tags: ["Performance", "React", "Optimization", "Next.js"],
    publishedAt: "2025-01-28",
    readingTime: "7 min",
    featured: true,
  },

  {
    slug: "role-based-authentication-react",
    title: "Implementing Role-Based Authentication in React Apps",
    excerpt:
      "How I build protected frontend applications with authentication flows, role permissions, and secure route handling.",
    content: `
# Implementing Role-Based Authentication in React Apps

Authentication is one of the most important parts of modern web applications.

While building dashboard systems and SaaS applications, implementing secure authentication and permissions became essential.

## Protected Routes

Applications should prevent unauthorized access both visually and logically.

\`\`\`tsx
if (!user) {
  return <Navigate to="/login" />
}
\`\`\`

## Role-Based Permissions

Different users require different access levels.

Examples:
- Admin
- Owner
- Staff

This approach improves security and simplifies dashboard management.

## Persistent Sessions

Using token-based authentication with proper local storage handling improves user experience while keeping applications secure.

## API Security

Frontend protection alone is never enough. APIs should always validate user permissions server-side.

## Conclusion

Authentication systems should be scalable, maintainable, and designed with security in mind from day one.
    `,
    category: "Authentication",
    tags: ["Authentication", "React", "Security", "Frontend"],
    publishedAt: "2025-01-10",
    readingTime: "6 min",
    featured: false,
  },

  {
    slug: "tanstack-query-real-world-usage",
    title: "Using TanStack Query in Real Projects",
    excerpt:
      "How TanStack Query improved API handling, caching, and frontend scalability in production applications.",
    content: `
# Using TanStack Query in Real Projects

Managing server state manually quickly becomes difficult in large applications.

TanStack Query solved many challenges I faced while building dashboards and SaaS systems.

## Why TanStack Query?

Before using React Query:
- Too much useEffect logic
- Duplicate requests
- Complex loading states
- Difficult caching

After introducing TanStack Query:
- Cleaner code
- Better caching
- Easier mutations
- Improved performance

## Query Organization

I usually organize queries by feature:

\`\`\`
features/
  products/
    api/
    hooks/
\`\`\`

## Better User Experience

Features like:
- Background refetching
- Optimistic updates
- Pagination
- Infinite queries

make applications feel faster and smoother.

## Conclusion

TanStack Query became a core part of my frontend architecture workflow for scalable applications.
    `,
    category: "Data Fetching",
    tags: ["TanStack Query", "React Query", "React", "API"],
    publishedAt: "2024-12-18",
    readingTime: "6 min",
    featured: true,
  },

  {
    slug: "building-modern-company-websites",
    title: "Building Modern Company Websites with React",
    excerpt:
      "Creating responsive and scalable company websites using React, Tailwind CSS, and reusable UI systems.",
    content: `
# Building Modern Company Websites with React

Modern company websites should be fast, responsive, accessible, and easy to maintain.

While working on X CODE, the focus was creating a scalable frontend architecture with reusable UI components.

## Reusable Components

Reusable systems helped accelerate development:
- Navbar systems
- Shared sections
- CTA components
- Responsive layouts

## SEO Optimization

Semantic HTML and proper metadata improved visibility and search rankings.

## Accessibility

Accessibility improvements included:
- Keyboard navigation
- ARIA labels
- Proper semantic structure

## Responsive Design

Using Tailwind CSS allowed building fully responsive layouts efficiently across devices.

## Conclusion

Company websites are not just visual showcases. They represent product quality and brand credibility.
    `,
    category: "Frontend Development",
    tags: ["React", "Tailwind CSS", "Responsive Design", "SEO"],
    publishedAt: "2024-11-22",
    readingTime: "5 min",
    featured: false,
  },

  {
    slug: "typescript-in-large-react-projects",
    title: "Using TypeScript in Large React Applications",
    excerpt:
      "How TypeScript improves scalability, maintainability, and developer experience in complex frontend projects.",
    content: `
# Using TypeScript in Large React Applications

As React applications grow, TypeScript becomes essential for maintaining scalable and maintainable codebases.

## Strong Type Safety

TypeScript helps catch bugs before runtime and improves confidence during refactoring.

## Better Developer Experience

Benefits include:
- Autocomplete
- Safer refactoring
- Better documentation
- Improved team collaboration

## Reusable Typed Components

Generic and reusable components become easier to maintain using TypeScript.

## API Integration

Defining typed API responses improves consistency and reduces frontend bugs significantly.

## Conclusion

TypeScript is one of the best investments for long-term frontend scalability.
    `,
    category: "TypeScript",
    tags: ["TypeScript", "React", "Scalability", "Frontend"],
    publishedAt: "2024-10-30",
    readingTime: "5 min",
    featured: false,
  },
];
export const blogCategories = [
  "All",
  ...new Set(blogPosts.map((p) => p.category)),
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug);
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((p) => p.featured);
}
