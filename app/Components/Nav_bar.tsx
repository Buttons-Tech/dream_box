
import Image from 'next/image'
import React from 'react'

const Nav_bar = () => {
  return (
    <>
      {/* Nav_bar */}
      <div className="w-full h-[80px] md:h-[118px] bg-white">
        {/* nav */}
        <div className="w-full px-4 py-4 md:px-[15px] md:py-[18px] bg-[#FFA014] flex items-center justify-between relative">
          <div className="flex items-center gap-3 md:gap-[10px]">
            <Image height={40} width={40} alt="menu" src="/menu.png" className="md:h-[50px] md:w-[50px]" />
            <div className="flex flex-col">
              <span className="text-[16px] md:text-[20px] font-black">DREAMBOX</span>
              <span className="text-[8px] md:text-[10px]">Creative-Tech Academy</span>
            </div>
          </div>
          <Image
            src="/Rectangle.png"
            alt="splash"
            height={120}
            width={180}
            className="hidden sm:block absolute right-0 top-0 h-[80px] w-[120px] md:h-[118px] md:w-[300px]"
          />
        </div>
      </div>
    </>
  )
}

export default Nav_bar


