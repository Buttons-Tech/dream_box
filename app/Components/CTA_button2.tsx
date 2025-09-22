import Image from 'next/image'
import React from 'react'

const CTA_button2 = () => {
  return (
    <>
    <div className='px-[51px] w-[328px] h-[89px] rounded-full bg-transparent border-2 border-[#A40C76] cursor-pointer hover:bg-[#A40C76] hover:text-white hover:scale-105 transition-all duration-300 ease-in-out flex items-center'>
    <span className='text-[20px] w-[180px] font-semibold flex justify-center items-center h-full'>Let's collabrate</span>
    <Image src="/img/arrow_purple.png" alt='forward logo' width={20} height={20} className='w-[37px] h-[37px]'/>
    </div>
    </>
  )
}

export default CTA_button2
