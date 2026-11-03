"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { navLinks } from "./navLinks";

const Nav = ({ active }) => {
  return (
    <nav className="flex items-center gap-1 rounded-full border border-line/10 bg-fg/[0.03] p-1">
      {navLinks.map((link) => {
        const isActive = active === link.id;
        return (
          <Link
            key={link.id}
            href={`/#${link.id}`}
            aria-current={isActive ? "page" : undefined}
            className={`relative rounded-full px-4 py-2 text-sm font-medium capitalize transition-colors ${
              isActive ? "text-bg" : "text-fg/70 hover:text-fg"
            }`}
          >
            {isActive && (
              <motion.span
                layoutId="nav-pill"
                className="absolute inset-0 rounded-full bg-accent"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative z-10">{link.name}</span>
          </Link>
        );
      })}
    </nav>
  );
};

export default Nav;
