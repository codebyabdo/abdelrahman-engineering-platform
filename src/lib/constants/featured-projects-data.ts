import type { ProjectCaseStudy } from "@/types/featured-projects-data";

/* =========================================================
   Featured Projects
========================================================= */

export const PROJECTS: ProjectCaseStudy[] = [
  /* =======================================================
     01. VORDER
  ======================================================= */

  {
    id: "vorder-saas-platform",
    title: "Vorder SaaS E-Commerce Platform",
    tagline: "Multi-Tenant SaaS E-Commerce Builder",
    subtitle:
      "A multi-tenant SaaS platform that enables merchants to create, customize, and manage online stores through a centralized business dashboard.",

    role: "Lead Front-End Engineer",
    clientOrCompany: "BuildFy",
    businessDomain: "SaaS & E-Commerce",

    duration: "2025 – Present",
    year: "2025 – Present",

    featured: true,
    category: "SaaS",
    image: "/vorder.png",

    techStack: [
      "React.js",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "TanStack Query",
      "Axios",
      "REST APIs",
      "Vercel",
    ],

    metrics: [
      {
        label: "Architecture",
        value: "Multi-Tenant",
        description:
          "Frontend architecture designed to support multiple merchant storefronts and business workflows.",
      },
      {
        label: "Role",
        value: "Lead Front-End",
        description:
          "Responsible for frontend architecture, implementation, technical planning, and frontend coordination.",
      },
      {
        label: "Product",
        value: "SaaS",
        description:
          "A business platform combining merchant dashboards, storefront management, and e-commerce workflows.",
      },
      {
        label: "Focus",
        value: "Scalability",
        description:
          "Reusable components, structured API integration, authentication, and maintainable feature boundaries.",
      },
    ],

    overview:
      "Vorder is a multi-tenant SaaS e-commerce platform built to help merchants create and manage online stores through a centralized system. The platform combines customizable storefronts with a business dashboard covering products, orders, inventory, customers, and store settings.",

    problemStatement:
      "The product required a frontend architecture capable of supporting multiple merchant experiences and continuously expanding business functionality without turning the codebase into a collection of duplicated interfaces and tightly coupled features.",

    businessContext:
      "The platform was designed around the needs of merchants who require a unified environment for operating their online stores. This meant the frontend needed to support both internal business workflows and customer-facing storefront experiences.",

    responsibilities: [
      "Led frontend architecture and implementation.",
      "Designed reusable components and shared UI patterns.",
      "Built merchant dashboard interfaces.",
      "Developed storefront management experiences.",
      "Implemented product, order, inventory, customer, and store-management interfaces.",
      "Implemented authentication, protected routes, and role-based access control.",
      "Integrated REST APIs using Axios and TanStack Query.",
      "Worked closely with backend engineering on API contracts and integration.",
      "Participated in technical planning and frontend task breakdown.",
      "Contributed to deployment and CI/CD workflows.",
    ],

    architectureDecisions: [
      {
        title: "Reusable Component Architecture",
        rationale:
          "The platform contains many repeated patterns across dashboards, forms, tables, filters, and storefront interfaces.",
        impact:
          "Created a more consistent UI foundation and reduced unnecessary duplication when extending the platform.",
      },
      {
        title: "Server-State Management",
        rationale:
          "Merchant dashboards depend heavily on asynchronous API data, mutations, loading states, and cache synchronization.",
        impact:
          "TanStack Query provided a structured approach to server-state management, caching, synchronization, and mutations.",
      },
      {
        title: "Feature-Oriented Organization",
        rationale:
          "A growing SaaS product needs clear boundaries between business capabilities rather than one centralized application layer.",
        impact:
          "Made the frontend easier to understand and prepared the codebase for continued feature expansion.",
      },
      {
        title: "Protected Business Workflows",
        rationale:
          "Merchant operations contain different permission levels and sensitive business functionality.",
        impact:
          "Authentication, protected routes, and role-aware interfaces helped separate access to business operations.",
      },
    ],

    componentTree: [
      {
        name: "<MerchantDashboard />",
        description:
          "Main merchant workspace for managing business operations.",
        children: [
          "<Sidebar />",
          "<Topbar />",
          "<AnalyticsOverview />",
          "<Products />",
          "<Orders />",
          "<Inventory />",
          "<Customers />",
          "<StoreSettings />",
        ],
      },
      {
        name: "<StorefrontManager />",
        description:
          "Management layer responsible for merchant storefront configuration.",
        children: [
          "<StoreTemplates />",
          "<BrandingSettings />",
          "<LayoutConfiguration />",
          "<StorePreview />",
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
        "Reusable UI components",
        "Structured server-state management",
        "Efficient API integration",
        "Responsive rendering",
        "Feature-oriented code organization",
      ],
    },

    accessibility: {
      wcagLevel: "Accessibility-focused",
      screenReaderScore: "Not formally published",
      keyboardNavTested: true,
      features: [
        "Semantic HTML",
        "Keyboard-friendly interactive elements",
        "Consistent focus states",
        "Responsive layouts",
      ],
    },

    seoAndMetadata: {
      structuredData: "Project-specific",
      openGraphStrategy:
        "Metadata and sharing support implemented where applicable.",
      pageSpeedScore: 0,
    },

    technicalChallenges: [
      {
        challenge:
          "Supporting multiple merchant workflows while maintaining a consistent frontend experience.",
        solution:
          "Established reusable components, shared UI patterns, and feature-oriented organization across business modules.",
      },
      {
        challenge:
          "Managing complex asynchronous dashboard data and mutations.",
        solution:
          "Used TanStack Query with structured API services and mutation handling.",
      },
      {
        challenge:
          "Supporting different merchant roles and protected business operations.",
        solution:
          "Implemented authentication, protected routes, and role-aware frontend workflows.",
      },
      {
        challenge:
          "Keeping storefront customization flexible without duplicating implementation.",
        solution:
          "Built reusable storefront patterns that allow configuration to drive presentation instead of creating separate implementations for each merchant.",
      },
    ],

    techStackDetails: [
      {
        category: "Frontend",
        tools: [
          "React.js",
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
        ],
        justification:
          "Provided a scalable foundation for component-based UI development, typed application logic, routing, and responsive interfaces.",
      },
      {
        category: "Data & APIs",
        tools: [
          "TanStack Query",
          "Axios",
          "REST APIs",
        ],
        justification:
          "Used for server-state management, API communication, caching, loading states, and mutations.",
      },
      {
        category: "Deployment",
        tools: ["Vercel"],
        justification:
          "Used for frontend deployment and production hosting.",
      },
    ],

    results: [
      "Established the frontend foundation for a multi-tenant SaaS product.",
      "Delivered reusable dashboard and storefront patterns.",
      "Implemented authentication and role-aware business workflows.",
      "Created a structured API integration layer.",
      "Led frontend implementation and technical planning.",
    ],

    lessonsLearned: [
      "Large SaaS products benefit from clear boundaries between UI, business features, and data-access logic.",
      "Reusable components should emerge from real product patterns rather than abstraction for its own sake.",
      "Frontend architecture needs to evolve alongside business requirements instead of being treated as a one-time setup.",
    ],

    gallery: ["/vorder.png"],

    githubUrl:
      "https://github.com/codebyabdo/vorder-saas-frontend-showcase",

    liveUrl:
      "https://vorder-sigma.vercel.app",
  },

  /* =======================================================
     02. ACCOUNTING SYSTEM
  ======================================================= */

  {
    id: "accounting-management-system",
    title: "Accounting Management System",
    tagline: "Accounting & Inventory Management Platform",
    subtitle:
      "A business management platform covering accounting, inventory, invoices, customers, suppliers, reporting, and operational workflows for a retail clothing business.",

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
      "React Router",
      "TanStack Query",
      "Axios",
      "Formik",
      "Yup",
      "Express.js",
    ],

    metrics: [
      {
        label: "Role",
        value: "Team Lead",
        description:
          "Led frontend implementation and coordinated frontend development.",
      },
      {
        label: "Frontend Team",
        value: "2 Developers",
        description:
          "Worked with a two-developer frontend team.",
      },
      {
        label: "Domain",
        value: "Business",
        description:
          "Accounting, inventory, invoices, customers, suppliers, and reporting.",
      },
      {
        label: "Architecture",
        value: "Modular",
        description:
          "Structured around reusable business components and feature modules.",
      },
    ],

    overview:
      "An accounting and inventory management platform developed for retail clothing operations. The system brings sales, purchases, inventory, invoices, customers, suppliers, and reporting into a centralized business application.",

    problemStatement:
      "The business needed a centralized system to replace fragmented operational workflows and provide reliable interfaces for financial, inventory, and day-to-day business management.",

    businessContext:
      "The platform was designed around real operational workflows where accurate forms, structured data presentation, inventory tracking, invoice management, and reporting were central to the product.",

    responsibilities: [
      "Led a two-developer frontend team.",
      "Owned frontend architecture and implementation planning.",
      "Built responsive business dashboards.",
      "Developed accounting and invoice interfaces.",
      "Built inventory management workflows.",
      "Implemented customer and supplier management.",
      "Developed sales and reporting interfaces.",
      "Implemented authentication and protected routes.",
      "Implemented role-based access control.",
      "Integrated REST APIs.",
      "Used TanStack Query for server-state management.",
      "Built validated forms using Formik and Yup.",
      "Conducted code reviews and reviewed frontend merge requests.",
      "Coordinated frontend implementation with backend engineering.",
    ],

    architectureDecisions: [
      {
        title: "Reusable Business Components",
        rationale:
          "Tables, forms, filters, cards, validation states, and dashboard patterns were shared across many business modules.",
        impact:
          "Improved UI consistency and reduced duplicated implementation.",
      },
      {
        title: "Server-State Management",
        rationale:
          "Accounting and inventory workflows depend heavily on asynchronous API data and mutations.",
        impact:
          "TanStack Query provided structured caching, synchronization, loading states, and mutation handling.",
      },
      {
        title: "Validated Form Architecture",
        rationale:
          "Financial and inventory data requires predictable validation before submission.",
        impact:
          "Formik and Yup provided a consistent approach for complex business forms and validation rules.",
      },
      {
        title: "Role-Based Access",
        rationale:
          "Different users require different levels of access to business operations.",
        impact:
          "Protected routes and role-aware interfaces helped structure access to sensitive workflows.",
      },
    ],

    componentTree: [
      {
        name: "<AccountingDashboard />",
        description:
          "Central business workspace for operational and financial information.",
        children: [
          "<Overview />",
          "<SalesReports />",
          "<ProfitLoss />",
          "<Invoices />",
          "<Inventory />",
        ],
      },
      {
        name: "<InventoryModule />",
        description:
          "Handles product inventory and stock-related workflows.",
        children: [
          "<Products />",
          "<Sizes />",
          "<Colors />",
          "<StockTracking />",
          "<LowStockAlerts />",
        ],
      },
      {
        name: "<BusinessManagement />",
        description:
          "Manages business relationships and operational records.",
        children: [
          "<Customers />",
          "<Suppliers />",
          "<Transactions />",
        ],
      },
    ],

    performance: {
      lcp: "Project-specific",
      inp: "Project-specific",
      cls: "Project-specific",
      bundleSize: "Not publicly disclosed",
      keyOptimizations: [
        "Reusable business components",
        "Server-state caching",
        "Structured data fetching",
        "Responsive UI implementation",
        "Feature-oriented organization",
      ],
    },

    accessibility: {
      wcagLevel: "Accessibility-focused",
      screenReaderScore: "Not formally published",
      keyboardNavTested: true,
      features: [
        "Semantic forms",
        "Keyboard-accessible controls",
        "Clear validation states",
        "Responsive layouts",
      ],
    },

    seoAndMetadata: {
      structuredData:
        "Not applicable — internal business application",
      openGraphStrategy: "Not applicable",
      pageSpeedScore: 0,
    },

    technicalChallenges: [
      {
        challenge:
          "Building interconnected accounting, inventory, and business modules while keeping UI behavior consistent.",
        solution:
          "Established reusable components and shared implementation patterns across forms, tables, filters, dashboards, and reports.",
      },
      {
        challenge:
          "Managing complex business forms and validation.",
        solution:
          "Used Formik and Yup to create structured and predictable validation workflows.",
      },
      {
        challenge:
          "Coordinating frontend implementation across multiple developers.",
        solution:
          "Used task boundaries, code reviews, merge request reviews, and technical planning.",
      },
    ],

    techStackDetails: [
      {
        category: "Frontend",
        tools: [
          "React.js",
          "TypeScript",
          "Tailwind CSS",
          "React Router",
        ],
        justification:
          "Used for component-based UI development, typed application logic, responsive styling, and application navigation.",
      },
      {
        category: "Data",
        tools: [
          "TanStack Query",
          "Axios",
          "REST APIs",
        ],
        justification:
          "Used for server-state management and communication with backend services.",
      },
      {
        category: "Forms",
        tools: ["Formik", "Yup"],
        justification:
          "Used for business forms, validation, and structured submission workflows.",
      },
      {
        category: "Backend Integration",
        tools: ["Express.js"],
        justification:
          "Used as part of the backend/API environment integrated with the frontend.",
      },
    ],

    results: [
      "Delivered a centralized accounting and inventory management platform.",
      "Led frontend implementation across a two-developer team.",
      "Built reusable patterns for dashboards, forms, tables, and business modules.",
      "Implemented authentication, protected routes, and role-based workflows.",
      "Integrated structured server-state management with TanStack Query.",
    ],

    lessonsLearned: [
      "Enterprise business interfaces require consistent interaction patterns and predictable data workflows.",
      "Form architecture becomes especially important when working with financial and inventory-related data.",
      "Code review and clear task boundaries become increasingly valuable as frontend teams grow.",
    ],

    gallery: ["/accounting.png"],

    githubUrl:
      "https://github.com/codebyabdo/accounting-management-system-showcase",

    liveUrl:
      "https://accounting-system-one.vercel.app",
  },

  /* =======================================================
     03. ASMAA PORTFOLIO
  ======================================================= */

  {
    id: "asmaa-adel-portfolio",
    title: "Asmaa Adel Premium Portfolio",
    tagline: "Premium Multilingual Professional Portfolio",
    subtitle:
      "A bilingual professional portfolio platform for an English–Arabic Translator and Localization Specialist, combining premium visual design with modern frontend architecture.",

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
        description:
          "English and Arabic experiences with RTL/LTR support.",
      },
      {
        label: "Framework",
        value: "Next.js 15",
        description:
          "Built using the App Router and modern React architecture.",
      },
      {
        label: "Localization",
        value: "RTL / LTR",
        description:
          "Shared components support both Arabic and English presentation.",
      },
      {
        label: "SEO",
        value: "Production",
        description:
          "Metadata, Open Graph, structured data, sitemap, and robots support.",
      },
    ],

    overview:
      "A premium multilingual portfolio platform created for an English–Arabic Translator and Localization Specialist. The project combines professional storytelling, bilingual content, RTL/LTR support, responsive UI, animations, and production-ready frontend architecture.",

    problemStatement:
      "The project required more than a conventional portfolio. It needed to communicate professional services through a polished visual experience while supporting multilingual content, accessibility, SEO, responsive behavior, and maintainable frontend architecture.",

    businessContext:
      "The platform acts as a professional digital presence where services, experience, translation work, and case studies can be presented through a premium bilingual experience.",

    responsibilities: [
      "Architected the application using Next.js 15 App Router.",
      "Built reusable component-based frontend architecture.",
      "Implemented Arabic and English localization using next-intl.",
      "Implemented RTL/LTR support.",
      "Designed responsive layouts and reusable UI patterns.",
      "Implemented SEO metadata and structured data.",
      "Configured sitemap and robots support.",
      "Implemented controlled interface animations.",
      "Reviewed animations against frontend performance.",
      "Integrated production deployment and analytics-related tooling.",
    ],

    architectureDecisions: [
      {
        title: "App Router Architecture",
        rationale:
          "The project benefits from clear route, layout, metadata, and server/client boundaries.",
        impact:
          "Created a maintainable foundation for localized pages and future project expansion.",
      },
      {
        title: "Internationalized Routing",
        rationale:
          "Arabic and English content needed to coexist without duplicating presentation components.",
        impact:
          "Created a reusable localization architecture with shared UI and direction-aware layouts.",
      },
      {
        title: "Translation-Driven Content",
        rationale:
          "Multilingual content should remain separate from presentation components.",
        impact:
          "Made English and Arabic content easier to maintain and reduced duplicated UI logic.",
      },
      {
        title: "Controlled Motion",
        rationale:
          "Premium visual effects needed to remain subordinate to usability and rendering performance.",
        impact:
          "Kept animations focused on meaningful transitions and micro-interactions instead of excessive effects.",
      },
    ],

    componentTree: [
      {
        name: "<PortfolioLayout />",
        description:
          "Shared application layout responsible for global presentation and localization.",
        children: [
          "<Header />",
          "<Navigation />",
          "<PageContent />",
          "<Footer />",
        ],
      },
      {
        name: "<ProjectCaseStudy />",
        description:
          "Reusable structure for presenting professional projects and case studies.",
        children: [
          "<ProjectHero />",
          "<ProjectOverview />",
          "<ProjectDetails />",
          "<ProjectResults />",
        ],
      },
      {
        name: "<LocalizedContent />",
        description:
          "Translation-aware content layer supporting English and Arabic.",
        children: [
          "<EnglishContent />",
          "<ArabicContent />",
        ],
      },
    ],

    performance: {
      lcp: "Project-specific",
      inp: "Optimized",
      cls: "Optimized",
      bundleSize: "Optimized",
      keyOptimizations: [
        "Reduced unnecessary client-side JavaScript",
        "Controlled animation usage",
        "Responsive image optimization",
        "Lazy loading where appropriate",
        "Reusable rendering patterns",
      ],
    },

    accessibility: {
      wcagLevel: "Accessibility-focused",
      screenReaderScore: "Not formally published",
      keyboardNavTested: true,
      features: [
        "Semantic HTML",
        "ARIA labels where appropriate",
        "Keyboard navigation",
        "Visible focus states",
        "Heading hierarchy",
        "RTL/LTR support",
      ],
    },

    seoAndMetadata: {
      structuredData: "Schema.org Person JSON-LD",
      openGraphStrategy:
        "Open Graph and social sharing metadata",
      pageSpeedScore: 0,
    },

    technicalChallenges: [
      {
        challenge:
          "Supporting Arabic RTL and English LTR experiences without duplicating UI components.",
        solution:
          "Implemented localized routing, shared components, and direction-aware layouts using next-intl.",
      },
      {
        challenge:
          "Keeping translation content separate from presentation logic.",
        solution:
          "Structured the application around translation dictionaries and reusable components.",
      },
      {
        challenge:
          "Balancing premium visual motion with frontend performance.",
        solution:
          "Kept motion purposeful and simplified effects that could negatively affect rendering.",
      },
    ],

    techStackDetails: [
      {
        category: "Framework",
        tools: [
          "Next.js 15",
          "React 19",
          "TypeScript",
        ],
        justification:
          "Used for modern routing, rendering, metadata handling, and typed frontend architecture.",
      },
      {
        category: "Internationalization",
        tools: ["next-intl"],
        justification:
          "Used for structured localization and Arabic/English RTL/LTR experiences.",
      },
      {
        category: "Styling & Motion",
        tools: [
          "Tailwind CSS v4",
          "Framer Motion",
        ],
        justification:
          "Used for responsive styling and controlled interface animation.",
      },
      {
        category: "Deployment",
        tools: ["Vercel"],
        justification:
          "Used for production deployment and hosting.",
      },
    ],

    results: [
      "Delivered a bilingual professional portfolio platform.",
      "Implemented English and Arabic experiences with RTL/LTR support.",
      "Created reusable project and content presentation patterns.",
      "Implemented production-oriented SEO and structured metadata.",
      "Balanced premium visual presentation with maintainable frontend architecture.",
    ],

    lessonsLearned: [
      "Internationalization should be considered at the architecture level instead of being added after the interface is completed.",
      "Premium visual design is most effective when motion supports the content instead of competing with it.",
      "Separating content from presentation makes multilingual products easier to maintain.",
    ],

    gallery: ["/asmaa.png"],

    githubUrl:
      "https://github.com/codebyabdo/asmaa-portfolios",

    liveUrl:
      "https://asmaaadel.vercel.app",
  },

  /* =======================================================
     04. X CODE WEBSITE
  ======================================================= */

  {
    id: "xcode-company-website",
    title: "X Code Company Website",
    tagline: "Responsive Corporate Web Platform",
    subtitle:
      "A responsive multi-page corporate website built around reusable React components, modern UI engineering, SEO, accessibility, and production deployment.",

    role: "Front-End Developer",
    clientOrCompany: "X Code",
    businessDomain: "Corporate Website",

    duration: "2025",
    year: "2025",

    featured: true,
    category: "Web Development",
    image: "/xcode.png",

    techStack: [
      "React.js",
      "JavaScript",
      "Tailwind CSS",
      "React Router",
      "Vite",
      "Git",
      "GitHub",
      "Vercel",
    ],

    metrics: [
      {
        label: "Role",
        value: "Front-End",
        description:
          "Responsible for frontend implementation and production delivery.",
      },
      {
        label: "Architecture",
        value: "Component-Based",
        description:
          "Reusable React components and structured page composition.",
      },
      {
        label: "Focus",
        value: "SEO",
        description:
          "Semantic HTML and production metadata structure.",
      },
      {
        label: "Status",
        value: "Production",
        description:
          "Delivered and deployed as a production website.",
      },
    ],

    overview:
      "A responsive corporate website developed for X Code to provide a professional digital presence across desktop and mobile devices.",

    problemStatement:
      "The company required a modern website that could communicate its services clearly while remaining responsive, maintainable, performant, and easy to extend.",

    businessContext:
      "The website functions as a corporate-facing digital platform where services and company information are presented through a modern frontend experience.",

    responsibilities: [
      "Developed the website frontend.",
      "Built reusable React components.",
      "Implemented responsive layouts.",
      "Implemented client-side routing.",
      "Improved SEO structure using semantic HTML and metadata.",
      "Implemented accessible interactive elements.",
      "Improved loading performance through frontend optimization.",
      "Prepared and deployed the production build.",
    ],

    architectureDecisions: [
      {
        title: "Component-Based UI",
        rationale:
          "The website contains repeated sections and interaction patterns that benefit from reusable components.",
        impact:
          "Created a more consistent and maintainable implementation.",
      },
      {
        title: "Client-Side Routing",
        rationale:
          "The multi-page experience required predictable navigation without full page reloads.",
        impact:
          "React Router provided structured client-side navigation across the website.",
      },
      {
        title: "Responsive-First Implementation",
        rationale:
          "The website needed to work reliably across desktop, tablet, and mobile screen sizes.",
        impact:
          "Responsive layout patterns became part of the component implementation rather than a final adjustment.",
      },
    ],

    componentTree: [
      {
        name: "<CompanyWebsite />",
        description:
          "Main application structure for the corporate website.",
        children: [
          "<Header />",
          "<Navigation />",
          "<HomePage />",
          "<Services />",
          "<About />",
          "<Contact />",
          "<Footer />",
        ],
      },
    ],

    performance: {
      lcp: "Optimized",
      inp: "Optimized",
      cls: "Optimized",
      bundleSize: "Not publicly disclosed",
      keyOptimizations: [
        "Lazy loading where appropriate",
        "Code splitting",
        "Reusable components",
        "Responsive implementation",
        "Lightweight frontend structure",
      ],
    },

    accessibility: {
      wcagLevel: "Accessibility-focused",
      screenReaderScore: "Not formally published",
      keyboardNavTested: true,
      features: [
        "Semantic HTML",
        "ARIA attributes where appropriate",
        "Keyboard navigation",
        "Responsive navigation",
      ],
    },

    seoAndMetadata: {
      structuredData: "Project-specific",
      openGraphStrategy:
        "Production metadata and social sharing support.",
      pageSpeedScore: 0,
    },

    technicalChallenges: [
      {
        challenge:
          "Building a multi-page corporate website while keeping the frontend lightweight and maintainable.",
        solution:
          "Used reusable React components, React Router, and utility-first styling with Tailwind CSS.",
      },
      {
        challenge:
          "Maintaining responsive behavior across multiple page layouts.",
        solution:
          "Built responsive components and tested layouts across different viewport sizes.",
      },
      {
        challenge:
          "Improving discoverability and page structure.",
        solution:
          "Applied semantic HTML and structured metadata for SEO.",
      },
    ],

    techStackDetails: [
      {
        category: "Frontend",
        tools: [
          "React.js",
          "JavaScript",
          "Tailwind CSS",
        ],
        justification:
          "Used for component-based UI development and responsive styling.",
      },
      {
        category: "Navigation",
        tools: ["React Router"],
        justification:
          "Used for client-side navigation across the website.",
      },
      {
        category: "Tooling",
        tools: [
          "Vite",
          "Git",
          "GitHub",
        ],
        justification:
          "Used for development, build tooling, and source control.",
      },
      {
        category: "Deployment",
        tools: ["Vercel"],
        justification:
          "Used for production deployment.",
      },
    ],

    results: [
      "Delivered the company's responsive corporate website.",
      "Built reusable UI components for maintainability.",
      "Implemented responsive navigation and page structures.",
      "Improved SEO structure using semantic HTML and metadata.",
      "Deployed the production application.",
    ],

    lessonsLearned: [
      "Corporate websites benefit from the same frontend engineering discipline as larger applications.",
      "Reusable components make marketing and content-heavy websites easier to maintain.",
      "Performance and SEO should be considered during implementation rather than after deployment.",
    ],

    gallery: ["/xcode.png"],

    githubUrl:
      "https://github.com/codebyabdo/xcode-company-website",

    liveUrl:
      "https://x-code-prtfolio.vercel.app",
  },

  /* =======================================================
     05. ADAS
  ======================================================= */

  {
    id: "adas-speed-bump-detection",
    title: "ADAS Smart Speed Bump Detection",
    tagline: "AI-Powered Road Safety & Detection System",
    subtitle:
      "A graduation project combining computer vision, embedded hardware, GPS, IMU data, and a backend API to detect and localize road speed bumps.",

    role: "Software Architecture & Documentation Engineer",
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
      "OpenCV",
      "Raspberry Pi 5",
      "FastAPI",
      "GPS",
      "IMU",
    ],

    metrics: [
      {
        label: "Detection",
        value: "YOLOv8",
        description:
          "Computer vision model used for speed bump detection.",
      },
      {
        label: "Hardware",
        value: "Raspberry Pi 5",
        description:
          "Embedded computing platform used by the system.",
      },
      {
        label: "Backend",
        value: "FastAPI",
        description:
          "API layer used for system communication.",
      },
      {
        label: "Sensors",
        value: "GPS + IMU",
        description:
          "Sensor inputs used to support localization and road-event context.",
      },
    ],

    overview:
      "An Advanced Driver Assistance System designed to detect road speed bumps using computer vision and provide localization information through GPS and sensor data.",

    problemStatement:
      "Road speed bumps are not always easy to identify early, especially under varying road and environmental conditions. The project explored an automated approach for detecting and localizing them.",

    businessContext:
      "The graduation project investigated how computer vision, embedded computing, and sensor data can work together to improve driver awareness and create structured road-event information.",

    responsibilities: [
      "Designed the software architecture of the system.",
      "Documented system architecture and technical decisions.",
      "Defined boundaries between computer vision, sensor processing, localization, and API communication.",
      "Supported integration planning across AI, embedded hardware, GPS, IMU, and backend components.",
      "Prepared technical documentation for the multidisciplinary project.",
    ],

    architectureDecisions: [
      {
        title: "Edge-Based Detection",
        rationale:
          "The system needs to process camera input close to the vehicle and hardware sensors.",
        impact:
          "The detection pipeline can operate within the embedded Raspberry Pi environment.",
      },
      {
        title: "Sensor-Aware Architecture",
        rationale:
          "Computer vision identifies the road event but does not provide geographic context by itself.",
        impact:
          "The architecture combines visual detection with GPS and IMU information.",
      },
      {
        title: "Separated System Boundaries",
        rationale:
          "AI, hardware sensors, localization, and backend communication have different responsibilities.",
        impact:
          "Clear boundaries make the system easier to integrate, debug, document, and extend.",
      },
    ],

    componentTree: [
      {
        name: "<ADASSystem />",
        description:
          "High-level architecture connecting detection, sensors, localization, and API communication.",
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
        "Hardware-aware architecture",
        "Lightweight detection pipeline",
        "Clear separation of processing responsibilities",
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
          "Connecting computer vision with embedded sensors and backend services.",
        solution:
          "Defined clear system boundaries between detection, sensor data, localization, and API communication.",
      },
      {
        challenge:
          "Coordinating technical work across multiple engineering disciplines.",
        solution:
          "Used architecture documentation and clearly defined responsibilities between system components.",
      },
    ],

    techStackDetails: [
      {
        category: "Computer Vision",
        tools: [
          "YOLOv8",
          "OpenCV",
          "Python",
        ],
        justification:
          "Used for image processing and road speed bump detection.",
      },
      {
        category: "Embedded Systems",
        tools: [
          "Raspberry Pi 5",
          "MPU6050",
          "Neo-6M GPS",
        ],
        justification:
          "Provided the hardware and sensor layer for the system.",
      },
      {
        category: "Backend",
        tools: ["FastAPI"],
        justification:
          "Provided the API communication layer for the system.",
      },
    ],

    results: [
      "Designed the software architecture for the detection pipeline.",
      "Documented the system and its technical components.",
      "Defined the conceptual flow between AI detection, sensors, localization, and backend services.",
    ],

    lessonsLearned: [
      "System architecture becomes critical when multiple hardware and software components need to communicate reliably.",
      "Clear documentation reduces integration friction across multidisciplinary engineering teams.",
      "Separating responsibilities between detection, sensors, localization, and APIs makes complex systems easier to reason about.",
    ],

    gallery: ["/adas.png"],

    githubUrl:
      "https://github.com/codebyabdo/adas-smart-speed-bump-detection-system",
  },

  /* =======================================================
     06. BLOOD BANK
  ======================================================= */

  {
    id: "blood-bank-platform",
    title: "Blood Bank Management Platform",
    tagline: "Healthcare Management Platform",
    subtitle:
      "A healthcare-focused project designed to support blood donation management workflows through a centralized digital platform.",

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
          "Supported technical planning and coordination across engineering teams.",
      },
      {
        label: "Frontend",
        value: "Next.js",
        description:
          "Modern React-based frontend architecture.",
      },
      {
        label: "Status",
        value: "Incomplete",
        description:
          "The project was not completed as a production product.",
      },
      {
        label: "Domain",
        value: "Healthcare",
        description:
          "Focused on blood donation and management workflows.",
      },
    ],

    overview:
      "A healthcare-oriented project intended to organize blood donation management workflows through a centralized digital platform.",

    problemStatement:
      "The project required coordination between frontend, mobile, and backend teams around a shared product direction and technical architecture.",

    businessContext:
      "The platform was intended to provide a structured digital experience for blood donation-related workflows.",

    responsibilities: [
      "Participated in technical planning.",
      "Supported architecture discussions.",
      "Coordinated communication between frontend, mobile, and backend teams.",
      "Participated in sprint planning.",
      "Contributed to technical documentation.",
      "Helped clarify technical boundaries between project components.",
    ],

    architectureDecisions: [
      {
        title: "Cross-Team Technical Coordination",
        rationale:
          "Frontend, mobile, and backend teams needed a shared understanding of product requirements and system boundaries.",
        impact:
          "Improved communication and alignment around technical decisions.",
      },
      {
        title: "Modern Frontend Foundation",
        rationale:
          "The project required a maintainable React-based frontend foundation.",
        impact:
          "Next.js and TypeScript provided a structured base for future development.",
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
          "Supported technical planning, documentation, and communication between frontend, mobile, and backend teams.",
      },
    ],

    techStackDetails: [
      {
        category: "Frontend",
        tools: [
          "Next.js",
          "TypeScript",
          "Tailwind CSS",
        ],
        justification:
          "Selected as the frontend foundation for maintainable React-based development.",
      },
      {
        category: "Data",
        tools: ["TanStack Query"],
        justification:
          "Planned for structured server-state and API data management.",
      },
    ],

    results: [
      "Supported technical planning and cross-team coordination.",
      "Contributed to architecture discussions.",
      "Contributed to project documentation.",
    ],

    lessonsLearned: [
      "Technical coordination requires clear communication and documented architectural decisions.",
      "Multidisciplinary projects benefit from explicitly defined responsibilities and system boundaries.",
    ],

    gallery: ["/blood.png"],
  },
];

/* =========================================================
   Categories
========================================================= */

export const categories = [
  "All",
  ...Array.from(new Set(PROJECTS.map((project) => project.category))),
];

/* =========================================================
   Project Helpers
========================================================= */

export function getProjectBySlug(
  id: string,
): ProjectCaseStudy | undefined {
  return PROJECTS.find((project) => project.id === id);
}

export function getFeaturedProjects(): ProjectCaseStudy[] {
  return PROJECTS.filter((project) => project.featured);
}