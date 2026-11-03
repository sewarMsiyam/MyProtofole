import Link from "next/link";
import Social from "./Social";
import { FiArrowUp } from "react-icons/fi";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative mt-24 border-t border-line/10">
      <div className="container mx-auto py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        <Link href="#home" className="font-display text-2xl font-bold tracking-tight">
          sewar<span className="text-accent">Dev</span>
          <span className="font-mono text-coral">/&gt;</span>
        </Link>

        <p className="text-sm text-muted text-center">
          © {currentYear} Sewar Siyam · Designed &amp; built with{" "}
          <span className="text-coral" aria-label="love">♥</span> in Gaza
        </p>

        <div className="flex items-center gap-3">
          <Social
            containerStyles="flex gap-3"
            iconStyles="w-10 h-10 rounded-full border border-line/10 flex justify-center items-center text-fg/70 hover:text-accent hover:border-accent/60 transition-colors"
          />
          <Link
            href="#home"
            aria-label="Back to top"
            className="w-10 h-10 rounded-full bg-accent text-bg flex justify-center items-center hover:-translate-y-1 transition-transform"
          >
            <FiArrowUp />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
