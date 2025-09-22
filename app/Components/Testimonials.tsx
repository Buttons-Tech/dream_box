import Image from 'next/image'
import React from 'react'

const Testimonials = () => {
  return (
    <>
    <div className='w-[393px] h-[609px] bg-white flex flex-col m-auto text-center gap-6'>

    <span className='text-[36px] font-bold '>What Our Community is Saying</span>
    <div className='w-[264px] px-[37px] py-[31px] bg-[#FFD5F3] m-auto'>
      <span className='text-[16px]'>&quot;My daughter used to just play games. Now, she&quot;s building her own! The tutor was amazing and so patient.&quot;</span>
      <div className='flex gap-4 mt-4 items-center'>
        <Image src="/img/man.png" alt="testimonial1" width={50} height={50} className='mt-4 rounded-full'/>
        <div className='flex flex-col items-start text-left mt-2 gap-1'>

          <span className='font-bold text-[14px]'>- Tolu A.</span>
          <span className='font-bold text-[#8D8C8C] text-[14px]'>Lekki</span>
        </div>
      </div>
    </div>
    <div className='w-[264px] px-[37px] py-[31px] bg-[#FFD5F3] m-auto '>
      <span className='text-[16px]'>&quot;My daughter used to just play games. Now, she&quot;s building her own! The tutor was amazing and so patient.&quot;</span>
      <div className='flex gap-4 mt-4 items-center'>
        <Image src="/img/girl22.png" alt="testimonial1" width={50} height={50} className='mt-4 rounded-full'/>
        <div className='flex flex-col items-start text-left mt-2 gap-1'>

          <span className='font-bold text-[14px]'>Head of Academics</span>
          <span className='font-bold text-[#8D8C8C] text-[14px]'>Pampers School, Mainland</span>
        </div>
      </div>
    </div>
      </div>
    
    </>
  )
}

export default Testimonials