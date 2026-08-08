"use client";

import {
  Accessibility,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Code2,
  ExternalLink,
  Link,
  Gauge,
  Layers3,
  Lightbulb,
  Network,
  Search,
  ShieldCheck,
  Target,
  Trophy,
  Wrench,
} from "lucide-react";

import type { ProjectCaseStudy } from "@/lib/constants/featured-projects-data";

interface ProjectDetailDialogProps {
  project: ProjectCaseStudy;
}

export function ProjectDetailDialog({
  project,
}: ProjectDetailDialogProps) {
  return (
    <div className="space-y-10 pb-4">
      {/* Hero */}
      <section className="space-y-5">
        <div className="flex flex-wrap items-center gap-2">
          <span className="rounded-full border border-blue-500/20 bg-blue-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-blue-400">
            {project.category}
          </span>

          <span className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 text-[10px] font-mono text-white/35">
            {project.year}
          </span>

          {project.featured && (
            <span className="rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 text-[10px] uppercase tracking-widest text-emerald-400">
              Featured
            </span>
          )}
        </div>

        <div>
          <h2 className="max-w-4xl text-2xl font-bold tracking-tight text-white sm:text-4xl">
            {project.title}
          </h2>

          <p className="mt-3 max-w-3xl text-sm font-medium leading-6 text-blue-400/80 sm:text-base">
            {project.tagline}
          </p>

          <p className="mt-4 max-w-3xl text-sm leading-7 text-white/50">
            {project.subtitle}
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <MetaItem label="Role" value={project.role} />
          <MetaItem
            label="Client / Company"
            value={project.clientOrCompany}
          />
          <MetaItem
            label="Business Domain"
            value={project.businessDomain}
          />
          <MetaItem label="Duration" value={project.duration} />
        </div>
      </section>

      {/* Metrics */}
      <section className="grid gap-3 sm:grid-cols-3">
        {project.metrics.map((metric) => (
          <div
            key={metric.label}
            className="rounded-2xl border border-white/10 bg-white/2.5 p-5"
          >
            <p className="text-[10px] font-semibold uppercase tracking-widest text-white/30">
              {metric.label}
            </p>

            <p className="mt-2 text-2xl font-bold tracking-tight text-white">
              {metric.value}
            </p>

            {metric.change && (
              <p className="mt-1 text-xs text-emerald-400">
                {metric.change}
              </p>
            )}

            <p className="mt-3 text-xs leading-5 text-white/40">
              {metric.description}
            </p>
          </div>
        ))}
      </section>

      {/* Overview */}
      <CaseStudySection
        eyebrow="01"
        title="Overview"
        icon={<Target className="h-4 w-4" />}
      >
        <p className="text-sm leading-7 text-white/55">
          {project.overview}
        </p>
      </CaseStudySection>

      {/* Problem + Context */}
      <div className="grid gap-6 md:grid-cols-2">
        <CaseStudyCard
          eyebrow="02"
          title="Problem Statement"
          icon={<Search className="h-4 w-4" />}
        >
          <p className="text-sm leading-7 text-white/50">
            {project.problemStatement}
          </p>
        </CaseStudyCard>

        <CaseStudyCard
          eyebrow="03"
          title="Business Context"
          icon={<BarChart3 className="h-4 w-4" />}
        >
          <p className="text-sm leading-7 text-white/50">
            {project.businessContext}
          </p>
        </CaseStudyCard>
      </div>

      {/* Responsibilities */}
      <CaseStudySection
        eyebrow="04"
        title="Responsibilities"
        icon={<CheckCircle2 className="h-4 w-4" />}
      >
        <div className="grid gap-3 md:grid-cols-2">
          {project.responsibilities.map((responsibility) => (
            <div
              key={responsibility}
              className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-4"
            >
              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />

              <p className="text-xs leading-6 text-white/50">
                {responsibility}
              </p>
            </div>
          ))}
        </div>
      </CaseStudySection>

      {/* Architecture */}
      <CaseStudySection
        eyebrow="05"
        title="Architecture Decisions"
        icon={<Network className="h-4 w-4" />}
      >
        <div className="space-y-4">
          {project.architectureDecisions.map((decision) => (
            <div
              key={decision.title}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
            >
              <div className="flex items-start gap-3">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/5 text-blue-400">
                  <Layers3 className="h-4 w-4" />
                </span>

                <div>
                  <h3 className="text-sm font-semibold text-white">
                    {decision.title}
                  </h3>

                  <div className="mt-4 grid gap-4 md:grid-cols-2">
                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-white/25">
                        Rationale
                      </p>

                      <p className="mt-2 text-xs leading-6 text-white/45">
                        {decision.rationale}
                      </p>
                    </div>

                    <div>
                      <p className="text-[10px] font-semibold uppercase tracking-widest text-white/25">
                        Impact
                      </p>

                      <p className="mt-2 text-xs leading-6 text-white/45">
                        {decision.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CaseStudySection>

      {/* Component Tree */}
      <CaseStudySection
        eyebrow="06"
        title="Component Architecture"
        icon={<Code2 className="h-4 w-4" />}
      >
        <div className="space-y-3">
          {project.componentTree.map((node, index) => (
            <div
              key={`${node.name}-${index}`}
              className="rounded-xl border border-white/10 bg-black/20 p-4"
            >
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-blue-400" />

                <code className="text-xs text-blue-300">
                  {node.name || "Component"}
                </code>
              </div>

              <p className="mt-2 text-xs leading-5 text-white/40">
                {node.description}
              </p>

              {node.children && node.children.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-2 pl-4">
                  {node.children.map((child) => (
                    <code
                      key={child}
                      className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-[10px] text-white/35"
                    >
                      {child}
                    </code>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </CaseStudySection>

      {/* Performance */}
      <CaseStudySection
        eyebrow="07"
        title="Performance"
        icon={<Gauge className="h-4 w-4" />}
      >
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          <PerformanceMetric label="LCP" value={project.performance.lcp} />
          <PerformanceMetric label="INP" value={project.performance.inp} />
          <PerformanceMetric label="CLS" value={project.performance.cls} />
          <PerformanceMetric
            label="Bundle Size"
            value={project.performance.bundleSize}
          />
        </div>

        <div className="mt-5">
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-widest text-white/25">
            Key Optimizations
          </p>

          <OptimizationList
            items={project.performance.keyOptimizations}
          />
        </div>
      </CaseStudySection>

      {/* Accessibility */}
      <CaseStudySection
        eyebrow="08"
        title="Accessibility"
        icon={<Accessibility className="h-4 w-4" />}
      >
        <div className="grid gap-3 sm:grid-cols-3">
          <PerformanceMetric
            label="WCAG"
            value={project.accessibility.wcagLevel}
          />

          <PerformanceMetric
            label="Screen Reader"
            value={project.accessibility.screenReaderScore}
          />

          <PerformanceMetric
            label="Keyboard Navigation"
            value={
              project.accessibility.keyboardNavTested
                ? "Tested"
                : "Not Tested"
            }
          />
        </div>

        <div className="mt-5">
          <OptimizationList items={project.accessibility.features} />
        </div>
      </CaseStudySection>

      {/* SEO */}
      <CaseStudySection
        eyebrow="09"
        title="SEO & Metadata"
        icon={<ShieldCheck className="h-4 w-4" />}
      >
        <div className="grid gap-4 md:grid-cols-3">
          <MetaPanel
            label="Structured Data"
            value={project.seoAndMetadata.structuredData}
          />

          <MetaPanel
            label="Open Graph"
            value={project.seoAndMetadata.openGraphStrategy}
          />

          <MetaPanel
            label="PageSpeed"
            value={`${project.seoAndMetadata.pageSpeedScore}/100`}
          />
        </div>
      </CaseStudySection>

      {/* Technical Challenges */}
      <CaseStudySection
        eyebrow="10"
        title="Technical Challenges"
        icon={<Wrench className="h-4 w-4" />}
      >
        <div className="space-y-6">
          {project.technicalChallenges.map((item, index) => (
            <article
              key={`${item.challenge}-${index}`}
              className="rounded-2xl border border-white/10 bg-white/[0.02] p-5"
            >
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-widest text-red-400/70">
                  Challenge
                </p>

                <p className="mt-2 text-sm leading-6 text-white/65">
                  {item.challenge}
                </p>
              </div>

              <div className="mt-5">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-emerald-400/70">
                  Solution
                </p>

                <p className="mt-2 text-sm leading-6 text-white/50">
                  {item.solution}
                </p>
              </div>

              {item.codeSnippet && (
                <CodeSnippet
                  language={item.codeSnippet.language}
                  filename={item.codeSnippet.filename}
                  code={item.codeSnippet.code}
                />
              )}
            </article>
          ))}
        </div>
      </CaseStudySection>

      {/* Tech Stack */}
      <CaseStudySection
        eyebrow="11"
        title="Technology Stack"
        icon={<Code2 className="h-4 w-4" />}
      >
        <div className="space-y-4">
          {project.techStackDetails.map((detail) => (
            <div
              key={detail.category}
              className="rounded-xl border border-white/10 bg-white/[0.02] p-4"
            >
              <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                <div>
                  <h3 className="text-sm font-semibold text-white">
                    {detail.category}
                  </h3>

                  <p className="mt-2 max-w-2xl text-xs leading-5 text-white/40">
                    {detail.justification}
                  </p>
                </div>

                <div className="flex flex-wrap gap-1.5">
                  {detail.tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-md border border-white/10 bg-white/[0.03] px-2 py-1 text-[10px] font-mono text-white/45"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </CaseStudySection>

      {/* Results */}
      <CaseStudySection
        eyebrow="12"
        title="Results"
        icon={<Trophy className="h-4 w-4" />}
      >
        <div className="grid gap-3 md:grid-cols-2">
          {project.results.map((result) => (
            <div
              key={result}
              className="flex gap-3 rounded-xl border border-emerald-500/10 bg-emerald-500/[0.025] p-4"
            >
              <Trophy className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />

              <p className="text-xs leading-6 text-white/50">
                {result}
              </p>
            </div>
          ))}
        </div>
      </CaseStudySection>

      {/* Lessons */}
      <CaseStudySection
        eyebrow="13"
        title="Lessons Learned"
        icon={<Lightbulb className="h-4 w-4" />}
      >
        <div className="space-y-3">
          {project.lessonsLearned.map((lesson) => (
            <div
              key={lesson}
              className="flex gap-3 rounded-xl border border-amber-500/10 bg-amber-500/[0.025] p-4"
            >
              <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />

              <p className="text-xs leading-6 text-white/50">
                {lesson}
              </p>
            </div>
          ))}
        </div>
      </CaseStudySection>

      {/* Gallery */}
      {project.gallery.length > 0 && (
        <CaseStudySection
          eyebrow="14"
          title="Project Gallery"
          icon={<Layers3 className="h-4 w-4" />}
        >
          <div className="grid gap-3 sm:grid-cols-2">
            {project.gallery.map((image, index) => (
              <div
                key={`${image}-${index}`}
                className="flex aspect-video items-center justify-center rounded-2xl border border-white/10 bg-white/[0.02]"
              >
                <span className="font-mono text-xs text-white/20">
                  {image}
                </span>
              </div>
            ))}
          </div>
        </CaseStudySection>
      )}

      {/* Footer Actions */}
      <section className="flex flex-col gap-3 border-t border-white/10 pt-6 sm:flex-row">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-xs font-semibold text-white/70 transition-colors hover:border-white/20 hover:bg-white/[0.06] hover:text-white"
          >
            <Link className="h-4 w-4" />
            View Source
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        )}

        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-blue-600 px-4 py-3 text-xs font-semibold text-white transition-colors hover:bg-blue-500"
          >
            <ExternalLink className="h-4 w-4" />
            Live Project
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        )}
      </section>

      {/* Technology Tags */}
      <div className="flex flex-wrap gap-2 border-t border-white/10 pt-5">
        {project.techStack.map((technology) => (
          <span
            key={technology}
            className="rounded-full border border-white/10 bg-white/[0.02] px-3 py-1.5 text-[10px] font-mono text-white/35"
          >
            {technology}
          </span>
        ))}
      </div>
    </div>
  );
}

function CaseStudySection({
  eyebrow,
  title,
  icon,
  children,
}: {
  eyebrow: string;
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-5">
      <div className="flex items-center gap-3 border-b border-white/10 pb-3">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/5 text-blue-400">
          {icon}
        </span>

        <span className="text-[10px] font-mono text-white/20">
          {eyebrow}
        </span>

        <h2 className="text-sm font-semibold uppercase tracking-[0.15em] text-white/80">
          {title}
        </h2>
      </div>

      {children}
    </section>
  );
}

function CaseStudyCard({
  eyebrow,
  title,
  icon,
  children,
}: {
  eyebrow: string;
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
      <div className="flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-blue-500/20 bg-blue-500/5 text-blue-400">
          {icon}
        </span>

        <div>
          <span className="text-[9px] font-mono text-white/20">
            {eyebrow}
          </span>

          <h2 className="text-sm font-semibold uppercase tracking-wider text-white/75">
            {title}
          </h2>
        </div>
      </div>

      <div className="mt-5">{children}</div>
    </div>
  );
}

function MetaItem({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
      <p className="text-[9px] font-semibold uppercase tracking-widest text-white/25">
        {label}
      </p>

      <p className="mt-2 text-xs leading-5 text-white/55">
        {value}
      </p>
    </div>
  );
}

function PerformanceMetric({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
      <p className="text-[9px] font-semibold uppercase tracking-widest text-white/25">
        {label}
      </p>

      <p className="mt-2 text-lg font-bold text-white">{value}</p>
    </div>
  );
}

function OptimizationList({ items }: { items: string[] }) {
  return (
    <div className="space-y-2">
      {items.map((item) => (
        <div key={item} className="flex gap-2">
          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-400" />

          <p className="text-xs leading-5 text-white/45">
            {item}
          </p>
        </div>
      ))}
    </div>
  );
}

function MetaPanel({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.02] p-4">
      <p className="text-[9px] font-semibold uppercase tracking-widest text-white/25">
        {label}
      </p>

      <p className="mt-2 text-xs leading-5 text-white/50">
        {value}
      </p>
    </div>
  );
}

function CodeSnippet({
  language,
  filename,
  code,
}: {
  language: string;
  filename: string;
  code: string;
}) {
  return (
    <div className="mt-5 overflow-hidden rounded-xl border border-white/10 bg-[#050505]">
      <div className="flex items-center justify-between border-b border-white/10 bg-white/[0.02] px-4 py-2.5">
        <span className="text-[10px] font-mono text-white/40">
          {filename}
        </span>

        <span className="text-[9px] uppercase tracking-widest text-white/20">
          {language}
        </span>
      </div>

      <pre className="overflow-x-auto p-4 text-[11px] leading-6 text-white/50">
        <code>{code}</code>
      </pre>
    </div>
  );
}