"use client";

import { MainHeader } from "@/components/shared/main-header";
import { Layers } from "lucide-react";
import { InteractiveSystemDiagram } from "./interactive-system-diagram";
import { TabsDive } from "./tabs-dive";

const header = {
  title: "System Design & Code Conventions",
  description:
    "A transparent look into how I organize production codebases, enforce state boundaries, offload work to Web Workers, and guarantee sub-40ms INP response times.",
  subtitle: "SYSTEM DESIGN & CODE CONVENTIONS",
  highligh: "Frontend Engineering Architecture",
  icon: Layers,
};



export default function ArchitectureSection() {
    
  return (
    <div className="space-y-12 pb-16 pt-24 sm:pt-32 px-4 sm:px-6 max-w-7xl mx-auto">
      <MainHeader header={header} />
      <InteractiveSystemDiagram />
      <TabsDive/>
    </div>
  );
}
