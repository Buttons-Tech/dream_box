import Image from 'next/image'
import React from 'react'

const CTA_button1 = () => {
  return (
    <>
    <div className='px-[51px] w-[328px] cursor-pointer h-[89px] rounded-full bg-[#A40C76] flex items-center '>
    <span className='text-[20px] text-white font-semibold flex justify-center items-center h-full w-[180px]'>Start the Adventure</span>
    <Image src="/img/arrow_white.png" alt='forward logo' width={20} height={20} className='w-[37px] h-[37px]'/>
    
    </div>
    </>
  )
}

export default CTA_button1
