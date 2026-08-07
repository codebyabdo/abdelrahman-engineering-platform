export interface Project {
  slug: string
  title: string
  image?: string
  subtitle: string
  description: string
  longDescription: string
  category: string
  tags: string[]
  year: string
  status: 'Completed' | 'In Progress'
  roleType: 'Team Lead' | 'Frontend Engineer'
  teamRole: string
  liveDemo?: string
  teamSize: number
  duration: string
  featured: boolean

  highlights: string[]

  contributions: string[]

  problem: string
  solution: string

  architecture: string[]

  workflow: {
    title: string
    description: string
  }[]

  techStack: {
    category: string
    items: string[]
  }[]

  results: {
    metric: string
    value: string
    description: string
  }[]
}

export const projects: Project[] = [
  {
    slug: 'vorder-platform',

    title: 'Vorder Platform',

    image: "/vorder.png",

    subtitle:
      'Multi-tenant SaaS platform for creating and managing online stores.',

    description:
      'Scalable e-commerce SaaS platform with isolated store management, advanced dashboards, and role-based architecture.',

    longDescription:
      'Worked as a Frontend Team Lead on a modern SaaS platform that allows merchants to create and manage their own online stores through a scalable dashboard experience. The platform follows a multi-tenant architecture where each merchant manages products, orders, customers, and analytics independently.',

    category: 'SaaS',

    tags: [
      'Next.js 15',
      'TypeScript',
      'Tailwind CSS',
      'TanStack Query',
      'NestJS',
      'PostgreSQL',
      'JWT',
      'Role-based System',
    ],

    year: '2026',

    status: 'In Progress',

    roleType: 'Team Lead',

    teamRole: 'Frontend Team Lead',

    liveDemo: 'https://vorder-sigma.vercel.app',

    teamSize: 6,

    duration: 'Ongoing',

    featured: true,

    highlights: [
      'Built scalable dashboard architecture',
      'Implemented role-based frontend workflows',
      'Designed reusable UI patterns',
      'Optimized API data handling',
    ],

    contributions: [
      'Led frontend architecture planning and structure decisions',
      'Designed scalable feature-based folder architecture',
      'Built reusable dashboard components and shared patterns',
      'Integrated authentication and protected routing flows',
      'Collaborated with backend team on API contracts',
      'Managed frontend workflow and task distribution',
    ],

    problem:
      'Small and medium businesses needed a flexible solution to create and manage their own online stores without relying on expensive enterprise platforms or limited website builders.',

    solution:
      'Built a scalable SaaS platform with isolated tenant architecture, allowing each merchant to manage products, inventory, orders, and store settings independently through a modern dashboard system.',

    architecture: [
      'Feature-based frontend architecture with scalable module separation',
      'Role-based dashboard system with protected routes',
      'Reusable UI and form system across dashboard modules',
      'Centralized API handling using TanStack Query',
      'Optimized rendering and lazy loading strategies',
      'Shared component system for maintainability and consistency',
    ],

    workflow: [
      {
        title: 'Architecture Planning',
        description:
          'Defined scalable frontend structure and dashboard organization.',
      },
      {
        title: 'System Design',
        description:
          'Designed reusable UI patterns and modular dashboard flows.',
      },
      {
        title: 'Frontend Development',
        description:
          'Built dashboard pages, product workflows, and management tools.',
      },
      {
        title: 'API Integration',
        description:
          'Integrated backend services and optimized data fetching.',
      },
      {
        title: 'Optimization',
        description:
          'Improved performance, routing structure, and maintainability.',
      },
    ],

    techStack: [
      {
        category: 'Frontend',
        items: [
          'Next.js 15',
          'TypeScript',
          'Tailwind CSS',
          'Framer Motion',
        ],
      },
      {
        category: 'State Management',
        items: ['TanStack Query', 'React Hook Form', 'Zustand'],
      },
      {
        category: 'Backend',
        items: ['NestJS', 'PostgreSQL', 'Prisma ORM'],
      },
      {
        category: 'Authentication',
        items: ['JWT', 'Role Guards', 'Protected Routes'],
      },
    ],

    results: [
      {
        metric: 'Architecture',
        value: 'Scalable',
        description: 'Built with long-term maintainability in mind.',
      },
      {
        metric: 'Dashboard Modules',
        value: '10+',
        description: 'Reusable management modules across the platform.',
      },
      {
        metric: 'UI Consistency',
        value: 'High',
        description: 'Unified reusable component system.',
      },
      {
        metric: 'Performance',
        value: 'Optimized',
        description: 'Improved loading and rendering workflows.',
      },
    ],
  },

  {
    slug: 'blood-bank-system',

    title: 'Blood Bank Management System',

        image: "/blood.png",

    subtitle:
      'Role-based healthcare platform for managing blood requests and inventory.',

    description:
      'Full-stack blood bank management platform with separate User & Bank dashboards, request workflows, and inventory tracking.',

    longDescription:
      'Developed a role-based healthcare platform that connects patients and blood banks through a structured request and approval workflow. The system includes separate dashboards for users and blood banks, secure authentication flows, inventory tracking, and status-driven request management.',

    category: 'Healthcare',

    tags: [
      'Next.js 15',
      'NestJS',
      'TypeScript',
      'Tailwind CSS',
      'PostgreSQL',
      'Prisma ORM',
      'JWT',
      'Role-based Architecture',
    ],

    year: '2026',

    status: 'In Progress',

    roleType: 'Team Lead',

    teamRole: 'Frontend Team Lead',

    teamSize: 5,

    duration: '4 Months',

    featured: true,

    highlights: [
      'Built role-based dashboard system',
      'Implemented request lifecycle workflows',
      'Designed scalable frontend architecture',
      'Integrated secure authentication flows',
    ],

    contributions: [
      'Led frontend architecture and dashboard structure',
      'Implemented protected routes and authentication handling',
      'Designed request lifecycle UI and workflow management',
      'Built reusable form and dashboard components',
      'Collaborated with backend team on API structure and validation',
    ],

    problem:
      'Patients struggled to find blood availability quickly, while blood banks lacked a centralized digital workflow for handling requests and inventory management.',

    solution:
      'Developed a structured healthcare platform with separate dashboards for users and blood banks, enabling request management, status tracking, and blood inventory workflows.',

    architecture: [
      'Role-based frontend architecture with isolated dashboard systems',
      'Protected routing using JWT authentication',
      'Feature-based scalable folder structure',
      'Centralized data fetching and API abstraction',
      'Reusable form handling and validation workflows',
      'Status-driven request lifecycle system',
    ],

    workflow: [
      {
        title: 'System Planning',
        description:
          'Designed role-based workflows and dashboard responsibilities.',
      },
      {
        title: 'Authentication Flow',
        description:
          'Implemented secure login and protected dashboard access.',
      },
      {
        title: 'Dashboard Development',
        description:
          'Built user and blood bank management interfaces.',
      },
      {
        title: 'Request Workflow',
        description:
          'Implemented request lifecycle and approval handling.',
      },
      {
        title: 'Optimization',
        description:
          'Improved maintainability, responsiveness, and UX consistency.',
      },
    ],

    techStack: [
      {
        category: 'Frontend',
        items: [
          'Next.js 15',
          'TypeScript',
          'Tailwind CSS',
          'Framer Motion',
        ],
      },
      {
        category: 'Backend',
        items: ['NestJS', 'PostgreSQL', 'Prisma ORM'],
      },
      {
        category: 'Authentication',
        items: ['JWT', 'HttpOnly Cookies', 'Protected Routes'],
      },
      {
        category: 'State & Forms',
        items: ['TanStack Query', 'React Hook Form', 'Zod'],
      },
    ],

    results: [
      {
        metric: 'Dashboards',
        value: '2',
        description: 'Separate systems for users and blood banks.',
      },
      {
        metric: 'Architecture',
        value: 'Role-Based',
        description: 'Structured scalable frontend organization.',
      },
      {
        metric: 'Workflows',
        value: 'Status-Driven',
        description: 'Request lifecycle management implementation.',
      },
      {
        metric: 'Authentication',
        value: 'Secure',
        description: 'Protected routing and JWT-based access control.',
      },
    ],
  },

  {
    slug: 'accounting-system',

    title: 'Accounting & Inventory Management System',

        image: "/accounting.png",

    subtitle:
      'Modern dashboard system for clothing store operations and inventory management.',

    description:
      'Comprehensive accounting and inventory dashboard for managing products, sales, suppliers, customers, and reports.',

    longDescription:
      'Built a responsive accounting and inventory management system for clothing stores. The platform streamlines sales operations, product management, inventory tracking, supplier workflows, and reporting through a modern dashboard experience.',

    category: 'Business System',

    tags: [
      'React',
      'TypeScript',
      'Tailwind CSS',
      'Dashboard',
      'Inventory System',
      'Charts',
    ],

    year: '2025',

    status: 'Completed',

    roleType: 'Frontend Engineer',

    teamRole: 'Frontend Developer',

    liveDemo: 'https://accounting-system-one.vercel.app',

    teamSize: 3,

    duration: '3 Months',

    featured: true,

    highlights: [
      'Built modern inventory dashboard',
      'Created reusable data table system',
      'Implemented responsive admin workflows',
      'Designed clean reporting interfaces',
    ],

    contributions: [
      'Built dashboard pages and inventory workflows',
      'Implemented reusable UI components and tables',
      'Designed responsive layouts and reporting sections',
      'Integrated charts and analytics visualizations',
    ],

    problem:
      'Store owners needed a centralized system to manage inventory, sales operations, suppliers, and customer data efficiently.',

    solution:
      'Developed a dashboard-driven accounting and inventory management platform with modern UI workflows and reusable management modules.',

    architecture: [
      'Reusable dashboard layout system',
      'Modular page and component structure',
      'Reusable data tables and filtering system',
      'Responsive admin dashboard workflows',
      'Component-driven UI organization',
    ],

    workflow: [
      {
        title: 'Planning',
        description:
          'Defined dashboard structure and business requirements.',
      },
      {
        title: 'Dashboard UI',
        description:
          'Built reusable layouts and management interfaces.',
      },
      {
        title: 'Data Management',
        description:
          'Implemented tables, filtering, and reporting workflows.',
      },
      {
        title: 'Responsive Optimization',
        description:
          'Improved usability across devices and screen sizes.',
      },
    ],

    techStack: [
      {
        category: 'Frontend',
        items: ['React', 'TypeScript', 'Tailwind CSS'],
      },
      {
        category: 'UI',
        items: ['Charts', 'Data Tables', 'Responsive Layouts'],
      },
      {
        category: 'State',
        items: ['Context API', 'React Hooks'],
      },
    ],

    results: [
      {
        metric: 'Dashboard Modules',
        value: '8+',
        description: 'Management modules for store operations.',
      },
      {
        metric: 'UI System',
        value: 'Reusable',
        description: 'Shared reusable dashboard components.',
      },
      {
        metric: 'Responsiveness',
        value: 'Fully Responsive',
        description: 'Optimized across desktop and tablet devices.',
      },
      {
        metric: 'Workflow',
        value: 'Streamlined',
        description: 'Improved inventory and sales management UX.',
      },
    ],
  },
  {
  slug: 'xcode-portfolio',

  title: 'XCode Portfolio',


        image: "/xcode.png",

  subtitle:
    'Modern developer portfolio platform focused on scalable frontend architecture and product-driven presentation.',

  description:
    'Personal engineering platform built with Next.js featuring modern animations, scalable architecture, case studies, and admin dashboard workflows.',

  longDescription:
    'Designed and developed a modern engineering-focused portfolio platform to showcase real-world frontend systems, architecture decisions, and product-oriented development workflows. The platform combines premium UI presentation with scalable frontend architecture, protected admin features, analytics tracking, and reusable content management patterns.',

  category: 'Portfolio Platform',

  tags: [
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Framer Motion',
    'Better Auth',
    'Drizzle ORM',
    'PostgreSQL',
    'Portfolio System',
  ],

  year: '2026',

  status: 'In Progress',

  roleType: 'Team Lead',

  teamRole: 'Frontend Engineer & Product Designer',

      liveDemo: 'https://x-code-prtfolio.vercel.app',


  teamSize: 1,

  duration: 'Ongoing',

  featured: true,

  highlights: [
    'Built scalable portfolio architecture',
    'Implemented reusable section system',
    'Created modern animation workflows',
    'Integrated admin dashboard structure',
  ],

  contributions: [
    'Designed the complete frontend architecture and folder structure',
    'Built reusable UI and layout systems',
    'Implemented smooth animation and transition workflows',
    'Integrated protected admin dashboard and lead management structure',
    'Created scalable project and content management patterns',
    'Focused on performance optimization and responsive design',
  ],

  problem:
    'Traditional developer portfolios often focus only on visual presentation without demonstrating real engineering thinking, scalable architecture, or product-oriented workflows.',

  solution:
    'Built a modern engineering platform that combines strong frontend presentation with scalable architecture, reusable systems, protected admin workflows, and product-focused case study experiences.',

  architecture: [
    'Feature-based scalable frontend architecture',
    'Reusable section-driven page composition',
    'Protected admin dashboard structure',
    'Content-driven project and blog management system',
    'Centralized animation and UI patterns',
    'Optimized rendering and responsive layout system',
  ],

  workflow: [
    {
      title: 'Design System Planning',
      description:
        'Defined typography, spacing, color system, and reusable UI patterns.',
    },
    {
      title: 'Architecture Design',
      description:
        'Created scalable folder structure and modular frontend organization.',
    },
    {
      title: 'Frontend Development',
      description:
        'Built reusable sections, layouts, and interactive page components.',
    },
    {
      title: 'Animation Integration',
      description:
        'Implemented smooth transitions and modern motion workflows.',
    },
    {
      title: 'Optimization',
      description:
        'Improved responsiveness, performance, and maintainability.',
    },
  ],

  techStack: [
    {
      category: 'Frontend',
      items: [
        'React',
        'TypeScript',
        'Tailwind CSS',
        'Framer Motion',
      ],
    },
    {
      category: 'Architecture',
      items: [
        'Feature-Based Structure',
        'Reusable Components',
        'Content-Driven UI',
      ],
    },
    {
      category: 'Backend & Auth',
      items: ['Better Auth', 'Drizzle ORM', 'PostgreSQL'],
    },
    {
      category: 'Deployment',
      items: ['Vercel', 'SEO Optimization', 'Performance Optimization'],
    },
  ],

  results: [
    {
      metric: 'Architecture',
      value: 'Scalable',
      description: 'Built with modular frontend architecture principles.',
    },
    {
      metric: 'UI System',
      value: 'Reusable',
      description: 'Reusable sections and shared design patterns.',
    },
    {
      metric: 'Performance',
      value: 'Optimized',
      description: 'Focused on smooth rendering and fast navigation.',
    },
    {
      metric: 'Experience',
      value: 'Modern',
      description: 'Product-oriented developer portfolio experience.',
    },
  ],
}
]

export const categories = ['All', ...new Set(projects.map((p) => p.category))]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured)
}