"use client";

import {
  FadeUp,
  StaggerChildren,
  StaggerItem,
} from "@/components/animations/motion";

export function ApproachHero() {
  return (
    <section className="py-24 lg:py-32 border-b border-border/50">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <StaggerChildren className="max-w-3xl space-y-8">
          <StaggerItem>
            <p className="text-sm text-primary font-medium uppercase tracking-wider">
              Approach
            </p>
          </StaggerItem>

          <StaggerItem>
            <h1 className="font-heading font-semibold text-4xl sm:text-5xl lg:text-6xl text-balance">
              Frontend Engineering
            </h1>
          </StaggerItem>

          <StaggerItem>
            <p className="text-lg text-muted-foreground leading-relaxed text-pretty">
              I focus on building scalable, maintainable, and high-performance
              frontend applications using modern React and Next.js ecosystems.
              My approach combines clean architecture, reusable systems, and
              performance-driven development to deliver production-ready user
              experiences.
            </p>
          </StaggerItem>

          <StaggerItem>
            <p className="text-muted-foreground leading-relaxed text-pretty">
              Through freelance projects and SaaS platforms like VORDER and
              Accounting System, I’ve developed practical workflows for handling
              complex UI states, API integrations, authentication systems, and
              scalable component architecture while keeping developer experience
              and maintainability a priority.
            </p>
          </StaggerItem>
        </StaggerChildren>
      </div>
    </section>
  );
}
