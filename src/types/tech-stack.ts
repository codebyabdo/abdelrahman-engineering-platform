export interface TechStackCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    level: "Expert" | "Advanced" | "Proficient";
    experienceYears: number;
    icon: string;
    highlight: string;
  }[];
}
