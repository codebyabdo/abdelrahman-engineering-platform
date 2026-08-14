"use client";

import type { LucideIcon } from "lucide-react";
import { FadeUp } from "../animations/motion";

interface HeaderProps {
  title: string;
  description: string;
  subtitle: string;
  highligh: string;
  icon: LucideIcon;
}

interface MainHeaderProps {
  header: HeaderProps;
}

export function MainHeader({ header }: MainHeaderProps) {
  const { title, description, subtitle, highligh, icon: Icon } = header;
  return (
    <FadeUp className="space-y-4 border-b border-white/10 pb-8">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-600/10 border border-blue-500/30 text-blue-400 font-mono text-[10px] font-bold uppercase tracking-widest">
        <Icon className="w-3.5 h-3.5" />
        {highligh}
      </div>

      <h2 className="text-blue-500 text-xs font-semibold uppercase tracking-[0.3em] block">
        {subtitle}
      </h2>

      <h1 className="text-4xl sm:text-6xl font-black tracking-tighter uppercase text-white">
        {title}
      </h1>

      <p className="text-xs sm:text-sm text-white/60 max-w-3xl leading-relaxed">
        {description}
      </p>
    </FadeUp>
  );
}
