import Image from 'next/image'
import React from 'react'

const Programs = () => {

const program_data = [
    {
        title: "Coding for Kids",
        description: "Build the Future. Our coding classes teach logic, problem-solving, and the foundations of software creation through fun, project-based learning.",
        image: "/img/coding.png"
    },
     {
        title: "Robotics for Kids",
        description: "Bring Ideas to Life. Students learn to build, program, and command real robots, developing critical thinking and engineering skills.",
        image: "/img/robotics.png"
    },
     {
        title: "Creativity & Design for Kids",
        description: "Create with a Purpose. From digital art to app design, we empower students to express their creativity and shape their digital world.",
        image: "/img/design.png"
    }
]

  return (
   <>
    <div className='w-[393px] h-[237px] m-auto px-[25px] text-center py-[17px]  bg-[#FFDBF4]'>
        <span className='text-[36px] font-bold'>Is  <span className='text-[#A40C76]'>Your Child</span> Ready for the Future?</span><br />
        <span className='text-[16px] '> At Dreambox, we transform screen time into smart time, turning curiosity into valuable skills. We make learning code, robotics, and design an exciting adventure.</span>
    </div>
    <div className='flex items-center justify-center text-center'>

    <span className='text-[36px] font-bold py-[24px] text-[#A40C76]'>Spark Creativity with Our Programs</span>
    </div>
    <div className='max-w-[1200px] m-auto '>
        {program_data.map((program, index) => (
            <div
                key={index}
                className={`
                    flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}
                    items-center justify-center my-[24px] md:my-[40px] px-[51px] md:px-[20px] 
                `}
            >
                <Image
                    src={program.image}
                    alt={program.title}
                    width={300}
                    height={200}
                    className="w-[277px] md:w-[300px] md:h-[300px] object-contain mb-[16px] md:mb-0"
                />
                <div className="max-w-full md:max-w-[400px] mx-0 md:mx-[20px] text-center md:text-left">
                    <h2 className="text-[22px] md:text-[28px] font-bold mb-[8px] md:mb-[10px] text-[#A40C76]">
                        {program.title}
                    </h2>
                    <p className="text-[16px] md:text-[16px]   md:px-0 ">
                        {program.description}
                    </p>
                </div>
            </div>
        ))}
    </div>
   </>
  )
}

export default Programs
