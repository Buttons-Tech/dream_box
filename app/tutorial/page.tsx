import Image from 'next/image'
import React from 'react'

const page = () => {
  return (
    <>
    <div className='w-100 h-100 bg-purple-300 flex items-center justify-center'>
        
        <Image src="/img/nike.png" alt="tutorial" width={500} height={500}>

        </Image>
    </div>
    <div>
      <span className='text-3xl font-bold'>Nike Running Shoes</span>
      <div>
        <div className='bg-blue-500 text-white p-2'>HUGE</div>
        <div>Black/White</div>
      </div>
      <span>Crossing hardwood floors nkbidfgjlshklajlnsklslajbsnak;sfjnljnklascnbjscbnkjaclscjllb</span>
      <div>
        <span>Price</span>
        <span>$67.45</span>
      </div>
      <button>Add to Cart</button>
    </div>
    </>
  )
}

export default page
