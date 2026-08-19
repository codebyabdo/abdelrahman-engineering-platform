"use client";

import { MainHeader } from "@/components/shared/main-header";
import { Layers } from "lucide-react";
import { InteractiveSystemDiagram } from "./interactive-system-diagram";
import { TabsDive } from "./tabs-dive";

const header = {
  title: "Frontend Architecture & Engineering Practices",
  description:
    "A practical overview of how I structure React and Next.js applications, organize features, manage server state, integrate APIs, and build reusable interfaces for scalable web products.",
  subtitle: "FRONTEND ARCHITECTURE",
  highligh: "Scalable Application Structure & Engineering Practices",
  icon: Layers,
};

export default function ArchitectureSection() {
  return (
    <div className="mx-auto max-w-7xl space-y-12 px-4 pb-16 pt-24 sm:px-6 sm:pt-32">
      <MainHeader header={header} />

      <InteractiveSystemDiagram />

      <TabsDive />
    </div>
  );
}