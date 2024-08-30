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
    <section>
      <div className="container mx-auto ">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-14">
          <div className="text-center lg:text-left order-2 xl:order-none">
            <span>Delopper</span>
            <h1 className="h1 mb-6">
              Hello, I&apos;m <br/> <span className='text-accent'>Possidius CAPO-CHICHI</span>
            </h1>
            <p className='max-w-[600px] mb-9 text-white/80'>A passionate full-stack developer specialized in creating robust and high-performance web and mobile applications. My goal is to transform ideas into innovative digital solutions.</p>
            <div className='flex flex-col lg:flex-row items-center gap-8'>
              <Button variant="outline" size="lg" className='uppercase flex items-center gap-2'>
                <span>Download CV</span>
                <FiDownload className="text-xl"/>
              </Button>
              <div>
                <Social containerStyles="flex gap-6" iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"/>
              </div>
            </div>
          </div>

          {/* photo */}
          <div className='order-1 xl:order-none mb-8 xl:mb-0'>
            <Photo />
          </div>
        </div>
      </div>
      {/* Stats */}
      <Stats />
    </section>
  )
}

export default Home