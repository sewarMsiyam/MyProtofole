"use client";

import CountUp from "react-countup";
import { motion } from "framer-motion";

const stats = [
  { num: 3, suffix: "+", text: "Years of experience" },
  { num: 24, suffix: "+", text: "Projects completed" },
  { num: 8, suffix: "", text: "Technologies mastered" },
  { num: 233, suffix: "", text: "Code commits" },
];

const Stats = () => {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((item, index) => (
        <motion.div
          key={item.text}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          className="card card-glow p-6 xl:p-7 overflow-hidden group"
        >
          <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-accent/10 blur-2xl group-hover:bg-coral/20 transition-colors duration-500" />
          <div className="font-display text-4xl xl:text-5xl font-extrabold tracking-tight">
            <CountUp end={item.num} duration={3} enableScrollSpy scrollSpyOnce />
            <span className="text-accent">{item.suffix}</span>
          </div>
          <p className="mt-2 text-sm text-muted">{item.text}</p>
        </motion.div>
      ))}
    </div>
  );
};

export default Stats;
