"use client";

import { Logo } from "@/components/shared/logo";
import Link from "next/link";

export function LogoBrand() {
  return (
    <Link
      href="/"
      className="pointer-events-auto flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/50 focus-visible:ring-offset-2 focus-visible:ring-offset-black"
    >
      <Logo className="h-8 w-auto"/>

      <div className="flex-col text-left flex">
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