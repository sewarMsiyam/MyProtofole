"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiDownload, FiArrowRight } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Typewriter from "@/components/Typewriter";
import SkillsMarquee from "@/components/SkillsMarquee";
import Resume from "@/components/pages/resume";
import Work from "@/components/pages/work";
import Contact from "@/components/pages/contact";

const roles = ["Front-end Developer", "React & Next.js Lover", "UI Craftswoman", "Vue & Nuxt Builder"];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: 0.1 + i * 0.1, ease: [0.22, 1, 0.36, 1] },
  }),
};

const Home = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (!showMessage) return;
    const timer = setTimeout(() => {
      setShowMessage(false);
      setMessage("");
    }, 3000); // الرسالة ستختفي بعد 3 ثوان
    return () => clearTimeout(timer);
  }, [showMessage]);

  const handleCvClick = () => {
    setShowMessage(true);
    if (clickCount === 0) {
      setMessage("متضغطش عليا، اضغط على الصورة 😊");
      setClickCount(1);
    } else {
      setMessage("لسا مش عاملة CV، استنى عليا 😅");
      setClickCount(0);
    }
  };

  return (
    <>
      {/* ---------- HERO ---------- */}
      <section id="home" className="relative pt-10 xl:pt-16 pb-20">
        <div className="container mx-auto">
          <div className="flex flex-col xl:flex-row items-center justify-between gap-12 xl:gap-8">
            <motion.div initial="hidden" animate="show" className="text-center xl:text-left order-2 xl:order-none max-w-[640px]">
              <motion.div variants={fadeUp} custom={0} className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-sm">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
                  <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-accent" />
                </span>
                Available for freelance work
              </motion.div>

              <motion.p variants={fadeUp} custom={1} className="mt-8 font-mono text-muted">
                Hello, I&apos;m 👋
              </motion.p>

              <motion.h1 variants={fadeUp} custom={2} className="h1 mt-2">
                Sewar <span className="gradient-text">Siyam</span>
              </motion.h1>

              <motion.div variants={fadeUp} custom={3} className="mt-5 font-mono text-lg xl:text-2xl text-fg/90 min-h-[2em]">
                <span className="text-coral">&gt; </span>
                <Typewriter words={roles} />
              </motion.div>

              <motion.p variants={fadeUp} custom={4} className="mt-6 text-muted text-lg max-w-[520px] mx-auto xl:mx-0">
                I excel at creating user-friendly and visually appealing interfaces, and I have experience with a
                variety of programming languages and technologies.
              </motion.p>

              <motion.div
                variants={fadeUp}
                custom={5}
                className="mt-10 flex flex-col sm:flex-row items-center justify-center xl:justify-start gap-4"
              >
                <Button asChild size="lg">
                  <Link href="#contact">
                    Let&apos;s talk
                    <FiArrowRight className="text-xl transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>

                <div className="relative">
                  <Button variant="outline" size="lg" onClick={handleCvClick}>
                    Download CV
                    <FiDownload className="text-xl" />
                  </Button>
                  {showMessage && (
                    <div
                      dir="rtl"
                      className="absolute top-full mt-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-fg text-bg px-4 py-1.5 text-sm animate-fade-in z-10"
                    >
                      {message}
                    </div>
                  )}
                </div>
              </motion.div>

              <motion.div variants={fadeUp} custom={6} className="mt-10 flex items-center justify-center xl:justify-start gap-4">
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">Find me on</span>
                <span className="h-px w-10 bg-line/20" />
                <Social
                  containerStyles="flex gap-3"
                  iconStyles="w-11 h-11 rounded-full border border-line/15 flex justify-center items-center text-fg/80 hover:bg-accent hover:text-bg hover:border-accent hover:-translate-y-1 transition-all duration-300"
                />
              </motion.div>
            </motion.div>

            <div className="order-1 xl:order-none">
              <Photo />
            </div>
          </div>

          <div className="mt-20 xl:mt-24">
            <Stats />
          </div>
        </div>
      </section>

      <SkillsMarquee />

      <section id="resume" className="pt-28 pb-16">
        <Resume />
      </section>

      <section id="work" className="py-16">
        <Work />
      </section>

      <section id="contact" className="pt-16">
        <Contact />
      </section>
    </>
  );
};

export default Home;
