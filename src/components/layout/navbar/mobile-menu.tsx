"use client";

import { AnimatePresence, motion } from "framer-motion";
import { FileText, X } from "lucide-react";

import { Link, usePathname } from "@/i18n/navigation";
import { useDialogs } from "@/providers/dialog-provider";

interface MobileMenuProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const NAV_ITEMS = [
  { key: "home", href: "/" },
  { key: "projects", href: "/projects" },
  { key: "about", href: "/about" },
  { key: "architecture", href: "/architecture" },
  { key: "blog", href: "/blog" },
  { key: "contact", href: "/contact" },
] as const;

export function MobileMenu({ open, onOpenChange }: MobileMenuProps) {
  const pathname = usePathname();

  const { openResume } = useDialogs();

  const handleClose = () => {
    onOpenChange(false);
  };

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.button
            type="button"
            aria-label={"closeMenu"}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={handleClose}
            className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm md:hidden"
          />

          {/* Drawer */}
          <motion.div
            id="mobile-navigation"
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{
              duration: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="pointer-events-auto relative z-50 mt-3 overflow-hidden rounded-2xl border border-white/10 bg-[#080808]/95 p-4 shadow-2xl backdrop-blur-2xl md:hidden"
          >
            {/* Header */}
            <div className="mb-3 flex items-center justify-between">
              <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/40">
                Menu
              </span>

              <button
                type="button"
                onClick={handleClose}
                aria-label={"closeMenu"}
                className="rounded-full border border-white/10 bg-white/3 p-2 text-white/50 transition-colors hover:border-white/20 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Navigation */}
            <nav
              aria-label={"mobileNavigation"}
              className="flex flex-col gap-1.5"
            >
              {NAV_ITEMS.map((item) => {
                const isActive =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.key}
                    href={item.href}
                    onClick={handleClose}
                    aria-current={isActive ? "page" : undefined}
                    className={`group flex items-center justify-between rounded-xl border px-4 py-3 text-sm font-medium transition-all ${
                      isActive
                        ? "border-blue-500/20 bg-blue-500/10 text-blue-400"
                        : "border-transparent text-white/60 hover:border-white/10 hover:bg-white/4 hover:text-white"
                    }`}
                  >
                    <span>{item.key}</span>

                    <span
                      className={`h-1.5 w-1.5 rounded-full transition-opacity ${
                        isActive
                          ? "bg-blue-400 opacity-100"
                          : "bg-white/30 opacity-0 group-hover:opacity-100"
                      }`}
                    />
                  </Link>
                );
              })}
            </nav>

            {/* Actions */}
            <div className="mt-4 flex items-center gap-2 border-t border-white/10 pt-4">
              <button
                type="button"
                onClick={openResume}
                className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-blue-500/30 bg-blue-500/10 px-4 py-2.5 text-xs font-semibold text-blue-400 transition-all hover:border-blue-500/50 hover:bg-blue-500/20 hover:text-blue-300"
              >
                <FileText className="h-3.5 w-3.5" />
                <span>resume</span>
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
