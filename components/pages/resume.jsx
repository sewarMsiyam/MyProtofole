"use client";
import {
    FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaFigma,
    FaNodeJs,
    FaVuejs,
    FaSass,
    FaGit,
    FaGithub,
    FaTypo3 as FaTs,
    FaAdobe as FaXd,
    FaBootstrap,
    FaCss3Alt,
} from "react-icons/fa";


import { SiTailwindcss, SiNextdotjs, SiNuxtdotjs, SiTypescript, SiWebpack, SiAdobe, SiAdobexd, SiGithub } from "react-icons/si";
const about = {
    title: 'About me',
    description: 'Get a deeper look into who I am beyond my professional skills.',
    info: [
        {
            fieldName: "Name",
            fileldValue: "sewar siyam"
        },
        {
            fieldName: "Phone",
            fileldValue: "+970 568 833 020 "
        },
        {
            fieldName: "Experience",
            fileldValue: "3+ Years "
        },
        // {
        //     fieldName: "Experience",
        //     fileldValue: "3+ Years "
        // },
        // {
        //     fieldName: "Experience",
        //     fileldValue: "3+ Years "
        // },
        {
            fieldName: "Email",
            fileldValue: "sewarsiyam1@gmail.com"
        },
        {
            fieldName: "Freelance",
            fileldValue: "Available"
        },
        {
            fieldName: "Languages",
            fileldValue: "English , Arabic"
        },
    ]
}

const experience = {
    icon: '',
    title: 'Experience',
    description: 'A glimpse into my professional journey and past roles.',
    items: [
        {
            company: "sadeim Company",
            position: "Front-end Developer",
            duration: "Mar, 2024 - Present",
        },
        {
            company: "FreeLancer",
            position: "Front-end Developer",
            duration: "Mar, 2024 - Present",
        },
        {
            company: "C.W. Company",
            position: "Front-end Developer",
            duration: "Aug, 2023 - Mar, 2024",
        },
        {
            company: "Devun Company",
            position: "Front-end Developer",
            duration: "May, 2023 - Oct, 2023",
        },
        {
            company: "skyTech company",
            position: "web Design",
            duration: "Jul, 2022 - Oct, 2022",
        },
        {
            company: "Atyaf Company",
            position: "Front-end Developer",
            duration: "Apr, 2022 - May, 2022",
        },
    ]
}

const education = {
    icon: '',
    title: 'My Education',
    description: 'Key milestones in my academic and professional development',
    items: [
        {
            institution: "Gaza Training College (GTC- UNRWA)",
            degree: "Diploma - Programming and databases ",
            duration: "Sep, 2020 - Jul, 2022",
        },
        {
            institution: "Abdelmoaty Alrayes Vocational Secondary School for Girls",
            degree: "Web Developer",
            duration: "2018 - 2020",
        },
    ]
}

const skills = {
    icon: '',
    title: 'My Skills',
    description: 'A showcase of the technical and soft skills I bring to the table.',
    skillsList: [
        {
            icon: <FaHtml5 />,
            name: "Html 5",
        },
        {
            icon: <FaCss3Alt />,
            name: "css 3",
        },
        {
            icon: <FaJs />,
            name: "javaScript",
        },
        {
            icon: <FaBootstrap />,
            name: "Bootstrap",
        },
        {
            icon: <SiTailwindcss />,
            name: "TailwindCss",
        },
        {
            icon: <FaReact />,
            name: "React",
        },
        {
            icon: <SiNextdotjs />,
            name: "NextJs",
        },
        {
            icon: <SiTypescript />,
            name: "Typescript",
        },
        {
            icon: <FaVuejs />,
            name: "Vuejs",
        },
        {
            icon: <SiNuxtdotjs />,
            name: "NuxtJs",
        },
        {
            icon: <SiWebpack />,
            name: "Webpack",
        },
        {
            icon: <FaFigma />,
            name: "Figma",
        },
        {
            icon: <SiAdobexd />,
            name: "Adobe XD",
        },
        {
            icon: <SiGithub />,
            name: "GitHub",
        },
        {
            icon: <FaGit />,
            name: "git",
        },
        {
            icon: <FaSass />,
            name: "sass",
        },

    ]
}


