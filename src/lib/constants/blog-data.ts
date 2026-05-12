export interface BlogPost {
  slug: string
  title: string
  excerpt: string
  content: string
  category: string
  tags: string[]
  publishedAt: string
  readingTime: string
  featured: boolean
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'building-scalable-react-architecture',
    title: 'Building Scalable React Architecture',
    excerpt: 'A deep dive into feature-based folder structures, separation of concerns, and patterns that help React applications scale with your team.',
    content: `
# Building Scalable React Architecture

When building large-scale React applications, architecture decisions made early on can have lasting impacts on developer productivity and code maintainability.

## Feature-Based Structure

Instead of organizing code by type (components, hooks, utils), consider organizing by feature:

\`\`\`
src/
  features/
    auth/
      components/
      hooks/
      utils/
      index.ts
    dashboard/
      components/
      hooks/
      utils/
      index.ts
\`\`\`

This approach creates natural boundaries, improves discoverability, and makes it easier to understand what each part of your application does.

## Separation of Concerns

Keep your components focused on rendering. Business logic should live in custom hooks, and data fetching should be handled by a dedicated layer.

## Conclusion

Good architecture isn't about following rules blindly—it's about making decisions that help your team move faster and maintain code quality over time.
    `,
    category: 'Architecture',
    tags: ['React', 'Architecture', 'Best Practices'],
    publishedAt: '2024-01-15',
    readingTime: '8 min',
    featured: true,
  },
  {
    slug: 'mastering-typescript-generics',
    title: 'Mastering TypeScript Generics',
    excerpt: 'Learn how to write type-safe, reusable code with TypeScript generics. From basic patterns to advanced use cases.',
    content: `
# Mastering TypeScript Generics

Generics are one of TypeScript's most powerful features, enabling you to write flexible, reusable code without sacrificing type safety.

## Why Generics?

Without generics, you'd have to choose between:
- Using \`any\` and losing type safety
- Writing duplicate code for each type

Generics give you the best of both worlds.

## Basic Syntax

\`\`\`typescript
function identity<T>(arg: T): T {
  return arg;
}
\`\`\`

## Practical Examples

Generics shine in real-world scenarios like API responses, form handling, and component props.

## Conclusion

Start with simple generics and gradually introduce more complex patterns as your codebase grows.
    `,
    category: 'TypeScript',
    tags: ['TypeScript', 'Generics', 'Type Safety'],
    publishedAt: '2024-01-08',
    readingTime: '6 min',
    featured: true,
  },
  {
    slug: 'performance-optimization-nextjs',
    title: 'Performance Optimization in Next.js',
    excerpt: 'Practical techniques for optimizing Next.js applications, from code splitting to image optimization and caching strategies.',
    content: `
# Performance Optimization in Next.js

Next.js provides excellent defaults, but there's always room for optimization.

## Key Strategies

1. **Code Splitting**: Use dynamic imports for heavy components
2. **Image Optimization**: Leverage next/image for automatic optimization
3. **Caching**: Implement intelligent caching strategies
4. **Bundle Analysis**: Regularly audit your bundle size

## Measuring Performance

Use Lighthouse, Web Vitals, and Real User Monitoring to track improvements.

## Conclusion

Performance optimization is an ongoing process. Start with the biggest wins and iterate.
    `,
    category: 'Performance',
    tags: ['Next.js', 'Performance', 'Optimization'],
    publishedAt: '2023-12-20',
    readingTime: '7 min',
    featured: false,
  },
  {
    slug: 'state-management-modern-react',
    title: 'State Management in Modern React',
    excerpt: 'Comparing different state management approaches in React: Context, Zustand, React Query, and when to use each.',
    content: `
# State Management in Modern React

The state management landscape has evolved significantly. Here's how to choose the right approach.

## Types of State

- **Server State**: Data from APIs (use React Query)
- **Client State**: UI state (use Zustand or Context)
- **Form State**: Form values (use React Hook Form)
- **URL State**: Route parameters (use router)

## When to Use What

Choose based on your specific needs. Don't over-engineer simple cases, but don't under-engineer complex ones.

## Conclusion

The best state management is the simplest one that meets your needs.
    `,
    category: 'State Management',
    tags: ['React', 'State Management', 'Zustand'],
    publishedAt: '2023-12-10',
    readingTime: '5 min',
    featured: false,
  },
  {
    slug: 'leading-frontend-teams',
    title: 'Leading Frontend Teams: Lessons Learned',
    excerpt: 'Reflections on leading engineering teams, establishing best practices, and fostering a culture of continuous improvement.',
    content: `
# Leading Frontend Teams: Lessons Learned

After leading teams for several years, here are the lessons that have stuck with me.

## Communication is Everything

Most problems stem from miscommunication. Over-communicate, document decisions, and create space for questions.

## Code Reviews as Teaching

Use code reviews as opportunities for knowledge sharing, not just bug finding.

## Empower, Don't Micromanage

Give your team ownership. Guide the outcome, not the process.

## Conclusion

Great teams are built on trust, communication, and a shared commitment to quality.
    `,
    category: 'Leadership',
    tags: ['Leadership', 'Team Management', 'Engineering'],
    publishedAt: '2023-11-28',
    readingTime: '6 min',
    featured: true,
  },
  {
    slug: 'authentication-patterns-nextjs',
    title: 'Authentication Patterns in Next.js',
    excerpt: 'Implementing secure authentication in Next.js applications with Better Auth, middleware, and route protection.',
    content: `
# Authentication Patterns in Next.js

Authentication is critical. Here's how to implement it properly in Next.js.

## Key Concepts

- **Session Management**: JWT vs cookies
- **Route Protection**: Middleware and server components
- **OAuth Integration**: Social login providers

## Best Practices

1. Always use HTTPS
2. Implement CSRF protection
3. Use httpOnly cookies for tokens
4. Validate on the server

## Conclusion

Security is not optional. Take the time to implement authentication correctly from the start.
    `,
    category: 'Authentication',
    tags: ['Next.js', 'Authentication', 'Security'],
    publishedAt: '2023-11-15',
    readingTime: '8 min',
    featured: false,
  },
]

export const blogCategories = ['All', ...new Set(blogPosts.map((p) => p.category))]

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((p) => p.slug === slug)
}

export function getFeaturedPosts(): BlogPost[] {
  return blogPosts.filter((p) => p.featured)
}
