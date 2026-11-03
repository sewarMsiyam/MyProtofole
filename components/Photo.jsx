"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { FaReact, FaVuejs } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss } from "react-icons/si";

const floatingBadges = [
  { icon: <FaReact />, label: "React", className: "top-[8%] -left-2 xl:-left-6", delay: "0s" },
  { icon: <SiNextdotjs />, label: "Next.js", className: "top-[18%] -right-2 xl:-right-4", delay: "-1.5s" },
  { icon: <SiTailwindcss />, label: "Tailwind", className: "bottom-[22%] -left-4 xl:-left-10", delay: "-3s" },
  { icon: <FaVuejs />, label: "Vue", className: "bottom-[10%] -right-2 xl:right-0", delay: "-4.5s" },
];

const blobShape = "42% 58% 70% 30% / 45% 45% 55% 55%";

const Photo = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    if (!showMessage) return;
    const timer = setTimeout(() => setShowMessage(false), 3000);
    return () => clearTimeout(timer);
  }, [showMessage]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.92 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
      className="relative w-[300px] h-[340px] sm:w-[360px] sm:h-[400px] xl:w-[460px] xl:h-[520px]"
    >
      {/* rotating dashed ring */}
      <svg
        aria-hidden="true"
        className="absolute inset-[-6%] w-[112%] h-[112%] animate-spin-slow text-accent/40"
        viewBox="0 0 200 200"
      >
        <circle cx="100" cy="100" r="96" fill="none" stroke="currentColor" strokeWidth="0.6" strokeDasharray="2 6" />
      </svg>

      {/* morphing gradient blob */}
      <div
        aria-hidden="true"
        className="absolute inset-x-[6%] bottom-0 top-[12%] animate-blob bg-gradient-to-br from-accent via-accent/70 to-coral shadow-glow"
        style={{ borderRadius: blobShape }}
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-[10%] bottom-[4%] top-[16%] animate-blob opacity-40 mix-blend-overlay bg-[radial-gradient(circle_at_30%_20%,white,transparent_60%)]"
        style={{ animationDelay: "-4s", borderRadius: blobShape }}
      />

      {/* portrait */}
      <button
        type="button"
        onClick={() => setShowMessage(true)}
        className="absolute inset-0 z-10 cursor-pointer active:scale-[0.98] transition-transform focus-visible:outline-offset-8"
        aria-label="Sewar's photo"
      >
        <Image
          src="/assets/my.png"
          priority
          quality={100}
          fill
          sizes="(min-width: 1200px) 460px, 360px"
          alt="Portrait of Sewar Siyam"
          className="object-contain object-bottom drop-shadow-[0_20px_30px_rgba(0,0,0,0.25)]"
        />
      </button>

      {/* floating tech badges */}
      {floatingBadges.map((b) => (
        <div
          key={b.label}
          className={`absolute z-20 ${b.className} animate-float`}
          style={{ animationDelay: b.delay }}
        >
          <div className="glass shadow-card rounded-2xl px-3 py-2 flex items-center gap-2 text-sm font-medium">
            <span className="text-accent text-lg">{b.icon}</span>
            <span className="hidden sm:inline">{b.label}</span>
          </div>
        </div>
      ))}

      {/* playful message */}
      <AnimatePresence>
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.9 }}
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 z-30 whitespace-nowrap"
          >
            <motion.div
              animate={{ rotate: [-3, 3, -3, 3, 0] }}
              transition={{ duration: 0.5, repeat: Infinity, repeatDelay: 0.5 }}
              className="rounded-full bg-fg text-bg px-5 py-2 text-base font-medium shadow-lg"
              dir="rtl"
            >
              متضغطش عليا بعيط 😢
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Photo;
