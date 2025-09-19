
import Image from 'next/image'
import React from 'react'

const Nav_bar = () => {
  return (
    <>
    {/* Nav_bar */}
    <div className='w-screen h-[118px] bg-[#]' >
      {/* nav */}
      <div className='w-screen px-[15px] py-[18px]  bg-[#FFA014] flex gap-[10px] items-center' >
        <Image height={50} width={50} alt='menu' src="/menu.png" />
        <div className='flex flex-col '>
          <span className='text-[20px] font-black'>DREAMBOX </span>
          <span className='text-[10px]'>Creative-Tech Academy</span>
        </div>

        <Image src="/Rectangle.png" alt='splash' height={200} width={300} className=' absolute right-0' />
      </div>
    </div>
    </>
  )
}

export default Nav_bar


