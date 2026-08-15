"use client";
import { AboutHero } from "@/components/sections/about/about-hero";
import { ExperienceTimeline } from "@/components/sections/about/experience-timeline";
import { SkillsSection } from "@/components/sections/about/skills-section";
import { MainHeader } from "@/components/shared/main-header";
import { Terminal } from "lucide-react";

const header = {
  title: "About Abd El-Rahman Adel",
  description:
    "I am a Senior Frontend Engineer based in Cairo, Egypt. I bridge high-level system architecture with luxury visual craft to build production platforms used by over 140,000 active users.",
  subtitle: "CAREER & PHILOSOPHY",
  highligh: "Engineer Narrative & Career Journey",
  icon: Terminal,
};

export default function AboutSection() {
  return (
      <div className="space-y-16 pb-16 pt-24 sm:pt-32 px-4 sm:px-6 max-w-7xl mx-auto">
        <MainHeader header={header} />
        <AboutHero />
        <ExperienceTimeline />
        <SkillsSection />
      </div>
  );
}
