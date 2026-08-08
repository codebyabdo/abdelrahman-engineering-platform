"use client";

import {
  FileText,
  Menu,
  X,
} from "lucide-react";
import { LanguageSwitcher } from "./lang-switcher";
import { useDialogs } from "@/providers/dialog-provider";


interface NavbarActionsProps {
  mobileMenuOpen: boolean;
  onToggleMobileMenu: () => void;

}

export function NavbarActions({
  mobileMenuOpen,
  onToggleMobileMenu,
}: NavbarActionsProps) {
  const {openResume} = useDialogs()
  return (
    <div className="pointer-events-auto flex items-center gap-2">

      {/* Resume */}
      <button
      onClick={openResume}
        type="button"
        className="hidden items-center gap-1.5 rounded-full border border-blue-500/40 bg-blue-600/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest text-blue-400 shadow-sm transition-all hover:bg-blue-600 hover:text-white xl:flex"
      >
        <FileText className="h-3.5 w-3.5" />
        <span>CV</span>
      </button>

      {/* Language */}
      <LanguageSwitcher />

      {/* Mobile Menu */}
      <button
        type="button"
        onClick={onToggleMobileMenu}
        aria-expanded={mobileMenuOpen}
        aria-controls="mobile-navigation"
        aria-label={
          mobileMenuOpen
            ? "Close mobile menu"
            : "Open mobile menu"
        }
        className="rounded-full border border-white/10 bg-white/3 p-2 text-white/70 transition-colors hover:text-white md:hidden"
      >
        {mobileMenuOpen ? (
          <X className="h-5 w-5" />
        ) : (
          <Menu className="h-5 w-5" />
        )}
      </button>
    </div>
  );
}