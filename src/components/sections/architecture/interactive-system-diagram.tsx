"use client";

import { systemDiagramContent } from "@/lib/constants/systemDiagramContent";
import { Cpu } from "lucide-react";

const labelColors = {
  blue: "text-blue-400",
  emerald: "text-emerald-400",
  amber: "text-amber-400",
  purple: "text-purple-400",
} as const;

export function InteractiveSystemDiagram() {
  return (
    <div className="relative space-y-6 overflow-hidden rounded-2xl border border-white/10 bg-[#080808] bg-grid-pattern p-8">
      <h2 className="flex items-center gap-2 text-lg font-black uppercase tracking-tight text-white">
        <Cpu className="h-5 w-5 text-blue-400" />

        {systemDiagramContent.title}
      </h2>

      <div className="grid grid-cols-1 gap-4 text-xs font-mono md:grid-cols-4">
        {systemDiagramContent.layers.map((layer) => (
          <div
            key={layer.label}
            className="space-y-2 rounded-xl border border-white/5 bg-white/[0.02] p-4"
          >
            <span
              className={`text-[10px] font-bold uppercase tracking-widest ${
                labelColors[layer.labelColor]
              }`}
            >
              {layer.label}
            </span>

            <div className="text-sm font-bold uppercase text-white">
              {layer.title}
            </div>

            <p className="text-[11px] text-white/50">
              {layer.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}