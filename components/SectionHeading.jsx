"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const SectionHeading = ({ index, eyebrow, title, highlight, description, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn("mb-12 xl:mb-16 text-center xl:text-left", className)}
    >
      <span className="eyebrow">
        <span className="text-coral">{index}</span>
        <span className="h-px w-8 bg-accent/60" />
        {eyebrow}
      </span>
      <h2 className="h2 mt-4">
        {title} {highlight && <span className="gradient-text">{highlight}</span>}
      </h2>
      {description && (
        <p className="mt-4 max-w-[560px] text-muted mx-auto xl:mx-0">{description}</p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
