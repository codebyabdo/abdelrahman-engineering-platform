"use client";

import type { ReactNode } from "react";
import {
  Accessibility,
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  CheckCircle2,
  Code2,
  ExternalLink,
  Gauge,
  Layers3,
  Lightbulb,
  Network,
  Search,
  ShieldCheck,
  Target,
  Trophy,
  Wrench,
  X,
} from "lucide-react";

import { ProjectCaseStudy } from "@/types/featured-projects-data";
import Image from "next/image";
import { FaGithub } from "react-icons/fa6";

interface ProjectDetailDialogProps {
  project: ProjectCaseStudy;
  previousProject?: ProjectCaseStudy;
  nextProject?: ProjectCaseStudy;
  onPrevious?: () => void;
  onNext?: () => void;
  onClose: () => void;
}

export function ProjectDetailDialog({
  project,
  previousProject,
  nextProject,
  onPrevious,
  onNext,
  onClose,
}: ProjectDetailDialogProps) {
  return (
    <div className="relative overflow-hidden bg-[#050505] text-white">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute -top-40 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative space-y-8 p-4 sm:p-6 lg:p-8">
        {/* =========================================================
            HERO
        ========================================================== */}
        <section className="relative overflow-hidden rounded-[22px] border border-white/10 bg-[#080808]">
          {/* Close */}
          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="group absolute right-4 top-4 z-20 flex h-9 w-9 items-center justify-center border border-white/10 bg-black/60 text-white/40 backdrop-blur-md transition-all hover:border-white/20 hover:bg-white/6 hover:text-white"
          >
            <X className="h-4 w-4 transition-transform group-hover:rotate-90" />
          </button>

          {/* Hero visual */}
          <div className="relative aspect-16/7 min-h-70 overflow-hidden bg-[#080808]">
            {/* Blue laser border / glow */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(37,99,235,0.18),transparent_55%)]" />

            <div className="pointer-events-none absolute inset-x-8 top-0 h-px bg-linear-to-r from-transparent via-blue-500/70 to-transparent" />

            {/* Optional project image */}
            {project.gallery?.[0] && (
              <Image
                src={project.gallery[0]}
                alt={project.title}
                fill
                className="absolute inset-0 h-full w-full object-cover opacity-70"
              />
            )}

            {/* Dark overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-[#050505] via-[#050505]/60 to-[#050505]/10" />

            {/* Hero content */}
            <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8 lg:p-10">
              <div className="space-y-4">
                {/* Meta */}
                <div className="flex flex-wrap items-center gap-2 font-mono text-[9px] font-bold uppercase tracking-[0.2em]">
                  <span className="text-blue-400">{project.role}</span>

                  <span className="text-white/20">•</span>

                  <span className="text-white/40">{project.duration}</span>

                  <span className="text-white/20">•</span>

                  <span className="text-white/40">{project.year}</span>
                </div>

                {/* Title */}
                <div>
                  <h1 className="max-w-5xl text-3xl font-black uppercase leading-[0.95] tracking-[-0.04em] text-white sm:text-5xl lg:text-6xl">
                    {project.title}
                  </h1>

                  <p className="mt-4 max-w-3xl text-xs font-medium leading-6 text-blue-300/80 sm:text-sm">
                    {project.tagline}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Hero footer */}
          <div className="flex flex-col gap-4 border-t border-white/10 bg-white/1.5 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-widest text-blue-400">
                {project.category}
              </span>

              {project.featured && (
                <span className="rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 font-mono text-[9px] font-bold uppercase tracking-widest text-emerald-400">
                  Featured System
                </span>
              )}
            </div>

            <span className="font-mono text-[9px] uppercase tracking-widest text-white/25">
              {project.clientOrCompany}
            </span>
          </div>
        </section>

        {/* =========================================================
            METRICS
        ========================================================== */}
        <section className="grid grid-cols-1 gap-3 sm:grid-cols-3">
          {project.metrics.map((metric) => (
            <MetricCard
              key={metric.label}
              label={metric.label}
              value={metric.value}
              change={metric.change}
              description={metric.description}
            />
          ))}
        </section>

        {/* =========================================================
            OVERVIEW
        ========================================================== */}
        <CaseStudySection
          eyebrow="01 / OVERVIEW"
          title="System Overview"
          icon={<Target className="h-4 w-4" />}
        >
          <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr]">
            <p className="max-w-3xl text-sm leading-7 text-white/50">
              {project.overview}
            </p>

            <div className="grid grid-cols-2 gap-2">
              <InfoTile
                label="Business Domain"
                value={project.businessDomain}
              />

              <InfoTile label="Duration" value={project.duration} />

              <InfoTile label="Role" value={project.role} />

              <InfoTile label="Year" value={project.year} />
            </div>
          </div>
        </CaseStudySection>

        {/* =========================================================
            PROBLEM / CONTEXT
        ========================================================== */}
        <div className="grid gap-3 md:grid-cols-2">
          <CaseStudyCard
            eyebrow="02"
            title="Problem Statement"
            icon={<Search className="h-4 w-4" />}
          >
            <p className="text-xs leading-6 text-white/45">
              {project.problemStatement}
            </p>
          </CaseStudyCard>

          <CaseStudyCard
            eyebrow="03"
            title="Business Context"
            icon={<BarChart3 className="h-4 w-4" />}
          >
            <p className="text-xs leading-6 text-white/45">
              {project.businessContext}
            </p>
          </CaseStudyCard>
        </div>

        {/* =========================================================
            RESPONSIBILITIES
        ========================================================== */}
        <CaseStudySection
          eyebrow="04 / EXECUTION"
          title="Responsibilities"
          icon={<CheckCircle2 className="h-4 w-4" />}
        >
          <div className="grid gap-2 md:grid-cols-2">
            {project.responsibilities.map((responsibility) => (
              <div
                key={responsibility}
                className="group flex gap-3 border border-white/5 bg-white/1.5 p-4 transition-colors hover:border-blue-500/20 hover:bg-blue-500/2"
              >
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-blue-400" />

                <p className="text-xs leading-6 text-white/45">
                  {responsibility}
                </p>
              </div>
            ))}
          </div>
        </CaseStudySection>

        {/* =========================================================
            ARCHITECTURE
        ========================================================== */}
        <CaseStudySection
          eyebrow="05 / ARCHITECTURE"
          title="Architecture Decisions"
          icon={<Network className="h-4 w-4" />}
        >
          <div className="space-y-2">
            {project.architectureDecisions.map((decision, index) => (
              <div
                key={decision.title}
                className="border border-white/5 bg-white/1.5 p-5"
              >
                <div className="flex gap-4">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center border border-blue-500/20 bg-blue-500/5 font-mono text-[10px] text-blue-400">
                    0{index + 1}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-bold uppercase tracking-wide text-white">
                      {decision.title}
                    </h3>

                    <div className="mt-4 grid gap-5 md:grid-cols-2">
                      <DataBlock label="Rationale" value={decision.rationale} />

                      <DataBlock label="Impact" value={decision.impact} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CaseStudySection>

        {/* =========================================================
            COMPONENT TREE
        ========================================================== */}
        <CaseStudySection
          eyebrow="06 / SYSTEM"
          title="Component Architecture"
          icon={<Code2 className="h-4 w-4" />}
        >
          <div className="grid gap-2">
            {project.componentTree.map((node, index) => (
              <div
                key={`${node.name}-${index}`}
                className="border border-white/5 bg-[#070707] p-4"
              >
                <div className="flex items-center gap-3">
                  <span className="h-1.5 w-1.5 rounded-full bg-blue-400 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />

                  <code className="font-mono text-xs text-blue-300">
                    {node.name || "Component"}
                  </code>
                </div>

                <p className="mt-2 pl-4 text-[11px] leading-5 text-white/35">
                  {node.description}
                </p>

                {node.children?.length ? (
                  <div className="mt-3 flex flex-wrap gap-1.5 pl-4">
                    {node.children.map((child) => (
                      <code
                        key={child}
                        className="border border-white/5 bg-white/2 px-2 py-1 font-mono text-[9px] text-white/30"
                      >
                        {child}
                      </code>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        </CaseStudySection>

        {/* =========================================================
            PERFORMANCE
        ========================================================== */}
        <CaseStudySection
          eyebrow="07 / PERFORMANCE"
          title="Performance Engineering"
          icon={<Gauge className="h-4 w-4" />}
        >
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            <MetricSmall label="LCP" value={project.performance.lcp} />
            <MetricSmall label="INP" value={project.performance.inp} />
            <MetricSmall label="CLS" value={project.performance.cls} />
            <MetricSmall
              label="Bundle"
              value={project.performance.bundleSize}
            />
          </div>

          <div className="mt-5 border-t border-white/5 pt-5">
            <p className="mb-3 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-white/25">
              Key Optimizations
            </p>

            <OptimizationList items={project.performance.keyOptimizations} />
          </div>
        </CaseStudySection>

        {/* =========================================================
            ACCESSIBILITY
        ========================================================== */}
        <CaseStudySection
          eyebrow="08 / ACCESSIBILITY"
          title="Accessibility"
          icon={<Accessibility className="h-4 w-4" />}
        >
          <div className="grid gap-2 sm:grid-cols-3">
            <MetricSmall label="WCAG" value={project.accessibility.wcagLevel} />

            <MetricSmall
              label="Screen Reader"
              value={project.accessibility.screenReaderScore}
            />

            <MetricSmall
              label="Keyboard"
              value={
                project.accessibility.keyboardNavTested
                  ? "TESTED"
                  : "NOT TESTED"
              }
            />
          </div>

          <div className="mt-5">
            <OptimizationList items={project.accessibility.features} />
          </div>
        </CaseStudySection>

        {/* =========================================================
            SEO
        ========================================================== */}
        <CaseStudySection
          eyebrow="09 / DISCOVERABILITY"
          title="SEO & Metadata"
          icon={<ShieldCheck className="h-4 w-4" />}
        >
          <div className="grid gap-2 md:grid-cols-3">
            <InfoTile
              label="Structured Data"
              value={project.seoAndMetadata.structuredData}
            />

            <InfoTile
              label="Open Graph"
              value={project.seoAndMetadata.openGraphStrategy}
            />

            <InfoTile
              label="PageSpeed"
              value={`${project.seoAndMetadata.pageSpeedScore}/100`}
            />
          </div>
        </CaseStudySection>

        {/* =========================================================
            CHALLENGES
        ========================================================== */}
        <CaseStudySection
          eyebrow="10 / ENGINEERING"
          title="Technical Challenges"
          icon={<Wrench className="h-4 w-4" />}
        >
          <div className="space-y-2">
            {project.technicalChallenges.map((item, index) => (
              <article
                key={`${item.challenge}-${index}`}
                className="border border-white/5 bg-white/1.5 p-5"
              >
                <div className="grid gap-5 md:grid-cols-2">
                  <DataBlock
                    label="Challenge"
                    value={item.challenge}
                    tone="red"
                  />

                  <DataBlock
                    label="Solution"
                    value={item.solution}
                    tone="emerald"
                  />
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

        {/* =========================================================
            STACK
        ========================================================== */}
        <CaseStudySection
          eyebrow="11 / STACK"
          title="Technology Stack"
          icon={<Code2 className="h-4 w-4" />}
        >
          <div className="space-y-2">
            {project.techStackDetails.map((detail) => (
              <div
                key={detail.category}
                className="border border-white/5 bg-white/1.5 p-4"
              >
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-white">
                      {detail.category}
                    </h3>

                    <p className="mt-2 max-w-2xl text-[11px] leading-5 text-white/35">
                      {detail.justification}
                    </p>
                  </div>

                  <div className="flex max-w-sm flex-wrap gap-1">
                    {detail.tools.map((tool) => (
                      <span
                        key={tool}
                        className="border border-white/5 bg-white/2 px-2 py-1 font-mono text-[9px] text-white/35"
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

        {/* =========================================================
            RESULTS
        ========================================================== */}
        <CaseStudySection
          eyebrow="12 / OUTCOME"
          title="Results"
          icon={<Trophy className="h-4 w-4" />}
        >
          <div className="grid gap-2 md:grid-cols-2">
            {project.results.map((result) => (
              <div
                key={result}
                className="flex gap-3 border border-emerald-500/10 bg-emerald-500/2 p-4"
              >
                <Trophy className="mt-0.5 h-4 w-4 shrink-0 text-emerald-400" />

                <p className="text-xs leading-6 text-white/45">{result}</p>
              </div>
            ))}
          </div>
        </CaseStudySection>

        {/* =========================================================
            LESSONS
        ========================================================== */}
        <CaseStudySection
          eyebrow="13 / LEARNINGS"
          title="Lessons Learned"
          icon={<Lightbulb className="h-4 w-4" />}
        >
          <div className="space-y-2">
            {project.lessonsLearned.map((lesson) => (
              <div
                key={lesson}
                className="flex gap-3 border border-amber-500/10 bg-amber-500/2 p-4"
              >
                <Lightbulb className="mt-0.5 h-4 w-4 shrink-0 text-amber-400" />

                <p className="text-xs leading-6 text-white/45">{lesson}</p>
              </div>
            ))}
          </div>
        </CaseStudySection>

        {/* =========================================================
            GALLERY
        ========================================================== */}
        {project.gallery.length > 0 && (
          <CaseStudySection
            eyebrow="14 / VISUALS"
            title="Project Gallery"
            icon={<Layers3 className="h-4 w-4" />}
          >
            <div className="grid gap-3 sm:grid-cols-2">
              {project.gallery.map((image, index) => (
                <div
                  key={`${image}-${index}`}
                  className="group relative aspect-video overflow-hidden border border-white/10 bg-[#080808]"
                >
                  <Image
                    src={image}
                    alt={`${project.title} preview ${index + 1}`}
                    fill
                    className="h-full w-full object-cover opacity-70 transition duration-500 group-hover:scale-105 group-hover:opacity-100"
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
                </div>
              ))}
            </div>
          </CaseStudySection>
        )}

        {/* =========================================================
            ACTIONS
        ========================================================== */}
        <section className="border-t border-white/10 pt-6">
          <div className="flex flex-col gap-2 sm:flex-row">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-1 items-center justify-center gap-2 border border-white/10 bg-white/2 px-4 py-3 font-mono text-[10px] font-bold uppercase tracking-widest text-white/50 transition-all hover:border-white/20 hover:bg-white/5 hover:text-white"
              >
                <FaGithub className="h-3.5 w-3.5"/>
                View Source
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            )}

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-1 items-center justify-center gap-2 bg-blue-600 px-4 py-3 font-mono text-[10px] font-bold uppercase tracking-widest text-white transition-all hover:bg-blue-500"
              >
                <ExternalLink className="h-3.5 w-3.5" />
                Live Project
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
              </a>
            )}

            <button
              type="button"
              onClick={onClose}
              className="group flex items-center justify-center gap-2 border border-white/10 bg-white/2 px-6 py-3 font-mono text-[10px] font-bold uppercase tracking-widest text-white/40 transition-all hover:border-red-500/20 hover:bg-red-500/3 hover:text-red-400"
            >
              <X className="h-3.5 w-3.5 transition-transform group-hover:rotate-90" />
              Close
            </button>
          </div>
        </section>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 border-t border-white/10 pt-5">
          {project.techStack.map((technology) => (
            <span
              key={technology}
              className="border border-white/5 bg-white/2 px-2.5 py-1 font-mono text-[9px] uppercase tracking-wider text-white/30"
            >
              #{technology}
            </span>
          ))}
        </div>
        {/* =========================================================
    PROJECT NAVIGATION
========================================================= */}
        <section className="border-t border-white/10 pt-5">
          <div className="mb-3 flex items-center justify-between">
            <span className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-white/20">
              Project Navigation
            </span>

            <span className="font-mono text-[8px] uppercase tracking-widest text-blue-400/40">
              Browse Case Studies
            </span>
          </div>

          <div className="grid gap-2 sm:grid-cols-2">
            {/* Previous */}
            {previousProject ? (
              <button
                type="button"
                onClick={onPrevious}
                disabled={!onPrevious}
                className="group relative flex min-h-20 items-center gap-4 border border-white/10 bg-white/1.5 p-4 text-left transition-all hover:border-blue-500/30 hover:bg-blue-500/2.5 disabled:cursor-default"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/10 bg-black text-white/30 transition-colors group-hover:border-blue-500/30 group-hover:text-blue-400">
                  <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-0.5" />
                </div>

                <div className="min-w-0">
                  <p className="font-mono text-[8px] font-bold uppercase tracking-[0.2em] text-white/20">
                    Previous Project
                  </p>

                  <p className="mt-1 truncate text-xs font-bold uppercase tracking-wide text-white/65 transition-colors group-hover:text-white">
                    {previousProject.title}
                  </p>

                  <p className="mt-1 truncate font-mono text-[8px] uppercase tracking-wider text-blue-400/40">
                    {previousProject.category}
                  </p>
                </div>
              </button>
            ) : (
              <div className="hidden border border-white/5 bg-white/1 p-4 sm:block">
                <span className="font-mono text-[8px] uppercase tracking-widest text-white/10">
                  No Previous Project
                </span>
              </div>
            )}

            {/* Next */}
            {nextProject ? (
              <button
                type="button"
                onClick={onNext}
                disabled={!onNext}
                className="group relative flex min-h-20 items-center justify-end gap-4 border border-white/10 bg-white/1.5 p-4 text-right transition-all hover:border-blue-500/30 hover:bg-blue-500/2.5 disabled:cursor-default"
              >
                <div className="min-w-0">
                  <p className="font-mono text-[8px] font-bold uppercase tracking-[0.2em] text-white/20">
                    Next Project
                  </p>

                  <p className="mt-1 truncate text-xs font-bold uppercase tracking-wide text-white/65 transition-colors group-hover:text-white">
                    {nextProject.title}
                  </p>

                  <p className="mt-1 truncate font-mono text-[8px] uppercase tracking-wider text-blue-400/40">
                    {nextProject.category}
                  </p>
                </div>

                <div className="flex h-9 w-9 shrink-0 items-center justify-center border border-white/10 bg-black text-white/30 transition-colors group-hover:border-blue-500/30 group-hover:text-blue-400">
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                </div>
              </button>
            ) : (
              <div className="hidden border border-white/5 bg-white/1 p-4 text-right sm:block">
                <span className="font-mono text-[8px] uppercase tracking-widest text-white/10">
                  No Next Project
                </span>
              </div>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

/* ===============================================================
   REUSABLE UI
================================================================ */

function CaseStudySection({
  eyebrow,
  title,
  icon,
  children,
}: {
  eyebrow: string;
  title: string;
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <section className="space-y-4">
      <div className="flex items-center gap-3 border-b border-white/10 pb-3">
        <span className="flex h-7 w-7 items-center justify-center border border-blue-500/20 bg-blue-500/5 text-blue-400">
          {icon}
        </span>

        <span className="font-mono text-[9px] font-bold tracking-[0.2em] text-blue-400/50">
          {eyebrow}
        </span>

        <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-white/70">
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
  icon: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className="border border-white/10 bg-white/1.5 p-5">
      <div className="flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center border border-blue-500/20 bg-blue-500/5 text-blue-400">
          {icon}
        </span>

        <div>
          <p className="font-mono text-[9px] text-white/20">{eyebrow}</p>

          <h2 className="text-xs font-bold uppercase tracking-wider text-white/70">
            {title}
          </h2>
        </div>
      </div>

      <div className="mt-5">{children}</div>
    </div>
  );
}

function MetricCard({
  label,
  value,
  change,
  description,
}: {
  label: string;
  value: string;
  change?: string;
  description: string;
}) {
  return (
    <div className="group relative overflow-hidden border border-white/10 bg-[#080808] p-5 transition-colors hover:border-blue-500/30">
      <div className="absolute left-0 top-0 h-px w-0 bg-blue-500 transition-all duration-300 group-hover:w-full" />

      <p className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-white/30">
        {label}
      </p>

      <p className="mt-2 font-mono text-2xl font-black tracking-tight text-blue-400">
        {value}
      </p>

      {change && (
        <p className="mt-1 font-mono text-[9px] font-bold uppercase tracking-widest text-emerald-400">
          {change}
        </p>
      )}

      <p className="mt-3 text-[10px] leading-5 text-white/30">{description}</p>
    </div>
  );
}

function MetricSmall({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-white/5 bg-white/1.5 p-4">
      <p className="font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-white/25">
        {label}
      </p>

      <p className="mt-2 font-mono text-lg font-bold text-white">{value}</p>
    </div>
  );
}

function InfoTile({ label, value }: { label: string; value: string }) {
  return (
    <div className="border border-white/5 bg-white/1.5 p-3">
      <p className="font-mono text-[8px] font-bold uppercase tracking-[0.15em] text-white/20">
        {label}
      </p>

      <p className="mt-1 text-[10px] leading-5 text-white/45">{value}</p>
    </div>
  );
}

function DataBlock({
  label,
  value,
  tone = "blue",
}: {
  label: string;
  value: string;
  tone?: "blue" | "red" | "emerald";
}) {
  const colors = {
    blue: "text-blue-400",
    red: "text-red-400/70",
    emerald: "text-emerald-400/70",
  };

  return (
    <div>
      <p
        className={`font-mono text-[9px] font-bold uppercase tracking-[0.18em] ${colors[tone]}`}
      >
        {label}
      </p>

      <p className="mt-2 text-xs leading-6 text-white/40">{value}</p>
    </div>
  );
}

function OptimizationList({ items }: { items: string[] }) {
  return (
    <div className="space-y-2">
      {items.map((item) => (
        <div
          key={item}
          className="flex gap-2 border-b border-white/5 pb-2 last:border-0"
        >
          <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-blue-400" />

          <p className="text-[11px] leading-5 text-white/40">{item}</p>
        </div>
      ))}
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
    <div className="mt-5 overflow-hidden border border-white/10 bg-[#030303]">
      <div className="flex items-center justify-between border-b border-white/10 bg-white/2 px-4 py-2">
        <span className="font-mono text-[9px] text-white/35">{filename}</span>

        <span className="font-mono text-[8px] uppercase tracking-widest text-blue-400/50">
          {language}
        </span>
      </div>

      <pre className="overflow-x-auto p-4 font-mono text-[10px] leading-6 text-white/45">
        <code>{code}</code>
      </pre>
    </div>
  );
}
