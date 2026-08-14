import { ProjectCaseStudy } from "@/types/featured-projects-data";

export const PROJECTS: ProjectCaseStudy[] = [
  {
    id: "vorder-saas-platform",
    title: "Vorder SaaS Platform",
    tagline: "Multi-Tenant E-Commerce SaaS Platform",
    subtitle:
      "A scalable SaaS platform designed to provide merchants with storefront management, products, orders, analytics, and business operations through a unified dashboard.",
    role: "Lead Front-End Engineer",
    clientOrCompany: "BuildFy",
    businessDomain: "SaaS & E-Commerce",
    duration: "2025 – Present",
    year: "2025 – Present",
    featured: true,
    category: "SaaS",
    image: "/vorder.png",

    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Axios",
      "REST APIs",
      "Git",
      "Vercel",
    ],

    metrics: [
      {
        label: "Architecture",
        value: "Multi-Tenant",
        description:
          "Frontend architecture designed around reusable merchant and storefront experiences.",
      },
      {
        label: "Role",
        value: "Lead",
        description:
          "Owned frontend architecture, UI implementation, planning, and technical decisions.",
      },
      {
        label: "Team",
        value: "1 FE + 1 BE",
        description:
          "Worked closely with backend engineering while coordinating product priorities.",
      },
    ],

    overview:
      "Vorder is a multi-tenant SaaS e-commerce platform designed to give merchants the tools required to manage their online stores, products, orders, customers, analytics, and storefront experiences from a unified platform.",

    problemStatement:
      "The platform required a scalable frontend architecture capable of supporting multiple merchant experiences while keeping the codebase maintainable, reusable, and consistent as product features expanded.",

    businessContext:
      "The goal was to build a flexible SaaS foundation where merchants could operate their stores through a centralized dashboard while maintaining scalable storefront experiences.",

    responsibilities: [
      "Owned frontend architecture and UI/UX implementation.",
      "Designed reusable components and shared frontend patterns.",
      "Built merchant dashboard interfaces and storefront management experiences.",
      "Integrated REST APIs using Axios and TanStack Query.",
      "Implemented authentication and authorization workflows.",
      "Planned features, estimated implementation effort, and coordinated technical priorities.",
      "Collaborated closely with backend engineering.",
    ],

    architectureDecisions: [
      {
        title: "Reusable Component Architecture",
        rationale:
          "Separated reusable UI primitives and business components to reduce duplication and keep the platform maintainable.",
        impact:
          "Made new dashboard features easier to implement while maintaining consistent UI behavior.",
      },
      {
        title: "Server-Driven Data Fetching",
        rationale:
          "Used structured API integration and TanStack Query to manage asynchronous server state.",
        impact:
          "Improved data consistency, caching, loading states, and mutation handling across the dashboard.",
      },
      {
        title: "Feature-Oriented Frontend Structure",
        rationale:
          "Organized functionality around business capabilities instead of allowing application logic to become centralized and difficult to maintain.",
        impact:
          "Created a clearer foundation for future feature expansion.",
      },
    ],

    componentTree: [
      {
        name: "<MerchantDashboard />",
        description:
          "Main merchant workspace responsible for business operations.",
        children: [
          "<Sidebar />",
          "<Topbar />",
          "<AnalyticsOverview />",
          "<Orders />",
          "<Products />",
        ],
      },
      {
        name: "<Storefront />",
        description:
          "Customer-facing storefront experience connected to merchant data.",
        children: [
          "<ProductListing />",
          "<ProductDetails />",
          "<Cart />",
        ],
      },
    ],

    performance: {
      lcp: "Project-specific",
      inp: "Project-specific",
      cls: "Project-specific",
      bundleSize: "Not publicly disclosed",
      keyOptimizations: [
        "Reusable components",
        "Server-state caching",
        "Code organization around features",
        "Responsive UI implementation",
      ],
    },

    accessibility: {
      wcagLevel: "Accessibility-focused",
      screenReaderScore: "Not formally published",
      keyboardNavTested: true,
      features: [
        "Semantic HTML",
        "Responsive layouts",
        "Keyboard-friendly interactive elements",
        "Consistent focus states",
      ],
    },

    seoAndMetadata: {
      structuredData: "Project-specific",
      openGraphStrategy: "Production metadata and sharing support where applicable.",
      pageSpeedScore: 0,
    },

    technicalChallenges: [
      {
        challenge:
          "Maintaining frontend consistency while implementing multiple business modules inside a growing SaaS platform.",
        solution:
          "Established reusable UI patterns, shared components, and feature-oriented organization to reduce duplication and improve maintainability.",
      },
      {
        challenge:
          "Managing complex asynchronous dashboard data.",
        solution:
          "Used TanStack Query with structured API services and mutation handling.",
      },
    ],

    techStackDetails: [
      {
        category: "Frontend",
        tools: ["Next.js", "TypeScript", "Tailwind CSS"],
        justification:
          "Provided a scalable foundation for application routing, typed development, and responsive UI engineering.",
      },
      {
        category: "Data",
        tools: ["TanStack Query", "Axios", "REST APIs"],
        justification:
          "Used for server-state management and backend integration.",
      },
    ],

    results: [
      "Established a scalable frontend foundation for a multi-tenant SaaS product.",
      "Delivered reusable dashboard and storefront UI patterns.",
      "Owned frontend technical planning and implementation.",
    ],

    lessonsLearned: [
      "Large SaaS products benefit significantly from clear boundaries between UI, business features, and data-access logic.",
      "Reusable components should be designed around real product patterns rather than abstraction for its own sake.",
    ],

    gallery: ["/vorder.png"],
    githubUrl: "https://github.com/codebyabdo/vorder-saas-frontend-showcase",
    liveUrl: "https://vorder-sigma.vercel.app"
  },

  {
    id: "accounting-management-system",
    title: "Accounting Management System",
    tagline: "Enterprise Accounting & Inventory Management Platform",
    subtitle:
      "An internal enterprise platform for managing accounting, inventory, invoices, reporting, and business operations.",
    role: "Team Lead, Front-End Engineer",
    clientOrCompany: "X Code",
    businessDomain: "Enterprise Business Software",
    duration: "2025",
    year: "2025",
    featured: true,
    category: "Enterprise",
    image: "/accounting.png",

    techStack: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Axios",
      "Formik",
      "Yup",
      "Express.js",
    ],

    metrics: [
      {
        label: "Frontend Team",
        value: "2 Developers",
        description: "Led the frontend implementation team.",
      },
      {
        label: "Architecture",
        value: "Enterprise",
        description: "Structured frontend architecture for business modules.",
      },
      {
        label: "Status",
        value: "Production",
        description: "Used internally for business operations.",
      },
    ],

    overview:
      "An enterprise accounting and inventory management platform built to support internal business operations across sales, purchases, inventory, invoices, customers, suppliers, and reporting.",

    problemStatement:
      "The business required a centralized platform capable of replacing fragmented operational workflows with structured dashboards and business modules.",

    businessContext:
      "The system was designed for internal business operations where reliable data presentation, form handling, API integration, and maintainable frontend architecture were critical.",

    responsibilities: [
      "Led a two-developer frontend team.",
      "Owned frontend architecture and feature planning.",
      "Implemented responsive dashboards and business modules.",
      "Conducted code reviews and reviewed merge requests.",
      "Integrated REST APIs.",
      "Built inventory and invoice interfaces.",
      "Implemented reporting and analytics screens.",
      "Coordinated frontend implementation with backend engineering.",
    ],

    architectureDecisions: [
      {
        title: "Reusable Business Components",
        rationale:
          "Business modules shared many UI patterns across tables, forms, filters, and dashboards.",
        impact:
          "Reduced duplicated implementation and improved consistency across the system.",
      },
      {
        title: "Server State Management",
        rationale:
          "Business dashboards depend heavily on asynchronous API data.",
        impact:
          "TanStack Query provided structured caching, synchronization, and mutation handling.",
      },
    ],

    componentTree: [
      {
        name: "<AccountingDashboard />",
        description: "Main enterprise workspace.",
        children: [
          "<Overview />",
          "<Invoices />",
          "<Inventory />",
          "<Reports />",
        ],
      },
    ],

    performance: {
      lcp: "Project-specific",
      inp: "Project-specific",
      cls: "Project-specific",
      bundleSize: "Not publicly disclosed",
      keyOptimizations: [
        "Reusable UI components",
        "Server-state caching",
        "Responsive rendering",
        "Structured frontend architecture",
      ],
    },

    accessibility: {
      wcagLevel: "Accessibility-focused",
      screenReaderScore: "Not formally published",
      keyboardNavTested: true,
      features: [
        "Semantic forms",
        "Keyboard-accessible controls",
        "Responsive layouts",
        "Clear validation states",
      ],
    },

    seoAndMetadata: {
      structuredData: "Not applicable — internal enterprise system",
      openGraphStrategy: "Not applicable",
      pageSpeedScore: 0,
    },

    technicalChallenges: [
      {
        challenge:
          "Building multiple interconnected business modules while maintaining consistent frontend patterns.",
        solution:
          "Established reusable components and shared implementation patterns across dashboards, forms, tables, and reports.",
      },
      {
        challenge:
          "Coordinating frontend implementation across multiple developers.",
        solution:
          "Used code reviews, merge request reviews, technical planning, and clear task boundaries.",
      },
    ],

    techStackDetails: [
      {
        category: "Frontend",
        tools: ["React.js", "TypeScript", "Tailwind CSS"],
        justification:
          "Used for maintainable component-based UI development.",
      },
      {
        category: "Data",
        tools: ["TanStack Query", "Axios"],
        justification:
          "Used for REST API integration and server-state management.",
      },
      {
        category: "Forms",
        tools: ["Formik", "Yup"],
        justification:
          "Used for structured business forms and validation.",
      },
    ],

    results: [
      "Delivered an internal enterprise accounting and inventory platform.",
      "Led frontend implementation across a two-developer team.",
      "Established reusable patterns for dashboards and business modules.",
    ],

    lessonsLearned: [
      "Enterprise interfaces require strong consistency and predictable interaction patterns.",
      "Code review becomes increasingly important as frontend teams and feature scope grow.",
    ],

    gallery: ["/accounting.png"],
    githubUrl: "https://github.com/codebyabdo/accounting-management-system-showcase",
    liveUrl: "https://accounting-system-one.vercel.app"
  },

  {
    id: "asmaa-adel-portfolio",
    title: "Asmaa Adel Premium Portfolio",
    tagline: "Premium Multilingual Portfolio Platform",
    subtitle:
      "A production-ready bilingual portfolio platform for an English–Arabic Translator and Localization Specialist.",
    role: "Front-End Engineer",
    clientOrCompany: "Asmaa Adel",
    businessDomain: "Personal Branding & Professional Services",
    duration: "2026",
    year: "2026",
    featured: true,
    category: "Web Platform",
    image: "/asmaa.png",

    techStack: [
      "Next.js 15",
      "React 19",
      "TypeScript",
      "Tailwind CSS v4",
      "Framer Motion",
      "next-intl",
      "Vercel",
    ],

    metrics: [
      {
        label: "Languages",
        value: "2",
        description: "English and Arabic experience with RTL/LTR support.",
      },
      {
        label: "SEO",
        value: "Production",
        description: "Metadata, Open Graph, JSON-LD, sitemap, and robots.",
      },
      {
        label: "Architecture",
        value: "Modular",
        description: "Reusable components and structured frontend modules.",
      },
    ],

    overview:
      "A premium multilingual portfolio platform designed for an English–Arabic Translator and Localization Specialist, combining visual storytelling with production-ready frontend architecture.",

    problemStatement:
      "The project required more than a traditional portfolio. It needed to communicate professional services while supporting multilingual content, RTL/LTR layouts, accessibility, SEO, and strong performance.",

    businessContext:
      "The platform serves as a professional personal-branding website where services, experience, case studies, and translation work can be presented through a premium digital experience.",

    responsibilities: [
      "Architected the application using Next.js 15 App Router.",
      "Built reusable component-based architecture.",
      "Implemented Arabic and English localization using next-intl.",
      "Implemented RTL/LTR support.",
      "Designed responsive layouts and reusable UI patterns.",
      "Implemented SEO metadata and structured data.",
      "Configured dynamic sitemap and robots.",
      "Optimized animations and rendering performance.",
      "Integrated Vercel Analytics and Speed Insights.",
    ],

    architectureDecisions: [
      {
        title: "App Router Architecture",
        rationale:
          "Used the modern Next.js App Router to organize routes, layouts, metadata, and server/client boundaries.",
        impact:
          "Created a maintainable foundation for localized pages and future expansion.",
      },
      {
        title: "Internationalized Routing",
        rationale:
          "Localized routes and content were separated from presentation components.",
        impact:
          "Made Arabic and English experiences easier to maintain and extend.",
      },
      {
        title: "Performance-First Motion",
        rationale:
          "Animations were reviewed against their impact on rendering and Core Web Vitals.",
        impact:
          "Reduced unnecessary motion and improved the overall performance profile.",
      },
    ],

    componentTree: [
      {
        name: "<PortfolioLayout />",
        description:
          "Shared layout responsible for navigation, locale handling, and global presentation.",
        children: [
          "<Header />",
          "<PageContent />",
          "<Footer />",
        ],
      },
      {
        name: "<ProjectCaseStudy />",
        description:
          "Reusable project presentation structure for professional work.",
        children: [
          "<ProjectHero />",
          "<ProjectOverview />",
          "<ProjectResults />",
        ],
      },
    ],

    performance: {
      lcp: "≈1.89s",
      inp: "Optimized",
      cls: "Optimized",
      bundleSize: "Optimized",
      keyOptimizations: [
        "Reduced expensive animations.",
        "Improved rendering strategy.",
        "Reduced unnecessary client-side JavaScript.",
        "Used responsive image optimization.",
        "Applied lazy loading where appropriate.",
      ],
    },

    accessibility: {
      wcagLevel: "Accessibility-focused",
      screenReaderScore: "Not formally published",
      keyboardNavTested: true,
      features: [
        "Semantic HTML",
        "ARIA labels",
        "Keyboard navigation",
        "Focus states",
        "Heading hierarchy",
        "RTL/LTR support",
      ],
    },

    seoAndMetadata: {
      structuredData: "Schema.org Person JSON-LD",
      openGraphStrategy: "Open Graph and Twitter metadata",
      pageSpeedScore: 100,
    },

    technicalChallenges: [
      {
        challenge:
          "Supporting both Arabic RTL and English LTR experiences without duplicating UI components.",
        solution:
          "Implemented localized routing and direction-aware layouts using next-intl and shared components.",
      },
      {
        challenge:
          "Balancing premium visual motion with frontend performance.",
        solution:
          "Profiled animations and removed or simplified expensive effects that affected rendering performance.",
      },
    ],

    techStackDetails: [
      {
        category: "Framework",
        tools: ["Next.js 15", "React 19", "TypeScript"],
        justification:
          "Used for modern routing, rendering, and typed frontend architecture.",
      },
      {
        category: "Internationalization",
        tools: ["next-intl"],
        justification:
          "Provides structured localization and RTL/LTR support.",
      },
      {
        category: "Styling",
        tools: ["Tailwind CSS v4", "Framer Motion"],
        justification:
          "Used for responsive styling and controlled interface motion.",
      },
    ],

    results: [
      "Delivered a production-ready multilingual portfolio platform.",
      "Implemented English and Arabic experiences with RTL/LTR support.",
      "Improved performance by removing expensive animation patterns.",
      "Implemented production SEO and structured data.",
    ],

    lessonsLearned: [
      "Premium visual design should never come at the expense of usability and performance.",
      "Internationalization should be considered at the architecture level rather than added after the UI is complete.",
    ],

    gallery: ["/asmaa.png"],
    githubUrl: "https://github.com/codebyabdo/asmaa-portfolios",
    liveUrl: "https://asmaaadel.vercel.app"
  },

  {
    id: "blood-bank-platform",
    title: "Blood Bank Management Platform",
    tagline: "Healthcare Management Platform",
    subtitle:
      "A healthcare-focused platform designed to support blood donation and management workflows.",
    role: "Technical Coordinator",
    clientOrCompany: "Healthcare Startup",
    businessDomain: "Healthcare",
    duration: "2025 – 2026",
    year: "2025 – 2026",
    featured: false,
    category: "Healthcare",
    image: "/blood.png",

    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
    ],

    metrics: [
      {
        label: "Role",
        value: "Technical Coordinator",
        description:
          "Supported planning and coordination across engineering teams.",
      },
      {
        label: "Frontend",
        value: "Next.js",
        description:
          "Frontend platform built around modern React architecture.",
      },
      {
        label: "Status",
        value: "Incomplete",
        description:
          "Project development was not completed.",
      },
    ],

    overview:
      "A healthcare platform focused on supporting blood donation management and related workflows.",

    problemStatement:
      "The project required coordination between frontend, mobile, and backend teams around a shared product vision and technical direction.",

    businessContext:
      "The platform was intended to improve the organization of blood donation workflows through a centralized digital experience.",

    responsibilities: [
      "Participated in technical planning.",
      "Supported architecture discussions.",
      "Coordinated frontend, mobile, and backend teams.",
      "Participated in sprint planning.",
      "Contributed to technical documentation.",
    ],

    architectureDecisions: [
      {
        title: "Cross-Team Technical Coordination",
        rationale:
          "Multiple engineering disciplines required a shared understanding of product requirements and technical boundaries.",
        impact:
          "Improved coordination between frontend, mobile, and backend development.",
      },
    ],

    componentTree: [],

    performance: {
      lcp: "Not measured",
      inp: "Not measured",
      cls: "Not measured",
      bundleSize: "Not measured",
      keyOptimizations: [],
    },

    accessibility: {
      wcagLevel: "Planned",
      screenReaderScore: "Not measured",
      keyboardNavTested: false,
      features: [],
    },

    seoAndMetadata: {
      structuredData: "Not applicable",
      openGraphStrategy: "Not applicable",
      pageSpeedScore: 0,
    },

    technicalChallenges: [
      {
        challenge:
          "Coordinating technical decisions across multiple engineering disciplines.",
        solution:
          "Supported technical planning, documentation, and communication between teams.",
      },
    ],

    techStackDetails: [
      {
        category: "Frontend",
        tools: ["Next.js", "TypeScript", "Tailwind CSS"],
        justification:
          "Used as the frontend foundation for the platform.",
      },
    ],

    results: [
      "Supported technical planning and cross-team coordination.",
      "Contributed to architecture discussions and project documentation.",
    ],

    lessonsLearned: [
      "Technical coordination requires clear communication and documented architectural decisions.",
    ],

    gallery: ["/blood.png"],
  },

  {
    id: "adas-speed-bump-detection",
    title: "ADAS Smart Speed Bump Detection",
    tagline: "AI-Powered Road Safety & Detection System",
    subtitle:
      "A graduation project combining computer vision, embedded systems, GPS, IMU data, and a backend API to detect and localize road speed bumps.",
    role: "Software Architecture Engineer & Documentation Engineer",
    clientOrCompany: "Graduation Project",
    businessDomain: "AI, Computer Vision & Embedded Systems",
    duration: "2025 – 2026",
    year: "2026",
    featured: true,
    category: "AI & Embedded",
    image: "/adas.png",

    techStack: [
      "Python",
      "YOLOv8",
      "Raspberry Pi 5",
      "FastAPI",
      "OpenCV",
      "GPS",
      "IMU",
    ],

    metrics: [
      {
        label: "Detection Model",
        value: "YOLOv8",
        description:
          "Computer vision model used for speed bump detection.",
      },
      {
        label: "Platform",
        value: "Raspberry Pi 5",
        description:
          "Embedded computing platform used by the system.",
      },
      {
        label: "API",
        value: "FastAPI",
        description:
          "Backend API used for system communication.",
      },
    ],

    overview:
      "An Advanced Driver Assistance System designed to detect road speed bumps using computer vision and localize detected bumps using GPS and sensor data.",

    problemStatement:
      "Speed bumps can be difficult to detect in advance, particularly under varying road and lighting conditions. The project aimed to provide an automated detection and localization mechanism.",

    businessContext:
      "The graduation project explored how computer vision and embedded hardware could be combined to improve driver awareness and create a reusable database of road speed bumps.",

    responsibilities: [
      "Designed the software architecture of the detection system.",
      "Documented system architecture and technical decisions.",
      "Worked with the multidisciplinary engineering team.",
      "Contributed to integration planning between computer vision, embedded hardware, GPS, IMU, and backend services.",
    ],

    architectureDecisions: [
      {
        title: "Edge-Based Detection",
        rationale:
          "The detection pipeline needed to operate close to the vehicle and hardware sensors.",
        impact:
          "Enabled the system to process camera input directly on the Raspberry Pi environment.",
      },
      {
        title: "Sensor Fusion Architecture",
        rationale:
          "Camera detection alone does not provide geographic localization.",
        impact:
          "Combined computer vision with GPS and IMU data for a more complete road-event representation.",
      },
    ],

    componentTree: [
      {
        name: "<ADASSystem />",
        description:
          "High-level system architecture connecting detection, sensors, localization, and API communication.",
        children: [
          "Camera",
          "YOLOv8 Detection",
          "GPS",
          "MPU6050 IMU",
          "FastAPI",
        ],
      },
    ],

    performance: {
      lcp: "Not applicable",
      inp: "Not applicable",
      cls: "Not applicable",
      bundleSize: "Not applicable",
      keyOptimizations: [
        "Edge processing",
        "Lightweight detection pipeline",
        "Hardware-aware architecture",
      ],
    },

    accessibility: {
      wcagLevel: "Not applicable",
      screenReaderScore: "Not applicable",
      keyboardNavTested: false,
      features: [],
    },

    seoAndMetadata: {
      structuredData: "Not applicable",
      openGraphStrategy: "Not applicable",
      pageSpeedScore: 0,
    },

    technicalChallenges: [
      {
        challenge:
          "Designing a software architecture that connects computer vision with embedded sensors and backend services.",
        solution:
          "Defined clear system boundaries between detection, sensor data, localization, and API communication.",
      },
    ],

    techStackDetails: [
      {
        category: "Computer Vision",
        tools: ["YOLOv8", "OpenCV", "Python"],
        justification:
          "Used for real-time road object detection and image processing.",
      },
      {
        category: "Embedded Systems",
        tools: ["Raspberry Pi 5", "MPU6050", "Neo-6M GPS"],
        justification:
          "Provided the hardware and sensor layer for the detection system.",
      },
      {
        category: "Backend",
        tools: ["FastAPI"],
        justification:
          "Provided API communication for the system.",
      },
    ],

    results: [
      "Designed the software architecture for the complete detection pipeline.",
      "Documented the system and its technical components.",
      "Integrated the conceptual flow between AI detection, sensors, localization, and backend services.",
    ],

    lessonsLearned: [
      "System architecture becomes critical when multiple hardware and software components must communicate reliably.",
      "Clear technical documentation reduces integration friction across multidisciplinary teams.",
    ],

    gallery: ["/adas.png"],
    githubUrl: "https://github.com/codebyabdo/adas-smart-speed-bump-detection-system",
  },

  {
    id: "xcode-company-website",
    title: "X Code Company Website",
    tagline: "Responsive Corporate Web Platform",
    subtitle:
      "A responsive company website focused on modern UI engineering, SEO, performance, and reusable frontend components.",
    role: "Front-End Developer",
    clientOrCompany: "X Code",
    businessDomain: "Corporate Website",
    duration: "2025",
    year: "2025",
    featured: false,
    category: "Web Development",
    image: "/xcode.png",

    techStack: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "React Router",
      "Vite",
    ],

    metrics: [
      {
        label: "Role",
        value: "Sole Frontend",
        description:
          "Developed the website as the sole frontend developer.",
      },
      {
        label: "Focus",
        value: "SEO",
        description:
          "Improved the website structure for search visibility.",
      },
      {
        label: "Deployment",
        value: "Production",
        description:
          "Delivered and deployed the production build.",
      },
    ],

    overview:
      "A corporate website developed to represent X Code online through a responsive, modern, and performance-focused frontend.",

    problemStatement:
      "The company required a professional online presence that could communicate its services clearly across desktop and mobile devices.",

    businessContext:
      "The website acts as a corporate-facing digital presence with a focus on performance, responsiveness, and maintainability.",

    responsibilities: [
      "Developed the website from scratch.",
      "Built reusable UI components.",
      "Implemented responsive layouts.",
      "Improved SEO structure.",
      "Optimized loading performance.",
      "Deployed the production build.",
    ],

    architectureDecisions: [
      {
        title: "Component-Based UI",
        rationale:
          "Reusable sections and UI elements reduce duplicated markup and simplify maintenance.",
        impact:
          "Created a more consistent and maintainable website structure.",
      },
    ],

    componentTree: [],

    performance: {
      lcp: "Optimized",
      inp: "Optimized",
      cls: "Optimized",
      bundleSize: "Optimized",
      keyOptimizations: [
        "Responsive implementation",
        "Reusable components",
        "Performance-focused rendering",
      ],
    },

    accessibility: {
      wcagLevel: "Accessibility-focused",
      screenReaderScore: "Not formally published",
      keyboardNavTested: true,
      features: [
        "Semantic HTML",
        "Responsive navigation",
        "Keyboard-accessible interactions",
      ],
    },

    seoAndMetadata: {
      structuredData: "Project-specific",
      openGraphStrategy: "Production metadata",
      pageSpeedScore: 0,
    },

    technicalChallenges: [
      {
        challenge:
          "Building the website from scratch while keeping the implementation lightweight and responsive.",
        solution:
          "Used reusable React components and utility-first styling with Tailwind CSS.",
      },
    ],

    techStackDetails: [
      {
        category: "Frontend",
        tools: ["React.js", "JavaScript", "Tailwind CSS"],
        justification:
          "Used for responsive and maintainable UI development.",
      },
      {
        category: "Tooling",
        tools: ["Vite", "React Router"],
        justification:
          "Used for development workflow and client-side navigation.",
      },
    ],

    results: [
      "Delivered the company's official responsive website.",
      "Improved SEO structure and frontend performance.",
      "Built reusable UI components for maintainability.",
    ],

    lessonsLearned: [
      "A corporate website still benefits from production-level frontend practices around performance, SEO, and responsive design.",
    ],

    gallery: ["/xcode.png"],
    githubUrl: "https://github.com/codebyabdo/xcode-company-website",
    liveUrl: "https://x-code-prtfolio.vercel.app"
  },
];



export const categories = ['All', ...new Set(PROJECTS.map((p) => p.category))]

export function getProjectBySlug(id: string): ProjectCaseStudy | undefined {
  return PROJECTS.find((p) => p.id === id)
}

export function getFeaturedProjects(): ProjectCaseStudy[] {
  return PROJECTS.filter((p) => p.featured)
}