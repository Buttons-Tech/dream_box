import React from 'react'
import CTA_button1 from './CTA_button1'
import CTA_button2 from './CTA_button2'

const Hero = () => {
  return (
    <>
      <div className='w-[365px] mx-auto my-[24px] '>
        <span className='text-[36px] font-bold '>Unlock Your Child's Future with Creative Tech. </span><br />
        <span className='text-[36px] text-[#A40C76]'>
Coding, Robotics, and Design for the Next Generation of Innovators.</span><br />
        <span className='text-[20px]'>From virtual classrooms to school clubs, we bring fun, hands-on learning right to your doorstep in Lagos.</span>
        <div className='flex flex-col gap-4 w-full items-center md:flex-row md:justify-center mt-8'>
          <CTA_button1 />
          <CTA_button2 />
        </div>
      </div>
    </>
  )
}

export default Hero