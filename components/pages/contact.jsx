"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {FaPhoneAlt,FaEnvelope , FaMapMarkedAlt} from "react-icons/fa";

const info=[
  {
    icon:<FaPhoneAlt />,
    title:"Phone",
    description:"+970 568 833 020",
  },
  {
    icon:<FaEnvelope />,
    title:"Email",
    description:"sewarsiyam1@gmail.com",
  },
  {
    icon:<FaMapMarkedAlt />,
    title:"Address",
    description:"gaza",
  },
]

import { Textarea } from "@/components/ui/textarea"

const contact = () => {
  return (
    <section id="contact" className="py-6">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">

          <div className="xl:h-[54%] order-2 xl:order-none">
            <form className="flex flex-col gap-6 p-10 bg-[#f3f3f3] dark:bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">Let&apos;s work together</h3>
              <p className="text-dark/60 dark:text-white/60">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. A alias deleniti sed sapiente cupiditate suscipit veritatis, dolorum amet voluptate quas hic repellendus voluptatibus mollitia quam facere placeat natus! Exercitationem, velit.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="fistname" placeholder="name" />
                <Input type="lastname" placeholder="last Name" />
                <Input type="email" placeholder="Email address" />
                <Input type="phone" placeholder="Phone" />
              </div>
              <Textarea className="h-[200px]" placeholder="type your message" />
              <Button size="lg" className="max-w-52 ">Send Massage</Button>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index)=>{
                return <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#f3f3f3] dark:bg-[#2727272c] text-accent rounded-md flex justify-center items-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-dark/60 dark:text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              })}
            </ul>
          </div>

        </div>
      </div>
    </section>
  )
}

export default contact;
