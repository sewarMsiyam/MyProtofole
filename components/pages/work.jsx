"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { BsGithub, BsArrowUpRight } from "react-icons/bs";
import SectionHeading from "@/components/SectionHeading";

const projects = [
  {
    num: "01",
    category: "Education platform",
    title: "Sewaar",
    description:
      "Sewaar is an online platform for private tutoring, helping students easily book expert tutors across school and university levels through a simple registration and booking process.",
    stack: ["Next.js", "Tailwind CSS", "Vercel"],
    image: "/assets/work/sewaar1.jpg",
    live: "https://www.sewaar.com/",
    github: "",
  },
  {
    num: "02",
    category: "E-commerce",
    title: "KAYA Shop",
    description:
      "KAYA is an interactive web project showcasing a dynamic and visually appealing design with a modern and minimalist approach. It offers an engaging user experience through animation effects and a clean layout.",
    stack: ["Bootstrap 5", "Swiper", "AOS"],
    image: "/assets/work/kaya_shoop.png",
    live: "https://sewarmsiyam.github.io/KAYA/",
    github: "https://github.com/sewarMsiyam/KAYA",
  },
  {
    num: "03",
    category: "Dashboard",
    title: "Highnox Hotel",
    description:
      "Highnox is a hotel management dashboard I built from scratch, designed to manage bookings and real-time data with an intuitive, user-friendly interface.",
    stack: ["Bootstrap", "Chart.js", "Datepicker"],
    image: "/assets/work/highnox.png",
    live: "https://sewarmsiyam.github.io/Highnox/",
    github: "https://github.com/sewarMsiyam/Highnox",
  },
  {
    num: "04",
    category: "Education platform",
    title: "Oloom Plus",
    description:
      "Oloom Plus is an educational platform offering interactive courses in subjects like science and mathematics, with a focus on enhancing student learning.",
    stack: ["Bootstrap 5", "Swiper", "AOS"],
    image: "/assets/work/oloomplus.png",
    live: "https://oloomplus.com/",
    github: "",
  },
];

const IconLink = ({ href, label, children }) => (
  <Link
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    title={label}
    className="w-11 h-11 rounded-full border border-line/15 bg-bg/60 backdrop-blur flex justify-center items-center text-lg text-fg hover:bg-accent hover:text-bg hover:border-accent transition-colors"
  >
    {children}
  </Link>
);

const ProjectCard = ({ project, index }) => {
  // first and last cards span the full row; the last one mirrors the layout
  const featured = index === 0 || index === projects.length - 1;
  const reversed = featured && index !== 0;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: (index % 2) * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className={`card card-glow group overflow-hidden flex flex-col ${
        featured ? `lg:col-span-2 ${reversed ? "lg:flex-row-reverse" : "lg:flex-row"}` : ""
      }`}
    >
      {/* image */}
      <Link
        href={project.live}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Open ${project.title} live`}
        className={`relative block overflow-hidden m-3 rounded-2xl bg-fg/5 ${
          featured ? "aspect-[16/10] lg:aspect-auto lg:w-[58%] lg:min-h-[400px]" : "aspect-[16/10]"
        }`}
      >
        <Image
          src={project.image}
          fill
          sizes={featured ? "(min-width: 960px) 700px, 100vw" : "(min-width: 960px) 560px, 100vw"}
          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
          alt={`Screenshot of ${project.title}`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        <span className="absolute bottom-4 left-4 inline-flex items-center gap-2 rounded-full bg-white text-black px-4 py-2 text-sm font-semibold opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
          View live <BsArrowUpRight />
        </span>
      </Link>

      {/* info */}
      <div className={`flex flex-col flex-1 p-6 pt-3 ${featured ? "lg:p-10 lg:justify-center" : ""}`}>
        <div className="flex items-center justify-between gap-4">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{project.category}</span>
          <span className="font-display text-5xl font-extrabold text-transparent text-outline leading-none opacity-40 group-hover:opacity-100 group-hover:text-outline-hover transition-opacity">
            {project.num}
          </span>
        </div>
        <h3 className={`mt-3 font-display font-bold tracking-tight ${featured ? "text-4xl xl:text-5xl" : "text-3xl"}`}>
          {project.title}
        </h3>
        <p className="mt-3 text-muted">{project.description}</p>
        <ul className="mt-5 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li key={tech} className="chip">
              {tech}
            </li>
          ))}
        </ul>
        <div className="mt-6 pt-6 border-t border-line/10 flex items-center gap-3">
          <IconLink href={project.live} label="Live project">
            <BsArrowUpRight />
          </IconLink>
          {project.github && (
            <IconLink href={project.github} label="GitHub repository">
              <BsGithub />
            </IconLink>
          )}
        </div>
      </div>
    </motion.article>
  );
};

const Work = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row xl:items-end xl:justify-between">
        <SectionHeading
          index="02"
          eyebrow="Selected work"
          title="Things I've"
          highlight="built."
          description="A few projects I designed and developed — from platforms to dashboards and online stores."
        />
        <Link
          href="https://github.com/sewarMsiyam"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden xl:inline-flex mb-16 items-center gap-2 font-mono text-sm text-fg/70 hover:text-accent transition-colors"
        >
          More on GitHub <BsArrowUpRight />
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <ProjectCard key={project.num} project={project} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Work;
