"use client";

import { BookOpen } from "lucide-react";

import { MainHeader } from "@/components/shared/main-header";
import { BlogList } from "./blog-list";

const header = {
  title: "Frontend Engineering Notes",
  description:
    "Practical articles and engineering notes about React, Next.js, TypeScript, frontend architecture, SaaS applications, dashboards, APIs, and performance.",
  subtitle: "ARTICLES & ENGINEERING NOTES",
  highligh: "Frontend Development & Engineering",
  icon: BookOpen,
};

export function BlogSection() {
  return (
    <div className="mx-auto max-w-7xl space-y-12 px-4 pb-16 pt-24 sm:px-6 sm:pt-32">
      <MainHeader header={header} />

      <BlogList />
    </div>
  );
}