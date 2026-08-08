
export interface ProjectMetric {
  label: string;
  value: string;
  change?: string;
  description: string;
}

export interface ArchitectureDecision {
  title: string;
  rationale: string;
  impact: string;
}

export interface ProjectCaseStudy {
  id: string;
  title: string;
  tagline: string;
  subtitle: string;
  role: string;
  clientOrCompany: string;
  businessDomain: string;
  duration: string;
  year: string;
  featured: boolean;
  category: string
  image: string;
  techStack: string[];
  metrics: ProjectMetric[];
  
  // Case Study Sections
  overview: string;
  problemStatement: string;
  businessContext: string;
  responsibilities: string[];
  architectureDecisions: ArchitectureDecision[];
  componentTree: {
    name: string;
    description: string;
    children?: string[];
  }[];
  performance: {
    lcp: string;
    inp: string;
    cls: string;
    bundleSize: string;
    keyOptimizations: string[];
  };
  accessibility: {
    wcagLevel: string;
    screenReaderScore: string;
    keyboardNavTested: boolean;
    features: string[];
  };
  seoAndMetadata: {
    structuredData: string;
    openGraphStrategy: string;
    pageSpeedScore: number;
  };
  technicalChallenges: {
    challenge: string;
    solution: string;
    codeSnippet?: {
      language: string;
      filename: string;
      code: string;
    };
  }[];
  techStackDetails: {
    category: string;
    tools: string[];
    justification: string;
  }[];
  results: string[];
  lessonsLearned: string[];
  gallery: string[];
  githubUrl?: string;
  liveUrl?: string;
}
