import Image from 'next/image'
import React from 'react'
// import { IoLogoWhatsapp } from "react-icons/io5";

const Footer = () => {
  return (
    <>
    <footer className='w-full h-[259px] bg-[#F2F2F2] flex flex-col items-center gap-4 pt-8'>
        <div className="flex flex-col">
            <Image src="/img/logo.png" alt='logo' height={50} width={100} className='w-[100px] h-[49px]' />
              <span className="text-[16px] md:text-[20px] font-black">DREAMBOX</span>
              <span className="text-[8px] md:text-[10px] text-center">Creative-Tech Academy</span>
            </div>
            <div className='flex text-[10px] font-bold md:text-[16px] gap-4 md:gap-8'>
                <span>Home</span>
                <span>About</span>
                <span>Programs</span>
                <span>Contact</span>
                <span>Privacy Policy</span>
            </div>
            <div className='flex gap-4 md:gap-8'>
                
           <a href="https://www.npmjs.com/package/react-icons"><Image src="/img/linkedin.png" alt='logo' height={50} width={50} className='w-[24px] h-[24px]' /> </a> 
            <a href="https://www.instagram.com/dreamboxacademy?igsh=bnRxeDYwdDJndncy&utm_source=qr"><Image src="/img/instagram.png" alt='logo' height={50} width={50} className='w-[24px] h-[24px]' /></a>
            <a href="https://x.com/dreamboxacademy?s=21"><Image src="/img/twitter.png" alt='logo' height={50} width={50} className='w-[24px] h-[24px]' /></a>
            <a href="https://www.tiktok.com/@dreamboxacademy?_t=ZS-8zvA3zz6OBt&_r=1"><Image src="/img/tiktok.png" alt='logo' height={50} width={50} className='w-[24px] h-[24px]' /></a>
            {/* <IoLogoWhatsapp  height={50} width={50} className='w-[24px] h-[24px]'/> */}
            <a href="wa.me/2349011822117"><Image src="/img/whatsapp.png" alt='logo' height={50} width={50} className='w-[24px] h-[24px]' /></a>
            </div>
            <div className='text-[10px] flex flex-col '>
                <a href="Buttonsafrotech@gmai.com"><span>dreamboxtechacademy@gmail.com | 09066596603</span></a>
                <span>@2025 Powered by buttons. All Rights Reserved</span>
            </div>
    </footer>
    </>
  )
}

export default Footer
