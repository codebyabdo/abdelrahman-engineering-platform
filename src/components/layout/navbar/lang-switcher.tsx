"use client";

import { useState, useRef, useEffect } from "react";
import { Globe, Check } from "lucide-react";
import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/navigation";

const LOCALES = [
  {
    code: "en",
    label: "English",
    flag: "🇬🇧",
  },
  {
    code: "ar",
    label: "العربية",
    flag: "🇸🇦",
  },
] as const;

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close menu on Escape key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && open) {
        setOpen(false);
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [open]);

  const handleChange = (nextLocale: "en" | "ar") => {
    setOpen(false);
    router.replace(pathname, { locale: nextLocale });
  };

  const currentLocale = LOCALES.find((l) => l.code === locale);

  return (
    <div className="relative" ref={menuRef}>
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label="Change language"
        className="flex items-center gap-1 rounded-full border border-white/10 bg-white/5 px-2 py-1.5 font-mono text-[10px] uppercase tracking-widest text-white/70 transition-all hover:border-white/20 hover:text-white sm:gap-1.5 sm:px-3 sm:py-1.5"
      >
        <Globe className="h-3.5 w-3.5 text-blue-400 sm:h-4 sm:w-4" />
        <span className="hidden xs:inline">{currentLocale?.flag}</span>
        <span className="text-[10px] sm:text-[11px]">{locale.toUpperCase()}</span>
      </button>

      {open && (
        <>
          {/* Backdrop for mobile */}
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm sm:hidden"
            onClick={() => setOpen(false)}
          />

          <div
            role="menu"
            className="absolute right-0 z-50 mt-2 w-48 rounded-xl border border-white/10 bg-[#080808] p-1 shadow-2xl sm:w-44"
          >
            {LOCALES.map((item) => {
              const isActive = locale === item.code;

              return (
                <button
                  key={item.code}
                  type="button"
                  role="menuitem"
                  onClick={() => handleChange(item.code)}
                  className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-xs font-mono transition-colors sm:px-3 sm:py-1.5 ${
                    isActive
                      ? "bg-blue-600/20 font-bold text-blue-400"
                      : "text-white/60 hover:bg-white/5 hover:text-white"
                  }`}
                >
                  <span className="text-base sm:text-sm">{item.flag}</span>
                  <span className="flex-1">{item.label}</span>
                  <span className="text-[10px] text-white/30">
                    {item.code.toUpperCase()}
                  </span>
                  {isActive && (
                    <Check className="h-3.5 w-3.5 text-blue-400" />
                  )}
                </button>
              );
            })}
          </div>
        </>
      )}
    </div>
  );
}