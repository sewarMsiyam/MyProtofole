'use client';

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import { BsGithub, BsArrowUpRight } from 'react-icons/bs';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSlideBtns from "@/components/WorkSlideBtns";

const projects = [
  {
    num: "01",
    category: 'frontend',
    title: "project 1",
    description: "description",
    stack: [
      { name: "Html5" },
      { name: "css" },
      { name: "js" },
    ],
    image: '/assets/work/image.png',
    live: "",
    github: "",
  },
  {
    num: "02", // Fixed: changed 'name' to 'num' for consistency
    category: 'frontend',
    title: "project 1",
    description: "description",
    stack: [
      { name: "Html5" },
      { name: "css" },
      { name: "js" },
    ],
    image: '/assets/work/image.png',
    live: "",
    github: "",
  },
];

const Work = () => { // Capitalized component name
  const [activeProject, setActiveProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setActiveProject(projects[currentIndex]);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }} 
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" }
      }} 
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          {/* Project Info */}
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {activeProject.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {activeProject.category} project
              </h2>
              <p className="text-white/60">{activeProject.description}</p>
              <ul className="flex gap-4">
                {activeProject.stack.map((item, index) => (
                  <li key={index} className="text-xl text-accent">
                    {item.name}
                    {index !== activeProject.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20" />
              <div className="flex items-center gap-4">
                <Link href={activeProject.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={activeProject.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>GitHub Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>

          {/* Project Slider */}
          <div className="w-full xl:w-[50%]">
            <Swiper 
              spaceBetween={30} 
              slidesPerView={1} // Fixed typo: slidesPerviews -> slidesPerView
              className="xl:h-[520px] mb-12" 
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-[440px] relative group flex justify-center items-center bg-pink-50/20">
                    <div className="absolute top-0 bottom-0 w-full bg-black/10 z-10" />
                    <div className="relative w-full h-full">
                      <Image 
                        src={project.image}
                        fill
                        className="object-cover"
                        alt={`Project ${project.num} - ${project.title}`} // Added meaningful alt text
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
              <WorkSlideBtns 
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%-22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;