"use client";

import {
  FadeUp,
  StaggerChildren,
  StaggerItem,
  HoverCard,
} from "@/components/animations/motion";
import { dataStrategies } from "@/lib/constants/strategies-data";



export function DataFetchingSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <FadeUp className="space-y-6">
            <p className="text-sm text-primary font-medium uppercase tracking-wider">
              Data Layer
            </p>
            <h2 className="font-heading font-semibold text-3xl sm:text-4xl">
              Data Fetching Strategy
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Modern frontend applications require efficient state management
              and reliable API communication. My workflow focuses on building
              scalable data layers using React Query, TanStack Query, and
              structured API services.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              I prioritize performance, maintainability, and user experience by
              reducing unnecessary requests, optimizing rendering behavior, and
              keeping frontend architecture clean and reusable across projects.
            </p>
          </FadeUp>

          <StaggerChildren className="grid sm:grid-cols-2 gap-4">
            {dataStrategies.map((strategy, index) => (
              <StaggerItem key={index}>
                <HoverCard className="h-full">
                  <div className="h-full p-5 rounded-xl border border-border/50 bg-card/50 hover:border-primary/30 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-3">
                      <strategy.icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-heading font-medium text-sm mb-2">
                      {strategy.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">
                      {strategy.description}
                    </p>
                  </div>
                </HoverCard>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </div>
    </section>
  );
}
