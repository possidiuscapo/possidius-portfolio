"use client";
import { Description } from "@radix-ui/react-dialog";
import { title } from "process";
import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaPython,
  FaJava,
  FaPhp,
  FaReact,
  FaFigma,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiNextdotjs,
  SiVuedotjs,
  SiTypescript,
  SiAngular,
  SiLaravel,
  SiSpringboot,
  SiDjango,
} from "react-icons/si";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";

// about data
const about = {
  title: "About me",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores cumque asperiores vero dolorem aliquam dicta? Expedita possimus nisi consectetur sed?",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Possidius CAPO-CHICHI",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+229) 66 957 003",
    },
    {
      fieldName: "Experience",
      fieldValue: "2+ Years",
    },
    {
      fieldName: "Skype",
      fieldValue: "Possidius",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Beninois",
    },
    {
      fieldName: "Email",
      fieldValue: "possidiusc@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "French, English",
    },
  ],
};

// experience data
const experiences = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores cumque asperiores vero dolorem aliquam dicta? Expedita possimus nisi consectetur sed?",
  items: [
    {
      company: "GUNIVERS",
      position: "FullStack Developer",
      duration: "2024 - Present",
    },
    {
      company: "Freelance",
      position: "Graphic Designer",
      duration: "2022 - Present",
    },
    {
      company: "GUNIVERS",
      position: "FullStack Developer",
      duration: "2024 - Present",
    },
    {
      company: "Freelance",
      position: "Graphic Designer",
      duration: "2022 - Present",
    },
    {
      company: "GUNIVERS",
      position: "FullStack Developer",
      duration: "2024 - Present",
    },
    {
      company: "Freelance",
      position: "Graphic Designer",
      duration: "2022 - Present",
    },
    {
      company: "GUNIVERS",
      position: "FullStack Developer",
      duration: "2024 - Present",
    },
    {
      company: "Freelance",
      position: "Graphic Designer",
      duration: "2022 - Present",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores cumque asperiores vero dolorem aliquam dicta? Expedita possimus nisi consectetur sed?",
  items: [
    {
      institution: "GUNIVERS",
      degree: "FullStack Developer",
      duration: "2024 - Present",
    },
    {
      institution: "GUNIVERS",
      degree: "FullStack Developer",
      duration: "2024 - Present",
    },
    {
      institution: "GUNIVERS",
      degree: "FullStack Developer",
      duration: "2024 - Present",
    },
    {
      institution: "GUNIVERS",
      degree: "FullStack Developer",
      duration: "2024 - Present",
    },
    {
      institution: "GUNIVERS",
      degree: "FullStack Developer",
      duration: "2024 - Present",
    },
  ],
};

// skills data
const skills = {
  title: "My skills",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores cumque asperiores vero dolorem aliquam dicta? Expedita possimus nisi consectetur sed?",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javasript",
    },
    {
      icon: <FaJava />,
      name: "java",
    },
    {
      icon: <FaPython />,
      name: "python",
    },
    {
      icon: <FaPhp />,
      name: "php",
    },
    {
      icon: <FaReact />,
      name: "react.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "tailwindcss",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <SiAngular />,
      name: "angular.js",
    },
    {
      icon: <SiTypescript />,
      name: "TypeScript",
    },
    {
      icon: <SiVuedotjs />,
      name: "vue.js",
    },
    {
      icon: <SiLaravel />,
      name: "laravel",
    },
    {
      icon: <SiSpringboot />,
      name: "springboot",
    },
    {
      icon: <SiDjango />,
      name: "django",
    },
  ],
};

const Resume: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="lg:max-h-[80vh] flex items-center justify-center py-10  lg:py-0"
    >
      <div className="container mx-auto mt-6">
        <Tabs
          defaultValue="experience"
          className="flex flex-col lg:flex-row gap-[60px] "
        >
          <TabsList className="flex flex-col w-full max-w-[360px] lg:max-w-[280px] xl:max-w-[380px] mx-auto xl:mx-0 gap-6 ">
            <TabsTrigger value="experience">Exprerience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[70vh] w-full ">
            {/* Tabs experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col text-center lg:text-left">
                <h3 className="text-3xl xl:text-6xl font-bold my-4">
                  {experiences.title}{" "}
                </h3>
                <p className="max-w-[600px] text-white/60 text-[14px] xl:text-2xl mb-5 mx-auto lg:mx-0">
                  {experiences.description}
                </p>
                <ScrollArea className="h-[350px] xl:h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {experiences.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[150px] xl:h-[186px] py-6 px-10 rounded-xl felx flex-col justify-center items-center lg:items-start gap-2"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-sm max-w[260px] min-h[60px] text-center lg:text-left mb-5">
                            {item.position}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60 ">{item.company}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Tabs education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col text-center lg:text-left">
                <h3 className="text-3xl xl:text-6xl font-bold my-4">{education.title} </h3>
                <p className="max-w-[600px] text-white/60 text-[14px] xl:text-2xl mb-5 mx-auto lg:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[350px] xl:h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[150px] xl:h-[186px] py-6 px-10 rounded-xl felx flex-col justify-center items-center lg:items-start gap-2"
                        >
                          <span className="text-accent">{item.duration}</span>
                          <h3 className="text-sm max-w[260px] min-h[60px] text-center lg:text-left mb-5">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                            <p className="text-white/60 ">{item.institution}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>

            {/* Tabs skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-8 text-center lg:text-left mb-5">
                  <h3 className="text-3xl xl:text-6xl font-bold my-4">{skills.title}</h3>
                  <p className="max-w-[600px] text-[14px] xl:text-2xl text-white/60 mx-auto lg:mx-0 ">
                    {skills.description}
                  </p>
                </div>
                <ScrollArea className="h-[350px] xl:h-[400px]">
                  <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 xl:gap-8">
                    {skills.skillList.map((skill, index) => {
                      return (
                        <li key={index}>
                          <TooltipProvider delayDuration={100}>
                            <Tooltip>
                              <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                                <div className="text-6xl group-hover:text-accent transition-all duration-300 ">
                                  {skill.icon}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p className="capitalize">{skill.name} </p>
                              </TooltipContent>
                            </Tooltip>
                          </TooltipProvider>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            
            {/* Tabs about me */}
            <TabsContent
              value="about"
              className="w-full text-center lg:text-left"
            >
              <div className="flex flex-col gap-8 ">
                <h3 className="text-2xl xl:text-4xl font-bold ">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto lg:mx-0 text-[14px] xl:text-2xl">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-y-8 max-w-[620px] mx-auto lg:mx-0 ">
                  {about.info.map((item, index) => {
                    return (
                      <li className="flex items-center justify-center lg:justify-start gap-4" key={index}>
                        <span className="text-white/60 ">{item.fieldName} </span>
                        <span className="text-[14px]">{item.fieldValue} </span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
