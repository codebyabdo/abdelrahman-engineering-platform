"use client";

import { ArrowUp, Mail, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

import { Link } from "@/i18n/navigation";
import { PERSONAL_INFO } from "@/lib/constants/personal-data";
import { FaGithub, FaLinkedinIn } from "react-icons/fa6";

export const Footer = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      const formattedTime = new Intl.DateTimeFormat("en-US", {
        timeZone: "Africa/Cairo",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      }).format(now);

      setTime(formattedTime);
    };

    updateClock();

    const timer = setInterval(updateClock, 1000);

    return () => clearInterval(timer);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navigation = [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/approach", label: "Approach" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ] as const;

  return (
    <footer className="relative border-t border-white/10">
      {/* Subtle backdrop */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div className="absolute bottom-0 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/5 blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-12 sm:px-8 sm:py-16 lg:px-10">

        {/* Main Footer */}
        <div className="grid gap-12 border-b border-white/10 pb-12 md:grid-cols-12">

          {/* Brand */}
          <div className="space-y-5 md:col-span-6">
            <div>
              <Link
                href="/"
                className="inline-flex items-center gap-3"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-blue-600 text-xs font-bold tracking-tight text-white shadow-lg shadow-blue-600/20">
                  AA
                </span>

                <div>
                  <p className="text-sm font-bold uppercase tracking-tight text-white">
                    Abd El-Rahman Adel
                  </p>

                  <p className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-blue-400">
                    Front-End Engineer
                  </p>
                </div>
              </Link>
            </div>

            <p className="max-w-md text-sm leading-7 text-white/45">
              Front-End Engineer focused on building scalable web applications,
              reusable interfaces, and polished digital experiences with
              React.js, Next.js, and TypeScript.
            </p>

            {/* Location / Time */}
            <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/2 px-3.5 py-2">
              <MapPin className="h-3.5 w-3.5 text-blue-400" />

              <span className="text-[10px] font-medium uppercase tracking-wider text-white/50">
                Cairo, Egypt
              </span>

              <span className="h-1 w-1 rounded-full bg-white/20" />

              <span className="font-mono text-[10px] text-white/40">
                {time || "--:--:--"}
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3">
            <h3 className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
              Navigation
            </h3>

            <nav>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-xs text-white/50 transition-colors hover:text-white"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* Connect */}
          <div className="md:col-span-3">
            <h3 className="mb-5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/30">
              Connect
            </h3>

            <div className="flex flex-wrap gap-2">
              <SocialLink
                href={`mailto:${PERSONAL_INFO.email}`}
                icon={<Mail className="h-3.5 w-3.5" />}
              >
                Email
              </SocialLink>

              <SocialLink
                href={PERSONAL_INFO.github}
                icon={<FaGithub className="h-3.5 w-3.5" />}
              >
                GitHub
              </SocialLink>

              <SocialLink
                href={PERSONAL_INFO.linkedin}
                icon={<FaLinkedinIn className="h-3.5 w-3.5" />}
              >
                LinkedIn
              </SocialLink>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col gap-5 pt-7 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-center text-[10px] uppercase tracking-wider text-white/25 sm:text-left">
            © {new Date().getFullYear()} Abd El-Rahman Adel. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Back to top"
            className="mx-auto inline-flex items-center gap-2 text-[10px] font-medium uppercase tracking-wider text-white/35 transition-colors hover:text-white sm:mx-0"
          >
            <span>Back to top</span>

            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-white/2">
              <ArrowUp className="h-3.5 w-3.5" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
};

// ============================================================
// Social Link
// ============================================================

function SocialLink({
  href,
  icon,
  children,
}: {
  href: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  const isExternal =
    href.startsWith("http://") ||
    href.startsWith("https://");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/2 px-3 py-2 text-[10px] font-medium uppercase tracking-wider text-white/45 transition-all hover:border-white/20 hover:bg-white/5 hover:text-white"
    >
      {icon}
      <span>{children}</span>
    </a>
  );
}