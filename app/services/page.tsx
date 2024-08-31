"use client";

import Link from "next/link";
import React from "react";
import { BsArrowDownRight } from "react-icons/bs";

import { motion } from "framer-motion";

const services = [
  {
    num: "01",
    title: "Web Development",
    description: "Building modern and responsive websites tailored to your needs.",
    href: "http://github.com",
  },
  {
    num: "02",
    title: "Mobile Development",
    description: "Creating user-friendly mobile apps for iOS and Android.",
    href: "http://github.com",
  },
  {
    num: "03",
    title: "Logo Design",
    description: "Crafting unique logos that represent your brand identity.",
    href: "http://github.com",
  },
  {
    num: "04",
    title: "Maintenance and Support",
    description: "Providing ongoing support and maintenance for your projects.",
    href: "http://github.com",
  },
];

const Services: React.FC = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 lg:py-0">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {services.map((service, index) => {
            return (
              <div key={index} className="flex-1 flex flex-col justify-center gap-6 group my-5">
                {/* top */}
                <div className="w-full flex justify-between items-center">
                  <div className="text-4xl xl:text-6xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{service.num}</div>
                  <Link href={service.href} className="w-[40px] h-[40px] xl:w-[50px] xl:h-[50px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                    <BsArrowDownRight className="text-primary text-2xl" />
                  </Link>
                </div>
                {/* title */}
                <h2 className="h2 font-bold leading-none text-white group-hover:text-accent transition-all duration-500">{service.title}</h2>
                {/* description */}
                <p className="text-white/60 text-sm">{service.description}</p>
                <div className="border-b border-white/20 w-full"></div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
