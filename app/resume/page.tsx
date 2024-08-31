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
      fieldValue: "possi capo",
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
      fieldValue: "Possidis",
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
      name: "html5",
    },
    {
      icon: <FaCss3 />,
      name: "css3",
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
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs>
          <TabsTrigger>Exprérience</TabsTrigger>
        </Tabs>
      </div>
    </motion.div>
  );
};

export default Resume;
