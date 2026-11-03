"use client";

import { useState } from "react";
import Link from "next/link";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Social from "./Social";
import { navLinks } from "./navLinks";

function MobileNav({ active }) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        aria-label="Open menu"
        className="w-10 h-10 rounded-full bg-accent text-bg flex justify-center items-center"
      >
        <HiOutlineMenuAlt3 className="text-xl" />
      </SheetTrigger>
      <SheetContent className="flex flex-col">
        <SheetTitle className="sr-only">Navigation</SheetTitle>
        <div className="mt-16 mb-12">
          <Link href="/#home" onClick={() => setOpen(false)} className="font-display text-3xl font-bold">
            sewar<span className="text-accent">Dev</span>
            <span className="font-mono text-coral">/&gt;</span>
          </Link>
        </div>
        <nav className="flex flex-col gap-2">
          {navLinks.map((link, i) => (
            <Link
              key={link.id}
              href={`/#${link.id}`}
              onClick={() => setOpen(false)}
              className={`group flex items-baseline gap-4 py-3 border-b border-line/10 font-display text-3xl font-bold capitalize transition-colors ${
                active === link.id ? "text-accent" : "text-fg hover:text-accent"
              }`}
            >
              <span className="font-mono text-xs text-coral">0{i + 1}</span>
              {link.name}
            </Link>
          ))}
        </nav>
        <div className="mt-auto pt-8">
          <Social
            containerStyles="flex gap-3"
            iconStyles="w-11 h-11 rounded-full border border-line/15 flex justify-center items-center text-fg/80 hover:text-accent hover:border-accent transition-colors"
          />
        </div>
      </SheetContent>
    </Sheet>
  );
}

export default MobileNav;
