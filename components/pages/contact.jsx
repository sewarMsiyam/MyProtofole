"use client";

import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import SectionHeading from "@/components/SectionHeading";

const info = [
  { icon: <FaPhoneAlt />, title: "Phone", description: "+970 568 833 020", href: "tel:+970568833020" },
  { icon: <FaEnvelope />, title: "Email", description: "sewarsiyam1@gmail.com", href: "mailto:sewarsiyam1@gmail.com" },
  { icon: <FaMapMarkerAlt />, title: "Address", description: "Gaza, Palestine" },
];

const Contact = () => {
  const form = useRef();
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const result = await emailjs.sendForm("service_whfp98r", "template_fa2hfj6", form.current, "I0kFTZK5VScIRNEtx");

      if (result.text === "OK") {
        setStatus({ type: "success", message: "تم إرسال رسالتك بنجاح!, شكرا لك " });
        form.current.reset();
      }
    } catch (error) {
      console.error("Error:", error);
      setStatus({ type: "error", message: "حدث خطأ أثناء إرسال الرسالة. يرجى المحاولة مرة أخرى." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container mx-auto">
      <div className="card overflow-hidden p-6 sm:p-10 xl:p-14">
        {/* decorative glows */}
        <div aria-hidden="true" className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
        <div aria-hidden="true" className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-coral/15 blur-3xl" />

        <div className="relative grid grid-cols-1 xl:grid-cols-[1fr_1.3fr] gap-12 xl:gap-16">
          {/* left: pitch + info */}
          <div className="flex flex-col">
            <SectionHeading
              index="03"
              eyebrow="Contact"
              title="Let's work"
              highlight="together."
              description="Have a project in mind or just want to say hi? My inbox is always open — I'll get back to you as soon as possible."
              className="mb-10"
            />
            <ul className="flex flex-col gap-4">
              {info.map((item) => {
                const content = (
                  <>
                    <div className="w-12 h-12 shrink-0 rounded-2xl bg-accent/10 text-accent flex justify-center items-center text-lg group-hover:bg-accent group-hover:text-bg transition-colors">
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="font-mono text-xs uppercase tracking-[0.2em] text-muted">{item.title}</p>
                      <p className="text-lg font-medium break-words">{item.description}</p>
                    </div>
                  </>
                );
                return (
                  <li key={item.title}>
                    {item.href ? (
                      <a href={item.href} className="group flex items-center gap-4 rounded-2xl p-2 -m-2 hover:bg-fg/[0.03] transition-colors">
                        {content}
                      </a>
                    ) : (
                      <div className="group flex items-center gap-4 p-2 -m-2">{content}</div>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          {/* right: form */}
          <form ref={form} onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Input type="text" name="from_name" placeholder="First name" aria-label="First name" required />
              <Input type="text" name="last_name" placeholder="Last name" aria-label="Last name" required />
              <Input type="email" name="reply_to" placeholder="Email address" aria-label="Email address" required />
              <Input type="tel" name="phone_number" placeholder="Phone" aria-label="Phone" required />
            </div>
            <Textarea name="message" className="h-[200px]" placeholder="Tell me about your project…" aria-label="Message" required />

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mt-2">
              <Button type="submit" size="lg" disabled={isLoading} className="sm:w-auto w-full">
                {isLoading ? (
                  <>
                    <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send message
                    <FiSend className="transition-transform group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1" />
                  </>
                )}
              </Button>

              {status.message && (
                <div
                  role="status"
                  dir="rtl"
                  className={`text-sm py-2 px-4 rounded-full animate-fade-in ${
                    status.type === "success"
                      ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                      : "bg-red-500/10 text-red-600 dark:text-red-400"
                  }`}
                >
                  {status.message}
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
