import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaVuejs, FaSass, FaFigma, FaBootstrap, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs, SiNuxtdotjs, SiTypescript } from "react-icons/si";

const items = [
  { icon: <FaHtml5 />, name: "HTML5" },
  { icon: <FaCss3Alt />, name: "CSS3" },
  { icon: <FaJs />, name: "JavaScript" },
  { icon: <SiTypescript />, name: "TypeScript" },
  { icon: <FaReact />, name: "React" },
  { icon: <SiNextdotjs />, name: "Next.js" },
  { icon: <FaVuejs />, name: "Vue" },
  { icon: <SiNuxtdotjs />, name: "Nuxt" },
  { icon: <SiTailwindcss />, name: "Tailwind" },
  { icon: <FaBootstrap />, name: "Bootstrap" },
  { icon: <FaSass />, name: "Sass" },
  { icon: <FaFigma />, name: "Figma" },
  { icon: <FaGitAlt />, name: "Git" },
];

const SkillsMarquee = () => {
  return (
    <div className="relative py-6 border-y border-line/10 bg-fg/[0.02] -rotate-1 overflow-hidden">
      <div className="marquee-mask overflow-hidden">
        <ul className="flex w-max animate-marquee hover:[animation-play-state:paused]">
          {[...items, ...items].map((item, i) => (
            <li
              key={i}
              aria-hidden={i >= items.length}
              className="flex items-center gap-3 px-8 font-display text-2xl xl:text-3xl font-bold text-fg/30 hover:text-fg transition-colors"
            >
              <span className="text-accent">{item.icon}</span>
              {item.name}
              <span className="ml-8 text-coral text-xl">✦</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SkillsMarquee;
