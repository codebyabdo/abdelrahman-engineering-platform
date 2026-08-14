"use client";

import { useMemo, useState } from "react";
import { ArrowRight, Clock } from "lucide-react";

import { useDialogs } from "@/providers/dialog-provider";
import { ARTICLES } from "@/lib/constants/blog-content";
import { Filters } from "@/components/shared/filters";
import { Button } from "@/components/ui/button";
import { FadeUp } from "@/components/animations/motion";



export function BlogList() {
  const { openArticle } = useDialogs();

  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = useMemo(
    () => [
      "All",
      ...Array.from(
        new Set(ARTICLES.map((article) => article.category)),
      ),
    ],
    [],
  );

  const filteredArticles = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return ARTICLES.filter((article) => {
      const matchesCategory =
        activeCategory === "All" ||
        article.category === activeCategory;

      const matchesSearch =
        !normalizedQuery ||
        article.title.toLowerCase().includes(normalizedQuery) ||
        article.excerpt.toLowerCase().includes(normalizedQuery) ||
        article.tags.some((tag) =>
          tag.toLowerCase().includes(normalizedQuery),
        );

      return matchesCategory && matchesSearch;
    });
  }, [activeCategory, searchQuery]);

  return (
    <div className="space-y-8">
      {/* Filters */}
      <Filters
        categories={categories}
        activeCategory={activeCategory}
        searchQuery={searchQuery}
        onCategoryChange={setActiveCategory}
        onSearchChange={setSearchQuery}
        searchPlaceholder="Search articles..."
      />

      {/* Articles */}
      {filteredArticles.length > 0 ? (
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {filteredArticles.map((article) => (
            <FadeUp
              key={article.id}
              className="group flex flex-col justify-between space-y-6 rounded-2xl border border-white/10 border-laser bg-[#080808] p-8 shadow-xl transition-all duration-300 hover:border-blue-500/50"
            >
              {/* Content */}
              <div className="space-y-4">
                <div className="flex items-center justify-between gap-4 font-mono text-xs text-white/40">
                  <span className="rounded-full border border-blue-500/30 bg-blue-600/10 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-blue-400">
                    {article.category}
                  </span>

                  <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-wider text-white/40">
                    <Clock className="h-3.5 w-3.5" />
                    {article.readTime} • {article.publishedAt}
                  </span>
                </div>

                <h2 className="text-xl font-black uppercase tracking-tight text-white transition-colors group-hover:text-blue-400 sm:text-2xl">
                  {article.title}
                </h2>

                <p className="text-xs font-light leading-relaxed text-white/60 sm:text-sm">
                  {article.excerpt}
                </p>
              </div>

              {/* Footer */}
              <div className="space-y-4 border-t border-white/5 pt-4">
                <div className="flex flex-wrap gap-1.5">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded border border-white/5 bg-white/3px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-white/50"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <Button
                  type="button"
                  onClick={() => openArticle(article.id)}
                  className="group/btn flex w-full items-center justify-center gap-2 rounded-full border border-white/10 bg-white/3 py-3 text-[10px] font-bold uppercase tracking-widest text-blue-400 transition-all hover:bg-blue-600 hover:text-white"
                >
                  <span>Read Full Article</span>

                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </div>
            </FadeUp>
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-white/10 bg-[#080808] p-12 text-center">
          <p className="font-mono text-xs uppercase tracking-widest text-white/40">
            No articles found matching your filters.
          </p>
        </div>
      )}
    </div>
  );
}