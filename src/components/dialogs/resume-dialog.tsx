"use client";

import {
  ArrowDownToLine,
  BriefcaseBusiness,
  ExternalLink,
  GraduationCap,
  Mail,
  MapPin,
  Terminal,
} from "lucide-react";

import { RESUME } from "@/lib/constants/resume-data";

export function ResumeDialog() {
  const { identity, summary, skills, experience, featuredProject, education, languages } = RESUME;

  return (
    <div className="mx-auto max-w-4xl space-y-8 px-4 py-6 sm:px-6">
      {/* Header */}
      <header className="border-b border-white/10 pb-6">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-blue-400">
              Front-End Engineer
            </p>
            <h1 className="mt-1 text-2xl font-semibold text-white sm:text-3xl">
              {identity.name}
            </h1>
            <p className="mt-1 text-sm text-white/45">{identity.specialization}</p>
          </div>

          <a
            href={identity.resumeUrl}
            download
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-sm text-white transition hover:border-blue-500/40 hover:bg-blue-500/10"
          >
            <ArrowDownToLine className="h-4 w-4" />
            Download CV
          </a>
        </div>

        <div className="mt-4 flex flex-wrap gap-4 text-sm text-white/45">
          <span className="flex items-center gap-1.5">
            <MapPin className="h-4 w-4 text-blue-400" />
            {identity.location}
          </span>
          <a href={`mailto:${identity.email}`} className="flex items-center gap-1.5 hover:text-white">
            <Mail className="h-4 w-4 text-blue-400" />
            {identity.email}
          </a>
          <a href={identity.github} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-white">
            GitHub
            <ExternalLink className="h-3 w-3" />
          </a>
          <a href={identity.linkedin} target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-white">
            LinkedIn
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>

        <div className="mt-4 inline-block rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 text-xs font-medium text-emerald-400">
          {identity.availability}
        </div>
      </header>

      {/* Summary */}
      <Section title="Profile" icon={<Terminal className="h-4 w-4" />}>
        <p className="text-sm leading-relaxed text-white/55">{summary}</p>
      </Section>

      {/* Experience */}
      <Section title="Experience" icon={<BriefcaseBusiness className="h-4 w-4" />}>
        <div className="space-y-6">
          {experience.map((item) => (
            <article key={`${item.company}-${item.role}-${item.project}`} className="border-l border-white/10 pl-4">
              <div className="flex flex-wrap items-start justify-between gap-2">
                <div>
                  <h3 className="font-medium text-white">{item.role}</h3>
                  <p className="text-sm text-blue-400">{item.company}</p>
                </div>
                <span className="text-xs text-white/30">{item.period}</span>
              </div>

              {item.project && <p className="mt-2 text-sm text-white/55">{item.project}</p>}

              {item.status && (
                <span className="mt-2 inline-block rounded-full border border-white/10 px-2 py-0.5 text-xs uppercase text-white/35">
                  {item.status}
                </span>
              )}

              <p className="mt-3 text-sm leading-relaxed text-white/50">{item.description}</p>

              <ul className="mt-3 space-y-1">
                {item.responsibilities.map((resp) => (
                  <li key={resp} className="flex gap-2 text-sm text-white/45">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-blue-400" />
                    {resp}
                  </li>
                ))}
              </ul>

              {item.techStack && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {item.techStack.map((tech) => (
                    <span key={tech} className="rounded bg-white/5 px-2 py-0.5 text-xs text-white/40">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section title="Technical Stack" icon={<Terminal className="h-4 w-4" />}>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div key={group.title} className="rounded-lg border border-white/10 p-4">
              <h3 className="text-xs font-medium uppercase tracking-wider text-white/50">
                {group.title}
              </h3>
              <div className="mt-2 flex flex-wrap gap-1.5">
                {group.skills.map((skill) => (
                  <span key={skill} className="rounded border border-white/10 px-2 py-1 text-xs text-white/45">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Featured Project */}
      <Section title="Featured Project" icon={<BriefcaseBusiness className="h-4 w-4" />}>
        <div className="rounded-lg border border-blue-500/20 bg-blue-500/5 p-5">
          <p className="text-xs font-medium uppercase tracking-wider text-blue-400">
            {featuredProject.subtitle}
          </p>
          <h3 className="mt-2 text-lg font-semibold text-white">{featuredProject.title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-white/50">{featuredProject.description}</p>
          <p className="mt-3 text-sm text-white/45">
            <span className="text-white/70">Role:</span> {featuredProject.role}
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {featuredProject.techStack.map((tech) => (
              <span key={tech} className="rounded bg-black/20 px-2 py-1 text-xs text-white/45">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Section>

      {/* Education */}
      <Section title="Education" icon={<GraduationCap className="h-4 w-4" />}>
        <div className="rounded-lg border border-white/10 p-4">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div>
              <h3 className="font-medium text-white">{education.degree}</h3>
              <p className="text-sm text-blue-400">{education.institution}</p>
              <p className="text-sm text-white/30">{education.location}</p>
            </div>
            <span className="text-xs text-white/30">{education.period}</span>
          </div>
        </div>
      </Section>

      {/* Languages */}
      <div className="flex flex-wrap gap-3 border-t border-white/10 pt-6">
        {languages.map((language) => (
          <div key={language.language} className="rounded-lg border border-white/10 px-4 py-3">
            <p className="text-sm font-medium text-white">{language.language}</p>
            <p className="text-xs text-white/35">{language.proficiency}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Section({
  title,
  icon,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-4">
      <div className="flex items-center gap-3 border-b border-white/10 pb-2">
        <div className="flex h-7 w-7 items-center justify-center rounded bg-white/5 text-blue-400">
          {icon}
        </div>
        <h2 className="text-sm font-medium uppercase tracking-wider text-white/70">{title}</h2>
      </div>
      {children}
    </section>
  );
}