import {
  SITE_NAME,
  SITE_URL,
  type Locale,
} from "./metadata";

interface PersonSchemaOptions {
  locale: Locale;
}

function getPersonDescription(locale: Locale): string {
  return locale === "ar"
    ? "مهندس واجهات أمامية متخصص في React وNext.js وTypeScript وهندسة الواجهات الأمامية وبناء تطبيقات SaaS القابلة للتوسع."
    : "Frontend Engineer specializing in React, Next.js, TypeScript, frontend architecture, scalable SaaS applications, and web performance.";
}

export function createPersonSchema({
  locale,
}: PersonSchemaOptions) {
  return {
    "@type": "Person",

    "@id": `${SITE_URL}/#person`,

    name: "Abd El-Rahman Adel",

    url: SITE_URL,

    jobTitle:
      locale === "ar"
        ? "مهندس واجهات أمامية"
        : "Frontend Engineer",

    description: getPersonDescription(locale),

    image: `${SITE_URL}/og-image.png`,

    sameAs: [
      "https://github.com/codebyabdo",
    ],

    knowsAbout: [
      "React.js",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Frontend Architecture",
      "SaaS Applications",
      "Web Performance",
      "REST APIs",
      "TanStack Query",
      "Tailwind CSS",
      "Responsive Web Design",
      "Software Engineering",
    ],
  };
}

interface WebsiteSchemaOptions {
  locale: Locale;
}

export function createWebsiteSchema({
  locale,
}: WebsiteSchemaOptions) {
  return {
    "@type": "WebSite",

    "@id": `${SITE_URL}/#website`,

    url: SITE_URL,

    name: SITE_NAME,

    description:
      locale === "ar"
        ? "الموقع الشخصي ومعرض أعمال عبد الرحمن عادل، مهندس واجهات أمامية متخصص في React وNext.js وTypeScript."
        : "Personal portfolio of Abd El-Rahman Adel, a Frontend Engineer specializing in React, Next.js, TypeScript, and scalable web applications.",

    publisher: {
      "@id": `${SITE_URL}/#person`,
    },
  };
}

interface WebPageSchemaOptions {
  locale: Locale;
  title: string;
  description: string;
  path?: string;
}

export function createWebPageSchema({
  locale,
  title,
  description,
  path = "",
}: WebPageSchemaOptions) {
  const normalizedPath =
    !path || path === "/"
      ? ""
      : path.startsWith("/")
        ? path
        : `/${path}`;

  const url = `${SITE_URL}/${locale}${normalizedPath}`;

  return {
    "@type": "WebPage",

    "@id": `${url}#webpage`,

    url,

    name: title,

    description,

    isPartOf: {
      "@id": `${SITE_URL}/#website`,
    },

    about: {
      "@id": `${SITE_URL}/#person`,
    },

    inLanguage:
      locale === "ar"
        ? "ar-EG"
        : "en-US",
  };
}

export interface BreadcrumbItem {
  name: string;
  url: string;
}

export function createBreadcrumbSchema(
  items: BreadcrumbItem[],
) {
  return {
    "@type": "BreadcrumbList",

    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",

      position: index + 1,

      name: item.name,

      item: item.url,
    })),
  };
}

interface CreateSiteGraphOptions {
  locale: Locale;
  title: string;
  description: string;
  path?: string;
  includeBreadcrumbs?: BreadcrumbItem[];
}

export function createSiteGraph({
  locale,
  title,
  description,
  path = "",
  includeBreadcrumbs,
}: CreateSiteGraphOptions) {
  const graph: Record<string, unknown>[] = [
    createPersonSchema({
      locale,
    }),

    createWebsiteSchema({
      locale,
    }),

    createWebPageSchema({
      locale,
      title,
      description,
      path,
    }),
  ];

  if (
    includeBreadcrumbs &&
    includeBreadcrumbs.length > 0
  ) {
    graph.push(
      createBreadcrumbSchema(includeBreadcrumbs),
    );
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph,
  };
}

export function createJsonLdScript(data: unknown) {
  return {
    __html: JSON.stringify(data),
  };
}