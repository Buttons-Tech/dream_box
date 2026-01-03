
import Image from 'next/image';
import React from 'react'

const Howitwork = () => {
  return (
    <div className='w-[393px] h-[596px] bg-[#A40C76] flex flex-col items-center gap-4 pt-8 m-auto md:w-[1272PX] md:h-[596px] '>
      <h2 className='text-[20px] font-bold text-white '>How it works?</h2>
      <span className='bg-[#FFA6E4] h-[42px] w-[238px] text-[20px] font-bold text-[#A40C76] text-center pt-1.5 rounded-[4px] '>It's as Easy as 1, 2, 3!</span>
      <div className=' py-[5px] md:flex md:gap-30 md:justify-center  md:m-auto md:items-center  '>
      <div className='w-[233px] h-[118px] flex gap-4 '>
        <div className='bg-[#F5F5F5] w-[90px] md:w-[200px] text-center font-bold text-[#A40C76] text-[16px] rounded-full h-[25px]'>1</div>
        <div className=''>
          <div className='flex gap-2'>
        <span className='font-bold text-[20px] md:text-[25px] text-white '>Discover:</span>
        <Image src="/img/screen.png" alt="logo" height={50} width={50} className='w-[29px] h-[29px] md:h-[60px] md:w-[60px]'/>
          </div>
        <span className='font-bold text-[11px] md:text-[20px] text-white '>Explore our programs and select the one that best fits your child's passion. Tell us where you are, and we'll handle the rest Assessment.</span>
        </div>
      </div>
      <div className='w-[233px] h-[118px] flex gap-4 pt-[12px]'>
        <div className='bg-[#F5F5F5] w-[55px] text-center font-bold text-[#A40C76] text-[16px] rounded-full h-[25px]'>2</div>
        <div className=''>
          <div className='flex gap-2'>
        <span className='font-bold text-[20px] md:text-[25px] text-white '>Enroll:</span>
        <Image src="/img/clipboard.png" alt="logo" height={50} width={50} className='w-[29px] h-[29px]'/>
          </div>
        <span className='font-bold text-[11px] md:text-[20px] text-white flex-col '>Securely sign up on our platform and complete your payment in a few simple clicks.</span>
        </div>
      </div>
      <div className='w-[233px] h-[118px] flex gap-4 pt-[10px]'>
        <div className='bg-[#F5F5F5] w-[65px] text-center font-bold text-[#A40C76] text-[16px] rounded-full h-[25px]'>3</div>
        <div className=''>
          <div className='flex gap-2'>
        <span className='font-bold text-[20px] md:text-[25px] text-white '>Thrive:</span>
        <Image src="/img/robot.png" alt="logo" height={50} width={50} className='w-[45px] h-[30px] '/>
          </div>
        <span className='font-bold text-[11px] md:text-[20px] text-white '>Watch your child's confidence grow as they start building, coding, and creating with their Dreambox tutor.</span>
        </div>
      </div>
      </div>
      <button className='w-[220px] h-[48px] rounded-[4px] bg-gradient-to-r from-[#FFE0F6] to-[#FFA6E4] text-[14px] font-bold text-[#A40C76] md:text-[20px] md:mb-15 '>Register now!</button>
    </div>
  )
}

export default Howitwork;
