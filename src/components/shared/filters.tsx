"use client";

import { Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FadeUp } from "@/components/animations/motion";
import { cn } from "@/lib/utils";

interface FiltersProps {
  categories: readonly string[];
  activeCategory: string;
  searchQuery: string;
  onCategoryChange: (category: string) => void;
  onSearchChange: (query: string) => void;
  searchPlaceholder?: string;
  className?: string;
}

export function Filters({
  categories,
  activeCategory,
  searchQuery,
  onCategoryChange,
  onSearchChange,
  searchPlaceholder = "Search...",
  className,
}: FiltersProps) {
  return (
    <FadeUp
      delay={0.1}
      className={cn(
        "flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between",
        className,
      )}
    >
      {/* Categories */}
      <div className="flex w-full items-center gap-2 overflow-x-auto pb-2 no-scrollbar lg:w-auto lg:pb-0">
        {categories.map((category) => {
          const isActive = activeCategory === category;

          return (
            <Button
              key={category}
              type="button"
              variant={isActive ? "default" : "outline"}
              size="sm"
              onClick={() => onCategoryChange(category)}
              className={cn(
                "shrink-0 rounded-full px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all",
                isActive
                  ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30 hover:bg-blue-500"
                  : "border-white/10 bg-white/[0.03] text-white/50 hover:border-white/20 hover:bg-white/[0.06] hover:text-white",
              )}
            >
              {category}
            </Button>
          );
        })}
      </div>

      {/* Search */}
      <div className="relative w-full lg:w-72">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-white/40" />

        <Input
          type="search"
          value={searchQuery}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder={searchPlaceholder}
          className="w-full rounded-full border border-white/10 bg-white/[0.03] py-2 pl-9 pr-4 font-mono text-xs uppercase tracking-wider text-white placeholder:text-white/40 transition-colors focus:border-blue-500/50 focus:outline-none"
        />
      </div>
    </FadeUp>
  );
}