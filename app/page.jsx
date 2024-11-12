"use client"

import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import Social from "@/components/Social";
import Photo from "@/components/Photo";
import Stats from "@/components/Stats";
import Resume from "@/components/pages/resume";
import Work from "@/components/pages/work";
import Contact from "@/components/pages/contact";
import { useState, useEffect } from 'react';

const Home = () => {
  const [showMessage, setShowMessage] = useState(false);
  const [clickCount, setClickCount] = useState(0);
  const [message, setMessage] = useState('');

  useEffect(() => {
    let timer;
    if (showMessage) {
      timer = setTimeout(() => {
        setShowMessage(false);
        setMessage('');
      }, 3000); // الرسالة ستختفي بعد 3 ثوان
    }
    return () => clearTimeout(timer);
  }, [showMessage]);

  const handleCvClick = () => {
    setClickCount(prev => prev + 1);
    setShowMessage(true);
    
    if (clickCount === 0) {
      setMessage("متضغطش عليا، اضغط على الصورة 😊");
    } else {
      setMessage("لسا مش عاملة CV، استنى عليا 😅");
      setClickCount(0); // إعادة العداد للصفر
    }
  };

  return (
    <>
      <section className="h-full mb-24">
        <div className="container mx-auto h-full">
          <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
            <div className="text-center xl:text-left order-2 xl:order-none">
              <span>Front-end Developer</span>
              <h1 className="h1 capitalize">
                Hello I&apos;m <br /> <span className="text-accent">SEWAR SIYAM</span>
              </h1>
              <p className="max-w-[500px] mb-9 text-justify text-primary/80 dark:text-white/80">
                I excel at creating user-friendly and visually appealing interfaces, and I have experience with a variety of programming languages and technologies.
              </p>

              <div className="flex flex-col gap-4">
                <div className="flex flex-col xl:flex-row items-center gap-8">
                  <div className="relative">
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="uppercase flex items-center gap-2"
                      onClick={handleCvClick}
                    >
                      <span>Download CV</span>
                      <FiDownload className="text-xl" />
                    </Button>
                    
                    {/* رسالة التنبيه */}
                    {showMessage && (
                      <div className="absolute top-full left-0 right-0 mt-2 text-accent text-sm animate-fade-in whitespace-nowrap">
                        {message}
                      </div>
                    )}
                  </div>
                  <div className="mb-8 xl:mb-0">
                    <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:text-primary hover:transition-all duration-500" />
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 xl:order-none mb-5 xl:mb-0">
              <Photo />
            </div>
          </div>
        </div>
        <Stats />
      </section>
      <section id="resume" className="mb-32">
        <Resume />
      </section>
      <section id="work">
        <Work />
      </section>
      <Contact />
    </>
  )
}

export default Home;