import Image from 'next/image'
import React from 'react'
import Pampers from '@/public/img/Pampers.png'
import Juilliard from '@/public/img/Juilliard.png'
import Richfield from '@/public/img/Richfield.png'
import Berkley from '@/public/img/Berkley.png'
import Navy from '@/public/img/navy.png'

const Partners = () => {

    const logos: string[] = ["Berkley", "Pampers", "Juilliard", "Richfield"]
  return (
    <>
    {logos.map((logo, i)=>{
        <div>
            <span>HELL</span>
            <Image
                 src={`img/${logo}.png`}
                 alt="Dreambox Student"
                 width={100}
                 height={100}
                 className="relative z-10 object-contain"
                 priority
               />
        </div>


    })}
    <div className='flex justify-between w-full'>

<Image
     src={Pampers}
     alt="Dreambox Student"
     width={100}
     height={100}
     className="relative z-10 object-contain h-[8rem]"
     priority
   />
<Image
     src={Juilliard}
     alt="Dreambox Student"
     width={100}
     height={100}
     className="relative z-10 object-contain"
     priority
   />
<Image
     src={Navy}
     alt="Dreambox Student"
     width={100}
     height={200}
     className="relative z-10 object-contain h-[8rem]"
     priority
   />
<Image
     src={Berkley}
     alt="Dreambox Student"
     width={100}
     height={100}
     className="relative z-10 object-contain"
     priority
   />
<Image
     src={Richfield}
     alt="Dreambox Student"
     width={100}
     height={100}
     className="relative z-10 object-contain"
     priority
   />
    </div>
    </>
  )
}

export default Partners
