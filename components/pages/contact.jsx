"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { FaPhoneAlt, FaEnvelope, FaMapMarkedAlt } from "react-icons/fa";
import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "+970 568 833 020",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "sewarsiyam1@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "gaza",
  },
];

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: '', message: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await emailjs.sendForm(
        'service_whfp98r',
        'template_fa2hfj6',
        form.current,
        'I0kFTZK5VScIRNEtx'
      );

      if (result.text === 'OK') {
        setStatus({
          type: 'success',
          message: 'تم إرسال رسالتك بنجاح!, شكرا لك '
        });
        form.current.reset();
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus({
        type: 'error',
        message: 'حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى.'
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-6">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:h-[54%] order-2 xl:order-none">
            <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-6 p-10 bg-[#f3f3f3] dark:bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              <p className="text-dark/60 dark:text-white/60">
                {/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. */}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input 
                  type="text"
                  name="from_name"
                  placeholder="First Name"
                  required
                  className="focus:ring-accent/50"
                />
                <Input 
                  type="text"
                  name="last_name"
                  placeholder="Last Name"
                  required
                  className="focus:ring-accent/50"
                />
                <Input 
                  type="email"
                  name="reply_to"
                  placeholder="Email address"
                  required
                  className="focus:ring-accent/50"
                />
                <Input 
                  type="tel"
                  name="phone_number"
                  placeholder="Phone"
                  required
                  className="focus:ring-accent/50"
                />
              </div>
              <Textarea 
                name="message"
                className="h-[200px] focus:ring-accent/50"
                placeholder="Type your message"
                required
              />
              <div className="space-y-4">
                <Button 
                  type="submit" 
                  size="lg" 
                  className={`max-w-52 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span className="flex items-center gap-2">
                      <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    'Send Message'
                  )}
                </Button>
                
                {status.message && (
                  <div 
                    className={`text-sm mt-2 py-2 px-4 rounded-md ${
                      status.type === 'success' 
                        ? 'bg-green-50 text-green-500 dark:bg-green-900/10' 
                        : 'bg-red-50 text-red-500 dark:bg-red-900/10'
                    } transition-all duration-300 ease-in-out`}
                  >
                    {status.message}
                  </div>
                )}
              </div>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => {
                return (
                  <li key={index} className="flex items-center gap-6">
                    <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#f3f3f3] dark:bg-[#2727272c] text-accent rounded-md flex justify-center items-center">
                      <div className="text-[28px]">{item.icon}</div>
                    </div>
                    <div className="flex-1">
                      <p className="text-dark/60 dark:text-white/60">{item.title}</p>
                      <h3 className="text-xl">{item.description}</h3>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;