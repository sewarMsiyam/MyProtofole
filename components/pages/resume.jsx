"use client";

import { FaHtml5, FaJs, FaReact, FaFigma, FaVuejs, FaSass, FaGit, FaBootstrap, FaCss3Alt } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiNuxtdotjs, SiTypescript, SiWebpack, SiAdobexd, SiGithub } from "react-icons/si";
import { FiBriefcase, FiBookOpen, FiCode, FiUser } from "react-icons/fi";
import { motion } from "framer-motion";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import SectionHeading from "@/components/SectionHeading";

const about = {
  title: "About me",
  description: "Get a deeper look into who I am beyond my professional skills.",
  info: [
    { fieldName: "Name", fieldValue: "Sewar Siyam" },
    { fieldName: "Phone", fieldValue: "+970 568 833 020" },
    { fieldName: "Experience", fieldValue: "3+ Years" },
    { fieldName: "Email", fieldValue: "sewarsiyam1@gmail.com" },
    { fieldName: "Freelance", fieldValue: "Available" },
    { fieldName: "Languages", fieldValue: "English, Arabic" },
  ],
};

const experience = {
  title: "Experience",
  description: "A glimpse into my professional journey and past roles.",
  items: [
    { company: "Sadeim Company", position: "Front-end Developer", duration: "Mar, 2024 - Present" },
    { company: "Freelancer", position: "Front-end Developer", duration: "Mar, 2024 - Present" },
    { company: "C.W. Company", position: "Front-end Developer", duration: "Aug, 2023 - Mar, 2024" },
    { company: "Devun Company", position: "Front-end Developer", duration: "May, 2023 - Oct, 2023" },
    { company: "SkyTech Company", position: "Web Design", duration: "Jul, 2022 - Oct, 2022" },
    { company: "Atyaf Company", position: "Front-end Developer", duration: "Apr, 2022 - May, 2022" },
  ],
};

const education = {
  title: "My Education",
  description: "Key milestones in my academic and professional development.",
  items: [
    {
      institution: "Gaza Training College (GTC - UNRWA)",
      degree: "Diploma - Programming and Databases",
      duration: "Sep, 2020 - Jul, 2022",
    },
    {
      institution: "Abdelmoaty Alrayes Vocational Secondary School for Girls",
      degree: "Web Developer",
      duration: "2018 - 2020",
    },
  ],
};

const skills = {
  title: "My Skills",
  description: "A showcase of the technical skills I bring to the table.",
  skillsList: [
    { icon: <FaHtml5 />, name: "HTML 5" },
    { icon: <FaCss3Alt />, name: "CSS 3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <FaVuejs />, name: "Vue.js" },
    { icon: <SiNuxtdotjs />, name: "Nuxt.js" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <FaBootstrap />, name: "Bootstrap" },
    { icon: <FaSass />, name: "Sass" },
    { icon: <SiWebpack />, name: "Webpack" },
    { icon: <FaFigma />, name: "Figma" },
    { icon: <SiAdobexd />, name: "Adobe XD" },
    { icon: <SiGithub />, name: "GitHub" },
    { icon: <FaGit />, name: "Git" },
  ],
};

const tabs = [
  { value: "experience", label: "Experience", icon: <FiBriefcase />, count: experience.items.length },
  { value: "education", label: "Education", icon: <FiBookOpen />, count: education.items.length },
  { value: "skills", label: "Skills", icon: <FiCode />, count: skills.skillsList.length },
  { value: "about", label: "About me", icon: <FiUser /> },
];

const PanelHeader = ({ title, description }) => (
  <div className="mb-8 text-center xl:text-left">
    <h3 className="font-display text-3xl xl:text-4xl font-bold">{title}</h3>
    <p className="mt-2 text-muted max-w-[560px] mx-auto xl:mx-0">{description}</p>
  </div>
);

const Timeline = ({ items, render }) => (
  <ol className="relative ml-3 border-l border-dashed border-line/20">
    {items.map((item, index) => (
      <motion.li
        key={index}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: index * 0.06 }}
        className="relative pl-8 pb-6 last:pb-0"
      >
        <span className="absolute -left-[7px] top-7 h-3.5 w-3.5 rounded-full border-2 border-bg bg-accent ring-4 ring-accent/20" />
        <div className="card card-glow p-6 hover:-translate-y-0.5 transition-transform duration-300">{render(item, index)}</div>
      </motion.li>
    ))}
  </ol>
);

const Resume = () => {
  return (
    <div className="container mx-auto">
      <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-12 xl:gap-16">
        <div className="xl:w-[380px] xl:shrink-0 xl:sticky xl:top-32 xl:self-start">
          <SectionHeading
            index="01"
            eyebrow="Resume"
            title="Why hire"
            highlight="me?"
            description="Discover what sets me apart and how I can add value to your team."
            className="mb-8 xl:mb-10"
          />
          <TabsList className="grid grid-cols-2 xl:grid-cols-1 w-full gap-3">
            {tabs.map((tab) => (
              <TabsTrigger key={tab.value} value={tab.value}>
                <span className="text-lg">{tab.icon}</span>
                <span>{tab.label}</span>
                {tab.count && (
                  <span className="ml-auto hidden sm:inline font-mono text-xs opacity-70">
                    {String(tab.count).padStart(2, "0")}
                  </span>
                )}
              </TabsTrigger>
            ))}
          </TabsList>
        </div>

        <div className="w-full min-w-0">
          <TabsContent value="experience">
            <PanelHeader title={experience.title} description={experience.description} />
            <Timeline
              items={experience.items}
              render={(item) => (
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <div>
                    <h4 className="font-display text-xl font-semibold">{item.position}</h4>
                    <p className="mt-1 flex items-center gap-2 text-muted">
                      <span className="h-1.5 w-1.5 rounded-full bg-coral" />
                      {item.company}
                    </p>
                  </div>
                  <span className="chip self-start sm:self-center text-accent border-accent/30">{item.duration}</span>
                </div>
              )}
            />
          </TabsContent>

          <TabsContent value="education">
            <PanelHeader title={education.title} description={education.description} />
            <Timeline
              items={education.items}
              render={(item) => (
                <div>
                  <span className="chip text-accent border-accent/30">{item.duration}</span>
                  <h4 className="mt-4 font-display text-xl font-semibold">{item.degree}</h4>
                  <p className="mt-1 flex items-center gap-2 text-muted">
                    <span className="h-1.5 w-1.5 rounded-full bg-coral shrink-0" />
                    {item.institution}
                  </p>
                </div>
              )}
            />
          </TabsContent>

          <TabsContent value="skills">
            <PanelHeader title={skills.title} description={skills.description} />
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
              {skills.skillsList.map((skill, index) => (
                <motion.li
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: index * 0.03 }}
                  className="card card-glow group h-[130px] flex flex-col items-center justify-center gap-3 hover:-translate-y-1 transition-transform duration-300"
                >
                  <div className="text-5xl text-fg/70 group-hover:text-accent group-hover:scale-110 transition-all duration-300">
                    {skill.icon}
                  </div>
                  <span className="font-mono text-xs text-muted group-hover:text-fg transition-colors">{skill.name}</span>
                </motion.li>
              ))}
            </ul>
          </TabsContent>

          <TabsContent value="about">
            <PanelHeader title={about.title} description={about.description} />
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {about.info.map((item, index) => (
                <motion.li
                  key={item.fieldName}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="card card-glow p-5"
                >
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">{item.fieldName}</span>
                  <p className="mt-1 text-lg font-medium break-words">
                    {item.fieldName === "Freelance" && (
                      <span className="mr-2 inline-block h-2 w-2 rounded-full bg-accent align-middle" />
                    )}
                    {item.fieldValue}
                  </p>
                </motion.li>
              ))}
            </ul>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
};

export default Resume;
