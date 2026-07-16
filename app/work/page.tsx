"use client";

import { motion } from "framer-motion";
import React, { use, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";



const projects = [
  {
    num: "01",
    category: "Frontend et Backend",
    title: "Application de location de voitures",
    description:
      "Développement d'une application web permettant la location de voitures avec fonctionnalités avancées pour propriétaires et locataires.",
    stack: [{ name: "Vue.js" }, { name: "Laravel" }, { name: "MySQL" }],
    image: "/assets/work/thumb1.png",
    live: "https://zoomaa.fr/",
    github: "",
  },
  {
    num: "02",
    category: "Frontend",
    title: "Site vitrine pour ARAD SARL",
    description:
      "Conception et développement d'un site vitrine moderne et responsive pour une entreprise spécialisée en services.",
    stack: [{ name: "Vue.js" }, { name: "TailwindCSS" }],
    image: "/assets/work/thumb2.png",
    live: "www.aradsarl.com",
    github: "",
  },
  {
    num: "03",
    category: "Frontend",
    title: "Site vitrine CIFH International",
    description:
      "Création du site vitrine de CIFH International avec WordPress : pages Accueil, Services, Formations et Contact, intégration de WooCommerce, gestion des cookies et système de paiement en ligne.",
    stack: [{ name: "WordPress" }, { name: "WooCommerce" }],
    image: "/assets/work/thumb5.png",
    live: "https://cifh-inter.org",
    github: "",
  },
  {
    num: "04",
    category: "Frontend",
    title: "Site vitrine pour GUNIVES",
    description:
      "Création d'un site vitrine moderne et performant pour l'entreprise GUNIVES.",
    stack: [{ name: "Next.js" }, { name: "Laravel Filament" }],
    image: "/assets/work/thumb3.png",
    live: "",
    github: "",
  },
  {
    num: "05",
    category: "Portfolio",
    title: "Mon Portfolio",
    description:
      "Développement de mon portfolio personnel pour présenter mes compétences et réalisations.",
    stack: [{ name: "Next.js" }, { name: "TailwindCSS" }],
    image: "/assets/work/thumb4.png",
    live: "",
    github: "",
  },
  {
    num: "06",
    category: "Frontend et Backend",
    title: "Application Webbap - SCAR-SOFT",
    description:
      "Développement d'une application web SaaS permettant aux entreprises européennes (services, vente, etc.) de gérer leurs personnels, clients, devis, factures, notes de crédit et abonnements.",
    stack: [{ name: "Vue.js" }, { name: "Laravel" }, { name: "MySQL" }],
    image: "/assets/work/thumb6.png",
    live: "https://mbcloudlab.com/fr/home",
    github: "",
  },
  {
    num: "07",
    category: "Frontend",
    title: "Site vitrine SCAR-SOFT",
    description:
      "Conception et développement du site vitrine de SCAR-SOFT présentant l'entreprise, ses activités et ses prestations de services.",
    stack: [{ name: "Vue.js" }, { name: "TailwindCSS" }],
    image: "/assets/work/thumb7.png",
    live: "",
    github: "",
  },
  
];


const Work: React.FC = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: { activeIndex: any }) => {
    const currentIndex = swiper.activeIndex;

    setProject(projects[currentIndex]);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flexc  justify-center py-12 lg:px-0 "
    >
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row lg:gap-8 lg:justify-center lg:items-center">
          <div className="w-full lg:w-[50%] lg:h-[460px] flex flex-col lg:justify-between order-2 lg:order-none ">
            <div className="flex flex-col gap-8 h-[50%] ">
              {/* outline run */}
              <div className="text-8xl leading-nonef font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize ">
                {"projet "}{project.category}
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stact */}
              <ul className="flex gap-6">
                {project.stack.map((item, index) => {
                  return (
                    <li className="text-xl text-accent" key={index}>
                      {item.name}
                      {/* remove the last commo */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              <div className="border border-white/20"></div>
              {/* button */}
              <div className="flex items-center gap-4">
                <Link href={project.live} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent " />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* <Link href={project.github} target="_blank">
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent " />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Gihtub repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link> */}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-[50%] ">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="lg:h[520px] mb-12 "
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/10">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="realtive w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt={`Image ${project.category}`}
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slide buttons */}
              <WorkSliderBtns
              containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] lg:bottom-0 z-20 w-full justify-between lg:w-max lg:justify-none"
              btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all "
              iconStyles="" />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Work;
