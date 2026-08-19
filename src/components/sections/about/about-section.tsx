"use client";

import { AboutHero } from "@/components/sections/about/about-hero";
import { ExperienceTimeline } from "@/components/sections/about/experience-timeline";
import { SkillsSection } from "@/components/sections/about/skills-section";
import { MainHeader } from "@/components/shared/main-header";
import { Terminal } from "lucide-react";

const header = {
  title: "About Abd El-Rahman Adel",
  description:
    "Front-End Engineer specializing in React, Next.js, and TypeScript, focused on building scalable SaaS platforms, enterprise dashboards, business applications, and maintainable frontend architectures.",
  subtitle: "CAREER & ENGINEERING PHILOSOPHY",
  highligh: "Engineer Profile & Career Journey",
  icon: Terminal,
};

export default function AboutSection() {
  return (
    <div className="mx-auto max-w-7xl space-y-16 px-4 pb-16 pt-24 sm:px-6 sm:pt-32">
      <MainHeader header={header} />

      <AboutHero />

      <ExperienceTimeline />

      <SkillsSection />
    </div>
  );
}