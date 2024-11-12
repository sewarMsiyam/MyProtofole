'use client';

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from 'react';

const Photo = () => {
  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    let timer;
    if (showMessage) {
      timer = setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    }
    return () => clearTimeout(timer);
  }, [showMessage]);

  const handlePhotoClick = () => {
    setShowMessage(true);
  };

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
          onClick={handlePhotoClick}
        >
          <div className="w-full h-full relative overflow-hidden rounded-full flex items-center justify-center cursor-pointer hover:scale-[0.99] transition-transform duration-200">
            <Image 
              src="/assets/my.png" 
              priority 
              quality={100} 
              fill 
              alt="Ban" 
              className="object-contain scale-[1.2]"
              style={{
                transform: 'scale(1)',
                transformOrigin: 'center center'
              }}
            />
          </div>
        </motion.div>

        {/* Animated Circle Border */}
        <motion.svg 
          className="absolute inset-0 w-full h-full pointer-events-none z-20" 
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

        {/* رسالة التنبيه */}
        {showMessage && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="absolute -bottom-16 left-1/2 -translate-x-1/2 whitespace-nowrap"
          >
            <div className="flex flex-col items-center gap-2">
              <motion.div
                animate={{ 
                  scale: [1, 1.1, 1],
                  rotate: [-5, 5, -5, 5, 0]
                }}
                transition={{
                  duration: 0.5,
                  repeat: Infinity,
                  repeatDelay: 0.5
                }}
                className="text-accent text-base font-medium bg-white/5 backdrop-blur-sm px-4 py-2 rounded-full border border-accent/20 shadow-lg"
              >
                متضغطش عليا بعيط 😢
              </motion.div>
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{
                  duration: 1,
                  repeat: Infinity
                }}
                className="text-accent"
              >
                ↑
              </motion.div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Photo;