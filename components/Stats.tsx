"use client";

import React from 'react';
import CountUp from "react-countup";

const stats = [
  {
    num: 2,
    text: "Années d'expérience",
  },
  {
    num: 3,
    text: "Projets réalisés",
  },
  {
    num: 4,
    text: "Technologies utilisées",
  },
  {
    num: 50,
    text: "Commits de code",
  },
];

const Stats = () => {
  return (
    <section className='pt-4 pb-12 xl:pt-0 xl:pb-0'>
      <div className="container mx-auto">
        <div className='flex flex-wrap gap-6 max-w-[80vw] xl:max-w-none mx-auto'>
          {stats.map((item, index) => {
            return (
              <div key={index} className="flex-1 flex justify-center xl:justify-start items-center gap-4">
                <div className='flex'>
                  <span>+</span>
                  <CountUp end={item.num} duration={5} delay={2} className='text-3xl lg:text-4xl xl:text-6xl font-extrabold'/>
                </div>
                  
                <p className={`${item.text.length < 25 ? "max-w-[100px]" : "max-w-[150px]"} leading-snug text-white/80`}>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Stats;
