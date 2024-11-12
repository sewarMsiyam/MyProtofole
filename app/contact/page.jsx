"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const contactInfo = [
  {
    icon: <FaPhoneAlt aria-hidden="true" />,
    title: "Phone",
    description: "+970 568 833 020",
    ariaLabel: "Phone number",
  },
  {
    icon: <FaEnvelope aria-hidden="true" />,
    title: "Email",
    description: "sewarsiyam1@gmail.com",
    ariaLabel: "Email address",
  },
  {
    icon: <FaMapMarkedAlt aria-hidden="true" />,
    title: "Address",
    description: "Gaza",
    ariaLabel: "Physical address",
  },
];

const ContactPage = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }} 
      animate={{ 
        opacity: 1, 
        transition: { 
          delay: 2.4, 
          duration: 0.4, 
          ease: "easeIn" 
        }
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-8">
          {/* Contact Form */}
          <div className="xl:flex-1 order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h1 className="text-4xl text-accent">Let&apos;s work together</h1>
              <p className="text-white/60">
                Let&apos;s collaborate on your next project. Fill out the form below and I&apos;ll get back to you as soon as possible.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input 
                  type="text" 
                  placeholder="First Name" 
                  aria-label="First Name"
                  required 
                />
                <Input 
                  type="text" 
                  placeholder="Last Name" 
                  aria-label="Last Name"
                  required 
                />
                <Input 
                  type="email" 
                  placeholder="Email Address" 
                  aria-label="Email Address"
                  required 
                />
                <Input 
                  type="tel" 
                  placeholder="Phone Number" 
                  aria-label="Phone Number"
                />
              </div>
              <Textarea 
                className="h-[200px]" 
                placeholder="Type your message here..." 
                aria-label="Message"
                required 
              />
              <Button 
                type="submit"
                size="lg" 
                className="max-w-52"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {contactInfo.map((item, index) => (
                <li 
                  key={index} 
                  className="flex items-center gap-6"
                  aria-labelledby={`contact-${index}`}
                >
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#2727272c] text-accent rounded-md flex justify-center items-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h2 
                      id={`contact-${index}`}
                      className="text-xl"
                    >
                      {item.description}
                    </h2>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactPage;