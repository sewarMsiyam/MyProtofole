'use client';

import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      <div className="relative w-[350px] h-[350px] xl:w-[500px] xl:h-[500px]">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: 1, 
            transition: { 
              delay: 0.05, 
              duration: 0.1, 
              ease: "easeInOut" 
            }
          }}
          className="absolute inset-0 z-10"
        >
          <div className="w-full h-full relative overflow-hidden rounded-full flex items-center justify-center">
            <Image 
              src="/assets/my.png" 
              priority 
              quality={100} 
              fill 
              alt="Ban" 
              className="object-contain scale-[1.2] "
              style={{
                transform: 'scale(1)',
                transformOrigin: 'center center'
              }}
            />
          </div>
        </motion.div>

        {/* Animated Circle Border */}
        <motion.svg 
          className="absolute inset-0 w-full h-full pointer-events-none z-20 " 
          viewBox="0 0 506 506" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.circle 
            cx="253" 
            cy="253" 
            r="250" 
            className="stroke-accent"
            strokeWidth="4" 
            fill="transparent"
            strokeLinecap="round" 
            strokeLinejoin="round" 
            initial={{ strokeDasharray: "24 10 0 0" }}
            animate={{ 
              strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
              rotate: [120, 360]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        </motion.svg>
      </div>
    </div>
  );
};

export default Photo;