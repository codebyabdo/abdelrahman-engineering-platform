"use client";

import { useEffect, useState } from "react";

import { NavbarBrand } from "./navbar-brand";
import { NavbarNavigation } from "./navigation";
import { NavbarActions } from "./navbar-actions";
import { MobileMenu } from "./mobile-menu";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="pointer-events-none fixed left-0 right-0 top-0 z-50 px-4 py-4 sm:px-6">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <NavbarBrand />

        <NavbarNavigation scrolled={scrolled} />

        <NavbarActions
          mobileMenuOpen={mobileMenuOpen}
          onToggleMobileMenu={() => setMobileMenuOpen((prev) => !prev)}
        />
      </div>

      <MobileMenu
        open={mobileMenuOpen}
        onOpenChange={setMobileMenuOpen}
      />
    </header>
  );
}