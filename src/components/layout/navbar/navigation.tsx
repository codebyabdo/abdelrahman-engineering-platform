"use client";

import { motion } from "framer-motion";
import { Link, usePathname } from "@/i18n/navigation";

interface NavbarNavigationProps {
  scrolled: boolean;
}

const NAV_ITEMS = [
  {
    key: "home",
    href: "/",
  },
  {
    key: "projects",
    href: "/projects",
  },
  {
    key: "about",
    href: "/about",
  },
  {
    key: "architecture",
    href: "/architecture",
  },
  {
    key: "blog",
    href: "/blog",
  },
  {
    key: "contact",
    href: "/contact",
  },
] as const;

export function NavbarNavigation({
  scrolled,
}: NavbarNavigationProps) {
  const pathname = usePathname();

  return (
    <nav
      className={`pointer-events-auto hidden items-center gap-1 rounded-full border px-4 py-2 transition-all duration-300 md:flex ${
        scrolled
          ? "border-white/10 bg-[#050505]/90 shadow-2xl backdrop-blur-xl"
          : "border-white/5 bg-[#080808]/80 backdrop-blur-md"
      }`}
    >
      {NAV_ITEMS.map((item) => {
        const isActive = pathname === item.href;

        return (
          <Link
            key={item.key}
            href={item.href}
            className={`relative rounded-full px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest transition-colors ${
              isActive
                ? "text-white"
                : "text-white/40 hover:text-blue-400"
            }`}
          >
            {isActive && (
              <motion.div
                layoutId="activeNavIndicator"
                className="absolute inset-0 rounded-full border border-blue-500/50 bg-blue-600/20 shadow-sm"
                transition={{
                  type: "spring",
                  stiffness: 380,
                  damping: 30,
                }}
              />
            )}

            <span className="relative z-10">
              {item.key}
            </span>
          </Link>
        );
      })}
    </nav>
  );
}