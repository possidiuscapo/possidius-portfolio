"use client";
import { Description } from "@radix-ui/react-dialog";
import { title } from "process";
import React from "react";
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaFigma,
  FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

// about data
const about = {
  title: "About me",
  description:
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores cumque asperiores vero dolorem aliquam dicta? Expedita possimus nisi consectetur sed?",
    info :[
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
    ]
};

// experience data
const experiences = {
  icon: "/assets/resume/badge.svg",
  title: "My experience",
  description: "",
  items:[
    {
      company:"",
      position:"",
      duration:"",
    }
  ]
}

const Resume: React.FC = () => {
  return <div>Resume page</div>;
};

export default Resume;
