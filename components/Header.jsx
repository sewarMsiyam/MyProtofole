"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { ThemeToggle } from "./theme-toggle";
import { navLinks } from "./navLinks";
import { cn } from "@/lib/utils";

// Tracks which section is currently in view so the nav can highlight it.
function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [ids]);

  return active;
}

const sectionIds = navLinks.map((l) => l.id);

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 pt-4">
      <div className="container mx-auto">
        <div
          className={cn(
            "flex justify-between items-center rounded-full pl-6 pr-3 py-3 transition-all duration-500",
            scrolled ? "glass shadow-card" : "border border-transparent"
          )}
        >
          <Link href="/#home" className="font-display text-2xl xl:text-3xl font-bold tracking-tight">
            sewar<span className="text-accent">Dev</span>
            <span className="font-mono text-coral">/&gt;</span>
          </Link>

          <div className="hidden xl:flex items-center gap-4">
            <Nav active={active} />
            <ThemeToggle />
            <Link
              href="/#contact"
              className="rounded-full bg-fg text-bg px-5 py-2.5 text-sm font-semibold hover:bg-accent transition-colors"
            >
              Hire me
            </Link>
          </div>

          <div className="xl:hidden flex items-center gap-2">
            <ThemeToggle />
            <MobileNav active={active} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
