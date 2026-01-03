import React from 'react'
import CTA_button1 from './CTA_button1'
import CTA_button2 from './CTA_button2'
import Image from 'next/image'
import Link from 'next/link'

const Hero = () => {
  return (
    <>
        <Image src="/img/hero_img.jpg" alt="Hero Image" width={375} height={300} className='mx-auto mt-8 md:w-screen' />
      <div className='w-[365px] md:w-screen mx-auto my-[24px] text-center '>
        <span className='text-[36px]  font-bold font-outfit'>Unlock Your Child&apos;s Future with Creative Tech. </span><br />
        <span className='text-[20px] text-[#A40C76]'>
Coding, Robotics, Design and Creativity for the Next Generation of Innovators.</span><br />
        {/* <span className='text-[20px]'>From virtual classrooms to school clubs, we bring fun, hands-on learning right to your doorstep in Lagos.</span> */}
        
        <div className='flex flex-col gap-4 w-full items-center md:flex-row md:justify-center mt-8'>
<Link href="/register" className='text-[20px] text-[#A40C76] underline'>
          <CTA_button1 />
          </Link>
          <Link href="/school-dashboard" className='text-[20px] text-[#A40C76] underline'>
          <CTA_button2 />
          </Link>
        </div>
        
      </div>

    </>
  )
}

export default Hero