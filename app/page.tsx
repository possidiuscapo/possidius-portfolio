import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import { FiDownload } from'react-icons/fi'

//component
import Social from "@/components/Social"
import Photo from '@/components/Photo'
import Stats from '@/components/Stats'

const Home = () => {
  return (
    // <section>
    //   <div className="container mx-auto ">
    //     <div className="flex flex-col lg:flex-row items-center justify-between lg:pt-8 lg:pb-10 xl:pt-8 xl:pb-14">
    //       <div className="text-center lg:text-left order-2 lg:order-none">
    //         <span>Delopper</span>
    //         <h1 className="h1 mb-6">
    //           Hello, I&apos;m <br/> <span className='text-accent'>Possidius CAPO-CHICHI</span>
    //         </h1>
    //         <p className='max-w-[600px] mb-9 text-white/80 text-[14px] font-thin'>A passionate full-stack developer specialized in creating robust and high-performance web and mobile applications. My goal is to transform ideas into innovative digital solutions.</p>
    //         <div className='flex flex-col lg:flex-row items-center gap-8'>
    //           <Button variant="outline" size="sm" className='uppercase flex items-center justify-center rounded-xl gap-2'>
    //             <span>CV</span>
    //             <FiDownload className="text-xl"/>
    //           </Button>
    //           <div>
    //             <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
    //           </div>
    //         </div>
    //       </div>

    //       {/* photo */}
    //       <div className='order-1 xl:order-none mb-8 xl:mb-0'>
    //         <Photo />
    //       </div>
    //     </div>
    //   </div>
    //   {/* Stats */}
    //   <Stats />
    // </section>
    <section>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between lg:pt-8 lg:pb-10 xl:pt-8 xl:pb-14">
          <div className="text-center lg:text-left order-2 lg:order-none">
            <span>Développeur</span>
            <h1 className="h1 mb-6">
              Bonjour, je suis <br /> <span className='text-accent'>Possidius CAPO-CHICHI</span>
            </h1>
            <p className='max-w-[600px] mb-9 text-white/80 text-[14px] font-thin'>
              Développeur Web passionné, spécialisé dans la création d’applications web et mobiles robustes et performantes.
              Mon objectif est de transformer des idées en solutions numériques innovantes.
            </p>
            <div className='flex flex-col lg:flex-row items-center gap-8'>
              <a href="/cv/Possidius_CAPO-CHICHI.pdf" download>
                <Button variant="outline" size="sm" className='uppercase flex items-center justify-center rounded-xl gap-2'>
                  <span>Télécharger CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </a>
              <div>
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500" />
              </div>
            </div>
          </div>

          {/* Photo */}
          <div className='order-1 xl:order-none mb-8 xl:mb-0'>
            <Photo />
          </div>
        </div>
      </div>
      {/* Statistiques */}
      <Stats />
    </section>
  )
}

export default Home