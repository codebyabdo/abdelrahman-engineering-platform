"use client";

import { Link } from "@/i18n/navigation";

export function NavbarBrand() {
  return (
    <Link
      href="/"
      className="pointer-events-auto flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
    >
      <div className="flex h-8 w-8 items-center justify-center rounded-sm bg-blue-600 text-xs font-bold tracking-tighter text-white shadow-lg shadow-blue-600/30 transition-colors group-hover:bg-blue-500">
        AA
      </div>

      <div className="hidden flex-col text-left sm:flex">
        <span className="text-sm font-bold tracking-tight text-white transition-colors group-hover:text-blue-400">
          Abd El-Rahman Adel
        </span>

        <span className="text-[10px] font-semibold uppercase tracking-widest text-white/50">
          Frontend Engineer
        </span>
      </div>
    </Link>
  );
}