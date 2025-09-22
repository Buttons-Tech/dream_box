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
        <span className='text-[36px] font-bold'>Is Your Child Ready for the Future?</span><br />
        <span className='text-[16px] '> At Dreambox, we transform screen time into smart time, turning curiosity into valuable skills. We make learning code, robotics, and design an exciting adventure.</span>
    </div>
    <div className='flex items-center justify-center text-center'>

    <span className='text-[36px] font-bold py-[24px] text-[#A40C76]'>Spark Creativity with OurPrograms</span>
    </div>
   </>
  )
}

export default Programs