import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const resume = () => {
    return (
        <div className="flex items-center justify-center py-12 xl:py-0">
            <div className="container mx-auto">



                <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
                    <div className="md:ww-full lg:w-[500px]">
                        <div className="text-center lg:text-start mb-5">
                            <h1 className="h2 font-bold mb-5">Why hire me?</h1>
                            <p className="max-w-[600px] text-dark/60 dark:text-white/60 mx-auto xl:mx-0">Discover what sets me apart and how I can add value to your team</p>
                        </div>
                        <TabsList className="flex flex-col w-full max-w-[300px] mx-auto xl:mx-0 gap-6">
                            <TabsTrigger value="experience"> Experience</TabsTrigger>
                            <TabsTrigger value="education">Education</TabsTrigger>
                            <TabsTrigger value="skills">Skills</TabsTrigger>
                            <TabsTrigger value="about">About me</TabsTrigger>
                        </TabsList>
                    </div>

                    <div className=" w-full">

                        <TabsContent value="experience" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{experience.title}</h3>
                                <p className="max-w-[600px] text-dark/60 dark:text-white/60 mx-auto xl:mx-0">{experience.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                        {
                                            experience.items.map((item, index) => {
                                                return (
                                                    <li key={index} className="bg-[#f3f3f3] dark:bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                        <span className="text-accent">{item.duration}</span>
                                                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-start">{item.position}</h3>
                                                        <div className="flex items-center gap-3">
                                                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                            <p className=" text-dark/60 dark:text-white/60">{item.company}</p>
                                                        </div>
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        <TabsContent value="education" className="w-full">
                            <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                <h3 className="text-4xl font-bold">{education.title}</h3>
                                <p className="max-w-[600px] text-dark/60 dark:text-white/60 mx-auto xl:mx-0">{education.description}</p>
                                <ScrollArea className="h-[400px]">
                                    <ul className="grid grid-cols-1 gap-[30px]">
                                        {
                                            education.items.map((item, index) => {
                                                return (
                                                    <li key={index} className="bg-[#f3f3f3] dark:bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1">
                                                        <span className="text-accent">{item.duration}</span>
                                                        <h3 className="text-xl  min-h-[60px] text-center lg:text-start">{item.degree}</h3>
                                                        <div className="flex items-center gap-3">
                                                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                                                            <p className=" text-dark/60 dark:text-white/60">{item.institution}</p>
                                                        </div>
                                                    </li>
                                                );
                                            })
                                        }
                                    </ul>
                                </ScrollArea>
                            </div>
                        </TabsContent>

                        <TabsContent value="skills" className="w-full h-full">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                                    <h3 className="text-4xl font-bold">{skills.title}</h3>
                                    <p className="max-w-[600px] text-dark/60 dark:text-white/60 mx-auto xl:mx-0">{skills.description}</p>
                                </div>
                                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 lg:gap-[30px]">
                                    {
                                        skills.skillsList.map((skill, index) => {
                                            return <li key={index}>
                                                <TooltipProvider delayDuration={100}>
                                                    <Tooltip>
                                                        <TooltipTrigger className="w-full h-[150px] bg-[#f3f3f3] dark:bg-[#232329] rounded-xl flex justify-center items-center group">
                                                            <div className="text-6xl group-hover:text-accent transition-all duration-300">
                                                                {skill.icon}
                                                            </div>
                                                        </TooltipTrigger>
                                                        <TooltipContent>
                                                            <p className="capitalize">{skill.name}</p>
                                                        </TooltipContent>
                                                    </Tooltip>
                                                </TooltipProvider>
                                            </li>
                                        })
                                    }
                                </ul>
                            </div>
                        </TabsContent>

                        <TabsContent value="about" className="w-full text-center xl:text-left">
                            <div className="flex flex-col gap-[30px]">
                                <div className="flex flex-col gap-[30px]">
                                    <h3 className="text-4xl font-bold">{about.title}</h3>
                                    <p className="max-w-[600px] text-dark/60 dark:text-white/60 mx-auto xl:mx-0">{about.description}</p>
                                </div>
                                <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0 mt-5">
                                    {about.info.map((item, index) => {
                                        return <li key={index} className="flex justify-center items-center xl:justify-start gap-4">
                                            <span className="text-dark/60 dark:text-white/60">{item.fieldName}</span>
                                            <span className="text-xl">{item.fileldValue}</span>
                                        </li>
                                    })}
                                </ul>
                            </div>
                        </TabsContent>
                    </div>
                </Tabs>
            </div>
        </div>
    )
}

export default resume
