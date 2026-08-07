"use client";

import {
  FadeUp,
  StaggerChildren,
  StaggerItem,
  HoverCard,
} from "@/components/animations/motion";

import { workflowPrinciples } from "@/lib/constants/workflow-data";

export function TeamWorkflowSection() {
  return (
    <section className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <FadeUp className="max-w-2xl mb-16 space-y-4">
          <p className="text-sm text-primary font-medium uppercase tracking-wider">
            Leadership
          </p>
          <h2 className="font-heading font-semibold text-3xl sm:text-4xl">
            Team Collaboration
          </h2>
          <p className="text-muted-foreground">
            Great frontend products are built through strong collaboration,
            clean communication, and maintainable engineering practices. I focus
            on creating scalable solutions while working effectively with teams
            and clients.
          </p>
        </FadeUp>

        <StaggerChildren className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {workflowPrinciples.map((principle, index) => (
            <StaggerItem key={index}>
              <HoverCard className="h-full">
                <article className="h-full p-6 rounded-2xl border border-border/50 bg-card/50 hover:border-primary/30 transition-colors text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-4">
                    <principle.icon className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading font-medium mb-2">
                    {principle.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {principle.description}
                  </p>
                </article>
              </HoverCard>
            </StaggerItem>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
